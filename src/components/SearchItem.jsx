import React, { useContext, } from 'react'
import { ItemContext } from '../context/itemContext/ItemContext';
import { SearchItemProduct } from './SearchItemProduct';


export const SearchItem = () => {

    //extract states and functions from items context
    const itemsContext = useContext(ItemContext);
    const { 
      //states
      searchresults,
      
    } = itemsContext;

     return (
        <>


        {  searchresults.product ? (
          searchresults.product.map(item=>  <SearchItemProduct key={item.sku} item={item} /> )
        ) :null  }
        </>
    )
}
