import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-display font-medium tracking-[0.3em] text-white/70 uppercase">
                The
              </span>
              <span className="text-2xl font-display font-bold tracking-wider text-white uppercase">
                Big Meat
              </span>
              <span className="text-[8px] font-display tracking-[0.2em] text-white/50 uppercase">
                Steakhouse & Butchery
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-display text-sm tracking-widest uppercase transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-brand-red'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 bg-brand-red text-white font-display text-sm tracking-widest uppercase hover:bg-brand-red-dark transition-colors duration-200"
            >
              Reserve a Table
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-display text-2xl tracking-[0.2em] uppercase transition-colors duration-200 ${
                location.pathname === link.to
                  ? 'text-brand-red'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 px-8 py-3 bg-brand-red text-white font-display text-lg tracking-widest uppercase hover:bg-brand-red-dark transition-colors duration-200"
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </nav>
  );
}
