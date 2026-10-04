import { Heart, Play } from "lucide-react";
import { useWatchlist } from "../../context/WatchlistContext";

function HeroSection() {
    const { toggleWatchlist, isInWatchlist } = useWatchlist();

    const movie = {
        imdbID: "tt0944947",
        Title: "Game of Thrones",
        Year: "2011",
        Type: "series",
        Poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZWj0isWauNyOqa94TxAi242q-IzoLJ3Kow-3Qm4ELw&s=10",
    };

    const saved = isInWatchlist(movie.imdbID);

    return (
        <section className="relative mb-8 min-h-[360px] overflow-hidden rounded-2xl bg-[#242424] md:mb-10 md:min-h-[380px]">
            <img
                src={movie.Poster}
                alt={movie.Title}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

            <div className="relative flex min-h-[360px] max-w-2xl flex-col justify-center px-6 py-10 md:min-h-[380px] md:px-10">
                <p className="mb-3 text-sm font-medium text-[#f5c400]">
                    TV Series
                </p>

                <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                    Game of Thrones
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-6 text-gray-300 md:text-base">
                    Nine noble families fight for control over the lands of
                    Westeros, while an ancient enemy returns after being
                    dormant for thousands of years.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-300">
                    <span>2011</span>
                    <span>•</span>
                    <span>8 Seasons</span>
                    <span>•</span>
                    <span>IMDb 9.2</span>
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
                        {saved
                            ? "Remove from Watchlist"
                            : "Add to Watchlist"}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;