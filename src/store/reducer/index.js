import { combineReducers } from "redux";
import {handleCart, handleWishList, searchItemsReducer, } from "./handleData";

// Root reducer combines slice reducers into the global Redux state object.
// State shape is: { handleCart, handleWishList, searchItemsReducer }
const rootReducer=combineReducers({
    handleCart,
    handleWishList,
    searchItemsReducer

});

export default rootReducer;