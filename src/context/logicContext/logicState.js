import React, { useReducer } from "react";
import ItemReducer from "./ItemReducer";
import { logicContext } from "./logicContext";

import { 
    GET_ITEMS, 
    SEARCH_ITEMS, 
    TOGGLE_MODAL
} from "../../types";


const ItemState = props => {

    //create and initialize states
    const initialState = {
        togglemodal: null
    }

    //reducer hook that grabs a state and fires up a payload using the dispatch function.
    const [state, dispatch] = useReducer(ItemReducer, initialState);

    //functions
    const toggleModal = (data) =>{
        dispatch({
            type: TOGGLE_MODAL,
            payload: data
        })
    }
    

    return (
        <logicContext.Provider
            value={{
                togglemodal: state.togglemodal,
                toggleModal
            }}
        >
            {props.children}
        </logicContext.Provider>
    );

}

export default ItemState;
