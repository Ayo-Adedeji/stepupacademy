import React, { useEffect, useState } from "react";

const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.max(20, duration / end);

    const timer = setInterval(() => {
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
    <section className="relative w-full h-0 z-20">
      <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-[90%] md:w-[70%] bg-white border border-black/10 rounded-3xl shadow-2xl flex flex- md:flex-row justify-around items-center py-12 px-6 gap-8">
        
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-brand">
            <CountUp end={50} />
          </h2>
          <p className="text-black/70 mt-2 text-md font-semibold md:text-xl">Trained</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-brand">
            <CountUp end={5} />
          </h2>
          <p className="text-black/70 mt-2 text-md font-semibold md:text-xl">Countries</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-brand">
            <CountUp end={20} />
          </h2>
          <p className="text-black/70 mt-2 text-md font-semibold md:text-xl">Partners</p>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
