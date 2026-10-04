import { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

function WatchlistProvider({ children }) {
    const [watchlist, setWatchlist] = useState(() => {
        const savedMovies = localStorage.getItem("watchlist");

        if (savedMovies) {
            return JSON.parse(savedMovies);
        }

        return [];
    });

    function addToWatchlist(movie) {
        const alreadyAdded = watchlist.some(
            (item) => item.imdbID === movie.imdbID
        );

        if (alreadyAdded) {
            return;
        }

        const newWatchlist = [...watchlist, movie];

        setWatchlist(newWatchlist);

        localStorage.setItem(
            "watchlist",
            JSON.stringify(newWatchlist)
        );
    }

    function removeFromWatchlist(movieId) {
        const newWatchlist = watchlist.filter(
            (movie) => movie.imdbID !== movieId
        );

        setWatchlist(newWatchlist);

        localStorage.setItem(
            "watchlist",
            JSON.stringify(newWatchlist)
        );
    }

    function toggleWatchlist(movie) {
        const alreadyAdded = watchlist.some(
            (item) => item.imdbID === movie.imdbID
        );

        if (alreadyAdded) {
            removeFromWatchlist(movie.imdbID);
        } else {
            addToWatchlist(movie);
        }
    }

    function isInWatchlist(movieId) {
        return watchlist.some(
            (movie) => movie.imdbID === movieId
        );
    }

    return (
        <WatchlistContext.Provider
            value={{
                watchlist,
                addToWatchlist,
                removeFromWatchlist,
                toggleWatchlist,
                isInWatchlist,
            }}
        >
            {children}
        </WatchlistContext.Provider>
    );
}

export function useWatchlist() {
    return useContext(WatchlistContext);
}

export default WatchlistProvider;