import React, { useState } from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { leadershipCategories, leadershipGroups, leadershipValues } from '../data/leadership';
import '../styles/leadership.css';

function InitialAvatar({ name, photo, className = 'leadership-avatar' }) {
  const initials = name
    .split(' ')
    .map((chunk) => chunk[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (photo) {
    return <img src={photo} alt={name} className={`${className} leadership-avatar-image`} />;
  }

  return <div className={className}>{initials}</div>;
}

function LeadershipMemberCard({ member, photo, isSelected, onSelect }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(member.id);
    }
  };

  const hasPhotoSlot = !member.role.startsWith('Sisters');

  return (
    <Card
      className={`leadership-member-card leadership-member-card-clickable${
        isSelected ? ' is-selected' : ''
      }`}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(member.id)}
      onKeyDown={handleKeyDown}
      aria-pressed={isSelected}
    >
      <div className="leadership-member-head">
        <InitialAvatar name={member.name} photo={photo} />
        <div className="leadership-member-copy">
          <h4>{member.name}</h4>
          <p className="leadership-role">{member.role}</p>
          <p className="leadership-university">{member.university}</p>
        </div>
      </div>

      {hasPhotoSlot && !photo ? <p className="leadership-photo-hint">Photo slot ready</p> : null}

      {member.linkedin ? (
        <a
          className="leadership-linkedin"
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
        >
          LinkedIn
        </a>
      ) : (
        <span className="leadership-linkedin leadership-linkedin-muted">LinkedIn unavailable</span>
      )}

      <Button as="span" variant="ghost" size="sm" className="leadership-cta">
        Open Profile
      </Button>
    </Card>
  );
}

function LeadershipDetailPanel({ member, category, photo, onPhotoChange }) {
  if (!member) {
    return null;
  }

  const canUploadPhoto = !member.role.startsWith('Sisters');

  return (
    <div className="leadership-detail-panel">
      <div className="leadership-detail-hero">
        <div className="leadership-detail-media">
          <InitialAvatar
            name={member.name}
            photo={photo}
            className="leadership-detail-avatar"
          />

          {canUploadPhoto ? (
            <label className="leadership-photo-upload">
              <input
                type="file"
                accept="image/*"
                onChange={(event) => onPhotoChange(member.id, event.target.files?.[0])}
              />
              <span>{photo ? 'Change Photo' : 'Upload Photo'}</span>
            </label>
          ) : (
            <div className="leadership-photo-note">Avatar-only display for sisters leadership.</div>
          )}
        </div>

        <div className="leadership-detail-copy">
          <p className="leadership-detail-group">{member.groupTitle}</p>
          <h4>{member.name}</h4>
          <p className="leadership-detail-role">{member.role}</p>
          <p className="leadership-detail-summary">{member.summary}</p>
        </div>
      </div>

      <div className="leadership-detail-grid">
        <Card className="leadership-detail-card" hover={false}>
          <h5>Category</h5>
          <p>{category?.title}</p>
        </Card>

        <Card className="leadership-detail-card" hover={false}>
          <h5>University</h5>
          <p>{member.university}</p>
        </Card>

        <Card className="leadership-detail-card" hover={false}>
          <h5>Focus</h5>
          <p>{category?.description}</p>
        </Card>

        <Card className="leadership-detail-card" hover={false}>
          <h5>Connect</h5>
          {member.linkedin ? (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              Visit LinkedIn
            </a>
          ) : (
            <p>No LinkedIn link available.</p>
          )}
        </Card>
      </div>
    </div>
  );
}

function LeadershipGroupBlock({ group }) {
  const [uploadedPhotos, setUploadedPhotos] = useState({});
  const categories = leadershipCategories
    .map((category) => ({
      ...category,
      members: group.members.filter((member) => member.category === category.id)
    }))
    .filter((category) => category.members.length > 0);

  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? '');
  const [selectedMemberId, setSelectedMemberId] = useState(categories[0]?.members[0]?.id ?? '');
  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0] ?? null;
  const selectedMember =
    activeCategory?.members.find((member) => member.id === selectedMemberId) ??
    activeCategory?.members[0] ??
    null;

  if (!activeCategory) {
    return null;
  }

  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
    const nextCategory = categories.find((category) => category.id === categoryId);
    if (nextCategory?.members[0]) {
      setSelectedMemberId(nextCategory.members[0].id);
    }
  };

  const handlePhotoChange = (memberId, file) => {
    if (!file) {
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setUploadedPhotos((current) => ({
      ...current,
      [memberId]: objectUrl
    }));
  };

  return (
    <section className="leadership-group-block" aria-labelledby={group.id}>
      <div className="leadership-group-heading">
        <h3 id={group.id}>{group.title}</h3>
        <p>{group.description}</p>
      </div>

      <div className="leadership-category-shell">
        <div className="leadership-category-sidebar">
          {categories.map((category) => {
            const isActive = category.id === activeCategory.id;

            return (
              <button
                key={`${group.id}-${category.id}`}
                type="button"
                className={`leadership-category-tab${isActive ? ' is-active' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        <div className="leadership-category-panel">
          <p className="leadership-category-description">{activeCategory.description}</p>
          <div className="leadership-members-grid">
            {activeCategory.members.map((member) => (
              <LeadershipMemberCard
                key={member.id}
                member={member}
                photo={uploadedPhotos[member.id]}
                isSelected={selectedMember?.id === member.id}
                onSelect={setSelectedMemberId}
              />
            ))}
          </div>

          <LeadershipDetailPanel
            member={selectedMember}
            category={activeCategory}
            photo={selectedMember ? uploadedPhotos[selectedMember.id] : undefined}
            onPhotoChange={handlePhotoChange}
          />
        </div>
      </div>
    </section>
  );
}

export default function Leadership() {
  return (
    <SectionWrapper id="leadership" className="leadership-section" backgroundColor="cloud">
      <div className="leadership-header">
        <p className="leadership-kicker">Leadership</p>
        <h2>Built by Founders, Continued by Leaders</h2>
        <p className="leadership-description">
          Meet the people guiding NSDA through vision, technical work, content, production, and
          community-centered leadership.
        </p>
      </div>

      <div className="leadership-groups">
        {leadershipGroups.map((group) => (
          <LeadershipGroupBlock key={group.id} group={group} />
        ))}
      </div>

      <section className="leadership-values" aria-label="Guided by Values">
        <h3>Guided by Values</h3>
        <div className="leadership-values-grid">
          {leadershipValues.map((value) => (
            <Card key={value.title} className="leadership-value-card">
              <div className="leadership-value-title">{value.title}</div>
              <p>{value.text}</p>
            </Card>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
