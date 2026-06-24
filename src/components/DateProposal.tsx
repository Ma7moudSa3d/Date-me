import React, { useState } from 'react';

const PERSUASIVE_MESSAGES = [
  "Are you sure?",
  "Free food though...",
  "Thursday is perfect!",
  "Pretty please?",
  "I'll be on my best behavior!",
  "Think about the dessert...",
  "It'll be fun, I promise!",
  "Don't be like that!",
  "Just one date?",
  "You're breaking my heart! 💔",
  "I'll buy you flowers!",
  "What if I say please?",
  "I'll let you pick the music!",
  "Come on, be adventurous!",
  "Is that your final answer?",
  "I have a surprise for you!",
  "The coffee is on me!",
  "I'll tell you a secret...",
  "You won't regret it!",
  "But I dressed up for this!",
  "Maybe just a quick one?",
  "I'll make you laugh!",
  "You're missing out!",
  "What's the worst that can happen?",
  "I'll be your favorite person!",
  "Is it because of my hair?",
  "I'll bring a puppy! (maybe)",
  "I've been practicing my jokes!",
  "I'll walk you home!",
  "It's just one evening!",
  "Please? With a cherry on top?",
  "I'll let you win at any game!",
  "We can talk about anything!",
  "I'm actually quite charming!",
  "You have a great smile!",
  "I promise not to be boring!",
  "Think of the memories!",
  "Give it a chance?",
  "I'll even wear a tie!",
  "It's a date with destiny!",
  "I'll be there early!",
  "Don't make me beg! (too late)",
  "I'll pay for the parking!",
  "You look lovely today!",
  "Wait, reconsider!",
  "I have good taste, I swear!",
  "It's the best idea ever!",
  "Life is short, say yes!",
  "You're the best!",
  "Okay, how about now?"
];

interface DateProposalProps {
  onYes: () => void;
}

const DateProposal: React.FC<DateProposalProps> = ({ onYes }) => {
  const [noIndex, setNoIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleNoClick = () => {
    setShowMessage(true);
    setNoIndex((prev) => (prev + 1) % PERSUASIVE_MESSAGES.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in zoom-in duration-700">
      <div className="relative">
        {showMessage && (
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-2xl shadow-lg border-2 border-pink-200 text-pink-600 font-medium whitespace-nowrap animate-bounce">
            {PERSUASIVE_MESSAGES[noIndex]}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 text-center drop-shadow-sm">
          Could you go on a date with me?
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
        <button
          onClick={onYes}
          className="px-10 py-4 bg-pink-500 hover:bg-pink-600 text-white text-xl font-bold rounded-full shadow-xl transition-all hover:scale-110 active:scale-95"
        >
          YES! ❤️
        </button>
        <button
          onClick={handleNoClick}
          className="px-10 py-4 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xl font-bold rounded-full shadow-md transition-all active:scale-95 border-2 border-gray-200"
        >
          No
        </button>
      </div>
      
      <div className="mt-12 text-6xl animate-pulse">
        🌹
      </div>
    </div>
  );
};

export default DateProposal;
