create extension if not exists pgcrypto;

create table if not exists public.launch_leads (
  id uuid primary key default gen_random_uuid(),
  lead_type text not null check (lead_type in ('user', 'business', 'partner')),
  email text not null,
  name text,
  business_name text,
  commune text,
  whatsapp text,
  company text,
  role text,
  message text,
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'archived')),
  source text not null default 'landing',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists launch_leads_unique_email_per_type_idx
  on public.launch_leads (lead_type, lower(email));

create index if not exists launch_leads_status_idx
  on public.launch_leads (status);

create index if not exists launch_leads_created_at_idx
  on public.launch_leads (created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_launch_leads_updated_at on public.launch_leads;

create trigger trg_launch_leads_updated_at
before update on public.launch_leads
for each row
execute function public.set_updated_at();

create or replace view public.waitlist_users as
select *
from public.launch_leads
where lead_type = 'user';

create or replace view public.waitlist_businesses as
select *
from public.launch_leads
where lead_type = 'business';

create or replace view public.waitlist_partners as
select *
from public.launch_leads
where lead_type = 'partner';
