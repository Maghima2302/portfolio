   # ✨ Maghima Lakshmi A — Creative Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-8b64ad?style=for-the-badge&logo=github)](https://maghima2302.github.io/portfolio/)
[![React Router](https://img.shields.io/badge/React%20Router%20v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> *"Where algorithms meet aesthetic design — building thoughtful, intuitive software experiences."*

Welcome to the personal creative portfolio of **Maghima Lakshmi A**, a Software Developer at **MHCognition** and Computer Science Engineer specializing in **Artificial Intelligence & Data Science** from Vels University.

🌐 **Live Website:** [https://maghima2302.github.io/portfolio/](https://maghima2302.github.io/portfolio/)

---

## 🎨 Design Philosophy & Highlights

- **Creative Pastel Aesthetic:** Designed with a soft lilac/mauve palette (`#8b64ad`, `#d99cbd`, `#fffafd`), custom doodle artwork, handwritten typography accents, and whimsical interactive stickers.
- **Interactive Playground:** Real-time theme palette switcher allowing visitors to dynamically recolor the hero section.
- **Lightning-Fast Performance:**
  - Optimized dependency pre-bundling for `@tabler/icons-react` and `framer-motion`.
  - CSS `content-visibility: auto` to defer layout and rasterization of offscreen artwork for smooth 60fps scrolling.
- **Live Contact Form (SheetDB):** Integrated with the [SheetDB API](https://sheetdb.io/) to record messages directly into a Google Sheet with frontend validation, loading states, success toasts, and instant WhatsApp/Email fallback options.
- **Mobile-First & Fully Responsive:** Clean layout across mobile devices, tablets, laptops, and ultra-wide desktop monitors.

---

## 🛠️ Tech Stack

- **Framework:** [React Router v7](https://reactrouter.com/) (prerendered static client)
- **Bundler & Tooling:** [Vite 6 / 8](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Tabler Icons](https://tabler-icons.io/)
- **API Integration:** [SheetDB](https://sheetdb.io/) (Google Sheets backend for contact form)
- **Deployment:** [GitHub Actions](https://github.com/features/actions) → [GitHub Pages](https://pages.github.com/)

---

## 📂 Project Structure

```text
├── .github/workflows/
│   └── deploy.yml            # Automated CI/CD pipeline to GitHub Pages
├── app/
│   ├── components/           # UI components, layout, and custom vector doodles
│   ├── routes/
│   │   └── _index.tsx        # Main portfolio landing page & sections
│   ├── portfolio.css         # Custom portfolio styling & animations
│   ├── root.tsx              # App root layout, SEO metadata & theme setup
│   └── entry.client.tsx      # Client hydration entrypoint
├── public/
│   ├── favicon.svg           # Custom 'M' monogram gradient favicon
│   ├── icon-180.svg          # iOS Apple Touch Icon
│   └── manifest.json         # Web App Manifest
├── scripts/
│   └── build-gh-pages.ts     # Static pre-rendering build script for GitHub Pages
├── react-router.config.ts    # React Router static prerendering configuration
├── vite.config.ts            # Vite build & dependency optimization settings
└── tsconfig.json             # TypeScript configuration
```

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Maghima2302/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the local dev server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Test the GitHub Pages static build:**
   ```bash
   pnpm run build:gh-pages
   ```

---

## 📬 Connect with Maghima

- 💼 **LinkedIn:** [linkedin.com/in/maghima-lakshmi-a](https://www.linkedin.com/in/maghima-lakshmi-a)
- 🐙 **GitHub:** [github.com/Maghima2302](https://github.com/Maghima2302)
- 💡 **LeetCode:** [leetcode.com/u/maghimaaa/](https://leetcode.com/u/maghimaaa/)
- 🎨 **Figma:** [figma.com/@maghima](https://www.figma.com/@maghima)
- 📧 **Email:** [maghima005@gmail.com](mailto:maghima005@gmail.com)
- 💬 **WhatsApp:** [+91 7418885563](https://wa.me/917418885563)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
