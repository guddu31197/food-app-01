import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import axios from "axios";

const RestaurantMenu = (data) => {

    
    console.log(data);
    const [resInfo, setResInfo] = useState(data)

    useEffect(()=>{
      fetchMenu()
    }, []);

    const fetchMenu = async () => {
        console.log("function call");
        try {
            
            const data = await fetch('dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
     
             const json = await data.json();
             console.log(json);
             setResInfo(json.data)        
        } catch (error) {
            console.log(error)
        }
    };
    if( resInfo === null ) return <Shimmer/>

    // const {name} = resInfo?.data.cards[0].card.card.gridElements.restaurants;
    // console.log(name);
    

    return(
       
        <div className="menu">
            {/* <h1>{name}</h1> */}
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;