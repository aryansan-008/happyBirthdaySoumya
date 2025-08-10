import type { ReactNode } from "react";
import { useOnScreen } from "../hooks/useOnScreen";

export const AnimatedSection: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};
