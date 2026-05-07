import React, { useState } from 'react';

const techSkills = [
  { name: 'Python', icon: '🐍', color: '#3776AB', category: 'Language', desc: 'Data analysis, ML, automation & scripting' },
  { name: 'Java', icon: '☕', color: '#ED8B00', category: 'Language', desc: 'OOP, backend development, algorithms' },
  { name: 'React', icon: '⚛️', color: '#61DAFB', category: 'Framework', desc: 'Modern UI components & SPAs' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248', category: 'Database', desc: 'NoSQL data modelling & management' },
  { name: 'SQL', icon: '🗄️', color: '#336791', category: 'Database', desc: 'Relational data queries & design' },
  { name: 'R', icon: '📊', color: '#276DC3', category: 'Language', desc: 'Statistical computing & analysis' },
  { name: 'Power BI', icon: '📈', color: '#F2C811', category: 'Visualization', desc: 'Business intelligence dashboards' },
  { name: 'Tableau', icon: '📉', color: '#E97627', category: 'Visualization', desc: 'Data storytelling & visual analytics' },
  { name: 'Figma', icon: '🎨', color: '#F24E1E', category: 'Design', desc: 'UI/UX prototyping & design systems' },
  { name: 'Canva', icon: '✏️', color: '#00C4CC', category: 'Design', desc: 'Creative visual & graphic design' },
  { name: 'Machine Learning', icon: '🤖', color: '#FF6B9D', category: 'AI/ML', desc: 'Supervised & unsupervised learning models' },
  { name: 'Deep Learning', icon: '🧠', color: '#9B59B6', category: 'AI/ML', desc: 'CNN, LSTM & Neural Networks' },
];

const categories = ['All', 'Language', 'Framework', 'Database', 'Visualization', 'Design', 'AI/ML'];

const FlipCard = ({ skill }) => (
  <div
    className="flip-card"
    style={{ height: '180px' }}
    data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
  >
    <div className="flip-card-inner">
      {/* Front */}
      <div
        className="flip-card-front glass-card flex flex-col items-center justify-center gap-3 p-5"
        style={{ border: `1px solid ${skill.color}25` }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${skill.color}20, rgba(155,89,182,0.1))`,
            border: `1px solid ${skill.color}35`,
          }}
        >
          {skill.icon}
        </div>
        <span className="text-sm font-bold text-white text-center leading-tight">{skill.name}</span>
        <span
          className="text-xs px-3 py-1 rounded-full"
          style={{ background: `${skill.color}18`, color: skill.color, border: `1px solid ${skill.color}35` }}
        >
          {skill.category}
        </span>
      </div>

      {/* Back */}
      <div
        className="flip-card-back flex flex-col items-center justify-center gap-3 p-5 text-center"
        style={{
          background: `linear-gradient(135deg, ${skill.color}20, rgba(155,89,182,0.18))`,
          border: `1px solid ${skill.color}45`,
          borderRadius: '20px',
        }}
      >
        <div className="text-3xl">{skill.icon}</div>
        <span className="text-sm font-bold text-white leading-tight">{skill.name}</span>
        <p className="text-xs text-gray-300 leading-relaxed">{skill.desc}</p>
        <div className="w-10 h-0.5 rounded-full" style={{ background: `linear-gradient(90deg, ${skill.color}, #9B59B6)` }} />
      </div>
    </div>
  </div>
);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? techSkills : techSkills.filter(s => s.category === activeCategory);

  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(108,52,131,0.04), transparent)' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-4 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF6B9D, #9B59B6)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-pink-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3" data-testid="skills-subtitle">
            What I Know
          </p>
          <h2 className="section-title gradient-text" data-testid="skills-title">Skills &amp; Technologies</h2>
          <div className="section-underline" data-testid="skills-underline" />
          <p className="text-gray-400 text-sm mt-2">Hover a card to reveal details · Click a category to filter</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12" data-testid="skills-filter">
          {categories.map(cat => (
            <button
              key={cat}
              data-testid={`skills-filter-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className="px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={activeCategory === cat
                ? { background: 'linear-gradient(135deg, #FF6B9D, #9B59B6)', color: 'white', boxShadow: '0 4px 16px rgba(255,107,157,0.35)' }
                : { background: 'rgba(255,255,255,0.05)', color: '#aaa', border: '1px solid rgba(255,255,255,0.1)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Flip Cards Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5"
          data-testid="skills-grid"
        >
          {filtered.map(skill => <FlipCard key={skill.name} skill={skill} />)}
        </div>

        {/* Soft Skills */}
        <div className="mt-20 md:mt-24" data-testid="skills-soft-section">
          <h3 className="text-center text-xl font-bold text-white mb-10">
            <span className="gradient-text">Soft Skills</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Problem Solving', icon: '🧩', level: 92, color: '#FF6B9D' },
              { label: 'Logical Thinking', icon: '🧠', level: 88, color: '#9B59B6' },
              { label: 'Creative Thinking', icon: '💡', level: 85, color: '#FFB3D9' },
            ].map(skill => (
              <div
                key={skill.label}
                data-testid={`soft-skill-card-${skill.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="glass-card p-7 text-center hover-lift"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h4 className="text-white font-semibold text-sm sm:text-base mb-4">{skill.label}</h4>
                <div className="w-full h-2 rounded-full overflow-hidden mb-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, #9B59B6)`,
                    }}
                  />
                </div>
                <span className="text-xs text-gray-400">{skill.level}% proficiency</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
