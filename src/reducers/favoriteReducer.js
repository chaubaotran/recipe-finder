const favoriteReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            if (state.find(recipe => recipe === action.recipe)) {
                alert('You have already added this recipe into your favorites');
                return [...state];
            } else {
                alert('Added one dish to favorites');
                return [...state, action.recipe];
            }
        case 'DELETE_FAVORITE':
            return state.filter(fav => fav.href !== action.fav.href);
        default:
            return state;
    }
}

export default favoriteReducer;