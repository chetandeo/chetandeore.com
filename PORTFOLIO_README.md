# Chetan Deore - Personal Portfolio Website

A modern, responsive personal portfolio website built with Angular 14.

## Features

✨ **Landing Page** - Eye-catching introduction with your name, title, and professional summary
📁 **Portfolio Section** - Showcase your projects, skills, experience, and certifications
📧 **Contact Page** - Professional contact form and social media links
🎨 **Dark/Light Theme** - Toggle between themes with smooth transitions
📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

## Pages

### 1. Home (Landing Page)
- Professional introduction
- Animated console text effect
- Call-to-action buttons
- Dark/Light theme toggle

### 2. Portfolio
- **About Me** - Professional summary
- **Technical Skills** - Interactive skill bars showing proficiency levels
- **Professional Experience** - Timeline of work history
- **Featured Projects** - Project cards with technologies used
- **Certifications** - List of professional certifications

### 3. Contact
- **Contact Information** - Email, LinkedIn, GitHub, Location
- **Contact Form** - Send messages directly
- **Social Media Links** - Connect on various platforms
- **Availability Status** - Current work availability

## Technologies Used

- **Framework**: Angular 14
- **Language**: TypeScript
- **Styling**: SCSS
- **UI Components**: Angular Material
- **Icons**: Font Awesome
- **Forms**: Angular Forms (Template-driven)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd chetandeore.com
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Start the development server
\`\`\`bash
npm start
# or
ng serve
\`\`\`

4. Open your browser and navigate to
\`\`\`
http://localhost:4200
\`\`\`

## Build for Production

\`\`\`bash
ng build --configuration production
\`\`\`

The build artifacts will be stored in the `dist/` directory.

## Project Structure

\`\`\`
src/
├── app/
│   ├── landing-page/         # Home page component
│   ├── portfolio/            # Portfolio section
│   ├── contact/              # Contact page
│   ├── navbar/               # Navigation component (not used in current version)
│   ├── app-routing.module.ts # Route configuration
│   └── app.module.ts         # Main app module
├── assets/                   # Images and static files
└── environments/             # Environment configurations
\`\`\`

## Customization

### Update Personal Information

1. **Contact Details** - Edit `src/app/contact/contact.component.ts`:
   \`\`\`typescript
   contactInfo: ContactInfo[] = [
     {
       icon: 'fas fa-envelope',
       title: 'Email',
       value: 'your.email@example.com',
       link: 'mailto:your.email@example.com'
     },
     // ... update other contact info
   ];
   \`\`\`

2. **Skills** - Edit `src/app/portfolio/portfolio.component.ts`:
   \`\`\`typescript
   skills = [
     { name: 'Your Skill', level: 85 },
     // ... add more skills
   ];
   \`\`\`

3. **Projects** - Edit the `projects` array in `src/app/portfolio/portfolio.component.ts`

4. **Experience** - Edit the `experiences` array in `src/app/portfolio/portfolio.component.ts`

5. **Landing Page Text** - Edit `src/app/landing-page/landing-page.component.html`

### Color Scheme

Update theme colors in `src/app/landing-page/landing-page.component.scss`:

\`\`\`scss
.light {
  --mainColor: #64bcf4;      // Primary blue
  --hoverColor: #5bacdf;     // Hover blue
  --backgroundColor: #f1f8fc; // Light background
  // ... other colors
}

.dark {
  --mainColor: #64bcf4;      // Primary blue
  --hoverColor: #5bacdf;     // Hover blue
  --backgroundColor: #192e3a; // Dark background
  // ... other colors
}
\`\`\`

## Navigation

The website uses Angular Router for navigation:
- `/` - Landing Page (Home)
- `/portfolio` - Portfolio Section
- `/contact` - Contact Page

## Features to Add (Future Enhancements)

- Blog section
- Testimonials
- Project detail pages
- Backend integration for contact form
- Email functionality
- Analytics integration
- SEO optimization
- Progressive Web App (PWA) support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Chetan Deore**
- LinkedIn: [linkedin.com/in/cdeore](https://www.linkedin.com/in/cdeore/)
- Email: chetan.deore@example.com

---

Built with ❤️ using Angular
