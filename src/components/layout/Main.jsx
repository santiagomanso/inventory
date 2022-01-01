import React from 'react'

export const Main = ({children}) => {
    return (
        <div className='flex flex-row pt-4  sm:pt-10 w-screen justify-evenly'>
            {children}            
        </div>
    )
}
