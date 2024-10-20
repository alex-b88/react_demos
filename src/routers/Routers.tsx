import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import CharactersPage from "../pages/CharactersPage";
import ProductsPage from "../pages/ProductsPage";
import UsersPage from "../pages/UsersPage";
import HomePage from "../pages/HomePage";

export const routers = createBrowserRouter([
    {
        path: '/', element: <MainLayOut/>, children:[
            {
                index: true, element: <HomePage/>
            },
            {
                path: 'categories', element: <CharactersPage/>
            },
            {
                path: 'products', element: <ProductsPage/>
            },
            {
                path: 'users', element: <UsersPage/>
            }
        ]

    }
]);