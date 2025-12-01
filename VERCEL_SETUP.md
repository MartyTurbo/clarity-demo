# Vercel Environment Variable Setup

## ⚠️ IMPORTANT: Manual Setup Required

**Yes, you MUST manually set the environment variable in Vercel's dashboard.**

The environment variable **cannot** be set via `vercel.json` for `NEXT_PUBLIC_*` variables. It must be configured through Vercel's UI or CLI.

## Step-by-Step Setup

### Option 1: Vercel Dashboard (Recommended) ✅

1. **Go to your Vercel project:**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click on `clarity-demo` project

2. **Navigate to Settings:**
   - Click **Settings** tab at the top
   - Select **Environment Variables** from the left sidebar

3. **Add the variable:**
   - **Key:** `NEXT_PUBLIC_CLARITY_ID`
   - **Value:** `uel5b1h20s`
   - **Environments:** Check all three:
     - ✅ Production
     - ✅ Preview  
     - ✅ Development

4. **Save:**
   - Click **Save** button

5. **Redeploy (Important!):**
   - Go to **Deployments** tab
   - Find the latest deployment
   - Click **•••** (three dots) → **Redeploy**
   - Wait ~30-60 seconds for deployment to complete

### Option 2: Vercel CLI

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login to Vercel
vercel login

# Link your project (in project directory)
cd /Users/martijnmulder/Documents/ClarityDemo
vercel link

# Add environment variable
vercel env add NEXT_PUBLIC_CLARITY_ID

# When prompted:
# - Enter value: uel5b1h20s
# - Select environments: Production, Preview, Development (all)

# Redeploy
vercel --prod
```

## Why Manual Setup is Required

### `NEXT_PUBLIC_*` Variables Are Special

Next.js public environment variables (`NEXT_PUBLIC_*`) are:
- ✅ Embedded into the client-side bundle at **build time**
- ✅ Available in the browser (client-side code)
- ⚠️ Must be set **before** the build runs

### Vercel's Build Process

1. Vercel reads environment variables from **dashboard settings**
2. Next.js build runs with those variables
3. Variables are embedded into JavaScript bundles
4. Bundles are deployed

**Therefore:** Variables must be in Vercel's dashboard, not in `vercel.json` or code.

## Verification Steps

### After Setting Environment Variable:

1. **Check Build Logs:**
   - Go to **Deployments** → Click on latest deployment
   - Check build logs
   - Should **NOT** see: `NEXT_PUBLIC_CLARITY_ID is not set in production`

2. **Check Live Site:**
   - Visit: [https://clarity-demo-eight.vercel.app/](https://clarity-demo-eight.vercel.app/)
   - Open Browser DevTools → Console
   - Type: `typeof clarity`
   - Should return: `"function"` ✅

3. **Check Network Requests:**
   - In DevTools → Network tab
   - Filter by: `clarity.ms`
   - Should see requests to Clarity servers ✅

4. **Check Clarity Dashboard:**
   - Visit: [clarity.microsoft.com](https://clarity.microsoft.com)
   - Select your project
   - Within 5-10 minutes, should see sessions appearing ✅

## Common Issues

### Issue: "NEXT_PUBLIC_CLARITY_ID is not set in production"

**Solution:**
- Environment variable not added in Vercel dashboard
- OR added but didn't redeploy
- **Fix:** Add variable and redeploy

### Issue: "typeof clarity returns 'undefined'"

**Solution:**
- Variable not set, or
- Build didn't include the variable
- **Fix:** Verify variable in Vercel dashboard, redeploy

### Issue: "Clarity not tracking"

**Solution:**
- Variable is set but incorrect value
- Clarity project ID is wrong
- **Fix:** Double-check Project ID is `uel5b1h20s`

### Issue: "Build warnings about env variable"

**Expected Behavior:**
- ⚠️ Build-time warnings are **normal and safe**
- Variable is loaded at runtime in browser
- Warnings during static generation can be ignored

## Environment Variable Reference

### For This Project:

| Variable | Value | Required | Environments |
|----------|-------|----------|--------------|
| `NEXT_PUBLIC_CLARITY_ID` | `uel5b1h20s` | ✅ Yes | Production, Preview, Development |
| `NEXT_PUBLIC_CLARITY_ENABLE_DEV` | `true` | ❌ Optional | Development only |

### Where Variables Work:

| Location | Works? | Purpose |
|----------|--------|---------|
| `.env.local` | ✅ Yes | Local development only (not deployed) |
| `.env.production` | ❌ No | Not read by Vercel |
| `vercel.json` | ❌ No | Legacy, doesn't work for NEXT_PUBLIC_* |
| **Vercel Dashboard** | ✅ **YES** | **Production deployment** ✅ |
| Vercel CLI | ✅ Yes | Alternative to dashboard |

## Security Notes

### Public Variables

⚠️ **IMPORTANT:** `NEXT_PUBLIC_*` variables are:
- ✅ Visible in browser JavaScript bundles
- ✅ Anyone can see them by viewing page source
- ✅ Safe for Clarity Project IDs (they're meant to be public)
- ❌ **NEVER** use for API keys, secrets, or passwords

### Private Variables

For sensitive data, use:
- Environment variables **without** `NEXT_PUBLIC_` prefix
- They're only available on the server (API routes)
- Not exposed to client-side JavaScript

Example:
```bash
# Public (client-side) - OK for Clarity ID
NEXT_PUBLIC_CLARITY_ID=uel5b1h20s

# Private (server-side only) - For API keys
CLARITY_API_SECRET=your_secret_key_here
```

## Quick Setup Checklist

- [ ] Go to Vercel Dashboard
- [ ] Open `clarity-demo` project
- [ ] Navigate to Settings → Environment Variables
- [ ] Add `NEXT_PUBLIC_CLARITY_ID` = `uel5b1h20s`
- [ ] Select all environments (Production, Preview, Development)
- [ ] Click Save
- [ ] Go to Deployments tab
- [ ] Redeploy latest deployment
- [ ] Wait ~60 seconds
- [ ] Visit live site and verify `typeof clarity === 'function'`
- [ ] Check Clarity dashboard for incoming sessions

## Resources

- [Vercel Environment Variables Docs](https://vercel.com/docs/projects/environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)

---

**TL;DR:** Yes, you must manually add `NEXT_PUBLIC_CLARITY_ID=uel5b1h20s` in Vercel's dashboard under Settings → Environment Variables, then redeploy.

