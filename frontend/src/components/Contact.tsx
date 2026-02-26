import { useState } from 'react';
import { MapPin, Mail, Phone, CheckCircle2, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please tell me a bit about what you're looking for.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-cream relative overflow-hidden"
      aria-label="Contact and booking"
    >
      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'oklch(0.72 0.18 65)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: CTA Content */}
          <div className="space-y-8">
            <div>
              <p className="text-saffron font-sans font-semibold text-sm tracking-widest uppercase mb-3">
                Take the First Step
              </p>
              <h2 className="section-heading mb-4">
                Ready to Quiet
                <span className="italic text-saffron"> the Noise?</span>
              </h2>
              <p className="section-subheading">
                You&apos;ve been thinking about this long enough. Let&apos;s have a real
                conversation about what&apos;s keeping you stuck — and what&apos;s possible on
                the other side.
              </p>
            </div>

            {/* Discovery Call CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-cream-dark">
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                Free Discovery Call
              </h3>
              <p className="text-charcoal-light font-sans text-sm mb-5 leading-relaxed">
                A 30-minute, no-obligation conversation to explore your goals, understand your
                challenges, and see if we&apos;re a good fit. Zero pressure, zero commitment.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-saffron inline-block text-center shadow-saffron"
              >
                Book a Free Discovery Call
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-saffron" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm font-sans">Location</p>
                  <p className="text-charcoal-muted text-sm font-sans">Bangalore, Karnataka, India</p>
                  <p className="text-charcoal-muted text-xs font-sans">Also coaching online worldwide</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-saffron" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm font-sans">Email</p>
                  <a
                    href="mailto:hello@claritywithincoachin.com"
                    className="text-saffron text-sm font-sans hover:underline"
                  >
                    hello@claritywithincoachin.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-saffron" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm font-sans">Phone / WhatsApp</p>
                  <p className="text-charcoal-muted text-sm font-sans">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-card border border-cream-dark">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-saffron/10 flex items-center justify-center">
                  <CheckCircle2 size={36} className="text-saffron" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal">
                  Message Received!
                </h3>
                <p className="text-charcoal-light font-sans leading-relaxed max-w-sm">
                  Thank you for reaching out. I&apos;ll get back to you within 24 hours to
                  schedule your free discovery call. Looking forward to connecting!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="btn-saffron-outline text-sm mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                  Send a Message
                </h3>
                <p className="text-charcoal-muted font-sans text-sm mb-6">
                  Fill in the form below and I&apos;ll be in touch within 24 hours.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-charcoal font-sans text-sm font-medium">
                      Full Name <span className="text-saffron">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`font-sans ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-destructive text-xs font-sans">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-charcoal font-sans text-sm font-medium">
                      Email Address <span className="text-saffron">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`font-sans ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-destructive text-xs font-sans">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-charcoal font-sans text-sm font-medium">
                      Phone / WhatsApp{' '}
                      <span className="text-charcoal-muted font-normal">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="font-sans"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-charcoal font-sans text-sm font-medium">
                      What brings you here? <span className="text-saffron">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me a bit about what you're struggling with and what you're hoping to achieve through coaching..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`font-sans resize-none ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-destructive text-xs font-sans">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-saffron w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
