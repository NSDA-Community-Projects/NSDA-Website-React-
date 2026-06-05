import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const sections = ['about', 'what-we-do', 'mentorship', 'projects', 'nujum', 'leadership'];

/* ── SVG Icon Components ── */
const IconHeart = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const IconStar = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);
const IconUsers = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconGlobe = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconArrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const IconChevron = ({ up }) => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d={up ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
  </svg>
);
const IconBot = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.357 2.059l.214.107a2.25 2.25 0 011.357 2.059V19.5m-9-15.396c.753.12 1.49.28 2.209.47M9.75 3.104C9.375 3.047 9 3 8.625 3M14.25 3.104c.376.058.75.122 1.125.186M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconBook = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
const IconZap = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const IconLinkedin = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const IconCode = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);


// ========================================
// HERO COMPONENT
// ========================================
function Hero() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#f6f9fd' }}>
     

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A]">
              <span className="w-6 h-px bg-[#DDA23A]" />
              Est. March 31, 2025
            </span>

            <h1 className="font-extrabold text-[#013463] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Nejm Student <br />
              <span className="text-[#DDA23A]">Developers</span> <br />
              Association
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              A nationwide community of Muslim students and developers advancing in tech while staying true to Islamic values.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              {["Faith-Driven", "Open-Source", "Student-Led"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-semibold text-[#013463]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DDA23A]" />
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://t.me/nsda_community"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#013463] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#DDA23A] hover:text-[#013463] active:scale-95"
              >
                Join NSDA
                <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
              </a>
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#013463] bg-transparent px-8 py-4 text-sm font-bold text-[#013463] transition-all duration-200 hover:bg-[#013463] hover:text-white active:scale-95"
              >
                Register
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl translate-x-3 translate-y-3 bg-[#DDA23A]/20" />
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="Coding workspace"
                  className="w-full h-full object-cover"
                  src="/hero-image.jpg"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 rounded-2xl shadow-xl bg-[#DDA23A]">
                <span className="text-2xl font-extrabold block leading-none text-[#013463]">2025</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">Foundation</span>
              </div>
             
            </div>
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
    <section className="py-24 relative overflow-hidden" id="about" style={{ backgroundColor: '#f6f9fd' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A]">
              <span className="w-6 h-px bg-[#DDA23A]" />
              Our Genesis
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#013463]">
              Bridging Sacred Wisdom and Silicon Innovation
            </h2>
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>Founded on <span className="font-semibold text-[#013463]">March 31, 2025</span>, NSDA emerged from a vision to nurture a generation of developers who build for the dunya while securing their akhira.</p>
              <p>Our mission is to create a digital sanctuary where Muslim technical talent can thrive, collaborate on open-source projects, and find mentorship that aligns with their spiritual identity.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-base mb-2 text-[#013463]">Our Vision</h4>
                <p className="text-sm text-gray-500">To be the global hub for ethical software development excellence.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-base mb-2 text-[#013463]">Our Mission</h4>
                <p className="text-sm text-gray-500">Empowering students through technical mastery and spiritual grounding.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl translate-x-4 translate-y-4 bg-[#DDA23A]/15 rounded-2xl" />
            <img
              alt="Team collaboration"
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
            />
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
    {
      icon: <IconHeart />,
      title: "Sadaqah Jariyah",
      description: "Building open-source tools that serve the Ummah and earn continuous reward.",
      accent: "#DDA23A",
    },
    {
      icon: <IconStar />,
      title: "Nujum al-Code",
      description: "Engaging technical deep-dives and webinars with industry veterans.",
      accent: "#013463",
    },
    {
      icon: <IconUsers />,
      title: "Mentorship",
      description: "One-on-one guidance connecting seasoned devs with aspiring students.",
      accent: "#DDA23A",
    },
    {
      icon: < IconCode />,
      title: "NSDA Hackathon",
      description: "An internal hackathon exclusively for NSDA students. ",
      accent: "#013463",
    },
  ];

  return (
    <section className="py-24 relative" id="what-we-do" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-4">
            <span className="w-6 h-px bg-[#DDA23A]" />
            What We Do
            <span className="w-6 h-px bg-[#DDA23A]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#013463] mb-4">Our Pillars of Excellence</h2>
          <div className="w-16 h-1 bg-[#DDA23A] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-0 left-8 h-[3px] w-10 bg-[#DDA23A] rounded-b-full" />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: pillar.accent === "#DDA23A" ? '#DDA23A' : '#013463', color: pillar.accent === "#DDA23A" ? '#013463' : 'white' }}
              >
                {pillar.icon}
              </div>
              <h3 className="text-lg font-extrabold text-[#013463] mb-3">{pillar.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// MENTORSHIP COMPONENT
// ========================================
function Mentorship() {
  const stats = [
    { value: "11+", label: "Expert Mentors" },
    { value: "80+", label: "Active Students" },
    { value: "15+", label: "Universities" },
    { value: "24/7", label: "Community Support" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="mentorship" style={{ backgroundColor: '#013463' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #DDA23A, transparent)' }} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, white, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A]">
              <span className="w-6 h-px bg-[#DDA23A]" />
              Mentorship Program
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Scaling Impact Through Guidance
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Our mentorship program isn't just about code review; it's about holistic growth. We measure success by the strength of our community.
            </p>
            <div className="space-y-6">
              {[
                { label: "Mentor-Student Ratio", value: "1:7", pct: "85%" },
                { label: "Project Success Rate", value: "85%", pct: "85%" },
              ].map(({ label, value, pct }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/80 text-sm font-semibold">{label}</span>
                    <span className="text-[#DDA23A] text-sm font-bold">{value}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-[#DDA23A] transition-all duration-700" style={{ width: pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 hover:border-[#DDA23A]/40 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-extrabold mb-2 text-[#DDA23A]">{stat.value}</div>
                <div className="text-white/70 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
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
    {
      tech: "Python / Telegram",
      title: "Nejm Ask Bot",
      description: "  A Telegram bot that bridges students and NSDA leadership. keeping all communication organised, fast, and within the community channel.",
      icon: <IconBot />,
    },
    {
      tech: "React",
      title: "Quran Study App",
      description: "A cross-platform React + Firebase app for structured Quran study and tafsir tracking with real-time sync across all devices.",
      icon: <IconBook />,
    },
    {
      tech: "Automation / Python",
      title: "Daily Quran Automation Bot",
      description: " Automatically posts a short Quran video every morning to the Telegram channel —  delivering Quranic verses to keep the community spiritually connected at the start of each day.",
                
      icon: <IconZap />,
    },
  ];

  return (
    <section className="py-24 relative" id="projects" style={{ backgroundColor: '#f6f9fd' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-4">
            <span className="w-6 h-px bg-[#DDA23A]" />
            Open Source
            <span className="w-6 h-px bg-[#DDA23A]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#013463]">Open Source Ecosystem</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            We build tools that solve problems within the community while following modern engineering best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-8 relative"
            >
              <span className="absolute top-0 left-8 h-[3px] w-10 bg-[#DDA23A] rounded-b-full" />
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#013463]/10 text-[#013463]">
                  {project.tech}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#DDA23A] flex items-center justify-center text-[#013463] group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-[#013463]">{project.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{project.description}</p>
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
    { id: "ltllWogkB6E", title: "Episode with Khalid Ebrahim", topic: "NUJUM-AL-CODE EP05 (Season One)" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="nujum" style={{ backgroundColor: '#013463' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #DDA23A, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-4">
            <span className="w-6 h-px bg-[#DDA23A]" />
            Webinar Series
            <span className="w-6 h-px bg-[#DDA23A]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">Nujum al-Code</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Deep technical dives with industry pioneers from NSDA Community.
          </p>
          <div className="w-16 h-1 bg-[#DDA23A] rounded-full mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&showinfo=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-4 border-t border-white/10">
                <h4 className="text-white font-bold text-sm mb-1 line-clamp-1">{video.topic}</h4>
                <p className="text-white/50 text-xs">{video.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://youtube.com/@NSDA_Community"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all hover:scale-105 rounded-full bg-[#DDA23A] text-[#013463] shadow-lg shadow-[#DDA23A]/20"
          >
            Watch on YouTube
            <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
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

  const getIconColor = (gender) => {
    if (gender === 'male') return '#3498db';
    if (gender === 'female') return '#e91e63';
    return '#DDA23A';
  };

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

  const MemberCard = ({ member }) => (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="group text-center block transition-all duration-300 hover:-translate-y-2 no-underline"
    >
      <div className="relative inline-flex items-center justify-center mb-3">
        <div
          className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl md:text-2xl relative z-10 transition-all duration-300 group-hover:ring-4 group-hover:ring-[#DDA23A]/50"
          style={{ backgroundColor: 'rgba(1, 52, 99, 0.08)', color: getIconColor(member.gender) }}
        >
          <i className={`fas ${member.icon}`} />
        </div>
        {member.linkedin !== '#' && (
          <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#DDA23A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 text-white">
            <IconLinkedin />
          </span>
        )}
      </div>
      <h5 className="font-bold text-xs md:text-sm text-[#013463]">{member.name}</h5>
      <p className="text-[10px] md:text-xs font-semibold mt-0.5 text-[#DDA23A]">{member.role}</p>
      <p className="text-[10px] md:text-xs text-gray-400 mt-0.5">{member.university}</p>
    </a>
  );

  return (
    <section className="py-24 relative" id="leadership" style={{ backgroundColor: '#F3F3FF' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-4">
            <span className="w-6 h-px bg-[#DDA23A]" />
            Leadership
            <span className="w-6 h-px bg-[#DDA23A]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#013463]">Guided by Visionaries</h2>
          <div className="w-16 h-1 bg-[#DDA23A] rounded-full mx-auto" />
        </div>

        {/* Main Leaders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {mainLeaders.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 bg-[#013463] text-white hover:bg-[#DDA23A] hover:text-[#013463] active:scale-95 shadow-md"
          >
            {showAll ? 'Show Less' : 'Show More'}
            <IconChevron up={showAll} />
          </button>
        </div>

        {/* More Leaders */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: showAll ? '1000px' : '0', opacity: showAll ? 1 : 0 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mt-10 pt-10 border-t border-gray-200">
            {moreLeaders.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// CTA COMPONENT
// ========================================
function CTA() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#013463' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #DDA23A, transparent)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center relative z-10">
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-5">
          <span className="w-5 h-px bg-[#DDA23A]" />
          Join the Movement
          <span className="w-5 h-px bg-[#DDA23A]" />
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-white leading-tight">
          Ready to Build for the{" "}
          <span className="text-[#DDA23A]">Ummah?</span>
        </h2>

        <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10">
          Join 80+ Muslim developers across the country. Be part of a community that grows together, codes together, and prays together.
        </p>

        <div className="w-16 h-1 bg-[#DDA23A] rounded-full mx-auto mb-10" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://t.me/nsda_community"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DDA23A] px-10 py-4 text-sm font-bold text-[#013463] shadow-lg shadow-[#DDA23A]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 active:scale-95"
          >
            JOIN NSDA NOW
            <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
          </a>
          <a
            href="https://t.me/NejmAskBot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#DDA23A]/60 bg-transparent px-10 py-4 text-sm font-bold text-white transition-all duration-200 hover:border-[#DDA23A] hover:bg-[#DDA23A] hover:text-[#013463] active:scale-95"
          >
            TELEGRAM SUPPORT
          </a>
        </div>
      </div>
    </section>
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