import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { leadershipMembers } from '../data/leadership';
import star from '../assets/star.jpg';

/* ─── fade-in hook ─── */
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-10');
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ─── DiceBear avatar ─── */
function getAvatarUrl(name) {
  const seed = encodeURIComponent(String(name).toLowerCase());
  return `https://api.dicebear.com/6.x/pixel-art/svg?seed=${seed}&backgroundType=solid&backgroundColor=%23013463`;
}

/* ─── icons ─── */
const IconArrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);
const IconLinkedin = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

/* ─── Member Card ─── */
function MemberCard({ member, size = 'md' }) {
  const isLg = size === 'lg';
  return (
    <Link
      to={`/leadership/${member.id}`}
      className="group relative bg-white border border-gray-100 rounded-[1.75rem] overflow-visible shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
    >
      {/* gold accent bar */}
      <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-12 bg-[#DDA23A] rounded-b-full" />

      {/* avatar */}
      <div className={`mt-8 ${isLg ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-16 h-16 sm:w-20 sm:h-20'} rounded-full overflow-hidden border-4 border-[#f6f9fd] shadow-lg group-hover:border-[#DDA23A] transition-colors duration-300 flex-shrink-0`}>
        <img
          src={getAvatarUrl(member.name)}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* info */}
      <div className="px-5 pb-6 pt-3 space-y-1.5 w-full">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DDA23A]">{member.role}</p>
        <h3 className={`font-extrabold text-[#013463] leading-tight ${isLg ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>{member.name}</h3>
        <p className="text-[11px] text-gray-400 leading-tight">{member.university}</p>

        {/* view profile link */}
        <div className="pt-2 flex items-center justify-center gap-1.5 text-xs font-bold text-[#013463] group-hover:text-[#DDA23A] transition-colors duration-200">
          <span>View Profile</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
        </div>
      </div>
    </Link>
  );
}

/* ════════════════════════════════════════════════
   LEADERSHIP PAGE
════════════════════════════════════════════════ */
export default function Leadership() {
  const heroRef    = useFadeIn(0);
  const foundersRef = useFadeIn(0);
  const batchRef   = useFadeIn(0);
  const valuesRef  = useFadeIn(0);

  const founders    = leadershipMembers.filter(m => m.group === 'Founders');
  const secondBatch = leadershipMembers.filter(m => m.group === '2nd Batch');

  return (
    <main className="bg-[#f6f9fd] text-[#013463] overflow-x-hidden">

      {/* ══════════════════════════════════════════
          1. HERO — star bg, consistent with all pages
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={star} alt="" aria-hidden="true"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', zIndex:0 }} />
        <div className="absolute inset-0 bg-white/25" style={{ zIndex:1 }} />
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border-2 border-[#013463]/40 hidden lg:block" style={{ zIndex:2 }} />
        <div className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full border-2 border-[#DDA23A]/40 hidden lg:block" style={{ zIndex:2 }} />

        <div
          ref={heroRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32"
          style={{ position:'relative', zIndex:10, paddingTop:'8rem', paddingBottom:'8rem' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#DDA23A]">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                NSDA Leadership
              </span>

              <h1 className="font-extrabold text-[#013463] text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight">
                Our{' '}
                <span className="relative inline-block text-[#DDA23A]">
                  Leadership
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#DDA23A]/40 rounded-full" />
                </span>{' '}
                Team
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                The team that applies academic rigor, community stewardship, and creative strategy to empower the next generation of Muslim developers across Ethiopia.
              </p>

              {/* stats */}
              <div className="flex flex-wrap gap-8 sm:gap-12">
                {[
                  { value: '22+', label: 'Total Members'  },
                  { value: '14',  label: 'Founders'       },
                  { value: '8',   label: 'Emerging Leaders'},
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-[#DDA23A] font-extrabold text-2xl sm:text-3xl leading-none">{value}</span>
                    <span className="text-[#013463] text-xs uppercase tracking-widest mt-1 font-semibold">{label}</span>
                  </div>
                ))}
              </div>

              {/* trust badges */}
              <div className="flex flex-wrap gap-3">
                {['Faith-Driven', 'Community-Led', 'Multi-University'].map(b => (
                  <span key={b} className="inline-flex items-center gap-1.5 bg-white/70 border border-gray-200 px-3 py-1.5 rounded-full text-xs font-semibold text-[#013463]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DDA23A]" />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — stats card */}
            <div className="relative hidden md:block">
              <div className="bg-white border border-gray-100 rounded-[2rem] p-7 shadow-xl space-y-5">
                {/* dark impact card */}
                <div className="bg-[#013463] rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DDA23A] to-transparent" />
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[#DDA23A] font-bold">Leadership Impact</p>
                  <h2 className="mt-3 text-3xl font-extrabold">22+ Members</h2>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">Representing multiple universities across Ethiopia.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#f6f9fd] rounded-2xl p-5 text-center border border-gray-100">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Founders</p>
                    <p className="text-4xl font-extrabold text-[#013463]">14</p>
                  </div>
                  <div className="bg-[#fff7df] rounded-2xl p-5 text-center border border-yellow-100">
                    <p className="text-[10px] uppercase tracking-widest text-[#7f5600] font-bold mb-2">2nd Batch</p>
                    <p className="text-4xl font-extrabold text-[#013463]">8</p>
                  </div>
                </div>

                <div className="bg-[#f6f9fd] rounded-2xl p-5 border border-gray-100">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#013463] font-bold mb-2">Why We Lead</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    We lead by creating programs, producing media, and building technical systems that support sisters, student mentors, and aspiring developers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f6f9fd] to-transparent pointer-events-none" style={{ zIndex:10 }} />
        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" style={{ zIndex:20 }}>
          <span className="w-px h-8 bg-[#013463]/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#013463]/50" />
        </div>
      </section>


      {/* ══════════════════════════════════════════
          2. FOUNDING LEADERSHIP
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-[#f6f9fd]">
        <div className="max-w-7xl mx-auto">
          <div
            ref={foundersRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            {/* heading */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-3">
                  <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                  Founding Team
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#013463] leading-tight">
                  Founding{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">Leadership</span>
                    <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#DDA23A]/30 rounded-full -z-0" />
                  </span>
                </h2>
                <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed">
                  These members established NSDA's vision and continue to guide the community with purpose and creativity.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#DDA23A] font-bold whitespace-nowrap self-end pb-1 hidden sm:block">
                Click any card to view profile
              </span>
            </div>

            {/* grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6">
              {founders.map(m => (
                <MemberCard key={m.id} member={m} size="lg" />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          3. EMERGING LEADERS (2nd Batch) — navy bg
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-[#013463]">
        <div className="max-w-7xl mx-auto">
          <div
            ref={batchRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            {/* heading */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-3">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                2nd Batch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Emerging{' '}
                <span className="text-[#DDA23A]">Leaders</span>
              </h2>
              <p className="mt-3 text-white/60 text-sm sm:text-base max-w-xl leading-relaxed">
                Our second batch brings fresh energy, new voices, and a strong commitment to sisterhood and technical excellence.
              </p>
            </div>

            {/* cards — white on dark bg */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
              {secondBatch.map(m => (
                <Link
                  key={m.id}
                  to={`/leadership/${m.id}`}
                  className="group relative bg-white/8 border border-white/10 rounded-[1.75rem] overflow-visible hover:-translate-y-2 hover:bg-white/15 hover:border-[#DDA23A]/40 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-10 bg-[#DDA23A] rounded-b-full" />

                  <div className="mt-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-[#DDA23A] transition-colors duration-300 shadow-lg flex-shrink-0">
                    <img src={getAvatarUrl(m.name)} alt={m.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="px-4 pb-6 pt-3 space-y-1.5 w-full">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DDA23A]">{m.role}</p>
                    <h3 className="font-extrabold text-white text-sm sm:text-base leading-tight">{m.name}</h3>
                    <p className="text-[11px] text-white/50 leading-tight">{m.university}</p>
                    <div className="pt-2 flex items-center justify-center gap-1.5 text-xs font-bold text-white/50 group-hover:text-[#DDA23A] transition-colors duration-200">
                      <span>View Profile</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          4. GUIDED BY VALUES
      ══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-[#f6f9fd]">
        <div className="max-w-7xl mx-auto">
          <div
            ref={valuesRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-3">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                Principles
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#013463] mb-4">
                Guided by{' '}
                <span className="text-[#DDA23A]">Values</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Our leadership is rooted in service, discipline, knowledge sharing, and a strong commitment to faith-driven excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Faith & Excellence',
                  body:  'We pursue ihsan in every project, decision, and interaction, striving for the highest standard of moral and professional conduct.',
                  dark:  true,
                  gold:  false,
                },
                {
                  title: 'Discipline',
                  body:  'We value consistency, responsibility, and quality in our work, ensuring that our academic rigour translates into tangible results.',
                  dark:  false,
                  gold:  false,
                },
                {
                  title: 'Knowledge Sharing',
                  body:  'We uplift one another through open mentorship and collaborative learning, fostering a community of continuous intellectual growth.',
                  dark:  false,
                  gold:  false,
                },
                {
                  title: 'Service to Ummah',
                  body:  'We build technology and communication platforms that bring lasting benefit to our communities and global society.',
                  dark:  false,
                  gold:  true,
                },
              ].map(({ title, body, dark, gold }) => (
                <div
                  key={title}
                  className={`relative rounded-2xl p-7 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300
                    ${dark ? 'bg-[#013463] text-white shadow-lg'
                    : gold ? 'bg-[#DDA23A] text-[#013463] shadow-lg'
                    : 'bg-white border border-gray-100 shadow-sm text-[#013463]'}`}
                >
                  <span className="absolute top-0 left-8 h-[3px] w-10 rounded-b-full"
                    style={{ backgroundColor: dark ? '#DDA23A' : gold ? '#013463' : '#DDA23A' }} />
                  {(dark || gold) && (
                    <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-white/10" />
                  )}
                  <h3 className={`relative z-10 text-lg font-extrabold mb-3
                    ${dark ? 'text-white' : gold ? 'text-[#013463]' : 'text-[#013463]'}`}>
                    {title}
                  </h3>
                  <p className={`relative z-10 text-sm leading-relaxed
                    ${dark ? 'text-white/70' : gold ? 'text-[#013463]/80' : 'text-gray-500'}`}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          5. BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="bg-[#013463] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-5">
            <span className="inline-block w-5 h-px bg-[#DDA23A]" />
            Get Involved
            <span className="inline-block w-5 h-px bg-[#DDA23A]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to code for a{' '}
            <span className="text-[#DDA23A]">higher purpose?</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
            Join a community that puts faith at the centre of every commit. Build tools that matter, with people who care.
          </p>
          <div className="w-16 h-1 bg-[#DDA23A] rounded-full mx-auto mb-10" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/register"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DDA23A] px-10 py-4 text-sm font-bold text-[#013463] shadow-lg shadow-[#DDA23A]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 active:scale-95"
            >
              Become a Member
              <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
            </a>
            <a
              href="https://t.me/nsda_community"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#DDA23A]/60 bg-transparent px-10 py-4 text-sm font-bold text-white transition-all duration-200 hover:border-[#DDA23A] hover:bg-[#DDA23A] hover:text-[#013463] active:scale-95"
            >
              Join Telegram Channel
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}