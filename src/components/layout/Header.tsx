import { Link, useLocation } from 'react-router-dom';
import { Cpu, Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-[#05070A]/80 backdrop-blur-md border-white/5 py-4 shadow-2xl" 
          : "bg-transparent border-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-700 rounded-sm rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#05070A] rotate-45"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white uppercase italic">
            Sutric
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-xs font-medium transition-colors hover:text-white font-mono tracking-[0.2em] uppercase",
                location.pathname === link.href ? "text-blue-400" : "text-slate-400"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-2 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded transition-all"
          >
            Request Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-slate-900"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white py-4 rounded-xl text-center font-bold"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
