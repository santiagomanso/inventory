import React, { useContext, useEffect } from 'react'
import { ItemContext } from '../context/itemContext/ItemContext';
import { LogicContext } from '../context/logicContext/LogicContext';

import { Main } from './layout/Main'
import { Modal } from './modal/Modal'

import './general.css'
import './modal/modal.css'
import { Product } from './Product';
export const InboundInventory = () => {

    //extract states and functions from Item Context
    const itemContext = useContext(ItemContext);
    const { 
        //states
        selecteditemlist,
        itemlistcopy,

        //functions
        createItemListCopy,
        updateStock
     } = itemContext

    useEffect(() => {
        createItemListCopy(selecteditemlist)
        //eslint-disable-next-line
    }, [selecteditemlist])

    //extract states from logic context
    const logicContext = useContext(LogicContext);
    const { togglemodal, toggleModal } = logicContext;

    //togglemodal function
    const toggle_modal = (bol) =>{
        toggleModal(bol)
    }
    
    
    const handlerSubmit = ()=>{
        updateStock();
    }

    return (
        <Main>
        { togglemodal && <Modal /> }
                    
         <div className={`font-semibold ${togglemodal ?'hidden' :'  flex flex-col justify-center'}`}>
                
                <div className="self-center">
                    <h1 className='
                    text-md sm:text-xl 
                    '>Inbound Inventory</h1>
                </div>

                <div className="flex flex-col sm:flex-row mt-2 sm:mt-4 justify-stretch   ">
                    <input type="button" value="Scan mode: ON     " className="
                      bg-green-600 text-white cursor-pointer
                      text-left md:text-lg font-semibold rounded-lg
                      p-4
                      sm:max-w-40
                      sm:mr-4
                      mb-3 sm:mb-0
                    "/>
                    <input type="text" placeholder="Search SKU" className="
                      p-4 cursor-pointer md:text-lg
                      sm:w-3/4
                      mr-0 sm:mr-4
                      rounded-xl
                    "
                    onClick={()=> {                        
                        toggle_modal(true)
                    }}
                    />
                    
                    <input type="button" value="Check in" className="
                    bg-slate-400 rounded-lg hidden sm:block
                    sm:w-56 lg:w-60
                    text-white font-bold text-lg md:text-lg
                    "
                    onClick={handlerSubmit} /> 
                    
                </div>
                
                <div className={`
                py-0 sm:py-4
                px-0 sm:px-4
                loop_main overflow-auto                
                rounded-xl mt-4 sm:mt-8   text-center 
                {selecteditemlist ? p-0 sm:p-43  : bg-white p-0 sm:p-40}
                `}>

                    
                    

                    {/* Print out Array of objects (ITEMS) needs more logic conditions (no duplicates, etc) */}
                    { itemlistcopy.length > 0
                        ? itemlistcopy.map(item=>  (
                            <Product key={item.sku} item={item} />
                        ))
                        :   <p className='py-28 md:py-48 lg:py-64 md:text-xl'>Search or scan a product to start</p>
                    }

                

                </div>

                <div className='flex justify-center'>
                  <input type="button" value="Check in" className={`
                  bottom-4 fixed ${togglemodal ?'hidden' :''}
                  sm:hidden bg-slate-400 rounded-lg cursor-pointer
                  w-5/6 h-12                  
                  
                  text-white font-bold text-lg
                  `}
                  onClick={handlerSubmit}/>
                </div>
        </div>
           
        
        </Main>
        
    )
}

