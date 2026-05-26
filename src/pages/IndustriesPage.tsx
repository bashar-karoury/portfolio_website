export default function IndustriesPage() {
  return (
    <div className="pt-20 px-6 py-24 max-w-7xl mx-auto">
      <header className="mb-20 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6 uppercase italic">Industries Served</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Energy management devices and platforms designed for industrial, utility, and infrastructure applications.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Energy & Utilities', desc: 'Smart metering, monitoring, and energy management solutions that support modern utility operations and field infrastructure.' },
          { title: 'Industrial Facilities', desc: 'Devices and platforms that help factories and industrial sites monitor consumption, improve visibility, and manage energy usage.' },
          { title: 'Smart Infrastructure', desc: 'Connected systems for buildings, campuses, and public infrastructure where reliable energy data and control are essential.' },
          { title: 'IoT & Embedded Systems', desc: 'Custom embedded devices, firmware, and cloud-connected platforms for energy-focused IoT applications.' }
        ].map((item, idx) => (
          <div key={idx} className="p-10 bg-white border border-slate-200 rounded-3xl hover:border-blue-400 transition-all cursor-pointer">
            <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            <div className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-blue-600 uppercase tracking-widest">
              Explore Solutions
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}