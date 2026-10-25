# Paradise Nursery 🌿

A responsive houseplant shopping application built with React, Vite, Redux Toolkit, and React Router.

## Features

- A landing page with the Paradise Nursery name and a **Get Started** button.
- About Us page with company information.
- Three plant categories with six plants in each category (18 products total).
- Product cards showing an image, plant name, description, and price.
- Add-to-cart buttons disable after the product has been added.
- A shared cart badge displays the total quantity of plants in the cart.
- Redux Toolkit cart actions: `addItem`, `removeItem`, and `updateQuantity`.
- Cart displays unit price, quantity, each line total, and the overall total.
- Quantity controls, remove actions, continue-shopping links, and a demo checkout alert (`Coming Soon!`).
- Responsive layout for desktop and mobile screens.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

1. Extract this ZIP.
2. Open a terminal in the extracted `paradise-nursery` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

To verify a production build, run:

```bash
npm run build
```

## Main project files

- `src/App.jsx` — app routes, navigation, landing page, brand name, and Get Started button.
- `src/App.css` — visual design and landing-page background image.
- `src/AboutUs.jsx` — company/about information.
- `src/CartSlice.js` — Redux Toolkit store and cart reducers.
- `src/ProductList.jsx` — product data, categories, and add-to-cart behaviour.
- `src/CartItem.jsx` — cart rows, quantities, removal, totals, and checkout placeholder.
- `src/main.jsx` — React entry point and Redux/router providers.

## Notes

Product and hero photography are loaded from Unsplash URLs, and the font styling uses Google Fonts. An internet connection is needed for those remote images and fonts. Checkout is only a front-end demonstration and does not process payments.
