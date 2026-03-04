import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-black pt-20">
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/IMG_5779.jpg')" }}
        />
        <div className="absolute inset-0 bg-brand-black/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="font-display text-brand-red text-xs tracking-[0.4em] uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-wider text-white">
              About Us
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="font-display text-brand-red text-xs tracking-[0.4em] uppercase mb-3">
                  The Philosophy
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mb-6">
                  Unapologetically Meat
                </h2>
                <div className="space-y-4 text-white/60 font-body leading-relaxed">
                  <p>
                    The Big Meat was born from a simple belief: great meat, cooked right, needs
                    nothing to hide behind. We're a steakhouse and butchery that puts quality above
                    everything else -- no gimmicks, no trends, no apologies.
                  </p>
                  <p>
                    Every cut that crosses our counter is 100% Australian beef. From grass-fed Angus
                    at marble score 2 to premium Wagyu at MB9, we source directly from farms that
                    share our obsession with quality. Our 48-day dry aged program pushes that quality
                    even further -- concentrating flavor and tenderness into cuts that speak for
                    themselves.
                  </p>
                  <p>
                    We grill over open flame. We season with respect. We serve with pride. That's it.
                    That's the whole formula.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src="/images/IMG_5778.jpg"
                  alt="Premium Australian beef cuts in display"
                  className="w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-brand-red px-6 py-4">
                  <p className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                    0% Vegan
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-display text-brand-red text-xs tracking-[0.4em] uppercase mb-3">
                Our Sourcing
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
                100% Australian
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Farm to Grill',
                text: 'We work directly with Australian cattle farms to ensure full traceability of every cut. From paddock to plate, we know exactly where your steak comes from.',
              },
              {
                title: 'Marble Grading',
                text: "Our beef ranges from MB2 Angus -- lean, clean, and full of flavor -- to MB9 Wagyu, where the marbling delivers a richness that's hard to describe until you've tasted it.",
              },
              {
                title: '48-Day Dry Aged',
                text: 'Our dry aging program runs for a full 48 days. The result: intensely concentrated beef flavor with a buttery tenderness that fresh cuts simply cannot match.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="bg-brand-charcoal border border-white/5 p-8">
                  <h3 className="font-display text-lg uppercase tracking-wider text-brand-red mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/50 font-body text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/inside-interior.webp')" }}
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <p className="font-display text-brand-red text-xs tracking-[0.4em] uppercase mb-3">
                  The Location
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mb-6">
                  Canggu, Bali
                </h2>
                <div className="space-y-4 text-white/60 font-body leading-relaxed">
                  <p>
                    Nestled on Jl. Pantai Pererenan in the heart of Canggu's dining strip, The Big
                    Meat brings serious steakhouse culture to one of Bali's most vibrant
                    neighborhoods.
                  </p>
                  <p>
                    Our outdoor seating lets you enjoy premium Australian cuts under tropical skies.
                    Whether you're winding down after a surf session or fueling up for the night
                    ahead, this is where Canggu comes to eat meat.
                  </p>
                  <p>
                    Free Wi-Fi, cold beer on tap, and a cocktail list that includes a Wagyu
                    fat-washed Old Fashioned. We've thought of everything.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="font-display text-brand-red text-xs tracking-[0.4em] uppercase mb-3">
                  Built for You
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mb-6">
                  For The Carnivore Community
                </h2>
                <div className="space-y-4 text-white/60 font-body leading-relaxed">
                  <p>
                    Whether you're strict keto, carnivore, or just someone who knows that a great
                    steak is one of life's finest pleasures -- this place was built with you in mind.
                  </p>
                  <p>
                    Our menu is loaded with high-protein, low-carb options. From pure beef cuts and
                    bone marrow to chicken grilled whole, every dish delivers the macros your body
                    craves without sacrificing an ounce of flavor.
                  </p>
                  <p>
                    Zero seed oils. Zero compromise. Just real food, cooked the way it should be.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Keto Friendly', 'High Protein', 'No Seed Oils', 'Carnivore Approved'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 border border-brand-red/30 text-brand-red font-display text-xs tracking-[0.15em] uppercase"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/IMG_5777_2.jpg')" }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mb-6">
              Ready to Eat?
            </h2>
            <p className="text-white/80 font-body mb-8 max-w-lg mx-auto">
              Book your table at The Big Meat and experience Canggu's finest steakhouse. Walk-ins
              welcome, reservations recommended.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-black text-white font-display text-sm tracking-[0.2em] uppercase hover:bg-brand-charcoal transition-colors duration-200"
            >
              Reserve a Table
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
