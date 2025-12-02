# Sri Haritha Agro Food Products - Marketing Website

A professional B2B marketing website for Sri Haritha Agro Food Products Pvt. Ltd., a FSSAI-certified manufacturer of millet and cereal-based Ready-to-Eat and Ready-to-Cook food products based in Hyderabad.

## Project Overview

This is a modern, responsive marketing website built with React, Tailwind CSS, and GSAP animations. The website is designed to attract B2B clients including brands, institutions, and retailers interested in bulk supply and contract manufacturing services.

## Tech Stack

- **Frontend Framework**: React 19.2.0 with TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: GSAP 3.13.0
- **Routing**: React Router DOM 7.10.0
- **Icons**: Lucide React 0.555.0
- **Form Handling**: EmailJS Browser 4.4.1

## Features

### Pages

1. **Home Page**
   - Hero section with CTAs for bulk enquiry and catalogue download
   - Company introduction
   - Product categories grid with 7 categories
   - Avasya brand highlight
   - "Why Choose Us" section
   - Contract manufacturing CTA
   - FAQ section
   - Final contact CTA

2. **About Us**
   - Company journey and history
   - Vision & Mission
   - Leadership (CEO: Mrs. K P Annapurna)
   - Timeline of milestones
   - Core values

3. **Contract Manufacturing**
   - Services offered (OEM, private label, product development)
   - Product types we can manufacture
   - Manufacturing process (5 steps)
   - Industries served
   - FAQ section

4. **Products Hub**
   - Overview of 7 product categories
   - Category cards with images and links

5. **Product Category Pages** (7 categories)
   - Breakfast Cereals
   - Breakfast Mixes
   - Beverage Mixes
   - Soup Mixes
   - Energy Bytes (Snacks)
   - Spice Powders
   - Flours & Grits
   
   Each category page includes:
   - Product grid with details
   - Pack sizes and features
   - Use cases
   - CTA for specifications

6. **Avasya**
   - Brand story and philosophy
   - Product range highlights
   - Proof of manufacturing capabilities
   - CTA for contract manufacturing

7. **Quality & Infrastructure**
   - FSSAI certification details
   - Manufacturing facility overview
   - Quality control process
   - Hygiene & safety standards
   - Manufacturing capabilities
   - Team information

8. **Contact**
   - Contact information (address, phone, email)
   - Enquiry form with EmailJS integration
   - Business hours
   - Map placeholder

### Design System

**Color Palette:**
- Primary Green: `#2E7D32` (Deep Millet Green)
- Secondary Beige: `#F4E8D3` (Millet Beige)
- Accent: `#D9C8A0` (Warm Grain Tone)
- Accent Warm: `#5A3E2B` (Deep Brown)
- Accent Gold: `#E8B04A` (Soft Yellow/Gold)
- Background: `#FAF7F2` (Cream White)
- Text: `#2C2C2C` (Charcoal)

**Typography:**
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

**Design Principles:**
- Modern Earthy Minimalism
- Professional but warm
- Clean layouts with ample whitespace
- Subtle GSAP animations
- Mobile-first responsive design

## Project Structure

```
frontend/
├── public/
│   └── index.html           # SEO meta tags configured
├── src/
│   ├── components/
│   │   └── Layout/
│   │       ├── Header.tsx   # Navigation with dropdown
│   │       ├── Footer.tsx   # Footer with contact info
│   │       └── Layout.tsx   # Main layout wrapper
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── ContractManufacturing.tsx
│   │   ├── Products.tsx
│   │   ├── CategoryPage.tsx
│   │   ├── Avasya.tsx
│   │   ├── Quality.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── products.ts      # Product data structure
│   ├── App.tsx              # Main app with routing
│   ├── index.tsx            # Entry point
│   └── index.css            # Global styles + Tailwind
├── tailwind.config.js       # Tailwind configuration
├── package.json
└── tsconfig.json
```

## Installation & Setup

1. **Install Dependencies**
   ```bash
   cd /app/frontend
   yarn install
   ```

2. **Start Development Server**
   ```bash
   yarn start
   ```
   The app will be available at `http://localhost:3000`

3. **Build for Production**
   ```bash
   yarn build
   ```

## Configuration Needed

### EmailJS Setup
To enable the contact form, you need to configure EmailJS:

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create a service and template
3. Update the credentials in `/app/frontend/src/pages/Contact.tsx`:
   ```typescript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

### Product Catalogue PDF
Add the product catalogue PDF to the public folder:
```
/app/frontend/public/sri-haritha-catalog.pdf
```

## Product Data

All product information is centralized in `/app/frontend/src/data/products.ts`. The data structure includes:

- 7 product categories
- 50+ individual products
- Product details: name, description, pack size, features
- Category metadata

To update products, edit this file.

## SEO Features

- Semantic HTML structure
- Meta tags for description, keywords, author
- Open Graph tags for social sharing
- Twitter Card tags
- Structured schema-ready (can add FAQPage and Organization schema)
- Descriptive alt text for images
- Clean URL structure

## Images

Images are sourced from:
- Unsplash (high-quality stock photos)
- Pexels (high-quality stock photos)

All images are carefully selected to match:
- Professional B2B aesthetic
- Food manufacturing & quality themes
- Healthy millet-based products
- Brand colors and style

## Animations

GSAP animations are used for:
- Hero section fade-in on load
- Staggered category card animations on scroll
- Smooth scroll behavior
- Hover micro-interactions
- Respects `prefers-reduced-motion` for accessibility

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 360px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Large Desktop: 1280px and up

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact Information

**Sri Haritha Agro Food Products Pvt. Ltd.**
- **Address**: Plot No. B-35, BHEL AIE, R.C. Puram, Hyderabad-502 032, Telangana, India
- **Phone**: +91 98857 04670, +91 98857 04400
- **Email**: sriharithaagrofood@gmail.com
- **CEO**: Mrs. K P Annapurna
- **Website**: (to be deployed)

## Next Steps

### Phase 1 Completion ✅
- [x] Design system implementation
- [x] All 8 pages built
- [x] Responsive design
- [x] Navigation with dropdown
- [x] Product data structure
- [x] GSAP animations
- [x] SEO meta tags
- [x] Contact form UI

### Phase 2 (Future Enhancements)
- [ ] Configure EmailJS with actual credentials
- [ ] Add actual product catalogue PDF
- [ ] Implement Google Maps integration
- [ ] Add FAQ schema markup
- [ ] Add Organization schema markup
- [ ] Multilingual support (Telugu)
- [ ] Blog/News section
- [ ] Testimonials section
- [ ] Analytics integration (Google Analytics)
- [ ] Performance optimization
- [ ] Lighthouse audit and improvements

## License

© 2025 Sri Haritha Agro Food Products Pvt. Ltd. All rights reserved.
