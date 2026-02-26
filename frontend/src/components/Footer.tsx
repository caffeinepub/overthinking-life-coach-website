import { Heart, MapPin, Mail } from 'lucide-react';
import { SiLinkedin, SiInstagram } from 'react-icons/si';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'clarity-within-coaching'
  );

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white" aria-label="Site footer">
      {/* Top gradient accent */}
      <div
        className="h-1"
        style={{
          background:
            'linear-gradient(90deg, oklch(0.72 0.18 65) 0%, oklch(0.55 0.13 160) 50%, oklch(0.42 0.14 265) 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-white">Clarity Within</h2>
              <p className="text-xs tracking-widest uppercase text-white/50 font-sans mt-0.5">
                Life Coaching
              </p>
            </div>
            <p className="text-white/65 font-sans text-sm leading-relaxed">
              Helping mid-career professionals in Bangalore break free from overthinking and step
              into their most confident, decisive selves.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm font-sans">
              <MapPin size={14} className="text-saffron shrink-0" />
              <span>Bangalore, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm font-sans">
              <Mail size={14} className="text-saffron shrink-0" />
              <a
                href="mailto:hello@claritywithincoachin.com"
                className="hover:text-saffron transition-colors"
              >
                hello@claritywithincoachin.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/60 hover:text-saffron transition-colors text-sm font-sans flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-saffron/40 group-hover:bg-saffron transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-5">Connect</h3>
            <p className="text-white/60 font-sans text-sm mb-5 leading-relaxed">
              Follow along for weekly insights on overcoming overthinking, career clarity, and
              living with intention.
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-saffron flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <SiLinkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-saffron flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <SiInstagram size={18} />
              </a>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="btn-saffron text-sm py-2.5 px-6 inline-block"
            >
              Book a Free Call
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-sans text-center sm:text-left">
            &copy; {currentYear} Clarity Within Life Coaching. All rights reserved. &middot;
            Bangalore, India
          </p>
          <p className="text-white/40 text-xs font-sans flex items-center gap-1.5">
            Built with <Heart size={12} className="text-saffron fill-saffron" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
