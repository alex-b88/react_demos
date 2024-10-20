import React from 'react';
import {Link} from "react-router-dom";
import "./menu-style.css"

const Menu = () => {
    return (
        <div className={"menu-block"}>
          <ul>
              <li><Link to={'/'} className={"m-link"}>Main</Link></li>
              <li><Link to={'categories'} className={"m-link"}>Characters</Link></li>
              <li><Link to={'products'} className={"m-link"}>Products</Link></li>
              <li><Link to={'users'} className={"m-link"}>Users</Link></li>
          </ul>
        </div>
    );
};

export default Menu;