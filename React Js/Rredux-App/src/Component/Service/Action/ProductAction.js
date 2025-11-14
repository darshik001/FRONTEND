
export const AddProductAction = (data)=>{
    return {
        type:"ADD_PRODUCT",
        payload:data,
    }
}

export const getAllProducts = ()=>{
    return{
        type:"GET_ALLPRODUCTS",
    }
}

export const deleteProduct = (id)=>{
    return{
        type:"DELETE_PRODUCT",
        payload:id
    }
}

export const editproduct = (id)=>{
   return{
    type:"EDIT_PRODUCT",
    payload:id
   }
}


export const updateProduct = (data)=>{
    return{
        type:"UPDATE_PRODUCT",
        payload:data
    }
}