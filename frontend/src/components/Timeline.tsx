import { config } from "../config";
import { AnimatedSection } from "./AnimatedSection";
import { StarIcon } from "./Icons";

export const Timeline: React.FC = () => (
  <div className="py-20 bg-indigo-50">
    <AnimatedSection className="max-w-4xl mx-auto px-4">
      <h2
        className="text-4xl font-bold text-center text-indigo-800 mb-16"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Our Story in Time
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 w-0.5 h-full bg-indigo-200 -translate-x-1/2"></div>
        {config.timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`mb-12 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-5/12"></div>
            <div className="z-10">
              <StarIcon className="w-8 h-8 text-yellow-500 bg-white rounded-full p-1 shadow-md" />
            </div>
            <div className="w-5/12 bg-white p-6 rounded-lg shadow-xl border-t-4 border-pink-400">
              <p className="text-sm font-semibold text-pink-500 mb-1">
                {event.date}
              </p>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  </div>
);
