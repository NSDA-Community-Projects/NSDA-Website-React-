export const leadershipGroups = [
  {
    id: 'technical-board',
    title: 'Technical Board',
    description: 'Leading product architecture, mentorship quality, and engineering standards.',
    members: [
      {
        id: 'abdul-s',
        name: 'Abdul S.',
        role: 'Technical Director',
        bio: 'Guides nationwide technical programs and mentors the next generation of builders.',
        formalRole: 'NSDA Technical Director',
        techFields: ['App Development', 'AI Engineering', 'Backend Systems'],
        techStack: ['React Native', 'Python', 'FastAPI', 'PostgreSQL'],
        summary:
          'Abdul leads the technical board, sets implementation standards across NSDA projects, and supports mentors in shipping high-quality student-facing products.',
        email: 'abdul.s@nsda.dev',
        x: 'https://x.com/nsda_community',
        linkedin: 'https://www.linkedin.com/company/nsda/'
      },
      {
        id: 'fatima-a',
        name: 'Fatima A.',
        role: 'Lead Engineer',
        bio: 'Shapes scalable learning projects with strong quality and impact for students.',
        formalRole: 'NSDA Lead Engineer',
        techFields: ['Frontend Engineering', 'Web Development', 'Developer Education'],
        techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
        summary:
          'Fatima drives architecture and code quality for learning platforms while coaching junior contributors on modern web engineering practices.',
        email: 'fatima.a@nsda.dev',
        x: 'https://x.com/nsda_community',
        linkedin: 'https://www.linkedin.com/company/nsda/'
      }
    ]
  },
  {
    id: 'content-production',
    title: 'Content & Production',
    description: 'Crafting inspiring stories and learning media for the NSDA community.',
    members: [
      {
        id: 'maryam-s',
        name: 'Maryam S.',
        role: 'Creative Producer',
        bio: 'Leads visual storytelling for programs, events, and educational campaigns.',
        formalRole: 'NSDA Creative Producer',
        techFields: ['Content Production', 'Design Systems', 'Motion Graphics'],
        techStack: ['Figma', 'Adobe Premiere', 'After Effects', 'Canva'],
        summary:
          'Maryam leads content production and ensures NSDA communications are clear, impactful, and aligned with our faith-centered mission.',
        email: 'maryam.s@nsda.dev',
        x: 'https://x.com/nsda_community',
        linkedin: 'https://www.linkedin.com/company/nsda/'
      },
      {
        id: 'zeyd-t',
        name: 'Zeyd T.',
        role: 'Media Operations',
        bio: 'Runs recording, post-production, and publishing workflows for Nujum sessions.',
        formalRole: 'NSDA Media Operations Lead',
        techFields: ['Video Production', 'Podcast Workflow', 'Technical Content'],
        techStack: ['OBS', 'DaVinci Resolve', 'YouTube Studio', 'Notion'],
        summary:
          'Zeyd manages production pipelines for NSDA media initiatives and keeps our educational releases consistent and technically polished.',
        email: 'zeyd.t@nsda.dev',
        x: 'https://x.com/nsda_community',
        linkedin: 'https://www.linkedin.com/company/nsda/'
      }
    ]
  },
  {
    id: 'strategy-communication',
    title: 'Strategy & Communication',
    description: 'Aligning partnerships, operations, and national community growth.',
    members: [
      {
        id: 'hiba-r',
        name: 'Hiba R.',
        role: 'Strategy Lead',
        bio: 'Builds high-impact initiatives and partnerships centered on service to the Ummah.',
        formalRole: 'NSDA Strategy Lead',
        techFields: ['Program Strategy', 'Partnerships', 'Community Operations'],
        techStack: ['Notion', 'Airtable', 'Google Workspace', 'Slack'],
        summary:
          'Hiba coordinates growth strategy, institutional collaboration, and long-term planning to increase NSDA impact nationwide.',
        email: 'hiba.r@nsda.dev',
        x: 'https://x.com/nsda_community',
        linkedin: 'https://www.linkedin.com/company/nsda/'
      },
      {
        id: 'ibra-m',
        name: 'Ibra M.',
        role: 'Community Relations',
        bio: 'Strengthens communication with students, mentors, and university communities.',
        formalRole: 'NSDA Community Relations Coordinator',
        techFields: ['Developer Relations', 'Community Support', 'Communications'],
        techStack: ['Telegram', 'Discord', 'Google Meet', 'Airtable'],
        summary:
          'Ibra builds strong communication channels between NSDA leadership, mentors, and students to keep programs supportive and responsive.',
        email: 'ibra.m@nsda.dev',
        x: 'https://x.com/nsda_community',
        linkedin: 'https://www.linkedin.com/company/nsda/'
      }
    ]
  }
];

export const leadershipValues = [
  { title: 'Faith & Excellence', text: 'We pursue ihsan in every project, decision, and interaction.' },
  { title: 'Discipline', text: 'We value consistency, responsibility, and quality in our work.' },
  { title: 'Knowledge Sharing', text: 'We uplift one another through open mentorship and learning.' },
  { title: 'Service to Ummah', text: 'We build technology that brings lasting benefit to our communities.' }
];

export const leadershipMembers = leadershipGroups.flatMap((group) =>
  group.members.map((member) => ({
    ...member,
    groupId: group.id,
    groupTitle: group.title
  }))
);

export function getLeadershipMember(id) {
  return leadershipMembers.find((member) => member.id === id);
}
