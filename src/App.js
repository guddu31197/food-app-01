import React from "react";
import ReactDOM from "react-dom/client";
import { RestaurantCard } from "./Resturant";
import { Header } from "./Header";
import {data} from './resturent'


const Body = () => {
  console.log(data)
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">

        {data.map((item, index) => 
        
        <RestaurantCard 
          resName={item.name}
          cuisine={item.cuisine_type}
          />
        )}
       
       
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
