import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "../pages/RouterLayout.tsx";
import MovieList from "../components/Movies/MovieList.tsx";

export const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/movie" element={<MovieList />} />
            </Route>
        </Routes>
    );
};