import React from "react";
import ctaIllustration from "../assets/ctaIllustration.jpg"; // optional illustration

const CTASection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-14 relative overflow-hidden" 
      style={{
        background: "linear-gradient(120deg, #FFFFFF 0%, #F3E8FF 100%)"
      }}
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200 rounded-full opacity-20 filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 -right-28 w-96 h-96 bg-purple-300 rounded-full opacity-15 filter blur-3xl animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10 relative z-10">
        
        {/* Left Side: Text + Button */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black drop-shadow-md">
            Ready to scale up and position yourself for opportunities?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-md mx-auto md:mx-0">
            Join StepUp Academy and get access to practical skills, personal branding strategies, and real-world projects that prepare you for success.
          </p>

          <a
            href="#join"
            className="inline-block bg-brand text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-brand-light hover:shadow-purple-400/50 transition-all duration-500 animate-glow"
          >
            Join StepUp Academy
          </a>
        </div>

        {/* Right Side: Illustration */}
        <div className="flex-1 hidden md:flex justify-center">
          <img
            src={ctaIllustration}
            alt="StepUp Illustration"
            className="w-full rounded-full "
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
