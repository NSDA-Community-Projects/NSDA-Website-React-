import React from 'react';

export default function Mentorship() {
  const stats = [
    { value: "11", label: "Expert Mentors" },
    { value: "80", label: "Active Students" },
    { value: "15+", label: "Countries" },
    { value: "24/7", label: "Community Support" }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--prussian-blue)' }}>
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Scaling Impact Through Guidance</h2>
            <p className="text-white/70 text-lg mb-8">Our mentorship program isn't just about code review; it's about holistic growth. We measure success by the strength of our community.</p>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 font-bold uppercase tracking-wider text-sm">
                  <span className="text-white/80">Mentor-Student Ratio</span>
                  <span style={{ color: 'var(--gold)' }}>1:7</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] rounded-full" style={{ backgroundColor: 'var(--gold)' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2 font-bold uppercase tracking-wider text-sm">
                  <span className="text-white/80">Project Success Rate</span>
                  <span style={{ color: 'var(--gold)' }}>92%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] rounded-full" style={{ backgroundColor: 'var(--gold)' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl text-center border border-white/10">
                <div className="text-5xl font-bold mb-2" style={{ color: 'var(--gold)' }}>{stat.value}</div>
                <div className="text-white/80 text-xs uppercase tracking-wider font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}