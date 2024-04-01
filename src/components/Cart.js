import { useDispatch, useSelector } from "react-redux";
import { CND_URL } from "../utils/constants";
import { addItem, clearItems, removeItem } from "../utils/cartSlice";
import CartSummary from "./CartSummary";
import { useState } from "react";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleAddCard = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveCard = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="mt-40 bg-gray-50 p-4 mx-auto shadow-lg w-5/12 border border-solid border-gray-200">
      <h1 className="font-bold text-2xl text-center">
        Cart ( {cardItems.length} Items )
      </h1>
      {cardItems.length === 0 && (
        <div>
          <h2 className="font-bold text-xl text-center pt-4">
            {" "}
            Your Cart is empty!{" "}
          </h2>
          <h3 className="font-medium text-md text-center pt-2">
            You can go to home page to view more restaurants.
          </h3>
        </div>
      )}

      {cardItems.map((item, index) => (
        <div
          className=" border-b-2 border-gray-200 py-2 my-2"
          key={item.card.info.id + index}
        >
          <div className="flex justify-between">
            <div className="w-3/12">
              <span className="font-medium text-lg">{item.card.info.name}</span>
            </div>

            <div className="border border-solid border-black w-16 h-10 flex items-center">
              <button
                className="text-4xl p-1"
                onClick={() => handleRemoveCard(item)}
              >
                -
              </button>

              {/* <button>{arr.length}</button> */}
              <button
                className="text-4xl p-1"
                onClick={() => handleAddCard(item)}
              >
                +
              </button>
            </div>
            <div className="text-right">
              <span className="font-medium text-lg">
                ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
            </div>
          </div>
        </div>
      ))}
      {cardItems.length != 0 && <CartSummary />}
    </div>
  );
};

export default Cart;
