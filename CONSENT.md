# Auto-Consent Implementation

This document explains how automatic consent is implemented for Microsoft Clarity tracking in this application.

## Overview

This application implements **automatic consent approval** for Microsoft Clarity analytics, meaning users are tracked immediately without requiring explicit consent interaction (e.g., no cookie banners).

## Legal Basis

This implementation assumes:
- ✅ Consent is covered by your Terms of Service (TOS)
- ✅ Users agree to tracking by using the service
- ✅ Privacy policy clearly states analytics are in use
- ✅ Compliance with applicable privacy laws (GDPR, CCPA, etc.)

**⚠️ Important:** Ensure your privacy policy and terms of service clearly communicate that analytics tracking is enabled.

## Technical Implementation

### 1. ClarityScript Component

Located at `app/components/ClarityScript.tsx`, this component:

```typescript
- Loads the Clarity script using Next.js Script component
- Automatically calls clarity('consent') when the script loads
- Only loads in production by default (not in development)
- Provides console warnings if CLARITY_ID is missing
```

### 2. Consent Flow

1. **Script Loading**: Clarity script loads via `strategy="afterInteractive"`
2. **Auto-Consent**: `onLoad` callback triggers `clarity('consent')`
3. **Tracking Starts**: Clarity begins tracking immediately
4. **No User Interaction**: No banners, modals, or prompts shown

### 3. Development vs Production

**Production (default):**
- Clarity loads and tracks automatically
- Auto-consent is granted immediately
- Full tracking enabled

**Development (disabled by default):**
- Clarity doesn't load to avoid polluting analytics
- Enable with: `NEXT_PUBLIC_CLARITY_ENABLE_DEV=true`

## Environment Variables

```bash
# Required in production
NEXT_PUBLIC_CLARITY_ID=your_clarity_project_id

# Optional: Enable Clarity in development
NEXT_PUBLIC_CLARITY_ENABLE_DEV=true
```

## Clarity API Reference

The implementation uses the Clarity JavaScript API:

```javascript
// Grant consent (enables tracking)
clarity('consent')

// You can also use clarity to:
// - Set custom tags: clarity('set', 'key', 'value')
// - Track custom events: clarity('event', 'eventName')
// - Identify users: clarity('identify', 'userId')
```

## Privacy Considerations

### What Clarity Tracks

- ✅ Page views and navigation
- ✅ Click events and interactions
- ✅ Scroll behavior
- ✅ Session recordings
- ✅ Heatmap data
- ❌ Personally Identifiable Information (PII) - should be masked

### Data Protection

Microsoft Clarity automatically masks:
- Input fields (passwords, emails, etc.)
- Sensitive form data
- Payment information

### Compliance Checklist

- [ ] Privacy policy mentions Microsoft Clarity usage
- [ ] Terms of Service include consent for analytics
- [ ] Cookie policy (if applicable) lists Clarity cookies
- [ ] Data processing agreement with Microsoft (if needed)
- [ ] GDPR compliance (if serving EU users)
- [ ] CCPA compliance (if serving California users)

## Alternative Implementations

If you need explicit user consent instead of automatic consent:

### Option 1: Conditional Loading

```typescript
// Only load Clarity after user accepts
const [consentGiven, setConsentGiven] = useState(false)

// In your consent banner:
const handleAccept = () => {
  setConsentGiven(true)
  // Now ClarityScript will load
}

return consentGiven ? <ClarityScript /> : null
```

### Option 2: Cookie Consent Integration

Integrate with popular consent management platforms:
- OneTrust
- Cookiebot
- Osano
- Cookie Consent

## Resources

- [Microsoft Clarity Documentation](https://learn.microsoft.com/en-us/clarity/)
- [Clarity Privacy & Security](https://clarity.microsoft.com/privacy)
- [GDPR Compliance Guide](https://gdpr.eu/)
- [CCPA Compliance Guide](https://oag.ca.gov/privacy/ccpa)

## Contact

For questions about this implementation:
- GitHub Issues: [MartyTurbo/clarity-demo](https://github.com/MartyTurbo/clarity-demo/issues)
- Microsoft Clarity Support: [clarity.microsoft.com/support](https://clarity.microsoft.com/support)

