import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FaLaptopCode,
  FaUserTie,
  FaProjectDiagram,
  FaBriefcase,
} from "react-icons/fa";

const steps = [
  {
    // number: "01",
    icon: <FaLaptopCode />,
    title: "Learn Practical Skills",
    description:
      "Acquire in-demand on-skills designed to prepare you for real workplace challenges and opportunities.",
  },
  {
    // number: "02",
    icon: <FaUserTie />,
    title: "Build Your Personal Brand",
    description:
      "Strengthen your CV, LinkedIn, and portfolio to confidently position yourself for global career opportunities.",
  },
  {
    // number: "03",
    icon: <FaProjectDiagram />,
    title: "Work on Real Projects & Internships",
    description:
      "Gain practical experience by working on real projects and internships with partner companies.",
  },
  {
    // number: "04",
    icon: <FaBriefcase />,
    title: "Get Hired or Retained",
    description:
      "Leverage your skills and experience to secure paid roles or long-term career placements.",
  },
];

const StepsSection = () => {
  return (
    <section className="w-full pt-40 pb-20 px-6 md:px-14 bg-white-light relative z-0">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          How StepUp Academy Works
        </h2>
        <p className="mt-4 text-black/70 text-lg md:text-xl">
          We are more than just an academy. See how we guide you step-by-step into
          growth, visibility, and career readiness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {steps.map((step, index) => {
          const [ref, isVisible] = useScrollAnimation();

          return (
            <div
              key={step.number}
              ref={ref}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`flex flex-col p-8 bg-white border border-black/10 rounded-3xl shadow-card transition-all duration-500 ease-out transform
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                hover:-translate-y-1 hover:shadow-hover
              `}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl md:text-5xl font-bold text-brand mr-3">
                  {step.number}
                </div>
                <div className="text-3xl md:text-4xl text-brand mr-3">
                  {step.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-black">
                  {step.title}
                </h3>
              </div>

              <p className="text-black/70 text-lg md:text-xl">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StepsSection;
