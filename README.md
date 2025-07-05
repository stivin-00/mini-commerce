# Mini-Commerce 🛒

A tiny, client-side e-commerce prototype built with Next.js 14, React Query, Zustand, and Tailwind CSS.

---

## Project Overview

Mini-Commerce lets users browse a catalog of products, view product details, add items to a persistent cart, and complete a mock checkout with an order success page. All state survives page reloads using localStorage.

Key features:

- Catalogue page all products and search feature
- Product detail pages with add-to-cart
- Cart with quantity adjustments, remove, subtotal calculation
- Checkout flow with order confirmation
- Responsive design and SEO-friendly pages

---

## Design Approach

- **Layout**: Mobile-first responsive grid/flex layouts.
- **Colors**: Neutral base + indigo (`bg-purple-600`) for buttons and highlights.
- **Typography**: Tailwind’s default font stack.
- **Responsiveness**: Grid adapts from 1 column → 2 → 3 based on screen size, Responsive Header.
- **UX**: Sticky header, hover/focus feedback, clear cart actions.

---

## Tools & Techniques

- **Framework & Language**: Next.js with TypeScript (strict).
- **Styling**: Tailwind CSS.
- **State Management**: Zustand with localStorage persistence.
- **Data Fetching**: React Query for local JSON products.
- **Testing**: Jest + React Testing Library.
- **Code Quality**: ESLint + Prettier.
- **CI**: GitHub Actions (optional recommended).

---

## SEO Strategy

- **Meta Tags** & **Open Graph** in `layout.tsx`.
- **Structured Data**: JSON-LD basics.
- **Image Optimization**: `next/image`.
- **Performance**: Lazy loading images; Suspense for smoother UX.

---

## Error-Handling Technique

- **Catalogue Loading**: React Query shows loading/error messages.
- **Cart Edge Cases**: Disables invalid quantity updates.
- **Unknown Routes**: Custom 404 page with call-to-action.
- **UI Logging**: Errors surfaced with clear, user-friendly messages.

---

## Project Structure Highlights

- `/app` → App Router pages (catalogue, product, cart, checkout)
- `/components` → UI components (Header, ProductCard, etc.)
- `/lib` → Zustand store & React Query client
- `/public` → Static `products.json` & images
- `/types` → Strongly-typed interfaces

---

## ▶️ Getting Started

Follow these steps to run the project locally:

### 1) Clone the repository

```bash
git clone https://github.com/<your-github-repo>.git
cd mini-commerce
```

### 2) Install Dependencies

```bash
npm install
```

### 3) Start the development server

```bash
npm run dev
```

### 4) Build for production

```bash
npm run build
npm start
```

### 5) Run tests

```bash
npm run test
```

---

✅ **Live Demo**: [[mini-commerce-stivin.vercel.app/](https://mini-commerce-stivin.vercel.app/)]  
✅ **GitHub Repo**: [[github.com/stivin-00/mini-commerce](https://github.com/stivin-00/mini-commerce)]

---
