import React, { useContext } from 'react'
import { LogicContext } from '../context/logicContext/LogicContext';
import { Main } from './layout/Main'
import { Modal } from './modal/Modal'


export const InboundInventory = () => {

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
                    <h1 className='text-xl font-sm'>Inbound Inventory</h1>
                </div>

                <div className="flex flex-col sm:flex-row mt-10 justify-stretch   ">
                    <input type="button" value="Scan mode: OFF" className="
                    bg-green-600 text-white cursor-pointer
                      text-left rounded-lg
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
                    sm:w-40 mr-4
                    text-white font-bold text-lg
                    " /> 
                    
                </div>
                
                <div className=" 
                bg-white h-1/3 rounded-lg mt-10 text-center 
                p-14 sm:p-40
                ">
                    <h2 className='font-semibold'>Search or scan a product to start</h2>
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

