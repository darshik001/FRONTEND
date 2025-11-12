const initialState = {
  products: [],
};

export const AddProductRedux = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
};
