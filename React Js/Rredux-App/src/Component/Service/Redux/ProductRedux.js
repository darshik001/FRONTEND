const initialState = {
  products:JSON.parse(localStorage.getItem("products")) || [],
  product:null,
  isloding:false
};

export const AddProductRedux = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let data = JSON.parse(localStorage.getItem("products"))||[]
      data.push(action.payload)
      localStorage.setItem("products",JSON.stringify(data))
      return {
        ...state,
        products: [...state.products, action.payload],
      };
case "getAllProducts":
   let getallProducts = JSON.parse(localStorage.getItem("products"))
   return{
    ...state,
    products:getallProducts
   }
    default:
      return state;
  }
};
