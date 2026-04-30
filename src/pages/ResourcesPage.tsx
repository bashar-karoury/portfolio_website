export default function ResourcesPage() {
 return (
    <div className="pt-20 px-6 py-24 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12">Resources & Insights</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
           <div className="space-y-6">
             <h2 className="text-2xl font-bold uppercase tracking-wider text-blue-600 font-mono">Whitepapers</h2>
             <div className="space-y-6">
               {[
                 { title: 'The Future of Low-Power High-Frequency Smart Metering', date: 'March 2024' },
                 { title: 'Scaling IoT Infrastructure in Ruggedized Environments', date: 'January 2024' }
               ].map((doc, idx) => (
                 <div key={idx} className="p-8 bg-slate-50 border rounded-2xl flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-lg mb-1">{doc.title}</h4>
                      <p className="text-slate-500 text-sm">{doc.date}</p>
                    </div>
                    <button className="px-5 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold">Download</button>
                 </div>
               ))}
             </div>
           </div>

           <div className="space-y-6 pt-12">
             <h2 className="text-2xl font-bold uppercase tracking-wider text-blue-600 font-mono">Frequently Asked Questions</h2>
             <div className="divide-y border rounded-2xl bg-white overflow-hidden">
                {[
                  { q: 'Do you offer custom PCB layout design?', a: 'Yes, our engineering team handles full-cycle R&D including custom layout and firmware.' },
                  { q: 'What is your typical production lead time?', a: 'Standard production cycles range from 4-8 weeks depending on component availability.' },
                  { q: 'Are your facilities ISO certified?', a: 'All Sutric facilities are ISO 9001 and ISO 14001 compliant.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-8">
                    <h4 className="font-bold mb-4 text-slate-900">{item.q}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
             </div>
           </div>
        </div>

        <div>
          <div className="sticky top-32 p-8 bg-blue-600 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
            <p className="mb-8 opacity-90 text-sm italic">Stay updated with the latest in electronics innovation and Sutric news.</p>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 mb-4 placeholder:text-white/50 outline-none focus:bg-white/20 transition-all"
            />
            <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold transition-transform active:scale-95">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
 );
}
