import { items } from "../../data/items";
import { 
    SEARCH_ITEMS,
    DELETE_ITEMS,
    ITEMS_ERROR,
    CLEAN_ALL_STATES,
    ADD_ITEM_TO_LIST,
    SELECT_ITEM_1_CLICK,
    SELECT_ITEM_2_CLICK
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
     
        case CLEAN_ALL_STATES:
        return{
                ...state,
                itemstate: null,
                itemresult: null,
                selecteditem1click: null,
                selecteditem2click: null,
                selecteditemlist: []
            }

        case ADD_ITEM_TO_LIST : 
        return{  
            ...state,          
            selecteditemlist: [action.payload, ...state.selecteditemlist, ]
            
        }

        case SELECT_ITEM_1_CLICK:
            return{
                ...state,
                selecteditem1click : action.payload
            }
        
        case SELECT_ITEM_2_CLICK:
            return{
                ...state,
                selecteditem2click : action.payload
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