import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className='bg-white p-5 sm:p-14 flex justify-between items-center h-16 text-black relative shadow-sm'>
            <button className='bg-pink-600 py-1 sm:py-4 px-2 sm:px-7 text-white rounded-lg font-bold'
                onClick={()=>{navigate('../')}}>
                Home
            </button>
            <h1 className='text-xl sm:text-4xl font-bold'>de_ber_moab</h1>
            <span className='bg-neutral-500 py-1 sm:py-4  px-2 sm:px-7  text-white rounded-lg font-bold'>Logout</span>
        </nav>
    )
}
