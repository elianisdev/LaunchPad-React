import React, { useState, useEffect, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { MovieCard } from './MovieCard';
import { FavoritesContext } from '../context/FavoritesContext';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const { addFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        const fetchGenres = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
            const data = await response.json();
            setGenres(data.genres);
        };
        fetchGenres();
    }, []);

    useEffect(() => {
        const fetchMovies = async (page: number, genre: number | null, query: string) => {
            const genreParam = genre ? `&with_genres=${genre}` : '';
            const searchParam = query ? `&query=${query}` : '';
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=${page}${genreParam}${searchParam}`);
            const data = await response.json();
            setMovies(data.results);
            setTotalPages(data.total_pages);
        };
        fetchMovies(currentPage, selectedGenre, searchQuery);
    }, [currentPage, selectedGenre, searchQuery]);

    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected + 1);
    };

    const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGenre(event.target.value ? parseInt(event.target.value) : null);
        setCurrentPage(1);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCurrentPage(1);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Películas Populares</h1>
            <div className="mb-4 flex justify-between items-center">
                <select
                    onChange={handleGenreChange}
                    value={selectedGenre || ''}
                    className="p-2 border rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Todos los Géneros</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    ))}
                </select>
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Buscar películas..."
                        className="p-2 border rounded-l bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Buscar
                    </button>
                </form>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onFavorite={addFavorite} />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <ReactPaginate
                    previousLabel={'Anterior'}
                    nextLabel={'Siguiente'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakLinkClassName={'page-link'}
                />
            </div>
        </div>
    );
};

export default MovieList;