import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import ItemListings from "../Components/Items/Items";
import { data } from "../Data/Data";
import { TItem } from "../Types/ItemType";
import { ToastContainer, toast } from "react-toastify";
import './Home.css'

const Home = () => {
  const [cartCount, setCartCount] = useState(1);
  const cartUpdate = (i: number) => {
    setCartCount(cartCount + i);
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
      <Header type="sales" />
      <ItemListings offer={true} cartUpdate={cartUpdate} data={queryResults} />
      <Header />
      <ItemListings cartUpdate={cartUpdate} data={queryResults} />
    </div>
  );
};

export default Home;
