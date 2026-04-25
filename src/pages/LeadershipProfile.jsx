import React from 'react';
import Footer from '../components/layout/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { getLeadershipMember } from '../data/leadership';
import '../styles/leadership-profile.css';

function InitialAvatar({ name }) {
  const initials = name
    .split(' ')
    .map((chunk) => chunk[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return <div className="profile-avatar">{initials}</div>;
}

export default function LeadershipProfile({ memberId }) {
  const member = getLeadershipMember(memberId);

  if (!member) {
    return (
      <main className="leadership-profile-page">
        <section className="leadership-profile-shell container">
          <h1>Leader Not Found</h1>
          <p>The profile you requested is not available.</p>
          <Button as="a" href="/#leadership" variant="primary">
            Back to Leadership
          </Button>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="leadership-profile-page">
      <section className="leadership-profile-shell container">
        <div className="profile-header-row">
          <InitialAvatar name={member.name} />
          <div>
            <p className="profile-group">{member.groupTitle}</p>
            <h1>{member.name}</h1>
            <p className="profile-role">{member.formalRole}</p>
          </div>
        </div>

        <Card className="profile-summary-card" hover={false}>
          <h3>Who They Are</h3>
          <p>{member.summary}</p>
        </Card>

        <div className="profile-grid">
          <Card className="profile-info-card" hover={false}>
            <h3>Tech Fields</h3>
            <div className="profile-chip-row">
              {member.techFields.map((field) => (
                <span key={field} className="profile-chip">
                  {field}
                </span>
              ))}
            </div>
          </Card>

          <Card className="profile-info-card" hover={false}>
            <h3>Tech Stack</h3>
            <div className="profile-chip-row">
              {member.techStack.map((tech) => (
                <span key={tech} className="profile-chip profile-chip-stack">
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          <Card className="profile-info-card" hover={false}>
            <h3>Formal Role in NSDA</h3>
            <p>{member.formalRole}</p>
          </Card>

          <Card className="profile-info-card" hover={false}>
            <h3>Contact</h3>
            <div className="profile-links">
              <a href={`mailto:${member.email}`}>{member.email}</a>
              <a href={member.x} target="_blank" rel="noopener noreferrer">
                X Profile
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </Card>
        </div>

        <div className="profile-actions">
          <Button as="a" href="/#leadership" variant="primary">
            Back to Leadership
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
