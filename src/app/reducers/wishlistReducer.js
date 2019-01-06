const wishListReducer = (state = {
    data: [],
}, action) => {
    switch (action.type) {
        case "SET_WISHLIST_DATA":
            state = {
                ...state,
                data: [...new Set([...state.data,action.payload])]

            };
            break;
       
    }
    return state;
};

export default wishListReducer;