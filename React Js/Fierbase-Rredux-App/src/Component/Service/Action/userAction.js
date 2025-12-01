import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { auth } from "../../../Config/fiarbas.config"

const isLoding = ()=>{
    return{
        type:"LODING"
    }
}

const Errors = (data)=>{
    return{
        type:"ERROR",
        payload:data
    }
}
export const RegisterUser = (data)=>{
    return{
        type:"USER_SIGNUP",
        payload:data
    }
}

export const signInuser = (user)=>{
return{
    type:"USER_SIGNIN",
    payload:user
}
} 

export const singOutuser=()=>{
return{
    type:"USER_SIGNOUT"
}
}





// middelwer

    export const RegisterUserAsync = (data)=>{
        return async(dispatch) => {
            dispatch(isLoding())
            try {
                let res  =await createUserWithEmailAndPassword(auth,data.email,data.password)
                await updateProfile(auth.currentUser,{
                    displayName:data.name
                })
                dispatch(RegisterUser(data))
            } catch (error) {
                console.log(error)
                dispatch(Errors(error.message))    
            }
        }
    }

    export const signInuserAsync=(data)=>{
   return async(dispatch)=>{
    dispatch(isLoding)
    try {
        let res = await signInWithEmailAndPassword(auth,data.email,data.password);
        dispatch(signInuser(res.user))
    } catch (error) {
                dispatch(Errors(error.message))    
        
    }
   }
    }


    export const SingOutAsync = ()=>{
        return async(dispatch)=>{
            try {
                 await signOut(auth)
                 dispatch(singOutuser())
            } catch (error) {
                dispatch(Errors(error.message))    
               console.log(error.message) 
            }
        }
    }