import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FaLaptopCode, FaUserTie, FaProjectDiagram, FaBriefcase } from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: <FaLaptopCode />,
    title: "Learn Practical Skills",
    description:
      "Acquire in-demand on-skills designed to prepare you for real workplace challenges and opportunities.",
  },
  {
    number: "02",
    icon: <FaUserTie />,
    title: "Build Your Personal Brand",
    description:
      "Strengthen your CV, LinkedIn, and portfolio to confidently position yourself for global career opportunities.",
  },
  {
    number: "03",
    icon: <FaProjectDiagram />,
    title: "Work on Real Projects & Internships",
    description:
      "Gain practical experience by working on real projects and internships with partner companies.",
  },
  {
    number: "04",
    icon: <FaBriefcase />,
    title: "Get Hired or Retained",
    description:
      "Leverage your skills and experience to secure paid roles or long-term career placements.",
  },
];

const StepsSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-14 bg-black-light">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          How StepUp Academy Works
        </h2>
        <p className="mt-4 text-white/90 text-lg md:text-xl">
          We are more than just an academy. See how we guide you step-by-step into growth, visibility, and career readiness.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {steps.map((step, index) => {
          const [ref, isVisible] = useScrollAnimation();

          return (
            <div
              key={step.number}
              ref={ref}
              style={{
                transitionDelay: `${index * 150}ms`, // staggered entrance
              }}
              className={`flex flex-col p-8 bg-black/20 backdrop-blur-md border border-purple-400/30 rounded-3xl shadow-2xl hover:shadow-purple-400/50 transition-all duration-700 ease-out transform
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                hover:-translate-y-2
              `}
            >
              {/* Number + Icon + Title */}
              <div className="flex items-center mb-4">
                <div className="text-4xl md:text-5xl font-bold text-brand glow-purple mr-3">
                  {step.number}
                </div>
                <div className="text-3xl md:text-4xl text-brand glow-purple mr-3">
                  {step.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/90 text-lg md:text-xl">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StepsSection;
