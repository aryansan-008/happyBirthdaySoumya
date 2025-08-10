import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { GiftIcon } from "./Icons";
import { config } from "../config";

export const GiftReveal: React.FC = () => {
  const [isUnwrapping, setIsUnwrapping] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const handleUnwrap = () => {
    if (!isUnwrapping) {
      setIsUnwrapping(true);
      setTimeout(() => setIsRevealed(true), 1000);
    }
  };

  return (
    <div className="py-20 bg-indigo-50">
      <AnimatedSection className="max-w-2xl mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold text-indigo-800 mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A Gift For My Gift
        </h2>
        <div className="relative w-64 h-64 mx-auto">
          {!isRevealed ? (
            <div
              className={`gift-box ${isUnwrapping ? "unwrap" : ""}`}
              onClick={handleUnwrap}
            >
              <div className="lid"></div>
              <div className="box"></div>
            </div>
          ) : (
            <div className="text-center animate-fade-in">
              <GiftIcon className="w-24 h-24 text-pink-500 mx-auto" />
              <h3 className="text-3xl font-bold mt-4 text-indigo-900">
                It's a New {config.gift.name}!
              </h3>
              <p className="mt-2 text-gray-700">{config.gift.message}</p>
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
};
