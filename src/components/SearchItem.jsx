import React, { useContext } from 'react'
import { ItemContext } from '../context/itemContext/ItemContext';
import { LogicContext } from '../context/logicContext/LogicContext';


export const SearchItem = () => {

    //extract logic states and functions from logic state
    const logicContext = useContext(LogicContext);
    const {
      //states
      togglemodal, 
      
      //functions
      toggleModal} = logicContext




    //extract states and functions from items context
    const itemsContext = useContext(ItemContext);
    const { 
      //states
      itemresult, selecteditem1click, selecteditem2click,
      
      //functions
      addItemToList, selectItem1Click, selectItem2Click
    } = itemsContext;

    const handler_2_click = (item) =>{
      addItemToList(item);
      toggleModal(false);
    }

    const handler_1_click = (item)=> {
      selectItem1Click(item)
    }

    return (
        <>
        {  itemresult ? (
            itemresult.map(item=>  (
                <div key={item.name} className={`flex flex-row justify-start border-b-2 
                bg-slate-100 hover:bg-slate-200 
                rounded-xl cursor-pointer`}
                              // recive an EVENT and i pass the item
                onDoubleClick={ (e)=>  handler_2_click(item) }
                onClick={ (e)=>  handler_1_click(item) }
                >
            
                        <div className="py-2 px-2">
                          <img src={item.image} alt="Girl in a jacket" className="h-28 w-26" />
                        </div>
                        <div className="flex flex-col justify-center items-center "> 
                          <p className="font-bold"> {item.name} </p>
                          <div className="flex flex-row self-start"> 
                            <p className="mr-3"> {item.sku} </p>
                            <p className="font-bold"> {item.shelf_number} </p>
                          </div>
                        </div>
                </div>
            ))
        ) :null  }
        </>
    )
}
