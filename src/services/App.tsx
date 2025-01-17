import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import MovieList from '../components/Movies/MovieList';
import MovieDetails from '../components/Movies/MovieDetails';
import Favorites from '../components/Movies/Favorites';
import { FavoritesProvider } from '../components/context/FavoritesContext';

const App: React.FC = () => {
    return (
        <FavoritesProvider>
            <BrowserRouter>
                <div className="bg-gray-100 min-h-screen">
                    <header className="bg-blue-600 text-white py-4">
                        <h1 className="text-center text-2xl font-bold">Movies and Series</h1>
                        <nav className="text-center">
                            <Link to="/" className="mx-2">Home</Link>
                            <Link to="/favorites" className="mx-2">Favorites</Link>
                        </nav>
                    </header>
                    <main className="py-8">
                        <Routes>
                            <Route path="/" element={<MovieList />} />
                            <Route path="/movie/:id" element={<MovieDetails />} />
                            <Route path="/favorites" element={<Favorites />} />
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </FavoritesProvider>
    );
};

export default App;