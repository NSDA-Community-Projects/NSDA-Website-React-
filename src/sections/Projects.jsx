import React from 'react';

export default function Projects() {
  const projects = [
    { tech: "Python / Telegram", title: "Nejm Ask Bot", description: "A sophisticated knowledge-base bot for student inquiries and community management.", icon: "fab fa-telegram" },
    { tech: "Node.js", title: "Prayer Times API", description: "High-performance microservice providing accurate calculation methods globally.", icon: "fas fa-cloud-moon" },
    { tech: "React", title: "Quran Study App", description: "Cross-platform application for structured study and tafsir tracking.", icon: "fas fa-book-quran" },
    { tech: "Automation / Python", title: "Daily Quran Automation", description: "Automated daily delivery of Quranic verses and tafsir.", icon: "fas fa-robot" }
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#faf8ff]/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(1,52,99,0.06)]">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
          <div className="text-2xl font-bold font-['Space_Grotesk'] text-primary">
            NSDA
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-['Space_Grotesk'] text-sm tracking-tight">
            <a className="text-primary opacity-70 hover:opacity-100 transition-opacity" href="/">Home</a>
            <a className="text-primary opacity-70 hover:opacity-100 transition-opacity" href="#about">About</a>
            <a className="text-primary opacity-70 hover:opacity-100 transition-opacity" href="#what-we-do">What We Do</a>
            <a className="text-primary opacity-70 hover:opacity-100 transition-opacity" href="#nujum">Nujum</a>
            <a className="text-secondary border-b-2 border-secondary pb-1 font-bold" href="#projects">Projects</a>
            <a className="text-primary opacity-70 hover:opacity-100 transition-opacity" href="#leadership">Leadership</a>
            <button className="ml-4 px-6 py-2 bg-primary text-white rounded-xl font-bold hover:scale-95 transition-transform duration-200">
              Join Us
            </button>
          </div>
          
          <div className="md:hidden">
            <span className="material-symbols-outlined text-primary">menu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
    {/* Hero Section - አሁን ሙሉ Screen ይሆናል */}
<header className="relative min-h-screen flex items-center pt-20 pb-20 px-8 overflow-hidden">
  <div className="muqarnas-watermark -top-20 -right-20"></div>
  <div className="max-w-7xl mx-auto relative z-10 w-full">
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
          
          {/* Project 1: Nejm Ask Bot */}
          <div className="md:col-span-8 group relative bg-surface-container-lowest rounded-lg p-8 overflow-hidden shadow-[0_12px_40px_rgba(1,52,99,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-primary-container/10 text-primary text-[10px] font-bold uppercase tracking-wider">Python</span>
                    <span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary text-[10px] font-bold uppercase tracking-wider">Telegram</span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-primary">Nejm Ask Bot</h3>
                </div>
                
              </div>
              
              <p className="text-on-surface-variant mb-8 max-w-md">
                Automating community inquiries through a robust Python-based Telegram bot. Designed for high-concurrency and seamless user interaction.
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-blue-500"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-gold"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-gray-200 flex items-center justify-center text-[10px] font-bold">+8</div>
                </div>
                <a className="flex items-center font-bold text-primary hover:text-secondary transition-colors" href="#">
                  View Repository <span className="material-symbols-outlined ml-2">arrow_outward</span>
                </a>
              </div>
            </div>
            {/* Code Snippet Motif */}
            <div className="absolute -right-12 bottom-1/4 opacity-5 rotate-12 pointer-events-none">
              <pre className="text-xs font-mono"><code>{`async def handle_inquiry(update, context):
    query = update.message.text
    response = await ai_engine.analyze(query)`}</code></pre>
            </div>
          </div>

          {/* Project 2: Prayer Times API */}
          <div className="md:col-span-4 bg-[#013463] rounded-lg p-8 flex flex-col justify-between text-white shadow-[0_12px_40px_rgba(1,52,99,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-gold text-2xl">schedule</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mb-4">Prayer Times API</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Node.js / Express microservice providing precision calculations for global regions.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gold font-bold text-xs uppercase tracking-widest">Active Beta</span>
              <span className="material-symbols-outlined text-gold">api</span>
            </div>
          </div>

          {/* Project 3: Quran Study App (The complex part) */}
          <div className="md:col-span-12 group bg-surface-container-high rounded-lg p-1 w-full shadow-inner">
            <div className="bg-surface-container-lowest rounded-[1.75rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider mb-6">Production Ready</div>
                <h3 className="font-headline text-4xl font-bold text-primary mb-6">Quran Study App</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">A React and Firebase powered platform for tracking tafsir progress. Features real-time sync across devices.</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-primary">React 18</span>
                  <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-primary">Firebase</span>
                  <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-primary">Tailwind</span>
                </div>
                <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center hover:bg-primary/90 transition-colors">
                  Launch Project <span className="material-symbols-outlined ml-2">rocket_launch</span>
                </button>
              </div>

              {/* Internal Dashboard View (Fixed duplication) */}
              <div className="flex-1 relative w-full">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                   <div className="bg-primary p-6 text-white text-center">
                      <h2 className="text-2xl font-bold mb-2">Project Ecosystem</h2>
                      <p className="text-white/60 text-xs">Community-driven engineering</p>
                   </div>
                   <div className="p-6 space-y-4">
                      {projects.slice(0, 3).map((project, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-4">
                            <span className="text-xl">{index === 0 ? '🤖' : index === 1 ? '⏰' : '📖'}</span>
                            <div>
                              <p className="text-sm font-bold text-primary">{project.title}</p>
                              <p className="text-[10px] text-gray-400">{project.tech}</p>
                            </div>
                          </div>
                          <span className="text-gold text-xs">● Live</span>
                        </div>
                      ))}
                      <div className="pt-4 border-t border-gray-100 text-center">
                         <p className="text-xs font-arabic text-primary">بِسْمِ اللَّهِ الرَّحْمَٰንِ الرَّحِيمِ</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contributor Section */}
        <section className="relative rounded-3xl bg-[#013463] p-12 md:p-20 overflow-hidden text-white">
          <div className="muqarnas-watermark -bottom-40 -left-40 opacity-10"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-6">Join the Digital Jihad</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Our repositories are open for contributions. Whether you're a designer, developer, or documentation wizard.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-gold">check_circle</span>
                  <span>Access to private mentorship channels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-gold">check_circle</span>
                  <span>Hands-on experience with production stacks</span>
                </div>
              </div>
              <button className="w-full md:w-auto px-10 py-5 bg-gold text-primary font-extrabold rounded-xl hover:scale-105 transition-transform">
                Explore GitHub Repos
              </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 font-mono text-xs">
              <div className="flex justify-between mb-6">
                <span className="text-gold">CONTRIBUTING.md</span>
                <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-400"></div><div className="w-2 h-2 rounded-full bg-yellow-400"></div></div>
              </div>
              <div className="space-y-2 opacity-70">
                <p>1. Fork the target repository</p>
                <p>2. Create a new branch: `feat/amazing-thing`</p>
                <p>3. Push changes and open a Pull Request</p>
                <p className="pt-4 italic">// Build for the Dunya, secure the Akhira.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

     

      <style>{`
        .muqarnas-watermark {
          position: absolute;
          width: 800px;
          height: 800px;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L61.23 38.77L100 50L61.23 61.23L50 100L38.77 61.23L0 50L38.77 38.77Z' fill='%23DDA23A' fill-opacity='0.03'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
    </>
  );
}