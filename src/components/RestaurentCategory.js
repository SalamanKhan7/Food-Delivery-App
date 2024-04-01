import ItemList from "./ItemList";

const RestaurentCategory = ({ data }) => {
  const { cards } = data.groupedCard?.cardGroupMap?.REGULAR;

  const filterCards = cards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return <ItemList cards={filterCards} />;
};

export default RestaurentCategory;
