'use client'

import Script from 'next/script'

export default function ClarityScript() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID

  // Don't load Clarity in development unless explicitly enabled
  if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_CLARITY_ENABLE_DEV !== 'true') {
    return null
  }

  if (!clarityId) {
    if (process.env.NODE_ENV === 'production') {
      console.error('NEXT_PUBLIC_CLARITY_ID is not set in production')
    }
    return null
  }

  return (
    <Script
      id="clarity-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              
              // -------------------------------------------------------
              // CONSENT API V2 - Auto-grant permissions (covered by TOS)
              // This explicitly grants the specific permissions Clarity checks for.
              // -------------------------------------------------------
              c[a]('consent', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'granted'
              });
              
          })(window, document, "clarity", "script", "${clarityId}");
        `,
      }}
    />
  )
}

