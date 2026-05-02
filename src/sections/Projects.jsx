import React from 'react';

export default function Projects() {
  const projects = [
    { tech: "Python / Telegram", title: "Nejm Ask Bot", description: "A sophisticated knowledge-base bot for student inquiries and community management.", icon: "fab fa-telegram" },
    { tech: "Node.js", title: "Prayer Times API", description: "High-performance microservice providing accurate calculation methods globally.", icon: "fas fa-cloud-moon" },
    { tech: "React", title: "Quran Study App", description: "Cross-platform application for structured study and tafsir tracking.", icon: "fas fa-book-quran" }
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#faf8ff]/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(1,52,99,0.06)]">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
          <div className="text-2xl font-bold font-['Space_Grotesk'] text-primary">
            NSDA
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-['Space_Grotesk'] text-sm tracking-tight">
            <a className="text-primary opacity-70 hover:opacity-100 transition-opacity" href="#">Home</a>
            <a className="text-primary opacity-70 hover:opacity-100 transition-opacity" href="#">About</a>
            <a className="text-primary opacity-70 hover:opacity-100 transition-opacity" href="#">What We Do</a>
            <a className="text-primary opacity-70 hover:opacity-100 transition-opacity" href="#">Nujum</a>
            <a className="text-secondary border-b-2 border-secondary pb-1 font-bold" href="#">Projects</a>
            <a className="text-primary opacity-70 hover:opacity-100 transition-opacity" href="#">Leadership</a>
            <button className="ml-4 px-6 py-2 bg-primary text-white rounded-xl font-bold hover:scale-95 transition-transform duration-200">
              Join Us
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <span className="material-symbols-outlined text-primary">menu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="muqarnas-watermark -top-40 -right-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/20 mb-6">
              <span className="material-symbols-outlined text-secondary text-sm mr-2">terminal</span>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-semibold">
                Open Source Initiative
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary tracking-tight leading-[1.1] mb-8">
              Open Source Ecosystem: <span className="text-secondary italic">Building for the Ummah</span>
            </h1>
            <p className="text-body text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              We build tools that solve problems within the community while following modern engineering best practices. Our code is our contribution to the digital sanctuary.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="max-w-7xl mx-auto px-8 pb-32">
        {/* Featured Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          
          {/* Project 1: Nejm Ask Bot (Large) */}
          <div className="md:col-span-8 group relative bg-surface-container-lowest rounded-lg p-8 overflow-hidden shadow-[0_12px_40px_rgba(1,52,99,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-primary-container/10 text-primary-container text-[10px] font-bold uppercase tracking-wider">
                      Python
                    </span>
                    <span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary text-[10px] font-bold uppercase tracking-wider">
                      Telegram
                    </span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-primary">Nejm Ask Bot</h3>
                </div>
                <div className="flex space-x-4 text-on-surface-variant/60">
                  <div className="flex items-center text-sm">
                    <span className="material-symbols-outlined text-base mr-1">star</span> 124
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="material-symbols-outlined text-base mr-1">fork_right</span> 42
                  </div>
                </div>
              </div>
              
              <p className="text-on-surface-variant mb-8 max-w-md">
                Automating community inquiries through a robust Python-based Telegram bot. Designed for high-concurrency and seamless user interaction.
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high overflow-hidden" title="Contributor">
                    <div className="w-full h-full bg-gradient-to-br from-[#3a6091] to-[#1f4878]"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high overflow-hidden" title="Contributor">
                    <div className="w-full h-full bg-gradient-to-br from-[#fdbe54] to-[#7f5600]"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                    +8
                  </div>
                </div>
                <a className="flex items-center font-bold text-primary hover:text-secondary transition-colors" href="#">
                  View Repository <span className="material-symbols-outlined ml-2">arrow_outward</span>
                </a>
              </div>
            </div>
            
            {/* Code Snippet Motif Overlay */}
            <div className="absolute -right-12 bottom-1/4 opacity-5 rotate-12 pointer-events-none">
              <pre className="text-xs font-mono"><code>{`async def handle_inquiry(update, context):
    query = update.message.text
    response = await ai_engine.analyze(query)
    await context.bot.send_message(...)`}</code></pre>
            </div>
          </div>

          {/* Project 2: Prayer Times API (Small/Vertical) */}
          <div className="md:col-span-4 bg-primary-container rounded-lg p-8 flex flex-col justify-between text-white shadow-[0_12px_40px_rgba(1,52,99,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mb-4">Prayer Times API</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Node.js / Express microservice providing precision calculations for global regions using localized astronomical data.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono opacity-60 mb-4">
                <span>GET</span>
                <span>/v1/timings/:city</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-secondary-container font-bold text-xs uppercase tracking-widest">Active Beta</span>
                <span className="material-symbols-outlined text-secondary-container">api</span>
              </div>
            </div>
          </div>

          {/* Project 3: Quran Study App (Horizontal) */}
          <div className="md:col-span-12 group bg-surface-container-high rounded-lg p-1 w-full shadow-inner">
            <div className="bg-surface-container-lowest rounded-[1.75rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider mb-6">
                  Production Ready
                </div>
                <h3 className="font-headline text-4xl font-bold text-primary mb-6">Quran Study App</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  A React and Firebase powered platform for tracking tafsir progress. Features real-time sync across devices and a distraction-free interface designed for deep contemplation.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl text-xs font-medium text-primary">
                    React 18
                  </span>
                  <span className="px-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl text-xs font-medium text-primary">
                    Firebase Auth
                  </span>
                  <span className="px-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl text-xs font-medium text-primary">
                    Tailwind CSS
                  </span>
                  <span className="px-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl text-xs font-medium text-primary">
                    Firestore
                  </span>
                </div>
                <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center hover:bg-primary/90 transition-colors">
                  Launch Project <span className="material-symbols-outlined ml-2">rocket_launch</span>
                </button>
              </div>
            <div className="flex-1 relative">
  <div className="relative rounded-lg overflow-hidden border-4 border-surface shadow-2xl bg-white">
    {/* Mock Mobile Device Frame */}
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      
      {/* Mock Status Bar */}
      <div className="bg-primary px-4 py-2 flex justify-between items-center">
        <span className="text-white text-[10px] font-medium">9:41</span>
        <div className="flex gap-1">
          <span className="text-white text-[10px]">📶</span>
          <span className="text-white text-[10px]">🔋</span>
        </div>
      </div>
      
      {/* Mock App Header */}
      <div className="bg-gradient-to-r from-primary to-primary-container px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-secondary-container rounded-full flex items-center justify-center">
            <span className="text-primary text-sm font-bold">Q</span>
          </div>
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
            <React.Fragment key={index}>
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gold transition-all p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(1, 52, 99, 0.1)', color: 'var(--prussian-blue)' }}>{project.tech}</span>
                  <i className={`${project.icon} text-2xl`} style={{ color: 'var(--gold)' }}></i>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--prussian-blue)' }}>{project.title}</h3>
                <p className="text-gray-500 leading-relaxed">{project.description}</p>
                {/* CONTRIBUTORS SECTION REMOVED - as requested */}
              </div>
              <span className="text-secondary-container text-xs">📖</span>
            </React.Fragment>
          ))}</div>
          <div className="text-right">
            <p className="text-primary text-sm font-arabic leading-relaxed">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          </div>
        </div>
        
        {/* Progress Section */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-primary text-xs font-semibold">Tafsir Progress</span>
            <span className="text-secondary text-xs font-bold">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-secondary-container rounded-full h-2" style={{ width: '65%' }}></div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="text-center bg-surface-container-low rounded-lg p-2">
            <span className="text-secondary-container text-base">📚</span>
            <p className="text-primary text-xs font-bold">12</p>
            <p className="text-on-surface-variant text-[10px]">Surahs</p>
          </div>
          <div className="text-center bg-surface-container-low rounded-lg p-2">
            <span className="text-secondary-container text-base">⭐</span>
            <p className="text-primary text-xs font-bold">85%</p>
            <p className="text-on-surface-variant text-[10px]">Complete</p>
          </div>
          <div className="text-center bg-surface-container-low rounded-lg p-2">
            <span className="text-secondary-container text-base">🔥</span>
            <p className="text-primary text-xs font-bold">7</p>
            <p className="text-on-surface-variant text-[10px]">Day Streak</p>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="mt-3 pt-2 border-t border-outline-variant/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary-container rounded-full"></div>
            <span className="text-primary text-[10px] font-medium">Last studied: Surah Al-Ikhlas</span>
          </div>
        </div>
      </div>
      
      {/* Mock Bottom Navigation */}
      <div className="border-t border-outline-variant/20 bg-white px-4 py-2 flex justify-around">
        <span className="text-secondary-container text-sm">📖</span>
        <span className="text-on-surface-variant/40 text-sm">🔍</span>
        <span className="text-on-surface-variant/40 text-sm">📊</span>
        <span className="text-on-surface-variant/40 text-sm">👤</span>
      </div>
    </div>
  </div>
  <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-secondary-container/20 rounded-lg"></div>
</div>
            </div>
          </div>
        </div>

        {/* Contributor Section */}
        <section className="relative rounded-lg bg-primary p-12 md:p-20 overflow-hidden text-center md:text-left">
          <div className="muqarnas-watermark -bottom-40 -left-40 opacity-10"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-headline text-4xl font-bold text-white mb-6">Join the Digital Jihad</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Our repositories are open for contributions. Whether you're a designer, developer, or documentation wizard, there's a place for you in our ecosystem.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                  <span className="text-white">Access to private mentorship channels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                  <span className="text-white">Recognition in our global contributor list</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                  <span className="text-white">Hands-on experience with production-grade stacks</span>
                </div>
              </div>
              <button className="w-full md:w-auto px-10 py-5 bg-secondary-container text-primary font-extrabold rounded-xl hover:scale-95 transition-transform">
                Explore GitHub Repositories
              </button>
            </div>
            
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-white">account_tree</span>
                    <span className="text-white font-mono text-sm tracking-tighter">CONTRIBUTING.md</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-error/40"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary-container/40"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/40"></div>
                  </div>
                </div>
                <div className="space-y-4 font-mono text-xs text-white/70">
                  <p className="text-secondary-container"># How to Join</p>
                  <p>1. Fork the target repository</p>
                  <p>2. Create a new branch: `feat/amazing-thing`</p>
                  <p>3. Commit your changes with meaningful messages</p>
                  <p>4. Push to the branch and open a Pull Request</p>
                  <p className="pt-4 border-t border-white/5 italic">// We value clean code and clear comments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary w-full py-12 px-8 border-t border-primary-container">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-4 md:space-y-0">
          <div className="text-lg font-['Space_Grotesk'] text-secondary-container">NSDA</div>
          <div className="flex flex-wrap justify-center gap-8 font-['Helvetica_Neue'] text-xs uppercase tracking-widest">
            <a href="#" className="text-white/60 hover:text-secondary-container transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-secondary-container transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-secondary-container transition-colors">Contact Us</a>
            <a href="#" className="text-white/60 hover:text-secondary-container transition-colors">GitHub</a>
            <a href="#" className="text-white/60 hover:text-secondary-container transition-colors">LinkedIn</a>
          </div>
          <div className="font-['Helvetica_Neue'] text-xs uppercase tracking-widest text-white/60">
            © 2024 Nejm Student Developers Association. Built for the Digital Sanctuary.
          </div>
        </div>
      </footer>

      {/* Add the watermark styles */}
      <style>{`
        .muqarnas-watermark {
          position: absolute;
          width: 800px;
          height: 800px;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L61.23 38.77L100 50L61.23 61.23L50 100L38.77 61.23L0 50L38.77 38.77Z' fill='%23013463' fill-opacity='0.03'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
    </>
  );
}

export default Projects;