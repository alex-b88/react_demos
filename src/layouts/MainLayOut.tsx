import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";
import "./main-lay-out-style.css"

const MainLayOut = () => {
    return (
        <div className={"main-container"}>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;