import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// Not using keys is not acceptable <<< index as key <<< unique key (best practice)
// const Body = () => {
  // Local State Variable - Super Powerful variable
//   const [listofRestaurants, setlistofRestaurants] = useState(reslist);

  // Normal JS Variable
  //   let listofRestaurants = [
  //     {
  //       data: {
  //         id: "74453",
  //         name: "Domino's Pizza",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Pizzas"],
  //         costForTwo: 40000,
  //         avgRating: "4.5",
  //       },
  //     },
  //     {
  //       data: {
  //         id: "74653",
  //         name: "KFC",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Buckets"],
  //         costForTwo: 40000,
  //         avgRating: "3.8",
  //       },
  //     },
  //     {
  //       data: {
  //         id: "74853",
  //         name: "MCD",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Fries"],
  //         costForTwo: 50000,
  //         avgRating: "4.4",
  //       },
  //     },
  //   ];

  // Use effect will be called with the 2 arguments which is (callback function) and (Dependency)
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json1 = await data.json();

//     console.log(json1);
//     setlistofRestaurants(
//       json1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info
//     );

    // if (listofRestaurants.length === 0) {
    //   return <Shimmer />;
//   };

//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listofRestaurants.filter(
//               (res) => res.data.avgRating > 4
//             );

//             setlistofRestaurants(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//         <div className="res-container">
//           {listofRestaurants.map((restaurant) => (
//             <RestaurantCard key={restaurant.data.id} resData={restaurant} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const Body = () => {
  // Local State Variable - Super Powerful variable
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [filterrestaurant, setfilterrestaurant] = useState("");

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);

      setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setfilterrestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);


    };

  // Conditional Rendering
  // if (listofRestaurants.length === 0) {
  //   return <Shimmer />;
  // }


  // Use of Ternary Operator for conditional rendering  
  return  listofRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button onClick={() => {
            // Filter the restaurant cards and update the UI
            // Searchtext

            const filteredres = listofRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );

            setfilterrestaurant(filteredres);

            console.log(searchtext);
          }}
          >Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filterrestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setfilterrestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterrestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
