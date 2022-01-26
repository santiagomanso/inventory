import React, { useReducer } from "react";
import ItemReducer from "./ItemReducer";
import { ItemContext } from "./ItemContext";

import { 
    CLEAN_ALL_STATES,
    CLEAN_ALL_STATES_HOME,
    SEARCH_ITEMS,
    ADD_ITEM_TO_LIST,
    SELECT_ITEM_1_CLICK,
    SELECT_ITEM_2_CLICK,
    CREATE_ITEM_LIST_COPY,
    UPDATE_ITEM_LIST_COPY,
    OBJECT_UPDATE,
    SET_SKU,
    CREATE_BACKUP_SHELF
} from "../../types";
import axiosClient from "../../config/axios";


const ItemState = props => {

    //create and initialize states
    const initialState = {
        
        searchresults: [],
        itemresult: [],
        selecteditem1click: {},
        selecteditem2click: [],
        selecteditemlist: [],
        itemlistcopy: [],
        teststate: [],
        colorState: null,
    }

    //reducer hook that grabs a state and fires up a payload using the dispatch function.
    const [state, dispatch] = useReducer(ItemReducer, initialState);

    //fuctions

    //search products
    const searchItems = async (input) => {
        // console.log("String recibido en funcion searchItems:  ", input);
        try {
            
            const result = await axiosClient.get('/api/products', { params: { ean: input } })
                dispatch({
                    type: SEARCH_ITEMS,
                    payload: result.data
                })
        } catch (error) {
            console.log("Catch from searchItems on ItemState.js = ", error);
        }
    };

    //update product stock
    const updateStock = async (item)=>{        
        

        

       /* console.log("ITEM id: ", item._id);
        console.log("OBJECT", stock) */
        
            //eslint-disable-next-line
        await axiosClient.put(`/api/products/${item._id}`, { params: item })
            /*.then((data)=> {
                console.log(data);
            })
            .catch((err)=> {
                console.log(err);
            })
        
        
        /*dispatch({
            type ,
            payload: stock
        })*/
    }


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

    const createItemListCopy = (data) => {
        dispatch({
            type: CREATE_ITEM_LIST_COPY,
            payload: data
        })
    }

    const updateObject = (object) => {
        dispatch({
            type: OBJECT_UPDATE,
            payload:  object 
        })
    }

        //eslint-disable-next-line
    const updateItemListCopy = (data) =>{
        dispatch({
            type: UPDATE_ITEM_LIST_COPY,
            payload: data
        })
    }

    //clean states (except product list on inbound)
    const cleanAllStates = ()=>{
        dispatch({
            type: CLEAN_ALL_STATES
        })
    }

    //clean every state 
    const cleanAllStatesHome = ()=>{
        dispatch({
            type: CLEAN_ALL_STATES_HOME
        })
    }

    //assign SKU to a State to compare and paint background color
    const setSku = (sku)=>{
        dispatch({
            type: SET_SKU,
            payload: sku
        })
    }

    const createBackupShelf = async (backupShelf) => {
        //console.log("FROM ITEM STATE", backupShelf);

        try {
            const shelf_number_backup = backupShelf;
            console.log('Item State shelf_number_backup: ', shelf_number_backup);
            await axiosClient.post('/api/shelfbackup', shelf_number_backup)
        } catch (error) {
            
        }

        /*dispatch({
            type: CREATE_BACKUP_SHELF,
            payload: backupShelf
        })*/
    }

    return (
        <ItemContext.Provider
            value={{

                //states
                searchresults: state.searchresults,
                itemresult: state.itemresult,
                selecteditem1click: state.selecteditem1click,
                selecteditem2click: state.selecteditem2click,
                selecteditemlist: state.selecteditemlist,
                itemlistcopy: state.itemlistcopy,
                teststate: state.teststate,
                colorState: state.colorState,

                //functions
                searchItems,
                updateStock,
                cleanAllStates,
                cleanAllStatesHome,
                addItemToList,
                selectItem1Click,
                selectItem2Click,
                createItemListCopy,
                updateObject,
                setSku,
                createBackupShelf
            }}
        >
            {props.children}
        </ItemContext.Provider>
    );

}

export default ItemState;
