import React, { useContext } from 'react';
import { MovieCard } from './MovieCard';
import { FavoritesContext } from '../context/FavoritesContext';

const Favorites: React.FC = () => {
    const { favorites } = useContext(FavoritesContext);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Favorite Movies</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onFavorite={() => {}} />
                ))}
            </div>
        </div>
    );
};

export default Favorites;