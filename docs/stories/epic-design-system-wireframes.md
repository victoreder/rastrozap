# Epic: Design System & Wireframes

**Epic ID:** DESIGN-0
**Status:** Draft
**Created:** 2026-02-20
**Owner:** PM (Morgan)
**Priority:** High (Blockers for Epic 1 Implementation)

---

## Overview

This epic delivers the complete design system, wireframes, and interaction specifications for RastroZap MVP. All deliverables feed directly into Epic 1 (Foundation & Auth) implementation stories.

**Goal:** Provide a cohesive, production-ready design specification that enables @dev to implement Epic 1 stories with visual and interaction clarity.

---

## Business Value

- **Fast Development:** Wireframes eliminate ambiguity, reducing rework during implementation
- **Consistent UI:** Design system ensures all pages follow unified patterns (Tailwind #014FBB)
- **Better UX:** Interaction flows define user journeys before code, improving usability
- **Mobile-First:** Responsive guidelines ensure RastroZap works on all devices (crucial for traffic managers on mobile)

---

## Scope

### IN
- Design system (colors, typography, spacing, icons, components)
- Wireframes for all 7 MVP pages
- Component design specifications
- User interaction flows and journeys
- Responsive design guidelines (mobile-first)
- Design documentation (Figma/design files reference)

### OUT
- High-fidelity mockups (wireframes only)
- Brand guidelines beyond what's in CLAUDE.md
- Animation specifications
- Copy/content (handled by product/marketing)
- Implementation code (that's Epic 1)

---

## User Stories (Deliverables)

### DESIGN-0.1: Design System
**Title:** Create Design System (Colors, Typography, Spacing, Icons)

**Description:**
Define the complete visual foundation for RastroZap, ensuring consistency across all pages. Must align with primary color #014FBB and Tailwind CSS constraints documented in CLAUDE.md.

**Acceptance Criteria:**
- [ ] Color palette defined (primary, secondary, semantic colors)
- [ ] Typography hierarchy documented (font sizes, weights, line-heights)
- [ ] Spacing scale defined (margin, padding, gap values)
- [ ] Icon library cataloged (all SVG icons required, NO emoji per CLAUDE.md)
- [ ] Component design specs created (12 base components from @architect design)
- [ ] Dark/light mode variants specified (if supported)
- [ ] Tailwind CSS classes mapped to design tokens
- [ ] Design system exported to Figma or design tool format

**Scope:**
- Colors: Primary (#014FBB), Success (#10b981), Danger (#ef4444), Warning (#f59e0b), Neutral (#6b7280)
- Typography: Inter font with sizes 12px–48px and weights 400, 500, 600, 700
- Spacing: 4px base unit grid (4, 8, 12, 16, 20, 24, 32, 40, 48, etc.)
- Icons: 20+ SVG icons (chevron, arrow, menu, close, check, search, settings, etc.)

**Dependencies:** None (foundational)
**Complexity:** Medium (3-4 days)
**Story Points:** 5

---

### DESIGN-0.2: Wireframes for All Pages
**Title:** Create Wireframes for 7 MVP Pages

**Description:**
Wireframe all pages identified in Epic 1, showing layout, content hierarchy, navigation, and user interactions. Use consistent design system.

**Acceptance Criteria:**
- [ ] Landing page wireframe (hero, value props, CTA)
- [ ] Login page wireframe (email/password form, error states, link to register)
- [ ] Register page wireframe (email, password, password confirm, terms, CTA)
- [ ] Dashboard page wireframe (header, sidebar, metrics cards, recent activity)
- [ ] Links management page wireframe (list table, create button, edit/delete actions)
- [ ] Settings page wireframe (account, profile, billing, integrations)
- [ ] Contacts page wireframe (table, search, filters, export options)
- [ ] Journey stages page wireframe (stage cards, add/edit/delete)

**Scope per wireframe:**
- Layout grid (full width, sidebar + content, modular sections)
- Component hierarchy (buttons, inputs, cards, tables, forms)
- States (default, hover, active, disabled, loading, error)
- Mobile breakpoints (responsive behavior at 375px, 768px, 1024px, 1440px)
- Annotations for developer clarity (spacing, sizes, behaviors)

**Wireframe Format:**
- Figma file (preferred) OR Excalidraw/web-based tool
- Include desktop (1440px) and mobile (375px) viewports
- Annotated with component names and spacing
- Exported as images + PDF for reference

**Dependencies:** DESIGN-0.1 (Design System)
**Complexity:** High (4-5 days)
**Story Points:** 8

---

### DESIGN-0.3: Component Design Specifications
**Title:** Define Design Specs for 12 Base Components

**Description:**
Detailed specification for each base component: button, input, card, table, form, modal, sidebar, header, navbar, dropdown, pagination, badge.

**Acceptance Criteria:**
- [ ] Button component: all variants (primary, secondary, danger, outline), sizes, states
- [ ] Input component: text, email, password, select, checkbox, radio, textarea
- [ ] Card component: basic, with header/footer, image card, interactive card
- [ ] Table component: header styles, row states, pagination, empty state
- [ ] Form component: multi-field layout, validation states, messaging
- [ ] Modal component: basic, with header/footer, close behavior
- [ ] Sidebar component: collapsed/expanded states, navigation, indicators
- [ ] Header component: logo placement, user menu, search bar
- [ ] Navbar component: primary navigation, mobile hamburger menu
- [ ] Dropdown component: menu items, keyboard navigation, positioning
- [ ] Pagination component: page numbers, prev/next, disabled states
- [ ] Badge component: color variants, sizes, usage contexts

**Per Component:**
- Figma component or detailed visual spec
- Dimensions and spacing
- Color variants (primary, secondary, danger, success, warning, neutral)
- Typography (size, weight, color)
- Interactive states
- Accessibility notes (focus states, ARIA)

**Dependencies:** DESIGN-0.1 (Design System)
**Complexity:** Medium (3-4 days)
**Story Points:** 5

---

### DESIGN-0.4: Interaction Flows & User Journeys
**Title:** Document User Interaction Flows and Journey Maps

**Description:**
Map out the key user journeys and interactions for RastroZap MVP.

**Acceptance Criteria:**
- [ ] Signup flow diagram (steps, decision points, error handling)
- [ ] Login flow diagram (with "forgot password" branch)
- [ ] Create trackable link flow (dashboard → links page → create → link → share)
- [ ] Lead tracking flow (WhatsApp click → invisible clickId → lead created)
- [ ] Journey automation flow (lead moves through stages based on keywords)
- [ ] Settings/integration flow (WhatsApp connection, Meta Pixel setup)
- [ ] Mobile-specific interactions documented

**Format:**
- Flow diagrams (Miro, Figma, or Excalidraw)
- Annotations for conditional branches, error states, system responses
- User mental model documented
- Timing/latency expectations noted

**Dependencies:** DESIGN-0.2 (Wireframes)
**Complexity:** Medium (2-3 days)
**Story Points:** 3

---

### DESIGN-0.5: Responsive Design Guidelines
**Title:** Define Responsive Design Rules and Mobile-First Approach

**Description:**
Establish responsive breakpoints, mobile-first design principles, touch target sizes, and layout adaptations.

**Acceptance Criteria:**
- [ ] Breakpoints defined (mobile: 375px, tablet: 768px, desktop: 1024px, large: 1440px)
- [ ] Mobile-first design approach documented
- [ ] Touch target sizes specified (minimum 44x44px per WCAG)
- [ ] Layout adaptations per breakpoint (single → two → three column)
- [ ] Image responsiveness strategy (max-width, aspect ratios, retina)
- [ ] Typography scaling rules (font sizes adapt per breakpoint)
- [ ] Navigation adaptations (desktop menu → mobile hamburger)
- [ ] Form layout responsive rules
- [ ] Performance guidelines (lazy loading, viewport)
- [ ] Testing devices/browsers specified

**Documentation Format:**
- Guidelines document (Markdown or Figma)
- Responsive examples for key pages (desktop, tablet, mobile)
- CSS/Tailwind breakpoint mapping (sm, md, lg, xl, 2xl)

**Dependencies:** DESIGN-0.2 (Wireframes), DESIGN-0.1 (Design System)
**Complexity:** Low (1-2 days)
**Story Points:** 2

---

## Delivery Timeline

| Story | Complexity | Days | Owner |
|-------|-----------|------|-------|
| DESIGN-0.1 | Medium | 3-4 | Design |
| DESIGN-0.2 | High | 4-5 | Design |
| DESIGN-0.3 | Medium | 3-4 | Design |
| DESIGN-0.4 | Medium | 2-3 | Design |
| DESIGN-0.5 | Low | 1-2 | Design |
| **TOTAL** | — | **13-18 days** | — |

**Sequential Path (Recommended):**
DESIGN-0.1 → DESIGN-0.2 → (DESIGN-0.3, DESIGN-0.4, DESIGN-0.5 in parallel) → Delivery

**Fast Track (Parallel):**
DESIGN-0.1 (3 days) → (DESIGN-0.2 + DESIGN-0.3 + DESIGN-0.4 + DESIGN-0.5 in parallel, 5 days) → ~8 days total

---

## Success Metrics

- [ ] All wireframes approved by PM (design completeness)
- [ ] Design system adoption: 100% of Epic 1 pages use design system components
- [ ] Responsive testing: all pages work at 375px, 768px, 1440px
- [ ] No rework needed during Epic 1 implementation (design clarity)
- [ ] Dev team reports confidence in implementing from wireframes

---

## Risks & Dependencies

**Risks:**
- Late design decisions causing Epic 1 delays → mitigate: freeze design system early
- Mobile responsiveness overlooked → mitigate: test on real devices during design
- Design system not used by @dev → mitigate: embed design tokens in Tailwind config

**Dependencies:**
- @architect's Epic 1 architecture (✅ complete)
- Figma/design tool access (assumed available)
- Design feedback/approval loop with stakeholders (PM responsibility)

---

## Next Steps

1. **Assign Designer** → Assign to UX/Design professional or AI design assistant
2. **Create Figma Project** → Set up design workspace with team
3. **Kick-off Workshop** → Review Epic 1 requirements, discuss design direction
4. **Design Iteration** → Deliver DESIGN-0.1 → DESIGN-0.2 → others
5. **Handoff to @dev** → Once DESIGN-0.1 and DESIGN-0.2 complete, @dev starts Epic 1

---

## Change Log

| Date | Author | Change |
|------|--------|--------|
| 2026-02-20 | Morgan (PM) | Created Design Epic |

---

**Status:** Ready for Design Team Assignment
**Last Updated:** 2026-02-20
