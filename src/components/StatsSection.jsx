import React, { useEffect, useRef, useState } from "react";

// CountUp component for smooth number animation
const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let start = 0;
    const duration = 1500; // animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / end));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}+</span>;
};

const StatsSection = () => {
  return (
    <section className="w-full flex justify-center relative -mt-24 z-10">
      {/* Glass container */}
      <div className="w-[90%] md:w-[70%] bg-black/20 backdrop-blur-md border border-purple-400/30 rounded-3xl shadow-2xl shadow-purple-400/40 flex flex-col md:flex-row justify-around items-center py-12 px-6 gap-8">

        
        {/* Stat 1 */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white glow-purple">
            <CountUp end={50} />
          </h2>
          <p className="text-white/90 mt-2 text-lg md:text-xl">Learners Trained</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white glow-purple">
            <CountUp end={5} />
          </h2>
          <p className="text-white/90 mt-2 text-lg md:text-xl">Countries</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white glow-purple">
            <CountUp end={20} />
          </h2>
          <p className="text-white/90 mt-2 text-lg md:text-xl">Partners</p>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
