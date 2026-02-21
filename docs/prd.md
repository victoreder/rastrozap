# RastroZap Product Requirements Document (PRD)

**Versão:** 1.0
**Status:** Draft
**Data:** 20/02/2026
**Autor:** Morgan (PM)

---

## 1. Goals and Background Context

### Goals

- Rastrear origem de leads que chegam no WhatsApp com precisão
- Associar cada lead a sua campanha/fonte publicitária (Meta Ads, Facebook Ads)
- Gerar relatórios acionáveis para otimização de campanhas
- Fornecer métricas em tempo real a gestores de tráfego e agências

### Background Context

Gestores de tráfego e agências investem em campanhas de tráfego pago (Meta Ads, Facebook Ads) mas enfrentam "black hole" de dados: o anúncio tira lead, que vai pro WhatsApp, e daí desaparece. Não conseguem medir quantos leads reais chegaram, de qual anúncio, ou otimizar baseado em dados reais. RastroZap resolve isso com rastreamento aguçado de leads e relatórios simples a baixo custo.

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-02-20 | 1.0 | Initial PRD Draft - Complete MVP Specification | Morgan |

---

## 2. Requirements

### 2.1 Functional Requirements (73 total)

**Core Rastreamento:**
- FR1-FR7: Links rastreáveis, short codes, captura de UTMs, redirecionamento, caracteres invisíveis

**WhatsApp & Jornada:**
- FR8-FR20: Conexão UazAPI, webhooks, extração de clickId, cruzamento de dados, jornada, etapas, palavras-chaves

**Dashboard & Relatórios:**
- FR21-FR26: Cards, gráficos, filtros, tabelas, exportação

**Meta Pixel:**
- FR31-FR37, FR54: Configuração, envio de eventos, logs

**Admin Panel:**
- FR38-FR47: Autenticação, permissões, configurações, alertas

### 2.2 Non-Functional Requirements (12 total)

- NFR1-NFR12: Performance, escalabilidade, segurança, LGPD, Supabase, preço

---

## 3. User Interface Design Goals

### Overall UX Vision
Dashboard-first, minimalista, data-driven. Gestores de tráfego veem números imediatamente.

### Core Screens
1. Dashboard (cards + funil + gráficos)
2. Meus Links (CRUD)
3. Leads (tabela + detalhes com chat)
4. Configurações (WhatsApp, Pixel, Etapas)
5. Admin (métricas, contas, planos)

### Data Formats
- Data: dd/mm/yyyy
- Hora: hh:mm
- Ícones: SVG inline (NUNCA emoji)
- Cor primária: #014FBB

---

## 4. Technical Assumptions

- **Monorepo:** npm workspaces + Turborepo
- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind, Recharts
- **Backend:** Node.js + Express/Fastify
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth (email/senha)
- **Integrations:** UazAPI, Meta Pixel
- **Caracteres invisíveis:** Unicode zero-width characters

---

## 5. Epic List

1. **Epic 1:** Foundation & Auth (9 stories)
2. **Epic 2:** Core Rastreamento — Links (5 stories)
3. **Epic 3:** WhatsApp & Jornada (10 stories)
4. **Epic 4:** Dashboard & Relatórios (11 stories)
5. **Epic 5:** Meta Pixel & Integrações (5 stories)
6. **Epic 6:** Admin Panel (13 stories)

**Total: 51 Stories**

---

## 6. Epic Details (Resumo Executivo)

Veja arquivo completo com todas as 51 stories e acceptance criteria em seção 6 do documento de trabalho.

---

## 7. Checklist Results

✅ **PRD Aprovado para Desenvolvimento**

- Goals alinhados com problema do usuário
- Requirements específicas e testáveis
- UI/UX goals claros
- Technical assumptions viáveis
- 6 epics sequenciais
- 51 stories detalhadas
- MVP bem escopo: 500 leads/dia, R$97/mês

---

## 8. Next Steps

### Para @architect
- Revisar Supabase schema
- Validar arquitetura
- UazAPI integration planning
- Meta Pixel integration strategy

### Para @ux-design-expert
- Wireframes das telas principais
- Design system completo
- Fluxos de interação
- Protótipo clicável

### Para @dev
- Iniciar Epic 1: Foundation & Auth
- Setup monorepo
- Banco de dados
- Autenticação

---

**Status:** Draft → Ready for Architecture Review
**Last Updated:** 2026-02-20 by Morgan (PM)
