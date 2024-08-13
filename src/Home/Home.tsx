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
  const [cart,setCart] = useState<number[]>([]);
  console.log("Hi",cart)
  const cartUpdate = (i: number) => {
    setCart((prevCart) => {
      if (prevCart.findIndex(ele=>ele===i)!==-1) {
        console.log("itemn there")
        return prevCart; 
      }
      setCartCount(cartCount+1);
      return [...prevCart, i];
    });
  };
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
      <Items title="Exclusive Sale" offer={true} cartUpdate={cartUpdate} data={queryResults} />
      <Items cartUpdate={cartUpdate} data={queryResults} />
    </div>
  );
};

export default Home;
