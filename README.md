# AETHER ATELIER — Haute Footwear & Master Bespoke Shoemaking Website

A premium, modern, responsive website built from scratch for a luxury bespoke footwear atelier and performance footwear brand.

---

## 💎 Design System & Aesthetic Foundations

- **Color Palette:**
  - **Backgrounds:** Deep Obsidian (`#030712`), Dark Midnight Navy (`#09132d`, `#0b1329`)
  - **Luxury Accents:** Warm Metallic Gold (`#f59e0b`, `#fbbf24`), Electric Cyan (`#06b6d4`), Pure White (`#ffffff`)
  - **Glassmorphism:** Frosted slate cards (`bg-slate-900/60 backdrop-blur-xl border border-white/10`) with gold glow accents
- **Typography:**
  - Headings & Titles: `Cinzel` (Google Fonts luxury serif)
  - Body & Specs: `Plus Jakarta Sans` / `Inter` (geometric modern sans-serif)
- **Imagery:**
  - High-resolution, authentic artisanal cordwaining benchwork, wholecut oxfords, luxury sneakers, and leather tanning workshops.

---

## 🏛️ Website Sections (Complete 10/10 Architecture)

1. **Home (Hero Section):**
   - High-impact headline: *"ENGINEERED PERFECTION. HANDCRAFTED SOUL."*
   - Interactive 3D shoe silhouette switcher with real-time specs, bench hours, and colorways.
   - Primary and secondary CTAs ("Explore Collections", "Book Private Fitting", "WhatsApp Concierge").
   - Metrics bar (48+ Craft Hours, 0.2mm Precision, 100% Tuscan Calf, Lifetime Resoling).
2. **About Us:**
   - Atelier heritage since 1994, Florence & Manhattan studios.
   - 4 foundational pillars: Anatomical Wooden Lasts, Hand-Welted Longevity, Tuscan Tannery Leathers, Carbon Propulsion Core.
   - Master Cordwainer Marco Cellini statement on ergonomic posture and benchwork.
3. **Services:**
   - 5 comprehensive footwear services:
     1. Made-to-Measure Wooden Lasts
     2. Bespoke Dress Shoes & Oxfords
     3. Haute Hybrid Luxury Runners
     4. 3D Biometric Foot Scanning & Gait Lab
     5. Heirloom Shoe Restoration & Glacage
   - Complimentary VIP Private Fitting Consultation card.
4. **Why Choose Us:**
   - 6 numbered differentiators (01 to 06) with icons.
   - Side-by-side comparison matrix: *Conventional Mass-Luxury Designer Shoes vs. AETHER Atelier Standard*.
5. **Interactive Shoe Customizer Studio:**
   - Live configuration tool: switch Archetypes, Tuscan Leather finishes, Sole/Welt systems, and Hardware plates.
   - Real-time price calculation, spec preview, and instant "Commission This Exact Build" integration.
6. **Our Projects & Collections (Filterable Gallery):**
   - Filter tabs: *All Collections, Bespoke Dress, Avant-Garde Sneakers, Performance Hybrids*.
   - Quick View / Inspect Specs modal (`ShoeDetailModal`) with complete technical breakdowns and direct commission links.
7. **Customer Testimonials (Client Stories):**
   - Grounded, realistic client endorsements from architects, surgeons, and collectors.
   - Verified commission tags, specific purchased shoe models, and 5-star ratings.
8. **Pricing & Commission Tiers:**
   - 3 transparent tiers: *Prêt-à-Porter Signature ($1,350)*, *Atelier Made-to-Measure ($2,250 - Most Popular)*, and *Bespoke Royal Masterpiece ($3,800)*.
   - Lead times, included perks, and white-glove delivery details.
9. **FAQ (Frequently Asked Questions):**
   - Interactive animated accordion covering sizing, trial fitting mockups (waste shoe), lead times, resoling, and ethics.
   - Integrated direct WhatsApp inquiry box.
10. **Contact Us & Private Fitting Booking:**
    - Full client-side validated form (Full Name, Email, Phone/WhatsApp, Approximate Shoe Size, Category, Bespoke Notes).
    - Visual error warnings on missing or invalid inputs.
    - Celebratory confetti celebration on submission with reference dossier code (`AETH-XXXXXX`).
    - Direct WhatsApp chat button using configurable business number.
    - Physical atelier addresses (Manhattan & Milan), opening hours, and concierge phone.
11. **Footer:**
    - Atelier Gazette newsletter subscription with toast feedback.
    - Navigation shortcuts, social media links, copyright, and legal policies.
12. **Floating WhatsApp Concierge:**
    - Floating bottom-right action button with online status pulse.
    - Interactive popover teaser dialog with direct link to WhatsApp conversation.

---

## 🛠️ Technology Stack

- **React 19**
- **Vite 8**
- **Tailwind CSS 3.4**
- **Lucide Icons**
- **Framer Motion & Canvas Confetti**

---

## 🚀 How to Run the Project

### Prerequisites
- Node.js (v18+ or v20+)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## ⚙️ How to Edit & Customize Business Details

All business configuration, contact numbers, studio addresses, and catalogue items are centralized in a single file:
👉 `src/data/footwearData.js`

### 1. Change WhatsApp Number or Contact Info:
Open `src/data/footwearData.js` and edit the `BRAND_CONFIG` object:
```javascript
export const BRAND_CONFIG = {
  name: "AETHER ATELIER",
  whatsappNumber: "+15558493021", // Format: +[CountryCode][Number] without spaces for wa.me links
  whatsappDisplay: "+1 (555) 849-3021",
  email: "concierge@aetheratelier.com",
  phone: "+1 (800) 492-9381",
  address: "740 Madison Avenue, 4th Floor Atelier, New York, NY 10065",
  secondaryStudio: "Via della Spiga 28, Milan, Italy",
  workingHours: "Mon - Sat: 10:00 AM - 7:00 PM (By Private Appointment)",
};
```

### 2. Add / Edit Shoes in Collections:
Modify the `COLLECTIONS_DATA` array in `src/data/footwearData.js`. Each shoe supports:
- `name`, `category`, `price`, `material`, `sole`, `buildTime`, `image`, `badge`, `description`, `specs`.

### 3. Adjust Pricing Tiers:
Edit `PRICING_TIERS` in `src/data/footwearData.js` to change names, pricing amounts, lead times, or bullet points.

---

## 📱 Responsive Testing Verified
- **Mobile Viewport:** Verified on smartphone widths (375px - 414px) with slide-out navigation drawer.
- **Tablet Viewport:** Verified on 768px - 1024px with responsive grid wrapping.
- **Desktop Viewport:** Full ultra-wide polish with backdrop blur, sticky navigation, and hover micro-interactions.
