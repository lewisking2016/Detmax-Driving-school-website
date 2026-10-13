'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: 'Do you offer both manual and automatic driving lessons?',
      a: 'Yes. Detmax provides training in both manual and automatic vehicles, with flexible package durations and certified instructors across our partner schools.',
    },
    {
      q: 'How long does the driving course take?',
      a: 'The full curriculum typically includes 14 practical lessons plus theory. Duration depends on your schedule — most learners complete the program in 4–8 weeks.',
    },
    {
      q: 'Do you guarantee a driving license after training?',
      a: 'We prepare you thoroughly for the NTSA test, but the license is issued solely by NTSA based on your performance. Our pass rate is among the highest in Kenya.',
    },
    {
      q: 'How much are the course fees?',
      a: 'Fees vary by program. The full driving curriculum is 13,000 KES. Computer courses start from as low as 3,500 KES. Contact us for the latest pricing and active discounts.',
    },
    {
      q: 'Do you offer discounts or installments?',
      a: 'Yes. We accept M-Pesa installments (Paybill 247247, Account 0300161332168) and run periodic promotions. Currently a 20% discount applies to all computer courses.',
    },
    {
      q: 'What computer courses are available?',
      a: 'Beginner computer basics, Microsoft Office packages, internet & email, graphic design, digital marketing, and advanced AI & Notion PM programs — all 80% online.',
    },
    {
      q: 'Will I receive a certificate?',
      a: 'Yes. Certificates are issued upon successful completion of every course, signed and verifiable by Detmax Ltd.',
    },
    {
      q: 'How do I enroll?',
      a: 'Fill in our Enrollment Form, or message us on WhatsApp at +1 801 319 5465, or call +254 111 379171. An admissions officer will reach out within 24 hours.',
    },
    {
      q: 'Are fees refundable?',
      a: 'Fees are generally non-refundable once course materials have been issued. Pre-issuance requests are reviewed case-by-case by management.',
    },
    {
      q: 'Do you offer job placement assistance?',
      a: 'Through our partnership with the Peer Mentors Association of Kenya (PMAK) we provide CV reviews, interview prep, and job-market guidance — placement is not guaranteed but heavily supported.',
    },
  ]

  return (
    <section id="faq" className="section" style={{ padding: '110px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
          <div className="section-eyebrow navy">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">Quick Answers Before You Enroll</h2>
          <p className="section-desc mx-auto">
            Everything you need to know about Detmax driving and computer programs. Can&apos;t find what you&apos;re looking for? Use the chat tool on the bottom-right.
          </p>
        </div>

        <div className="faq-list" style={{ maxWidth: '860px', margin: '0 auto', borderTop: '1px solid #E2E8F0' }}>
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                style={{ borderBottom: '1px solid #E2E8F0', background: '#FFFFFF' }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: '24px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    cursor: 'pointer',
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: '#001F3F',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#DC2626',
                      minWidth: '32px',
                      fontFamily: 'var(--font-main)',
                    }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {item.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition: 'transform 0.25s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: '#001F3F',
                      flexShrink: 0,
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? '320px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease, padding 0.3s ease',
                    padding: isOpen ? '0 8px 24px 56px' : '0 8px',
                    color: '#475569',
                    lineHeight: 1.7,
                    fontSize: '0.98rem',
                  }}
                >
                  {item.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
