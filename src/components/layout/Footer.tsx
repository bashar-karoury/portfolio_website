import { Link } from 'react-router-dom';
import { Cpu, Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05070A] text-slate-400 pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20">
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-700 rounded-sm rotate-45 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#05070A] rotate-45"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase italic">
              Sutric
            </span>
          </Link>
          <p className="text-sm leading-relaxed font-light">
            Sutric leads the future of industrial innovation in Energy Management in region.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Mail size={18} /></a>
          </div>
        </div>
        {/* 
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px] font-mono">Solutions</h4>
          <ul className="space-y-4 text-xs">
            <li><Link to="/products" className="hover:text-white transition-colors uppercase tracking-widest leading-relaxed">Smart Meters</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors uppercase tracking-widest leading-relaxed">IoT Devices</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors uppercase tracking-widest leading-relaxed">Power Management</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors uppercase tracking-widest leading-relaxed">Custom Design</Link></li>
          </ul>
        </div> */}
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px] font-mono"> </h4>
          <ul className="space-y-4 text-xs">
            {/* <li><Link to="/products" className="hover:text-white transition-colors uppercase tracking-widest leading-relaxed">Smart Meters</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors uppercase tracking-widest leading-relaxed">IoT Devices</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors uppercase tracking-widest leading-relaxed">Power Management</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors uppercase tracking-widest leading-relaxed">Custom Design</Link></li> */}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px] font-mono">Company</h4>
          <ul className="space-y-4 text-xs">
            <li><Link to="/about" className="hover:text-white transition-colors uppercase tracking-widest leading-relaxed">Our Story</Link></li>
            <li><Link to="/industries" className="hover:text-white transition-colors uppercase tracking-widest leading-relaxed">Industries</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors uppercase tracking-widest leading-relaxed">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors uppercase tracking-widest leading-relaxed">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px] font-mono">Operations</h4>
          <ul className="space-y-6 text-xs">
            <li className="flex gap-4">
              <MapPin size={16} className="text-blue-500 shrink-0" />
              <span className="leading-relaxed">1/63 AlDabba,<br /> NS, Sudan</span>
            </li>
            <li className="flex gap-4">
              <Phone size={16} className="text-blue-500 shrink-0" />
              <span>+249 11 356 6462</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-600">
          © {new Date().getFullYear()} Sutric Advanced Technologies Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
