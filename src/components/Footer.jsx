import React from "react";
import whitePurpleLogo from "../assets/whitePurpleLogo.png";

const Footer = () => {
  return (
    <footer className="bg-black-light text-white px-6 md:px-14 pt-16 pb-8 relative">
      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-6 mb-10">
        {/* Left - Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
          Join our newsletter to keep up to date with us!
        </h2>

        {/* Right - Input and Button */}
        <div className="flex w-full md:w-auto space-x-4">
          <div className="relative flex-1 md:flex-none">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-80 px-6 py-3 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-shadow"
            />
            {/* <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 glow-purple">
              📧
            </span> */}
          </div>
          <button className="bg-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-light transition-colors glow-purple">
            Subscribe
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mb-8"></div>

      {/* Main Footer Links */}
      <div className="flex flex-col md:flex-row  justify-between items-center md:items-center mb-8 space-y-6 md:space-y-0">
        {/* Left - Logo & Description */}
        <div className="flex flex-col md:flex-col items-center md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <img src={whitePurpleLogo} alt="StepUp Logo" className="w-16 md:w-20" />
          <div>
            <h3 className="text-xl font-bold">StepUp Academy</h3>
            <p className="text-white/70">Innovation and Learning</p>
          </div>
        </div>

        {/* Right - Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
          {/* First Column */}
          <div className="flex flex-col space-y-2">
            <a href="#ai-business" className="hover:text-brand transition-colors">
              AI Business
            </a>
            <a href="#plans-pricing" className="hover:text-brand transition-colors">
              Plans & Pricing
            </a>
            <a href="#platform" className="hover:text-brand transition-colors">
              Platform
            </a>
          </div>
          {/* Second Column */}
          <div className="flex flex-col space-y-2">
            <a href="#company" className="hover:text-brand transition-colors">
              Company
            </a>
            <a href="#blog" className="hover:text-brand transition-colors">
              Blog
            </a>
            <a href="#news" className="hover:text-brand transition-colors">
              News
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mb-4"></div>

      {/* Bottom Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
        <p>© 2026 Code of Solomon</p>
        <p className="mt-2 md:mt-0">StepUp Academy</p>
      </div>
    </footer>
  );
};

export default Footer;
