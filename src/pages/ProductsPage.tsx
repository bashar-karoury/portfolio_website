import { Cpu, Zap, Radio, Battery, Download, ExternalLink } from 'lucide-react';

const products = [
  { 
    id: 1, 
    category: 'Smart Metering', 
    name: 'Metrix-5000', 
    icon: Zap, 
    desc: 'Advanced grid-connected smart meter with sub-second frequency monitoring.',
    specs: ['99.9% Accuracy', 'IP67 Waterproof', 'LTE/LoRaWAN Support']
  },
  { 
    id: 2, 
    category: 'IoT Devices', 
    name: 'Sutric NanoHub', 
    icon: Radio, 
    desc: 'Compact industrial gateway supporting over 200 concurrent sensor nodes.',
    specs: ['Quad-core ARM', '128-bit Encryption', '1.2W Operation']
  },
  { 
    id: 3, 
    category: 'Power Systems', 
    name: 'VoltStream Pro', 
    icon: Battery, 
    desc: 'Intelligent power distribution unit with AI-driven load balancing.',
    specs: ['Hot-swappable', 'Cloud Integrated', 'Dynamic Filtering']
  },
  { 
    id: 4, 
    category: 'Processors', 
    name: 'S-Core Alpha', 
    icon: Cpu, 
    desc: 'Custom-designed microcontroller optimized for low-latency AI inference.',
    specs: ['2.4GHz Clock', 'Neural Engine V2', 'ASIL-D Certified']
  }
];

export default function ProductsPage() {
  return (
    <div className="pt-20 px-12 py-24 bg-[#05070A] min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20">
          <h1 className="text-6xl font-light text-white mb-6 tracking-tight">Our <span className="font-bold text-blue-400">Solutions</span></h1>
          <p className="text-lg text-slate-400 max-w-2xl font-light leading-relaxed">Precision-engineered hardware built for high-demand industrial environments.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-10 flex flex-col md:flex-row gap-10 hover:bg-white/10 transition-all group">
              <div className="w-24 h-24 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <product.icon size={48} />
              </div>
              <div className="flex-grow space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-blue-400 font-mono tracking-[0.3em] uppercase mb-3 block">[{product.category}]</span>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{product.name}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed font-light">{product.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {product.specs.map(spec => (
                    <span key={spec} className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-widest rounded-md">{spec}</span>
                  ))}
                </div>
                <div className="flex gap-6 pt-4">
                  <button className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors">
                    <Download size={16} /> Datasheet
                  </button>
                  <button className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors">
                    <ExternalLink size={16} /> Technical Specs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
