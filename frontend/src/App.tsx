import "./App.css";
import { Countdown } from "./components/Countdown";
import { Footer } from "./components/Footer";
import { GiftReveal } from "./components/GiftReveal";
import { Hero } from "./components/Hero";
import { Letter } from "./components/Letter";
import { MusicPlayer } from "./components/MusicPlayer";
import { QualitiesCarousel } from "./components/QualitiesCarousel";
import { StarrySky } from "./components/StarrySky";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <style>
        {`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@300;400&family=Dancing+Script:wght@400;700&display=swap');
                body { background-color: #111827; }
                .font-sans { font-family: 'Lato', sans-serif; }
                .animate-fade-in { animation: fadeIn 1s ease-in-out; }
                .animate-fade-in-slow { animation: fadeIn 2s ease-in-out; }
                @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
                
                .love-card-container { perspective: 1000px; }
                .love-card { position: relative; width: 100%; height: 100%; transition: transform 0.8s; transform-style: preserve-3d; }
                .love-card-container:hover .love-card { transform: rotateY(180deg); }
                .love-card-front, .love-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 0.5rem; }
                .love-card-front { background-color: #1f2937; /* bg-gray-800 */ }
                .love-card-back { background-color: #312e81; /* bg-indigo-900 */ transform: rotateY(180deg); padding: 1rem; }

                .gift-box { position: relative; width: 200px; height: 200px; margin: auto; cursor: pointer; }
                .gift-box .box { position: absolute; bottom: 0; width: 100%; height: 80%; background: #f2a2c0; }
                .gift-box .lid { position: absolute; top: 0; width: 110%; height: 25%; background: #e67a9e; left: -5%; border-radius: 5px; }
                .gift-box::before, .gift-box::after { content: ''; position: absolute; background: #e67a9e; }
                .gift-box::before { width: 15%; height: 100%; left: 42.5%; }
                .gift-box .box::after { content: ''; position: absolute; width: 100%; height: 15%; top: 42.5%; background: #e67a9e; }
                .gift-box.unwrap .lid { animation: unwrap-lid 1s forwards ease-in-out; }
                @keyframes unwrap-lid {
                    0% { transform: translateY(0) rotate(0); }
                    100% { transform: translateY(-100px) rotate(-20deg); opacity: 0; }
                }
                .animate-gift-reveal { animation: giftReveal 0.8s ease-out; }
                @keyframes giftReveal {
                    0% { opacity: 0; transform: translateY(20px) scale(0.9); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                `}
      </style>

      <MusicPlayer />
      <main>
        <Hero />
        <Countdown />
        <Timeline />
        <QualitiesCarousel />
        <Letter />
        <StarrySky />
        <GiftReveal />
        <Footer />
      </main>
    </div>
  );
}

export default App;
