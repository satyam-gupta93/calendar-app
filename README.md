# 🗓️ Wall Calendar — Interactive Next.js Component

A polished, interactive wall calendar component built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Wall Calendar Aesthetic** — hero image panel paired with date grid, spiral binding detail
- **Month-to-month navigation** with page-flip animation
- **Day Range Selector** — click a start date, hover to preview, click an end date; visual states for start, end, and in-between days
- **Integrated Notes** — tab between monthly notes and range-specific notes; persisted in `localStorage`
- **Fully Responsive** — side-by-side on desktop, stacked vertically on mobile
- **Dark Mode** toggle
- **Holiday markers** on Dec 25 and Jan 1
- **Today highlight** with ring indicator
- **Dynamic hero images** — each month has a themed Unsplash photo

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🏗️ Project Structure

```
wall-calendar/
├── app/
│   ├── globals.css        # CSS variables, animations, responsive styles
│   ├── layout.tsx         # Font loading (Playfair Display + DM Sans)
│   └── page.tsx           # Entry page
├── components/
│   └── WallCalendar.tsx   # Main calendar component (all logic + UI)
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## 🧠 Technical Choices

- **No backend or API** — all state managed in React + persisted via `localStorage`
- **CSS-only page flip** animation via `@keyframes rotateX`
- **Monday-first grid** with weekend colouring
- **Hover preview** for range end before confirming selection

## 📱 Responsive Behavior

| Screen | Layout |
|--------|--------|
| Desktop (md+) | Hero image left · Calendar grid + notes right |
| Mobile | Hero image stacked on top · Grid + notes below |
