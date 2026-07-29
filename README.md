# Professional Portfolio Website

A professional, placement-optimized portfolio website for Manikanda Prabu S - AI & Data Science Student | Full Stack Developer.

## Features

- **Recruiter-First Design**: Clean, professional layout optimized for quick scanning
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Fast Loading**: Minimal animations and optimized performance
- **ATS-Friendly**: Clear structure with semantic HTML for better ATS parsing
- **Smooth Navigation**: Smooth scroll navigation with fixed navbar

## Tech Stack

- **React 18** (JSX/JavaScript)
- **Vite** (Build tool)
- **CSS3** with CSS Variables for theming
- **No TypeScript** (Pure JavaScript as per requirements)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cursor_portfolio1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
cursor_portfolio1/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── resume.pdf (add your resume here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   ├── Leadership.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.js
│   ├── App.css
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Update Contact Information

Edit `src/components/Contact.jsx` and update:
- Phone number
- Email address
- LinkedIn profile URL

### Add Your Resume

1. Place your resume PDF in the `public/` folder
2. Name it `resume.pdf`
3. The download button in the Hero section will automatically link to it

### Update Content

All content is in the respective component files:
- **Projects**: `src/components/Projects.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Education**: `src/components/Education.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Achievements**: `src/components/Achievements.jsx`
- **Leadership**: `src/components/Leadership.jsx`
- **Certifications**: `src/components/Certifications.jsx`

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set start command: `npm run preview`
5. Set publish directory: `dist`

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist` folder to Netlify Drop.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized for fast initial load
- Minimal bundle size
- CSS-only animations (no JavaScript animation libraries)
- Lazy loading ready (can be added for images if needed)

## License

This project is private and proprietary.

## Contact

For questions or issues, please contact:
- Email: smanikandaprabu2005@gmail.com
- LinkedIn: https://www.linkedin.com/in/manikanda-prabu-s/
