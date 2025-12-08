# 🛒 Next.js E-Commerce Store

A modern e-commerce web application built with **Next.js (App Router)**.  
The project includes a product catalog, category and price filters, search functionality, a shopping cart, and a clean UI layout.

---

## 🚀 Live Demo

[_(Vercel link here once deployed)_](https://shop-next-3na4oa56b-oleksandrs-projects-972251fc.vercel.app)

---

## ✨ Features

- 🔍 **Product search** via URL query parameters
- 🏷 **Category filter**
- 💰 **Price filter (min / max)**
- 🔥 **Sale filter**
- 🧺 **Dynamic shopping cart** with global state
- ⚡ **Client components** for interactive UI
- 🎨 Custom fonts via `next/font/local`
- 🚀 Fully optimized for **Vercel deployment**

---

## 🛠 Tech Stack

- **Next.js 16 (App Router)**
- **React 18**
- **TypeScript**
- **SCSS / Bootstrap 4**
- **Local fonts**
- **Vercel Hosting**

---

## 📁 Project Structure

```text
app/
├─ ui/        # UI components (filters, header, cart, search)
├─ providers/ # React context providers (CartProvider)
├─ fonts/     # Local font files
├─ scss/      # Global styles
├─ layout.tsx # Root layout
└─ page.tsx   # Main page
```

🧩 Filtering System

All filters rely on:

- useSearchParams()
- router.replace()

This allows:

- ✔ Persistent URL-based filters
- ✔ Shareable URLs
- ✔ No full page reload
- ✔ Smooth user experience
