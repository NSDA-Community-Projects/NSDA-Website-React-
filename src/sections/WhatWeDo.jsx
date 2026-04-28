import React from 'react';

export default function WhatWeDo() {
  const pillars = [
    { icon: "🤲", title: "Sadaqah Jariyah", description: "Building open-source tools that serve the Ummah and earn continuous reward." },
    { icon: "💻", title: "Nujum al-Code", description: "Engaging technical deep-dives and webinars with industry veterans." },
    { icon: "🎓", title: "Mentorship", description: "One-on-one guidance connecting seasoned devs with aspiring students." },
    { icon: "🌍", title: "Muslim Devs", description: "A professional network spanning the globe, united by faith and code." }
  ];

  return (
    <section className="py-24 relative" id="what-we-do" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--prussian-blue)' }}>Our Pillars of Excellence</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--gold)' }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index} className="p-8 bg-white rounded-xl shadow-lg hover:-translate-y-2 transition-all duration-300 text-center" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--prussian-blue)' }}>{pillar.title}</h3>
              <p className="text-gray-500 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
