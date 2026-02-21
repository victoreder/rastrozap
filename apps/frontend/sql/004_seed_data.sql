-- Seed initial data

-- Insert default plans
insert into planos (name, price, leads_per_day, currency) values
  ('Starter', 97.00, 500, 'BRL')
on conflict do nothing;

-- Insert initial journey stages
-- (Additional stages are created automatically via trigger)

