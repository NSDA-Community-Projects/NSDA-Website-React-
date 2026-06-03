import React from 'react';
import { Link } from 'react-router-dom';
import { leadershipMembers } from '../data/leadership';

function getAvatarUrl(name) {
  const seed = encodeURIComponent(String(name).toLowerCase());
  // use DiceBear pixel-art for abstract, non-human badges with a solid white background
  return `https://api.dicebear.com/6.x/pixel-art/svg?seed=${seed}&backgroundType=solid&backgroundColor=%23ffffff`;
}

export default function Leadership() {
  const founders = leadershipMembers.filter((member) => member.group === 'Founders');
  const secondBatch = leadershipMembers.filter((member) => member.group === '2nd Batch');

  return (
    <main className="bg-[#F7F8FF] text-[#013463]">
      <section className="relative overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(221,162,58,0.18),transparent_28%)]" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#013463]/10 blur-3xl" />

        <div className="container mx-auto relative px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-[#fff4d2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#7f5600]">
                NSDA Leadership
              </span>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tight leading-[1.03]">
                Our <span className="text-[#DDA23A]">Leadership</span> Team
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4a4f5a]">
                The team that applies academic rigor, community stewardship, and creative strategy to empower the next generation of Muslim developers and debaters.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#e8e7ff] bg-white p-8 shadow-[0_40px_80px_rgba(1,52,99,0.12)]">
              <div className="space-y-6">
                <div className="rounded-[2rem] bg-[#013463] p-6 text-white shadow-[0_20px_50px_rgba(1,52,99,0.18)]">
                  <p className="text-xs uppercase tracking-[0.26em] text-[#fff7d1]">Leadership Impact</p>
                  <h2 className="mt-4 text-3xl font-bold">22+ Members</h2>
                  <p className="mt-3 text-sm text-[#f3f1e6] leading-relaxed">Representing multiple universities and both founding and second batch teams.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] bg-[#F8F8FF] p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#7f7f7f]">Founders</p>
                    <p className="mt-3 text-2xl font-headline font-bold text-[#013463]">14</p>
                  </div>
                  <div className="rounded-[1.75rem] bg-[#fff7df] p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#7f5600]">2nd Batch</p>
                    <p className="mt-3 text-2xl font-headline font-bold text-[#013463]">8</p>
                  </div>
                </div>

                <div className="space-y-4 rounded-[1.75rem] bg-[#EFF3FF] p-6">
                  <p className="text-sm uppercase tracking-[0.26em] text-[#013463]">Why we lead</p>
                  <p className="text-sm text-[#4a4f5a] leading-relaxed">
                    We lead by creating programs, producing media, and building technical systems that support sisters, student mentors, and aspiring developers across Ethiopia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight">
              Founding <span className="text-[#DDA23A]">Leadership</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#4a4f5a]">
              These members established NSDA’s vision and continue to guide the community with purpose and creativity.
            </p>
          </div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#7f5600]">Click any profile to open details</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {founders.map((member) => (
            <Link
              to={`/leadership/${member.id}`}
              key={member.id}
              className="group relative overflow-hidden rounded-[2rem] border border-[#e8e7ff] bg-white pt-16 md:pt-20 pb-6 px-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(1,52,99,0.12)]"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="h-28 w-28 rounded-full bg-white shadow-lg overflow-hidden flex items-center justify-center" style={{ boxShadow: '0 12px 30px rgba(1,52,99,0.08)' }}>
                  <img
                    src={getAvatarUrl(member.name)}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.22em] text-[#DDA23A]">{member.role}</p>
                <h3 className="mt-3 text-2xl font-headline font-semibold text-[#013463]">{member.name}</h3>
                <p className="mt-2 text-sm text-[#4a4f5a]">{member.university}</p>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#013463] transition group-hover:text-[#DDA23A]">
                <span>View Profile</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pt-20">
        <div className="mb-10">
          <h2 className="text-4xl font-headline font-bold tracking-tight">
            Emerging <span className="text-[#DDA23A]">Leaders</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#4a4f5a]">
            Our second batch brings fresh energy, new voices, and a strong commitment to sisterhood and technical excellence.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {secondBatch.map((member) => (
            <Link
              to={`/leadership/${member.id}`}
              key={member.id}
              className="group relative overflow-hidden rounded-[2rem] border border-[#e8e7ff] bg-white pt-16 md:pt-20 pb-6 px-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(1,52,99,0.12)]"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="h-24 w-24 rounded-full bg-white shadow-lg overflow-hidden flex items-center justify-center" style={{ boxShadow: '0 10px 26px rgba(1,52,99,0.07)' }}>
                  <img
                    src={getAvatarUrl(member.name)}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.22em] text-[#DDA23A]">{member.role}</p>
                <h3 className="mt-3 text-2xl font-headline font-semibold text-[#013463]">{member.name}</h3>
                <p className="mt-2 text-sm text-[#4a4f5a]">{member.university}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pt-56 md:pt-64 pb-28">
        <div className="rounded-[3rem] bg-white p-10 shadow-[0_30px_90px_rgba(1,52,99,0.12)]">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-headline font-bold tracking-tight">
              Guided by <span className="text-[#DDA23A]">Values</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base text-[#4a4f5a]">
              Our leadership is rooted in service, discipline, knowledge sharing, and a strong commitment to faith-driven excellence.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[#013463] p-8 text-white shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Faith & Excellence</h3>
              <p className="leading-relaxed text-[#f3f1e6]">We pursue ihsan in every project, decision, and interaction, striving for the highest standard of moral and professional conduct.</p>
            </div>
            <div className="rounded-[2rem] border border-[#e8e7ff] bg-white p-8">
              <h3 className="text-2xl font-semibold text-[#013463] mb-4">Discipline</h3>
              <p className="leading-relaxed text-[#4a4f5a]">We value consistency, responsibility, and quality in our work, ensuring that our academic rigour translates into tangible results.</p>
            </div>
            <div className="rounded-[2rem] border border-[#e8e7ff] bg-white p-8">
              <h3 className="text-2xl font-semibold text-[#013463] mb-4">Knowledge Sharing</h3>
              <p className="leading-relaxed text-[#4a4f5a]">We uplift one another through open mentorship and collaborative learning, fostering a community of continuous intellectual growth.</p>
            </div>
            <div className="rounded-[2rem] bg-[#DDA23A] p-8 text-[#013463] shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Service to Ummah</h3>
              <p className="leading-relaxed text-[#013463]/90">We build technology and communication platforms that bring lasting benefit to our communities and global society.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
