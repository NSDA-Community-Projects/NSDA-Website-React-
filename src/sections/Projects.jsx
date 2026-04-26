import React from "react";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="px-8 py-20">

      {/* HERO */}
      <div className="max-w-4xl mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          Open Source Initiative
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-[#001f3f] leading-tight">
          Open Source Ecosystem:{" "}
          <span className="text-[#c89b3c] italic">
            Building for the Ummah
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          We build tools that solve problems within the community while
          following modern engineering best practices.
        </p>
      </div>

      {/* TOP PROJECTS */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">

        {/* BIG CARD */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-bold">{projects[0].name}</h3>
          <p className="mt-4 text-gray-600">{projects[0].description}</p>
          <span className="text-sm text-gray-500">{projects[0].tech}</span>
        </div>

        {/* SMALL CARD */}
        <div className="bg-[#001f3f] text-white p-6 rounded-xl">
          <h3 className="text-xl font-bold">{projects[1].name}</h3>
          <p className="mt-4 text-sm">{projects[1].description}</p>
        </div>

      </div>

      {/* FEATURED */}
      <div className="bg-gray-100 p-10 rounded-2xl mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {projects[2].name}
        </h2>

        <p className="text-gray-600 mb-6">
          {projects[2].description}
        </p>

        <button className="bg-[#001f3f] text-white px-6 py-3 rounded-lg">
          Launch Project
        </button>
      </div>

      {/* CTA */}
      <div className="bg-[#001f3f] text-white p-10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">
          Join the Digital Jihad
        </h2>

        <p className="mb-6 text-gray-300">
          Contribute to our open source ecosystem.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">
          Explore GitHub Repositories
        </button>
      </div>

    </section>
  );
}

export default Projects;