import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Detmax Driving School & Computer College',
  description: 'How Detmax collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page" style={{ padding: '160px 5% 80px', maxWidth: '900px', margin: '0 auto', color: '#1F2937', lineHeight: 1.7 }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#001f3f', textDecoration: 'none', fontWeight: 600, marginBottom: '24px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#001f3f', marginBottom: '12px', fontWeight: 800 }}>Privacy Policy</h1>
      <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '32px' }}>Last updated: October 13, 2026</p>

      <p>
        Detmax Limited Company ("Detmax," "we," "us," or "our") operates the website <a href="https://detmaxinstitute.co.ke" style={{ color: '#001f3f' }}>detmaxinstitute.co.ke</a>. This page informs you of our policies regarding the collection, use, and disclosure of personal information we receive from users of the site.
      </p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>1. Information We Collect</h2>
      <p>When you submit an inquiry, register for a course, or contact us, we may collect:</p>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone / WhatsApp number</li>
        <li>Physical address</li>
        <li>Date of birth and ID / Passport number (for driving enrollment)</li>
        <li>Course preferences and emergency contact details</li>
        <li>Any additional information you include in free-text fields</li>
      </ul>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process enrollment applications and course registrations</li>
        <li>Reply to inquiries and provide customer support</li>
        <li>Send confirmation emails, payment instructions, and program updates</li>
        <li>Comply with NTSA, KRA, and other regulatory requirements</li>
        <li>Improve our website, courses, and student experience</li>
      </ul>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>3. Data Storage & Security</h2>
      <p>
        Your data is transmitted over HTTPS and stored on secure Vercel infrastructure. Email delivery is handled by authenticated SMTP. We retain your data only as long as necessary to deliver our services or comply with legal obligations.
      </p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>4. Sharing of Information</h2>
      <p>
        We do not sell your personal information. We may share limited information with NTSA, M-Pesa payment processors, and our certified partner mentors strictly for legitimate operational purposes.
      </p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>5. Your Rights</h2>
      <p>You have the right to access, correct, or request deletion of your personal data. Email <a href="mailto:info@detmaxinstitute.co.ke" style={{ color: '#001f3f' }}>info@detmaxinstitute.co.ke</a> to exercise these rights.</p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>6. Cookies</h2>
      <p>The site uses essential session cookies. No third-party advertising cookies are placed without consent.</p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>7. Changes to this Policy</h2>
      <p>We may update this policy from time to time. The latest version will always be posted on this page with the "Last updated" date above.</p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>8. Contact</h2>
      <p>
        Detmax Limited Company<br />
        Nairobi, Kenya — P.O BOX 301-00100<br />
        Email: <a href="mailto:info@detmaxinstitute.co.ke" style={{ color: '#001f3f' }}>info@detmaxinstitute.co.ke</a><br />
        Phone: +254 111 379171
      </p>
    </main>
  )
}
