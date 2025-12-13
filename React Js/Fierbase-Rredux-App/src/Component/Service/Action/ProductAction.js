import axios from "axios"
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../../../Config/fiarbas.config"

export const AddProductAction = (data)=>{
    return {
        type:"ADD_PRODUCT",
        payload:data,
    }
}

export const getAllProducts = (data)=>{
    return{
        type:"GET_ALLPRODUCTS",
        payload:data
    }
}



export const editproduct = (id)=>{
   return{
    type:"EDIT_PRODUCT",
    payload:id
   }
}


export const updateProduct = ()=>{
    return{
        type:"UPDATE_PRODUCT",
    }
}

const loding = ()=>{
    return {
        type:"LOADING"
    }
}

const Errors = (data)=>{
    return{
        type:"ERROR",
        payload:data
    }
}
//middelwer
export const getAllProductsAsyc = ()=>{
    return async(dispatch)=>{

        dispatch(loding())
        // fetch('http://localhost:3000/products',{
        //     method:"GET",
        //     type:"application/json"
        // })
        // .then(res=> res.json())
        // .then((data) => dispatch(getAllProducts(data)))
        // .catch(error => console.log(error))
        let records = []
   let res = await getDocs(collection(db,"products"))
    res.forEach(rec => {
            records.push({
                ...rec.data(), id: rec.id
            })
        })
dispatch(getAllProducts(records))
   
    }
}

export const AddProductActionAsync = (data)=>{
    return async(dispatch) =>{

      try{
    //      let res =  await axios.post("http://localhost:3000/products",data)
    await setDoc(doc(db,"products",data.id),data)
      dispatch(AddProductAction())
      }catch (error){
        console.log("Error Message",error.message)
      dispatch(Errors(error.message))
        
      }
    }
}

export const deleteProductAsync = (id)=>{

    return async(dispatch) =>{

      try{
        //  let res =  await axios.delete(`http://localhost:3000/products/${id}`)
        await deleteDoc(doc(db,'products',id))
         dispatch(getAllProductsAsyc())
      }catch (error){
        console.log("Error Message",error.message)
      dispatch(Errors(error.message))
        
      }
    }
}


export const editproductAsync = (id)=>{

    return async(dispatch) =>{

      try{
        //  let res =  await axios.get(`http://localhost:3000/products/${id}`)
        //  dispatch(editproduct(res.data))
        let res =await getDoc(doc(db,"products",id))
         dispatch(editproduct(res.data()))

      }catch (error){
        console.log("Error Message",error.message)
      dispatch(Errors(error.message))
        
      }
    }
}


export const updateProductAsync = (data)=>{
    return async (dispatch)=>{
        try{
        //    let res  = await axios.put(`http://localhost:3000/products/${data.id}`,data)
        console.log(data)
           await updateDoc(doc(db,'products',data.id),data)
           dispatch(updateProduct())
        } catch(error){
          dispatch(Errors(error.message))
        }
    }
}