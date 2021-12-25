import React from 'react'
import { Navbar } from '../navbar/Navbar'

export const Layout = ({children}) => {
    return (
        <div className='h-screen bg-slate-100 flex flex-col'>
            <Navbar />
            {children}
        </div>
    )
}