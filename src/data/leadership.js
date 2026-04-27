const foundersMembers = [
  {
    id: 'osama-seid',
    name: 'Osama Seid',
    role: 'President',
    university: 'Jimma University',
    linkedin: 'https://www.linkedin.com/in/osama-seid-a2978129a',
    category: 'presidency-strategy',
    summary:
      'Osama serves as President and helps set the overall direction, priorities, and momentum for NSDA.'
  },
  {
    id: 'nebiyou-elias',
    name: 'Nebiyou Elias (Nebil)',
    role: 'Vice President',
    university: 'AASTU',
    linkedin: 'https://www.linkedin.com/in/nebiyou-elias-mohammed/',
    category: 'presidency-strategy',
    summary:
      'Nebiyou supports executive coordination, leadership continuity, and strategic execution across the team.'
  },
  {
    id: 'imadudin-keremu',
    name: 'Imadudin Keremu',
    role: 'Project Manager',
    university: 'Haramaya University',
    category: 'presidency-strategy',
    summary:
      'Imadudin oversees project coordination and helps keep leadership initiatives organized and moving forward.'
  },
  {
    id: 'abdelaziz-ebrahim',
    name: 'Abdelaziz Ebrahim',
    role: 'Content Head',
    university: 'Bahir Dar University',
    linkedin: 'https://www.linkedin.com/in/abdelazizEbrahim/',
    category: 'content-production',
    summary:
      'Abdelaziz leads content direction and supports clear, purposeful communication for NSDA initiatives.'
  },
  {
    id: 'abdulaziz-ayalew',
    name: 'Abdulaziz Ayalew',
    role: 'Content Head',
    university: 'AASTU',
    linkedin: 'https://www.linkedin.com/in/abdulaziz-ayalew',
    category: 'content-production',
    summary:
      'Abdulaziz contributes to content leadership and helps shape educational and community-facing materials.'
  },
  {
    id: 'muaz-sani',
    name: 'Muaz Sani',
    role: 'Production Head',
    university: 'Jimma University',
    category: 'content-production',
    summary:
      'Muaz leads production work and helps translate ideas into polished, accessible outputs for the community.'
  },
  {
    id: 'abdulselam-kemal',
    name: 'Abdulselam Kemal',
    role: 'Technical Head',
    university: 'Addis Ababa University',
    linkedin: 'https://www.linkedin.com/in/ab-adam74',
    category: 'technical-mentorship',
    summary:
      'Abdulselam guides technical execution and supports the systems, tooling, and implementation side of NSDA.'
  },
  {
    id: 'sumeya-awel',
    name: 'Sumeya Awel',
    role: 'Sisters President',
    university: 'ASTU',
    category: 'presidency-strategy',
    summary:
      'Sumeya leads the Sisters leadership wing and supports aligned growth, representation, and coordination.'
  },
  {
    id: 'sumeya-muhammed',
    name: 'Sumeya Muhammed',
    role: 'Sisters Communication Head',
    university: 'Jimma University',
    linkedin: 'http://linkedin.com/in/sumeya-muhammed-a83168319/',
    category: 'community-engagement',
    summary:
      'Sumeya leads Sisters communications and helps ensure outreach is clear, supportive, and community-centered.'
  },
  {
    id: 'semeriya-seid',
    name: 'Semeriya Seid',
    role: 'Sisters Production Head',
    university: 'Haramaya University',
    linkedin: 'https://www.linkedin.com/in/sud-seid-b24b48356/',
    category: 'content-production',
    summary:
      'Semeriya leads Sisters production efforts and supports strong visual and media execution across programs.'
  },
  {
    id: 'fozia-mohammed',
    name: 'Fozia Mohammed',
    role: 'Sisters Project Head',
    university: 'Addis Ababa University',
    linkedin: 'https://www.linkedin.com/in/fozia-mohammed-50132730b/',
    category: 'community-engagement',
    summary:
      'Fozia coordinates Sisters projects and helps carry initiatives from planning through delivery.'
  },
  {
    id: 'hanan-nasir',
    name: 'Hanan Nasir',
    role: 'Sisters Content Head',
    university: 'Arba Minch University',
    linkedin: 'https://www.linkedin.com/in/hanan-nasir2014',
    category: 'content-production',
    summary:
      'Hanan leads Sisters content efforts and supports meaningful educational and community storytelling.'
  },
  {
    id: 'rehmet-muhammed',
    name: 'Rehmet Muhammed',
    role: 'Sisters Technical Head',
    university: 'Bahir Dar University',
    linkedin: 'https://www.linkedin.com/in/rehmet-muhammed777',
    category: 'technical-mentorship',
    summary:
      'Rehmet leads Sisters technical work and supports practical problem-solving, systems thinking, and technical growth.'
  },
  {
    id: 'sitra-seyfu',
    name: 'Sitra Seyfu',
    role: 'Sisters Production Head',
    university: 'Jimma University',
    category: 'content-production',
    summary:
      'Sitra supports Sisters production and helps bring events, media, and communications to life with consistency.'
  }
];

const secondBatchMembers = [
  {
    id: 'emran',
    name: 'Emran',
    role: 'President',
    university: 'Second Batch Leadership',
    category: 'presidency-strategy',
    summary:
      'Emran serves as President for the second batch leadership team and supports continuity in mission and direction.'
  },
  {
    id: 'mohammed',
    name: 'Mohammed',
    role: 'Vice President',
    university: 'Second Batch Leadership',
    category: 'presidency-strategy',
    summary:
      'Mohammed supports leadership coordination and helps keep planning and execution aligned across the batch.'
  },
  {
    id: 'hawdiya-abdellah',
    name: 'Hawdiya Abdellah',
    role: 'Communication',
    university: 'Second Batch Leadership',
    category: 'community-engagement',
    summary:
      'Hawdiya supports communication strategy and helps strengthen how the team connects with the wider community.'
  },
  {
    id: 'ahlam-ahmed',
    name: 'Ahlam Ahmed',
    role: 'Technical',
    university: 'Second Batch Leadership',
    category: 'technical-mentorship',
    summary:
      'Ahlam supports technical leadership and helps guide implementation needs within the second batch team.'
  },
  {
    id: 'orniya-zeidan',
    name: 'Orniya Zeidan',
    role: 'Content',
    university: 'Second Batch Leadership',
    category: 'content-production',
    summary:
      'Orniya supports content development and helps keep messaging and educational materials strong and consistent.'
  },
  {
    id: 'iman-anwar',
    name: 'Iman Anwar',
    role: 'Production',
    university: 'Second Batch Leadership',
    category: 'content-production',
    summary:
      'Iman supports production work and helps the team deliver polished outputs across leadership initiatives.'
  }
];

export const leadershipCategories = [
  {
    id: 'presidency-strategy',
    title: 'Presidency & Strategy',
    description: 'Strategic leadership and executive oversight of the NSDA vision.'
  },
  {
    id: 'content-production',
    title: 'Content & Production Ops',
    description: 'Crafting educational content and visual identity for our community.'
  },
  {
    id: 'technical-mentorship',
    title: 'Technical Mentorship',
    description: 'Guiding students through mentorship programs and technical growth.'
  },
  {
    id: 'community-engagement',
    title: 'Community Engagement',
    description: 'Building connections and coordinating communication across the community.'
  }
];

export const leadershipGroups = [
  {
    id: 'founders',
    title: 'Founders',
    description: 'Founding leadership shaping NSDA strategy, execution, and long-term community direction.',
    sidebarTitle: 'Presidency & Founding Team',
    sidebarDescription:
      'Leadership, coordination, and operational ownership that established the foundation of NSDA.',
    members: foundersMembers
  },
  {
    id: 'second-batch',
    title: 'Second Batch Leadership',
    description: 'Emerging leadership continuing the work through communication, technical, content, and production roles.',
    sidebarTitle: 'Next Leadership Batch',
    sidebarDescription:
      'A rising team carrying forward the vision through focused support across core functions.',
    members: secondBatchMembers
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
