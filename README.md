# AVB Education Platform

A comprehensive educational testing platform built with Next.js.

## Features

- 📚 Comprehensive test library
- 👤 User authentication
- 💳 Stripe payment integration
- 📊 Detailed analytics
- 📱 Fully responsive design
- 🚀 Fast and scalable

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Payment**: Stripe
- **Deployment**: GitHub Actions, Docker

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/avbgamers8-svg/avb.git
cd avb

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Available Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Production server
npm run lint     # Run linter
```

## Project Structure

```
src/
  app/           # Next.js app directory
    auth/        # Login & signup
    tests/       # Tests listing
    pricing/     # Pricing page
    dashboard/   # User dashboard
  components/    # Reusable components
```

## Deployment

### GitHub Pages
Automatic deployment on push to `main` via GitHub Actions.

### Docker
```bash
docker build -t avb .
docker run -p 3000:3000 avb
```

### Vercel
Connect GitHub repo to Vercel for automatic deployments.

## Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
NEXTAUTH_SECRET=your-secret-key
```

## Pages

- **Home** - `/` Landing page with features
- **Tests** - `/tests` Browse all tests
- **Pricing** - `/pricing` Pricing plans
- **Login** - `/auth/login` User login
- **Signup** - `/auth/signup` New user registration
- **Dashboard** - `/dashboard` User dashboard

## License

MIT - See LICENSE file for details

---

Made with ❤️ for education
