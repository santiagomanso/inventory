import React from 'react'
import { Main } from './layout/Main'

export const InboundInventory = () => {
    return (
        <Main>
            
        <div class="w-5/6 flex flex-col">
                
                <div className="self-center">
                    <h1 className='text-xl font-sm'>Inbound Inventory</h1>
                </div>

                <div className="flex flex-col sm:flex-row mt-10 justify-stretch  ">
                    <input type="button" value="Scan mode: OFF" className="
                    bg-pink-300 text-white cursor-pointer
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
                    "/>
                    <input type="button" value="Check in" className="
                    bg-zinc-300 rounded-lg hidden sm:block
                      sm:w-40
                      mr-4
                    " /> 
                </div>

                <div className="bg-white p-20 sm:p-28 h-1/3 rounded-lg mt-10 text-center">
                    <h2 className='font-semibold'>Search or scan a product to start</h2>
                </div>
                
                <input type="button" value="Check in" className="bg-gray-300 p-4 rounded-lg cursor-pointer w-5/6 bottom-8 fixed sm:hidden" />    
        </div>
           

        </Main>
        
    )
}

