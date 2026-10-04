import MovieRow from "../components/common/MovieRow";
import { useWatchlist } from "../context/WatchlistContext";

function Watchlist() {
    const { watchlist } = useWatchlist();

    return (
        <div>
            <h1 className="mb-2 text-2xl font-bold text-white">
                My Watchlist
            </h1>

            <p className="mb-8 text-sm text-gray-500">
                Movies and series you have saved
            </p>

            {watchlist.length > 0 ? (
                <MovieRow
                    title="Saved Movies"
                    movies={watchlist}
                />
            ) : (
                <div className="rounded-xl border border-[#292929] bg-[#242424] p-10 text-center">
                    <h2 className="text-lg font-medium text-white">
                        Your watchlist is empty
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Add movies to your watchlist and they will appear here.
                    </p>
                </div>
            )}
        </div>
    );
}

export default Watchlist;