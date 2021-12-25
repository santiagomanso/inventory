import React from 'react'
import { Main } from './layout/Main'

export const InboundInventory = () => {
    return (
        <Main>
            
        <div class="w-5/6 flex flex-col">
                <div class="self-center"><h1>Inbound Inventory</h1></div>
                <div class="flex flex-col mt-10">
                <input type="button" value="Scan mode: OFF" class="bg-pink-400 text-white cursor-pointer text-left rounded-lg p-4 mb-4" />
                <input type="text" placeholder="Search name or SKU" class="rounded p-4 cursor-pointer" />
                </div>
                <div class="bg-white p-10 h-60 rounded-lg mt-10 text-center">
                <h2 className='font-semibold'>Search or scan a product to start</h2>
                </div>
                
                <input type="button" value="Check in" class="
                    bg-gray-300 rounded-lg cursor-pointer
                    p-4
                    w-5/6
                    bottom-8
                    fixed           
                    " />    
        </div>
           

        </Main>
        
    )
}

