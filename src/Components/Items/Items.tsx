import React from "react";
import "./Items.css";
import { TItem } from "../../Types/ItemType";
import IndividualItem from "../Item/Item";
import { toast } from "react-toastify";

const ItemListings = ({
  offer = false,
  cartUpdate,
  data,
}: {
  offer?: boolean;
  cartUpdate: Function;
  data: TItem[];
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
    <div className="items-container">
    <p>{process.env.REACT_APP_SALES}</p>
      {items.map((item: TItem) => (
        <IndividualItem item={item} cartUpdate={cartUpdate} />
      ))}
    </div>
  );
};

export default ItemListings;
