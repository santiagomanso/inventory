import React from 'react'

export const NavButtons = () => {
    return (
        <div className='ml-0 sm:ml-36 mr-0 sm:mr-36 flex flex-col sm:flex-row justify-center items-center'>
            <div className='m-2 h-16 sm:h-64 w-3/4 sm:w-full bg-stone-200 rounded-lg'>
                <button className='font-bold text-xl h-full w-full'>Inbound Inventory</button>
            </div>
            <div className='m-2 h-16 sm:h-64 w-3/4 sm:w-full bg-stone-200 rounded-lg'>
                <button className='font-bold text-xl h-full w-full'>Outbound Inventory</button>
            </div>
            <div className='m-2 h-16 sm:h-64 w-3/4 sm:w-full bg-stone-200 rounded-lg'>
                <button className='font-bold text-xl h-full w-full'>Inventory Check</button>
            </div>
            <div className='m-2 h-16 sm:h-64 w-3/4 sm:w-full bg-stone-200 rounded-lg'>
                <button className='font-bold text-xl h-full w-full'>Stock List</button>
            </div>
            <div className='m-2 h-16 sm:h-64 w-3/4 sm:w-full bg-stone-200 rounded-lg'>
                <button className='font-bold text-xl h-full w-full'>Logs</button>
            </div>
            <div className='m-2 h-16 sm:h-64 w-3/4 sm:w-full bg-stone-200 rounded-lg'>
                <button className='font-bold text-xl h-full w-full'>Out of Stock</button>
            </div>
        </div>
    )
}
