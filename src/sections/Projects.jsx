import React from 'react';

function Projects() {
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          
          {/* Project 1: Daily Quran Automation Bot */}
          <div className="md:col-span-8 group relative bg-white rounded-lg p-8 overflow-hidden shadow-[0_12px_40px_rgba(1,52,99,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#013463]/10 text-[#013463] text-[10px] font-bold uppercase tracking-wider">Python</span>
                    <span className="px-2 py-0.5 rounded bg-[#fdbe54]/20 text-[#7f5600] text-[10px] font-bold uppercase tracking-wider">Telegram API</span>
                    <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider">Quran API</span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-[#001f3f]">Daily Quran Automation Bot</h3>
                </div>
                <div className="flex space-x-4 text-[#43474f]/60">
                  <div className="flex items-center text-sm"><span className="material-symbols-outlined text-base mr-1">star</span> 156</div>
                  <div className="flex items-center text-sm"><span className="material-symbols-outlined text-base mr-1">fork_right</span> 53</div>
                </div>
              </div>
              <p className="text-[#43474f] mb-8 max-w-md">
                Automated daily Quran verses and tafsir delivery via Telegram. Features personalized schedules, Arabic recitation, and translation support.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#e7e7f3] overflow-hidden"><div className="w-full h-full bg-gradient-to-br from-[#3a6091] to-[#1f4878]"></div></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#e7e7f3] overflow-hidden"><div className="w-full h-full bg-gradient-to-br from-[#fdbe54] to-[#7f5600]"></div></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#e7e7f3] flex items-center justify-center text-[10px] font-bold text-[#43474f]">+12</div>
                </div>
                <a className="flex items-center font-bold text-[#001f3f] hover:text-[#7f5600] transition-colors" href="#">View Repository <span className="material-symbols-outlined ml-2">arrow_outward</span></a>
              </div>
            </div>
            <div className="absolute -right-12 bottom-1/4 opacity-5 rotate-12 pointer-events-none">
              <pre className="text-xs font-mono"><code>{`async def send_daily_verse(chat_id):
    verse = await get_random_verse()
    translation = await get_translation(verse)
    await bot.send_message(chat_id, f"{verse}\\n\\n{translation}")`}</code></pre>
            </div>
          </div>

          {/* Project 2: Prayer Times API */}
          <div className="md:col-span-4 bg-[#013463] rounded-lg p-8 flex flex-col justify-between text-white shadow-[0_12px_40px_rgba(1,52,99,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="w-12 h-12 bg-[#fdbe54] rounded-lg flex items-center justify-center mb-6"><span className="material-symbols-outlined text-[#001f3f] text-2xl">schedule</span></div>
              <h3 className="font-headline text-2xl font-bold text-white mb-4">Prayer Times API</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">Node.js / Express microservice providing precision calculations for global regions using localized astronomical data.</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono opacity-60 mb-4"><span>GET</span><span>/v1/timings/:city</span></div>
              <div className="flex justify-between items-center"><span className="text-[#fdbe54] font-bold text-xs uppercase tracking-widest">Active Beta</span><span className="material-symbols-outlined text-[#fdbe54]">api</span></div>
            </div>
          </div>

          {/* Project 3: Quran Study App */}
          <div className="md:col-span-12 group bg-[#e7e7f3] rounded-lg p-1 w-full shadow-inner">
            <div className="bg-white rounded-[1.75rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider mb-6">Production Ready</div>
                <h3 className="font-headline text-4xl font-bold text-[#001f3f] mb-6">Quran Study App</h3>
                <p className="text-[#43474f] text-lg leading-relaxed mb-8">A React and Firebase powered platform for tracking tafsir progress. Features real-time sync across devices.</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-[#f3f3ff] border border-[#c3c6d0]/30 rounded-xl text-xs font-medium text-[#001f3f]">React 18</span>
                  <span className="px-4 py-2 bg-[#f3f3ff] border border-[#c3c6d0]/30 rounded-xl text-xs font-medium text-[#001f3f]">Firebase Auth</span>
                  <span className="px-4 py-2 bg-[#f3f3ff] border border-[#c3c6d0]/30 rounded-xl text-xs font-medium text-[#001f3f]">Tailwind CSS</span>
                  <span className="px-4 py-2 bg-[#f3f3ff] border border-[#c3c6d0]/30 rounded-xl text-xs font-medium text-[#001f3f]">Firestore</span>
                </div>
                <button className="px-8 py-4 bg-[#001f3f] text-white rounded-xl font-bold flex items-center hover:bg-[#001f3f]/90 transition-colors">Launch Project <span className="material-symbols-outlined ml-2">rocket_launch</span></button>
              </div>
              <div className="flex-1 relative">
                <div className="relative rounded-lg overflow-hidden border-4 border-white shadow-2xl bg-white">
                  <div className="bg-gradient-to-br from-[#001f3f] to-[#013463] p-6">
                    <div className="flex justify-center mb-4"><div className="w-16 h-16 bg-[#fdbe54] rounded-2xl flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-3xl text-[#001f3f]">menu_book</span></div></div>
                    <h3 className="text-white text-center text-xl font-bold mb-1">Quran Study</h3>
                    <p className="text-white/80 text-center text-xs mb-6">Deepen Your Understanding</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 bg-white/10 rounded-lg p-2"><span className="material-symbols-outlined text-[#fdbe54] text-sm">check_circle</span><span className="text-white text-xs">Track Tafsir Progress</span></div>
                      <div className="flex items-center gap-3 bg-white/10 rounded-lg p-2"><span className="material-symbols-outlined text-[#fdbe54] text-sm">sync</span><span className="text-white text-xs">Real-time Sync</span></div>
                      <div className="flex items-center gap-3 bg-white/10 rounded-lg p-2"><span className="material-symbols-outlined text-[#fdbe54] text-sm">translate</span><span className="text-white text-xs">Multiple Translations</span></div>
                    </div>
                    <div className="mt-6"><div className="flex justify-between text-white/80 text-xs mb-1"><span>Overall Progress</span><span>65%</span></div><div className="w-full bg-white/20 rounded-full h-2"><div className="bg-[#fdbe54] rounded-full h-2" style={{ width: '65%' }}></div></div></div>
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-[#fdbe54]/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contributor Section */}
        <section className="relative rounded-lg bg-[#001f3f] p-12 md:p-20 overflow-hidden text-center md:text-left">
          <div className="muqarnas-watermark -bottom-40 -left-40 opacity-10"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-headline text-4xl font-bold text-white mb-6">Join the Digital Jihad</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">Our repositories are open for contributions. Whether you're a designer, developer, or documentation wizard, there's a place for you in our ecosystem.</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-3"><span className="material-symbols-outlined text-[#fdbe54]">check_circle</span><span className="text-white">Access to private mentorship channels</span></div>
                <div className="flex items-center space-x-3"><span className="material-symbols-outlined text-[#fdbe54]">check_circle</span><span className="text-white">Recognition in our global contributor list</span></div>
                <div className="flex items-center space-x-3"><span className="material-symbols-outlined text-[#fdbe54]">check_circle</span><span className="text-white">Hands-on experience with production-grade stacks</span></div>
              </div>
              <button className="w-full md:w-auto px-10 py-5 bg-[#fdbe54] text-[#001f3f] font-extrabold rounded-xl hover:scale-95 transition-transform">Explore GitHub Repositories</button>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/10">
                <div className="flex items-center justify-between mb-8"><div className="flex items-center space-x-3"><span className="material-symbols-outlined text-white">account_tree</span><span className="text-white font-mono text-sm tracking-tighter">CONTRIBUTING.md</span></div><div className="flex space-x-2"><div className="w-3 h-3 rounded-full bg-red-500/40"></div><div className="w-3 h-3 rounded-full bg-[#fdbe54]/40"></div><div className="w-3 h-3 rounded-full bg-green-400/40"></div></div></div>
                <div className="space-y-4 font-mono text-xs text-white/70"><p className="text-[#fdbe54]"># How to Join</p><p>1. Fork the target repository</p><p>2. Create a new branch: `feat/amazing-thing`</p><p>3. Commit your changes with meaningful messages</p><p>4. Push to the branch and open a Pull Request</p><p className="pt-4 border-t border-white/5 italic">// We value clean code and clear comments.</p></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#001f3f] w-full py-12 px-8 border-t border-[#013463]">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-4 md:space-y-0">
          <div className="text-lg font-['Space_Grotesk'] text-[#fdbe54]">NSDA</div>
          <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest">
            <a href="#" className="text-white/60 hover:text-[#fdbe54] transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-[#fdbe54] transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-[#fdbe54] transition-colors">Contact Us</a>
            <a href="#" className="text-white/60 hover:text-[#fdbe54] transition-colors">GitHub</a>
            <a href="#" className="text-white/60 hover:text-[#fdbe54] transition-colors">LinkedIn</a>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/60">© 2024 Nejm Student Developers Association. Built for the Digital Sanctuary.</div>
        </div>
      </footer>

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