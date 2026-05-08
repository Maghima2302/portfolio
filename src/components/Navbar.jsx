import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      data-testid="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(13, 5, 32, 0.9)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 107, 157, 0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          data-testid="nav-logo"
          onClick={() => handleNav('#hero')}
          className="text-2xl font-black font-outfit"
          style={{ background: 'linear-gradient(135deg, #FF6B9D, #9B59B6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          ML<span style={{ WebkitTextFillColor: '#FF6B9D' }}>.</span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8" data-testid="nav-links-desktop">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                onClick={() => handleNav(link.href)}
                className={`nav-link text-sm font-medium transition-colors ${active === link.href ? 'text-pink-400 active' : 'text-gray-300 hover:text-white'}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:maghima005@gmail.com"
          data-testid="nav-cta-btn"
          className="hidden md:block btn-primary px-5 py-2 text-sm"
          style={{ borderRadius: '50px' }}
        >
          Hire Me ✨
        </a>

        {/* Mobile Hamburger */}
        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} className="block h-0.5 w-6 bg-pink-400 transition-all duration-300" style={{
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 4px)' :
                         menuOpen && i === 1 ? 'scale(0)' :
                         menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -4px)' : 'none'
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          data-testid="nav-mobile-menu"
          className="md:hidden glass-card mx-4 mb-4 p-6 flex flex-col gap-4"
        >
          {navLinks.map(link => (
            <button
              key={link.href}
              data-testid={`nav-mobile-link-${link.label.toLowerCase()}`}
              onClick={() => handleNav(link.href)}
              className="text-left text-gray-300 hover:text-pink-400 transition-colors font-medium py-1"
            >
              {link.label}
            </button>
          ))}
          <a href="mailto:maghima005@gmail.com" className="btn-primary px-5 py-2 text-sm text-center">Hire Me ✨</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
