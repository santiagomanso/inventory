import { 
    TOGGLE_MODAL
} from "../../types";

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
            case TOGGLE_MODAL:
                return{
                    togglemodal : action.payload
                }
            default:
                return state
    }
}