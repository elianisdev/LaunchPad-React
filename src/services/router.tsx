import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "../pages/RouterLayout.tsx";
import MovieList from "../components/Movies/MovieList.tsx";
import MovieDetails from "../components/Movies/MovieDetails.tsx";

export const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route index element={<MovieList />} />
                <Route path="movie/:id" element={<MovieDetails />} />
            </Route>
        </Routes>
    );
};