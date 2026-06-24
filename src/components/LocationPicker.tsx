import React, { useState } from 'react';
import { sendDateConfirmation } from './EmailService';
import { sendDateEmail } from '../services/emailService';

interface LocationPickerProps {
  onSelect: (location: string) => void;
}

const locations = [
  { id: 'maadi', name: 'المعادي', icon: '🌳' },
  { id: 'downtown', name: 'وسط البلد', icon: '🏛️' },
  { id: 'korba', name: 'الكربة', icon: '🏘️' }
];

const LocationPicker: React.FC<LocationPickerProps> = ({ onSelect }) => {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSelect = async (location: string) => {
    setLoading(location);
    try {
      await sendDateConfirmation(location);
    } catch (error) {
      console.error("Failed to send email, but proceeding anyway...");
    }
    onSelect(location);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in slide-in-from-right duration-700">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 text-center">
        Where would you like to go?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl px-4">
        {locations.map((loc) => (
          <button
            key={loc.id}
            disabled={loading !== null}
            onClick={() => handleSelect(loc.name)}
            className={`group relative flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg border-2 border-transparent hover:border-pink-300 transition-all hover:scale-105 active:scale-95 ${
              loading === loc.name ? 'opacity-50 ring-2 ring-pink-400' : ''
            }`}
          >
            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">
              {loc.icon}
            </span>
            <span className="text-2xl font-bold text-gray-700">
              {loc.name}
            </span>
            {loading === loc.name && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/50 rounded-3xl">
                <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </button>
        ))}
      </div>
      
      <p className="text-pink-400 font-medium">I'll pick you up on Thursday! ✨</p>
    </div>
  );
};

export default LocationPicker;
