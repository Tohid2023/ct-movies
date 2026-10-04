import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from "./pages/Home"
import Search from "./pages/Search"
import MovieDetailsPage from "./pages/MovieDetailsPage"
import Watchlist from "./pages/Watchlist"
import { Navigate } from 'react-router-dom';

const App = () => {
  return (
      
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/movie/:id" element={<MovieDetailsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}

export default App