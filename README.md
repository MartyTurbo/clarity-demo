# Microsoft Clarity Demo

A Next.js application for testing [Microsoft Clarity](https://clarity.microsoft.com) analytics integration with automatic consent (covered by TOS).

**🚀 Live Demo:** [https://clarity-demo-eight.vercel.app/](https://clarity-demo-eight.vercel.app/)

**📦 GitHub:** [https://github.com/MartyTurbo/clarity-demo](https://github.com/MartyTurbo/clarity-demo)

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

### Auto-Consent Implementation

The integration is configured to **automatically approve consent** (covered by TOS) without requiring user interaction. This is implemented in the `ClarityScript.tsx` component:

- ✅ Consent is automatically granted when Clarity loads
- ✅ No cookie banners or consent prompts
- ✅ Tracking starts immediately for all users
- ✅ Only loads in production by default (disable dev tracking)

### Environment Variables

- `NEXT_PUBLIC_CLARITY_ID`: Your Clarity Project ID (required)
- `NEXT_PUBLIC_CLARITY_ENABLE_DEV`: Set to `"true"` to enable Clarity in development mode (optional)

## Production Deployment

This project is deployed on Vercel: **[clarity-demo-eight.vercel.app](https://clarity-demo-eight.vercel.app/)**

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MartyTurbo/clarity-demo)

**Steps:**
1. Fork or clone this repository
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variable in Vercel:
   - **Key:** `NEXT_PUBLIC_CLARITY_ID`
   - **Value:** Your Clarity Project ID (e.g., `uel5b1h20s`)
4. Deploy!

### Vercel Configuration

The `vercel.json` file includes the production Clarity ID. For your own deployment, update this file or set the environment variable in the Vercel dashboard.

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
