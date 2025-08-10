import { useRef, useState, useEffect } from "react";
import { config } from "../config";
import { AnimatedSection } from "./AnimatedSection";

export const StarrySky: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [namedStar, setNamedStar] = useState<{
    x: number;
    y: number;
    progress: number;
  } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random() * 0.5 + 0.5,
      twinkle: Math.random() * 0.02,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.alpha += star.twinkle;
        if (star.alpha > 1 || star.alpha < 0.5) star.twinkle *= -1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      if (namedStar) {
        const { x, y, progress } = namedStar;
        const maxRadius = 15;
        const currentRadius = maxRadius * progress;
        const glowAlpha = 0.5 * progress;
        const starSize = 8 * progress;

        // Pulsating glow
        const pulse = Math.sin(Date.now() * 0.005) * 0.2 + 0.8;
        ctx.beginPath();
        ctx.arc(x, y, currentRadius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 0, ${glowAlpha * pulse * 0.5})`;
        ctx.shadowColor = "yellow";
        ctx.shadowBlur = 30 * progress * pulse;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw the star shape (cross)
        ctx.strokeStyle = `rgba(255, 255, 224, ${progress})`;
        ctx.lineWidth = 3 * progress;
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * (2 * Math.PI);
          const length = i % 2 === 0 ? starSize : starSize / 2;
          ctx.moveTo(x, y);
          ctx.lineTo(
            x + Math.cos(angle) * length,
            y + Math.sin(angle) * length
          );
        }
        ctx.stroke();

        // Draw the name
        ctx.fillStyle = `rgba(255, 255, 0, ${progress})`;
        ctx.font = `bold ${18 * progress}px "Playfair Display", serif`;
        ctx.textAlign = "center";
        ctx.fillText(config.name, x, y - 25);
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [namedStar]);

  useEffect(() => {
    if (namedStar && namedStar.progress < 1) {
      let start: number | null = null;
      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / 1000, 1); // 1 second animation
        setNamedStar((ns) => (ns ? { ...ns, progress } : null));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [namedStar?.x, namedStar?.y]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!namedStar) {
      const rect = canvasRef.current!.getBoundingClientRect();
      setNamedStar({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        progress: 0,
      });
    }
  };

  return (
    <div className="py-20 bg-indigo-50">
      <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold text-indigo-800 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          I Named a Star For You
        </h2>
        <p className="text-gray-600 mb-8">
          {namedStar
            ? `It's official! A star in our sky, named just for you.`
            : `Click on the sky to name a star after ${config.name}.`}
        </p>
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          className="w-full h-96 bg-gradient-to-b from-gray-900 to-indigo-900 rounded-lg cursor-pointer"
        ></canvas>
      </AnimatedSection>
    </div>
  );
};
