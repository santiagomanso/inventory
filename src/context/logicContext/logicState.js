import React, { useReducer } from "react";
import LogicReducer from "./LogicReducer";
import { LogicContext } from "./LogicContext";

import { 
    TOGGLE_MODAL
} from "../../types";



const LogicState = props => {

    //create and initialize states
    const initialState = {
        togglemodal: false
    }

    //reducer hook that grabs a state and fires up a payload using the dispatch function.
    const [state, dispatch] = useReducer(LogicReducer, initialState);

    //functions
    const toggleModal = (data) =>{
        dispatch({
            type: TOGGLE_MODAL,
            payload: data
        })
    }
    

    return (
        <LogicContext.Provider
            value={{
                togglemodal: state.togglemodal,
                toggleModal
            }}
        >
            {props.children}
        </LogicContext.Provider>
    );

}

export default LogicState;
