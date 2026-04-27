import React from 'react';
import Footer from '../components/layout/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { getLeadershipMember, leadershipCategories } from '../data/leadership';
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
  const category = leadershipCategories.find((item) => item.id === member?.category);

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
            <p className="profile-role">{member.role}</p>
          </div>
        </div>

        <Card className="profile-summary-card" hover={false}>
          <h3>Overview</h3>
          <p>{member.summary}</p>
        </Card>

        <div className="profile-grid">
          <Card className="profile-info-card" hover={false}>
            <h3>Role</h3>
            <p>{member.role}</p>
          </Card>

          <Card className="profile-info-card" hover={false}>
            <h3>University</h3>
            <p>{member.university}</p>
          </Card>

          {category ? (
            <Card className="profile-info-card" hover={false}>
              <h3>Category</h3>
              <p>{category.title}</p>
            </Card>
          ) : null}

          <Card className="profile-info-card" hover={false}>
            <h3>Connect</h3>
            <div className="profile-links">
              {member.linkedin ? (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              ) : (
                <p>No LinkedIn link available.</p>
              )}
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
