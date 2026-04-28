import React from 'react';

export default function Hero() {
  return (
    <header className="relative min-h-[600px] flex items-center overflow-hidden pt-20" style={{ backgroundColor: 'var(--cloud-break)' }}>
      <div className="container mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <h1 style={{ color: 'var(--prussian-blue)' }} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6">
            Nejm Student <br/>
            <span style={{ color: 'var(--gold)' }}>Developers</span> <br/>
            Association
          </h1>
          <p className="text-xl text-gray-600 max-w-xl leading-relaxed mb-8">
            A nationwide community of Muslim students and developers advancing in tech while staying true to Islamic values.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://t.me/nsda_community"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 font-bold uppercase tracking-wider transition-all"
              style={{ backgroundColor: 'var(--prussian-blue)', color: 'white', borderRadius: '9999px', textDecoration: 'none', display: 'inline-block' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--gold)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--prussian-blue)'}
            >
              Join NSDA
            </a>
            <a 
              href="/register"
              className="px-8 py-3 font-bold uppercase tracking-wider transition-all"
              style={{ backgroundColor: 'white', color: 'var(--prussian-blue)', border: '1px solid var(--gold)', borderRadius: '9999px', textDecoration: 'none', display: 'inline-block' }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--gold)'; e.target.style.color = 'white'; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = 'var(--prussian-blue)'; }}
            >
              Register
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
            <img 
              alt="Tech Workspace" 
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
            />
          </div>
          {/* Smaller Foundation Year Box */}
          <div className="absolute -bottom-4 -left-4 p-3 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--gold)' }}>
            <span className="text-2xl font-extrabold block mb-0.5" style={{ color: 'var(--prussian-blue)' }}>2025</span>
            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'white' }}>Foundation</span>
          </div>
        </div>
      </div>
    </header>
  );
}