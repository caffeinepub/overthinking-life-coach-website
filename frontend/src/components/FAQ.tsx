import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What exactly is life coaching for overthinking?',
    answer:
      'Life coaching for overthinking is a structured, goal-oriented process that helps you identify the mental patterns causing analysis paralysis, self-doubt, and decision fatigue. Unlike therapy, coaching is forward-focused — we work on building practical tools and strategies to help you think more clearly, decide more confidently, and act more decisively. Sessions are collaborative, non-judgmental, and tailored to your specific challenges as a mid-career professional.',
  },
  {
    question: 'How is this different from therapy or counselling?',
    answer:
      'Therapy typically focuses on healing past wounds and diagnosing mental health conditions. Coaching is future-focused and action-oriented — we start from where you are today and work toward where you want to be. If you\'re dealing with clinical anxiety or depression, I\'d recommend working with a therapist first. Coaching is ideal if you\'re mentally well but feeling stuck, overwhelmed, or unable to move forward in your career.',
  },
  {
    question: 'Do you coach online or only in Bangalore?',
    answer:
      'Both! I\'m based in Bangalore and offer in-person sessions for local clients. I also coach professionals across India and worldwide via video call (Zoom/Google Meet). Many of my clients prefer online sessions for the flexibility — you can join from your office, home, or anywhere with a good internet connection. The results are equally powerful regardless of format.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'Most clients see meaningful shifts within 4–6 sessions, but lasting transformation typically happens over 3–6 months of consistent work. I offer flexible packages — from single sessions to 3-month and 6-month commitments. During your free discovery call, we\'ll discuss your goals and I\'ll recommend the right package for your situation. There\'s no pressure to commit to anything before you\'re ready.',
  },
  {
    question: 'I\'m a busy professional. How much time does coaching require?',
    answer:
      'I design my coaching to fit into a demanding professional schedule. Sessions are typically 60 minutes, held bi-weekly or weekly depending on your package. Between sessions, I provide short, practical exercises (usually 10–15 minutes per day) that you can do during your commute, lunch break, or morning routine. The goal is to integrate the work into your life — not add another overwhelming task to your list.',
  },
  {
    question: 'Is everything I share kept confidential?',
    answer:
      'Absolutely. Everything discussed in our sessions is completely confidential. I adhere to the ICF (International Coaching Federation) Code of Ethics, which includes strict confidentiality standards. The only exceptions are situations involving risk of harm to yourself or others, as required by law. You can speak freely knowing your privacy is fully protected.',
  },
  {
    question: 'What results can I realistically expect?',
    answer:
      'Clients typically report: faster, more confident decision-making; reduced mental chatter and anxiety; improved focus and productivity at work; better work-life balance; and a clearer sense of direction in their career. Results vary based on your commitment and the specific challenges you bring. During our discovery call, I\'ll give you an honest assessment of what\'s achievable for your situation.',
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-white"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-saffron font-sans font-semibold text-sm tracking-widest uppercase mb-3">
            Got Questions?
          </p>
          <h2 className="section-heading mb-4">
            Everything You Need to Know
            <span className="italic text-saffron"> Before We Begin</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Common questions from mid-career professionals considering coaching for the first time.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-cream-dark rounded-xl px-6 bg-cream data-[state=open]:bg-white data-[state=open]:shadow-card transition-all duration-200"
            >
              <AccordionTrigger className="text-left font-serif font-semibold text-charcoal text-base md:text-lg py-5 hover:text-saffron hover:no-underline transition-colors [&[data-state=open]]:text-saffron">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-charcoal-light font-sans text-sm md:text-base leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-cream rounded-2xl p-8 border border-cream-dark">
          <p className="font-serif text-xl font-semibold text-charcoal mb-2">
            Still have questions?
          </p>
          <p className="text-charcoal-light font-sans text-sm mb-5">
            Book a free 30-minute discovery call — no commitment, no pressure. Just a conversation.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-saffron"
          >
            Book a Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}
