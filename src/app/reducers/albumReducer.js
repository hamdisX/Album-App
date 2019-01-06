const albumReducer = (state = {
    data: [],
}, action) => {
    switch (action.type) {
        case "SET_ALBUM_DATA":
            state = {
                ...state,
                data: action.payload
            };
            break;
       
    }
    return state;
};

export default albumReducer;