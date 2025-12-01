import { combineReducers } from "redux";
import { userRedux } from "./Authredux";
import { AddProductRedux } from "./ProductRedux";

export const rootredux = combineReducers({
    AddProductRedux,
    userRedux,
});
