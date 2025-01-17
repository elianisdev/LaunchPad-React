import React from 'react';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

interface MovieCardProps {
    movie: Movie;
    onFavorite: (movie: Movie) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onFavorite }) => {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <button onClick={() => onFavorite(movie)} className="favorite-button">Favorite</button>
        </div>
    );
};