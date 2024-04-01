import { useEffect, useState } from "react";
import { API_URL } from "./constants";

function useRestaurentMenu(resId) {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchRes();
  }, []);
  const fetchRes = async () => {
    const data = await fetch(API_URL + resId);

    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
}
export default useRestaurentMenu;
