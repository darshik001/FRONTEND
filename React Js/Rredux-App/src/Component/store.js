import { createStore } from "redux";
import { AddProductRedux } from "./Service/Redux/ProductRedux";

export const store = createStore(AddProductRedux);
