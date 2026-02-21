-- RastroZap Database Schema

-- Enable extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- 1. Contas (Organizations/Accounts)
create table if not exists contas (
  id uuid primary key default uuid_generate_v4(),
  name varchar(255) not null,
  email varchar(255) not null unique,
  status varchar(50) default 'active',
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- 2. Usuarios (Users)
create table if not exists usuarios (
  id uuid primary key default uuid_generate_v4(),
  conta_id uuid not null references contas(id) on delete cascade,
  email varchar(255) not null,
  name varchar(255),
  role varchar(50) default 'user',
  created_at timestamp default now(),
  updated_at timestamp default now(),
  unique(conta_id, email)
);

-- 3. Links Rastreaveis (Trackable Links)
create table if not exists links_rastreaveis (
  id uuid primary key default uuid_generate_v4(),
  conta_id uuid not null references contas(id) on delete cascade,
  name varchar(255) not null,
  description text,
  short_code varchar(20) unique,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- 4. Cliques (Click Tracking)
create table if not exists cliques (
  id uuid primary key default uuid_generate_v4(),
  conta_id uuid not null references contas(id) on delete cascade,
  link_id uuid not null references links_rastreaveis(id) on delete cascade,
  click_id varchar(50),
  ip_address varchar(45),
  user_agent text,
  timestamp timestamp default now(),
  created_at timestamp default now()
);

-- 5. Contatos (Leads/Contacts)
create table if not exists contatos (
  id uuid primary key default uuid_generate_v4(),
  conta_id uuid not null references contas(id) on delete cascade,
  name varchar(255),
  phone varchar(20),
  email varchar(255),
  stage_id uuid,
  source varchar(100),
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- 6. Etapas Jornada (Journey Stages)
create table if not exists etapas_jornada (
  id uuid primary key default uuid_generate_v4(),
  conta_id uuid not null references contas(id) on delete cascade,
  name varchar(255) not null,
  description text,
  order_position int,
  created_at timestamp default now(),
  updated_at timestamp default now(),
  unique(conta_id, name)
);

-- 7. Mensagens (Messages)
create table if not exists mensagens (
  id uuid primary key default uuid_generate_v4(),
  conta_id uuid not null references contas(id) on delete cascade,
  contact_id uuid references contatos(id) on delete cascade,
  content text not null,
  direction varchar(20),
  status varchar(50),
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- 8. Historico Etapas (Stage History)
create table if not exists historico_etapas (
  id uuid primary key default uuid_generate_v4(),
  conta_id uuid not null references contas(id) on delete cascade,
  contact_id uuid references contatos(id) on delete cascade,
  from_stage_id uuid,
  to_stage_id uuid,
  trigger_keyword varchar(255),
  created_at timestamp default now()
);

-- 9. Conexoes WhatsApp
create table if not exists conexoes_whatsapp (
  id uuid primary key default uuid_generate_v4(),
  conta_id uuid not null references contas(id) on delete cascade,
  phone varchar(20) not null,
  webhook_secret varchar(255),
  status varchar(50) default 'pending',
  created_at timestamp default now(),
  updated_at timestamp default now(),
  unique(conta_id, phone)
);

-- 10. Configuracoes Pixel (Meta Pixel)
create table if not exists configuracoes_pixel (
  id uuid primary key default uuid_generate_v4(),
  conta_id uuid not null references contas(id) on delete cascade,
  pixel_id varchar(255) not null,
  access_token varchar(255),
  status varchar(50) default 'active',
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- 11. Logs
create table if not exists logs (
  id uuid primary key default uuid_generate_v4(),
  conta_id uuid not null references contas(id) on delete cascade,
  level varchar(20),
  message text,
  metadata jsonb,
  created_at timestamp default now()
);

-- 12. Logs Webhook
create table if not exists logs_webhook (
  id uuid primary key default uuid_generate_v4(),
  conta_id uuid not null references contas(id) on delete cascade,
  event_type varchar(100),
  payload jsonb,
  status varchar(50),
  created_at timestamp default now()
);

-- 13. Planos (Pricing Plans)
create table if not exists planos (
  id uuid primary key default uuid_generate_v4(),
  name varchar(255) not null,
  price numeric(10, 2),
  leads_per_day int,
  currency varchar(3) default 'BRL',
  created_at timestamp default now()
);

-- 14. Auditoria (Audit Trail)
create table if not exists auditoria (
  id uuid primary key default uuid_generate_v4(),
  conta_id uuid not null references contas(id) on delete cascade,
  user_id uuid references usuarios(id) on delete set null,
  action varchar(100),
  table_name varchar(100),
  record_id uuid,
  changes jsonb,
  created_at timestamp default now()
);

-- Create indexes for performance
create index if not exists idx_usuarios_conta on usuarios(conta_id);
create index if not exists idx_links_conta on links_rastreaveis(conta_id);
create index if not exists idx_cliques_conta on cliques(conta_id);
create index if not exists idx_contatos_conta on contatos(conta_id);
create index if not exists idx_contatos_stage on contatos(stage_id);
create index if not exists idx_etapas_conta on etapas_jornada(conta_id);
create index if not exists idx_mensagens_conta on mensagens(conta_id);
create index if not exists idx_historico_conta on historico_etapas(conta_id);
create index if not exists idx_logs_conta on logs(conta_id);
create index if not exists idx_logs_webhook_conta on logs_webhook(conta_id);
create index if not exists idx_auditoria_conta on auditoria(conta_id);

echo "✅ DDL created"
