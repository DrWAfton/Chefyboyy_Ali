# Chef Boy Ali — Product Requirements

## Original Problem Statement
Build a website talking about Angel Ali ("Chef Boy Ali" / "The Cook of Converse"), private chef and caterer in Converse, Texas. Trained at Auguste Escoffier School of Culinary Arts. Specialties: Texas BBQ, comfort foods, Mexican/Tex-Mex, rustic Italian, desserts.

## User Choices
- Goal: booking system + bio site (single page)
- Contact: form connected to backend + Instagram link (https://www.instagram.com/chefboyy_ali/)
- Style: Warm, rustic, BBQ/Texas-inspired (earth tones, wood textures)
- Photos: stock imagery for now (user will provide later)
- Sections: Hero, About, Specialties, Sample Menus, Services, Testimonials, Contact

## Architecture
- Backend: FastAPI + MongoDB (motor); routes prefixed `/api`
- Frontend: React 19 + Tailwind + shadcn/ui + framer-motion + react-fast-marquee + sonner
- Single-page scroll, smooth navigation, fixed glass nav

## Implemented (Iteration 1 - Dec 2025)
- Backend: POST /api/bookings, GET /api/bookings, GET /api/ — BookingCreate validation w/ EmailStr
- Frontend: Navbar (desktop + mobile), Hero (full-bleed image), About, Specialties (asymmetric grid 5 cuisines), Sample Menus (3 typographic menus), Services (4 services on dark moss bg), Testimonials (marquee), Booking (form w/ shadcn calendar + select + sonner toasts), Footer
- Design: Cormorant Garamond + Work Sans + Caveat fonts; bone/sand/clay/ember/moss palette
- Instagram links in nav, footer, contact section, and CTA button
- Custom test IDs throughout

## Test Results
- Backend: 6/6 pytest passed (100%)
- Frontend: 23/24 Playwright passed (~96%, only selector miss)

## Backlog (P1/P2)
- P1: Real photos of Angel and his food (user to provide)
- P1: Email integration (Resend/SendGrid) to notify Ali on inquiry
- P2: Image gallery section
- P2: Pricing tiers / package cards
- P2: SEO meta tags + Open Graph image
- P2: Admin view of inquiries
