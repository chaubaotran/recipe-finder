import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { setIngredient, setDish, setPage, fetchRecipes } from '../actions';

const SearchBar = ({ ingredients, dish, page, setIngredient, setDish, setPage, fetchRecipes }) => {

    const onFormSubmit = (e) => {
        e.preventDefault();
        fetchRecipes(ingredients, dish, page);
        setPage(1);
    }

    return (
        <div className="row search-bar">
            <form
                onSubmit={(e) => { onFormSubmit(e) }}
                className="col form-inline d-flex justify-content-center"
            >
                <input
                    type='text'
                    placeholder="what's in your fridge?"
                    className="form-control form-control-sm mb-2"
                    onChange={(e) => { setIngredient(e.target.value) }}
                />
                <input
                    type='text'
                    className="form-control form-control-sm mb-2"
                    placeholder="what you wanna cook?"
                    onChange={(e) => { setDish(e.target.value) }}
                />
                <button type='submit' className="btn btn-secondary btn-sm mb-2"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return ({
        ingredients: state.ingredients,
        dish: state.dish,
        page: state.page
    });
}

export default connect(mapStateToProps, { setIngredient, setPage, fetchRecipes, setDish })(SearchBar);