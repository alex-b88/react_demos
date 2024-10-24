import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li><Link to={'/'}>Post to api</Link></li>
                <li><Link to={'users'}>Get from api with token</Link></li>
            </ul>
        </div>
    );
};

export default Navigation;