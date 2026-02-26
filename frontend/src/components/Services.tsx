import { User, Users, Building2 } from 'lucide-react';

const services = [
  {
    icon: User,
    title: '1-on-1 Clarity Coaching',
    subtitle: 'Personalized & Intensive',
    description:
      "Deep-dive private sessions tailored entirely to your unique overthinking patterns, career challenges, and goals. We work at your pace, on your terms.",
    features: ['Bi-weekly 60-min sessions', 'Personalized action plans', 'WhatsApp support between sessions', 'Progress tracking'],
    cta: 'Start Your Journey',
    popular: true,
  },
  {
    icon: Users,
    title: 'Group Coaching Program',
    subtitle: '8-Week Transformation',
    description:
      "Join a small cohort of like-minded mid-career professionals. Learn together, grow together, and realize you're not alone in the overthinking struggle.",
    features: ['Weekly group sessions', 'Peer accountability', 'Shared frameworks & tools', 'Community support'],
    cta: 'Join the Group',
    popular: false,
  },
  {
    icon: Building2,
    title: 'Corporate Workshops',
    subtitle: 'For Teams & Organizations',
    description:
      "Bring the power of overthinking management to your workplace. Interactive workshops designed for Bangalore's fast-paced tech and corporate teams.",
    features: ['Half-day or full-day formats', 'Customized for your team', 'Decision-making frameworks', 'Follow-up resources'],
    cta: 'Enquire Now',
    popular: false,
  },
];

export default function Services() {
  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 relative overflow-hidden"
      aria-label="Coaching services"
      style={{
        background: 'linear-gradient(135deg, oklch(0.52 0.13 240 / 0.92) 0%, oklch(0.42 0.14 265 / 0.95) 100%)',
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-saffron-light font-sans font-semibold text-sm tracking-widest uppercase mb-3">
            How I Can Help
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4">
            Coaching That Meets You
            <span className="italic"> Where You Are</span>
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto font-sans text-lg leading-relaxed">
            Whether you prefer one-on-one depth, group energy, or a workplace solution —
            there&apos;s a path designed for your journey.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className={`relative bg-white rounded-2xl p-8 shadow-soft card-hover flex flex-col ${
                  service.popular ? 'ring-2 ring-saffron' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-saffron text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-saffron">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'oklch(0.88 0.12 72 / 0.2)' }}
                >
                  <Icon size={26} className="text-saffron" />
                </div>

                {/* Title */}
                <p className="text-xs font-semibold text-saffron tracking-widest uppercase font-sans mb-1">
                  {service.subtitle}
                </p>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed font-sans mb-5 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-charcoal-light font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleScrollToContact}
                  className={service.popular ? 'btn-saffron text-sm py-3' : 'btn-saffron-outline text-sm py-3'}
                >
                  {service.cta}
                </button>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/60 text-sm font-sans mt-10">
          Not sure which is right for you? Book a free 30-minute discovery call and we&apos;ll figure it out together.
        </p>
      </div>
    </section>
  );
}
