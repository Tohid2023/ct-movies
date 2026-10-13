import { Heart, Play } from "lucide-react";
import { useWatchlist } from "../../context/WatchlistContext";
import { useEffect, useState } from "react";
import { searchMovies, getMovieDetails } from "../../services/omdbApi";
import { ChevronLeft , ChevronRight } from "lucide-react";

const HeroSection = () => {
  const { toggleWatchlist, isInWatchlist } = useWatchlist();

  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchHeroMovies() {
      const titles = [
        "Game of Thrones",
        "Avengers",
        "Batman",
        "Inception",
        "Peaky Blinders",
      ];

      const results = await Promise.all(
        titles.map(async (title) => {
          const movies = await searchMovies(title);

          if (!movies.length) return null;

          return getMovieDetails(movies[0].imdbID);
        }),
      );

      setMovies((await Promise.all(results)).filter(Boolean));
    }

    fetchHeroMovies();
  }, []);

  useEffect(() => {
    if (!movies.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  function nextMovie() {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % movies.length);
  }

  function previousMovie() {
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + movies.length) % movies.length,
    );
  }

  if (!movies.length) {
    return (
      <section className="mb-8 min-h-90 rounded-2xl bg-[#242424] md:mb-10 md:min-h-95" />
    );
  }

  const movie = movies[currentIndex];
  const saved = isInWatchlist(movie.imdbID);

  return (
    <section className="relative mb-8 min-h-90 overflow-hidden rounded-2xl bg-[#242424] md:mb-10 md:min-h-95">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/20" />

      <div className="relative flex min-h-90 max-w-2xl flex-col justify-center px-6 py-10 md:min-h-95 md:px-10">
        <p className="mb-3 text-sm font-medium text-[#f5c400]">
          {movie.Type === "series" ? "TV Series" : "Movie"}
        </p>

        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {movie.Title}
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-gray-300 md:text-base">
          {movie.Plot}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-300">
          <span>{movie.Year}</span>
          <span>•</span>
          <span>{movie.Runtime}</span>
          <span>•</span>
          <span>IMDb {movie.imdbRating}</span>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-lg bg-[#f5c400] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd633]">
            <Play size={17} className="fill-current" />
            Watch Now
          </button>

          <button
            onClick={() => toggleWatchlist(movie)}
            className="flex items-center gap-2 rounded-lg border border-gray-500 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Heart
              size={17}
              className={saved ? "fill-[#f5c400] text-[#f5c400]" : ""}
            />
            {saved ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
        </div>
      </div>
      <div className="absolute bottom-5 right-5 flex gap-2">
        <button
          onClick={previousMovie}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#f5c400] hover:text-black"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={nextMovie}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#f5c400] hover:text-black"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
