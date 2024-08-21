import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Items from "../Components/Items/Items";
import { TItem } from "../Types/ItemType";
import { ToastContainer} from "react-toastify";


const Home = () => {
  const [queryResults, setQueryResults] = useState<TItem[]>([]);
  const updateResults = (searchQuery: string) => {
    fetch('http://localhost:5050/api/items')
      .then(response => response.json())
      .then((data: TItem[]) => {
        console.log(data);
        const filteredResults = data.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setQueryResults(filteredResults);
      });
  };


  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="colored"
        pauseOnHover
      />
      <Navbar
        updateResults={updateResults}
      />  
      <Items 
        title="Exclusive Sale" 
        offer={true} 
        data={queryResults} 
        />
      <Items 
        data={queryResults}  />
    </div>
  );
};

export default Home;
