export default function AboutPage() {
  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto py-24">
      <div className="max-w-3xl mb-20">
        <h1 className="text-5xl font-bold mb-10 leading-tight text-slate-900">Engineering a smarter <span className="text-blue-600 italic">connected</span> world.</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Founded in 2012, Sutric Electronics began with a simple mission: to bridge the gap between high-performance hardware and sustainable technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold border-b pb-4">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed">
            To be the global benchmark for electronic innovation, providing the foundation for the next era of industrial and consumer smart devices.
          </p>
          <div className="bg-slate-100 p-8 rounded-2xl italic text-slate-700">
            "Innovation is not just about complexity, but about the impact of simplicity at scale."
            <div className="mt-4 font-bold not-italic text-slate-900">— Elena Sutric, CEO</div>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold border-b pb-4">Our History</h2>
          <div className="space-y-12">
            {[
              { year: '2012', event: 'Sutric Electronics founded by a team of silicon valley engineers.' },
              { year: '2015', event: 'First patent granted for advanced smart meter signal processing.' },
              { year: '2018', event: 'Expanded to global markets, opening offices in Tokyo and Berlin.' },
              { year: '2022', event: 'Launched the integrated IoT cloud management platform.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <span className="font-mono text-blue-600 font-bold block min-w-[60px]">{item.year}</span>
                <p className="text-slate-600">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
