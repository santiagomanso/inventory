import React, { useContext } from 'react'
import { ItemContext } from '../context/itemContext/ItemContext';
import { LogicContext } from '../context/logicContext/LogicContext';

import { Main } from './layout/Main'
import { Modal } from './modal/Modal'

import './general.css'

export const InboundInventory = () => {

    //extract states and functions from Item Context
    const itemContext = useContext(ItemContext);
    const { selecteditemlist } = itemContext



    //extract states from logic context
    const logicContext = useContext(LogicContext);
    const { togglemodal, toggleModal } = logicContext;

    //togglemodal function
    const toggle_modal = (bol) =>{
        toggleModal(bol)
    }
    

    return (
        <Main>
        { togglemodal && <Modal /> }
                    
         <div className={`font-semibold ${togglemodal ?'hidden' :'w-5/6 flex flex-col z-100 '}`}>
                
                <div className="self-center">
                    <h1 className='
                    text-xl font-sm
                    '>Inbound Inventory</h1>
                </div>

                <div className="flex flex-col sm:flex-row mt-10 justify-stretch   ">
                    <input type="button" value="Scan mode: OFF" className="
                    bg-green-600 text-white cursor-pointer
                      text-left font-semibold rounded-lg
                      p-4
                      sm:max-w-40
                      sm:mr-4
                      mb-5 sm:mb-0
                    "/>
                    <input type="text" placeholder="Search name or SKU" className="
                    p-4 cursor-pointer
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
                    sm:w-40
                    text-white font-bold text-lg
                    " /> 
                    
                </div>
                
                <div className={`
                loop_main overflow-auto
                bg-white rounded-xl mt-10 text-center 
                {selecteditemlist ? p-2 sm:p-43  : p-14 sm:p-40}
                `}>


                    { selecteditemlist.length > 0
                        ? <div className="hidden sm:flex flex-row justify-between font-bold text-sm border-b-2 pb-3">
                            <h2 className="self-start pl-3">Picture</h2>
                            <h2 className="">Title/SKU/Shelf</h2>
                            <h2 className="">Total Stock</h2>
                            <h2 className="">Shelf Stock</h2>
                            <h2 className="">Backup Stock</h2>
                            <h2 className="">Quantity Change</h2>
                          </div>
                        :  null
                    }

                    {/* Print out Array of objects (ITEMS) needs more logic conditions (no duplicates, etc) */}
                    { selecteditemlist.length > 0
                        ? selecteditemlist.map(item=>  (
                            <div key={item.name} className={`
                            mb-3
                            flex flex-row justify-start border-b-2 
                            bg-slate-50 hover:bg-slate-100 
                            rounded-xl cursor-pointer`}
                            >
                        
                                    <div className="py-2 px-2">
                                      <img src={item.image} alt="Girl in a jacket" className="h-28 min-w-26" />
                                    </div>
                                    <div className="flex flex-col justify-center sm:items-center w-screen"> 
                                      <div className='block mb-4'>
                                          <p className="probando"> {item.name} </p>
                                      </div>
                                      <div className="flex justify-around"> 
                                        <p className="mr-3 "> {item.sku} </p>
                                        <p className="font-bold sm:mr-52"> {item.shelf_number} </p>
                                      </div>
                                      <div className='flex'>
                                        <p className="font-bold sm:mr-52"> {item.stock_total} </p>
                                        <p className="font-bold sm:mr-52"> {item.stock_shelf} </p>
                                        <p className="font-bold"> {item.stock_backup} </p>
                                      </div>
                                    </div>
                            </div>
                        ))
                        : <p className='p-10 sm:p-56'>Search or scan a product to start</p>
                    }

                

                </div>
                
                <input type="button" value="Check in" className={`
                bottom-8 fixed ${togglemodal ?'hidden' :''} sm:hidden
                bg-slate-400 p-4 rounded-lg cursor-pointer
                w-5/6 
                text-white font-bold text-lg
                `}/>    
        </div>
           
        
        </Main>
        
    )
}

