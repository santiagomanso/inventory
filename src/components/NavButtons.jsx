import React from 'react'

export const NavButtons = () => {
    return (
        <div className='flex flex-col sm:flex-row items-center'>
            <button className='m-2 sm:m-10 h-24 sm:h-64 w-3/4 sm:w-full bg-stone-300 py-4 px-5 rounded-lg font-bold text-xl'>Inbound Inventory</button>
            <button className='m-2 sm:m-10 h-24 sm:h-64 w-3/4 sm:w-full bg-stone-300 py-4 px-5 rounded-lg font-bold text-xl'>Outbound Inventory</button>
            <button className='m-2 sm:m-10 h-24 sm:h-64 w-3/4 sm:w-full bg-stone-300 py-4 px-5 rounded-lg font-bold text-xl'>Inventory Check</button>
            <button className='m-2 sm:m-10 h-24 sm:h-64 w-3/4 sm:w-full bg-stone-300 py-4 px-5 rounded-lg font-bold text-xl'>Stock List</button>
            <button className='m-2 sm:m-10 h-24 sm:h-64 w-3/4 sm:w-full bg-stone-300 py-4 px-5 rounded-lg font-bold text-xl'>Logs</button>
            <button className='m-2 sm:m-10 h-24 sm:h-64 w-3/4 sm:w-full bg-stone-300 py-4 px-5 rounded-lg font-bold text-xl'>Out of Stock</button>
        </div>
    )
}
