const initialState = {
  products:  [],
  product:null,
  isloading:false,
  isCreated:false,
  erroMSG:"",
  isUpdated:false
};

export const AddProductRedux = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return{
        ...state,
        isloading:true
      }
    case "ERROR":
      return{
        ...state,
        erroMSG:action.payload
      }  
    case "ADD_PRODUCT":
      return {
        ...state,
        isCreated:true
      };
case "GET_ALLPRODUCTS":
   return{
    ...state,
    products:action.payload,
    isloading:false,
    isCreated:false,
    isUpdated:false,
    erroMSG:""
   }

 
    case "EDIT_PRODUCT" :
      return{
        ...state,
        product:action.payload
      }

      case "UPDATE_PRODUCT" :
        
     return{
      ...state,
      product:null,
      isUpdated:true
     }
    default:
      return state;
  }
};
