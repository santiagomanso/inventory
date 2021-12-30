import React, { useReducer } from "react";
import ItemReducer from "./ItemReducer";
import { ItemContext } from "./ItemContext";

import { 
    CLEAN_STATE,
    GET_ITEMS, 
    SEARCH_ITEMS,
    SELECT_ITEM
} from "../../types";

const ItemState = props => {

    //create and initialize states
    const initialState = {
        itemstate: null,
        itemresult: null,
        selecteditem: null,
        selecteditemlist: null
    }

    //reducer hook that grabs a state and fires up a payload using the dispatch function.
    const [state, dispatch] = useReducer(ItemReducer, initialState);

    // Functions
    const getItems = () => {
        dispatch({
            type: GET_ITEMS
        });
    };

    //pick an item
    const selectItem = (data) => {
        dispatch({
            type : SELECT_ITEM,
            payload: data
        })
    }


    const searchItems = (data) => {
        dispatch({            
            type: SEARCH_ITEMS,
            payload: data
        })
    };

    //clean every state
    const cleanStates = ()=>{
        dispatch({
            type: CLEAN_STATE
        })
    }

    return (
        <ItemContext.Provider
            value={{
                //states
                itemstate: state.itemstate,
                itemresult: state.itemresult,
                selecteditem: state.selecteditem,
                selecteditemlist: state.selecteditemlist,

                //functions
                getItems,
                searchItems,
                cleanStates,
                selectItem
            }}
        >
            {props.children}
        </ItemContext.Provider>
    );

}

export default ItemState;
