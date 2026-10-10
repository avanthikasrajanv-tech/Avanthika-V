# Avanthika Creative — Digital Marketing Portfolio Website

A modern, responsive, high-converting personal portfolio website created for **AVANTHIKA V**, a **Digital Marketer & Creative Content Strategist** based in Calicut, Kerala.

Built with **HTML5, CSS3, Bootstrap 5, and JavaScript**, this website is designed to establish an authoritative personal brand, showcase marketing competencies, display campaign case studies, and generate qualified client business enquiries.

---

## 🌟 Key Highlights & Features

- **Aesthetic Dark Theme:** Built with a deep obsidian/space navy background (`#07090e`), crisp typography, glassmorphism cards, and electric purple (`#8b5cf6`), cyan (`#06b6d4`), and blue (`#3b82f6`) neon accents.
- **10 Core Digital Marketing Services:** Visually engaging service cards covering SEO, Social Media Marketing, Meta Ads, Google Ads, Content Creation, Content Strategy, SEM, Email Marketing, Performance Marketing, and Digital Analytics.
- **Interactive Service Pre-fill:** Clicking "Inquire Service" on any service card automatically smooth-scrolls to the contact section and pre-selects that specific service in the dropdown.
- **6 Portfolio / Practice Case Studies:** Distinct case studies with dedicated image mockups, objectives, tool stacks, and a Bootstrap modal detail viewer.
- **Academic & Operational Background:** Clean dual-column timeline presenting academic education (Softronics, GPTC Meppadi, GHSS Velliyode) and industrial precision experience (Tata Electronics System Solution).
- **SEO & Social Optimization:** Pre-configured with meta tags, Open Graph (OG), Twitter cards, and Schema.org `Person` JSON-LD structured data naturally targeting *"Best Digital Marketer in Calicut"*.
- **Interactive Contact Form:** Instant client-side JavaScript validation for non-empty fields, valid email syntax, and visual feedback notifications.
- **Zero Heavy Frameworks:** Pure semantic HTML5, Vanilla CSS3, Bootstrap 5 (CDN), and Vanilla JS. No React, Node runtime, or build tools required.

---

## 📁 Project Structure

```text
portfolio/
├── index.html                   # Main semantic webpage with all sections & SEO tags
├── style.css                    # Custom styling, dark mode design tokens & glassmorphism
├── script.js                     # Interactive logic, modal handling, validation, year
├── README.md                    # Setup, preview, and step-by-step customization guide
└── assets/
    └── images/
        ├── avanthika-portrait.jpg   # High-resolution professional portrait of Avanthika V
        ├── project-seo.jpg          # Search Engine Optimization dashboard visual
        ├── project-social.svg       # Social media marketing campaign & grid mockup
        ├── project-meta-ads.svg     # Meta Ads Manager & lead funnel graphic
        ├── project-google-ads.svg   # Google Search Ads & keyword bidding graphic
        ├── project-content.svg      # Creative content design & poster mockups
        ├── project-website.svg      # Responsive website & SEO speed audit mockup
        └── favicon.svg              # Branded browser favicon
```

---

## 🚀 How to Preview & Run the Website

### Option 1: Direct Browser Launch (Easiest)
1. Open the project folder in File Explorer: `c:\Users\LENOVO\Desktop\portfolio`
2. Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, or Mozilla Firefox.

### Option 2: Using Local Development Server
If you prefer running via a local HTTP server:

- **Using Python (if installed):**
  ```bash
  python -m http.server 8000
  ```
  Then open `http://localhost:8000` in your browser.

- **Using Node / NPX:**
  ```bash
  npx serve .
  ```
  Then open the local URL provided in the terminal.

- **Using VS Code / Antigravity IDE:**
  - If using the **Live Server** extension, right-click `index.html` and click **"Open with Live Server"**.

---

## 🛠️ Step-by-Step Customization Guide

All code is beginner-friendly and heavily commented so you can customize every section easily.

### 1. Customizing Your Profile Photo
- **File location:** `assets/images/avanthika-portrait.jpg`
- **Method A:** Save your new photograph as `avanthika-portrait.jpg` and overwrite the file in `assets/images/`.
- **Method B:** If your photo has a different name (e.g. `my-photo.png`), open `index.html`, search for `id="heroPortraitImg"`, and change `src="assets/images/avanthika-portrait.jpg"` to `src="assets/images/my-photo.png"`.

### 2. Updating Contact Information & Social Media Links
In `index.html`:
- **Email:** Search for `avanthika.creative@gmail.com` (found in the Hero, Contact, and Footer sections) and replace with your active email address.
- **Instagram:** Search for `https://www.instagram.com/` and append your handle (e.g., `https://www.instagram.com/your_username`).
- **LinkedIn:** Search for `https://www.linkedin.com/` and add your profile link (e.g., `https://www.linkedin.com/in/your_profile`).
- **Location:** Search for `Calicut (Kozhikode), Kerala, India` to modify your location if needed.

### 3. Connecting the Contact Form to Receive Real Messages
The contact form in `index.html` currently includes front-end validation and simulated submission. To receive actual inquiries in your email inbox, you can connect a free form endpoint:

#### Using Formspree (Recommended, Free & No Backend Required):
1. Sign up for free at [Formspree.io](https://formspree.io).
2. Create a new form and copy your unique form ID (e.g., `https://formspree.io/f/mqkvrxyz`).
3. In `index.html`, find `<form id="contactForm">` and add `action="https://formspree.io/f/YOUR_FORM_ID"` and `method="POST"`.
4. In `script.js`, you can either let the default form submit occur or submit via `fetch()` directly to your Formspree endpoint.

Alternatively, you can integrate [EmailJS](https://www.emailjs.com/) or [Web3Forms](https://web3forms.com/).

### 4. Customizing or Adding Services
- Open `index.html` and scroll to `<section id="services">`.
- Each service is contained inside a `<div class="col-md-6 col-lg-4">`.
- You can duplicate a block to add a new service or remove any card.
- Remember to also add/edit the corresponding `<option>` tag in the `<select id="userService">` element inside the Contact section.

### 5. Replacing Practice Projects with Real Client Campaigns
- Open `index.html` and navigate to `<section id="portfolio">`.
- Each project card has an image in `assets/images/`.
- The `<button class="view-project-btn">` stores project details using `data-*` attributes:
  - `data-title`: Project Name
  - `data-objective`: Main goal of the campaign
  - `data-description`: Detailed overview of strategy and execution
  - `data-tools`: Tools and platforms used
  - `data-deliverables`: Tangible outcomes or outputs delivered
- When you achieve real client results, update these attributes with actual case studies.

### 6. Updating Education & Experience
- In `index.html`, locate `<section id="education">`.
- Update the `<div class="timeline-item">` entries with updated years, credentials, or new marketing roles as your career progresses.

---

## 🔍 SEO Strategy & Best Practices

This website is optimized for local search engine discoverability:
- **Title Tag:** `AVANTHIKA V | Digital Marketer & Creative Content Strategist | Calicut`
- **Primary Keywords Included:**
  - *Best Digital Marketer in Calicut*
  - *Digital Marketing Services in Calicut*
  - *SEO Services*
  - *Social Media Marketing*
  - *Meta Ads*
  - *Google Ads*
  - *Content Creation*
- **Structured Data (Schema.org):** JSON-LD is embedded in the `<head>` of `index.html` to tell search engine crawlers that you are a verified professional located in Calicut, Kerala.
- **Performance:** Optimized CSS, clean SVG vectors, and lazy-loading attributes on portfolio images ensure high Google PageSpeed scores.

---

## 📄 License & Credits

- Designed for **AVANTHIKA V (Avanthika Creative)**.
- Built with [Bootstrap 5](https://getbootstrap.com/), [Font Awesome](https://fontawesome.com/), and [Google Fonts](https://fonts.google.com/).
