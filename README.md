# Romantic Date Proposal Website

A 100% static, romantic date proposal website.

## 🚀 Setup Instructions

### 1. EmailJS Configuration (Required for notifications)
To receive an email when they pick a location:
1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an **Email Service** (e.g., Gmail).
3. Create an **Email Template** with these variables:
   - `{{location}}`: The selected place.
   - `{{time}}`: Set to "Thursday".
   - `{{timestamp}}`: When they clicked.
   - Set the recipient email to: `mahmoudmohammedsaad72@gmail.com`
4. Go to **Account > API Keys** and get your **Public Key**.
5. Open `src/components/EmailService.ts` and replace:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

### 2. Deployment
This project is ready for static export.
- **Vite (Current):** `npm run build` will generate a `dist` folder. Upload it to GitHub Pages, Netlify, or Vercel.
- **Next.js:** If you port this to Next.js, use the provided `next.config.js` with `output: 'export'`.

## ✨ Features
- **Persuasive "No" Button**: Cycles through 50 unique messages to change their mind.
- **Location Picker**: Interactive selection of the date spot.
- **Email Notifications**: Immediate alerts via EmailJS.
- **Romantic UI**: Floating hearts, confetti, and smooth transitions.
- **Mobile Responsive**: Works perfectly on phones.

## 📁 Project Structure
- `src/components/DateProposal.tsx`: The initial question and "No" button logic.
- `src/components/LocationPicker.tsx`: The three location choices.
- `src/components/SuccessScreen.tsx`: The final celebration screen.
- `src/components/EmailService.ts`: EmailJS integration logic.
