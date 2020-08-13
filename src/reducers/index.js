import { combineReducers } from 'redux';

import ingredientReducer from './ingredientReducer';
import recipeReducer from './recipeReducer';
import favoriteReducer from './favoriteReducer';
import dishReducer from './dishReducer';
import pageReducer from './pageReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    ingredients: ingredientReducer,
    recipes: recipeReducer,
    favorites: favoriteReducer,
    dish: dishReducer,
    page: pageReducer,
    isLoading: loadingReducer,
    error: errorReducer
});