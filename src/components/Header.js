import React from 'react';
import SearchBar from './SearchBar';

import '../css/header.css';

const Header = () => {
    return (
        <div className="header pt-5 pb-5">
            <div className="row">
                <div className="col">
                    <h1 className="text-center">Recipe Finder</h1>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <SearchBar />
                </div>
            </div>
        </div>
    );
};

export default Header;