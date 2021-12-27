import React from 'react';
import './modal.css';

export const Modal = ( {closeModal} ) => {
    return (
    <div className="h-screen bg-gray-500 z-1">
        <div className="
                flex flex-row
                justify-center items-center
                fixed top-0 left-0
                
            ">
            <div className="flex flex-col items-stretch flex-grow h-screen w-screen">
                <input placeholder="Search name or SKU" className="
                py-4 pl-2 rounded-md
                
                "/>
                <div className="test_modal">
                    <div className="
                    flex flex-col
                    h-full bg-zinc-400
                    rounded-md
                    ">
                    Testing modal
                    </div>
                </div>

                <div className="
                    flex
                    justify-around
                    rounded-xl
                ">

                <input type="button" value="Add to list" className="
                    bg-green-400 p-4 rounded-lg mt-5 cursor-pointer
                    w-1/3
                    text-slate-900 font-bold
                "/>

                <input type="button" value="Cancel search" className="
                    bg-red-400 p-4 rounded-lg mt-5 cursor-pointer
                    w-1/3
                    text-slate-900 font-bold
                "
                onClick={()=>{closeModal(false)}}
                />

                </div>

            </div> 
  
        </div>
    </div>
    )
}
