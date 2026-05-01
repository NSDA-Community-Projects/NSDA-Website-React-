import React from "react";
import "../styles/projects.css";

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Daily Quran Automation Bot",
      tech: ["Python", "Telegram API", "Quran API"],
      description: "Automated daily Quran verses and tafsir delivery via Telegram. Features personalized schedules, Arabic recitation, and translation support for deeper understanding.",
      stars: 156,
      forks: 53,
      contributors: 12,
      size: "large"
    },
    {
      id: 2,
      title: "Prayer Times API",
      tech: ["Node.js", "Express"],
      description: "High-performance microservice providing precision calculations for global regions using localized astronomical data.",
      stars: 89,
      forks: 34,
      contributors: 8,
      size: "small"
    },
    {
      id: 3,
      title: "Quran Study App",
      tech: ["React 18", "Firebase Auth", "Tailwind CSS", "Firestore"],
      description: "A React and Firebase powered platform for tracking tafsir progress. Features real-time sync across devices and a distraction-free interface designed for deep contemplation.",
      stars: 234,
      forks: 67,
      contributors: 15,
      size: "featured"
    }
  ];

  return (
    <>
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          
          {/* Large Project Card */}
          {projectsData.filter(p => p.size === "large").map(project => (
            <div key={project.id} className="md:col-span-8 group relative bg-surface-container-lowest rounded-lg p-8 overflow-hidden shadow-[0_12px_40px_rgba(1,52,99,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-primary-container/10 text-primary-container text-[10px] font-bold uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                    <h3 className="font-headline text-3xl font-bold text-primary">{project.title}</h3>
                  </div>
                  <div className="flex space-x-4 text-on-surface-variant/60">
                    <div className="flex items-center text-sm">
                      <span className="material-symbols-outlined text-base mr-1">star</span> {project.stars}
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="material-symbols-outlined text-base mr-1">fork_right</span> {project.forks}
                    </div>
                  </div>
                </div>
                <p className="text-on-surface-variant mb-8 max-w-md">{project.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-[#3a6091] to-[#1f4878]"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-[#fdbe54] to-[#7f5600]"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                      +{project.contributors}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Small Project Card */}
          {projectsData.filter(p => p.size === "small").map(project => (
            <div key={project.id} className="md:col-span-4 bg-primary-container rounded-lg p-8 flex flex-col justify-between text-white shadow-[0_12px_40px_rgba(1,52,99,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">{project.description}</p>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-container font-bold text-xs uppercase tracking-widest">Active Beta</span>
                  <span className="material-symbols-outlined text-secondary-container">api</span>
                </div>
              </div>
            </div>
          ))}

          {/* Featured Project Card */}
          {projectsData.filter(p => p.size === "featured").map(project => (
            <div key={project.id} className="md:col-span-12 group bg-surface-container-high rounded-lg p-1 w-full shadow-inner">
              <div className="bg-surface-container-lowest rounded-[1.75rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider mb-6">Production Ready</div>
                  <h3 className="font-headline text-4xl font-bold text-primary mb-6">{project.title}</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-8">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl text-xs font-medium text-primary">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex-1 relative">
                  <div className="relative rounded-lg overflow-hidden border-4 border-surface shadow-2xl bg-white">
                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                      <div className="bg-primary px-4 py-2 flex justify-between items-center">
                        <span className="text-white text-[10px] font-medium">9:41</span>
                        <div className="flex gap-1">
                          <span className="text-white text-[10px]">📶</span>
                          <span className="text-white text-[10px]">🔋</span>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-primary to-primary-container px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-secondary-container rounded-full flex items-center justify-center">
                            <span className="text-primary text-sm font-bold">Q</span>
                          </div>
                          <div>
                            <h4 className="text-white text-sm font-bold">Quran Study</h4>
                            <p className="text-white/70 text-[10px]">Tafsir Progress Tracker</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="bg-gradient-to-br from-[#f3f3ff] to-white rounded-lg p-3 mb-3 shadow-sm border border-outline-variant/20">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <span className="text-primary text-xs font-bold">Surah 1</span>
                              <h5 className="text-primary font-bold text-sm">Al-Fatihah</h5>
                            </div>
                            <span className="text-secondary-container text-xs">📖</span>
                          </div>
                          <div className="text-right">
                            <p className="text-primary text-sm font-arabic leading-relaxed">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-primary text-xs font-semibold">Tafsir Progress</span>
                            <span className="text-secondary text-xs font-bold">65%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-secondary-container rounded-full h-2" style={{ width: '65%' }}></div>
                          </div>
                        </div>
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
                      </div>
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
          ))}
        </div>

        {/* Contributor Section */}
        <section className="relative rounded-lg bg-primary p-12 md:p-20 overflow-hidden text-center md:text-left">
          <div className="muqarnas-watermark -bottom-40 -left-40 opacity-10"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-headline text-4xl font-bold text-white mb-6">Join the Digital Jihad</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">Our repositories are open for contributions. Whether you're a designer, developer, or documentation wizard, there's a place for you in our ecosystem.</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-3"><span className="material-symbols-outlined text-secondary-container">check_circle</span><span className="text-white">Access to private mentorship channels</span></div>
                <div className="flex items-center space-x-3"><span className="material-symbols-outlined text-secondary-container">check_circle</span><span className="text-white">Recognition in our global contributor list</span></div>
                <div className="flex items-center space-x-3"><span className="material-symbols-outlined text-secondary-container">check_circle</span><span className="text-white">Hands-on experience with production-grade stacks</span></div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3"><span className="material-symbols-outlined text-white">account_tree</span><span className="text-white font-mono text-sm tracking-tighter">CONTRIBUTING.md</span></div>
                  <div className="flex space-x-2"><div className="w-3 h-3 rounded-full bg-error/40"></div><div className="w-3 h-3 rounded-full bg-secondary-container/40"></div><div className="w-3 h-3 rounded-full bg-green-400/40"></div></div>
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
    </>
  );
}

export default Projects;