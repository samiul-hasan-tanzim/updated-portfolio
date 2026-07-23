# Samiul Hasan — Portfolio

An interactive cosmic-themed portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Motion (formerly Framer Motion)
- **Icons:** Lucide React
- **Database:** MongoDB with Mongoose
- **Deployment:** Vercel

## Features

- Cosmic animated background with parallax effects
- Custom cursor
- Loading screen
- Responsive design
- Sections: Hero, About, Skills, Journey, Education, Projects, Contact
- Contact form with MongoDB persistence
- Admin dashboard at `/dashboard` to view/delete messages
- Mouse parallax interactions
- Scroll-triggered reveal animations

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```
MONGODB_URI=your_mongodb_connection_string
DB_NAME=portfolio
COLLECTION_NAME=contacts
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── actions/         # Server actions (contact form)
│   ├── dashboard/       # Admin dashboard (messages table)
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   └── cosmic/          # All UI components
├── hooks/               # Custom hooks
└── lib/
    ├── db.ts            # MongoDB connection
    ├── models/          # Mongoose models
    └── utils.ts         # Utility functions
```
