import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/omdbApi";
import MovieRow from "../components/common/MovieRow";

function Search() {
    const [searchParams] = useSearchParams();

    const searchText = searchParams.get("query");

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searchText) {
            getMovies();
        }
    }, [searchText]);

    async function getMovies() {
        setLoading(true);

        const data = await searchMovies(searchText);

        setMovies(data);

        setLoading(false);
    }

    return (
        <div>
            <h1 className="mb-2 text-2xl font-bold text-white">
                Search Results
            </h1>

            <p className="mb-8 text-sm text-gray-500">
                Results for "{searchText}"
            </p>

            {loading ? (
                <p className="text-gray-400">
                    Loading movies...
                </p>
            ) : movies.length > 0 ? (
                <MovieRow
                    title="Movies"
                    movies={movies}
                />
            ) : (
                <p className="text-gray-400">
                    No movies found.
                </p>
            )}
        </div>
    );
}

export default Search;