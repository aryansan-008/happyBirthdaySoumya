import { config } from "../config";
import { AnimatedSection } from "./AnimatedSection";

export const Letter: React.FC = () => (
  <div className="py-20 bg-gray-900">
    <AnimatedSection className="max-w-3xl mx-auto px-4">
      <h2
        className="text-4xl font-bold text-center text-white mb-12"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        A Letter To You
      </h2>
      <div
        className="bg-rose-50 p-8 md:p-12 rounded-lg shadow-2xl"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        <p className="text-3xl text-gray-800 mb-6">{config.letter.greeting}</p>
        <p className="text-2xl text-gray-700 leading-loose whitespace-pre-line">
          {config.letter.body}
        </p>
        <p className="text-3xl text-gray-800 mt-8 text-right">
          {config.letter.closing}
        </p>
        <p className="text-3xl text-gray-800 text-right">You</p>
      </div>
    </AnimatedSection>
  </div>
);
