
export const AddProductAction = (data)=>{
    return {
        type:"ADD_PRODUCT",
        payload:data,
    }
}

export const getAllProducts = ()=>{
    return{
        type:"getAllProducts",
    }
}