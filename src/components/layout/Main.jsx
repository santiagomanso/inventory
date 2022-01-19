import React from 'react'

//this component it's called on every screen (inbound inventory / outbound inventory, etc) works like a container component
export const Main = ({children}) => {
    return (
        <div className=' p-2 sm:p-4 md:px-20  sm:pt-4 justify-center '>
            {children}            
        </div>
    )
}
