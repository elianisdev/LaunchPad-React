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
                        <h1 className="bg-indigo-900 text-center text-4xl font-bold">Movies and Series.</h1>
                        <nav className="text-center">
                            <Link to="/" className="mx-2 px-4 py-2 bg-indigo-900 text-white rounded hover:bg-blue-700 transition duration-300 font-bold">Home </Link>
                            <Link to="/favorites" className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 font-bold">Favorites</Link>
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