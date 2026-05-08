import React, { useEffect, useRef } from 'react';

const useInView = (ref, threshold = 0.15) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
};

const skills = [
  { label: 'Python', icon: '🐍', level: 90 },
  { label: 'Java', icon: '☕', level: 78 },
  { label: 'React', icon: '⚛️', level: 82 },
  { label: 'MongoDB', icon: '🍃', level: 75 },
  { label: 'SQL', icon: '🗄️', level: 85 },
  { label: 'R', icon: '📊', level: 72 },
  { label: 'Power BI', icon: '📈', level: 80 },
  { label: 'Tableau', icon: '📉', level: 76 },
  { label: 'Figma', icon: '🎨', level: 70 },
  { label: 'Machine Learning', icon: '🤖', level: 85 },
];

const softSkills = [
  { label: 'Problem Solving', icon: '🧩', desc: 'Breaking complex problems into manageable solutions' },
  { label: 'Logical Thinking', icon: '🧠', desc: 'Structured reasoning for optimal outcomes' },
  { label: 'Creative Thinking', icon: '💡', desc: 'Innovative approaches to technical challenges' },
  { label: 'Team Collaboration', icon: '🤝', desc: 'Working effectively across diverse teams' },
];

const SkillBar = ({ label, icon, level }) => {
  const barRef = useRef();
  const fillRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && fillRef.current) {
        fillRef.current.style.width = `${level}%`;
      }
    }, { threshold: 0.2 });
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={barRef} data-testid={`skill-bar-${label.toLowerCase().replace(/\s+/g, '-')}`} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="flex items-center gap-2 text-sm font-medium text-gray-200">
          <span className="text-base">{icon}</span>
          {label}
        </span>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(255,107,157,0.15)', color: '#FF6B9D' }}
        >
          {level}%
        </span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          ref={fillRef}
          className="progress-bar-fill h-full"
          style={{ width: '0%', transition: 'width 1.2s ease' }}
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 overflow-hidden"
      style={{ padding: '96px 32px' }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF6B9D, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #9B59B6, transparent)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-pink-400 text-xs font-semibold tracking-widest uppercase mb-2" data-testid="about-subtitle">
            Who I Am
          </p>
          <h2 className="section-title gradient-text" data-testid="about-title">About Me</h2>
          <div className="section-underline" data-testid="about-underline" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* ── Left Column ── */}
          <div data-testid="about-left-col" className="min-w-0 overflow-hidden">

            {/* Profile card */}
            <div
              data-testid="about-profile-card"
              className="glass-card p-6 mb-6 hover-lift"
              style={{ border: '1px solid rgba(255,107,157,0.25)' }}
            >
              {/* Avatar row */}
              <div className="flex items-center gap-5 mb-5">
                {/* Avatar */}
                <div
                  data-testid="about-avatar"
                  className="relative flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl animate-pulse-pink"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,107,157,0.2), rgba(155,89,182,0.2))',
                    border: '2px solid rgba(255,107,157,0.4)',
                    boxShadow: '0 0 24px rgba(255,107,157,0.25), inset 0 0 20px rgba(155,89,182,0.1)',
                  }}
                >
                  👩‍💻
                  {/* green sparkle badge */}
                  <div
                    className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs"
                    style={{ background: 'linear-gradient(135deg, #FF6B9D, #9B59B6)', boxShadow: '0 2px 10px rgba(255,107,157,0.4)' }}
                  >
                    ✨
                  </div>
                </div>

                {/* Name & tags */}
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-white mb-0.5 truncate" data-testid="about-name">
                    Maghima Lakshmi A
                  </h3>
                  <p className="text-pink-400 text-xs font-semibold mb-2">
                    BTech CSE (AI &amp; Data Science)
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['GPA: 8.8 🎓', '🏢 MH Cockpit', '📍 Chennai'].map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full whitespace-nowrap"
                        style={{ background: 'rgba(255,107,157,0.12)', border: '1px solid rgba(255,107,157,0.25)', color: '#FFB3D9' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="text-gray-300 leading-relaxed text-sm mb-3" data-testid="about-bio">
                  I'm a passionate BTech Computer Science student specialising in{' '}
                  <span className="text-pink-400 font-semibold">Artificial Intelligence &amp; Data Science</span>.
                  Currently working as a{' '}
                  <span className="text-purple-300 font-semibold">Software Developer Intern at MH Cockpit</span>{' '}
                  for over a year, I thrive at the intersection of data, AI, and beautiful user experiences.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm" data-testid="about-bio-2">
                  My journey spans machine learning, deep learning, data visualisation, and full-stack
                  development. I love turning raw data into actionable insights and building intelligent
                  applications that make a real impact.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6" data-testid="about-stats">
              {[
                { value: '8.8', label: 'GPA', icon: '🎓' },
                { value: '1+', label: 'Year Exp.', icon: '💼' },
                { value: '4+', label: 'Projects', icon: '🚀' },
              ].map(stat => (
                <div
                  key={stat.label}
                  data-testid={`about-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="glass-card p-4 text-center hover-lift"
                >
                  <div className="text-xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div data-testid="about-soft-skills">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
                <span className="text-pink-400">✦</span> Soft Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {softSkills.map(skill => (
                  <div
                    key={skill.label}
                    data-testid={`soft-skill-${skill.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="glass-card p-4 hover-lift overflow-hidden flex flex-col h-full"
                    style={{ border: '1px solid rgba(255,107,157,0.15)' }}
                  >
                    <div className="text-2xl mb-2 flex-shrink-0">{skill.icon}</div>
                    <div className="text-sm font-semibold text-white mb-1 truncate flex-shrink-0">{skill.label}</div>
                    <div className="text-xs text-gray-400 leading-snug flex-grow">{skill.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div data-testid="about-right-col" className="min-w-0">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm">
              <span className="text-pink-400">✦</span> Technical Proficiency
            </h4>
            <div className="glass-card p-7" data-testid="about-skill-bars">
              {skills.map(skill => (
                <SkillBar key={skill.label} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
