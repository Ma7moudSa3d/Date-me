import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface SuccessScreenProps {
  location: string;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ location }) => {
  useEffect(() => {
    // Launch confetti on mount
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in zoom-in duration-1000 text-center relative overflow-hidden">
      {/* Floating Hearts CSS Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-heart text-2xl opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * (40 - 20) + 20}px`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="z-10 space-y-6 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 drop-shadow-lg">
          It's a date! ❤️
        </h1>
        
        <div className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-pink-100 inline-block">
          <p className="text-2xl md:text-3xl font-bold text-gray-800">
            Thursday at <span className="text-pink-500">{location}</span>
          </p>
        </div>
        
        <div className="text-8xl mt-8">
          👩‍❤️‍👨
        </div>
        
        <p className="text-pink-400 italic font-medium animate-pulse">
          Can't wait to see you!
        </p>
      </div>

      <style>{`
        @keyframes float-heart {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-20vh) scale(1.5);
            opacity: 0;
          }
        }
        .animate-float-heart {
          animation: float-heart 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SuccessScreen;
