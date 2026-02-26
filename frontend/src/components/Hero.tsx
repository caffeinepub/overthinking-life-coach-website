export default function Hero() {
  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1440x900.png"
          alt="Serene background evoking clarity and calm for life coaching"
          className="w-full h-full object-cover"
        />
        {/* Warm overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/85 via-cream/70 to-cream/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/60 via-transparent to-transparent" />
      </div>

      {/* Decorative saffron accent */}
      <div className="absolute top-1/4 right-8 md:right-16 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'oklch(0.72 0.18 65)' }} />
      <div className="absolute bottom-1/4 left-8 md:left-16 w-48 h-48 rounded-full opacity-8 blur-2xl"
        style={{ background: 'oklch(0.52 0.13 240)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-saffron/30 rounded-full px-5 py-2 mb-8 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
          <span className="text-sm font-medium text-charcoal-light tracking-wide">
            Based in Bangalore &nbsp;·&nbsp; Coaching Professionals Worldwide
          </span>
        </div>

        {/* Main Headline - single H1 */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-charcoal leading-tight mb-6">
          Stop Overthinking.
          <br />
          <span className="italic text-saffron">Start Living</span> Your
          <br />
          Best Career.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto mb-4 leading-relaxed font-sans">
          You're smart, driven, and capable — yet your mind won't stop spinning.
          I help mid-career professionals in Bangalore break free from analysis
          paralysis and finally move forward with clarity and confidence.
        </p>

        <p className="text-base text-charcoal-muted max-w-xl mx-auto mb-10 font-sans italic">
          "The noise in your head is not the truth about your potential."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleScrollToContact}
            className="btn-saffron text-base py-4 px-10 shadow-saffron"
          >
            Book a Free Discovery Call
          </button>
          <button
            onClick={handleScrollToAbout}
            className="btn-saffron-outline text-base py-4 px-10"
          >
            Learn More
          </button>
        </div>

        {/* Social proof strip */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-center">
          {[
            { number: '200+', label: 'Professionals Coached' },
            { number: '5+', label: 'Years Experience' },
            { number: '95%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-serif text-3xl font-semibold text-saffron">{stat.number}</span>
              <span className="text-sm text-charcoal-muted font-sans mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs text-charcoal-muted font-sans tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-charcoal-muted to-transparent" />
      </div>
    </section>
  );
}
