// components/WordSlider.js
import { useState, useEffect } from "react";

const words = ["learning", "academic"];
const duration = 2000; // Duration in milliseconds for each word

const WordSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-16 transi  text-yellow-400 flex items-center justify-start text-7xl font-bold">
      {words[currentIndex]}
    </div>
  );
};

export default WordSlider;
