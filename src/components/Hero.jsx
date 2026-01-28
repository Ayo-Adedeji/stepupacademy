import React from "react";
import heroImage from "../assets/heroImage.png"; // Replace with your hero image path

const Hero = () => {
  return (
    <section
      className="w-full min-h-[90vh] relative flex items-center px-6 md:px-14 py-10 overflow-hidden"
      style={{
        background: "linear-gradient(70deg, #6B21A8 0%, #000000 60%, #FFFFFF 90%)",
      }}
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-light rounded-full opacity-30 filter blur-3xl"></div>
      <div className="absolute bottom-0 -right-28 w-96 h-96 bg-black rounded-full opacity-20 filter blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-white rounded-full opacity-10 filter blur-2xl"></div>

      {/* Left Text */}
      <div className="flex-1 flex flex-col justify-center z-10 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Learn in-demand skills, build your brand. <br /> Get real opportunities.
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-lg">
          An online incubation academy that equips you with practical skills, personal branding, and real work experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          {/* Primary Button */}
          <a
            href="#courses"
            className="bg-brand text-white px-6 py-3 rounded-lg font-semibold shadow-card transition-colors hover:bg-brand-light"
          >
            Explore Courses
          </a>

          {/* Secondary Button */}
          <a
            href="#join"
            className="bg-white text-brand px-6 py-3 rounded-lg font-semibold shadow-card transition-colors hover:bg-brand-light hover:text-white"
          >
            Join the Academy
          </a>
        </div>
      </div>

      {/* Right Image */}
     {/* Right Image */}
<div className="flex-1 hidden md:flex justify-end items-end relative z-10 -mr-32 -mb-48">
  <img
    src={heroImage}
    alt="Hero Illustration"
    className="
  w-[140%]
  max-w-none
  object-contain
  drop-shadow-2xl
  translate-y-[-7.5rem]
"

  />
</div>


    </section>
  );
};

export default Hero;
