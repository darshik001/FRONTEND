const initialState = {
  products:JSON.parse(localStorage.getItem("products")) || [],
  product:null,
  isloading:false
};

export const AddProductRedux = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return{
        ...state,
        isloading:true
      }
    case "ADD_PRODUCT":
      let data = JSON.parse(localStorage.getItem("products"))||[]
      data.push(action.payload)
      localStorage.setItem("products",JSON.stringify(data))
      return {
        ...state,
        products: [...state.products, action.payload],
      };
case "GET_ALLPRODUCTS":
   let getallProducts = JSON.parse(localStorage.getItem("products")) || []
   return{
    ...state,
    products:getallProducts,
    isloading:false
   }

   case "DELETE_PRODUCT" :
      let getproduct = JSON.parse(localStorage.getItem("products"))||[]
      let filterdproduct = getproduct.filter((product)=>product.id !==action.payload)
      localStorage.setItem("products",JSON.stringify(filterdproduct))

    return{
        ...state,
        products:filterdproduct
    }
    case "EDIT_PRODUCT" :
      let getproducts = JSON.parse(localStorage.getItem("products"))||[]
      let findeproduct = getproducts.find((product)=>product.id === action.payload)  
      return{
        ...state,
        product:findeproduct
      }

      case "UPDATE_PRODUCT" :
      let productData = JSON.parse(localStorage.getItem("products"))||[]
        const updatedProducts = productData.map((product) =>
    product.id === action.payload.id ? action.payload  : product
    // product.id === action.payload.id ? { ...action.payload } : product
  );
      localStorage.setItem("products",JSON.stringify(updatedProducts))
     return{
      ...state,
      products:updatedProducts,
      product:null
     }
    default:
      return state;
  }
};
