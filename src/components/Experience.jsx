import React from 'react';

const experiences = [
  {
    id: 'mh-cockpit',
    role: 'Software Developer Intern',
    company: 'MH Cockpit',
    period: '2023 – Present',
    duration: '1+ Year',
    icon: '🏢',
    color: '#FF6B9D',
    type: 'Current',
    responsibilities: [
      'Developing full-stack web applications and dashboards',
      'Collaborating on UI/UX design and implementation',
      'Working with React, SQL, and REST APIs',
      'Participating in agile development cycles',
    ],
    skills: ['React', 'JavaScript', 'SQL', 'REST APIs', 'Agile'],
  },
  {
    id: 'one-yes',
    role: 'Data Science Intern',
    company: 'One Yes Infotech',
    period: '2023',
    duration: '3 months',
    icon: '📊',
    color: '#9B59B6',
    type: 'Internship',
    responsibilities: [
      'Built Employee Analytics Dashboard',
      'Performed data cleaning and EDA',
      'Created data visualisations with Power BI',
      'Presented insights to stakeholders',
    ],
    skills: ['Python', 'Power BI', 'Pandas', 'SQL', 'EDA'],
  },
  {
    id: 'edunet',
    role: 'AI Intern',
    company: 'Edunet Foundation (AICTE)',
    period: '2023',
    duration: '6 weeks',
    icon: '🤖',
    color: '#E879A0',
    type: 'Internship',
    responsibilities: [
      'Developed AI-Powered Crop Recommendation System',
      'Applied ML algorithms for agricultural prediction',
      'Collaborated with mentors on AI solutions',
      'Delivered AICTE certified project',
    ],
    skills: ['AI', 'Machine Learning', 'Python', 'Flask', 'Agri-Tech'],
  },
];

const TimelineBadge = ({ type, color }) => {
  if (type === 'Current') {
    return (
      <span
        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
        style={{ background: 'rgba(74,222,128,0.12)', color: '#4ADE80', border: '1px solid rgba(74,222,128,0.25)' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Current
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
    >
      Internship
    </span>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden"
    >
      <div className="absolute left-0 top-1/3 w-56 h-56 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,107,157,0.15), transparent)' }} />
      <div className="absolute right-0 bottom-1/3 w-44 h-44 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,89,182,0.15), transparent)' }} />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-pink-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3" data-testid="experience-subtitle">
            My Journey
          </p>
          <h2 className="section-title gradient-text" data-testid="experience-title">Experience Timeline</h2>
          <div className="section-underline" data-testid="experience-underline" />
        </div>

        {/* ── Timeline ── */}
        <div className="relative" data-testid="experience-timeline">
          {/* Vertical line — left side on mobile, centred on desktop */}
          <div
            className="absolute top-0 bottom-0 w-0.5 timeline-line"
            style={{ left: '20px' }}
            data-testid="experience-timeline-line"
          />
          {/* Desktop centred line */}
          <div
            className="hidden md:block absolute top-0 bottom-0 w-0.5 timeline-line"
            style={{ left: '50%', transform: 'translateX(-50%)' }}
          />

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0; // left card on desktop for even items

            return (
              <div
                key={exp.id}
                data-testid={`experience-item-${exp.id}`}
                className="relative flex mb-14 last:mb-0"
              >
                {/* ── Mobile layout: single column, indent from left dot ── */}
                <div className="md:hidden w-full pl-12">
                  <TimelineCard exp={exp} />
                </div>

                {/* ── Desktop layout: alternating left/right ── */}
                <div className="hidden md:flex w-full items-start">
                  {isLeft ? (
                    <>
                      {/* Left card */}
                      <div className="w-5/12 pr-10 md:pr-14">
                        <TimelineCard exp={exp} />
                      </div>
                      {/* Dot (centre) */}
                      <div className="relative flex-shrink-0 flex items-start justify-center" style={{ width: '10%' }}>
                        <TimelineDot exp={exp} />
                      </div>
                      {/* Right date */}
                      <div className="w-5/12 pl-10 pt-3">
                        <DateBadge exp={exp} />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left date */}
                      <div className="w-5/12 pr-10 pt-3 flex justify-end">
                        <DateBadge exp={exp} />
                      </div>
                      {/* Dot (centre) */}
                      <div className="relative flex-shrink-0 flex items-start justify-center" style={{ width: '10%' }}>
                        <TimelineDot exp={exp} />
                      </div>
                      {/* Right card */}
                      <div className="w-5/12 pl-10">
                        <TimelineCard exp={exp} />
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile dot */}
                <div
                  className="md:hidden absolute top-4 rounded-full"
                  style={{
                    left: '12px',
                    width: '16px',
                    height: '16px',
                    background: `radial-gradient(circle, ${exp.color}, #6C3483)`,
                    border: `2px solid ${exp.color}`,
                    boxShadow: `0 0 14px ${exp.color}60`,
                  }}
                  data-testid={`experience-dot-mobile-${exp.id}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TimelineDot = ({ exp }) => (
  <div
    className="w-5 h-5 rounded-full mt-4 flex-shrink-0"
    style={{
      background: `radial-gradient(circle, ${exp.color}, #6C3483)`,
      border: `2px solid ${exp.color}`,
      boxShadow: `0 0 18px ${exp.color}60`,
    }}
    data-testid={`experience-dot-${exp.id}`}
  />
);

const DateBadge = ({ exp }) => (
  <div
    className="inline-flex flex-col items-center text-center px-4 py-2 rounded-xl"
    style={{
      background: `${exp.color}12`,
      border: `1px solid ${exp.color}30`,
    }}
    data-testid={`exp-date-badge-${exp.id}`}
  >
    <span className="text-xs font-bold" style={{ color: exp.color }}>{exp.period}</span>
    <span className="text-xs text-gray-500 mt-0.5">{exp.duration}</span>
  </div>
);

const TimelineCard = ({ exp }) => (
  <div
    className="glass-card p-6 hover-lift"
    style={{ border: `1px solid ${exp.color}25`, boxShadow: `0 4px 24px ${exp.color}10` }}
  >
    {/* Top row: badge + role */}
    <div className="flex items-start justify-between gap-3 mb-3">
      <div className="min-w-0">
        <TimelineBadge type={exp.type} color={exp.color} />
        <h3 className="text-base font-bold text-white mt-2 leading-snug" data-testid={`exp-role-${exp.id}`}>
          {exp.role}
        </h3>
        <p className="text-sm font-semibold mt-0.5" style={{ color: exp.color }} data-testid={`exp-company-${exp.id}`}>
          {exp.icon} {exp.company}
        </p>
      </div>
    </div>

    {/* Period (shown in card on mobile) */}
    <p className="md:hidden text-gray-500 text-xs mb-3 flex items-center gap-1" data-testid={`exp-period-${exp.id}`}>
      📅 {exp.period} · {exp.duration}
    </p>

    {/* Divider */}
    <div className="mb-3" style={{ height: '1px', background: `linear-gradient(90deg, ${exp.color}30, transparent)` }} />

    {/* Responsibilities */}
    <ul className="space-y-1.5 mb-4" data-testid={`exp-responsibilities-${exp.id}`}>
      {exp.responsibilities.map((r, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
          <span className="mt-0.5 flex-shrink-0 text-xs" style={{ color: exp.color }}>▸</span>
          {r}
        </li>
      ))}
    </ul>

    {/* Skills */}
    <div className="flex flex-wrap gap-1.5" data-testid={`exp-skills-${exp.id}`}>
      {exp.skills.map(skill => (
        <span
          key={skill}
          className="text-xs px-2.5 py-0.5 rounded-full"
          style={{ background: `${exp.color}12`, color: exp.color, border: `1px solid ${exp.color}28` }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Experience;
