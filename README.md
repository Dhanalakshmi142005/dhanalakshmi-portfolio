# Dhanalakshmi A - Portfolio Website

A modern, responsive personal portfolio website built with React, showcasing skills, projects, and professional experience.

## Features

- Modern design with glassmorphism cards
- Dark/Light mode toggle
- Smooth animations with Framer Motion
- Fully responsive
- Contact form with EmailJS integration
- Interactive UI components
- Optimized performance

## Tech Stack

- React 18
- Vite
- Framer Motion
- EmailJS
- React Icons
- CSS3

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dhanalakshmi-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## EmailJS Setup

The contact form uses EmailJS to send messages. To make it work:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (e.g., Gmail)
3. Create an Email Template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
4. Get your Service ID, Template ID, and Public Key
5. Update the values in `src/components/Contact.jsx`:
   - Replace `YOUR_SERVICE_ID` with your EmailJS service ID
   - Replace `YOUR_TEMPLATE_ID` with your EmailJS template ID
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key

## Project Structure

```
src/
├── assets/           # Static assets
├── components/       # React components
│   ├── Navbar.jsx    # Navigation bar
│   ├── Home.jsx      # Hero section
│   ├── About.jsx     # About section
│   ├── Skills.jsx    # Skills section
│   ├── Projects.jsx  # Projects section
│   ├── Internship.jsx # Internship section
│   ├── Certifications.jsx # Certifications section
│   ├── Contact.jsx   # Contact section
│   └── Footer.jsx    # Footer
├── App.jsx           # Main app component
├── App.css           # App styles
├── index.css         # Global styles
└── main.jsx          # Entry point
```

## Deployment

Build the project and deploy the `dist` folder to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## Contact

- Email: [dhanama2005@gmail.com](mailto:dhanama2005@gmail.com)
- LinkedIn: [Dhanalakshmi Arivazhagan](https://www.linkedin.com/in/dhanalakshmi-arivazhagan-a820503a2/)
- GitHub: [Dhanalakshmi142005](https://github.com/Dhanalakshmi142005)
