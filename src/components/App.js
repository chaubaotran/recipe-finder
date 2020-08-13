import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from './Header';
import About from './About';
import RecipeList from './RecipeList';
import FavoriteList from './FavoriteList';
import Navigation from './Navigation';
import Footer from './Footer';

const App = () => {
    return (
        <div className="container">
            <Header />
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={RecipeList} />
                    <Route path="/favorites" component={FavoriteList} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
};

export default App;