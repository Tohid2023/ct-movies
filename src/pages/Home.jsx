import { useEffect, useState } from "react";
import { getMovieDetails, searchMovies } from "../services/omdbApi";

import HeroSection from "../components/home/HeroSection";
import HotNews from "../components/home/HotNews";
import MovieRow from "../components/common/MovieRow";
import FeaturedBanner from "../components/common/FeaturedBanner";
import FeatureCards from "../components/common/FeatureCards";

function Home() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [seriesMovies, setSeriesMovies] = useState([]);

  const [featuredMovie, setFeatureMovie] = useState([]);
  const [featureCards, setFeatureCards] = useState([]);

  useEffect(() => {
    async function fetchedFeatureMovie() {
      const peakyResults = await searchMovies("Peaky Blinders");
      const batmanResults = await searchMovies("Batman");

      const movies = [];

      if (peakyResults.length > 0) {
        movies.push(await getMovieDetails(peakyResults[0].imdbID));
      }

      if (batmanResults.length > 0) {
        movies.push(await getMovieDetails(batmanResults[0].imdbID));
      }

      setFeatureMovie(movies);
    }

    fetchedFeatureMovie();
  }, []);

  useEffect(() => {
    async function fetchedFeatureMovie() {
      const shogunResults = await searchMovies("Shogun");
      const symapathizerResults = await searchMovies("The Sympathizer");
      const smallResults = await searchMovies("A Small Light");

      const movies = [];

      if (shogunResults.length > 0) {
        movies.push(await getMovieDetails(shogunResults[0].imdbID));
      }

      if (symapathizerResults.length > 0) {
        movies.push(await getMovieDetails(symapathizerResults[0].imdbID));
      }

      if (smallResults.length > 0) {
        movies.push(await getMovieDetails(smallResults[0].imdbID));
      }

      setFeatureCards(movies);
    }

    fetchedFeatureMovie();
  }, []);

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
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
        <HeroSection />

        <HotNews />
      </div>

      <MovieRow title="Recommended For You" movies={recommendedMovies} />

      <MovieRow title="Trending Movies" movies={actionMovies} />

      {featuredMovie.length > 0 && <FeaturedBanner movie={featuredMovie[0]} />}

      <MovieRow title="Popular Series" movies={comedyMovies} />

      <FeatureCards movies={featureCards}/>

      <MovieRow title="IMDb Top Movies" movies={topMovies} />

      <MovieRow title="Trending Series" movies={seriesMovies} />

      {featuredMovie.length > 0 && <FeaturedBanner movie={featuredMovie[1]} />}
      
    </div>
  );
}

export default Home;
