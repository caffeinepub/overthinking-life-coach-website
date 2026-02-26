import { CheckCircle2 } from 'lucide-react';

const credentials = [
  'Certified Life Coach (ICF Accredited)',
  'Cognitive Behavioural Coaching Practitioner',
  'Mindfulness-Based Stress Reduction (MBSR) Trained',
  'NLP Practitioner & Emotional Intelligence Coach',
  '5+ Years Coaching Mid-Career Professionals',
];

const approach = [
  {
    title: 'Science-Backed Methods',
    desc: 'Grounded in CBT, mindfulness, and neuroscience — not just motivation.',
  },
  {
    title: 'Judgment-Free Space',
    desc: 'A safe, confidential environment where you can think out loud without shame.',
  },
  {
    title: 'Practical Tools',
    desc: 'Real strategies you can use between sessions to quiet the mental noise.',
  },
];

export default function About() {
  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white"
      aria-label="About the coach"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo Column */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Decorative background shape */}
            <div
              className="absolute -top-6 -left-6 w-72 h-72 md:w-96 md:h-96 rounded-3xl"
              style={{ background: 'oklch(0.94 0.02 80)' }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-48 h-48 rounded-2xl border-4 border-saffron/20"
              style={{ background: 'oklch(0.88 0.12 72 / 0.15)' }}
            />

            {/* Coach photo */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-soft w-72 h-80 md:w-96 md:h-[480px]">
              <img
                src="/assets/generated/coach-placeholder.dim_400x400.png"
                alt="Life coach for overthinking, based in Bangalore, helping mid-career professionals"
                className="w-full h-full object-cover"
              />
              {/* Saffron accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-saffron" />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-8 -right-2 md:right-4 z-20 bg-white rounded-2xl shadow-card px-5 py-4 border border-cream-dark">
              <p className="font-serif text-2xl font-semibold text-saffron">5+</p>
              <p className="text-xs text-charcoal-muted font-sans">
                Years of
                <br />
                Coaching
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div>
              <p className="text-saffron font-sans font-semibold text-sm tracking-widest uppercase mb-3">
                Meet Your Coach
              </p>
              <h2 className="section-heading mb-4">
                Hi, I&apos;m here to help you
                <span className="italic text-saffron"> quiet the noise.</span>
              </h2>
            </div>

            <div className="space-y-4 text-charcoal-light leading-relaxed font-sans">
              <p>
                I know what it&apos;s like to lie awake at 2 AM, replaying every decision,
                second-guessing every move, and feeling paralyzed by the weight of &ldquo;what
                ifs.&rdquo; As a mid-career professional in Bangalore, I lived that story — until
                I found a better way.
              </p>
              <p>
                Today, I help driven professionals like you break free from the overthinking trap.
                Not by thinking less, but by thinking <em>better</em> — with clarity, intention,
                and the confidence to act on what truly matters.
              </p>
              <p>
                My approach blends evidence-based coaching with deep empathy. Together, we&apos;ll
                uncover the patterns keeping you stuck and build the mental tools to move forward —
                in your career, your relationships, and your life.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-2 pt-2">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-saffron mt-0.5 shrink-0" />
                  <span className="text-sm text-charcoal-light font-sans">{cred}</span>
                </div>
              ))}
            </div>

            {/* Approach cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {approach.map((item) => (
                <div key={item.title} className="bg-cream rounded-xl p-4 border border-cream-dark">
                  <h3 className="font-serif text-sm font-semibold text-charcoal mb-1">{item.title}</h3>
                  <p className="text-xs text-charcoal-muted font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button onClick={handleScrollToContact} className="btn-saffron">
                Let&apos;s Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
