import { useEffect, useState } from "react";
import { config } from "../config";

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const handleScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-indigo-900 z-0" />
      <div
        className="absolute inset-0 z-10 bg-repeat opacity-20"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
          backgroundPositionY: offset * 0.5,
        }}
      />
      <div className="relative z-20 p-4 animate-fade-in-slow">
        <h1
          className="text-6xl md:text-8xl font-bold tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Happy Birthday, {config.name}
        </h1>
        <p className="text-xl md:text-2xl mt-4 font-light text-indigo-200">
          My Sun, My Moon, and All My Stars
        </p>
      </div>
      <div className="absolute bottom-10 z-20 text-sm animate-bounce flex flex-col items-center">
        <span>Scroll to Discover</span>
        <svg
          className="w-6 h-6 mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </section>
  );
};
