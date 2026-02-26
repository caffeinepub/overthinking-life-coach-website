import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Senior Product Manager',
    company: 'Tech Startup, Bangalore',
    quote:
      "I used to spend hours second-guessing every decision at work. After just 8 sessions, I have a clear framework for making decisions quickly and confidently. My team has noticed the change — and so has my manager.",
    stars: 5,
    initials: 'PS',
  },
  {
    name: 'Arjun Mehta',
    role: 'Engineering Lead',
    company: 'MNC, Bangalore',
    quote:
      "The overthinking was affecting my sleep, my relationships, and my performance. The coaching gave me practical tools — not just theory. I finally feel like I'm in the driver's seat of my own career.",
    stars: 5,
    initials: 'AM',
  },
  {
    name: 'Kavitha Nair',
    role: 'Finance Director',
    company: 'Consulting Firm, Bangalore',
    quote:
      "I was at a crossroads in my career and completely paralyzed by the options. The clarity I gained through coaching was life-changing. I made a bold move and it's the best decision I've ever made.",
    stars: 5,
    initials: 'KN',
  },
  {
    name: 'Rohan Desai',
    role: 'Marketing Manager',
    company: 'E-commerce Company, Bangalore',
    quote:
      "I was skeptical about coaching at first. But the approach here is so grounded and practical. No fluff, no toxic positivity — just real tools that work. My anxiety around presentations has dropped dramatically.",
    stars: 5,
    initials: 'RD',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-saffron fill-saffron" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-cream relative overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Green-to-indigo gradient accent bar at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{
          background: 'linear-gradient(90deg, oklch(0.55 0.13 160) 0%, oklch(0.42 0.14 265) 100%)',
        }}
      />

      {/* Decorative gradient blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, oklch(0.55 0.13 160 / 0.3) 0%, oklch(0.42 0.14 265 / 0.3) 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-6 blur-3xl pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, oklch(0.55 0.13 160 / 0.2) 0%, oklch(0.42 0.14 265 / 0.2) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-saffron font-sans font-semibold text-sm tracking-widest uppercase mb-3">
            Real Stories
          </p>
          <h2 className="section-heading mb-4">
            What Happens When You
            <span className="italic text-saffron"> Stop Overthinking</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Mid-career professionals across Bangalore share their transformation stories.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-card card-hover border border-cream-dark relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={40} className="text-saffron" />
              </div>

              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Quote */}
              <blockquote className="mt-4 mb-6">
                <p className="text-charcoal-light leading-relaxed font-sans text-sm md:text-base italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-serif font-semibold text-sm shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.55 0.13 160) 0%, oklch(0.42 0.14 265) 100%)',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-serif font-semibold text-charcoal text-sm">{t.name}</p>
                  <p className="text-xs text-charcoal-muted font-sans">{t.role}</p>
                  <p className="text-xs text-charcoal-muted font-sans">{t.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-charcoal-light font-sans mb-5">
            Ready to write your own success story?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-saffron"
          >
            Book Your Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}
