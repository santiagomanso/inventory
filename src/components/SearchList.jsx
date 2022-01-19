import React from 'react'
import './modal/modal.css'
import { SearchItem } from './SearchItem'

//this component works as a header of titles to display the data retrived from the DB query
export const SearchList = () => {
    return (
        <div className=" loop
                    bg-slate-100
                    m-3 p-3                    
                    flex flex-col
                    overflow-auto
                    rounded-xl                    
                    ">
                      <div className="flex flex-row justify-start font-bold text-sm md:text-lg border-b-2 pb-3">
                        <h2 className="mr-20 pl-3">Picture</h2>
                        <h2 className="">Title/SKU/Shelf</h2>
                      </div>
                      <SearchItem />
                    </div>
    )
}
