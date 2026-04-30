import { Code2, Factory, ShieldCheck, Microscope } from 'lucide-react';

const services = [
  {
    icon: Microscope,
    title: 'R&D and Custom Design',
    desc: 'From initial prototyping to architecture design, our engineers specialize in complex PCB layouts and system-on-chip solutions.'
  },
  {
    icon: Factory,
    title: 'Advanced Manufacturing',
    desc: 'Precision assembly with state-of-the-art SMT lines and automated optical inspection to ensure zero-defect production.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Comprehensive environmental stress screening, EMI/EMC compliance testing, and long-term reliability assessments.'
  },
  {
    icon: Code2,
    title: 'Embedded Software',
    desc: 'Custom firmware development, RTOS integration, and secure cloud connectivity protocols tailored to your hardware.'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 italic uppercase tracking-tighter">Manufacturing <span className="text-blue-500">Excellence</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto underline decoration-blue-600 underline-offset-8">End-to-end electronics development from conceptual whiteboard to global shipping.</p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((item, idx) => (
            <div key={idx} className="flex gap-8 group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6">
                <item.icon size={32} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white border-y">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <h2 className="text-4xl font-bold text-slate-900">Zero-Compromise Standards</h2>
                <div className="space-y-6">
                    {[
                        'ISO 9001:2015 Certified Manufacturing',
                        'IPC-A-610 Workmanship Standards',
                        'ROHS & REACH Material Compliance',
                        'Military-grade thermal cycling capabilities'
                    ].map(text => (
                        <div key={text} className="flex items-center gap-4 text-slate-700 font-medium">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            {text}
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-slate-100 aspect-video rounded-3xl flex items-center justify-center font-mono text-slate-400 border-2 border-dashed border-slate-200">
                [Laboratory_Visualization_Feed]
            </div>
        </div>
      </section>
    </div>
  );
}
