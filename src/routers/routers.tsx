import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../layouts/mainLayOut";
import MainPage from "../pages/MainPage";
import UsersPage from "../pages/UsersPage";


export const routers = createBrowserRouter([
    {
        path: "/", element: <MainLayOut/>, children: [
            {
                index: true, element: <MainPage/>
            },
            {
                path: "users", element: <UsersPage/>
            }
        ]
    }
])