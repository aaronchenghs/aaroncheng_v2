# aaroncheng_v2

Aaron Cheng's personal site.  
A motion-heavy, portfolio-driven single page built with modern React, Tailwind, and a soft animated “fog” background.

---

## Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations / Motion:**
  - Framer Motion (section reveal, micro-interactions)
  - Lenis (`lenis/react`) for smooth, inertia-based scrolling
- **Data / Backend:** Firebase (Auth + Firestore) for the message board
- **Linting / Formatting:** ESLint (flat config) + Prettier
- **Hosting:** Netlify

---

## Features

- **Sticky, translucent header**
  - Section anchors for Portfolio, Timeline, Contact, Message Board
  - Animated kaomoji “brand” button that also scrolls back to top
- **Smooth scrolling**
  - Lenis-powered inertial scrolling between sections
- **Subtle animated fog background**
  - CSS-only, GPU-friendly
  - Gives depth without overpowering content
- **About section**
  - Responsive layout (portrait on the left, text on the right)
  - Stacks vertically on mobile
- **Portfolio grid**
  - Projects displayed as responsive cards
  - Tech stacks rendered as icon pills (React, TS, Firebase, etc.)
  - Cards link out to GitHub / demos
- **Certifications row**
  - Clickable AWS Credly badges
  - Hover states and issuance metadata
- **Timeline section**
  - Vertical timeline of education, internships, and career
  - Type-based color badges (Education, Internship, Career)
  - Optional icon per node for visual context
- **Contact section**
  - Email, phone, WhatsApp, LinkedIn, GitHub
  - Icons on the left, text centered on desktop
  - Responsive layout that reflows cleanly on mobile
- **Message Board**
  - Google sign-in via Firebase Auth
  - Visitors can leave notes (optionally anonymous)
  - Messages stored in Firestore, sorted newest-first
- **Footer**
  - “Back to top” control wired to Lenis
  - Links to GitHub, LinkedIn, and the legacy site

---

## Requirements

- **Node.js:** `>= 20` (LTS 20 or 22 recommended)
- **Package manager:** `npm`

---

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/aaronchenghs/aaroncheng_v2.git
cd aaroncheng_v2

npm install
npm run dev
```
