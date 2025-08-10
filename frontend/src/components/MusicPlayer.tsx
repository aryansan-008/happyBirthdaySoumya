import { useRef, useState } from "react";
import { MusicOffIcon, MusicOnIcon } from "./Icons";
import { config } from "../config";

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((e) => console.error("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} src={config.musicUrl} loop />
      <button
        onClick={toggleMusic}
        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
      >
        {isPlaying ? (
          <MusicOnIcon className="w-6 h-6" />
        ) : (
          <MusicOffIcon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};
