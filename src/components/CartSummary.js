import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/cartSlice";

const CartSummary = () => {
  const cardItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleAllItem = () => {
    dispatch(clearItems());
  };

  const CONVENIENCE_FEES = 99;
  let totalItem = cardItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  cardItems.forEach((item) => {
    totalMRP += item.card.info.defaultPrice / 100 || item.card.info.price / 100;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div className="text-lg font-medium ">
      <div className="flex justify-between my-1">
        <span>Total MRP</span>
        <span>₹{totalMRP}</span>
      </div>
      <div className="flex justify-between my-1">
        <span>Discount on MRP</span>
        <span>₹{totalDiscount}</span>
      </div>
      <div className="flex justify-between my-1">
        <span>Convenience Fee</span>
        <span>₹99</span>
      </div>
      <hr />
      <div className="flex justify-between my-1">
        <span>Total Amount</span>
        <span>₹{finalPayment}</span>
      </div>
      <div className="flex justify-evenly font-bold cursor-pointer p-2 mt-4">
        <button className="border border-solid border-gray-300 p-1 hover:bg-gray-400  ">
          PLACE ORDER
        </button>
        <button
          className="border border-solid border-gray-300 p-1 hover:bg-gray-400 "
          onClick={handleAllItem}
        >
          ClearAll
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
