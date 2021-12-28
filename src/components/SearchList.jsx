import React from 'react'

export const SearchList = () => {
    return (
        <div className=" loop
                    bg-slate-100
                    m-3 p-3                    
                    flex flex-col
                    overflow-auto
                    rounded-xl                    
                    ">
                      <div className="flex flex-row justify-start font-bold text-sm border-b-2 pb-3">
                        <h2 className="mr-20">Picture</h2>
                        <h2 className="">Title/SKU/Shelf</h2>
                      </div>

                      <div className="flex flex-row justify-start ">
                        <div className="py-2 px-2">
                          <img src="https://res.cloudinary.com/goflink/image/upload/w_600,h_800/de/products/1_11012025_202110271251.png" alt="Girl in a jacket" className="h-28 w-26" />
                        </div>
                        <div className="flex flex-col justify-center items-center "> 
                          <p className="font-bold">Coca Cola Zero 0,33l</p>
                          <div className="flex flex-row self-start"> 
                            <p className="mr-3"> 11012025 </p>
                            <p className="font-bold"> #007F </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start ">
                        <div className="py-2 px-2">
                          <img src="https://res.cloudinary.com/goflink/image/upload/w_600,h_800/de/products/1_11012025_202110271251.png" alt="Girl in a jacket" className="h-28 w-26" />
                        </div>
                        <div className="flex flex-col justify-center items-center "> 
                          <p className="font-bold">Coca Cola Zero 0,33l</p>
                          <div className="flex flex-row self-start"> 
                            <p className="mr-3"> 11012025 </p>
                            <p className="font-bold"> #007F </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start ">
                        <div className=" py-2 px-2">
                          <img src="https://res.cloudinary.com/goflink/image/upload/w_600,h_800/de/products/1_11012025_202110271251.png" alt="Girl in a jacket" className="h-28 w-26" />
                        </div>
                        <div className="flex flex-col justify-center items-center "> 
                          <p className="font-bold">Coca Cola Zero 0,33l</p>
                          <div className="flex flex-row self-start"> 
                            <p className="mr-3"> 11012025 </p>
                            <p className="font-bold"> #007F </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start ">
                        <div className=" py-2 px-2">
                          <img src="https://res.cloudinary.com/goflink/image/upload/w_600,h_800/de/products/1_11012025_202110271251.png" alt="Girl in a jacket" className="h-28 w-26" />
                        </div>
                        <div className="flex flex-col justify-center items-center "> 
                          <p className="font-bold">Coca Cola Zero 0,33l</p>
                          <div className="flex flex-row self-start"> 
                            <p className="mr-3"> 11012025 </p>
                            <p className="font-bold"> #007F </p>
                          </div>
                        </div>
                      </div>

                    </div>
    )
}
