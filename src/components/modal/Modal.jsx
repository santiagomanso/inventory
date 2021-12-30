import React, { useContext, useState } from 'react';
import { ItemContext } from '../../context/itemContext/ItemContext';
import { LogicContext } from '../../context/logicContext/LogicContext';
import { SearchList } from '../SearchList';
import './modal.css';

export const Modal = () => {
    
    //extract states and functions from logic context
    const logicContext = useContext(LogicContext);
    const  { toggleModal }  = logicContext;


    //extract states and functions from item context
    const itemsContext = useContext(ItemContext);
    const {
    //states
    
    
        //functions
        searchItems, cleanStates
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

    
    
    return (

    <div className="bg-gray-500 z-1 ">
        <div className="
                overflow-hidden
                flex flex-row
                justify-center items-center
                fixed inset-0
                bg-gray-300
                
            ">
            <div className="flex flex-col items-stretch flex-grow h-screen w-screen test">
                <input
                placeholder="Search name or SKU"
                value= { inputSearch }
                onChange={ handlerChange }
                className="
                py-4 pl-2 rounded-md
                mt-5 mb-1 mr-3 ml-3
                border-2
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
                "/>

                <input type="button" value="Cancel search" className="
                    bg-red-400 p-4 rounded-lg mt-5 cursor-pointer
                    w-1/3
                    text-slate-900 font-bold
                "
                onClick={()=>{
                    //close modal
                    
                    handler_modal(false);

                    //clean states
                    cleanStates();
                }}
                />

                </div>

            </div> 
  
        </div>
    </div>
    )
}
