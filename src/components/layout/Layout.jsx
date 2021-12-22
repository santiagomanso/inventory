import React from 'react'
import { Navbar } from '../navbar/Navbar'

export const Layout = ({children}) => {
    return (
        <div className='h-screen bg-slate-50'>
            <Navbar />
            {children}
        </div>
    )
}