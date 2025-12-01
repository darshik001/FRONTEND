import { createStore,applyMiddleware } from "redux";
import { AddProductRedux } from "./Component/Service/Redux/ProductRedux";
import  {thunk}  from "redux-thunk";
import { rootredux } from "./Component/Service/Redux/rooteReduce";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootredux,
composeEnhancers(applyMiddleware(thunk))
);
