import types from '../types';

const initialState = {
    notes :[]
}

const noteReducer = (state = initialState,{type,payload})=>{
  switch(type){
   case types.ADD_ITEM :  
    return {
        ...state,
        notes : [...state.notes,payload]

      }
    default: 
        return state;
    }
}
export default noteReducer;