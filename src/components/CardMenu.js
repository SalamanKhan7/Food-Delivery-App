import { useDispatch } from "react-redux";
import { CND_URL } from "../utils/constants";

import { addItem } from "../utils/cartSlice";

const CardMenu = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddCard = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {data.map((item) => (
        <div
          className=" border-b-2 border-gray-200 py-6 my-6"
          key={item.card.info.id}
        >
          <div className="flex justify-between">
            <div className="w-7/12">
              <span className="font-medium text-lg">{item.card.info.name}</span>
              <span className="font-medium text-lg">
                - ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
              <div>
                <p className=" text-sm py-4">{item.card.info.description}</p>
              </div>
            </div>
            <div className="w-2/12">
              <label className="absolute bg-white text-black mx-6 mt-24 px-4 border border-solid border-gray-200 rounded-sm font-medium ">
                <button
                  onClick={() => handleAddCard(item)}
                  className="shadow-lg hover:text-green-500"
                >
                  ADD+
                </button>
              </label>
              <img
                className="w-32 h-28 rounded-md"
                src={CND_URL + item.card.info.imageId}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMenu;
