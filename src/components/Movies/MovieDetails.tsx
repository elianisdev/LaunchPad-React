import React from 'react';
import { useParams } from 'react-router-dom';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
}

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = React.useState<Movie | null>(null);

    React.useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
            const data = await response.json();
            setMovie(data);
        };
        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full md:w-1/4 rounded-lg shadow-lg" // Cambiado de md:w-1/3 a md:w-1/4
                />
                <div className="md:ml-8 mt-4 md:mt-0">
                    <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                    <p className="text-gray-700 mb-4">{movie.overview}</p>
                    <p className="text-gray-500 mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
                    <p className="text-gray-500 mb-2"><strong>Rating:</strong> {movie.vote_average}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;