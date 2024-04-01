import { useState } from "react";
import NewItem from "./NewItem";

const ItemList = ({ cards }) => {
  const [showText, setShowText] = useState(null);

  return (
    <div>
      {cards.map((item, index) => (
        <NewItem
          item={item}
          key={index}
          showText={index === showText && true}
          setShowText={() => setShowText(index)}
        />
      ))}
    </div>
  );
};

export default ItemList;
