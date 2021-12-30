import { items } from "../../data/items";
import { 
    SEARCH_ITEMS,
    DELETE_ITEMS,
    ITEMS_ERROR,
    CLEAN_STATE,
    SELECT_ITEM
} from "../../types";





// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case SEARCH_ITEMS: 
        return {
                //return a copy of every state
                ...state,
                itemresult:   items.filter(item=> (item.name.match(action.payload) ) ?item  :null ) 
            }
     
        case CLEAN_STATE:
        return{
                ...state,
                itemstate: null,
                itemresult: null,
                selecteditem: null                
            }

        case SELECT_ITEM : 
        return{  
            ...state,          
            selecteditem: action.payload
        }

        case DELETE_ITEMS : 
        return {
                ...state
            }

        case ITEMS_ERROR : 
        return {
            ...state
        }
       
        default:
            return state;
    }
}