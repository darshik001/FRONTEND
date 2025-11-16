
export const AddProductAction = (data)=>{
return{
    type:"ADD_Product",
    payload:data
}
}

export const GetAllProductAction = ()=>{
    return{
    type:"GET_ALLPRODUCT",
    }
}


export const deleteProduct=(id)=>{
    return{
        type:"DELETE_PRODUCT",
        payload:id
    }
}

export const editProduct=(id)=>{
    return{
        type:"EDIT_PRODUCT",
        payload:id
    }
}

export const updatedProduct=(data)=>{
    return{
        type:"UPDATE_PRODUCT",
        payload:data
    }
}