import React from 'react';

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden" id="about" style={{ backgroundColor: 'var(--cloud-break)' }}>
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6" style={{ backgroundColor: 'rgba(221, 162, 58, 0.1)', color: 'var(--gold)' }}>
              Our Genesis
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--prussian-blue)' }}>
              Bridging Sacred Wisdom and Silicon Innovation
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded on <span className="font-semibold" style={{ color: 'var(--prussian-blue)' }}>March 31, 2025</span>, NSDA emerged from a vision to nurture a generation of developers who build for the dunya while securing their akhira.
              </p>
              <p>
                Our mission is to create a digital sanctuary where Muslim technical talent can thrive, collaborate on open-source projects, and find mentorship that aligns with their spiritual identity.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-xl mb-2" style={{ color: 'var(--prussian-blue)' }}>Our Vision</h4>
                <p className="text-sm text-gray-500">To be the global hub for ethical software development excellence.</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2" style={{ color: 'var(--prussian-blue)' }}>Our Mission</h4>
                <p className="text-sm text-gray-500">Empowering students through technical mastery and spiritual grounding.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute inset-0 rounded-lg transform translate-x-4 translate-y-4" style={{ backgroundColor: 'rgba(221, 162, 58, 0.1)' }}></div>
              <img 
                alt="Collaboration" 
                className="rounded-lg shadow-xl relative z-10 w-full"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}