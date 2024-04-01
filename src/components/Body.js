import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [cardList, setCardList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [cart, setCart] = useState(15);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setCart((prev) => prev + 16);
        let response3 = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9059167&lng=75.77273199999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );
        let data3 = await response3.json();
        console.log(data3);

        let response2 = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9545943&lng=75.7455944&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );

        let dat = await response2.json();
        console.log(
          dat?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        console.log(
          data3?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setCardList((prev) => [
          ...prev,
          ...dat?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
          ...data3?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        ]);
        setFilterList((prev) => [
          ...prev,
          ...dat?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
          ...data3?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        ]);
        console.log("else called", cardList);
      }
    } catch (error) {}
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  // const RestaurentCardPromoted = withPromotedRestaurentCard(RestaurentCard);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8548662&lng=75.8242966&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setCardList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offfline, Please check your internet connection !!
      </h1>
    );
  }

  return cardList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-normal items-center p-4 mt-40">
        <div className="flex mx-2">
          <input
            className="border border-solid border-gray-600 rounded-md mr-1 p-2 text-xl w-[400px] text-start "
            value={searchText}
            placeholder="Search for restaurent and food"
            onChange={(e) => {
              setSearchText(e.target.value);
              const seachList = cardList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setFilterList(seachList);
            }}
          />
        </div>

        <div>
          <button
            className="px-3 py-2 text-2xl bg-slate-300 rounded-md ml-8 font-medium"
            onClick={() => {
              const filterData = filterList.filter(
                (res) => res.info.avgRating >= 4
              );
              return setFilterList(filterData);
            }}
          >
            Top Rated Restaurent
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterList.map((restaurent, index) => (
          <Link
            key={restaurent.info.id + index}
            to={"/restaurents/" + restaurent.info.id}
          >
            {restaurent.info.promoted ? (
              <RestaurentCardPromoted resData={restaurent} />
            ) : (
              <RestaurentCard resData={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
