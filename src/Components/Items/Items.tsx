import React from "react";
import "./Items.css";
import { TItem } from "../../Types/ItemType";
import Item from "../Item/Item";
import { toast } from "react-toastify";

const Items = ({
  offer = false,
  title="Our Products",
  cartUpdate,
  data,
  notifiedItems,
  updateWishList,
  wishListedItems,
  updateNotifiedItems,
}: {
  offer?: boolean;
  title?:string;
  cartUpdate: Function;
  data: TItem[];
  updateNotifiedItems:Function;
  updateWishList:Function;
  wishListedItems:number[];
  notifiedItems:any
}) => {
  console.log(data);
  const toastmsg = () => {
    toast.warn("No Products Found");
  };
  if (data.length === 0) {
    return (
      <>
        <h2>No Products Founds</h2>
      </>
    );
  }
  const items = data.filter((item) =>
    offer ? item.offer != undefined && item.offer > 0 : item.offer === undefined
  );
  return (
    <>
    <div>
          <h1 className='title title-sale'>{title}</h1>
          {title!=='Our Products' && (<p className='decsription'>Get in on the trend with our curated selection of best-selling styles</p>)}
        </div>
    <div className="items-container">
    
    <p>{process.env.REACT_APP_SALES}</p>
      {items.map((item:TItem) => (
        <Item item={item} cartUpdate={cartUpdate} updateNotifiedItems={updateNotifiedItems} notifiedItems={notifiedItems} wishListedItems={wishListedItems} updateWishList={updateWishList}/>
      ))}
    </div>
    </>
  );
};

export default Items;
