import React , {useState,useEffect} from 'react'
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import ItemListings from './ItemListings/ItemListings';
import { data } from '../Data/Data';
import { TItem } from '../Types/ItemType';
import { ToastContainer,toast } from 'react-toastify';

const Home = () => {
    const [cartCount, setCartCount]  = useState(1);
    const cartUpdate = (i:number) => {
      setCartCount(cartCount+i);
    }
    const [queryResults,setQueryResults] = useState<TItem[]>([])
    const updateResults = (searchQuery: string) => {
      setQueryResults(data.filter(item=>item.name.toLowerCase().includes(searchQuery.toLowerCase())))
    }
    return (
      <div>
         <ToastContainer position="bottom-right" autoClose={3000} theme="light" pauseOnHover />
        <Navbar cartCount={cartCount} cartUpdate={cartUpdate} updateResults={updateResults} />
        <Header type="sales"/>
        <ItemListings offer={true} cartUpdate={cartUpdate} data={queryResults} />
        <Header/>
        <ItemListings cartUpdate={cartUpdate} data={queryResults}/>
      </div>
    );
}

export default Home;