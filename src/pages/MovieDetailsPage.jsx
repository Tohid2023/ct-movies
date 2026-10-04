import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/omdbApi";
import { Heart } from "lucide-react";
import { useWatchlist } from "../context/WatchlistContext";

function MovieDetailsPage() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toggleWatchlist, isInWatchlist } = useWatchlist();
  const saved = isInWatchlist(movie?.imdbID);

  useEffect(() => {
    getMovie();
  }, [id]);

  async function getMovie() {
    const data = await getMovieDetails(id);

    setMovie(data);
    setLoading(false);
  }

  if (loading) {
    return <p className="text-gray-400">Loading movie...</p>;
  }

  if (!movie) {
    return <p className="text-gray-400">Movie not found.</p>;
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-8 md:grid-cols-[280px_1fr]">
        {/* Poster */}
        <div>
          <img
            src={
              movie.Poster !== "N/A" ? movie.Poster : "/placeholder-movie.jpg"
            }
            alt={movie.Title}
            className="w-full rounded-xl"
          />
        </div>

        {/* Movie Information */}
        <div>
          <p className="mb-2 text-sm text-[#f5c400]">{movie.Type}</p>

          <h1 className="text-3xl font-bold text-white md:text-4xl">
            {movie.Title}
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            {movie.Year} • {movie.Runtime}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <span className="text-[#f5c400]">★</span>

            <span className="text-white">{movie.imdbRating}</span>
            

            <span className="text-gray-500">IMDb</span>
            
          </div>
          <button
            onClick={() => toggleWatchlist(movie)}
            className="mt-6 flex items-center gap-2 rounded-lg border border-[#f5c400] px-4 py-3 text-sm font-medium text-[#f5c400] transition hover:bg-[#f5c400] hover:text-black"
          >
            <Heart size={18} className={saved ? "fill-current" : ""} />
            {saved ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
          

          <p className="mt-6 leading-7 text-gray-400">{movie.Plot}</p>

          <div className="mt-6 space-y-3 text-sm">
            <p>
              <span className="text-gray-500">Genre:</span>{" "}
              <span className="text-white">{movie.Genre}</span>
            </p>

            <p>
              <span className="text-gray-500">Director:</span>{" "}
              <span className="text-white">{movie.Director}</span>
            </p>

            <p>
              <span className="text-gray-500">Actors:</span>{" "}
              <span className="text-white">{movie.Actors}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
