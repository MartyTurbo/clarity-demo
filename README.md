# Microsoft Clarity Demo

A Next.js application for testing [Microsoft Clarity](https://clarity.microsoft.com) analytics integration with automatic consent (covered by TOS).

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Microsoft Clarity integration with auto-consent
- ✅ Multiple test pages with interactive elements
- ✅ Fully responsive design

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Microsoft Clarity

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_CLARITY_ID=your_clarity_project_id_here
```

To get your Clarity Project ID:
1. Go to [Microsoft Clarity](https://clarity.microsoft.com)
2. Create a new project or select an existing one
3. Copy the Project ID from your project settings
4. Paste it into the `.env.local` file

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Test Pages

The application includes several test pages to generate Clarity tracking data:

- **Home** (`/`) - Overview and interactive buttons
- **About** (`/about`) - Text inputs and information
- **Contact** (`/contact`) - Contact form with validation
- **Demo** (`/demo`) - Counter, modal, and scrollable content

## Microsoft Clarity Integration

Clarity automatically tracks:
- 📊 User clicks and interactions
- 📈 Scroll depth and patterns
- 🎥 Session recordings
- 🗺️ Heatmaps of user activity
- 🔴 Rage clicks and dead clicks

The integration is configured to automatically approve consent (covered by TOS) without requiring user interaction.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/clarity-demo)

1. Push this repository to GitHub
2. Import the project in Vercel
3. Add your `NEXT_PUBLIC_CLARITY_ID` environment variable in Vercel
4. Deploy!

## Project Structure

```
├── app/
│   ├── components/
│   │   └── ClarityScript.tsx   # Clarity integration component
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact form page
│   ├── demo/
│   │   └── page.tsx            # Interactive demo page
│   ├── layout.tsx              # Root layout with Clarity
│   └── page.tsx                # Home page
└── .env.local                  # Environment variables (create this)
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Microsoft Clarity Documentation](https://learn.microsoft.com/en-us/clarity/)
- [Vercel Deployment](https://vercel.com/docs)
