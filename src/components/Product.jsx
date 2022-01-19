import React, { useContext, useEffect, useState } from 'react'
import { ItemContext } from '../context/itemContext/ItemContext';


export const Product = ({item}) => {
    
    //destructuring variables from OBJECT, except for stock values (empiric test)
    const {name, sku, shelf_number, shelf_number_backup, image } = item;
    
    //save both stock from item into new state, that will not change in time, use them to compare and change colors when click button
      //eslint-disable-next-line
    const [colorShelf, setColorShelf] = useState(item.stock_shelf)
      //eslint-disable-next-line
    const [colorBackup, setColorBackup] = useState(item.stock_backup)

    //define context and extract states and functions
    const itemContext = useContext(ItemContext)
    const { 
      //states
      
      
      //functions
      updateStock
    } = itemContext;

    //internal states to manage the change of stock (new stock)
    const [stock_shelf, setstock_shelf] = useState(item.stock_shelf)
    const [stock_backup, setstock_backup] = useState(item.stock_backup)
    const [stock_total, setStock_total] = useState(stock_shelf + stock_backup )

    //internal states that helps to change the color of buttons when stock change
    const [clickShelf, setClickShelf] = useState(false);
    const [clickBackup, setClickBackup] = useState(false);
    

    useEffect(() => {
      //updateObject( {stock_shelf, stock_backup} )   

      item.stock_shelf = stock_shelf;
      item.stock_backup = stock_backup;
      

      //change colors of buttons
      if (stock_shelf !== colorShelf )
        { setClickShelf(true)} else { setClickShelf(false) }     

        //change colors of buttons
      if (stock_backup !== colorBackup )
      { setClickBackup(true)} else { setClickBackup(false) }     

      updateStock(item)
      setStock_total(stock_shelf + stock_backup)
      //eslint-disable-next-line
    }, [stock_shelf, stock_backup])

    

    const handleClickShelf = (stockChange)=> {
      
      if (stockChange === 'add')
        {setstock_shelf(stock_shelf+1)} 
          else
        {setstock_shelf(stock_shelf-1)}

        
      }

      const handleClickBackup = (stockChange)=> {
        if (stockChange === 'add')
         {setstock_backup(stock_backup+1)} 
           else
         {setstock_backup(stock_backup-1)}
       }  

      
    return (
        <div className={`
                            mt-2
                            mb-0 md:mb-7
                            justify-start  
                            flex flex-row border-b-2 
                            bg-neutral-100 hover:bg-pink-100 
                            rounded-xl `}
                            >
                        
                            <div className="py-2 pl-2 shrink-0">
                            <img src={image} alt="Girl in a jacket" className="
                            h-24 sm:h-32 lg:h-44 
                            w-22 sm:h-32 lg:w-42 
                            " />
                          </div>

                                {/* START RESPONSIVE (SMARTPHONE) */}
                                    <div className="flex flex-col sm:hidden justify-center sm:items-center w-screen"> 
                                      <div>
                                          <p className="probando"> {name} </p>
                                      </div>
                                      <div className="flex justify-center items-center"> 
                                        <p className="mr-2 ">{sku} </p>
                                        
                                        <button className="
                                        text-gray-500
                                        px-1 py-1 ml-2 rounded-lg bg-slate-300 font-bold mr-2 sm:mr-52">Total Stock: {stock_total} </button>
                                      </div>
                                      <div className='flex flex-row justify-around'>
                                        <div className='flex'>
                                          <p className='font-bold text-gray-700'>Shelf:</p>
                                          <p>{shelf_number}</p>
                                        </div>
                                        <div className='flex'>
                                          <p className='font-bold text-gray-700'>Backup Shelf:</p>
                                          <p>{shelf_number_backup}</p>
                                        </div>
                                      </div>
                                      <div className='flex justify-around pb-2'>
                                        <div className='flex justify-center items-center'>
                                        <button className="text-white px-4 py-2 rounded-lg bg-pink-400 hover:bg-yellow-400                                        font-bold sm:mr-52"
                                        onClick={()=> handleClickShelf("add") }>+</button> 
                                        <button className={` px-3 py-2 rounded-lg
                                         ${clickShelf ?'bg-teal-500 text-white font-bold' : 'text-gray-500 bg-gray-300 font-bold'} `}> {stock_shelf} </button>
                                        <button className="text-white px-4 py-2 rounded-lg bg-pink-400 hover:bg-yellow-400 font-bold mr-2 sm:mr-52"
                                        onClick={()=> handleClickShelf("rest") }>-</button>
                                        </div>

                                        <div>
                                        <button className="text-white px-4 py-2 rounded-lg bg-pink-400 hover:bg-yellow-400 font-bold  sm:mr-52"
                                        onClick={()=> handleClickBackup("add") }>+</button> 
                                        <button className={` px-3 py-2 rounded-lg
                                        ${clickBackup ?'bg-teal-500 text-white font-bold' : 'text-gray-500 bg-gray-300 font-bold'} `}> {stock_backup} </button>
                                        <button className="text-white px-4 py-2 rounded-lg bg-pink-400 hover:bg-yellow-400 font-bold mr-2 sm:mr-52"
                                        onClick={()=> handleClickBackup("rest") }>-</button>
                                        </div>
                                                                               
                                      </div>
                                    </div>
                                 {/* END RESPONSIVE (SMARTPHONE) */}



                                 {/* START BIG SCREENS */}
                                    <div className='w-full
                                    hidden sm:flex flex-col justify-center items-center
                                    ml-14
                                    '>
                                        <div className='self-start'>
                                          <div className='flex items-center'>
                                            <p className='text-lg mr-1'>Name:</p>
                                            <p className='text-lg'>{name}</p>                                        
                                          </div>
                                        </div>
                                        <div className='self-start'>
                                          <div className='flex items-center'>
                                            <p className='text-lg mr-1'>SKU:</p>
                                            <p className='text-lg'>{sku}</p>                                        
                                          </div>
                                        </div>
                                        <div className='flex justify-around w-full text-lg mt-2'>
                                          <div className='flex flex-row'>
                                            <button className="text-white px-4 py-2 rounded-lg bg-pink-400 hover:bg-yellow-400 font-bold sm:text-xl lg:text-4xl"
                                            onClick={()=> handleClickShelf("add") }>+</button> 
                                            <button className={` px-3 py-2 rounded-lg
                                            ${clickShelf ?'bg-teal-500 text-white font-bold' : 'text-gray-500 bg-gray-300 font-bold'} `}>Shelf { shelf_number } Stock {stock_shelf}  </button>
                                            <button className="text-white px-4 py-2 rounded-lg bg-pink-400 hover:bg-yellow-400 font-bold sm:text-xl lg:text-4xl"
                                            onClick={()=> handleClickShelf("rest") }>-</button>
                                          </div>
                                          <button className="mr-2 ml-2
                                            text-gray-500
                                            px-5 py-1 sm:py-2 md:py-7 rounded-lg bg-slate-300 font-bold">Total Stock: {stock_total}
                                          </button>
                                          <div className='flex flex-row'>
                                            <button className="text-white px-4 py-2 rounded-lg bg-pink-400 font-bold  hover:bg-yellow-400 sm:text-xl lg:text-4xl"
                                            onClick={()=> handleClickBackup("add") }>+</button> 
                                            <button className={` px-3 py-2 rounded-lg
                                            ${clickBackup ?'bg-teal-500 text-white font-bold' : 'text-gray-500 bg-gray-300 font-bold'} `}>Backup {shelf_number_backup} Stock {stock_backup}  </button>
                                            <button className="text-white px-4 py-2 rounded-lg bg-pink-400 font-bold  hover:bg-yellow-400 sm:text-xl lg:text-4xl"
                                            onClick={()=> handleClickBackup("rest") }>-</button>
                                          </div>
                                        </div>
                                    </div>
                                    {/* END BIG SCREENS */}


        </div>
    )
}
