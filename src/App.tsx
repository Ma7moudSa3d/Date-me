import { useState } from 'react';
import DateProposal from './components/DateProposal';
import LocationPicker from './components/LocationPicker';
import SuccessScreen from './components/SuccessScreen';

type Screen = 'proposal' | 'location' | 'success';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('proposal');
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const handleYes = () => {
    setCurrentScreen('location');
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setCurrentScreen('success');
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white/40 backdrop-blur-md rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/50">
        {currentScreen === 'proposal' && (
          <DateProposal onYes={handleYes} />
        )}
        
        {currentScreen === 'location' && (
          <LocationPicker onSelect={handleLocationSelect} />
        )}
        
        {currentScreen === 'success' && (
          <SuccessScreen location={selectedLocation} />
        )}
      </div>

      {/* Decorative footer elements */}
      <div className="fixed bottom-4 text-pink-300 text-sm font-medium">
        Made with ❤️ for you
      </div>
    </main>
  );
}

export default App;
