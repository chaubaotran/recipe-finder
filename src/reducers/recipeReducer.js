const recipeReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_RECIPES':
            return action.payload.data.results;
        default:
            return state;
    }
}

export default recipeReducer;