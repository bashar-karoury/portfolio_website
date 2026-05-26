export default function AboutPage() {
  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto py-24">
      <div className="max-w-3xl mb-20">
        <h1 className="text-5xl font-bold mb-10 leading-tight text-slate-900">Engineering smarter <span className="text-blue-600 italic">energy</span> systems.</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Sutric Advanced Technologies develops energy management technology solutions for modern industrial and utility applications, combining smart devices, embedded systems, and connected platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold border-b pb-4">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed">
            To help organizations manage energy more intelligently through reliable devices, practical software platforms, and data-driven operational visibility.
          </p>
          <div className="bg-slate-100 p-8 rounded-2xl italic text-slate-700">
            "Better energy management starts with accurate data, reliable devices, and systems designed for real-world operation."
            <div className="mt-4 font-bold not-italic text-slate-900">— Sutric Advanced Technologies</div>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold border-b pb-4">Our Focus</h2>
          <div className="space-y-12">
            {[
              { year: 'Devices', event: 'Smart metering, monitoring, and control devices designed for industrial and utility energy applications.' },
              { year: 'Firmware', event: 'Embedded software for reliable field operation, secure communication, and long-term device maintainability.' },
              { year: 'Platforms', event: 'Dashboards and backend systems that provide visibility into energy usage, device status, and operational data.' },
              { year: 'Integration', event: 'Connectivity with IoT platforms, industrial systems, and customer workflows to support practical energy management.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <span className="font-mono text-blue-600 font-bold block min-w-[90px]">{item.year}</span>
                <p className="text-slate-600">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}