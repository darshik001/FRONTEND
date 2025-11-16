import { getProduct, setProduct } from "../storageCalling/productsStore"

const initialstate = {
    products: getProduct(),
    product: null,
    isLoding: false,
}


export const AddProductRedux = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_Product":
            let products = getProduct()
            products.push(action.payload)
            setProduct(products) 
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case "GET_ALLPRODUCT":
            const getallProducts = getProduct()
            return {
                ...state,
                products: getallProducts
            }

        case "DELETE_PRODUCT":
            const uproducts = getProduct().filter((product) => product.id !== action.payload)
            setProduct(uproducts)
            return {
                ...state,
                products: uproducts
            }
        case "EDIT_PRODUCT":
            const eproduct = getProduct().find((product)=>product.id === action.payload)
            return {
            ...state,
            product:eproduct
            }
        case "UPDATE_PRODUCT" :
            const updateproduct = getProduct().map((product)=>
                product.id ===action.payload.id? action.payload:product
        )
           setProduct(updateproduct)
            return{
            ...state,
            products:updateproduct,
            product:null
            }    
        default:
            return state
    }
}

