'use client';

import MagneticButton from './MagneticButton';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Carolina Porto Photography',
      url: 'https://carolinaportophotography.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 11C10.5 8.5 7.5 7.5 5.5 8.5C3.5 9.5 3 12.5 5 14L12 11Z" />
          <path d="M12 11C13.5 8.5 16.5 7.5 18.5 8.5C20.5 9.5 21 12.5 19 14L12 11Z" />
          <path d="M11.5 11.5L9 19" />
          <path d="M12.5 11.5L15 19" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:hello@carolinaceledon.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <footer>
      <div className="footer-left">
        <svg className="bow-icon" viewBox="0 0 24 24">
          <path d="M12 11C10.5 8.5 7.5 7.5 5.5 8.5C3.5 9.5 3 12.5 5 14L12 11Z" />
          <path d="M12 11C13.5 8.5 16.5 7.5 18.5 8.5C20.5 9.5 21 12.5 19 14L12 11Z" />
          <path d="M11.5 11.5L9 19" />
          <path d="M12.5 11.5L15 19" />
        </svg>
        <span>Carolina Celedón</span>
      </div>

      <div className="footer-social">
        {socialLinks.map((link) => (
          <MagneticButton key={link.name} strength={10}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </MagneticButton>
        ))}
      </div>

      <div className="footer-right">
        Porto, {new Date().getFullYear()}
      </div>
    </footer>
  );
}
