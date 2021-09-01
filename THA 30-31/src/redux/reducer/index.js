import { combineReducers } from "redux";

import { product } from "./product";

const reducers= combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer,
});
export default reducers;