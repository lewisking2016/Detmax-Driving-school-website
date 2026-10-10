'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState('ai')

  const courses = [
    {
      id: 'ai',
      name: 'AI Basics',
      icon: '🤖',
      detmaxPrice: '7,500 KES',
      duration: '3 weeks',
      features: [
        '✓ ChatGPT & Claude Training',
        '✓ Prompt Engineering',
        '✓ AI Tools for Work',
        '✓ WhatsApp Support',
        '✓ Certificate Included',
      ],
      competitors: [
        { name: 'Moringa School', price: '40,000 KES' },
        { name: 'Coursera', price: '25,000 KES' },
      ],
      message: '💡 Save 50-81% compared to competitors',
      link: '/courses/ai-basics',
    },
    {
      id: 'notion',
      name: 'Notion & PM',
      icon: '📋',
      detmaxPrice: '8,500 KES',
      duration: '3 weeks',
      features: [
        '✓ Notion Masterclass',
        '✓ Project Boards Setup',
        '✓ Team Collaboration',
        '✓ 10 Templates (5K value)',
        '✓ Personal Support',
      ],
      competitors: [
        { name: 'NobleProg', price: '35,000 KES' },
        { name: 'Skillademia', price: '15,000 KES' },
      ],
      message: '💡 Save 43-75% + get templates free',
      link: '/courses/notion-pm',
    },
    {
      id: 'pm',
      name: 'Project Mgmt',
      icon: '⏱️',
      detmaxPrice: '6,000 KES',
      duration: '2 weeks',
      features: [
        '✓ Project Fundamentals',
        '✓ Planning & Tracking',
        '✓ Practical Projects',
        '✓ Team Collaboration',
        '✓ Quick & Affordable',
      ],
      competitors: [
        { name: 'Moringa School', price: '45,000 KES' },
        { name: 'IJLAPS', price: '25,000 KES' },
      ],
      message: '💡 Most Affordable PM course in Kenya',
      link: '/courses/project-management',
    },
    {
      id: 'solar',
      name: 'Solar',
      icon: '☀️',
      detmaxPrice: '12,000 KES',
      duration: '3 weeks',
      features: [
        '✓ Solar Fundamentals',
        '✓ System Sizing',
        '✓ Installation Basics',
        '✓ Prep for T1 Cert',
        '✓ Pathway to 42K UoN',
      ],
      competitors: [
        { name: 'University of Nairobi', price: '42,000 KES' },
        { name: 'SERC Strathmore', price: '49,000 KES' },
      ],
      message: '💡 Save 60-77% before official certification',
      link: '/courses/solar-basics',
    },
    {
      id: 'erp',
      name: 'ERP',
      icon: '💼',
      detmaxPrice: '10,000 KES',
      duration: '3 weeks',
      features: [
        '✓ ERP Fundamentals',
        '✓ KRA eTIMS Integration',
        '✓ M-Pesa Reconciliation',
        '✓ Career Pathway',
        '✓ Beginner-Friendly',
      ],
      competitors: [
        { name: 'NobleProg (SAP)', price: '260,000 KES' },
        { name: 'ITKenya', price: '260K-910K' },
      ],
      message: '💡 Zero competitors at intro level - Blue Ocean!',
      link: '/courses/erp-intro',
    },
    {
      id: 'medical',
      name: 'Medical',
      icon: '🏥',
      detmaxPrice: '7,000 KES',
      duration: '2 weeks',
      features: [
        '✓ Healthcare Operations',
        '✓ Patient Management',
        '✓ Admin Tools',
        '✓ Quick & Affordable',
        '✓ Certificate',
      ],
      competitors: [
        { name: 'KIPS College', price: '25,000 KES' },
        { name: 'ICS College', price: '20,000 KES' },
      ],
      message: '💡 Perfect for healthcare workers',
      link: '/courses/medical-admin',
    },
    {
      id: 'computer',
      name: 'Computer',
      icon: '💻',
      detmaxPrice: '9,500 KES',
      duration: '4 weeks',
      features: [
        '✓ MS Office Complete',
        '✓ Internet & Email',
        '✓ Digital Skills',
        '✓ 100% Online',
        '✓ Certificate',
      ],
      competitors: [
        { name: 'Strathmore University', price: '45,000 KES' },
        { name: 'Tech Academy', price: '30,000 KES' },
      ],
      message: '💡 Save 52-80% on computer training',
      link: '/courses/computer-basics',
    },
    {
      id: 'marketing',
      name: 'Digital Mkt',
      icon: '📱',
      detmaxPrice: '7,500 KES',
      duration: '2 weeks',
      features: [
        '✓ Social Media Strategy',
        '✓ Content Creation',
        '✓ Online Business',
        '✓ Quick & Practical',
        '✓ Certificate',
      ],
      competitors: [
        { name: 'IIDE (India)', price: '40,000 KES' },
        { name: 'EduDelphi', price: '35,000 KES' },
      ],
      message: '💡 Save 62-81% on digital marketing',
      link: '/courses/digital-marketing',
    },
  ]

  const activeCourse = courses.find((c) => c.id === activeTab)

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-80">
          <h2 className="section-title">Professional Skills. Affordable Prices.</h2>
          <p className="section-desc mx-auto" style={{ maxWidth: '600px' }}>
            Compare our pricing with Kenya's leading institutions. See why 100+ students choose Detmax.
          </p>
        </div>

        {/* Course Tabs */}
        <div className="course-tabs mb-50">
          <div className="tabs-container">
            {courses.map((course) => (
              <button
                key={course.id}
                className={`tab-btn ${activeTab === course.id ? 'active' : ''}`}
                onClick={() => setActiveTab(course.id)}
              >
                {course.icon} {course.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Course Card */}
        {activeCourse && (
          <div className="course-comparison-card active">
            <div className="comparison-grid">
              {/* Detmax Column */}
              <div className="provider-column detmax-featured">
                <div className="provider-header detmax">
                  <h3>Detmax</h3>
                  <span className="badge-best">Best Value</span>
                </div>
                <div className="course-details">
                  <div className="price-highlight">{activeCourse.detmaxPrice}</div>
                  <div className="duration-tag">{activeCourse.duration}</div>
                  <ul className="features-list">
                    {activeCourse.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Link href={activeCourse.link} className="btn btn-primary full-width">
                    Enroll Now
                  </Link>
                  <p className="marketing-note">{activeCourse.message}</p>
                </div>
              </div>

              {/* Competitor Columns */}
              {activeCourse.competitors.map((competitor, idx) => (
                <div key={idx} className="provider-column">
                  <div className="provider-header competitor">
                    <h3>{competitor.name}</h3>
                    <span className="badge-standard">Competitor</span>
                  </div>
                  <div className="course-details">
                    <div className="price-highlight competitor-price">{competitor.price}</div>
                    <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
                      Compare our prices and see the difference
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-80">
          <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Ready to Get Started?</h3>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '30px' }}>
            Choose any course above and transform your career. First 50 students get 30% off!
          </p>
          <Link href="/registration" className="btn btn-primary btn-lg">
            Enroll Now & Save 30% →
          </Link>
        </div>
      </div>
    </section>
  )
}
