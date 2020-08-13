import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';

import { addFavorite, fetchRecipes } from '../actions';
import PaginationBar from './PaginationBar';

const RecipeList = ({ recipes, page, fetchRecipes, addFavorite, isLoading, error }) => {

    useEffect(() => {
        fetchRecipes('', '', page);
    }, [fetchRecipes, page]);


    const renderRecipes = recipes.map((recipe, idx) => {
        return (
            <div
                className="card mb-2"
                key={`${recipe.title}_${idx}`}
            >
                <div className="wrapper">
                    <img src={recipe.thumbnail} className="card-img-top" alt="recipe" />
                    <div className="overlap">
                        <FontAwesomeIcon
                            onClick={() => addFavorite(recipe)}
                            className="overlap-icon"
                            icon={faHeart}
                        />
                    </div>
                </div>

                <div className="card-body">
                    <p className="card-text text-center"><a href={recipe.href} target="_blank" rel="noopener noreferrer"><strong>{recipe.title}</strong></a></p>
                </div>
            </div >

        )
    })

    const loadingPage = (
        <div className="d-flex justify-content-center loading">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )

    const errorPage = (
        <p className="text-danger">{error}</p>
    )

    return (
        <div className="recipe-list mt-2">
            <div className="row">
                <div className="col d-flex flex-wrap justify-content-around">
                    {isLoading === true ? loadingPage : error === '' ? renderRecipes : errorPage}
                </div>

            </div>
            <PaginationBar />
        </div>
    );
};


const mapStateToProps = state => {
    return ({
        recipes: state.recipes,
        page: state.page,
        isLoading: state.isLoading,
        error: state.error
    });
}

export default connect(mapStateToProps, { addFavorite, fetchRecipes })(RecipeList);