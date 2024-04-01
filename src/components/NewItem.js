import { useState } from "react";

import CardMenu from "./CardMenu";
import Cart from "./Cart";

const NewItem = ({ item, showText, setShowText }) => {
  const [selfShow, setSelfShow] = useState(false);
  const handleBtn = () => {
    setShowText();
    setSelfShow(!selfShow);
  };
  return (
    <div className=" bg-gray-50 p-4 mx-auto my-2 shadow-lg w-9/12 border-b-2 border-solid border-gray-200 ">
      <div
        className="flex justify-between font-bold text-lg cursor-pointer"
        onClick={handleBtn}
      >
        <span>
          {item.card.card.title} ({item.card.card.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {showText && selfShow && <CardMenu data={item.card.card.itemCards} />}
    </div>
  );
};

export default NewItem;
