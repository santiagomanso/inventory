import React, { useContext } from 'react'
import { ItemContext } from '../context/itemContext/ItemContext';
import { LogicContext } from '../context/logicContext/LogicContext';

import { Main } from './layout/Main'
import { Modal } from './modal/Modal'

import './general.css'
import './modal/modal.css'
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
                    
         <div className={`font-semibold ${togglemodal ?'hidden' :'  flex flex-col justify-center'}`}>
                
                <div className="self-center">
                    <h1 className='
                    text-md sm:text-xl 
                    '>Inbound Inventory</h1>
                </div>

                <div className="flex flex-col sm:flex-row mt-2 sm:mt-4 justify-stretch   ">
                    <input type="button" value="Scan mode: OFF" className="
                      bg-green-600 text-white cursor-pointer
                      text-left md:text-lg font-semibold rounded-lg
                      p-4
                      sm:max-w-40
                      sm:mr-4
                      mb-3 sm:mb-0
                    "/>
                    <input type="text" placeholder="Search name or SKU" className="
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
                    sm:w-40 
                    text-white font-bold text-lg md:text-lg
                    " /> 
                    
                </div>
                
                <div className={`
                py-0 sm:py-4
                px-0 sm:px-4
                loop_main overflow-auto                
                rounded-xl mt-4 sm:mt-8   text-center 
                {selecteditemlist ? p-0 sm:p-43  : bg-white p-0 sm:p-40}
                `}>


                    

                    {/* Print out Array of objects (ITEMS) needs more logic conditions (no duplicates, etc) */}
                    { selecteditemlist.length > 0
                        ? selecteditemlist.map(item=>  (
                            <div key={item.name} className={`
                            mt-2
                            mb-0 md:mb-7
                            justify-start  
                            flex flex-row border-b-2 
                            bg-neutral-100 hover:bg-pink-100 
                            rounded-xl `}
                            >
                        
                            <div className="py-2 pl-2 shrink-0">
                            <img src={item.image} alt="Girl in a jacket" className="
                            h-24 sm:h-32 lg:h-44 
                            w-22 sm:h-32 lg:w-42 
                            " />
                          </div>
                                    <div className="flex flex-col sm:hidden justify-center sm:items-center w-screen"> 
                                      <div>
                                          <p className="probando"> {item.name} </p>
                                      </div>
                                      <div className="flex justify-center items-center"> 
                                        <p className="mr-2 ">{item.sku} </p>
                                        
                                        <button className="
                                        text-gray-500
                                        px-1 py-1 ml-2 rounded-lg bg-slate-300 font-bold mr-2 sm:mr-52">Total Stock: {item.stock_total} </button>
                                      </div>
                                      <div className='flex flex-row justify-around'>
                                        <div className='flex'>
                                          <p className='font-bold text-gray-700'>Shelf:</p>
                                          <p>{item.shelf_number}</p>
                                        </div>
                                        <div className='flex'>
                                          <p className='font-bold text-gray-700'>Backup Shelf:</p>
                                          <p>{item.shelf_number_backup}</p>
                                        </div>
                                      </div>
                                      <div className='flex justify-around pb-2'>
                                        <div className='flex justify-center items-center'>
                                        <button className="text-white px-4 py-2 rounded-lg bg-pink-400 hover:bg-yellow-400 font-bold  sm:mr-52">+</button> 
                                        <button className="text-gray-500 px-3 py-2 rounded-lg bg-gray-200 font-bold"> {item.stock_shelf} </button>
                                        <button className="text-white px-4 py-2 rounded-lg bg-pink-400 hover:bg-yellow-400 font-bold mr-2 sm:mr-52">-</button>
                                        </div>

                                        <div>
                                        <button className="text-white px-4 py-2 rounded-lg bg-pink-400 hover:bg-yellow-400 font-bold  sm:mr-52">+</button> 
                                        <button className="text-gray-500 px-3 py-2 rounded-lg bg-gray-200 font-bold"> {item.stock_backup} </button>
                                        <button className="text-white px-4 py-2 rounded-lg bg-pink-400 hover:bg-yellow-400 font-bold mr-2 sm:mr-52">-</button>
                                        </div>
                                                                               
                                      </div>
                                    </div>

                                    <div className='w-full
                                    hidden sm:flex flex-col justify-center items-center
                                    ml-14
                                    '>
                                        <div className='self-start'>
                                          <div className='flex items-center'>
                                            <p className='text-lg mr-1'>Name:</p>
                                            <p className='text-lg'>{item.name}</p>                                        
                                          </div>
                                        </div>
                                        <div className='self-start'>
                                          <div className='flex items-center'>
                                            <p className='text-lg mr-1'>SKU:</p>
                                            <p className='text-lg'>{item.sku}</p>                                        
                                          </div>
                                        </div>
                                        <div className='flex justify-around w-full text-lg mt-2'>
                                          <div className='flex flex-row'>
                                            <button className="text-white px-4 py-2 rounded-lg bg-pink-400 hover:bg-yellow-400 font-bold sm:text-xl lg:text-4xl">+</button> 
                                            <button className="text-gray-500 px-3 py-2 rounded-lg bg-gray-200 font-bold">Shelf { item.shelf_number } Stock {item.stock_shelf}  </button>
                                            <button className="text-white px-4 py-2 rounded-lg bg-pink-400 hover:bg-yellow-400 font-bold sm:text-xl lg:text-4xl">-</button>
                                          </div>
                                          <button className="mr-2 ml-2
                                            text-gray-500
                                            px-5 py-1 sm:py-2 md:py-7 rounded-lg bg-slate-300 font-bold">Total Stock: {item.stock_total}
                                          </button>
                                          <div className='flex flex-row'>
                                            <button className="text-white px-4 py-2 rounded-lg bg-pink-400 font-bold  hover:bg-yellow-400 sm:text-xl lg:text-4xl">+</button> 
                                            <button className="text-gray-500 px-3 py-2 rounded-lg bg-gray-200 font-bold">Backup {item.shelf_number_backup} Stock {item.stock_backup}  </button>
                                            <button className="text-white px-4 py-2 rounded-lg bg-pink-400 font-bold  hover:bg-yellow-400 sm:text-xl lg:text-4xl">-</button>
                                          </div>
                                        </div>
                                    </div>
                            </div>
                        ))
                        : <p className='py-28 md:py-48 lg:py-64 md:text-xl'>Search or scan a product to start</p>
                    }

                

                </div>

                <div className='flex justify-center'>
                  <input type="button" value="Check in" className={`
                  bottom-4 fixed ${togglemodal ?'hidden' :''}
                  sm:hidden bg-slate-400 rounded-lg cursor-pointer
                  w-5/6 h-12                  
                  
                  text-white font-bold text-lg
                  `}/>
                </div>
        </div>
           
        
        </Main>
        
    )
}

