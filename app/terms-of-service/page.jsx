import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Detmax Driving School & Computer College',
  description: 'Terms and conditions for using Detmax services and website.',
}

export default function TermsOfServicePage() {
  return (
    <main className="legal-page" style={{ padding: '160px 5% 80px', maxWidth: '900px', margin: '0 auto', color: '#1F2937', lineHeight: 1.7 }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#001f3f', textDecoration: 'none', fontWeight: 600, marginBottom: '24px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#001f3f', marginBottom: '12px', fontWeight: 800 }}>Terms of Service</h1>
      <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '32px' }}>Last updated: October 13, 2026</p>

      <p>
        By accessing <a href="https://detmaxinstitute.co.ke" style={{ color: '#001f3f' }}>detmaxinstitute.co.ke</a> or enrolling in any Detmax Limited Company ("Detmax") program, you agree to be bound by these Terms of Service.
      </p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>1. Services</h2>
      <p>Detmax provides NTSA-aligned driving instruction (manual and automatic) and online computer training packages. Course content, schedules, and fees are described on this website and may be updated at our discretion.</p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>2. Enrollment & Payment</h2>
      <ul>
        <li>Enrollment is confirmed only after the registration form is submitted and the enrollment officer has contacted you.</li>
        <li>Fees are payable via M-Pesa Paybill 247247, Account 0300161332168, or as otherwise instructed.</li>
        <li>Installment plans are available for selected programs; missed installments may suspend access to course materials.</li>
      </ul>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>3. Refund Policy</h2>
      <p>Fees are generally non-refundable once course materials have been issued. Refund requests submitted before issuance of materials are reviewed case-by-case at management's discretion.</p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>4. Driving License Disclaimer</h2>
      <p>Detmax prepares students thoroughly for the NTSA driving test; however, issuance of a driving license is at the sole discretion of the National Transport and Safety Authority based on the candidate's performance.</p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>5. Student Conduct</h2>
      <p>Students are expected to be respectful, disciplined, and follow all institutional rules. Detmax reserves the right to suspend or terminate access for misconduct.</p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>6. Intellectual Property</h2>
      <p>All website content, course material, and branding is the property of Detmax Limited Company. Reproduction without written consent is prohibited.</p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>7. Limitation of Liability</h2>
      <p>Detmax is not liable for indirect, incidental, or consequential damages arising from the use of our services beyond the fees paid for the relevant course.</p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>8. Governing Law</h2>
      <p>These terms are governed by the laws of the Republic of Kenya.</p>

      <h2 style={{ color: '#001f3f', marginTop: '32px' }}>9. Contact</h2>
      <p>
        Detmax Limited Company<br />
        Nairobi, Kenya — P.O BOX 301-00100<br />
        Email: <a href="mailto:info@detmaxinstitute.co.ke" style={{ color: '#001f3f' }}>info@detmaxinstitute.co.ke</a><br />
        Phone: +254 111 379171
      </p>
    </main>
  )
}
