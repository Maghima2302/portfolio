import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const socials = [
    { label: 'Email', value: 'maghima005@gmail.com', href: 'mailto:maghima005@gmail.com', icon: '✉️', color: '#FF6B9D' },
    { label: 'Phone', value: '+91 7418885563', href: 'tel:+917418885563', icon: '📱', color: '#9B59B6' },
    { label: 'GitHub', value: 'github.com/Maghima2302', href: 'https://github.com/Maghima2302', icon: '🐙', color: '#E879A0' },
    { label: 'LinkedIn', value: 'linkedin.com/in/maghimalakshmi', href: 'https://www.linkedin.com/in/maghimalakshmi', icon: '💼', color: '#0A66C2' },
    { label: 'Location', value: 'Chennai, India', href: null, icon: '📍', color: '#E8DAEF' },
  ];

  const inputBase = {
    width: '100%',
    borderRadius: '10px',
    color: 'white',
    outline: 'none',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
  };

  const inputStyle = (name) => ({
    ...inputBase,
    background: focused === name ? 'rgba(255,107,157,0.07)' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === name ? 'rgba(255,107,157,0.45)' : 'rgba(255,255,255,0.09)'}`,
    boxShadow: focused === name ? '0 0 16px rgba(255,107,157,0.08)' : 'none',
  });

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(108,52,131,0.07), transparent)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF6B9D, transparent)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-pink-400 text-xs font-semibold tracking-widest uppercase mb-2" data-testid="contact-subtitle">
            Let's Connect
          </p>
          <h2 className="section-title gradient-text" data-testid="contact-title">Get In Touch</h2>
          <div className="section-underline" data-testid="contact-underline" />
          <p className="text-gray-400 text-sm max-w-md mx-auto text-center">
            Always open to exciting opportunities, collaborations, and conversations. Let's create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ── Left: Contact Info ── */}
          <div className="flex flex-col gap-5 min-w-0 overflow-hidden" data-testid="contact-info-col">
            {/* Info card */}
            <div className="glass-card p-7" data-testid="contact-info-card">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span>🌺</span> Contact Information
              </h3>
              <div className="space-y-4">
                {socials.map(s => (
                  <div key={s.label} data-testid={`contact-social-${s.label.toLowerCase()}`} className="flex items-center gap-4 group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${s.color}18, rgba(155,89,182,0.08))`,
                        border: `1px solid ${s.color}35`,
                      }}
                    >
                      {s.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-gray-500 mb-0.5">{s.label}</div>
                      {s.href ? (
                        <a
                          href={s.href}
                          target={s.href.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-sm font-medium truncate block transition-colors hover:text-pink-400"
                          style={{ color: '#ccc' }}
                          data-testid={`contact-link-${s.label.toLowerCase()}`}
                        >
                          {s.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-gray-300 block">{s.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div
              className="glass-card overflow-hidden"
              style={{ border: '1px solid rgba(74,222,128,0.2)', padding: '20px' }}
              data-testid="contact-availability"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Available for Opportunities</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Open to internships, freelance projects, and full-time roles in Data Science, AI/ML, and Software Development.
              </p>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div data-testid="contact-form-col">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-7 flex flex-col gap-4"
              data-testid="contact-form"
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>✨</span> Send a Message
              </h3>

              {/* Success */}
              {sent && (
                <div
                  className="p-4 rounded-xl text-sm font-medium text-green-300"
                  style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)' }}
                  data-testid="contact-success-msg"
                >
                  🎉 Message sent! I'll get back to you soon.
                </div>
              )}

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div data-testid="contact-field-name">
                  <label className="block text-xs text-gray-400 mb-1.5 font-medium">Your Name *</label>
                  <input
                    type="text" name="name" value={form.name} required
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    placeholder="Jane Doe"
                    className="px-4 py-2.5"
                    style={inputStyle('name')}
                    data-testid="contact-input-name"
                  />
                </div>
                <div data-testid="contact-field-email">
                  <label className="block text-xs text-gray-400 mb-1.5 font-medium">Your Email *</label>
                  <input
                    type="email" name="email" value={form.email} required
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    placeholder="jane@example.com"
                    className="px-4 py-2.5"
                    style={inputStyle('email')}
                    data-testid="contact-input-email"
                  />
                </div>
              </div>

              {/* Subject */}
              <div data-testid="contact-field-subject">
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">Subject</label>
                <input
                  type="text" name="subject" value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused('')}
                  placeholder="Project Collaboration / Internship Opportunity"
                  className="px-4 py-2.5"
                  style={inputStyle('subject')}
                  data-testid="contact-input-subject"
                />
              </div>

              {/* Message */}
              <div data-testid="contact-field-message">
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">Message *</label>
                <textarea
                  name="message" value={form.message} required rows={5}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  placeholder="Tell me about your project or opportunity..."
                  className="px-4 py-2.5 resize-none"
                  style={inputStyle('message')}
                  data-testid="contact-input-message"
                />
              </div>

              <button
                type="submit"
                className="btn-primary py-3 text-sm font-semibold"
                style={{ borderRadius: '10px' }}
                data-testid="contact-submit-btn"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center" data-testid="contact-footer">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,157,0.3))' }} />
          <span className="text-xl">🌺</span>
          <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(90deg, rgba(255,107,157,0.3), transparent)' }} />
        </div>
        <p className="text-gray-500 text-sm">
          © 2025 <span className="gradient-text font-semibold">Maghima Lakshmi A</span> · Built with ❤️ &amp; React
        </p>
        <p className="text-gray-600 text-xs mt-1">Chennai, India 🌴</p>
      </div>
    </section>
  );
};

export default Contact;
