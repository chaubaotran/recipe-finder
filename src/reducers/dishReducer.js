const dishReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_DISH':
            return action.dish;
        default:
            return state;
    }
}

export default dishReducer;