import { combineReducers } from "redux";
import ShoppingCartReducer from "./ShoppingCartReducer";

const rootReducer = combineReducers({
  stateShoppingCart: ShoppingCartReducer,
});

export default rootReducer;
