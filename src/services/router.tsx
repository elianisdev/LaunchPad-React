
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import {RouterLayout} from "../pages/RouterLayout.tsx";
import {Peli} from "../components/peliculas/Peli.tsx";


export const AppRouter: FC = () => {
    return (

        <Routes>

            <Route path="/" element={<RouterLayout />}>
                <Route path="/peli" element={<Peli />}/>

            </Route>


            {/* Ruta para la verificación de la cuenta */}
        </Routes>
    );
};
