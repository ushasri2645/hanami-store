import React from 'react'
import './ItemListings.css'
import { TItem } from '../../Types/ItemType'
import { data } from '../../Data/Data'

import IndividualItem from '../IndividualItem/IndividualItem'
const ItemListings = ({offer = false,cartUpdate}: {offer?:boolean, cartUpdate: Function}) => {
  const items = data.filter(item => offer ? (item.offer!=undefined && item.offer>0) : (item.offer === undefined));
  return (
    <div className="items-container">
      {items.map((item:TItem)=>
        <IndividualItem item={item} cartUpdate={cartUpdate}/>
      )}
    </div>
  )
}

export default ItemListings
