import React from 'react';

export default function Leadership() {
  const foundingTeam = [
    { name: "Osama Seid", role: "President", university: "Jimma University", icon: "fa-user-tie", gender: "male", linkedin: "https://www.linkedin.com/in/osama-seid-a2978129a" },
    { name: "Nebiyou Elias (Nebil)", role: "Vice President", university: "AASTU", icon: "fa-user", gender: "male", linkedin: "https://www.linkedin.com/in/nebiyou-elias-mohammed/" },
    { name: "Abdelaziz Ebrahim", role: "Content Head", university: "Bahir Dar University", icon: "fa-newspaper", gender: "male", linkedin: "https://www.linkedin.com/in/abdelazizEbrahim/" },
    { name: "Sumeya Muhammed", role: "Sisters Communication Head", university: "Jimma University", icon: "fa-comments", gender: "female", linkedin: "http://linkedin.com/in/sumeya-muhammed-a83168319/" },
    { name: "Semeriya Seid", role: "Sisters Production Head", university: "Haramaya University", icon: "fa-video", gender: "female", linkedin: "https://www.linkedin.com/in/sud-seid-b24b48356/" },
    { name: "Sumeya Awel", role: "Sisters President", university: "ASTU", icon: "fa-crown", gender: "female", linkedin: "#" },
    { name: "Fozia Mohammed", role: "Sisters Project Head", university: "Addis Ababa University", icon: "fa-tasks", gender: "female", linkedin: "https://www.linkedin.com/in/fozia-mohammed-50132730b/" },
    { name: "Hanan Nasir", role: "Sisters Content Head", university: "Arba Minch University", icon: "fa-pen-fancy", gender: "female", linkedin: "https://www.linkedin.com/in/hanan-nasir2014" },
    { name: "Muaz Sani", role: "Production Head", university: "Jimma University", icon: "fa-video", gender: "male", linkedin: "#" },
    { name: "Abdulselam Kemal", role: "Technical Head", university: "Addis Ababa University", icon: "fa-microchip", gender: "male", linkedin: "https://www.linkedin.com/in/ab-adam74" },
    { name: "Rehmet Muhammed", role: "Sisters Technical Head", university: "Bahir Dar University", icon: "fa-code", gender: "female", linkedin: "https://www.linkedin.com/in/rehmet-muhammed777" },
    { name: "Abdulaziz Ayalew", role: "Content Head", university: "AASTU", icon: "fa-newspaper", gender: "male", linkedin: "https://www.linkedin.com/in/abdulaziz-ayalew" },
    { name: "Sitra Seyfu", role: "Sisters Production Head", university: "Jimma University", icon: "fa-video", gender: "female", linkedin: "#" },
    { name: "Imadudin Keremu", role: "Project Manager", university: "Haramaya University", icon: "fa-tasks", gender: "male", linkedin: "#" },
  ];

  const getIconColor = (gender) => {
    if (gender === 'male') return '#3498db';
    if (gender === 'female') return '#e91e63';
    return '#DDA23A';
  };

  return (
    <section className="py-24 relative" id="leadership" style={{ backgroundColor: '#F3F3FF' }}>
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#013463' }}>Guided by Visionaries</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#DDA23A' }}></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {foundingTeam.map((member, index) => (
            <a
              key={index}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center block transition-all hover:-translate-y-2"
              style={{ textDecoration: 'none' }}
            >
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#DDA23A' }}></div>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl relative z-10 mx-auto" style={{ backgroundColor: 'rgba(1, 52, 99, 0.1)', color: getIconColor(member.gender) }}>
                  <i className={`fas ${member.icon}`}></i>
                </div>
              </div>
              <h5 className="font-bold text-sm" style={{ color: '#013463' }}>{member.name}</h5>
              <p className="text-xs font-semibold mt-1" style={{ color: '#DDA23A' }}>{member.role}</p>
              <p className="text-xs text-gray-500 mt-1">{member.university}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}