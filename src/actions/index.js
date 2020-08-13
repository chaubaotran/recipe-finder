import axios from 'axios';

export const setIngredient = (ingredients) => {
    const action = {
        type: 'SET_INGREDIENT',
        ingredients
    }
    return action;
}

export const setDish = (dish) => {
    const action = {
        type: 'SET_DISH',
        dish
    }
    return action;
}

export const nextPage = () => {
    const action = {
        type: 'NEXT_PAGE'
    }
    return action;
}

export const prevPage = () => {
    const action = {
        type: 'PREV_PAGE'
    }
    return action;
}

export const setPage = (page) => {
    const action = {
        type: 'SET_PAGE',
        page
    }
    return action;
}

export const addFavorite = (recipe) => {
    const action = {
        type: 'ADD_FAVORITE',
        recipe
    }
    return action;
}

export const deleteFavorite = (fav) => {
    const action = {
        type: 'DELETE_FAVORITE',
        fav
    }
    return action;
}

export const isLoading = (status) => {
    const action = {
        type: 'IS_LOADING',
        status
    }
    return action;
}

export const setError = (e) => {
    const action = {
        type: 'SET_ERROR',
        e
    }
    return action;
}

export const fetchRecipes = (ingredients = '', dish = '', page = 1) => async (dispatch) => {
    try {
        dispatch({type: 'IS_LOADING', status: true});
        dispatch({type: 'SET_ERROR', e: ''});
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}&p=${page}`);        
        dispatch({ type: 'FETCH_RECIPES', payload: response });
        dispatch({type: 'IS_LOADING', status: false});
    } 
    catch(error) {
        dispatch({type: 'IS_LOADING', status: false});
        dispatch({type: 'SET_ERROR', e: error.message});
    }
    
}