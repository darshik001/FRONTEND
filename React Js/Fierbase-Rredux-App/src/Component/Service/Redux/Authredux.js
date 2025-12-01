const stateinitial ={
    user:JSON.parse(localStorage.getItem("user"))||null,
    isLoding:false,
    errorMSG:"",
    isCreated:false
}


export const  userRedux = (state =stateinitial,action)=>{
    switch(action.type){

     case "LODING":
        return{
            ...state,
            isLoding:true
        }

     case "ERROR":
     return{
        ...state,
        errorMSG:action.payload
     }

     case "USER_SIGNUP":
        return{
         ...state,
         user:action.payload,
         isCreated:true,
         isLoding:false
        }
     case "USER_SIGNIN":
           localStorage.setItem('user',JSON.stringify(action.payload))
        return{
            ...state,
            isCreated:false,
            isLoding:false,
            user:action.payload
        } 
     case "USER_SIGNOUT":
        localStorage.removeItem("user")
        return{
            ...state,
            user:null
        }     
      default :
      return state
    }
}