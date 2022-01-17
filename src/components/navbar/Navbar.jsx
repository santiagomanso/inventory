import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ItemContext } from '../../context/itemContext/ItemContext';


export const Navbar = () => {

    //extract states and functions from item context
    const itemContext = useContext(ItemContext);

    //clean states but leaving some states that allows the rendering of the sku search results
    const { cleanAllStatesHome } = itemContext;

    const navigate = useNavigate();
    return (
        <nav className='bg-white p-5 sm:p-14 flex justify-between items-center h-16 text-black relative shadow-sm'>
            <button className='bg-pink-400 py-1 sm:py-4 px-2 sm:px-7 text-white rounded-lg font-bold'
                onClick={()=>{
                    navigate('../');
                    cleanAllStatesHome();
                }}>
                Home
            </button>
            <h1 className='text-xl md:text-3xl font-bold'>de_ber_moab</h1>
            <span className='bg-gray-500 py-1 sm:py-4  px-2 sm:px-7  text-white rounded-lg font-bold'>Logout</span>
        </nav>
    )
}
