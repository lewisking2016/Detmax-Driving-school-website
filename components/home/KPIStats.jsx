'use client'

export default function KPIStats() {
  const stats = [
    { value: '1,000+', label: 'Students Trained', sub: 'Since 2022' },
    { value: '95%', label: 'NTSA First-Attempt Pass Rate', sub: 'Driving School' },
    { value: '47', label: 'Counties Reached', sub: 'Computer College' },
    { value: '4.8/5', label: 'Average Graduate Rating', sub: 'Verified reviews' },
  ]

  return (
    <section
      className="section"
      style={{
        padding: '80px 0',
        background: '#001F3F',
        color: '#FFFFFF',
        borderTop: '4px solid #DC2626',
      }}
    >
      <div className="container">
        <div className="kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,0.15)', borderLeft: '1px solid rgba(255,255,255,0.15)' }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: '36px 28px',
                borderRight: '1px solid rgba(255,255,255,0.15)',
                borderBottom: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#DC2626' }}>
                0{i + 1}
              </div>
              <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, letterSpacing: '-0.02em', fontFamily: 'var(--font-main)' }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>
                {s.label}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
