
export const setProduct = (data)=>{
  localStorage.setItem("products",JSON.stringify(data))
}

export const  getProduct = ()=>{
    return JSON.parse(localStorage.getItem("products")) || []
}