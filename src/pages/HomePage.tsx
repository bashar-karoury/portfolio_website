import { motion } from 'motion/react';
import { ArrowRight, Cpu, ShieldCheck, Zap, Globe, Users, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#05070A]">
        {/* Background Ambient Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-blue-400">Leading Technology in Energy Management</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-light leading-[1.05] tracking-tight text-white">
              Innovating <br />
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                Electronics
              </span>
              <br /> for Tomorrow.
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-md leading-relaxed font-light">
              Sutric pioneers the Energy Management Infrastructure of the future with high-precision Energy meters, Management platforms, and advanced power management.
            </p>

            {/* <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all uppercase text-[10px] tracking-widest">
                Explore Solutions
              </Link>
              <Link to="/services" className="px-10 py-5 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 font-bold rounded uppercase text-[10px] tracking-widest transition-all">
                Learn More
              </Link>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-6 relative justify-center items-center h-[600px]"
          >
            {/* Tech Rings */}
            <div className="absolute w-96 h-96 border-[1px] border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[500px] h-[500px] border-[1px] border-blue-500/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-md relative z-20">
              {[
                { icon: Zap, color: 'blue', title: 'Energy Management Products', desc: 'Innovative solutions for efficient energy management.' },
                { icon: Radio, color: 'cyan', title: 'Smart Metering Integration', desc: 'Seamless integration of IoT and energy management systems.' },
                { icon: ShieldCheck, color: 'indigo', title: 'Certified QA', desc: 'Highly certified quality assurance processes.' },
                { icon: Globe, color: 'emerald', title: 'Energy Management Platforms', desc: 'Cost-effective secure solutions for energy management platforms.' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col space-y-4 hover:bg-white/10 transition-all",
                    idx % 2 !== 0 ? "mt-12" : ""
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    item.color === 'blue' ? "bg-blue-500/20 text-blue-400" :
                      item.color === 'cyan' ? "bg-cyan-500/20 text-cyan-400" :
                        item.color === 'indigo' ? "bg-indigo-500/20 text-indigo-400" :
                          "bg-emerald-500/20 text-emerald-400"
                  )}>
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-bold text-slate-100">{item.title}</h3>
                  <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wider font-mono">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise / Mission */}
      <section className="py-32 bg-[#05070A] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
            <div className="lg:col-span-1 border-l border-blue-500/30 pl-8 py-4">
              <h2 className="text-4xl font-light mb-8 text-white leading-tight">We build technology that <span className="text-blue-400 font-bold">scales</span> and endures.</h2>
              <p className="text-slate-400 mb-10 leading-relaxed font-light">
                Founded with a vision to redefine electronics engineering in the region, Sutric combines deep manufacturing roots with hightech-driven solutions to solve the most complex Energy Management challenges.
              </p>
              <Link to="/about" className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                Learn our history <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: 'Uncompromising Quality', desc: 'Every component undergoes rigorous ISO-certified thermal and stress testing.' },
                { icon: Zap, title: 'Energy Efficiency', desc: 'Low-power design that maximizes lifespan and reduces environmental impact.' },
                { icon: Globe, title: 'Global Connectivity', desc: 'Secure IoT frameworks designed for seamless cross-border integration.' },
                { icon: Users, title: 'Expert Support', desc: 'Dedicated engineering team available 24/7 for technical support.' }
              ].map((feature, idx) => (
                <div key={idx} className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-8 border border-blue-500/20 transition-colors">
                    <feature.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-[10px] uppercase tracking-widest font-mono opacity-80">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preview CTA */}
      <section className="py-32 px-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-[0_0_80px_rgba(37,99,235,0.2)]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">Ready to utilize High Quality Energy Management <span className="font-bold">infrastructure?</span></h2>
            <p className="text-blue-100 text-lg font-light leading-relaxed opacity-80">
              {/* Join hundreds of companies utilizing Sutric's hardware innovation to power their future. */}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <Link to="/contact" className="px-12 py-5 bg-white text-blue-600 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl">
                Get Started Now
              </Link>
              {/* <Link to="/products" className="px-12 py-5 border border-white/30 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                View Catalogue
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
