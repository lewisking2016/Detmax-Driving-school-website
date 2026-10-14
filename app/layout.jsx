import { Inter, Montserrat } from 'next/font/google'
import '../src/css/style.css'
import '../src/css/chatbot.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScriptInitializer from '@/components/ScriptInitializer'

// Both families ship as variable fonts, so the full weight range is available
// (headings use 800) from one self-hosted file each - no external request.
// The CSS token names deliberately differ from these custom-property names:
// previously both were called --font-main/--font-body, so the hardcoded
// families in style.css shadowed the optimised next/font faces and the site
// ended up downloading Montserrat/Inter twice.
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-display', display: 'swap' })

export const metadata = {
  title: 'Detmax Driving School & Computer College | Elite Educational Excellence in Kenya',
  description: 'Join Detmax for professional driving lessons and online computer packages. NTSA registered, affordable fees, and certified instructors. Start your journey today!',
  keywords: 'driving school Nairobi, online computer college Kenya, NTSA driving license, computer packages, Detmax Ltd',
  openGraph: {
    type: 'website',
    url: 'https://detmaxinstitute.co.ke/',
    title: 'Detmax Driving School & Computer College',
    description: 'Professional driving school and online computer college in Kenya.',
    image: 'https://detmaxinstitute.co.ke/logo.jpeg',
  },
  other: {
    'og:type': 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" type="image/jpeg" href="/logo.jpeg" />
      </head>
      <body className="home-page">
        <div id="app">
          <Navbar />
          {children}
          <Footer />
        </div>

        {/* Floating Actions */}
        <div className="floating-actions">
          <a href="https://wa.me/18013195465?text=Hello%20Detmax,%20I%20would%20like%20more%20information" className="float-btn btn-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: 24, height: 24, fill: 'white' }}>
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </a>
          <a href="tel:+254111379171" className="float-btn btn-call" title="Call Detmax" style={{ background: 'linear-gradient(135deg, #001f3f, #003366)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <button className="float-btn btn-top" id="backToTop" title="Back to Top">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>

        <ScriptInitializer />
      </body>
    </html>
  )
}
