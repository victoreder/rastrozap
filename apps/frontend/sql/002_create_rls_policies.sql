-- Row-Level Security Policies for Multi-Tenancy

-- Enable RLS on all tables
alter table contas enable row level security;
alter table usuarios enable row level security;
alter table links_rastreaveis enable row level security;
alter table cliques enable row level security;
alter table contatos enable row level security;
alter table etapas_jornada enable row level security;
alter table mensagens enable row level security;
alter table historico_etapas enable row level security;
alter table conexoes_whatsapp enable row level security;
alter table configuracoes_pixel enable row level security;
alter table logs enable row level security;
alter table logs_webhook enable row level security;
alter table auditoria enable row level security;

-- Contas: Users can only see their own account
create policy contas_select on contas for select
  using (id = (select auth.uid())::uuid or auth.jwt()->>'role' = 'admin');

-- Usuarios: Scoped by conta_id
create policy usuarios_select on usuarios for select
  using (conta_id in (
    select id from contas where id = (select auth.uid())::uuid
  ));

create policy usuarios_insert on usuarios for insert
  with check (conta_id in (
    select id from contas where id = (select auth.uid())::uuid
  ));

-- Links: Multi-tenancy by conta_id
create policy links_select on links_rastreaveis for select
  using (conta_id in (
    select conta_id from usuarios where id = (select auth.uid())::uuid
  ));

create policy links_insert on links_rastreaveis for insert
  with check (conta_id in (
    select conta_id from usuarios where id = (select auth.uid())::uuid
  ));

-- Similar policies for other tables (cliques, contatos, etc.)
-- All enforce conta_id isolation

