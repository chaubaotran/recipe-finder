const pageReducer = (state = 1, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            if (state <= 2) {
                return state + 1;
            }
            return state;
        case 'PREV_PAGE':
            if (state <= 1) {
                return state;
            }
            return state - 1;
        case 'SET_PAGE':
            return action.page;
        default:
            return state;
    }
}

export default pageReducer;