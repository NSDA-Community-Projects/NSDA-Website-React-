import React from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { leadershipGroups, leadershipValues } from '../data/leadership';
import '../styles/leadership.css';

function InitialAvatar({ name }) {
  const initials = name
    .split(' ')
    .map((chunk) => chunk[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return <div className="leadership-avatar">{initials}</div>;
}

function LeadershipMemberCard({ member }) {
  return (
    <Card href={`/leadership/${member.id}`} className="leadership-member-card">
      <div className="leadership-member-head">
        <InitialAvatar name={member.name} />
        <div>
          <h4>{member.name}</h4>
          <p className="leadership-role">{member.role}</p>
        </div>
      </div>
      <p className="leadership-bio">{member.bio}</p>
      <Button as="span" variant="ghost" size="sm" className="leadership-cta">
        View Profile
      </Button>
    </Card>
  );
}

export default function Leadership() {
  return (
    <SectionWrapper id="leadership" className="leadership-section" backgroundColor="cloud">
      <div className="leadership-header">
        <p className="leadership-kicker">Leadership</p>
        <h2>Guided by Visionaries</h2>
        <p className="leadership-description">
          Our leadership team nurtures talent, grows faith-centered technology, and builds
          meaningful impact for students and the wider Ummah.
        </p>
      </div>

      <div className="leadership-groups">
        {leadershipGroups.map((group) => (
          <section key={group.id} className="leadership-group-row" aria-labelledby={group.id}>
            <div className="leadership-group-label">
              <h3 id={group.id}>{group.title}</h3>
              <p>{group.description}</p>
            </div>

            <div className="leadership-members-grid">
              {group.members.map((member) => (
                <LeadershipMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="leadership-values" aria-label="Guided by Values">
        <h3>Guided by Values</h3>
        <div className="leadership-values-grid">
          {leadershipValues.map((value) => (
            <Card key={value.title} className="leadership-value-card" hover={false}>
              <div className="leadership-value-title">
                <span className="leadership-value-dot" />
                {value.title}
              </div>
              <p>{value.text}</p>
            </Card>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
