import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import CharactersPage from "../pages/CharactersPage";
import LocationsPage from "../pages/LocationsPage";
import EpisodesPage from "../pages/EpisodesPage";
import HomePage from "../pages/HomePage";

export const routers = createBrowserRouter([
    {
        path: '/', element: <MainLayOut/>, children:[
            {
                index: true, element: <HomePage/>
            },
            {
                path: 'characters', element: <CharactersPage/>
            },
            {
                path: 'locations', element: <LocationsPage/>
            },
            {
                path: 'episodes', element: <EpisodesPage/>
            }
        ]

    }
]);