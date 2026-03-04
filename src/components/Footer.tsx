import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-display font-medium tracking-[0.3em] text-white/50 uppercase block">
                The
              </span>
              <span className="text-3xl font-display font-bold tracking-wider text-white uppercase block">
                Big Meat
              </span>
              <span className="text-[9px] font-display tracking-[0.2em] text-white/40 uppercase block">
                Steakhouse & Butchery
              </span>
            </div>
            <p className="text-brand-red font-display text-lg tracking-wider uppercase font-bold">
              0% Vegan
            </p>
            <p className="text-white/40 font-body text-sm mt-3 leading-relaxed">
              Premium Australian meats, grilled to perfection in the heart of Canggu, Bali.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-[0.2em] uppercase text-white mb-6">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/menu', label: 'Menu' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Reserve a Table' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/50 hover:text-brand-red transition-colors text-sm font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-[0.2em] uppercase text-white mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red mt-1 flex-shrink-0" />
                <p className="text-white/50 text-sm font-body leading-relaxed">
                  Jl. Pantai Pererenan No.149-157, Pererenan, Kec. Mengwi, Kabupaten Badung, Bali
                  80351
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-red flex-shrink-0" />
                <a
                  href="tel:+6208898767256"
                  className="text-white/50 hover:text-white text-sm font-body transition-colors"
                >
                  0889-8767-2565
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-brand-red mt-1 flex-shrink-0" />
                <p className="text-white/50 text-sm font-body leading-relaxed">
                  Daily 11:00 AM - 11:00 PM
                  <br />
                  Tuesday - Monday
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-[0.2em] uppercase text-white mb-6">
              Follow Us
            </h3>
            <a
              href="https://instagram.com/thebigmeatbali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/50 hover:text-brand-red transition-colors text-sm font-body"
            >
              <Instagram size={20} />
              @thebigmeatbali
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="text-center">
            <p className="text-white/25 text-xs font-body">
              All prices are subject to 10% government tax and 5% service charge. Prices are in '000
              Rupiah.
            </p>
          </div>
          <div className="text-center mt-6">
            <p className="text-white/20 text-xs font-body">
              Created by{' '}
              <a
                href="https://vonzie.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-brand-red transition-colors"
              >
                vonzie studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
