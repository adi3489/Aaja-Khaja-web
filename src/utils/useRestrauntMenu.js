import { use, useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  //fetchdata
  useEffect(() => {
    fetchData();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresInfo(json.data);
    // console.log(json);
    // console.log("Menu");
  };
  return resInfo;
};
export default useRestrauntMenu;
