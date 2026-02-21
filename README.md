# 🎯 RastroZap — WhatsApp Lead Tracking Platform

A precision lead tracking platform for traffic managers and agencies. Track WhatsApp leads invisibly, manage stages, and automate journey workflows.

## 📊 MVP Features

- **Invisible Click Tracking:** Embed clickIds in WhatsApp links without visible distraction
- **Stage Management:** Move leads through custom stages based on keywords
- **Auto-Journey:** Keywords trigger stage transitions automatically
- **Lead Analytics:** View leads by stage, response times, conversion rates
- **Team Collaboration:** Assign leads to team members
- **Meta Pixel Integration:** Track conversions back to Facebook/Instagram

## 🏗️ Architecture

Monorepo with npm workspaces + Turborepo:
- **apps/frontend** — Next.js 15 (React 19, TypeScript 5.7)
- **apps/backend** — Node.js (future)
- **packages/tipos-compartilhados** — Shared TypeScript types

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18.17.0
- npm ≥ 9.0.0

### Installation

```bash
# Clone repository
git clone https://github.com/victoreder/rastrozap.git
cd rastrozap

# Install all dependencies (across workspaces)
npm install

# Copy environment variables
cp .env.example .env.local

# Start development
npm run dev
```

### Environment Variables

See `.env.example` for all required variables:
- `SUPABASE_URL` — Supabase project URL
- `SUPABASE_ANON_KEY` — Public API key
- `NEXT_PUBLIC_SUPABASE_URL` — Frontend Supabase URL
- `UAZAPI_URL` / `UAZAPI_WEBHOOK_SECRET` — WhatsApp API
- `META_PIXEL_ID` — Facebook Pixel for conversion tracking

## 📦 Workspaces

### Frontend (`apps/frontend`)
Next.js 15 app with:
- SSR for Supabase auth
- Tailwind CSS (#014FBB primary)
- Recharts for analytics
- Multi-tenancy by `conta_id`

**Start:** `npm run dev`

### Backend (`apps/backend`)
Node.js server (TBD):
- Webhook handlers (UazAPI)
- Lead tracking logic
- Journey automation

### Shared Types (`packages/tipos-compartilhados`)
TypeScript type definitions:
- Database schema types
- API contracts
- Shared utilities

## 🔧 Development

### Scripts

```bash
# All workspaces
npm run dev         # Start development
npm run build       # Build all packages
npm run lint        # Lint all packages
npm run typecheck   # TypeScript check
npm run test        # Run all tests
npm run format      # Format code
npm run clean       # Remove build artifacts
```

### Git Workflow

1. Create feature branch: `git checkout -b feature/xyz`
2. Commit changes: `git commit -m "feat: xyz [Story X.X.X]"`
3. Push to remote: `git push origin feature/xyz`
4. Create pull request on GitHub

### Code Standards

- **No emoji** — Always use SVG inline icons
- **TypeScript strict mode** — All files must be `.ts` or `.tsx`
- **Tests** — Write tests for new features
- **Lint & typecheck** — Must pass before commit

## 📖 Documentation

- **PRD:** `docs/prd.md`
- **Development Stories:** `docs/stories/`
- **Wireframes:** `outputs/ux-research/rastrozap/wireframes-complete.md`
- **Dev Rules:** `.claude/CLAUDE.md`

## 🎯 MVP Goals

- **Performance:** Dashboard <2s load, webhook processing <1s, click tracking <100ms
- **Capacity:** 500 leads/day
- **Pricing:** R$97/month
- **Launch:** Q1 2026

## 📋 Project Status

**Iteration 1 (2026-02-20 → present)**
- ✅ PRD created (73 functional reqs, 12 non-functional)
- ✅ Architecture designed (Epic 1: Foundation & Auth)
- ✅ Design system & wireframes (9 pages MVP)
- 🔄 Implementation phase starting (Story 1.1: Monorepo)

## 📞 Support

- **Issues:** GitHub Issues
- **Discussions:** GitHub Discussions
- **Email:** support@rastrozap.com

---

**Built with ❤️ using Next.js, Supabase, and Tailwind CSS**

© 2026 RastroZap. All rights reserved.
