import { useEffect, useState } from "react";

const useMenu=(resId)=>{
    const [resList, setresListt] = useState(null);
    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async function () {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.6054391&lng=77.5945308&restaurantId=" + resId)
        // console.log("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.6054391&lng=77.5945308&restaurantId=" + resId)
        const json = await data.json()
        // console.log(json)
        setresListt(json.data);


    }

    return resList;
}
export default useMenu;