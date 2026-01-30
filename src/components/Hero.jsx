import React from "react";
import heroImage from "../assets/heroImage.png";

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] relative px-6 md:px-14 py-10 bg-white-light overflow-hidden">

      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-light/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-28 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>

      
      <div className="relative z-10 max-w-2xl mx-auto lg:mx-0 lg:max-w-lg flex flex-col justify-center h-full text-center lg:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          Learn in-demand skills, build your brand. <br /> Get real opportunities.
        </h1>

        <p className="text-lg md:text-xl text-black/70">
          An online incubation academy that equips you with practical skills,
          personal branding, and real work experience.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
          <a
            href="#courses"
            className="bg-brand text-white px-6 py-3 rounded-lg font-semibold shadow-card hover:bg-brand-light transition-colors"
          >
            Explore Courses
          </a>

          <a
            href="#join"
            className="bg-white border border-brand text-brand px-6 py-3 rounded-lg font-semibold shadow-card hover:bg-brand hover:text-white transition-colors"
          >
            Join the Academy
          </a>
        </div>
      </div>

    
      <div className="hidden lg:block absolute right-0 bottom-0 h-full z-0">
        <img
          src={heroImage}
          alt="Hero Illustration"
          className="h-full object-contain"
        />
      </div>

    </section>
  );
};

export default Hero;
