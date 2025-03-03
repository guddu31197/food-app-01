import React, { useEffect, useState } from "react";
import ResturantCard, {withPrometedLabel} from "./ResturantCard";
import Shimmer from "./Shimmer";
// import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  // State variables for restaurant data and search
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const ResturantCardPromoted = withPrometedLabel(ResturantCard)

  // Fetch restaurant data on initial load
  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  const fetchRestaurantsData = async () => {
    try {
      const response = await fetch(
        "/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      console.log(data);
      
      const restaurants =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setListOfRestaurants(restaurants); // Set all restaurants data
      setFilteredRestaurants(restaurants); // Initially, display all restaurants
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((restaurant) =>
      restaurant.data.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  const handleFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.cuisine === "Indian"
    );
    setFilteredRestaurants(filteredList);
  };

  return (
    <>
      <Header />
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div>
          <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4">
                <input
                  type="text"
                  className="border border-solid border-black rounded-sm p-2"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search restaurants..."
                />
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                 onClick={handleSearch}>Search</button>
              </div>
              <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={handleFilter}>
                  Top Rated Restaurants
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-evenly">
              {filteredRestaurants.map((restaurant) => {
                  // console.log(restaurant.info.id);
                return <ResturantCard key={restaurant.info.id} data={restaurant} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
