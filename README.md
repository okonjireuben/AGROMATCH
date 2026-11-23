# AGROMATCH — Agricultural Marketplace & Direct Farm-to-Business Network

> **Connecting Farms to Markets. Growing Opportunities.**  
> Nigeria's premier direct agricultural e-commerce platform eliminating predatory middlemen, empowering indigenous farmers, and providing restaurants, supermarkets, retailers, and food processors with fresh, traceable produce backed by guaranteed escrow protection.

---

## 🚀 Quick Launch & Live Preview

The application is built and running locally:

### 🌐 Open in Your Browser
- **Live Local URL**: [http://localhost:3000/](http://localhost:3000/)
- **Network / Mobile Testing**: `http://192.168.1.20:3000/`

### Alternative Launch Options:
1. **Vite Development Server**:
   ```bash
   npm run dev
   ```
2. **Vite Production Preview**:
   ```bash
   npm run build
   npm run preview -- --port 3000 --host
   ```
3. **Native PowerShell HTTP Server (Zero-Dependency)**:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\server.ps1
   ```

---

## 🎨 1. Brand Identity & Design Tokens

- **Brand Name**: AGROMATCH
- **Tagline**: *"Connecting Farms to Markets. Growing Opportunities."*
- **Color Palette**:
  - **Forest Green**: `#14532D` (Primary Brand & Dark Accents)
  - **Primary Green**: `#16A34A` (Actions, Badges & Verification)
  - **Lime Green**: `#84CC16` (Seasonal Harvest & Value Highlights)
  - **Light Cream**: `#F8FAF5` (Warm Agricultural Background)
  - **Dark Text**: `#17251B` (High Contrast Readable Typography)
- **Typography**: Plus Jakarta Sans, Inter, system-ui
- **Icons**: Lucide Icons (`lucide-react`)
- **Visuals**: Realistic Nigerian agricultural crops, farm photography, glassmorphism cards, and interactive SVG routing animations.

---

## 📦 2. Key Pages & Features Implemented

### 🌾 1. Homepage (`/home`)
- **Hero Command Deck**: High-impact African farming hero imagery, value proposition, quick search filter (Produce, Category, State), and dual CTAs ("Explore Marketplace" & "Start Selling").
- **Live Platform Metrics Counter**:
  - **1,280+** Registered Verified Farmers across 18 states
  - **8,450 MT** Fresh Produce Listed
  - **480+** Supermarkets & Restaurant Buyers
  - **₦620M+** Farmer Earnings Transacted in Escrow
- **Featured Agricultural Produce**: Fresh harvests from Kano, Benue, Ebonyi, Rivers, Oyo, and Plateau.
- **How It Works**: 3-step interactive breakdown (Farmers List Verified Harvest → Buyers Order & Escrow Locks Funds → Cold-Chain Haulage & Final Sign-Off).
- **Verified Farmers Spotlight**: Profiles for Alh. Ibrahim Garba (Kano), Mrs. Blessing Akpan (Rivers), Elder Terver Iorfa (Benue), and more.
- **Seasonal Produce Snapshot**: Live preview of current November harvest peaks.
- **Testimonials**: Real quotes from Lagos executive chefs and rural cooperative chairmen.
- **Weekly Market Bulletin**: Working newsletter subscription with validation and feedback.

### 🛒 2. Agricultural Marketplace (`/marketplace`)
- Complete multi-facet filtering across all 8 required categories:
  1. **Grains and Cereals** (Abakaliki Parboiled Rice, Yellow Maize, Sorghum, Millet)
  2. **Fruits** (Edo Plantains, Benue Sweet Oranges, Pawpaw, Jos Strawberries)
  3. **Vegetables** (Kano Roma Tomatoes, Scotch Bonnet Ata Rodo, Ugu Leaves, Sokoto Onions)
  4. **Tubers and Roots** (Zaki-Biam White Yams, TMB Bio-fortified Cassava, Plateau Irish Potatoes)
  5. **Poultry and Eggs** (Farm Jumbo Brown Eggs, Dressed Broilers, Day-Old Chicks)
  6. **Fish and Seafood** (Rivers Live Mud Catfish, Akwa Ibom Smoked Crayfish, Farmed Tilapia)
  7. **Livestock** (Kano Boer Goats, Katsina Balami Rams, White Fulani Cattle)
  8. **Processed Farm Products** (Nsukka/Abia Pure Red Palm Oil, Ijebu Crunchy White Garri, Forest Honey)
- Dynamic search by keyword, state, quality grade (Grade A Export, Grade A Premium, Standard), in-season toggle, in-stock toggle, and price sliders.
- Interactive product cards with wholesale tier discounts, stock counters, and one-click add to cart.

### 👨‍🌾 3. Farmer Dashboard (`/farmer-dashboard`)
- **Overview Deck**: Gross Sales (₦), Active Produce Listings, Pending Orders, Low Stock Alerts, and 2026 Harvest Revenue Trends chart.
- **Add New Harvest**: Interactive form to publish new produce with photo presets, unit pricing, harvest date, and optical grading.
- **Manage Products**: Live inventory table with quick price adjustment, stock update, and deletion.
- **Manage Orders**: Order status updater (`Pending` → `Confirmed` → `Processing` → `Shipped` → `Delivered` → `Cancelled`).
- **Sales & Earnings**: Available balance vs Escrow-locked funds with direct bank payout requests to Access Bank, GTBank, Zenith, First Bank, and Kuda.
- **Direct Messages**: Real-time communication with buyers inquiring about crops.
- **Farm Profile & Verification**: CAC credentials, farm hectares, and cooperative affiliation badges.

### 🍽️ 4. Buyer Dashboard & Order Tracking (`/buyer-dashboard`)
- Specialized for restaurants, caterers, supermarkets, and wholesale distributors.
- **Procurement Overview**: Total spend, active deliveries, average middleman savings (29.4%), and escrow protection.
- **My Orders**: Complete order history with receipts, status pills, and delivery confirmation buttons.
- **Live Farm-to-Buyer Tracker**: Interactive visual route progress with live reefer cargo temperature reading (`9.4°C Chilled`), driver telematics, and estimated arrival times.
- **Saved Produce**: One-click reordering for kitchen staples.

### 🏢 5. Specialized Bulk Procurement Portal (`/bulk-procurement`)
- **Request for Quotation (RFQ)**: Submit commercial tenders for multi-ton purchases.
- **Recurring Kitchen Supply Contracts**: Automated weekly deliveries of fresh produce with volume tier discounts.

### ⚖️ 6. Smart Price Comparison Tool (`/price-comparison`)
- Side-by-side comparison between **AGROMATCH Farm-Gate Prices** and **Traditional Open Market (Mile 12, Bodija, Utako)** prices.
- Interactive volume slider computing net cash savings (averaging 22% – 30% savings).

### 📅 7. Seasonal Produce Calendar (`/seasonal-calendar`)
- Full 12-month Nigerian agricultural calendar detailing peak harvests, weather transitions, and commodity buying tips.

### 💳 8. Shopping Cart & Nigerian Checkout Flow (`/cart` & `/checkout`)
- Cart with state delivery fee calculation (Lagos, Abuja, Rivers, Kano, Oyo, etc.).
- Temperature-controlled cold-chain protection option (+₦4,500).
- Nigerian payment options:
  - **Providus Instant Virtual Account Bank Transfer** (Virtual NUBAN `8192049182`, copyable account, expiration countdown).
  - **Debit / Credit Card** (Mastercard, Visa, Verve simulation).
- Confetti celebration upon order confirmation, printable invoice, and direct sync to buyer and farmer dashboards.

### 🔐 9. Authentication & Multi-Role Demo Switcher
- Registration with role picker:
  - **Farmer / Producer**
  - **Restaurant / Chef**
  - **Supermarket / Retailer**
  - **Wholesaler / Trader**
  - **Individual Buyer**
- Instant One-Click Demo Personas:
  - 🌾 *Alh. Ibrahim Garba* (Verified Kano Farmer)
  - 👨‍🍳 *Chef Deji Balogun* (Terra Kulture Restaurant Buyer)
  - 🛒 *Ngozi Obi* (Hubmart Supermarket Procurement)

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18 with Vite
- **Styling**: Tailwind CSS with custom AGROMATCH agricultural tokens
- **Icons**: Lucide Icons (`lucide-react`)
- **Effects**: `canvas-confetti`
- **State & Storage**: React Context with automatic `localStorage` persistence and mock backend sync
