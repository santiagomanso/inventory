import React, { useContext, useEffect, useState } from 'react'
import { ItemContext } from '../context/itemContext/ItemContext';
import { LogicContext } from '../context/logicContext/LogicContext';
import { SearchItemProduct } from './SearchItemProduct';


export const SearchItem = () => {


    //extract logic states and functions from logic state
    const logicContext = useContext(LogicContext);
    const {
      //states     
          
      //functions
      toggleModal} = logicContext


    //extract states and functions from items context
    const itemsContext = useContext(ItemContext);
    const { 
      //states
      searchresults,
      
      //functions
      addItemToList, selectItem1Click
    } = itemsContext;

    const handler_2_click = (item) =>{
      addItemToList(item);
      toggleModal(false);
    }

    const handler_1_click = (item)=> {
      selectItem1Click(item)
    }


    

    return (
        <>


        {  searchresults.product ? (
          searchresults.product.map(item=>  <SearchItemProduct key={item.sku} item={item} /> )
        ) :null  }
        </>
    )
}
