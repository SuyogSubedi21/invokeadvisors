# Invoke Advisors UI/UX Audit and Design System

## Executive Audit

Invoke Advisors has the right content foundation, but the current presentation is not yet at the level of a premium consulting or advisory firm. The design still carries traces of generic SaaS styling: oversized hero typography, broad cards, soft shadows, and a conversion path that feels more like a startup landing page than a serious accounting and advisory practice.

The redesigned direction should communicate restraint, judgment, and authority. It should feel editorial, structured, and executive-ready, closer to the information architecture of Deloitte, PwC, KPMG, EY, McKinsey, Bain, and BCG than to a lead-generation template.

## Weaknesses

| Area | Current Weakness | Impact |
| --- | --- | --- |
| Visual language | Large rounded/card-like modules and soft shadows feel SaaS-oriented | Reduces perceived institutional credibility |
| Typography | Headings are too heavy and oversized on several pages | Feels less executive and more promotional |
| Layout | Sections use similar card/grid patterns repeatedly | Pages lack hierarchy and editorial pacing |
| Trust signals | Metrics exist, but credibility language is not integrated deeply enough | CFOs and corporate buyers need stronger proof and process clarity |
| Navigation | Main pages exist, but conversion pathway is not sufficiently prioritized | Users have to infer the best next step |
| Services | Service list is clear but needs more consulting-style structure | Serious buyers need scope, outputs, and business value |
| Interactions | Motion is functional, not yet refined | Premium interfaces need quieter, more intentional transitions |
| Mobile | Long headings and wide content needed defensive handling | Risk of poor first impression on executive mobile review |
| Accessibility | Skip links and labels exist, but focus, mobile input mode, and reduced motion require continued rigor | Professional services sites must feel dependable for all users |

## Improvement Opportunities

| Opportunity | Design Response |
| --- | --- |
| Increase authority | Use a strict editorial grid, narrower content measures, stronger section dividers |
| Reduce AI/template feel | Remove decorative card repetition, minimize shadows, use sharp panels and rules |
| Improve scanning | Add service metadata, process rows, proof bars, and restrained typographic hierarchy |
| Improve conversion | Keep consultation CTA visible in header and at page endings |
| Improve trust | Show standards: confidentiality, compliance, audit readiness, documented delivery |
| Improve motion | Use short opacity/translate reveals, precise hover lines, button press feedback only |
| Improve mobile | Shorter headings, viewport-safe containers, no horizontal overflow |
| Speak to executive buyers | Add client-priority pathways for owners, CFOs, auditors, investors, and boards |
| Clarify service quality | Add delivery standards: defined scope, documented evidence, deadline awareness, management-ready output |

## Improved Design System

### Visual Direction

Trust & Authority with Swiss editorial structure. The system should feel like a consulting memorandum translated into a website: clear, disciplined, and premium.

### Colors

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#050b16` | Primary text and dark surfaces |
| `--navy` | `#101827` | Header, footer, serious backgrounds |
| `--slate` | `#364152` | Body copy |
| `--muted` | `#667085` | Secondary copy |
| `--rule` | `#d7dde5` | Section dividers |
| `--paper` | `#f7f8fa` | Page background |
| `--white` | `#ffffff` | Clean content surfaces |
| `--accent` | `#26364d` | Accent, CTA, active navigation |

### Typography

Use IBM Plex Sans for both display and body text. It has a sober financial/enterprise tone and avoids playful or AI-template personality.

| Role | Style |
| --- | --- |
| Display | IBM Plex Sans, 600 weight, tight but readable line height |
| Body | IBM Plex Sans, 400 weight, 1.65 line height |
| Labels | Uppercase, small size, increased letter spacing |
| Buttons | Medium weight, compact, clear action text |

### Spacing

Use an 8px-based system with disciplined jumps:

| Token | Size |
| --- | --- |
| XS | 8px |
| SM | 16px |
| MD | 24px |
| LG | 40px |
| XL | 64px |
| 2XL | 96px |
| 3XL | 128px |

### Animation

Animations must be rare, fast, and purposeful.

| Interaction | Motion |
| --- | --- |
| Scroll reveal | `opacity` + `translateY(12px)`, 480ms, strong ease-out |
| Hover links | underline/rule reveal, 180ms |
| Buttons | background/border transition, press scale `0.98` |
| Cards/panels | no scaling; use border and background changes |
| Reduced motion | remove transform animation |

### Components

| Component | Style |
| --- | --- |
| Header | Sticky, flat, white/paper, thin bottom rule |
| CTA | Rectangular, no rounded corners, dark fill or navy outline |
| Service rows | Numbered editorial rows with deliverables |
| Executive pathways | Role-based rows that map business questions to advisory value |
| Standards strip | Rule-based proof strip for scope, documentation, deadlines, and outputs |
| Insight cards | Article-like blocks with top metadata |
| Forms | Sharp fields, clear labels, inline validation |
| FAQ | Rule-based accordion, no heavy cards |
| Footer | Dark institutional footer with legal disclaimer |

## Final Refactor Notes

The final refactor moves Invoke Advisors away from a generic SaaS homepage and toward a consulting-firm information architecture:

- The homepage now opens with advisory positioning, client standards, and a proof strip.
- Executive buyer priorities now sit before metrics, making the site more relevant to CEOs, CFOs, auditors, investors, and boards.
- Services now include a delivery-standard strip before detailed service rows.
- Typography uses IBM Plex Sans for a financial/institutional tone.
- Components are rectangular, rule-based, and restrained.
- Motion is limited to purposeful reveal, navigation, form, accordion, and carousel state changes.
