import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";

import album from "./reducers/albumReducer";
import albumId from "./reducers/albumIdReducer";
import imgData from './reducers/showImgReducer'
import wishlist from './reducers/wishlistReducer'



export default createStore(
    combineReducers({
        album,
        albumId,
        imgData,
        wishlist
    }),
    {},
    applyMiddleware(createLogger())
    
);