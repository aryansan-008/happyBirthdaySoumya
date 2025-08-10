import { AnimatedSection } from "./AnimatedSection";
import { config } from "../config";
import { HeartIcon } from "./Icons";

export const QualitiesCarousel: React.FC = () => {
  return (
    <div className="py-20 bg-gray-900">
      <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold text-white mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Reasons I Love You
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {config.qualities.map((quality, i) => (
            <div key={i} className="love-card-container h-48">
              <div className="love-card">
                <div className="love-card-front">
                  <HeartIcon className="w-16 h-16 text-pink-400" />
                </div>
                <div className="love-card-back">
                  <h3 className="font-bold text-lg text-pink-500">
                    {quality.title}
                  </h3>
                  <p className="text-sm mt-2 text-indigo-200">
                    {quality.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};
