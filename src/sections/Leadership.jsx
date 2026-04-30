import React from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import Card from '../components/common/Card';
import { leadershipCategories, leadershipGroups, leadershipValues } from '../data/leadership';
import '../styles/leadership.css';

function InitialAvatar({ name, className = 'leadership-avatar' }) {
  const initials = name
    .split(' ')
    .map((chunk) => chunk[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return <div className={className}>{initials}</div>;
}

function getCategoryTitle(categoryId) {
  const category = leadershipCategories.find((item) => item.id === categoryId);
  return category ? category.title : categoryId;
}

function LeadershipMemberCard({ member }) {
  return (
    <Card href={`/leadership/${member.id}`} className="leadership-member-card">
      <div className="leadership-member-head">
        <InitialAvatar name={member.name} />
        <div className="leadership-member-copy">
          <h4>{member.name}</h4>
          <p className="leadership-role">{member.role}</p>
          <p className="leadership-university">{member.university}</p>
          <span className="leadership-category-badge">
            {getCategoryTitle(member.category)}
          </span>
        </div>
      </div>

      <p className="leadership-summary">{member.summary}</p>

      <div className="leadership-member-footer">
        {member.linkedin ? (
          <span className="leadership-linkedin">LinkedIn</span>
        ) : (
          <span className="leadership-linkedin leadership-linkedin-muted">Profile</span>
        )}
      </div>
    </Card>
  );
}

function LeadershipGroupBlock({ group }) {
  return (
    <section className="leadership-group-block" aria-labelledby={group.id}>
      <div className="leadership-group-header">
        <div>
          <h3 id={group.id}>{group.title}</h3>
          <p>{group.description}</p>
        </div>
        <span className="leadership-group-label">{group.stageLabel}</span>
      </div>

      <div className="leadership-members-grid">
        {group.members.map((member) => (
          <LeadershipMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

export default function Leadership() {
  return (
    <SectionWrapper id="leadership" className="leadership-section" backgroundColor="cloud">
      <div className="leadership-shell">
        <div className="leadership-header">
          <p className="leadership-kicker">Leadership</p>
          <h2>
            Guided by
            <span> Visionaries</span>
          </h2>
          <p className="leadership-description">
            Meet the architects and builders shaping our digital sanctuary. Our leadership is
            dedicated to fostering ethical innovation and excellence within the Ummah.
          </p>
        </div>

        <div className="leadership-groups">
          {leadershipGroups.map((group) => (
            <LeadershipGroupBlock key={group.id} group={group} />
          ))}
        </div>

        <section className="leadership-values" aria-label="Guided by Values">
          <div className="leadership-values-header">
            <h3>Guided by Values</h3>
            <p>The principles that shape how NSDA leads, builds, and serves.</p>
          </div>

          <div className="leadership-values-grid">
            {leadershipValues.map((value) => (
              <Card key={value.title} className="leadership-value-card" hover={false}>
                <div className="leadership-value-title">{value.title}</div>
                <p>{value.text}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
}
