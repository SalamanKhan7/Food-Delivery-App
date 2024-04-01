import { CND_URL } from "../utils/constants";

const RestaurentCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div
      className="m-2 p-4 w-[250px] h-[370px] rounded-lg hover:border border-solid border-gray-300 bg-gray-100"
      data-testid="resCard"
    >
      <img
        className="h-[150px] w-[250px] rounded-lg "
        src={CND_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg my-2">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo} </h3>
      <h3>{sla.deliveryTime} mins</h3>
    </div>
  );
};

export const withPromotedRestaurentCard = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 m-2 bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};
export default RestaurentCard;
