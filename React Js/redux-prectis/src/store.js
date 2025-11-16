import { createStore } from "redux";
import { AddProductRedux } from "./Services/Redux/AddProductReducx";

export const store = createStore(AddProductRedux, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


