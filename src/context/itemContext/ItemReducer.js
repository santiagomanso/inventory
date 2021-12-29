import { items } from "../../data/items";
import { 
    GET_ITEMS,
    SEARCH_ITEMS,
    DELETE_ITEMS,
    ITEMS_ERROR,
    CLEAN_STATE_ITEMS
} from "../../types";





// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                itemstate : items
            }    
        case SEARCH_ITEMS: 
            return {
                ...state,
                itemresult: state.itemstate.filter(item=> (item.name.match(action.payload) )  ?item :null ) 
            }
    
        case CLEAN_STATE_ITEMS:
            return{
                itemstate: null,
                itemresult: null
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