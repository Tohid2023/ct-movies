import { ChevronRight , ChevronLeft } from "lucide-react";
import React, { useState, useEffect } from "react";


const news = [
  {
    title: "Game of Thrones returns to the spotlight",
    text: "The legendary fantasy series continues to attract viewers with its unforgettable characters, intense battles, and dramatic storylines. Fans are revisiting Westeros and discussing their favorite moments.",
  },
  {
    title: "New movies coming this week",
    text: "Several new movies are arriving across different genres this week, including action, comedy, thriller, and drama. Check out the latest releases and find something interesting to watch.",
  },
  {
    title: "Popular shows everyone is watching",
    text: "From exciting dramas to comedy series, several shows are trending among viewers right now. Discover what people are watching and add your favorites to your watchlist.",
  },
  {
    title: "The latest releases are making waves",
    text: "New movies and series are getting attention from audiences with fresh stories, impressive performances, and exciting visuals. Explore the latest releases and discover your next favorite.",
  },
  {
    title: "What to watch this weekend",
    text: "Looking for something to watch this weekend? Explore popular movies, trending series, and highly rated titles available right now. Find a perfect choice for your next movie night.",
  },
];

function HotNews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    

function nextNews() {
  setCurrentIndex(
    (currentIndex) => (currentIndex + 1) % news.length
  );
}

function previousNews() {
  setCurrentIndex(
    (currentIndex) => (currentIndex - 1 + news.length) % news.length
  );
}

useEffect(() => {
  const interval = setInterval(() => {
    nextNews();
  }, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="mb-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white md:text-2xl">
          Hot News
        </h2>

        <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#f5c400]">
          See all
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="relative rounded-xl border border-[#292929] bg-[#242424] p-5 h-82">
        <div key={currentIndex} className="animate-slide-next">
          <p className="mb-2 text-xs text-[#f5c400]">HOT NEWS</p>

          <h3 className="text-base font-semibold text-white">
            {news[currentIndex].title}
          </h3>

          <p className="mt-2 text-sm leading-5 text-gray-500">
            {news[currentIndex].text}
          </p>

          <button className="mt-2 text-sm text-gray-300 hover:text-[#f5c400]">
            Read more →
          </button>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
          <button
            onClick={previousNews}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:text-black hover:bg-[#f5c400]"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="text-xs text-gray-500">
            {currentIndex + 1}/{news.length}
          </span>

          <button
            onClick={nextNews}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:text-black hover:bg-[#f5c400]"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HotNews;
