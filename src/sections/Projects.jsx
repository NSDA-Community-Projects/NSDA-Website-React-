import React from 'react';

export default function Projects() {
  const projects = [
    { tech: "Python / Telegram", title: "Nejm Ask Bot", description: "A sophisticated knowledge-base bot for student inquiries and community management.", icon: "fab fa-telegram" },
    { tech: "Node.js", title: "Prayer Times API", description: "High-performance microservice providing accurate calculation methods globally.", icon: "fas fa-cloud-moon" },
    { tech: "React", title: "Quran Study App", description: "Cross-platform application for structured study and tafsir tracking.", icon: "fas fa-book-quran" }
  ];

  return (
    <section className="py-24 relative" id="projects" style={{ backgroundColor: 'var(--cloud-break)' }}>
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--prussian-blue)' }}>Open Source Ecosystem</h2>
            <p className="text-gray-500 max-w-xl">We build tools that solve problems within the community while following modern engineering best practices.</p>
          </div>
          <a 
            href="https://github.com/NSDA-Community-Projects" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-wide transition-all"
            style={{ backgroundColor: 'var(--prussian-blue)', color: 'white', borderRadius: '9999px', textDecoration: 'none' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--gold)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--prussian-blue)'}
          >
            <i className="fab fa-github"></i> Explore All Repo →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gold transition-all p-6 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(1, 52, 99, 0.1)', color: 'var(--prussian-blue)' }}>{project.tech}</span>
                <i className={`${project.icon} text-2xl`} style={{ color: 'var(--gold)' }}></i>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--prussian-blue)' }}>{project.title}</h3>
              <p className="text-gray-500 leading-relaxed">{project.description}</p>
              {/* CONTRIBUTORS SECTION REMOVED - as requested */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}