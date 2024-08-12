import React from 'react'
import './ItemListings.css'
import { TItem } from '../../Types/ItemType'
// import { data } from '../../Data/Data'

import IndividualItem from '../IndividualItem/IndividualItem'
import { toast } from 'react-toastify'
const ItemListings = ({offer = false,cartUpdate,data}: {offer?:boolean, cartUpdate: Function,data:TItem[]}) => {
  const nomsg = () => {
    toast.info("No Products Found")
  }
  const items = data.filter(item => offer ? (item.offer!=undefined && item.offer>0) : (item.offer === undefined));
  if(!items){
    nomsg();
  }
  return (
    <div className="items-container">
      {items.map((item:TItem)=>
        <IndividualItem item={item} cartUpdate={cartUpdate}/>
      )}
    </div>
  )
}

export default ItemListings
