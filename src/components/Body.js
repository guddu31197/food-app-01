import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local State variable _Super powerful variable
    const [listOfResturants, setListOfRseturant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
      fetchData();
    }, []);
    

    const fetchData = async () => {
      const data = await fetch(
        "/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

      // Optional chaning
      setListOfRseturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfResturants.length ===0 ? (
      <Shimmer/>
    ) : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {
              setSearchText(e.target.value);
            }}
            />
            <button
              onClick={() =>{
                const filteredResturant = listOfResturants.filter(
                  (res) =>res.data.info.name.includes(searchText)
                );
                setListOfRseturant(filteredResturant)
              }}
            
            >
              Search
            </button>
          </div>
            <button 
                className="filter-btn"
                onClick={()=>{
                    const filteredList=listOfResturants.filter(
                        (data) => data.cuisine === "Indian"
                );
                setListOfRseturant(filteredList);
            }}
            >
              Top Rated Resturants
            </button>
        </div>
        <div className="res-container">
          {listOfResturants.map((resturant) => (
            <ResturantCard key={resturant.info.id} data={resturant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;