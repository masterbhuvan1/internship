// pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);
  const [startScrolling, setStartScrolling] = useState(false);

  useEffect(() => {
    setStartScrolling(true);
  }, []);

  useEffect(() => {
    if (!startScrolling) return;

    const maxScroll = 4; // Number of boxes minus the visible ones.
    const interval = setInterval(() => {
      if (scrollPos >= maxScroll) {
        setScrollPos(0);
      } else {
        setScrollPos((prev) => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [scrollPos, startScrolling]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="overflow-hidden h-24 relative w-1/4">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${scrollPos * 25}%)` }}
        >
          {Array.from({ length: 20 }).map((_, idx) => (
            <div
              key={idx}
              className="flex-none bg-blue-500 w-20 h-20 m-2 text-center line-clamp-1 flex items-center justify-center"
            >
              Box {idx + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
