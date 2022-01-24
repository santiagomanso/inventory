import React, { useState } from 'react';
import { BackupShelfs } from './BackupShelfs';


export const AddShelf = () => {
    
    const [cancel, setCancel] = useState(null);
    

    const handlerCancel = (bolean) => {
        setCancel(bolean);
    }

    if (cancel){ return <BackupShelfs /> }

  return (
    <div>
        <div className='flex flex-row bg-stone-100 rounded-lg justify-around items-center lg:justify-center py-2 text-lg mt-4 xl:mt-8'>
            <div className='w-full flex justify-center  items-center'>
                <input className='w-5/6 rounded-md px-4 py-2 font-semibold text-xl xl:text-5xl text-center' placeholder='Backup shelf name:'></input>
                <div className='relative right-16'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 xl:h-12 w-6 xl:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                </div>
            </div>
            
        </div>
        <div className='flex justify-evenly mt-4'>
            <div className='flex flex-row  justify-around w-full'>
                <button className='bg-teal-500 hover:bg-teal-600  text-lg lg:text-4xl w-5/6 self-center mb-5 sm:mb-0 sm:w-1/3 py-3  md:py-5 rounded-lg text-slate-200 font-semibold'>NEW BACKUP SHELF</button>
                <button className='bg-red-400  hover:bg-red-600 text-lg lg:text-4xl w-5/6 self-center  sm:w-1/3 py-3  md:py-5 rounded-lg text-slate-200 font-semibold'
                onClick={()=>{ handlerCancel(true) }}>CANCEL</button>
            </div>
        </div>
    </div>
  );
};
