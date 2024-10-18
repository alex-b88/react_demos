import React from 'react';
import Users from "../components/users/Users";
import "./pages-styles/users-page-style.css"

const UsersPage = () => {
    return (
        <div className={"users-container"}>
            <Users/>
        </div>
    );
};

export default UsersPage;