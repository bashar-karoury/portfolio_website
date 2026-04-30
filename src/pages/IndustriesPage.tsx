export default function IndustriesPage() {
  return (
    <div className="pt-20 px-6 py-24 max-w-7xl mx-auto">
      <header className="mb-20 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6 uppercase italic">Industries Served</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Tailored electronic solutions designed for specific vertical requirements.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Energy & Utilities', desc: 'Smart grid infrastructure and high-efficiency power management systems for the modern utility provider.' },
          { title: 'Telecommunications', desc: 'High-speed signal processing and robust network switching hardware for global connectivity.' },
          { title: 'Industrial Automation', desc: 'Precision sensor nodes and ruggedized control systems for smart factory environments.' },
          { title: 'Consumer Tech', desc: 'Next-gen silicon design and low-power wearable technology for mass-market innovation.' }
        ].map((item, idx) => (
          <div key={idx} className="p-10 bg-white border border-slate-200 rounded-3xl hover:border-blue-400 transition-all cursor-pointer">
            <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            <div className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-blue-600 uppercase tracking-widest">
              View Case Study
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
