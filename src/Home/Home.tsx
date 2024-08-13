import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Items from "../Components/Items/Items";
import { data } from "../Data/Data";
import { TItem } from "../Types/ItemType";
import { ToastContainer, toast } from "react-toastify";
import './Home.css'

const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState<number[]>([]);
  const [notifiedItems, setNotifiedItems] = useState<number[]>([])
  const [wishListedItems, setwishListedItems] = useState<number[]>([])

  const cartUpdate = (i: number) => {
    setCart((prevCart) => {
      if (prevCart.findIndex(ele => ele === i) !== -1) {
        return prevCart;
      }
      setCartCount(cartCount + 1);
      return [...prevCart, i];
    });
  };

  const updateWishList = (id: number, task: number) => {
    setwishListedItems((prevList) => {
      if (task === 1) {
        if (prevList.findIndex(ele => ele === id) !== -1) {
          return prevList;
        }
        return [...prevList, id];
      }
      else {
        return (prevList.filter(item => item !== id))
      }
      
    })
  }
  console.log("hello",wishListedItems)
  console.log("cart",cart);
  const updateNotifiedItems = (id: number) => {
    setNotifiedItems((prevList) => {
      if (prevList.findIndex(ele => ele === id) !== -1) {
        return prevList;
      }
      return [...prevList, id];

    })
  }

  const [queryResults, setQueryResults] = useState<TItem[]>([]);
  const updateResults = (searchQuery: string) => {
    console.log(process.env.sales);
    setQueryResults(
      data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };


  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        pauseOnHover
      />
      <Navbar
        cartCount={cartCount}
        cartUpdate={cartUpdate}
        updateResults={updateResults}
      />
      <Items title="Exclusive Sale" offer={true} cartUpdate={cartUpdate} data={queryResults} updateNotifiedItems={updateNotifiedItems} notifiedItems={notifiedItems} wishListedItems={wishListedItems} updateWishList={updateWishList} />
      <Items cartUpdate={cartUpdate} data={queryResults} updateNotifiedItems={updateNotifiedItems} notifiedItems={notifiedItems} wishListedItems={wishListedItems} updateWishList={updateWishList} />
    </div>
  );
};

export default Home;
