# 🚚 Denwin Movers Hub

The #1 Trusted Directory for Verified Movers in Kenya. Find reliable movers in Nairobi, Kiambu, Thika, and more, complete with estimated prices and direct WhatsApp booking.

## ✨ Features

- **Verified Listings:** All movers are manually vetted for authenticity.
- **Direct Booking:** "Chat on WhatsApp" buttons link directly to movers with a pre-filled quote request.
- **Price Estimates:** Transparent price ranges for 1-BR, 2-BR, and Transport Only.
- **SEO Optimized:** Built with Next.js 14 and Semantic HTML for maximum visibility.
- **Fast & Light:** No database required for the verified MVP version.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ How to Add/Edit Movers

Data is managed in a local seed file for speed and simplicity.

1.  Open `data/movers.seed.ts`.
2.  Add a new entry to the `MOVERS` array:
    ```typescript
    {
      id: "unique-id",
      county: "Nairobi",
      name: "New Mover Name",
      phone: "254700000000", // Start with 254
      serviceType: "Full Service",
      status: "verified",    // IMPORTANT for the green badge
      priceMin: 12000,
      priceMax: 18000
    }
    ```
3.  Save and commit. the site updates instantly on deployment.

## 📱 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Custom CSS (Modern, clean, fast)
- **Icons:** SVG Icons
- **Hosting:** Vercel

## 🤝 Verified Partner

This project uses a "Verified" badge system. Only movers with `status: "verified"` in the seed data will display the green verified shield.

---

© 2026 Denwin Movers Hub
