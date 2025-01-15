import {FC} from "react";
import {Outlet} from "react-router-dom";

export const RouterLayout: FC = () => {
    return(
        //Outlet nos permite establecer un slot o espacio vacío dentro de un componente, donde podemos renderizar el resultado de una ruta
        <>
            <Outlet/>
        </>
    )
    };
//Ruta layout para utilizar