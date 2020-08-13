const errorReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return action.e;
        default:
            return state;
    }
}

export default errorReducer;