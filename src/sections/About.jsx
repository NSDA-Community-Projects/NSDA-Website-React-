import React from "react";
import { FaLightbulb, FaEye, FaSeedling, FaUsers, FaRobot } from "react-icons/fa";
import man from "../assets/man.jpg";
import star from "../assets/star.jpg";

export default function About() {
  return (
    <div className="bg-white">

    <section className="relative h-screen flex items-center overflow-hidden">

  {/* FULL BACKGROUND */}
  <img
    src={star}
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* CONTENT */}
  <div className="w-full px-6 md:px-16 relative z-10 flex justify-end">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div>
        <p className="text-xs tracking-widest uppercase text-[#DDA23A] mb-3">
          Our Identity
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#013463]">
          Bridging Sacred Wisdom and{' '}
          <span className="text-[#DDA23A]">Silicon Innovation</span>
        </h1>

        <p className="mt-5 text-gray-600 max-w-md">
          Nurturing a generation of developers who build for the dunya while securing their akhirah.
        </p>
      </div>

    </div>
  </div>

</section>
      {/* MISSION + VISION */}
      <section className="bg-[#f4f7fb] py-20 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition hover:-translate-y-2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 mb-4">
              <FaLightbulb className="text-[#DDA23A]  animate-pulse" />
            </div>
            <h3 className="text-lg text-[#013463] font-semibold mb-2">Mission</h3>
            <p className="text-gray-600 text-sm">
              To empower Muslim students across the nation by providing mentorship, learning opportunities, and collaborative platforms rooted in Islamic values.
            </p>
          </div>

          <div className="group bg-[#0b2545] text-white p-8 rounded-3xl shadow-md hover:shadow-xl transition hover:-translate-y-2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-40 mb-4">
              <FaEye className="text-[#DDA23A]  " />
            </div>
            <h3 className="text-lg text-white-200 font-semibold mb-2">Vision</h3>
            <p className="text-sm text-gray-200">
              To be the leading Muslim developer community that nurtures faith-driven tech talent and creates lasting impact through technology.
            </p>
          </div>

        </div>
      </section>

      {/* GENESIS */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
           src={man}
            alt="Founder"
            className="rounded-3xl object-cover w-full h-[450px]"
          />

          <div>
            <p className="text-xs uppercase text-[#DDA23A]  mb-2">The Genesis</p>
            <h2 className="text-2xl text-[#013463] md:text-3xl font-bold mb-4">Founded on March 31, 2025</h2>

            <p className="text-gray-600 text-sm mb-6">
              NSDA was founded through the collaboration of students from multiple universities, united by a shared vision to uplift the Ummah through technology. It aims to build a faith-driven tech community that empowers Muslim students with purpose, knowledge, and support.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12  flex items-center justify-center rounded-full bg-blue-50 ">
                  <FaSeedling className="text-[#013463] animate-bounce" />
                </div>
                 <h3 className="text-lg text-[#013463] font-semibold mb-2">Rooted in Purpose</h3>

              </div>
               <p className="text-gray-600 text-sm">
              Every line of code is an act of stewardship over the digital realm. </p>

              <div className="flex items-center gap-3">
                 <div className="w-12 h-12  flex items-center justify-center rounded-full bg-blue-50 ">
                  <FaUsers className="text-[#013463]  animate-bounce" />
                </div>
                <div>

                  <h3 className="text-lg text-[#013463] font-semibold mb-2">Student-Led Growth</h3>
                </div>
              
            </div>
            <p className="text-gray-600 text-sm">
                Built by students, for students, fostering a peer-to-peer ecosystem of excellence.
            </p>
          </div>

       
        </div>
         </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#f4f7fb] py-20 px-6 md:px-16">

        <div className="text-center mb-12">
          <h2 className="text-2xl text-[#013463] md:text-3xl font-bold mb-2">Our Core Values</h2>
          <p className="text-black-500 text-md">Foundational principles that guide every algorithm we write and every community we build.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="group bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition hover:-translate-y-2">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-3">
              <FaRobot className="text-[#013463]  animate-pulse" />
            </div>
            <h4 className="font-semibold text-[#013463]">Ethical AI</h4>
            <p className="text-black-600 text-sm">
  Developing intelligent systems that respect human dignity,privacy and divine principles of justice. </p>
          </div>

          <div className="group bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition hover:-translate-y-2">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-3">
              <FaSeedling className="text-[#013463] animate-pulse" />
            </div>
            <h4 className="font-semibold text-[#013463]">Sadaqah Jariyah</h4>
            <p className="text-black-600 text-sm">  Building open-source tools that serve humanity as a form perpetual charity long after the code written.</p>
          </div>

          <div className="group bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition hover:-translate-y-2">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-3">
              <FaUsers className="text-[#013463]  animate-pulse" />
            </div>
             <h4 className="text-lg text-[#013463] font-semibold mb-2">Community Growth</h4>
            <p className="text-black-600 text-sm">
              Nuturing an environment where ever developer lifts another, creating a collective chain of technical mastery.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="bg-gradient-to-r from-[#0b2545] to-[#1e4b7a] text-white rounded-3xl p-10 text-center">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build for the Sanctuary?</h2>

          <p className="text-gray-300 text-sm mb-6">Join our community of student developers and start your journey of technical and spritiual excellence. .</p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-medium">
              Apply for Membership
            </button>

            <button className="px-6 py-2 bg-white-700 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition">
              Explore Projects
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b2545] text-gray-300 text-sm py-6 px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 NSDA. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Contact</span>
          </div>
        </div>
      </footer>

    </div>
  );
}