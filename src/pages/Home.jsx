import { useEffect, useState } from "react";

import { searchMovies } from "../services/omdbApi";

import HeroSection from "../components/home/HeroSection";
import HotNews from "../components/home/HotNews";
import MovieRow from "../components/common/MovieRow";

function Home() {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [seriesMovies, setSeriesMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    async function getMovies() {
        const recommended = await searchMovies("Avengers");
        const action = await searchMovies("Batman");
        const comedy = await searchMovies("Friends");
        const top = await searchMovies("Inception");
        const series = await searchMovies("Game of Thrones");

        setRecommendedMovies(recommended);
        setActionMovies(action);
        setComedyMovies(comedy);
        setTopMovies(top);
        setSeriesMovies(series);
    }

    return (
        <div>
            <HeroSection />

            <HotNews />

            <MovieRow
                title="Recommended For You"
                movies={recommendedMovies}
            />

            <MovieRow
                title="Trending Movies"
                movies={actionMovies}
            />

            <MovieRow
                title="Popular Series"
                movies={comedyMovies}
            />

            <MovieRow
                title="IMDb Top Movies"
                movies={topMovies}
            />

            <MovieRow
                title="Trending Series"
                movies={seriesMovies}
            />
        </div>
    );
}

export default Home;