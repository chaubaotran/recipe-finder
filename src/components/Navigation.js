import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {


    return (
        <nav className="navbar bg-light justify-content-center">
            < div className="navbar-nav flex-row" >
                <Link to='/' className="nav-link mx-3">Home</Link>
                <Link to='/about' className="nav-link mx-3">About</Link>
                <Link to='/favorites' className="nav-link mx-3">Favorite</Link>
            </div >
        </nav >
    );
};

export default Navigation;