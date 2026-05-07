import React from 'react';

const activities = [
  {
    id: 'zoho',
    title: 'ZOHO Developer Bootcamp',
    type: 'Workshop',
    icon: '💻',
    color: '#FF6B9D',
    desc: 'Intensive developer bootcamp covering ZOHO suite, custom app development, and enterprise software integration.',
    highlights: ['ZOHO Creator', 'App Development', 'Enterprise Integration'],
  },
  {
    id: 'paper-industry5',
    title: 'Industry 5.0 Paper Presentation',
    type: 'Academic',
    icon: '📝',
    color: '#9B59B6',
    desc: 'Presented a research paper on the impact of Industry 5.0 on modern manufacturing and the role of AI & human collaboration.',
    highlights: ['Research Paper', 'Industry 5.0', 'AI & Robotics'],
  },
  {
    id: 'hackathon',
    title: 'Hackathon Participation',
    type: 'Competition',
    icon: '🏆',
    color: '#E879A0',
    desc: 'Competed in multiple hackathons developing innovative solutions under time pressure, collaborating in cross-functional teams.',
    highlights: ['Team Collaboration', 'Rapid Prototyping', 'Innovation'],
  },
];

const Extracurricular = () => {
  return (
    <section
      id="extracurricular"
      data-testid="extracurricular-section"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-4 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(155,89,182,0.12), transparent 60%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-pink-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3" data-testid="extra-subtitle">
            Beyond Academics
          </p>
          <h2 className="section-title gradient-text" data-testid="extra-title">Extra-Curricular</h2>
          <div className="section-underline" data-testid="extra-underline" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8" data-testid="extra-grid">
          {activities.map((act) => (
            <div
              key={act.id}
              data-testid={`extra-card-${act.id}`}
              className="glass-card p-7 sm:p-8 hover-lift flex flex-col group"
              style={{ border: `1px solid ${act.color}22` }}
            >
              {/* Icon + Type badge */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${act.color}20, rgba(155,89,182,0.12))`,
                    border: `1px solid ${act.color}35`,
                    boxShadow: `0 6px 24px ${act.color}18`,
                  }}
                >
                  {act.icon}
                </div>
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0 ml-3"
                  style={{ background: `linear-gradient(135deg, ${act.color}30, rgba(155,89,182,0.2))`, color: act.color, border: `1px solid ${act.color}35` }}
                >
                  {act.type}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug" data-testid={`extra-title-${act.id}`}>
                {act.title}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 flex-1" data-testid={`extra-desc-${act.id}`}>
                {act.desc}
              </p>

              <div className="flex flex-wrap gap-2" data-testid={`extra-highlights-${act.id}`}>
                {act.highlights.map(h => (
                  <span
                    key={h}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: `${act.color}12`, color: act.color, border: `1px solid ${act.color}28` }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Bottom accent */}
              <div
                className="mt-6 h-0.5 rounded-full"
                style={{ background: `linear-gradient(90deg, ${act.color}, transparent)`, width: '50%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
