'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function ClarityScript() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID

  useEffect(() => {
    // Auto-approve consent for Clarity (covered by TOS)
    if (typeof window !== 'undefined' && clarityId) {
      // Set consent to approved before Clarity initializes
      // This ensures tracking starts immediately without consent prompts
      if (typeof (window as any).clarity === 'function') {
        (window as any).clarity('consent')
      }
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Microsoft Clarity initialized with auto-consent approval')
      }
    }
  }, [clarityId])

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
      onLoad={() => {
        // Automatically approve consent as soon as Clarity loads
        if (typeof (window as any).clarity === 'function') {
          (window as any).clarity('consent')
        }
      }}
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `,
      }}
    />
  )
}

