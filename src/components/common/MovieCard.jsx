import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWatchlist } from "../../context/WatchlistContext";

const MovieCard = ({ movie }) => {  
  const navigate = useNavigate();

  const { toggleWatchlist, isInWatchlist } = useWatchlist();

  const saved = isInWatchlist(movie.imdbID);

  function openMovie() {
    navigate(`/movie/${movie.imdbID}`);
  }

  function handleWatchlist(event) {
    event.stopPropagation();

    toggleWatchlist(movie);
  }

  return (
    <article
      onClick={openMovie}
      className=" relative group w-37.5 shrink-0 cursor-pointer sm:w-42.5 md:w-45"
    >
      <div className="relative aspect-2/3 overflow-hidden rounded-xl bg-[#242424]">
        <img
          src={
            movie.Poster && movie.Poster !== "N/A"
              ? movie.Poster
              : "/placeholder-movie.jpg"
          }
          alt={movie.Title}
          className="p-2 h-full w-full object-cover rounded-xl"
        />

        <button
          onClick={handleWatchlist}
          className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-black/70"
        >
          <Heart
            size={17}
            className={saved ? "fill-[#f5c400] text-[#f5c400]" : "text-white"}
          />
        </button>

        <div className=" absolute bottom-2 right-2 left-2 backdrop-blur-md p-2 text-center mt-3 rounded-b-sm">
          <h3 className="truncate text-sm font-medium text-white">
            {movie.Title}
          </h3>

          <p className="mt-1 text-xs text-white">
            {movie.Year} • {movie.Type}
          </p>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;
