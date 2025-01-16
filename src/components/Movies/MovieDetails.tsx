import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    genres: { id: number; name: string }[];
    release_date: string;
}

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
            const data = await response.json();
            setMovie(data);
        };
        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p className="mt-4">{movie.overview}</p>
            <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
        </div>
    );
};

export default MovieDetails;