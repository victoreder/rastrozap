-- Triggers for automatic timestamps and stage creation

-- Updated_at trigger function
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Auto-create "Contato" stage when account is created
create or replace function auto_create_contato_stage()
returns trigger as $$
begin
  insert into etapas_jornada (conta_id, name, description, order_position)
  values (new.id, 'Contato', 'Initial contact stage', 1)
  on conflict do nothing;
  return new;
end;
$$ language plpgsql;

-- Apply updated_at trigger to all tables
create trigger update_contas_updated_at before update on contas
  for each row execute function update_updated_at_column();

create trigger update_usuarios_updated_at before update on usuarios
  for each row execute function update_updated_at_column();

create trigger update_links_updated_at before update on links_rastreaveis
  for each row execute function update_updated_at_column();

create trigger update_contatos_updated_at before update on contatos
  for each row execute function update_updated_at_column();

create trigger update_etapas_updated_at before update on etapas_jornada
  for each row execute function update_updated_at_column();

create trigger update_conexoes_whatsapp_updated_at before update on conexoes_whatsapp
  for each row execute function update_updated_at_column();

-- Auto-create Contato stage
create trigger auto_create_stage after insert on contas
  for each row execute function auto_create_contato_stage();

