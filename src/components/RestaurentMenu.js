import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

function RestaurentMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="mt-40">
      <h1 className="font-bold my-1 text-2xl pt-4 pb-1 text-center">{name}</h1>
      <p className=" my-2 text-lg py-2 text-center">
        {cuisines.join(", ")}-{costForTwoMessage}{" "}
      </p>
      <RestaurentCategory data={resInfo?.cards[4]} />
    </div>
  );
}

export default RestaurentMenu;
