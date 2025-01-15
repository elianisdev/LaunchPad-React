
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import {RouterLayout} from "../pages/RouterLayout.tsx";
import {MovieCard} from "../components/Movies/MovieCard.tsx";



export const AppRouter: FC = () => {
    return (

        <Routes>

            <Route path="/" element={<RouterLayout />}>
                <Route path="/peli" element={<MovieCard />}/>

            </Route>


            {/* Ruta para la verificación de la cuenta */}
        </Routes>
    );
};
