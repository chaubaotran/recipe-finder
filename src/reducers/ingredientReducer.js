const ingredientReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_INGREDIENT':
            return action.ingredients;
        default:
            return state;
    }
}

export default ingredientReducer;