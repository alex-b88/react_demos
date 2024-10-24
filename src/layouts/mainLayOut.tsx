import React from 'react';
import Navigation from "../components/nav/Navigation";
import {Outlet} from "react-router-dom";
import './main-styles.css';

const MainLayOut = () => {
    return (
        <div className={'main-layout'}>
            <Navigation/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;