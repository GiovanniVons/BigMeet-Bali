import { useState } from 'react';
import { MapPin, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import ScrollReveal from '../components/ScrollReveal';

const TIME_SLOTS = [
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM', '10:00 PM',
];

interface FormData {
  guest_name: string;
  email: string;
  phone: string;
  party_size: number;
  preferred_date: string;
  preferred_time: string;
  special_requests: string;
}

const INITIAL_FORM: FormData = {
  guest_name: '',
  email: '',
  phone: '',
  party_size: 2,
  preferred_date: '',
  preferred_time: '',
  special_requests: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function getMinDate() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'party_size' ? parseInt(value, 10) : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.guest_name || !form.email || !form.phone || !form.preferred_date || !form.preferred_time) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);

    const { error: insertError } = await supabase.from('reservations').insert({
      guest_name: form.guest_name,
      email: form.email,
      phone: form.phone,
      party_size: form.party_size,
      preferred_date: form.preferred_date,
      preferred_time: form.preferred_time,
      special_requests: form.special_requests || null,
    });

    setSubmitting(false);

    if (insertError) {
      setError('Something went wrong. Please try again or call us directly.');
      return;
    }

    setSubmitted(true);
    setForm(INITIAL_FORM);
  }

  return (
    <div className="min-h-screen bg-brand-black pt-20">
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-display text-brand-red text-xs tracking-[0.4em] uppercase mb-3">
                Get In Touch
              </p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-wider text-white">
                Contact Us
              </h1>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <div>
                <h2 className="font-display text-2xl uppercase tracking-wider text-white mb-8">
                  Reserve a Table
                </h2>

                {submitted ? (
                  <div className="bg-brand-dark border border-green-500/30 p-8 text-center">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="font-display text-xl uppercase tracking-wider text-white mb-2">
                      Reservation Received
                    </h3>
                    <p className="text-white/60 font-body text-sm leading-relaxed">
                      We've got your booking request. We'll be in touch to confirm. If you need
                      anything in the meantime, give us a call.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-3 bg-brand-red text-white font-display text-sm tracking-[0.2em] uppercase hover:bg-brand-red-dark transition-colors"
                    >
                      Make Another Reservation
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="flex items-center gap-3 bg-brand-red/10 border border-brand-red/30 p-4">
                        <AlertCircle size={18} className="text-brand-red flex-shrink-0" />
                        <p className="text-brand-red text-sm font-body">{error}</p>
                      </div>
                    )}

                    <div>
                      <label className="block font-display text-xs tracking-[0.15em] uppercase text-white/60 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="guest_name"
                        value={form.guest_name}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-dark border border-white/10 px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/20"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-display text-xs tracking-[0.15em] uppercase text-white/60 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-brand-dark border border-white/10 px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/20"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block font-display text-xs tracking-[0.15em] uppercase text-white/60 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-brand-dark border border-white/10 px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/20"
                          placeholder="+62 xxx xxxx xxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-display text-xs tracking-[0.15em] uppercase text-white/60 mb-2">
                        Party Size *
                      </label>
                      <select
                        name="party_size"
                        value={form.party_size}
                        onChange={handleChange}
                        className="w-full bg-brand-dark border border-white/10 px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-brand-red transition-colors appearance-none"
                      >
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-display text-xs tracking-[0.15em] uppercase text-white/60 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="preferred_date"
                          value={form.preferred_date}
                          onChange={handleChange}
                          min={getMinDate()}
                          required
                          className="w-full bg-brand-dark border border-white/10 px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-brand-red transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-display text-xs tracking-[0.15em] uppercase text-white/60 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          name="preferred_time"
                          value={form.preferred_time}
                          onChange={handleChange}
                          required
                          className="w-full bg-brand-dark border border-white/10 px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-brand-red transition-colors appearance-none"
                        >
                          <option value="">Select a time</option>
                          {TIME_SLOTS.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-display text-xs tracking-[0.15em] uppercase text-white/60 mb-2">
                        Special Requests
                      </label>
                      <textarea
                        name="special_requests"
                        value={form.special_requests}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-brand-dark border border-white/10 px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-brand-red transition-colors resize-none placeholder:text-white/20"
                        placeholder="Allergies, celebrations, seating preferences..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full px-8 py-4 bg-brand-red text-white font-display text-sm tracking-[0.2em] uppercase hover:bg-brand-red-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Submitting...' : 'Reserve My Table'}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl uppercase tracking-wider text-white mb-8">
                    Find Us
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-brand-dark flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/10 transition-colors">
                        <MapPin size={18} className="text-brand-red" />
                      </div>
                      <div>
                        <h3 className="font-display text-sm tracking-wider uppercase text-white mb-1">
                          Address
                        </h3>
                        <p className="text-white/50 font-body text-sm leading-relaxed">
                          Jl. Pantai Pererenan No.149-157, Pererenan,
                          <br />
                          Kec. Mengwi, Kabupaten Badung, Bali 80351
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-brand-dark flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/10 transition-colors">
                        <Phone size={18} className="text-brand-red" />
                      </div>
                      <div>
                        <h3 className="font-display text-sm tracking-wider uppercase text-white mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:+6208898767256"
                          className="text-white/50 hover:text-brand-red font-body text-sm transition-colors"
                        >
                          0889-8767-2565
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-brand-dark flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/10 transition-colors">
                        <Clock size={18} className="text-brand-red" />
                      </div>
                      <div>
                        <h3 className="font-display text-sm tracking-wider uppercase text-white mb-1">
                          Hours
                        </h3>
                        <p className="text-white/50 font-body text-sm leading-relaxed">
                          Daily 11:00 AM - 11:00 PM
                          <br />
                          Tuesday through Monday
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+6208898767256"
                    className="flex-1 px-6 py-3 border border-brand-red text-brand-red font-display text-sm tracking-[0.15em] uppercase text-center hover:bg-brand-red hover:text-white transition-all duration-200"
                  >
                    Call Us
                  </a>
                  <a
                    href="https://maps.google.com/?q=The+Big+Meat+Canggu+Bali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 border border-white/20 text-white/60 font-display text-sm tracking-[0.15em] uppercase text-center hover:border-white hover:text-white transition-all duration-200"
                  >
                    Get Directions
                  </a>
                </div>

                <div className="border border-white/10 overflow-hidden">
                  <iframe
                    title="The Big Meat Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1!2d115.1!3d-8.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzknMDAuMCJTIDExNcKwMDYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale"
                  />
                </div>

                <div className="bg-brand-dark border border-white/5 p-6">
                  <h3 className="font-display text-sm tracking-wider uppercase text-brand-red mb-3">
                    Good to Know
                  </h3>
                  <ul className="space-y-2 text-white/40 text-sm font-body">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-brand-red rounded-full flex-shrink-0" />
                      Outdoor seating available
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-brand-red rounded-full flex-shrink-0" />
                      Free Wi-Fi
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-brand-red rounded-full flex-shrink-0" />
                      Walk-ins welcome
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-brand-red rounded-full flex-shrink-0" />
                      Vegetarian options available
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-brand-red rounded-full flex-shrink-0" />
                      10% tax + 5% service charge on all items
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
