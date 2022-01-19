import React from 'react'
import { useNavigate } from 'react-router-dom' //this function gets a callback on the onClick event and the argument is the Route compoennt


//i still need to read more on flex-wrap to make the buttons break line and go down, i couln't figure out how to implement it propperly
export const NavButtons = () => {

    const navigate = useNavigate();

    return (
        <div className='ml-0 sm:ml-36 mr-0 sm:mr-36 flex flex-col sm:flex-row justify-center items-center'>
            <div className='m-2 h-16 sm:h-64 w-3/4 sm:w-full bg-stone-200 rounded-lg'>
                <button className='font-bold text-xl h-full w-full' onClick={()=>{navigate('./inbound-inventory')}}>Inbound Inventory</button>
            </div>
            <div className='m-2 h-16 sm:h-64 w-3/4 sm:w-full bg-stone-200 rounded-lg'>
                <button className='font-bold text-xl h-full w-full' onClick={()=>{navigate('./outbound-inventory')}}>Outbound Inventory</button>
            </div>
            <div className='m-2 h-16 sm:h-64 w-3/4 sm:w-full bg-stone-200 rounded-lg'>
                <button className='font-bold text-xl h-full w-full' onClick={()=>{navigate('./inventory-check')}}>Inventory Check</button>
            </div>
            <div className='m-2 h-16 sm:h-64 w-3/4 sm:w-full bg-stone-200 rounded-lg'>
                <button className='font-bold text-xl h-full w-full' onClick={()=>{navigate('./stock-list')}}>Stock List</button>
            </div>
            <div className='m-2 h-16 sm:h-64 w-3/4 sm:w-full bg-stone-200 rounded-lg'>
                <button className='font-bold text-xl h-full w-full' onClick={()=>{navigate('./logs')}}>Logs</button>
            </div>
            <div className='m-2 h-16 sm:h-64 w-3/4 sm:w-full bg-stone-200 rounded-lg'>
                <button className='font-bold text-xl h-full w-full' onClick={()=>{navigate('./out-of-stock')}}>Out of Stock</button>
            </div>
        </div>
    )
}
