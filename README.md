

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** (Dark theme)
- **Framer Motion** (Scroll animations)
- **next-intl** (i18n: English / Japanese)
- **Lucide React** (Icons)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Customization

### Personal Information

Edit the message files to update your personal content:

- `messages/en.json` - English content
- `messages/ja.json` - Japanese content

Key things to update:
- **hero.name** - Your name
- **hero.title** - Your professional title
- **about.description** - About you
- **projects.items** - Your projects
- **publications.items** - Your publications
- **resume.timeline** - Your experience and education
- **contact.email** - Your email address
- **footer.copyright** - Copyright notice

### Social Links

Update the social media URLs in:
- `src/components/Hero.tsx` - Hero section links
- `src/components/Contact.tsx` - Contact section links

### Resume PDF

Place your resume PDF at `public/resume.pdf`.

### Deployment

Deploy to Vercel:

```bash
npx vercel
```

Or build for static export by adding `output: 'export'` to `next.config.ts`.

## Project Structure

```
portfolio/
├── messages/          # i18n translation files
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components
│   ├── i18n/          # Internationalization config
│   └── data/          # Data files (if needed)
├── tailwind.config.ts
└── next.config.ts
```
