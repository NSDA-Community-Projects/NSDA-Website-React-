import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { leadershipMembers } from '../data/leadership';

function getAvatarUrl(name) {
  const seed = encodeURIComponent(String(name).toLowerCase());
  return `https://api.dicebear.com/6.x/pixel-art/svg?seed=${seed}&backgroundType=solid&backgroundColor=%23ffffff`;
}

export default function LeadershipProfile() {
  const { memberId } = useParams();
  const member = leadershipMembers.find((item) => item.id === memberId);

  if (!member) {
    return (
      <section className="min-h-[80vh] bg-[#F7F8FF] py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl rounded-[2rem] bg-white p-12 text-center shadow-[0_20px_60px_rgba(1,52,99,0.12)]">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#DDA23A]">Profile Missing</p>
            <h1 className="text-4xl font-headline font-bold text-[#013463] mb-4">Member Not Found</h1>
            <p className="text-base leading-8 text-[#4a4f5a] mb-8">The leadership profile you are looking for does not exist yet. Return to the leadership roster to continue exploring the team.</p>
            <Link
              to="/leadership"
              className="inline-flex rounded-full bg-[#DDA23A] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#013463] transition hover:opacity-90"
            >
              Back to Leadership
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F7F8FF] py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="rounded-[3rem] bg-white p-10 shadow-[0_30px_90px_rgba(1,52,99,0.12)]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.24em] text-[#DDA23A]">Leadership Profile</p>
                <h1 className="mt-4 text-5xl md:text-6xl font-headline font-bold tracking-tight leading-none">
                  {member.name.split(' ')[0]} <span className="text-[#DDA23A]">{member.name.split(' ').slice(1).join(' ')}</span>
                </h1>
                <p className="mt-4 text-lg text-[#4a4f5a] leading-8">
                  {member.role} from {member.university}. {member.bio}
                </p>
              </div>

              <div className="inline-flex rounded-[2rem] bg-[#EFF3FF] p-6">
                <div className="h-32 w-32 rounded-[1.75rem] bg-white overflow-hidden shadow-sm">
                  <img
                    src={getAvatarUrl(member.name)}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-[#e8e7ff] bg-[#fffdf7] p-8">
                <p className="text-sm uppercase tracking-[0.22em] text-[#7f5600]">Role</p>
                <p className="mt-4 text-xl font-semibold text-[#013463]">{member.role}</p>
              </div>
              <div className="rounded-[2rem] border border-[#e8e7ff] bg-[#f3f8ff] p-8">
                <p className="text-sm uppercase tracking-[0.22em] text-[#013463]">University</p>
                <p className="mt-4 text-xl font-semibold text-[#013463]">{member.university}</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/leadership"
                className="inline-flex items-center justify-center rounded-full border border-[#013463] bg-white px-8 py-3 text-sm font-semibold text-[#013463] transition hover:bg-[#013463] hover:text-white"
              >
                Back to Leadership
              </Link>
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#DDA23A] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#013463] transition hover:opacity-90"
                >
                  View LinkedIn Profile
                </a>
              ) : (
                <span className="inline-flex rounded-full bg-[#F3F3FF] px-8 py-3 text-sm font-semibold text-[#4a4f5a]">LinkedIn profile unavailable</span>
              )}
            </div>
          </div>

          <div className="rounded-[3rem] bg-white p-10 shadow-[0_30px_90px_rgba(1,52,99,0.12)]">
            <h2 className="text-3xl font-headline font-bold text-[#013463] mb-6">
              About <span className="text-[#DDA23A]">{member.name.split(' ')[0]}</span>
            </h2>
            <p className="max-w-3xl text-base leading-8 text-[#4a4f5a]">{member.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
