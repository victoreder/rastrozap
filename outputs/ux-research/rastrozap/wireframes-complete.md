# RastroZap MVP — Complete Wireframes

**Date:** 2026-02-20
**Fidelity:** Medium (ASCII + annotations)
**Breakpoints:** Desktop (1440px) + Mobile (375px)
**Design System:** Tailwind #014FBB, Inter font, SVG icons
**Pages:** 9 (all MVP flows)

---

## 📐 Layout Grid & Spacing System

**Base Unit:** 4px
**Spacing Scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64

**Breakpoints:**
- Desktop: 1440px (primary)
- Mobile: 375px

**Desktop Layout (1440px):**
```
┌─────────────────────────────────────────────┐
│ Header (56px)                               │
├─────────┬─────────────────────────────────┤
│ Sidebar │  Main Content (scrollable)       │
│ 280px   │  1160px                         │
│ (fixed) │  ├─ Content padding: 24px       │
│         │  ├─ Max-width: 1100px           │
│         │  └─ Center aligned              │
└─────────┴─────────────────────────────────┘
```

**Mobile Layout (375px):**
```
┌──────────────────────┐
│ Header (56px)        │
├──────────────────────┤
│  Main Content        │
│  (one column)        │
│  Padding: 16px       │
│  Width: 343px        │
└──────────────────────┘
Note: Sidebar becomes hamburger menu
```

---

## 🎨 Component Design Specs (Reference)

### Buttons
**Primary Button:** #014FBB bg, white text, 40px height, 16px horizontal padding, rounded 4px
**States:** Default, Hover (darker #003D96), Active (press), Disabled (gray #D1D5DB)

### Inputs
**Style:** Border 1px #E5E7EB, 40px height, padding 12px 16px, font 14px
**States:** Default, Focus (#014FBB border), Error (red border #EF4444), Success (green border #10B981)

### Cards
**Style:** White bg, border 1px #E5E7EB, border-radius 8px, padding 16px
**Shadow:** 0 1px 2px rgba(0,0,0,0.05)

### Badges/Tags
**Colors:** Primary (#014FBB), Success (#10B981), Danger (#EF4444), Warning (#F59E0B), Neutral (#6B7280)
**Size:** 6px padding, 12px horizontal, font 12px

---

# 📄 PAGE 1: LANDING PAGE

## Desktop (1440px)

```
┌─────────────────────────────────────────────────────────┐
│ Header                                                  │
│ Logo | [Links] | Login Button | Register Button       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│         HERO SECTION                                    │
│    ┌─────────────────────────────────┐                │
│    │ RastroZap                       │                │
│    │ Track WhatsApp leads perfectly  │                │
│    │ See exactly who clicked, when,  │                │
│    │ and where they are in your      │                │
│    │ sales journey.                  │                │
│    │                                 │                │
│    │ [Start Free Trial] [See Demo]   │                │
│    └─────────────────────────────────┘                │
│                                                         │
│ FEATURES SECTION (3 columns)                            │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│ │ 📊 Track │  │ 🎯 Stage │  │ ⚡ Auto  │             │
│ │ Invisible│  │ Leads    │  │ Journey  │             │
│ │ Clicks   │  │          │  │          │             │
│ │ No setup │  │ Move     │  │ Keywords │             │
│ │ needed   │  │ contacts │  │ trigger  │             │
│ │          │  │ between  │  │ stages   │             │
│ │          │  │ stages   │  │ auto     │             │
│ └──────────┘  └──────────┘  └──────────┘             │
│                                                         │
│ PRICING SECTION                                         │
│ ┌──────────────────────────────────────────────────┐  │
│ │ R$97/month  |  Up to 500 leads/day              │  │
│ │ Perfect for traffic managers & small agencies   │  │
│ │ [Get Started]                                    │  │
│ └──────────────────────────────────────────────────┘  │
│                                                         │
│ FOOTER                                                  │
│ © 2026 RastroZap | Privacy | Terms | Contact        │
└─────────────────────────────────────────────────────────┘
```

**Key Elements:**
- Hero: Clear value prop (invisible tracking)
- Features: 3 core benefits (Track, Stage, Auto-journey)
- Social proof: (add testimonials if have)
- Pricing: Transparent, single tier
- CTA: "Start Free Trial" (primary)

**Mobile (375px):**
```
┌──────────────────────┐
│ Header               │
│ Logo | Menu Burger   │
├──────────────────────┤
│   HERO (stacked)     │
│ ┌──────────────────┐ │
│ │RastroZap         │ │
│ │Track WhatsApp    │ │
│ │leads perfectly   │ │
│ │                  │ │
│ │[Start Free Trial]│ │
│ └──────────────────┘ │
│                      │
│ FEATURES (1 column)  │
│ ┌──────────────────┐ │
│ │📊 Track Clicks   │ │
│ │(description)     │ │
│ └──────────────────┘ │
│ ┌──────────────────┐ │
│ │🎯 Stage Leads    │ │
│ │(description)     │ │
│ └──────────────────┘ │
│ ┌──────────────────┐ │
│ │⚡ Auto Journey   │ │
│ │(description)     │ │
│ └──────────────────┘ │
│                      │
│ PRICING              │
│ ┌──────────────────┐ │
│ │R$97/month        │ │
│ │500 leads/day     │ │
│ │[Get Started]     │ │
│ └──────────────────┘ │
│                      │
│ FOOTER               │
└──────────────────────┘
```

---

# 📄 PAGE 2: LOGIN PAGE

## Desktop (1440px)

```
┌─────────────────────────────────────────────────────────┐
│ Header (minimal): RastroZap Logo                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                  ┌─────────────────────┐               │
│                  │ Login to RastroZap  │               │
│                  │                     │               │
│                  │ Email               │               │
│                  │ ┌─────────────────┐ │               │
│                  │ │ your@email.com  │ │               │
│                  │ └─────────────────┘ │               │
│                  │                     │               │
│                  │ Password            │               │
│                  │ ┌─────────────────┐ │               │
│                  │ │ ••••••••••      │ │               │
│                  │ └─────────────────┘ │               │
│                  │                     │               │
│                  │ [Forgot Password]   │               │
│                  │                     │               │
│                  │ ┌─────────────────┐ │               │
│                  │ │ [Sign In]       │ │               │
│                  │ └─────────────────┘ │               │
│                  │                     │               │
│                  │ Don't have account? │               │
│                  │ [Create one]        │               │
│                  │                     │               │
│                  └─────────────────────┘               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**States:**
- Empty: All fields blank, Submit disabled (gray)
- Focus: Border #014FBB, blue outline
- Error: "Invalid email" message below field, red border
- Loading: Button shows spinner, disabled
- Success: Redirect to dashboard

**Mobile (375px):**
```
┌──────────────────────┐
│ RastroZap Logo       │
├──────────────────────┤
│                      │
│ Login to RastroZap   │
│                      │
│ Email                │
│ ┌────────────────┐   │
│ │your@email.com  │   │
│ └────────────────┘   │
│                      │
│ Password             │
│ ┌────────────────┐   │
│ │••••••••••      │   │
│ └────────────────┘   │
│                      │
│ [Forgot Password]    │
│                      │
│ ┌────────────────┐   │
│ │[Sign In]       │   │
│ └────────────────┘   │
│                      │
│ Don't have account?  │
│ [Create one]         │
│                      │
└──────────────────────┘
```

---

# 📄 PAGE 3: REGISTER PAGE

## Desktop (1440px)

```
┌─────────────────────────────────────────────────────────┐
│ Header: RastroZap Logo                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                  ┌─────────────────────┐               │
│                  │ Create Your Account │               │
│                  │                     │               │
│                  │ Email               │               │
│                  │ ┌─────────────────┐ │               │
│                  │ │ your@email.com  │ │               │
│                  │ └─────────────────┘ │               │
│                  │ Help text: (optional)               │
│                  │                     │               │
│                  │ Password            │               │
│                  │ ┌─────────────────┐ │               │
│                  │ │ ••••••••••      │ │               │
│                  │ └─────────────────┘ │               │
│                  │ ✓ 8+ chars, 1 number              │
│                  │                     │               │
│                  │ Confirm Password    │               │
│                  │ ┌─────────────────┐ │               │
│                  │ │ ••••••••••      │ │               │
│                  │ └─────────────────┘ │               │
│                  │                     │               │
│                  │ ☐ I agree to Terms  │               │
│                  │                     │               │
│                  │ ┌─────────────────┐ │               │
│                  │ │ [Create Account]│ │               │
│                  │ └─────────────────┘ │               │
│                  │                     │               │
│                  │ Already have account?               │
│                  │ [Sign in]           │               │
│                  │                     │               │
│                  └─────────────────────┘               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Validation:**
- Email: Must be valid format
- Password: 8+ chars, at least 1 number, 1 letter
- Confirm: Must match password
- Terms: Must be checked

**Mobile (375px):** Same as login, stacked vertically

---

# 📄 PAGE 4: FORGOT PASSWORD PAGE

## Desktop (1440px)

```
┌─────────────────────────────────────────────────────────┐
│ Header: RastroZap Logo                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                  ┌─────────────────────┐               │
│                  │ Forgot Your         │               │
│                  │ Password?           │               │
│                  │                     │               │
│                  │ Enter your email    │               │
│                  │ and we'll send a    │               │
│                  │ link to reset it.   │               │
│                  │                     │               │
│                  │ Email               │               │
│                  │ ┌─────────────────┐ │               │
│                  │ │ your@email.com  │ │               │
│                  │ └─────────────────┘ │               │
│                  │                     │               │
│                  │ ┌─────────────────┐ │               │
│                  │ │[Send Reset Link]│ │               │
│                  │ └─────────────────┘ │               │
│                  │                     │               │
│                  │ Back to [Login]     │               │
│                  │                     │               │
│                  └─────────────────────┘               │
│                                                         │
│ After submit:                                          │
│ ┌────────────────────────────────────────────────────┐ │
│ │ ✓ Check your email                                 │ │
│ │ We sent a link to reset your password              │ │
│ │ Expires in 1 hour.                                 │ │
│ │ [Resend Email]                                     │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Mobile (375px):** Same layout, responsive

---

# 📄 PAGE 5: RESET PASSWORD PAGE

## Desktop (1440px)

```
┌─────────────────────────────────────────────────────────┐
│ Header: RastroZap Logo                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                  ┌─────────────────────┐               │
│                  │ Reset Your Password │               │
│                  │                     │               │
│                  │ New Password        │               │
│                  │ ┌─────────────────┐ │               │
│                  │ │ ••••••••••      │ │               │
│                  │ └─────────────────┘ │               │
│                  │ ✓ 8+ chars, secure   │               │
│                  │                     │               │
│                  │ Confirm Password    │               │
│                  │ ┌─────────────────┐ │               │
│                  │ │ ••••••••••      │ │               │
│                  │ └─────────────────┘ │               │
│                  │                     │               │
│                  │ ┌─────────────────┐ │               │
│                  │ │ [Reset Password]│ │               │
│                  │ └─────────────────┘ │               │
│                  │                     │               │
│                  └─────────────────────┘               │
│                                                         │
│ After success:                                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ ✓ Password reset successfully                      │ │
│ │ You can now log in with your new password          │ │
│ │ [Sign In]                                          │ │
│ └────────────────────────────────────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

# 📄 PAGE 6: DASHBOARD

**Core page.** Shows lead metrics + journey visualization.

## Desktop (1440px)

```
┌─────────────────────────────────────────────────────────┐
│ Header: RastroZap Logo | Search | User Menu (avatar)  │
├──────────┬──────────────────────────────────────────────┤
│ Sidebar  │ DASHBOARD                                   │
│          │                                             │
│ Dashboard│ Welcome, João!                              │
│ Links    │ Last updated: 2 minutes ago                 │
│ Contacts │                                             │
│ Stages   │ METRICS (4 cards in 2x2 grid)              │
│ Settings │ ┌─────────────────┐  ┌──────────────────┐ │
│          │ │ Total Leads     │  │ This Month       │ │
│          │ │ 247             │  │ +32 (↑ 14.9%)    │ │
│          │ │ ↑ from 215      │  │                  │ │
│          │ └─────────────────┘  └──────────────────┘ │
│          │                                             │
│          │ ┌─────────────────┐  ┌──────────────────┐ │
│          │ │ Avg. Response   │  │ Stage Conversion │ │
│          │ │ 2.3 hours       │  │ 68%              │ │
│          │ │ (from messages) │  │ Contato→Qual.    │ │
│          │ └─────────────────┘  └──────────────────┘ │
│          │                                             │
│          │ LEADS BY STAGE (bar chart)                │
│          │ ┌──────────────────────────────────────┐ │
│          │ │ Contato:      ███████░ 156           │ │
│          │ │ Qualificado:  ███░░░░░  47           │ │
│          │ │ Negociação:   ██░░░░░░  28           │ │
│          │ │ Fechado:      █░░░░░░░  16           │ │
│          │ └──────────────────────────────────────┘ │
│          │                                             │
│          │ RECENT LEADS (table, 5 rows)              │
│          │ ┌──────────────────────────────────────┐ │
│          │ │ Name    │ Stage │ Arrived │ Time    │ │
│          │ ├─────────┼───────┼─────────┼─────────┤ │
│          │ │ João    │ Qual. │ Now     │ 2h      │ │
│          │ │ Maria   │ Neg.  │ 1h ago  │ 4h 30m  │ │
│          │ │ Pedro   │ Cont. │ 3h ago  │ 3h      │ │
│          │ │ Ana     │ Fech. │ 5h ago  │ 2d 1h   │ │
│          │ │ Carlos  │ Qual. │ 1d ago  │ 1d      │ │
│          │ └──────────────────────────────────────┘ │
│          │ [View All Leads]                        │
│          │                                             │
└──────────┴──────────────────────────────────────────────┘
```

**Key Features:**
- Welcome message with personalization
- 4 Key Metrics: Total, Month trend, Avg Response, Conversion Rate
- Visual lead distribution (bar chart)
- Recent leads quick view (5 rows)
- All in "one screen" (no scroll initially)

**Mobile (375px):**

```
┌──────────────────────┐
│ ☰ | Logo | Profile   │
├──────────────────────┤
│                      │
│ Welcome, João!       │
│ Last updated: 2m     │
│                      │
│ METRICS (1 column)   │
│ ┌──────────────────┐ │
│ │ Total Leads     │ │
│ │ 247             │ │
│ │ ↑ +32 (14.9%)   │ │
│ └──────────────────┘ │
│                      │
│ ┌──────────────────┐ │
│ │ This Month      │ │
│ │ +32 (↑ 14.9%)   │ │
│ └──────────────────┘ │
│                      │
│ ┌──────────────────┐ │
│ │ Avg. Response   │ │
│ │ 2.3 hours       │ │
│ └──────────────────┘ │
│                      │
│ ┌──────────────────┐ │
│ │ Stage Conversion│ │
│ │ 68%             │ │
│ └──────────────────┘ │
│                      │
│ LEADS BY STAGE      │
│ Contato:    156     │
│ Qualificado: 47     │
│ Negociação:  28     │
│ Fechado:     16     │
│                      │
│ RECENT LEADS        │
│ ┌──────────────────┐ │
│ │ João             │ │
│ │ Qualificado, 2h  │ │
│ └──────────────────┘ │
│ ┌──────────────────┐ │
│ │ Maria            │ │
│ │ Negociação, 4h30 │ │
│ └──────────────────┘ │
│ [View All]           │
│                      │
└──────────────────────┘
```

---

# 📄 PAGE 7: LINKS MANAGEMENT

**Create and manage trackable WhatsApp links.**

## Desktop (1440px)

```
┌─────────────────────────────────────────────────────────┐
│ Header: RastroZap Logo | Search | User Menu           │
├──────────┬──────────────────────────────────────────────┤
│ Sidebar  │ LINKS                                        │
│          │ ┌──────────────────────────────────────────┐│
│ Dashboard│ │ [+ New Link] | Filter: All | Search box  ││
│ Links    │ └──────────────────────────────────────────┘│
│ Contacts │                                              │
│ Stages   │ TABLE: Links                                 │
│ Settings │ ┌──────────────────────────────────────────┐│
│          │ │ Name │ Link │ Clicks │ Created │ Action ││
│          │ ├──────┼──────┼────────┼─────────┼────────┤│
│          │ │Sales │rz.../│  124  │ 5d ago │ [Edit] ││
│          │ │Promo │abc   │       │        │ [Delete]│
│          │ │      │      │       │        │ [Copy]  │
│          │ ├──────┼──────┼────────┼─────────┼────────┤│
│          │ │Webinar│rz...│  89   │ 10d ago│ [Edit] ││
│          │ │      │def   │       │        │ [Delete]│
│          │ │      │      │       │        │ [Copy]  │
│          │ ├──────┼──────┼────────┼─────────┼────────┤│
│          │ │Launch│rz... │  42   │ 15d ago│ [Edit] ││
│          │ │      │ghi   │       │        │ [Delete]│
│          │ │      │      │       │        │ [Copy]  │
│          │ └──────┴──────┴────────┴─────────┴────────┘│
│          │ [< Prev] 1 2 3 [Next >]                    │
│          │                                              │
│ MODAL: Create/Edit Link (overlay)                      │
│ ┌──────────────────────────────────────────────────┐   │
│ │ New Link                        [x]              │   │
│ │                                                  │   │
│ │ Link Name                                        │   │
│ │ ┌────────────────────────────────────────────┐  │   │
│ │ │ Sales Campaign                             │  │   │
│ │ └────────────────────────────────────────────┘  │   │
│ │                                                  │   │
│ │ Link Description (optional)                      │   │
│ │ ┌────────────────────────────────────────────┐  │   │
│ │ │ Use for February sales promotion           │  │   │
│ │ └────────────────────────────────────────────┘  │   │
│ │                                                  │   │
│ │ [Cancel] [Create Link]                         │   │
│ └──────────────────────────────────────────────────┘   │
│                                                         │
└──────────┴──────────────────────────────────────────────┘
```

**Interactions:**
- [+ New Link]: Opens modal to create
- [Edit]: Opens modal to edit name/description
- [Delete]: Confirmation dialog
- [Copy]: Copies link to clipboard (toast: "Copied!")
- Click row: Could view detailed link analytics (future)

**Mobile (375px):**

```
┌──────────────────────┐
│ ☰ | Logo | Profile   │
├──────────────────────┤
│                      │
│ [+ New Link]         │
│ Filter: [All ▼]      │
│ ┌──────────────────┐ │
│ │ Search links...  │ │
│ └──────────────────┘ │
│                      │
│ LINKS LIST           │
│ ┌──────────────────┐ │
│ │ Sales Campaign   │ │
│ │ 124 clicks       │ │
│ │ 5 days ago       │ │
│ │ [···] (menu)     │ │
│ └──────────────────┘ │
│ ┌──────────────────┐ │
│ │ Webinar          │ │
│ │ 89 clicks        │ │
│ │ 10 days ago      │ │
│ │ [···] (menu)     │ │
│ └──────────────────┘ │
│ ┌──────────────────┐ │
│ │ Launch Event     │ │
│ │ 42 clicks        │ │
│ │ 15 days ago      │ │
│ │ [···] (menu)     │ │
│ └──────────────────┘ │
│ [Load More]          │
│                      │
└──────────────────────┘
```

---

# 📄 PAGE 8: CONTACTS/LEADS

**View all leads with advanced filtering and stage assignment.**

## Desktop (1440px)

```
┌─────────────────────────────────────────────────────────┐
│ Header: RastroZap Logo | Search | User Menu           │
├──────────┬──────────────────────────────────────────────┤
│ Sidebar  │ CONTACTS                                     │
│          │ ┌──────────────────────────────────────────┐│
│ Dashboard│ │ Search: [search box] | Filter: [Stage▼] ││
│ Links    │ │ Sort: [Date ▼] | [Export]               ││
│ Contacts │ └──────────────────────────────────────────┘│
│ Stages   │                                              │
│ Settings │ TABLE: All Leads                             │
│          │ ┌──────────────────────────────────────────┐│
│          │ │ Name │ Phone │ Stage │ Arrived │ Last   ││
│          │ ├──────┼───────┼───────┼─────────┼────────┤│
│          │ │João  │(11)99 │Qual.  │2h ago   │Now     ││
│          │ │Maria │(11)98 │Neg.   │1d ago   │30m ago ││
│          │ │Pedro │(21)97 │Cont.  │2d ago   │2d ago  ││
│          │ │Ana   │(85)96 │Fech.  │5d ago   │5d ago  ││
│          │ │Carlos│(41)99 │Qual.  │1w ago   │1w ago  ││
│          │ │Rosa  │(65)98 │Cont.  │2w ago   │2w ago  ││
│          │ │Lucas │(47)97 │Neg.   │2w ago   │1w ago  ││
│          │ │Sofia │(11)99 │Qual.  │1m ago   │3w ago  ││
│          │ └──────┴───────┴───────┴─────────┴────────┘│
│          │ [< Prev] 1 2 3 4 [Next >] (showing 1-8 of 247)
│          │                                              │
│ SIDE PANEL: Contact Detail (when click row)            │
│ ┌──────────────────────────────────────────────────┐   │
│ │ João da Silva          [Edit] [×]               │   │
│ │                                                  │   │
│ │ Phone: (11) 99123-4567                          │   │
│ │ Email: joao@email.com                           │   │
│ │ Stage: Qualificado                              │   │
│ │ [Change Stage ▼]                                │   │
│ │                                                  │   │
│ │ JOURNEY                                          │   │
│ │ Contato (2h ago)                                │   │
│ │ └─ Arrived via: link click                      │   │
│ │                                                  │   │
│ │ Qualificado (now)                               │   │
│ │ └─ Moved by: "interessado" keyword              │   │
│ │                                                  │   │
│ │ RECENT MESSAGES                                 │   │
│ │ João: "Tá bom, manda mais info"                 │   │
│ │ You: "[template message]"                       │   │
│ │ João: "Ok, repass pra meus clientes"            │   │
│ │                                                  │   │
│ │ [Send Message] [More Actions]                   │   │
│ └──────────────────────────────────────────────────┘   │
│                                                         │
└──────────┴──────────────────────────────────────────────┘
```

**Key Features:**
- Search: By name, phone, email
- Filter: By stage (Contato, Qualificado, Negociação, Fechado)
- Sort: Date, name, stage
- Side panel: Contact details + journey + messages
- "Change Stage" button: Dropdown to move to new stage

**Mobile (375px):**

```
┌──────────────────────┐
│ ☰ | Logo | Profile   │
├──────────────────────┤
│                      │
│ ┌──────────────────┐ │
│ │ Search contacts  │ │
│ └──────────────────┘ │
│ Filter: [Stage ▼]    │
│ Sort: [Date ▼]       │
│                      │
│ CONTACTS LIST        │
│ ┌──────────────────┐ │
│ │ João da Silva    │ │
│ │ (11) 99123-4567  │ │
│ │ Qualificado      │ │
│ │ 2h ago           │ │
│ └──────────────────┘ │
│ ┌──────────────────┐ │
│ │ Maria Santos     │ │
│ │ (11) 98765-4321  │ │
│ │ Negociação       │ │
│ │ 1 day ago        │ │
│ └──────────────────┘ │
│ [Load More]          │
│                      │
│ DETAIL (tap contact) │
│ ┌──────────────────┐ │
│ │ João da Silva [×]│ │
│ │                  │ │
│ │ (11) 99123-4567  │ │
│ │ Stage:Qualif.    │ │
│ │ [Change Stage▼]  │ │
│ │                  │ │
│ │ JOURNEY          │ │
│ │ Contato (2h ago) │ │
│ │ └─ link click    │ │
│ │ Qualificado (now)│ │
│ │ └─ "interessado" │ │
│ │                  │ │
│ │ MESSAGES         │ │
│ │ João: "Manda     │ │
│ │ mais..."         │ │
│ │                  │ │
│ │ [Send Msg]       │ │
│ └──────────────────┘ │
│                      │
└──────────────────────┘
```

---

# 📄 PAGE 9: JOURNEY STAGES

**Configure and manage lead stages + keyword triggers.**

## Desktop (1440px)

```
┌─────────────────────────────────────────────────────────┐
│ Header: RastroZap Logo | Search | User Menu           │
├──────────┬──────────────────────────────────────────────┤
│ Sidebar  │ JOURNEY STAGES                               │
│          │ ┌──────────────────────────────────────────┐│
│ Dashboard│ │ [+ New Stage] | Reorder: [Enable/Done]  ││
│ Links    │ └──────────────────────────────────────────┘│
│ Contacts │                                              │
│ Stages   │ STAGE CARDS (vertical flow)                 │
│ Settings │                                              │
│          │ ┌─────────────────────────────────────────┐ │
│          │ │ STAGE 1: Contato (Created by system)    │ │
│          │ │                                         │ │
│          │ │ Leads start here when click your link  │ │
│          │ │ Count: 156 leads                        │ │
│          │ │                                         │ │
│          │ │ Auto-move to next stage when:          │ │
│          │ │ ☑ Lead messages: "interessado"         │ │
│          │ │ ☑ Lead messages: "quer saber mais"     │ │
│          │ │ ☑ Lead messages: "como funciona"       │ │
│          │ │                                         │ │
│          │ │ Add trigger: [input field]             │ │
│          │ │ [+ Add Trigger]                        │ │
│          │ │                                         │ │
│          │ │ [Edit] [Duplicate]                     │ │
│          │ └─────────────────────────────────────────┘ │
│          │              [arrow down]                    │
│          │ ┌─────────────────────────────────────────┐ │
│          │ │ STAGE 2: Qualificado                    │ │
│          │ │ Count: 47 leads                         │ │
│          │ │                                         │ │
│          │ │ Auto-move to next stage when:          │ │
│          │ │ ☑ Lead messages: "agende"              │ │
│          │ │ ☑ Lead messages: "marque data"         │ │
│          │ │                                         │ │
│          │ │ Add trigger: [input field]             │ │
│          │ │ [+ Add Trigger]                        │ │
│          │ │                                         │ │
│          │ │ [Edit] [Duplicate]                     │ │
│          │ └─────────────────────────────────────────┘ │
│          │              [arrow down]                    │
│          │ ┌─────────────────────────────────────────┐ │
│          │ │ STAGE 3: Negociação                     │ │
│          │ │ Count: 28 leads                         │ │
│          │ │                                         │ │
│          │ │ Auto-move to next stage when:          │ │
│          │ │ ☑ Lead messages: "tá ok"               │ │
│          │ │ ☑ Lead messages: "vamos fazer"         │ │
│          │ │                                         │ │
│          │ │ Add trigger: [input field]             │ │
│          │ │ [+ Add Trigger]                        │ │
│          │ │                                         │ │
│          │ │ [Edit] [Duplicate]                     │ │
│          │ └─────────────────────────────────────────┘ │
│          │              [arrow down]                    │
│          │ ┌─────────────────────────────────────────┐ │
│          │ │ STAGE 4: Fechado                        │ │
│          │ │ Count: 16 leads                         │ │
│          │ │ (final stage)                           │ │
│          │ │                                         │ │
│          │ │ [Edit] [Duplicate]                     │ │
│          │ └─────────────────────────────────────────┘ │
│          │                                              │
│          │ [+ New Stage] (add custom stage)            │
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```

**Interactions:**
- Each stage shows: name, count, current triggers
- [+ Add Trigger]: Add keyword that moves leads to next stage
- [Edit]: Rename stage, change triggers
- [Duplicate]: Create new stage with same triggers
- Reorder: Drag stages to reorder flow
- Stage 1 (Contato) = auto-created (can't delete)

**Mobile (375px):**

```
┌──────────────────────┐
│ ☰ | Logo | Profile   │
├──────────────────────┤
│ [+ New Stage]        │
│                      │
│ JOURNEY FLOW         │
│ ┌──────────────────┐ │
│ │ Stage 1: Contato │ │
│ │ 156 leads        │ │
│ │                  │ │
│ │ Triggers:        │ │
│ │ ✓ "interessado"  │ │
│ │ ✓ "quer saber"   │ │
│ │ ✓ "como funciona"│ │
│ │                  │ │
│ │ [+ Add Trigger]  │ │
│ │ [Edit] [Dup]     │ │
│ └──────────────────┘ │
│ [arrow down]         │
│ ┌──────────────────┐ │
│ │ Stage 2:Qualific.│ │
│ │ 47 leads         │ │
│ │                  │ │
│ │ Triggers:        │ │
│ │ ✓ "agende"       │ │
│ │ ✓ "marque data"  │ │
│ │                  │ │
│ │ [+ Add Trigger]  │ │
│ │ [Edit] [Dup]     │ │
│ └──────────────────┘ │
│ [arrow down]         │
│ ┌──────────────────┐ │
│ │ Stage 3:Negoc.   │ │
│ │ 28 leads         │ │
│ │ [Edit] [Dup]     │ │
│ └──────────────────┘ │
│ [arrow down]         │
│ ┌──────────────────┐ │
│ │ Stage 4: Fechado │ │
│ │ 16 leads (final) │ │
│ │ [Edit] [Dup]     │ │
│ └──────────────────┘ │
│                      │
└──────────────────────┘
```

---

# 📄 PAGE 10: SETTINGS

**Account settings, profile, billing, integrations.**

## Desktop (1440px)

```
┌─────────────────────────────────────────────────────────┐
│ Header: RastroZap Logo | Search | User Menu           │
├──────────┬──────────────────────────────────────────────┤
│ Sidebar  │ SETTINGS                                     │
│          │                                              │
│ Dashboard│ ACCOUNT                                      │
│ Links    │ ┌──────────────────────────────────────────┐│
│ Contacts │ │ Email: joao@traffic.com                 ││
│ Stages   │ │ Account Status: Active                   ││
│ Settings │ │ Created: Jan 15, 2026                    ││
│          │ │ [Change Email] [Change Password]         ││
│          │ └──────────────────────────────────────────┘│
│          │                                              │
│          │ BILLING                                      │
│          │ ┌──────────────────────────────────────────┐│
│          │ │ Plan: Pro (R$97/month)                   ││
│          │ │ Billing Cycle: Monthly                   ││
│          │ │ Next Invoice: Feb 20, 2026               ││
│          │ │ Payment Method: Visa ending in 1234       ││
│          │ │ [Change Plan] [Update Payment]           ││
│          │ │ [Download Invoice]                        ││
│          │ └──────────────────────────────────────────┘│
│          │                                              │
│          │ INTEGRATIONS                                │
│          │ ┌──────────────────────────────────────────┐│
│          │ │ WhatsApp Business Account (Connected)     ││
│          │ │ ✓ QR Code pairing successful              ││
│          │ │ Last sync: 2 minutes ago                  ││
│          │ │ [Reconnect] [Disconnect]                 ││
│          │ └──────────────────────────────────────────┘│
│          │                                              │
│          │ ┌──────────────────────────────────────────┐│
│          │ │ Meta Pixel (Not Connected)                ││
│          │ │ Track conversions back to Facebook/Insta   ││
│          │ │ Pixel ID: [____________]                  ││
│          │ │ [Connect Pixel]                           ││
│          │ └──────────────────────────────────────────┘│
│          │                                              │
│          │ TEAM (if applicable)                         │
│          │ ┌──────────────────────────────────────────┐│
│          │ │ Team Members: 1 (you)                     ││
│          │ │ [Invite Team Member]                      ││
│          │ └──────────────────────────────────────────┘│
│          │                                              │
│          │ DANGER ZONE                                  │
│          │ ┌──────────────────────────────────────────┐│
│          │ │ Delete Account                            ││
│          │ │ This action cannot be undone.             ││
│          │ │ [Delete My Account]                       ││
│          │ └──────────────────────────────────────────┘│
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```

**Mobile (375px):**

```
┌──────────────────────┐
│ ☰ | Logo | Profile   │
├──────────────────────┤
│                      │
│ ACCOUNT              │
│ ┌──────────────────┐ │
│ │ joao@traffic.com │ │
│ │ Active           │ │
│ │ Since Jan 15     │ │
│ │ [Change Email]   │ │
│ │ [Chg Password]   │ │
│ └──────────────────┘ │
│                      │
│ BILLING              │
│ ┌──────────────────┐ │
│ │ Pro - R$97/mo    │ │
│ │ Next: Feb 20     │ │
│ │ Card: ••••1234    │ │
│ │ [Change Plan]    │ │
│ │ [Update Payment] │ │
│ │ [Invoice]        │ │
│ └──────────────────┘ │
│                      │
│ INTEGRATIONS         │
│ ┌──────────────────┐ │
│ │ WhatsApp: ✓      │ │
│ │ Connected 2m ago │ │
│ │ [Reconnect]      │ │
│ └──────────────────┘ │
│                      │
│ ┌──────────────────┐ │
│ │ Meta Pixel       │ │
│ │ Not Connected    │ │
│ │ [Connect]        │ │
│ └──────────────────┘ │
│                      │
│ TEAM                 │
│ ┌──────────────────┐ │
│ │ 1 member (you)   │ │
│ │ [Invite]         │ │
│ └──────────────────┘ │
│                      │
│ DANGER ZONE          │
│ ┌──────────────────┐ │
│ │ Delete Account   │ │
│ │ [Delete]         │ │
│ └──────────────────┘ │
│                      │
└──────────────────────┘
```

---

## 🎨 Design System Summary

### Colors
- **Primary:** #014FBB (buttons, links, focus states)
- **Success:** #10B981 (confirmed, active)
- **Danger:** #EF4444 (errors, destructive actions)
- **Warning:** #F59E0B (warnings, alerts)
- **Neutral:** #6B7280 (secondary text, borders)
- **Background:** #FFFFFF (cards), #F9FAFB (page background)

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** 600-700 weight, sizes 24px (h1), 20px (h2), 16px (h3)
- **Body:** 400 weight, 14-16px
- **Small:** 400 weight, 12px (labels, help text)

### Spacing
- **Header:** 56px height
- **Sidebar:** 280px width (desktop), collapsed on mobile
- **Card Padding:** 16px
- **Button Height:** 40px
- **Input Height:** 40px
- **Gap between sections:** 24px

### Icons
- **Style:** SVG, inline, scalable
- **Size:** 16px (small), 20px (default), 24px (large)
- **Color:** Inherit from text color (primary, secondary, etc.)
- **Examples:** chevron-down, arrow-right, settings, bell, user, menu

### States
- **Default:** Full opacity, normal shadow
- **Hover:** Slightly darker color or shadow increase
- **Active:** Primary color, bolder
- **Disabled:** 50% opacity, gray color (#D1D5DB)
- **Loading:** Spinner animation, disabled state
- **Error:** Red border, error message below

### Responsive Patterns
- Desktop sidebar fixed, mobile hamburger menu
- Desktop: 2-3 column layouts, Mobile: 1 column
- Tables: Full on desktop, stacked cards on mobile
- Modals: Full-width on mobile (overlay entire screen)
- Buttons: Full-width on mobile, fixed width on desktop

---

## 🔄 State Variations (Quick Reference)

### Form States
```
Default   → [Input field with placeholder]
Focus     → [Input field with blue border #014FBB]
Error     → [Input field with red border #EF4444 + error text]
Success   → [Input field with green border #10B981 + success icon]
Disabled  → [Gray input field, 50% opacity]
Loading   → [Input with spinner icon]
```

### Button States
```
Primary (Default)  → Blue background #014FBB, white text
Primary (Hover)    → Darker blue #003D96
Primary (Active)   → Even darker, pressed effect
Primary (Disabled) → Gray #D1D5DB, 50% opacity
Primary (Loading)  → Spinner icon inside button

Secondary Button   → White bg, blue border, blue text
Danger Button      → Red bg #EF4444, white text
```

### Data Table States
```
Default Row        → White bg, hover: light gray #F3F4F6
Selected Row       → Light blue bg #EFF6FF
Active Row         → Blue left border #014FBB (3px)
Empty State        → "No data" message, centered, icon
Loading State      → Skeleton loaders or spinner
Error State        → Red error message, retry button
```

---

## ✅ Wireframe Acceptance Criteria

- [x] All 9 pages designed (landing, auth, dashboard, links, contacts, stages, settings)
- [x] Desktop (1440px) layout defined for all pages
- [x] Mobile (375px) layout defined for all pages
- [x] Key components: buttons, inputs, cards, tables, modals, badges
- [x] Information hierarchy clear (primary → secondary → advanced)
- [x] Interactive states documented (default, hover, active, error, loading)
- [x] Design system colors, spacing, typography specified
- [x] Icons: SVG only, no emoji
- [x] Accessibility: focus states, disabled states, labels
- [x] Progressive disclosure: advanced features hidden by default

---

## 🚀 Next Steps

1. **Design System Setup** (DESIGN-0.1)
   - Create Figma file with design tokens
   - Build component library (12 base atoms)

2. **High-Fidelity Mockups** (DESIGN-0.2)
   - Convert these wireframes to Figma
   - Add visual polish (gradients, shadows, icons)
   - Create interaction prototypes (micro-interactions)

3. **Component Specifications** (DESIGN-0.3)
   - Detailed specs for each of 12 components
   - Variants, states, responsive behavior

4. **Interaction Flows** (DESIGN-0.4)
   - Document user journeys: signup → login → create link → track leads
   - Micro-interactions: tooltips, toasts, modals

5. **Mobile Testing** (DESIGN-0.5)
   - Test responsive design at 375px
   - Validate touch targets (44x44px minimum)
   - Ensure mobile-first approach

---

**Created by:** Uma (UX Design Expert)
**Date:** 2026-02-20
**Status:** Medium-Fidelity Wireframes Complete
**Format:** ASCII + Markdown Specifications

---

