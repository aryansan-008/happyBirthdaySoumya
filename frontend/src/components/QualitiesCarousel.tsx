import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { config } from "../config";

export const QualitiesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % config.qualities.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + config.qualities.length) % config.qualities.length
    );

  return (
    <div className="py-20 bg-gray-900 text-white">
      <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A Million Reasons Why
        </h2>
        <p className="text-indigo-300 mb-12">Here are just a few...</p>
        <div className="relative h-64 flex items-center justify-center">
          {config.qualities.map((q, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
            >
              <h3 className="text-3xl font-bold text-pink-400">{q.title}</h3>
              <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
                {q.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prev}
            className="px-6 py-2 bg-indigo-700 rounded-full hover:bg-indigo-600 transition-colors"
          >
            Prev
          </button>
          <button
            onClick={next}
            className="px-6 py-2 bg-pink-500 rounded-full hover:bg-pink-400 transition-colors"
          >
            Next
          </button>
        </div>
      </AnimatedSection>
    </div>
  );
};
