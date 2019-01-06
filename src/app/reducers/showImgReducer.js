const ImgReducer = (state = {
    data: [],
}, action) => {
    switch (action.type) {
        case "SET_IMG_DATA":
            state = {
                ...state,
                data: action.payload
            };
            break;
       
    }
    return state;
};

export default ImgReducer;