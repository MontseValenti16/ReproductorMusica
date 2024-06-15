import { useState, useRef, useEffect } from 'react';
import Controls from '../molecules/Controls';
import canciones from '../../audios/canciones';
import './Music.css';

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicaIndex, setCurrentMusicaIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentMusicaIndex, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handleNext = () => {
    setCurrentMusicaIndex((prevIndex) => (prevIndex + 1) % canciones.length);
  };

  const handlePrevious = () => {
    setCurrentMusicaIndex((prevIndex) => 
      prevIndex === 0 ? canciones.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id='music-player'>
      <audio ref={audioRef} src={canciones[currentMusicaIndex].src} controls />
      <Controls 
        isPlaying={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
      <div>
        <h3 id='track-info'> {canciones[currentMusicaIndex].title}</h3>
      </div>
    </div>
  );
}

export default Music;
