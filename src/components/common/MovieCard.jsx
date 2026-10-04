import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWatchlist } from "../../context/WatchlistContext";

function MovieCard({ movie }) {
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
            className="group w-[150px] shrink-0 cursor-pointer sm:w-[170px] md:w-[180px]"
        >
            <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-[#242424]">
                <img
                    src={
                        movie.Poster && movie.Poster !== "N/A"
                            ? movie.Poster
                            : "/placeholder-movie.jpg"
                    }
                    alt={movie.Title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <button
                    onClick={handleWatchlist}
                    className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/70"
                >
                    <Heart
                        size={17}
                        className={
                            saved
                                ? "fill-[#f5c400] text-[#f5c400]"
                                : "text-white"
                        }
                    />
                </button>

                {movie.imdbRating && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs">
                        <Star
                            size={12}
                            className="fill-[#f5c400] text-[#f5c400]"
                        />

                        <span>{movie.imdbRating}</span>
                    </div>
                )}
            </div>

            <div className="mt-3">
                <h3 className="truncate text-sm font-medium text-white">
                    {movie.Title}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                    {movie.Year} • {movie.Type}
                </p>
            </div>
        </article>
    );
}

export default MovieCard;