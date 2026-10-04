import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

function MovieRow({ title, movies = [] }) {
  const scrollLeft = () => {
    document
      .getElementById(`movie-row-${title}`)
      ?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    document
      .getElementById(`movie-row-${title}`)
      ?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <section className="mb-8 md:mb-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white md:text-2xl">
          {title}
        </h2>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            onClick={scrollLeft}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#292929] text-gray-400 transition hover:border-[#f5c400] hover:text-[#f5c400]"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={scrollRight}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#292929] text-gray-400 transition hover:border-[#f5c400] hover:text-[#f5c400]"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {movies.length > 0 ? (
        <div
          id={`movie-row-${title}`}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-[#292929] bg-[#242424] p-8 text-center text-sm text-gray-500">
          No movies available.
        </div>
      )}
    </section>
  );
}

export default MovieRow;
