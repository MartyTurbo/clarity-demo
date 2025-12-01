'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function ClarityScript() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID

  useEffect(() => {
    // Auto-approve consent for Clarity (covered by TOS)
    if (typeof window !== 'undefined' && clarityId) {
      console.log('Microsoft Clarity initialized with auto-consent')
    }
  }, [clarityId])

  if (!clarityId) {
    console.warn('NEXT_PUBLIC_CLARITY_ID is not set')
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
          })(window, document, "clarity", "script", "${clarityId}");
        `,
      }}
    />
  )
}

