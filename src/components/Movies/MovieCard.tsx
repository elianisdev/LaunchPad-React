import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
    movie: {
        id: number;
        title: string;
        poster_path: string;
    };
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <div className="movie-card" onClick={handleClick}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
        </div>
    );
};