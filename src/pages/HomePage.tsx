import { Link } from 'react-router-dom';
import { Beef, Flame, Sun, Dumbbell, ArrowRight, MapPin } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useMenu } from '../hooks/useMenu';

const HIGHLIGHTS = [
  {
    icon: Beef,
    title: '100% Australian Beef',
    desc: 'Every cut sourced directly from premium Australian farms. No shortcuts, no substitutes.',
  },
  {
    icon: Flame,
    title: 'Wagyu & Dry Aged',
    desc: 'From MB2 Angus to MB9 Wagyu and 48-day dry aged cuts -- serious meat for serious eaters.',
  },
  {
    icon: Sun,
    title: 'Outdoor Dining',
    desc: 'Enjoy your steak under the Canggu sky. The perfect setting for a perfect meal.',
  },
  {
    icon: Dumbbell,
    title: 'Keto & Carnivore Friendly',
    desc: 'High protein, zero compromise. Built for those who take their nutrition as seriously as their taste.',
  },
];

export default function HomePage() {
  const { featuredItems, loading } = useMenu();

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/grilling_meat.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <ScrollReveal>
            <p className="font-display text-brand-red text-sm tracking-[0.4em] uppercase mb-6 font-semibold">
              Steakhouse & Butchery -- Canggu, Bali
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-wider text-white leading-[0.9]">
              The
              <br />
              Big Meat
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-brand-red" />
              <p className="font-display text-xl sm:text-2xl tracking-[0.3em] uppercase text-brand-red font-bold">
                0% Vegan
              </p>
              <span className="h-px w-12 bg-brand-red" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <p className="mt-8 text-white/60 font-body text-lg max-w-xl mx-auto leading-relaxed">
              Premium Australian steaks, Wagyu cuts, and 48-day dry aged beef. Grilled over open
              flame in the heart of Canggu.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/menu"
                className="px-8 py-4 bg-brand-red text-white font-display text-sm tracking-[0.2em] uppercase hover:bg-brand-red-dark transition-colors duration-200 flex items-center gap-3"
              >
                View Menu
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/30 text-white font-display text-sm tracking-[0.2em] uppercase hover:border-white hover:bg-white/5 transition-all duration-200"
              >
                Reserve a Table
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
        </div>
      </section>

      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-display text-brand-red text-xs tracking-[0.4em] uppercase mb-3">
                From The Butcher
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-wider text-white">
                Featured Cuts
              </h2>
            </div>
          </ScrollReveal>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.slice(0, 6).map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 100}>
                  <div className="group bg-brand-dark border border-white/5 p-6 hover:border-brand-red/30 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-lg uppercase tracking-wider text-white group-hover:text-brand-red transition-colors">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-white/40 text-sm mt-2 font-body leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        {item.sub_category && (
                          <p className="text-brand-red/60 text-xs font-display tracking-wider uppercase mt-2">
                            {item.sub_category}
                          </p>
                        )}
                      </div>
                      <span className="font-display text-xl text-brand-red font-bold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          <ScrollReveal delay={200}>
            <div className="text-center mt-12">
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 font-display text-sm tracking-[0.2em] uppercase text-white/60 hover:text-brand-red transition-colors border-b border-white/20 hover:border-brand-red pb-1"
              >
                View Full Menu
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/IMG_5778.jpg')" }}
        />
        <div className="absolute inset-0 bg-brand-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="font-display text-7xl sm:text-8xl md:text-9xl font-bold uppercase tracking-wider text-brand-red/20 leading-none select-none">
              0% Seed Oils
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-display text-7xl sm:text-8xl md:text-9xl font-bold uppercase tracking-wider text-brand-red/20 leading-none select-none mt-2">
              100% Australian
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="text-white text-lg font-body max-w-xl mx-auto mt-8 leading-relaxed">
              We don't cut corners. Every piece of beef that hits our grill is 100% Australian.
              Marble scores from MB2 to MB9. No seed oils. No compromises.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-display text-brand-red text-xs tracking-[0.4em] uppercase mb-3">
                Why Choose Us
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-wider text-white">
                The Big Meat Difference
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HIGHLIGHTS.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 border border-brand-red/30 flex items-center justify-center group-hover:bg-brand-red/10 transition-colors duration-300">
                    <h.icon size={28} className="text-brand-red" />
                  </div>
                  <h3 className="font-display text-sm tracking-[0.15em] uppercase text-white mb-3">
                    {h.title}
                  </h3>
                  <p className="text-white/40 text-sm font-body leading-relaxed">{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/inside-interior.webp')" }}
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <p className="font-display text-brand-red text-xs tracking-[0.4em] uppercase mb-3">
                  Visit Us
                </p>
                <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-wider text-white mb-6">
                  Find Us in Canggu
                </h2>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={18} className="text-brand-red mt-1 flex-shrink-0" />
                  <p className="text-white/60 font-body leading-relaxed">
                    Jl. Pantai Pererenan No.149-157, Pererenan, Kec. Mengwi, Kabupaten Badung, Bali
                    80351
                  </p>
                </div>
                <p className="text-white/60 font-body mb-8">
                  Open daily from 11:00 AM to 11:00 PM
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-brand-red text-white font-display text-sm tracking-[0.2em] uppercase hover:bg-brand-red-dark transition-colors duration-200 text-center"
                  >
                    Reserve a Table
                  </Link>
                  <a
                    href="https://maps.google.com/?q=The+Big+Meat+Canggu+Bali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-white/30 text-white font-display text-sm tracking-[0.2em] uppercase hover:border-white hover:bg-white/5 transition-all duration-200 text-center"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
