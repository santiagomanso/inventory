import React, { useContext, useState } from 'react';
import { ItemContext } from '../../context/itemContext/ItemContext';
import { LogicContext } from '../../context/logicContext/LogicContext';
import { SearchList } from '../SearchList';
import './modal.css';


export const Modal = () => {
    
    //extract states and functions from logic context
    const logicContext = useContext(LogicContext);
    const  {
        //functions
        toggleModal }  = logicContext;


    //extract states and functions from item context
    const itemsContext = useContext(ItemContext);
    const {
        //states
        selecteditem1click,
        
    
        //functions
        searchItems,
        cleanAllStates,
        addItemToList
        } = itemsContext;

    //state handling inputs
    const [inputSearch, setInputSearch] = useState('');

    

    const handlerChange = (e)=> {
        setInputSearch(e.target.value) 
        searchItems(inputSearch)
    }

    const handler_modal = (bol)=> {
        toggleModal(bol);
    }

    //this funcion is on this component because the button add to list is here, the double click event is on the SearchItemProduct component
    const handler_add_to_list = () =>{
        addItemToList(selecteditem1click)
        toggleModal();
    }
    
    return (

    <div className="">
        <div className="
                overflow-hidden
                flex flex-row
                justify-center items-center
                fixed inset-0
                bg-gray-300
                md:px-10 lg:px-24
            ">
            <div className="flex flex-col items-stretch flex-grow h-screen w-screen">
                <input
                placeholder="Search name or SKU"
                value= { inputSearch }
                onChange={ handlerChange }
                className="
                py-4 pl-2 rounded-md
                mt-5 mb-1 mr-3 ml-3
                border-2 lg:text-xl
                "/>
                <div className="test_modal">
                    <SearchList />
                </div>

                <div className="
                    m-5
                    flex
                    justify-around
                    rounded-xl
                ">

                <input type="button" value="Add to list" className="
                    bg-neutral-400 p-4 rounded-lg mt-5 cursor-pointer
                    w-1/3
                    text-slate-900 font-bold
                "
                onClick={handler_add_to_list}
                />

                <input type="button" value="Cancel search" className="
                    bg-red-400 p-4 rounded-lg mt-5 cursor-pointer
                    w-1/3
                    text-slate-900 font-bold
                "
                onClick={()=>{
                    //close modal
                    
                    handler_modal(false);

                    //clean states
                    cleanAllStates();
                }}
                />

                </div>

            </div> 
  
        </div>
    </div>
    )
}
