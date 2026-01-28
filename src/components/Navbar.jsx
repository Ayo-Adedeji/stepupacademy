import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import whiteLogo from "../assets/whiteLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="px-14 py-4 flex items-center justify-between relative"
      style={{
        background: "linear-gradient(70deg, #6B21A8 0%, #000000 50%, #FFFFFF 86%)",
      }}
    >
      {/* Logo */}
      <div>
        <img src={whiteLogo} alt="logo" className="w-24" />
      </div>

      {/* Middle Links - large screens */}
      <div className="hidden md:flex flex-1 justify-center">
        <div
          className="
            flex space-x-10 px-6 py-3 text-xl font-semibold rounded-full
            bg-white/70 backdrop-blur-md
            border border-brand/40
            shadow-lg shadow-brand/20
            transition-all duration-300
            hover:shadow-brand/40
          "
        >
          <a href="#home" className="text-black hover:text-brand transition-colors">
            Home
          </a>
          <a href="#courses" className="text-black hover:text-brand transition-colors">
            Courses
          </a>
          <a href="#lms" className="text-black hover:text-brand transition-colors">
            LMS
          </a>
          <a href="#about" className="text-black hover:text-brand transition-colors">
            About Us
          </a>
          <a href="#testimonials" className="text-black hover:text-brand transition-colors">
            Testimonials
          </a>
        </div>
      </div>

      {/* Contact Link - large screens */}
      <div className="hidden md:block">
        <a
          href="#contact"
          className="
            px-6 py-3 text-lg font-semibold
            bg-white/70 backdrop-blur-md
            border border-brand/40
            text-black
            shadow-lg shadow-brand/30
            transition-all duration-300
            hover:bg-brand/90 hover:text-white
            hover:shadow-brand/50
          "
        >
          Contact
        </a>
      </div>

      {/* Hamburger menu - small screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t-4 border-brand-dark z-50 flex flex-col items-center py-4 md:hidden">
          <div className="flex flex-col space-y-4 w-full items-center">
            <a href="#home" className="text-black hover:text-brand transition-colors">
              Home
            </a>
            <a href="#courses" className="text-black hover:text-brand transition-colors">
              Courses
            </a>
            <a href="#lms" className="text-black hover:text-brand transition-colors">
              LMS
            </a>
            <a href="#about" className="text-black hover:text-brand transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="text-black hover:text-brand transition-colors">
              Testimonials
            </a>
            <a
              href="#contact"
              className="
                text-white bg-brand-dark px-4 py-2 rounded-md
                transition-colors hover:bg-brand-light mt-2
              "
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
