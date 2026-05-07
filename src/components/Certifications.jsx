import React, { useState } from 'react';

const certifications = [
  {
    id: 'nptel-python',
    title: 'Python for Data Science',
    issuer: 'NPTEL',
    icon: '🐍',
    color: '#3776AB',
    category: 'Data Science',
    desc: 'Comprehensive course covering Python for data analysis, visualization, and scientific computing.',
    year: '2023',
    badge: '⭐',
  },
  {
    id: 'nptel-ml',
    title: 'Machine Learning',
    issuer: 'NPTEL',
    icon: '🤖',
    color: '#FF6B9D',
    category: 'AI/ML',
    desc: 'Supervised and unsupervised learning, model evaluation, and real-world ML applications.',
    year: '2023',
    badge: '⭐',
  },
  {
    id: 'nptel-da',
    title: 'Data Analysis',
    issuer: 'NPTEL',
    icon: '📊',
    color: '#9B59B6',
    category: 'Data Science',
    desc: 'Statistical analysis, data wrangling, and exploratory data analysis techniques.',
    year: '2023',
    badge: '⭐',
  },
  {
    id: 'power-bi',
    title: 'Microsoft Power BI',
    issuer: 'Microsoft',
    icon: '📈',
    color: '#F2C811',
    category: 'Visualization',
    desc: 'Business intelligence dashboards, DAX formulas, and advanced Power BI features.',
    year: '2023',
    badge: '🏆',
  },
  {
    id: 'tata-viz',
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'TATA (Forage)',
    icon: '🔷',
    color: '#00A3E0',
    category: 'Visualization',
    desc: 'Virtual internship experience in business data storytelling and visualization strategies.',
    year: '2023',
    badge: '🏆',
  },
  {
    id: 'cisco-ds',
    title: 'Data Science',
    issuer: 'Cisco',
    icon: '🌐',
    color: '#1BA0D7',
    category: 'Data Science',
    desc: 'Foundational data science concepts, tools, and methodologies from Cisco Networking Academy.',
    year: '2023',
    badge: '🏅',
  },
  {
    id: 'hp-life',
    title: 'Data Science',
    issuer: 'HP LIFE',
    icon: '💻',
    color: '#0096D6',
    category: 'Data Science',
    desc: 'Practical data science skills for business applications from HP LIFE learning platform.',
    year: '2023',
    badge: '🏅',
  },
];

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="certifications"
      data-testid="certifications-section"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(108,52,131,0.06), transparent)' }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-6 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FFB3D9, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-6 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6C3483, transparent)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-pink-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3" data-testid="certifications-subtitle">
            Credentials
          </p>
          <h2 className="section-title gradient-text" data-testid="certifications-title">Certifications</h2>
          <div className="section-underline" data-testid="certifications-underline" />
          <p className="text-gray-400 text-sm mt-2">Click on a certificate to learn more</p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7" data-testid="certifications-grid">
          {certifications.map((cert, idx) => (
            <div
              key={cert.id}
              data-testid={`cert-card-${cert.id}`}
              className="relative glass-card p-6 sm:p-7 cursor-pointer transition-all duration-400 hover-lift"
              style={{
                border: activeIndex === idx ? `1px solid ${cert.color}70` : '1px solid rgba(255,107,157,0.15)',
                boxShadow: activeIndex === idx ? `0 20px 60px ${cert.color}25, 0 0 30px ${cert.color}15` : '',
              }}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
              />

              {/* Badge */}
              <div className="absolute top-4 right-4 text-lg">{cert.badge}</div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${cert.color}20, rgba(155,89,182,0.1))`,
                  border: `1px solid ${cert.color}40`,
                  boxShadow: activeIndex === idx ? `0 0 20px ${cert.color}30` : 'none',
                }}
              >
                {cert.icon}
              </div>

              <h3
                className="text-sm sm:text-base font-bold text-white mb-2 leading-snug pr-6"
                data-testid={`cert-title-${cert.id}`}
              >
                {cert.title}
              </h3>
              <p
                className="text-xs sm:text-sm font-semibold mb-3"
                style={{ color: cert.color }}
                data-testid={`cert-issuer-${cert.id}`}
              >
                {cert.issuer}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
                >
                  {cert.category}
                </span>
                <span className="text-xs text-gray-500">{cert.year}</span>
              </div>

              {/* Expanded description */}
              {activeIndex === idx && (
                <div
                  className="mt-5 pt-4 text-xs sm:text-sm text-gray-300 leading-relaxed"
                  style={{ borderTop: `1px solid ${cert.color}30` }}
                  data-testid={`cert-desc-${cert.id}`}
                >
                  {cert.desc}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto" data-testid="certifications-stats">
          {[
            { value: '7+', label: 'Certifications', icon: '🏆' },
            { value: '4+', label: 'Platforms', icon: '🌐' },
            { value: '100%', label: 'Completed', icon: '✅' },
          ].map(stat => (
            <div
              key={stat.label}
              data-testid={`cert-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="glass-card p-5 sm:p-6 text-center hover-lift"
            >
              <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
