import { 
    SEARCH_ITEMS,
    DELETE_ITEMS,
    ITEMS_ERROR,
    CLEAN_ALL_STATES,
    CLEAN_ALL_STATES_HOME,
    ADD_ITEM_TO_LIST,
    SELECT_ITEM_1_CLICK,
    SELECT_ITEM_2_CLICK,
    CREATE_ITEM_LIST_COPY,
    SET_SKU,
    OBJECT_UPDATE,
    CREATE_BACKUP_SHELF
} from "../../types";





// eslint-disable-next-line
export default (state, action) => {
    
    switch (action.type) {

        case SEARCH_ITEMS:
            return {
                    ...state, //return a copy of every state
                    searchresults: action.payload //acá deberia poblar el estado con los objetos de axios pass by reference
            }
     

        case CLEAN_ALL_STATES:
        return{
                ...state,
                searchresults: [],
                itemstate: null,
                itemresult: [],
                selecteditem1click: [],
                selecteditem2click: []
              }

        case CLEAN_ALL_STATES_HOME:
            return{
                ...state,
                selecteditemlist: [],
                searchresults: [],
                itemstate: null,
                itemresult: [],
                selecteditem1click: null,
                selecteditem2click: null
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

        case CREATE_ITEM_LIST_COPY:
            return{
                ...state,
                itemlistcopy : action.payload
            } 


        case OBJECT_UPDATE:
            
            console.log("REDUCER PAYLOAD  ", action.payload);
            console.log("REDUCER ITEMLISTCOPY  ", state.itemlistcopy);
            return {
                ...state,
                teststate:  [action.payload]
            }
            
        
            
        case SET_SKU:
            return{
                ...state,
                colorState : action.payload
            } 
            
            
        case CREATE_BACKUP_SHELF:
            console.log(action.payload);
            
                
            
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