import React, { useReducer } from "react";
import ItemReducer from "./ItemReducer";
import { logicContext } from "./logicContext";

import { 
    GET_ITEMS, 
    SEARCH_ITEMS 
} from "../../types";


const ItemState = props => {

    //create and initialize states
    const initialState = {
        itemstate: null,
        itemresult: null
    }

    //reducer hook that grabs a state and fires up a payload using the dispatch function.
    const [state, dispatch] = useReducer(ItemReducer, initialState);

    // Functions
    const getItems = () => {
        dispatch({
            type: GET_ITEMS
        });
    };

    const searchItems = (data) => {
        dispatch({            
            type: SEARCH_ITEMS,
            payload: data
        });
    };

    return (
        <logicContext.Provider
            value={{
                itemstate: state.itemstate,
                itemresult: state.itemresult,
                getItems,
                searchItems
            }}
        >
            {props.children}
        </logicContext.Provider>
    );

}

export default ItemState;
