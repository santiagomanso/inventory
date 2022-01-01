import React, { useReducer } from "react";
import ItemReducer from "./ItemReducer";
import { ItemContext } from "./ItemContext";

import { 
    CLEAN_ALL_STATES,
    GET_ITEMS, 
    SEARCH_ITEMS,
    ADD_ITEM_TO_LIST,
    SELECT_ITEM_1_CLICK,
    SELECT_ITEM_2_CLICK
} from "../../types";

const ItemState = props => {

    //create and initialize states
    const initialState = {
        itemstate: null,
        itemresult: null,
        selecteditem1click: null,
        selecteditem2click: null,
        selecteditemlist: []
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
    const addItemToList = (data) => {
        dispatch({
            type : ADD_ITEM_TO_LIST,
            payload: data
        })
    }

    const selectItem1Click = (data) =>{
        dispatch({
            type: SELECT_ITEM_1_CLICK,
            payload: data
        })
    }

    const selectItem2Click = (data) =>{
        dispatch({
            type: SELECT_ITEM_2_CLICK,
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
    const cleanAllStates = ()=>{
        dispatch({
            type: CLEAN_ALL_STATES
        })
    }

    return (
        <ItemContext.Provider
            value={{

                //states
                itemstate: state.itemstate,
                itemresult: state.itemresult,
                selecteditem1click: state.selecteditem1click,
                selecteditem2click: state.selecteditem2click,
                selecteditemlist: state.selecteditemlist,

                //functions
                getItems,
                searchItems,
                cleanAllStates,
                addItemToList,
                selectItem1Click,
                selectItem2Click
            }}
        >
            {props.children}
        </ItemContext.Provider>
    );

}

export default ItemState;
