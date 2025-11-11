
export const counterReducer=(state,action)=>{
 switch (action.type) {
    case "INC":
        
         return {
            ...state,
            count : state.count+1
        };

         case "DEC":
         return {
            ...state,
            count : state.count-1
        };

        case "NAME":
        return {
           ...state,
           name : state.name = "Darshik Patel"
       };
 
    default:
        return state;
 }

}