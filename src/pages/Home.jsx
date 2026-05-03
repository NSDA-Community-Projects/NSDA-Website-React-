import React,{ useState } from 'react';

// Move sections OUTSIDE component
const sections = ['about', 'what-we-do', 'mentorship', 'projects', 'nujum', 'leadership'];

// ========================================
// HERO COMPONENT
// ========================================
function Hero() {
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
            <a href="https://t.me/nsda_community" target="_blank" rel="noopener noreferrer" className="px-8 py-3 font-bold uppercase tracking-wider transition-all" style={{ backgroundColor: 'var(--prussian-blue)', color: 'white', borderRadius: '9999px', textDecoration: 'none', display: 'inline-block' }} onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--gold)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--prussian-blue)'}>Join NSDA</a>
            <a href="/register" className="px-8 py-3 font-bold uppercase tracking-wider transition-all" style={{ backgroundColor: 'white', color: 'var(--prussian-blue)', border: '1px solid var(--gold)', borderRadius: '9999px', textDecoration: 'none', display: 'inline-block' }} onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--gold)'; e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = 'var(--prussian-blue)'; }}>Register</a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
            <img alt="Coding workspace" className="w-full h-full object-cover" src="/hero-image.jpg" />
          </div>
          <div className="absolute -bottom-4 -left-4 p-3 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--gold)' }}>
            <span className="text-2xl font-extrabold block mb-0.5" style={{ color: 'var(--prussian-blue)' }}>2025</span>
            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'white' }}>Foundation</span>
          </div>
        </div>
      </div>
    </header>
  );
}

// ========================================
// ABOUT COMPONENT
// ========================================
function About() {
  return (
    <section className="py-24 relative overflow-hidden" id="about" style={{ backgroundColor: 'var(--cloud-break)' }}>
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6" style={{ backgroundColor: 'rgba(221, 162, 58, 0.1)', color: 'var(--gold)' }}>Our Genesis</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--prussian-blue)' }}>Bridging Sacred Wisdom and Silicon Innovation</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>Founded on <span className="font-semibold" style={{ color: 'var(--prussian-blue)' }}>March 31, 2025</span>, NSDA emerged from a vision to nurture a generation of developers who build for the dunya while securing their akhira.</p>
              <p>Our mission is to create a digital sanctuary where Muslim technical talent can thrive, collaborate on open-source projects, and find mentorship that aligns with their spiritual identity.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div><h4 className="font-bold text-xl mb-2" style={{ color: 'var(--prussian-blue)' }}>Our Vision</h4><p className="text-sm text-gray-500">To be the global hub for ethical software development excellence.</p></div>
              <div><h4 className="font-bold text-xl mb-2" style={{ color: 'var(--prussian-blue)' }}>Our Mission</h4><p className="text-sm text-gray-500">Empowering students through technical mastery and spiritual grounding.</p></div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute inset-0 rounded-lg transform translate-x-4 translate-y-4" style={{ backgroundColor: 'rgba(221, 162, 58, 0.1)' }}></div>
              <img alt="Team collaboration" className="rounded-lg shadow-xl relative z-10 w-full" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// WHAT WE DO COMPONENT
// ========================================
function WhatWeDo() {
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

// ========================================
// MENTORSHIP COMPONENT (Fixed: 15+ Countries → 15+ Universities)
// ========================================
function Mentorship() {
  const stats = [
    { value: "11", label: "Expert Mentors" },
    { value: "80", label: "Active Students" },
    { value: "15+", label: "Universities" },
    { value: "24/7", label: "Community Support" }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="mentorship" style={{ backgroundColor: 'var(--prussian-blue)' }}>
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Scaling Impact Through Guidance</h2>
            <p className="text-white/70 text-lg mb-8">Our mentorship program isn't just about code review; it's about holistic growth. We measure success by the strength of our community.</p>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 font-bold uppercase tracking-wider text-sm"><span className="text-white/80">Mentor-Student Ratio</span><span style={{ color: 'var(--gold)' }}>1:7</span></div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden"><div className="h-full w-[85%] rounded-full" style={{ backgroundColor: 'var(--gold)' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 font-bold uppercase tracking-wider text-sm"><span className="text-white/80">Project Success Rate</span><span style={{ color: 'var(--gold)' }}>92%</span></div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden"><div className="h-full w-[92%] rounded-full" style={{ backgroundColor: 'var(--gold)' }}></div></div>
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

// ========================================
// PROJECTS COMPONENT
// ========================================
function Projects() {
  const projects = [
    { tech: "Python / Telegram", title: "Nejm Ask Bot", description: "A sophisticated knowledge-base bot for student inquiries and community management.", icon: "fab fa-telegram" },
    { tech: "Node.js", title: "Prayer Times API", description: "High-performance microservice providing accurate calculation methods globally.", icon: "fas fa-cloud-moon" },
    { tech: "React", title: "Quran Study App", description: "Cross-platform application for structured study and tafsir tracking.", icon: "fas fa-book-quran" },
    { tech: "Automation / Python", title: "Daily Quran Automation", description: "Automated daily delivery of Quranic verses, tafsir, and supplications to your messaging app.", icon: "fas fa-robot" }
  ];

  return (
    <section className="py-16 md:py-24 relative" id="projects" style={{ backgroundColor: 'var(--cloud-break)' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4" style={{ color: 'var(--prussian-blue)' }}>Open Source Ecosystem</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">We build tools that solve problems within the community while following modern engineering best practices.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-5 md:p-6 group">
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-2 md:px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(1, 52, 99, 0.1)', color: 'var(--prussian-blue)' }}>{project.tech}</span>
                <i className={`${project.icon} text-xl md:text-2xl transition-colors duration-300 group-hover:text-[#DDA23A]`} style={{ color: 'var(--gold)' }}></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--prussian-blue)' }}>{project.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// NUJUM COMPONENT
// ========================================
function Nujum() {
  const videos = [
    { id: "wu2oWKUMjhc", title: "Episode with Omar Al-Farooq", topic: "Scalability in the Era of Cloud Native" },
    { id: "nHjT8h-vJgA", title: "Episode with Sarah Amin", topic: "Ethical AI: Building with Barakah" },
    { id: "ltllWogkB6E", title: "Episode with Khalid Ebrahim", topic: "NUJUM-AL-CODE EP05 (Season One)" }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="nujum" style={{ backgroundColor: '#013463' }}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-white">Nujum al-Code</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">Deep technical dives with industry pioneers from NSDA Community.</p>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#DDA23A' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {videos.map((video) => (
            <div key={video.id} className="relative rounded-xl overflow-hidden shadow-2xl bg-black transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&showinfo=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-3 md:p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <h4 className="text-white font-bold text-xs md:text-sm mb-1 line-clamp-1">{video.topic}</h4>
                <p className="text-white/50 text-[11px] md:text-xs">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="https://youtube.com/@NSDA_Community" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 font-bold uppercase tracking-wide transition-all hover:scale-105 text-sm md:text-base" style={{ backgroundColor: '#DDA23A', color: '#013463', borderRadius: '9999px', textDecoration: 'none' }}>
            <i className="fab fa-youtube"></i> Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

// ========================================
// LEADERSHIP COMPONENT
// ========================================
function Leadership() {
  const [showAll, setShowAll] = useState(false);

  const mainLeaders = [
    { name: "Osama Seid", role: "President", university: "Jimma University", icon: "fa-user-tie", gender: "male", linkedin: "https://www.linkedin.com/in/osama-seid-a2978129a" },
    { name: "Nebiyou Elias (Nebil)", role: "Vice President", university: "AASTU", icon: "fa-user", gender: "male", linkedin: "https://www.linkedin.com/in/nebiyou-elias-mohammed/" },
    { name: "Abdelaziz Ebrahim", role: "Content Head", university: "Bahir Dar University", icon: "fa-newspaper", gender: "male", linkedin: "https://www.linkedin.com/in/abdelazizEbrahim/" },
    { name: "Sumeya Muhammed", role: "Sisters Communication Head", university: "Jimma University", icon: "fa-comments", gender: "female", linkedin: "http://linkedin.com/in/sumeya-muhammed-a83168319/" },
    { name: "Sumeya Awel", role: "Sisters President", university: "ASTU", icon: "fa-crown", gender: "female", linkedin: "#" },
    { name: "Miftah Fentaw", role: "Communication Head", university: "Haramaya University", icon: "fa-bullhorn", gender: "male", linkedin: "https://www.linkedin.com/in/miftah-fentaw/" },
  ];

  const moreLeaders = [
    { name: "Semeriya Seid", role: "Sisters Production Head", university: "Haramaya University", icon: "fa-video", gender: "female", linkedin: "https://www.linkedin.com/in/sud-seid-b24b48356/" },
    { name: "Fozia Mohammed", role: "Sisters Project Head", university: "Addis Ababa University", icon: "fa-tasks", gender: "female", linkedin: "https://www.linkedin.com/in/fozia-mohammed-50132730b/" },
    { name: "Hanan Nasir", role: "Sisters Content Head", university: "Arba Minch University", icon: "fa-pen-fancy", gender: "female", linkedin: "https://www.linkedin.com/in/hanan-nasir2014" },
    { name: "Muaz Sani", role: "Production Head", university: "Jimma University", icon: "fa-video", gender: "male", linkedin: "#" },
    { name: "Abdulselam Kemal", role: "Technical Head", university: "Addis Ababa University", icon: "fa-microchip", gender: "male", linkedin: "https://www.linkedin.com/in/ab-adam74" },
    { name: "Rehmet Muhammed", role: "Sisters Technical Head", university: "Bahir Dar University", icon: "fa-code", gender: "female", linkedin: "https://www.linkedin.com/in/rehmet-muhammed777" },
    { name: "Abdulaziz Ayalew", role: "Content Head", university: "AASTU", icon: "fa-newspaper", gender: "male", linkedin: "https://www.linkedin.com/in/abdulaziz-ayalew" },
    { name: "Sitra Seyfu", role: "Sisters Production Head", university: "Jimma University", icon: "fa-video", gender: "female", linkedin: "#" },
    { name: "Imadudin Keremu", role: "Project Manager", university: "Haramaya University", icon: "fa-tasks", gender: "male", linkedin: "#" },
  ];

  const getIconColor = (gender) => {
    if (gender === 'male') return '#3498db';
    if (gender === 'female') return '#e91e63';
    return '#DDA23A';
  };

  return (
    <section className="py-16 md:py-24 relative" id="leadership" style={{ backgroundColor: '#F3F3FF' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#013463' }}>Guided by Visionaries</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#DDA23A' }}></div>
        </div>

        {/* Main Leaders - Always Visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 md:gap-6 mb-8">
          {mainLeaders.map((member, index) => (
            <a key={index} href={member.linkedin} target="_blank" rel="noopener noreferrer" className="group text-center block transition-all duration-300 hover:-translate-y-2" style={{ textDecoration: 'none' }}>
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#DDA23A' }}></div>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl md:text-2xl relative z-10 mx-auto" style={{ backgroundColor: 'rgba(1, 52, 99, 0.1)', color: getIconColor(member.gender) }}>
                  <i className={`fas ${member.icon}`}></i>
                </div>
              </div>
              <h5 className="font-bold text-xs md:text-sm" style={{ color: '#013463' }}>{member.name}</h5>
              <p className="text-[10px] md:text-xs font-semibold mt-1" style={{ color: '#DDA23A' }}>{member.role}</p>
              <p className="text-[10px] md:text-xs text-gray-500 mt-1">{member.university}</p>
            </a>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center my-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-[#013463] text-white hover:bg-[#DDA23A]"
          >
            {showAll ? 'Show Less ▲' : 'Show More ▼'}
          </button>
        </div>

        {/* More Leaders - Only Visible when showAll is true */}
        {showAll && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6 mt-6 pt-6 border-t border-gray-200">
            {moreLeaders.map((member, index) => (
              <a key={index} href={member.linkedin} target="_blank" rel="noopener noreferrer" className="group text-center block transition-all duration-300 hover:-translate-y-2" style={{ textDecoration: 'none' }}>
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#DDA23A' }}></div>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl relative z-10 mx-auto" style={{ backgroundColor: 'rgba(1, 52, 99, 0.1)', color: getIconColor(member.gender) }}>
                    <i className={`fas ${member.icon}`}></i>
                  </div>
                </div>
                <h5 className="font-bold text-xs" style={{ color: '#013463' }}>{member.name}</h5>
                <p className="text-[10px] font-semibold mt-1" style={{ color: '#DDA23A' }}>{member.role}</p>
                <p className="text-[10px] text-gray-500 mt-1">{member.university}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ========================================
// CTA COMPONENT
// ========================================
function CTA() {
  return (
    <div style={{ backgroundColor: '#013463', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ color: '#DDA23A', marginBottom: '20px', fontSize: '36px', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>Ready to Build for the Ummah?</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', lineHeight: '1.6', color: '#FFFFFF', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>Join 200+ Muslim developers across the country. Be part of a community that grows together, codes together, and prays together.</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://t.me/nsda_community" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#DDA23A', color: '#013463', padding: '14px 32px', borderRadius: '9999px', fontWeight: '600', fontSize: '16px', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s ease', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }} onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)'; }} onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'; }}>JOIN NSDA NOW</a>
          <a href="https://t.me/NejmAskBot" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'transparent', color: '#FFFFFF', padding: '14px 32px', borderRadius: '9999px', fontWeight: '600', fontSize: '16px', border: '2px solid #DDA23A', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.target.style.backgroundColor = '#DDA23A'; e.target.style.color = '#013463'; e.target.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#FFFFFF'; e.target.style.transform = 'scale(1)'; }}>TELEGRAM SUPPORT</a>
        </div>
      </div>
    </div>
  );
}

// ========================================
// HOME PAGE (MAIN EXPORT) 
// ========================================
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div style={{ paddingTop: '70px' }}>
        <Hero />
      </div>
      <div id="about"><About /></div>
      <div id="what-we-do"><WhatWeDo /></div>
      <div id="mentorship"><Mentorship /></div>
      <div id="projects"><Projects /></div>
      <div id="nujum"><Nujum /></div>
      <div id="leadership"><Leadership /></div>
      <CTA />
    </main>
  );
}
