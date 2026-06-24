import React, { useState } from 'react';
import { sendDateConfirmation } from './EmailService';

interface LocationPickerProps {
  onSelect: (location: string) => void;
}

const locations = [
  { id: 'maadi', name: 'المعادي', icon: '🌳' },
  { id: 'downtown', name: 'وسط البلد', icon: '🏛️' },
  { id: 'korba', name: 'الكربة', icon: '🏘️' },
  { id: 'other', name: 'مكان تاني', icon: '✨' }
];

const LocationPicker: React.FC<LocationPickerProps> = ({ onSelect }) => {
  const [loading, setLoading] = useState<string | null>(null);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customLocation, setCustomLocation] = useState('');

  const handleSelect = async (locationId: string, locationName: string) => {
    // لو ضغط على "مكان تاني" نفتح الـ input
    if (locationId === 'other') {
      setShowCustomInput(true);
      return;
    }

    setLoading(locationId);
    try {
      await sendDateConfirmation(locationName);
    } catch (error) {
      console.error("Failed to send email, but proceeding anyway...");
    }
    onSelect(locationName);
  };

  const handleCustomSubmit = async () => {
    const trimmed = customLocation.trim();
    if (!trimmed) {
      alert('من فضلك اكتب اسم المكان 💕');
      return;
    }

    setLoading('other');
    try {
      await sendDateConfirmation(trimmed);
    } catch (error) {
      console.error("Failed to send email, but proceeding anyway...");
    }
    onSelect(trimmed);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in slide-in-from-right duration-700">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 text-center">
        Where would you like to go?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl px-4">
        {locations.map((loc) => (
          <button
            key={loc.id}
            disabled={loading !== null}
            onClick={() => handleSelect(loc.id, loc.name)}
            className={`group relative flex flex-col items-center p-6 bg-white rounded-3xl shadow-lg border-2 transition-all hover:scale-105 active:scale-95 ${
              showCustomInput && loc.id === 'other'
                ? 'border-pink-500 ring-2 ring-pink-300'
                : 'border-transparent hover:border-pink-300'
            } ${loading === loc.id ? 'opacity-50 ring-2 ring-pink-400' : ''}`}
          >
            <span className="text-5xl mb-3 group-hover:scale-110 transition-transform">
              {loc.icon}
            </span>
            <span className="text-xl font-bold text-gray-700">
              {loc.name}
            </span>
            {loading === loc.id && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/50 rounded-3xl">
                <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* الـ Input بتاع المكان التاني */}
      {showCustomInput && (
        <div className="w-full max-w-md px-4 animate-in slide-in-from-bottom duration-500">
          <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-pink-200">
            <label className="block text-pink-600 font-bold mb-3 text-lg">
              اكتب المكان اللي تحبيه ✨
            </label>
            <input
              type="text"
              value={customLocation}
              onChange={(e) => setCustomLocation(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCustomSubmit()}
              placeholder="مثلاً: الزمالك، التجمع، النيل..."
              className="w-full px-4 py-3 text-lg border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-colors"
              autoFocus
              dir="rtl"
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleCustomSubmit}
                disabled={loading !== null}
                className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading === 'other' ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  'Submit 💕'
                )}
              </button>
              <button
                onClick={() => {
                  setShowCustomInput(false);
                  setCustomLocation('');
                }}
                disabled={loading !== null}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-xl transition-all disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <p className="text-pink-400 font-medium">I'll pick you up on Thursday! ✨</p>
    </div>
  );
};

export default LocationPicker;