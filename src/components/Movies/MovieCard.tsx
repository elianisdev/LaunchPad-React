import React from 'react';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

interface MovieCardProps {
    movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">{movie.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{movie.overview}</p>
        </div>
    </div>
);