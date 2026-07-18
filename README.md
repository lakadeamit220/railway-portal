# Indian Railway Department Portal

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb)
![reCAPTCHA](https://img.shields.io/badge/reCAPTCHA-v3-4285F4?style=for-the-badge&logo=google)

A modern, clean, and fully responsive landing page for the Indian Railway Department Portal. Features a complete UI system with interactive components, and a robust backend integration for handling passenger enquiries securely.

---

## Features
- **Modern UI/UX**: Designed using Indian Railway brand colors (Navy and Saffron) with a clean, professional aesthetic.
- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop displays.
- **Dynamic Navigation**: Sticky header with smooth scrolling and a slide-in mobile drawer.
- **Service Highlights**: Dedicated sections for About, Services, and Benefits using `lucide-react` icons.
- **Secure Enquiry Form**:
  - Built with `react-hook-form` and `zod` for rigorous client-side and server-side validation.
  - Invisible **Google reCAPTCHA v3** integration to prevent spam.
- **Database Integration**: Saves enquiries directly to a MongoDB database using `mongoose`.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend Framework** | Next.js (App Router, JavaScript) |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Form & Validation** | React Hook Form, Zod |
| **Database & ODM** | MongoDB, Mongoose |
| **Security** | Google reCAPTCHA v3 |

---

## Getting Started (Local Development)

### Prerequisites
1. **Node.js** (v18 or higher)
2. **MongoDB Community Server**: Download and install from [MongoDB](https://www.mongodb.com/try/download/community). Ensure it is running on the default port `27017`.
3. **Git**: Installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lakadeamit220/railway-portal.git
   cd railway-portal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   # MongoDB Connection String (Local)
   MONGODB_URI=mongodb://localhost:27017/railwayportal

   # Google reCAPTCHA v3 Keys
   # (These are Google's official public test keys - replace them in production)
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
   RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ9eQVNfc
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API Documentation

### `POST /api/enquiries`

Handles form submissions, verifies the reCAPTCHA token, validates data, and stores the document in MongoDB.

**Request Body (JSON):**
```json
{
  "fullName": "Rahul Sharma",
  "mobileNumber": "9876543210",
  "email": "rahul@example.com",
  "organization": "ABC Logistics", 
  "message": "I need help tracking my freight consignment.",
  "recaptchaToken": "token_string_from_google"
}
```
*(Note: `organization` is optional)*

**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Enquiry submitted successfully",
  "data": { ...savedDocument }
}
```

**Error Response (400 Bad Request - Validation/Captcha Failed):**
```json
{
  "success": false,
  "message": "reCAPTCHA verification failed. Please try again."
}
```

---

## Project Structure

```text
railway-portal/
├── app/
│   ├── api/enquiries/route.js   # Backend API logic
│   ├── globals.css              # Tailwind config and global styles
│   ├── layout.js                # Root layout, fonts, and reCAPTCHA provider
│   └── page.js                  # Main landing page assembly
├── components/
│   ├── AboutSection.jsx
│   ├── BenefitsSection.jsx
│   ├── CTASection.jsx
│   ├── EnquiryForm.jsx
│   ├── FeaturesSection.jsx
│   ├── Footer.jsx
│   ├── GoogleCaptchaWrapper.jsx
│   ├── HeroBanner.jsx
│   └── Navbar.jsx
├── lib/
│   └── mongodb.js               # MongoDB connection singleton
├── models/
│   └── Enquiry.js               # Mongoose Schema
└── public/
    └── hero-bg.png              # Hero background image
```

---

## Deployment (Vercel)

When you are ready to deploy:
1. Push your code to GitHub.
2. Sign up for a free MongoDB Atlas cluster and get your connection string.
3. Generate real reCAPTCHA v3 keys for your live domain from the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin).
4. Connect the repository in Vercel.
5. Add `MONGODB_URI`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, and `RECAPTCHA_SECRET_KEY` in the Vercel Environment Variables settings.
6. Deploy!

---
*Developed as a Technical Assessment Project.*
