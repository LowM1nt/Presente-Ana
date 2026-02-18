import { useState, useRef } from 'react';
import { Hero } from './components/sections/Hero';
import { Letter } from './components/sections/Letter';
import { Gallery } from './components/sections/Gallery';
import { TimeTogether } from './components/sections/TimeTogether';
import { Timeline } from './components/sections/Timeline';
import { Quiz } from './components/sections/Quiz';
import { Coupons } from './components/sections/Coupons';
import { Footer } from './components/sections/Footer';
import { AudioPlayer, type AudioPlayerHandle } from './components/AudioPlayer';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showCoupons, setShowCoupons] = useState(false);
  const audioRef = useRef<AudioPlayerHandle>(null);

  const handleStart = () => {
    setIsUnlocked(true);
    audioRef.current?.play();
    // Scroll to next section after a small delay
    setTimeout(() => {
      document.getElementById('letter-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className={`min-h-screen bg-kawaii-bg font-body text-gray-800 ${!isUnlocked ? 'h-screen overflow-hidden' : ''}`}>
      <AudioPlayer ref={audioRef} />

      <Hero onStart={handleStart} />

      <div className={`${!isUnlocked ? 'hidden' : 'block'}`}>
        <div id="letter-section">
          <TimeTogether />
          <Letter />
        </div>
        <Gallery />
        <Timeline />
        <Quiz onComplete={() => setShowCoupons(true)} />
        {showCoupons && <Coupons />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
