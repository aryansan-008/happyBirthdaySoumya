import { useEffect, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { config } from "../config";

export const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date() - +new Date(config.meetDate);
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="py-20 bg-gray-900">
      <AnimatedSection className="text-center text-white">
        <h2
          className="text-4xl font-bold mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Journey in Time
        </h2>
        <div className="flex justify-center space-x-4 md:space-x-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col items-center bg-indigo-900/50 p-4 rounded-lg w-24"
            >
              <span className="text-4xl md:text-5xl font-bold text-pink-400">
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-sm text-indigo-200 mt-2 uppercase">
                {unit}
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};
