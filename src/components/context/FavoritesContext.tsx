
import React, { createContext, useState, ReactNode } from 'react';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

interface FavoritesContextProps {
    favorites: Movie[];
    addFavorite: (movie: Movie) => void;
    removeFavorite: (movie: Movie) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps>({
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
});

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    const addFavorite = (movie: Movie) => {
        setFavorites((prevFavorites) => [...prevFavorites, movie]);
    };

    const removeFavorite = (movie: Movie) => {
        setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== movie.id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};