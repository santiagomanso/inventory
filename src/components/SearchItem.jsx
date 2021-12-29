import React, { useContext } from 'react'
import { ItemContext } from '../context/itemContext/ItemContext';


export const SearchItem = () => {

    //extract states and functions from context
    const itemsContext = useContext(ItemContext);
    const { itemresult } = itemsContext;

    return (
        <>
        {  itemresult ? (
            itemresult.map(item=>  (
                <div key={item.id} className="flex flex-row justify-start border-b-2 bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer">
            
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
