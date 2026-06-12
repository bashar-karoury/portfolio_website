import { Code2, Factory, ShieldCheck, Microscope } from 'lucide-react';

const services = [
  {
    icon: Microscope,
    title: 'Energy Technology R&D',
    desc: 'We design and develop energy management solutions for modern industrial and utility applications, from concept validation to product-ready architecture.'
  },
  {
    icon: Factory,
    title: 'Smart Devices Development',
    desc: 'Custom electronic devices for metering, monitoring, control, and field deployment, built to support reliable energy data collection and operation.'
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Industrial Solutions',
    desc: 'Solutions designed with long-term reliability, secure operation, and real-world industrial conditions in mind.'
  },
  {
    icon: Code2,
    title: 'Embedded and Platform Software',
    desc: 'Firmware, communication protocols, dashboards, and cloud-connected platforms that help manage, monitor, and optimize energy usage.'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 italic uppercase tracking-tighter">Energy Management <span className="text-blue-500">Solutions</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto underline decoration-blue-600 underline-offset-8">Devices and platforms that help industrial and utility customers monitor, control, and manage energy more effectively.</p>
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
                <h3 className="text-2xl font-bold text-slate-600">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white border-y">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">Built for Practical Energy Operations</h2>
            <div className="space-y-6">
              {[
                'Smart metering and energy monitoring devices',
                'Embedded firmware for reliable field operation',
                'Communication with industrial and IoT platforms',
                'Dashboards and tools for energy visibility and management'
              ].map(text => (
                <div key={text} className="flex items-center gap-4 text-slate-700 font-medium">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-100 aspect-video rounded-3xl flex items-center justify-center font-mono text-slate-400 border-2 border-dashed border-slate-200">
            [Energy_Management_System_View]
          </div>
        </div>
      </section>
    </div>
  );
}