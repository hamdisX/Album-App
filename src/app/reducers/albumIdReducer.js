const albumIdReducer = (state = {
    data: [],
}, action) => {
    switch (action.type) {
        case "SET_ALBUMId_DATA":
            state = {
                ...state,
                data: action.payload
            };
            break;
       
    }
    return state;
};

export default albumIdReducer;