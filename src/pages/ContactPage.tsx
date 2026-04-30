import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
            <div>
                <h1 className="text-5xl font-bold text-slate-900 mb-6 uppercase italic">Start a <span className="text-blue-600">Conversation</span></h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                    Have a technical challenge? Our consultants and engineers are ready to help you architect your next solution.
                </p>
            </div>

            <div className="space-y-8">
                <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Direct Line</h4>
                        <p className="text-slate-500">+249 11 356 6462</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Inquiries</h4>
                        <p className="text-slate-500">solutions@sutric.com</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Global Headquarters</h4>
                        <p className="text-slate-500">1/63 AlDabba, NS, Sudan</p>
                    </div>
                </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
                <p className="text-sm font-bold text-slate-900">Available Mon-Fri, 9am - 6pm PST</p>
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold text-green-600 uppercase">Live Now</span>
                </div>
            </div>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Full Name</label>
                        <input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Company</label>
                        <input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all" placeholder="Acme Corp" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Email Address</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Solution Interest</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                        <option>Smart Metering</option>
                        <option>IoT Systems</option>
                        <option>Power Management</option>
                        <option>Custom R&D</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                    Send Inquiry
                    <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
            </form>
        </div>
      </div>

      <div className="h-[400px] w-full bg-slate-100 flex items-center justify-center font-mono text-slate-400 border-t">
        [Interactive_Global_Operations_Map]
      </div>
    </div>
  );
}
