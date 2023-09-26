import { useState, useEffect } from "react";

const HorizontalScrollDiv = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const scrollWidth =
          document.getElementById("scrollable-div").scrollWidth;
        const clientWidth =
          document.getElementById("scrollable-div").clientWidth;
        const newPosition =
          prevPosition + clientWidth >= scrollWidth ? 0 : prevPosition + 1;
        return newPosition;
      });
    }, 5000); // Adjust the scroll speed as needed (5 seconds in milliseconds)

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  useEffect(() => {
    const element = document.getElementById("scrollable-div");
    element.scrollTo({ left: scrollPosition, behavior: "smooth" });
  }, [scrollPosition]);

  return (
    <div
      id="scrollable-div"
      className="w-full h-48 overflow-x-auto border border-gray-300 whitespace-nowrap"
    >
      <div className="h-full p-4">
        <p className="inline-block mr-4">Content 1</p>
        <p className="inline-block mr-4">Content 2</p>
        <p className="inline-block mr-4">Content 3</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default HorizontalScrollDiv;
