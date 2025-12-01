# Clarity Consent API V2 - Implementation Guide

## Overview

This project uses **Microsoft Clarity Consent API V2** for automatic consent management. This is the **recommended approach** as it provides explicit, granular control over tracking permissions.

## Implementation Comparison

### ✅ V2 Format (Current - Recommended)

```javascript
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    
    // CONSENT API V2 - Explicit permission grants
    c[a]('consent', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
    });
    
})(window, document, "clarity", "script", "YOUR_PROJECT_ID");
```

### ❌ V1 Format (Legacy)

```javascript
// Old approach - still works but less explicit
clarity('consent')
```

## Why Use V2 Format?

### 1. **Explicit Permissions**
V2 clearly defines which permissions are granted:
- `analytics_storage` - Session recordings, heatmaps, user behavior
- `ad_storage` - Remarketing, conversion tracking, ad optimization

### 2. **Google Consent Mode Compatible**
Aligns with [Google's Consent Mode v2](https://support.google.com/analytics/answer/9976101):
- Same permission naming convention
- Works alongside Google Analytics consent
- Unified consent management across platforms

### 3. **Granular Control**
You can grant different permissions separately:

```javascript
// Grant analytics only, deny advertising
clarity('consent', {
    'analytics_storage': 'granted',
    'ad_storage': 'denied'
});
```

### 4. **Dynamic Consent Updates**
Update consent at any time based on user preference:

```javascript
// User opts out of analytics
clarity('consent', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied'
});
```

### 5. **Future-Proof**
- Microsoft can add new permission types
- Your implementation remains compatible
- More transparent for compliance

## Permission Types Explained

### `analytics_storage`

**What it enables:**
- ✅ Session recordings
- ✅ Heatmaps and click maps
- ✅ Scroll depth tracking
- ✅ User journey analysis
- ✅ Rage clicks and dead clicks
- ✅ Custom events and tags

**When to grant:**
- User agrees to analytics tracking
- Covered by your TOS/Privacy Policy
- Required for product analytics

**When to deny:**
- User opts out of analytics
- Privacy-sensitive pages
- Testing/development environments

### `ad_storage`

**What it enables:**
- ✅ Remarketing capabilities
- ✅ Conversion tracking
- ✅ Ad optimization data
- ✅ User attribution
- ✅ Cross-site tracking (if applicable)

**When to grant:**
- User agrees to marketing cookies
- Running ad campaigns
- Need conversion data

**When to deny:**
- User opts out of advertising
- GDPR/CCPA strict compliance
- No advertising use case

## Implementation in Different Frameworks

### Next.js (This Project)

```typescript
// app/components/ClarityScript.tsx
<Script
  id="clarity-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          
          c[a]('consent', {
              'analytics_storage': 'granted',
              'ad_storage': 'granted'
          });
          
      })(window, document, "clarity", "script", "${clarityId}");
    `,
  }}
/>
```

### React (Vanilla)

```jsx
// components/ClarityScript.jsx
import { Helmet } from 'react-helmet';

function ClarityScript({ projectId }) {
  return (
    <Helmet>
      <script type="text/javascript">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              
              c[a]('consent', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'granted'
              });
              
          })(window, document, "clarity", "script", "${projectId}");
        `}
      </script>
    </Helmet>
  );
}
```

### HTML (Static Sites)

```html
<!-- In <head> tag -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        
        c[a]('consent', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted'
        });
        
    })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
</script>
```

### BettyBlocks Platform

```html
<!-- In Application Header -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        
        c[a]('consent', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted'
        });
        
    })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
</script>
```

## Dynamic Consent Management

### Scenario 1: Cookie Consent Banner

```javascript
// Initial state - denied
window.clarity('consent', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied'
});

// User accepts cookies
function acceptCookies() {
    window.clarity('consent', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
    });
}

// User rejects cookies
function rejectCookies() {
    window.clarity('consent', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
    });
}
```

### Scenario 2: Granular Consent

```javascript
// Essential analytics only
function acceptEssential() {
    window.clarity('consent', {
        'analytics_storage': 'granted',
        'ad_storage': 'denied'  // No marketing
    });
}

// Full consent
function acceptAll() {
    window.clarity('consent', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
    });
}
```

### Scenario 3: GDPR Compliance

```javascript
// Check if user is in EU
const isEU = checkUserRegion();

if (isEU) {
    // Start with denied, wait for consent
    window.clarity('consent', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
    });
} else {
    // Auto-grant for non-EU users
    window.clarity('consent', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
    });
}
```

## Consent State Management

### Check Current Consent State

```javascript
// Clarity stores consent state internally
// You can track it yourself:

let consentState = {
    analytics_storage: 'denied',
    ad_storage: 'denied'
};

function updateConsent(permissions) {
    consentState = { ...consentState, ...permissions };
    window.clarity('consent', permissions);
    
    // Persist to localStorage
    localStorage.setItem('clarity_consent', JSON.stringify(consentState));
}

// Load consent from localStorage on page load
const savedConsent = localStorage.getItem('clarity_consent');
if (savedConsent) {
    const consent = JSON.parse(savedConsent);
    window.clarity('consent', consent);
}
```

## Testing Consent Implementation

### Browser Console Tests

```javascript
// 1. Check if Clarity is loaded
typeof window.clarity === 'function'  // Should be true

// 2. Grant consent manually
window.clarity('consent', {
    'analytics_storage': 'granted',
    'ad_storage': 'granted'
});

// 3. Deny consent manually
window.clarity('consent', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied'
});

// 4. Check network requests
// Open DevTools → Network → Filter by "clarity.ms"
// Should see tracking requests if consent is granted
```

### Verify in Clarity Dashboard

1. Visit [clarity.microsoft.com](https://clarity.microsoft.com)
2. Select your project
3. Check **Settings** → **Setup** → **Installation Status**
4. Should show "Successfully installed" if consent is granted
5. View **Recordings** to see if sessions are being captured

## Compliance Checklist

- [ ] Privacy policy mentions Microsoft Clarity usage
- [ ] Privacy policy explains what data is collected
- [ ] Privacy policy links to [Clarity's privacy policy](https://clarity.microsoft.com/privacy)
- [ ] Terms of Service include consent for analytics (if auto-granting)
- [ ] Cookie policy lists Clarity cookies (if applicable)
- [ ] Consent banner implemented (if required by law)
- [ ] Users can revoke consent
- [ ] Consent state persists across sessions
- [ ] GDPR-compliant for EU users
- [ ] CCPA-compliant for California users

## Best Practices

### ✅ DO

- Grant consent explicitly with V2 format
- Document why you're auto-granting consent
- Provide opt-out mechanism if required
- Update consent dynamically based on user preference
- Test consent in both granted and denied states
- Persist consent state across sessions

### ❌ DON'T

- Use V1 format for new implementations
- Auto-grant without legal basis
- Ignore regional privacy laws
- Track before consent is granted (in strict compliance scenarios)
- Forget to update consent when user changes preferences

## Migration from V1 to V2

If you're currently using the legacy format:

```javascript
// OLD (V1)
clarity('consent')

// NEW (V2) - Just add the permissions object
clarity('consent', {
    'analytics_storage': 'granted',
    'ad_storage': 'granted'
})
```

**Benefits:**
- ✅ More explicit and transparent
- ✅ Better compliance documentation
- ✅ Granular control for future needs
- ✅ Compatible with Google Consent Mode
- ✅ No breaking changes (V1 still works)

## Resources

- [Microsoft Clarity Documentation](https://learn.microsoft.com/en-us/clarity/)
- [Clarity Privacy Policy](https://clarity.microsoft.com/privacy)
- [Google Consent Mode v2](https://support.google.com/analytics/answer/9976101)
- [GDPR Compliance Guide](https://gdpr.eu/)
- [CCPA Compliance Guide](https://oag.ca.gov/privacy/ccpa)

## Support

- **GitHub Issues**: [Create an issue](https://github.com/MartyTurbo/clarity-demo/issues)
- **Clarity Support**: [clarity.microsoft.com/support](https://clarity.microsoft.com/support)

---

**Implementation:** ✅ Consent API V2  
**Format:** Explicit permission grants  
**Compatibility:** Google Consent Mode aligned  
**Status:** Production ready

