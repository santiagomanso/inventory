import React, { useContext, useEffect, useState } from 'react'
import { ItemContext } from '../context/itemContext/ItemContext';
import { LogicContext } from '../context/logicContext/LogicContext';

export const SearchItemProduct = ({item}) => {



    const [color, setColor] = useState(false);
    
    //extract logic states and functions from logic state
    const logicContext = useContext(LogicContext);
    const {
      //states     
      
      //functions
      toggleModal} = logicContext


    //extract states and functions from items context
    const itemsContext = useContext(ItemContext);
    const { 
      //states
      searchresults, selecteditem1click, colorState,
      
      //functions
      addItemToList, selectItem1Click, setSku
    } = itemsContext;

    const handler_2_click = (item) =>{
      addItemToList(item);
      toggleModal(false);
    }

     const handler_1_click = (item)=> {
      selectItem1Click(item)
    }

    
    

    

    return (
        <div key={item.sku} className={`flex flex-row justify-start border-b-2 
                ${color ?'bg-teal-400' :'bg-slate-100' }  hover:bg-slate-200  text-sm sm:text-md md:text-lg
                rounded-xl cursor-pointer`}
                              // recive an EVENT and i pass the item
                onDoubleClick={ (e)=>  handler_2_click(item) }
                onClick={ (e)=>  handler_1_click(item) }
                >
            
                        <div className="py-2 px-2">
                          <img src={item.image} alt="Girl in a jacket" className="
                          h-28 sm:h-32 md:h-36 lg:h-48 lg:w-40
                          w-26 sm:h-32 md:w-34 lg:w-48 lg:w-40
                          " />
                        </div>
                        <div className="flex flex-col justify-center items-center "> 
                          <div className='hidden sm:flex flex-row'> 
                            <p className='font-bold mr-2'>Name: </p>
                            <p>{item.name}</p>
                          </div>

                          <p className='block sm:hidden'>{item.name}</p>
                          <div className="flex flex-row self-start"> 
                            <p className="mr-3"> {item.sku} </p>
                            <p className="font-bold"> {item.shelf_number} </p>
                          </div>
                        </div>
                </div>
    )
}
