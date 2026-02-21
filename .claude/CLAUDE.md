# RastroZap Development Rules

## Synkra AIOS Framework Integration

You are working with **Synkra AIOS**, an AI-Orchestrated System for Full Stack Development.

### Agent Activation
- Agents: @dev, @qa, @architect, @pm, @po, @sm, @analyst
- Master: @aios-master
- Commands: *help, *create-story, *task, *exit

### Story-Driven Development
1. Work from stories in `docs/stories/`
2. Update progress: [ ] → [x]
3. Track changes in File List
4. Follow acceptance criteria exactly

### Git & GitHub
- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`
- Reference story: `feat: implement [Story 1.1]`
- Atomic, focused commits

---

## RastroZap Stack & Architecture

### Tech Stack
- **Frontend:** Next.js 15 (App Router), React 19, TypeScript 5.7
- **Backend:** Node.js + Express/Fastify
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth (email + password)
- **UI:** Tailwind CSS 3.4, Recharts
- **Integrations:** UazAPI (WhatsApp), Meta Pixel
- **Package Manager:** npm workspaces + Turborepo

### Project Structure
```
RastroZap/
├── apps/
│   ├── frontend/          # Next.js 15
│   └── backend/           # Node.js (future)
├── packages/
│   └── tipos-compartilhados/  # Shared types
├── docs/
│   ├── prd.md
│   └── stories/
└── .claude/
    └── CLAUDE.md
```

---

## Critical Files

- `apps/frontend/tailwind.config.ts` — Primary color: #014FBB
- `apps/frontend/src/app/globals.css` — Base styles
- `apps/frontend/src/lib/supabase/client.ts` — Browser client
- `packages/tipos-compartilhados/src/database.ts` — DB types

### Database (Supabase PostgreSQL)
- 14 tables with `conta_id` for multi-tenancy
- RLS policies enforce isolation
- Triggers for timestamps and auto-creation

### Supabase Types Pattern
⚠️ **IMPORTANT:** Don't use `<Database>` generic. Use:
```typescript
const { data } = (await supabase.from('table').select('*')) as unknown as MyType[];
```

---

## Code Standards

### Style Rules
- **NEVER emoji** in code → Always SVG inline
- No emoji in UI interface at all

### Naming
- Functions/Variables: camelCase
- Components: PascalCase
- Types: PascalCase
- Constants: UPPER_SNAKE_CASE
- DB columns: snake_case

### TypeScript
- Strict mode
- Avoid `any` (use `as unknown as Type` for Supabase)
- Define interfaces
- Type guards for narrowing

### Components
Location: `apps/frontend/src/components/`
- Structured, typed
- Proper error handling
- No silent failures

---

## Design System

### Colors
- Primary: #014FBB
- Success: #10b981
- Danger: #ef4444
- Warning: #f59e0b
- Neutral: #6b7280

### Typography
- Font: Inter (Google Fonts)
- UI components: `src/components/ui/`

### Icons
- Always SVG inline
- NEVER emoji
- Tailwind sizing/coloring

---

## Routes

### Public
- `/login` — Login
- `/registro` — Register
- `/esqueci-senha` — Forgot password

### Protected App
- `/app/dashboard` — Main dashboard
- `/app/links` — Manage links
- `/app/leads` — View leads
- `/app/configuracoes` — Settings

### Admin (Super Admin)
- `/admin/dashboard` — Metrics
- `/admin/contas` — Manage accounts
- `/admin/planos` — Manage plans

---

## Database Tables

Core: contas, usuarios, links_rastreaveis, cliques, contatos, etapas_jornada, mensagens, historico_etapas, conexoes_whatsapp, configuracoes_pixel, logs

- Multi-tenancy: `conta_id` on all tables
- RLS: enforce `conta_id` isolation
- Triggers: auto-create "Contato" stage

---

## API Integrations

### UazAPI (WhatsApp)
- QR code connection
- Webhook: `POST /api/webhook/uazapi`
- Validate secret, extract clickId
- Retry 3x with backoff

### Meta Pixel
- Send: Lead, Purchase, etc.
- Use Conversions API (server-side)
- Send on conversion stage with value

---

## Workflow

### Before Starting
1. Read story fully
2. Review AC
3. Check dependencies
4. `npm run dev`

### During Development
1. Feature branch
2. Implement per AC
3. Test: `npm run dev`
4. Lint: `npm run lint`
5. Type: `npm run typecheck`
6. Commit: `feat: [Story X.X]`

### Quality
- No console.log in prod
- No unused code
- Error handling
- Typed components
- Test utilities/hooks

---

## Rules

### MUST DO
✅ Follow AC exactly
✅ TypeScript safety
✅ Test before commit
✅ Reference story ID
✅ Maintain `conta_id` isolation
✅ SVG icons, NO emoji

### NEVER DO
❌ Add beyond AC
❌ Emoji in code/UI
❌ Break multi-tenancy
❌ Commit without lint
❌ Use `any` without reason
❌ TODO without context

---

## Goals

- Dashboard: < 2s load
- Webhooks: < 1s processing
- Clicks: < 100ms tracking
- Updates: < 5min latency
- Support: 500 leads/day

---

## Resources

- PRD: `docs/prd.md`
- Stories: `docs/stories/`
- Supabase: https://supabase.com/docs
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- Tailwind: https://tailwindcss.com/docs

---

**Last Updated:** 2026-02-20
**Maintained by:** Morgan (PM) + Development Team
