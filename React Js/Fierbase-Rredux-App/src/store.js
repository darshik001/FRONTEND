import { createStore,applyMiddleware } from "redux";
import { AddProductRedux } from "./Component/Service/Redux/ProductRedux";
import  {thunk}  from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    AddProductRedux,
composeEnhancers(applyMiddleware(thunk))
);
