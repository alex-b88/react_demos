import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {routers} from "./routers/routers";
import {RouterProvider} from "react-router-dom";
import "./layouts/layouts-styles/main.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
    <RouterProvider router={routers}/>
);

