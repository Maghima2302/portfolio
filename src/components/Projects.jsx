import React, { useState } from 'react';

const projects = [
  {
    id: 'crop-fertilizer',
    title: 'Crop & Fertilizer Recommendation System',
    desc: 'ML-powered system that recommends optimal crops and fertilizers based on soil data, climate conditions, and historical yield patterns using Decision Tree Classifier.',
    tech: ['Python', 'Machine Learning', 'Decision Tree', 'Pandas', 'Sklearn'],
    icon: '🌾',
    color: '#4CAF50',
    gradient: 'linear-gradient(135deg, rgba(76,175,80,0.2), rgba(255,107,157,0.1))',
    category: 'ML',
    github: 'https://github.com/Maghima2302',
    highlights: ['Decision Tree Classifier', 'Soil Analysis', 'Climate Data'],
  },
  {
    id: 'animal-detection',
    title: 'Animal Detection System',
    desc: 'Deep learning system for real-time animal detection and classification using LSTM & CNN architectures, achieving high accuracy on wildlife monitoring datasets.',
    tech: ['Python', 'Deep Learning', 'CNN', 'LSTM', 'TensorFlow', 'OpenCV'],
    icon: '🦁',
    color: '#FF9800',
    gradient: 'linear-gradient(135deg, rgba(255,152,0,0.2), rgba(155,89,182,0.1))',
    category: 'Deep Learning',
    github: 'https://github.com/Maghima2302',
    highlights: ['CNN + LSTM Hybrid', 'Real-time Detection', 'Wildlife Monitoring'],
  },
  {
    id: 'employee-dashboard',
    title: 'Employee Analytics Dashboard',
    desc: 'Comprehensive data science dashboard for employee performance analytics, built during One Yes Infotech internship with interactive visualizations and KPI tracking.',
    tech: ['Python', 'Power BI', 'SQL', 'Pandas', 'Data Science'],
    icon: '📊',
    color: '#2196F3',
    gradient: 'linear-gradient(135deg, rgba(33,150,243,0.2), rgba(255,107,157,0.1))',
    category: 'Data Science',
    github: 'https://github.com/Maghima2302',
    highlights: ['KPI Tracking', 'Interactive Visuals', 'One Yes Infotech'],
  },
  {
    id: 'ai-crop',
    title: 'AI-Powered Crop Recommendation',
    desc: 'Intelligent agricultural recommendation system developed under Edunet Foundation (AICTE) internship, leveraging AI for precision farming and yield optimization.',
    tech: ['Python', 'AI', 'Machine Learning', 'Flask', 'Data Analysis'],
    icon: '🤖',
    color: '#9C27B0',
    gradient: 'linear-gradient(135deg, rgba(156,39,176,0.2), rgba(255,179,217,0.1))',
    category: 'AI',
    github: 'https://github.com/Maghima2302',
    highlights: ['AICTE Certified', 'Precision Farming', 'Edunet Foundation'],
  },
];

const categories = ['All', 'ML', 'Deep Learning', 'Data Science', 'AI'];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-testid={`project-card-${project.id}`}
      className="glass-card overflow-hidden hover-lift flex flex-col transition-all duration-400"
      style={{
        border: hovered ? `1px solid ${project.color}50` : '1px solid rgba(255,107,157,0.2)',
        boxShadow: hovered ? `0 24px 60px ${project.color}20, 0 0 30px rgba(255,107,157,0.1)` : '',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient accent bar */}
      <div className="h-1 w-full flex-shrink-0" style={{ background: `linear-gradient(90deg, ${project.color}, #9B59B6)` }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Header: icon + category */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{
              background: project.gradient,
              border: `1px solid ${project.color}40`,
              boxShadow: hovered ? `0 0 20px ${project.color}25` : 'none',
              transition: 'box-shadow 0.3s',
            }}
          >
            {project.icon}
          </div>
          <span
            className="text-xs px-3 py-1 rounded-full font-semibold flex-shrink-0 ml-3"
            style={{
              background: `${project.color}18`,
              color: project.color,
              border: `1px solid ${project.color}35`,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white mb-2 leading-snug" data-testid={`project-title-${project.id}`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1" data-testid={`project-desc-${project.id}`}>
          {project.desc}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4" data-testid={`project-highlights-${project.id}`}>
          {project.highlights.map(h => (
            <span
              key={h}
              className="text-xs px-2 py-1 rounded"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#bbb', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              ✦ {h}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5" data-testid={`project-tech-${project.id}`}>
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(255,107,157,0.1)', color: '#FFB3D9', border: '1px solid rgba(255,107,157,0.2)' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`project-github-${project.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors mt-auto"
          style={{ color: hovered ? project.color : '#9B59B6' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          View on GitHub
          <span style={{ display: 'inline-block', transition: 'transform 0.3s', transform: hovered ? 'translateX(4px)' : 'none' }}>→</span>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, #FF6B9D, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-pink-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3" data-testid="projects-subtitle">
            What I've Built
          </p>
          <h2 className="section-title gradient-text" data-testid="projects-title">Projects Showcase</h2>
          <div className="section-underline" data-testid="projects-underline" />
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12" data-testid="projects-filter">
          {categories.map(cat => (
            <button
              key={cat}
              data-testid={`project-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setFilter(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={filter === cat
                ? { background: 'linear-gradient(135deg, #FF6B9D, #9B59B6)', color: 'white', boxShadow: '0 4px 18px rgba(255,107,157,0.4)' }
                : { background: 'rgba(255,255,255,0.05)', color: '#aaa', border: '1px solid rgba(255,255,255,0.1)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid — equal-height cards via flex stretch */}
        <div className="grid md:grid-cols-2 gap-7 md:gap-8 items-stretch" data-testid="projects-grid">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 mb-8 md:mb-0" data-testid="projects-github-cta">
          <a
            href="https://github.com/Maghima2302"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="projects-view-all-btn"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm"
            style={{ borderRadius: '50px' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
