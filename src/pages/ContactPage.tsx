import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="pt-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="space-y-12">
                    <div>
                        <h1 className="text-5xl font-bold text-slate-900 mb-6 uppercase italic">Discuss Your <span className="text-blue-600">Energy Solution</span></h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Looking to build, deploy, or improve an energy management solution? Our team can help with smart devices, embedded systems, IoT connectivity, and platform development.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                                <p className="text-slate-500">+249 11 356 6462</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Business Inquiries</h4>
                                <p className="text-slate-500">contact@sutric.co</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Office</h4>
                                <p className="text-slate-500">1/63 AlDabba, NS, Sudan</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
                        <p className="text-sm font-bold text-slate-900">Available for energy, utility, industrial, and IoT projects</p>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-bold text-green-600 uppercase">Open</span>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <form className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Full Name</label>
                                <input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all" placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Company</label>
                                <input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all" placeholder="Your company" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Email Address</label>
                            <input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all" placeholder="name@company.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Solution Interest</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                                <option style={{ backgroundColor: '#1855b7', color: '#ffffff' }}>Smart Metering</option>
                                <option style={{ backgroundColor: '#1855b7', color: '#ffffff' }}>Energy Monitoring</option>
                                <option style={{ backgroundColor: '#1855b7', color: '#ffffff' }}>Embedded Devices</option>
                                <option style={{ backgroundColor: '#1855b7', color: '#ffffff' }}>IoT Platform Integration</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Message</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 transition-all" placeholder="Tell us about your energy management project or technical requirement..."></textarea>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                            Send Inquiry
                            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                    </form>
                </div>
            </div>

            {/* <div className="h-[400px] w-full bg-slate-100 flex items-center justify-center font-mono text-slate-400 border-t">
                [Energy_Solutions_Location_Map]
            </div> */}
        </div>
    );
}