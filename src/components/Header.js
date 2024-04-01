import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { GoHome } from "react-icons/go";
const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const cardItems = useSelector((store) => store.cart.items);
  const [sign, setSign] = useState(true);
  const handleSignIn = () => {
    setSign(!sign);
  };
  return (
    <div className="flex justify-between border border-solid border-gray-200 shadow-lg mb-2 bg-gray-100 items-center fixed top-0 w-full">
      <div className="image">
        <Link to="/">
          <img src={LOGO_URL} className="w-14" />
        </Link>
      </div>
      <div className="">
        <ul className="flex p-3 m-2 ">
          {/* <li className="px-4 text-2xl font-medium text-gray-900">
            Online Status:{onlineStatus ? "🟢" : "🛑"}
          </li> */}
          <li className="px-4 text-2xl font-medium text-gray-900 hover:text-orange-400">
            <Link to="/" className="flex items-center justify-center">
              {" "}
              <GoHome className="mr-1" />
              Home
            </Link>
          </li>
          <li className="px-4 text-2xl font-medium text-gray-900 hover:text-orange-400">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4 text-2xl font-medium text-gray-900 hover:text-orange-400">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 text-2xl font-medium text-gray-900 hover:text-orange-400">
            <Link to="/help">
              <div className="flex items-center justify-center">
                <IoHelpBuoyOutline className="pr-1 text-3xl" />
                Help
              </div>
            </Link>
          </li>

          <li className="px-4 text-2xl font-medium text-gray-900 flex hover:text-orange-400">
            <Link to="/cart" className="flex items-center justify-center  ">
              <button
                type="button"
                className="btn position-relative text-2xl border-none w-10 mr-3 "
              >
                <BsCart className="text-2xl" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-gray-600 text-white hover:bg-orange-400">
                  {cardItems.length}
                </span>
              </button>
              Cart
            </Link>
          </li>
        </ul>
      </div>
      <div className="auth">
        <ul className="flex p-3 m-2">
          <li className="px-4 text-2xl font-medium text-gray-900 hover:text-orange-400">
            <Link
              to="#"
              className="flex items-center justify-center"
              onClick={handleSignIn}
            >
              <MdOutlineAssignmentInd className="mr-1" />
              {sign ? "Sign In" : "Sign Up"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
