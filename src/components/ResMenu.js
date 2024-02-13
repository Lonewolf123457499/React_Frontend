import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constant";
import { useParams } from "react-router-dom";
import { RES_MENU } from "../utils/constant";
import useMenu from "../hooks/useMenu" 
import useOnline from "../hooks/useOnline";


const ResMenu = () => {


    const {resId}=useParams();
    const resList=useMenu(resId);

    if (resList == null) {
        return <Shimmer />
    }
    const { name,cuisines, costForTwoMessage } = resList?.cards[0]?.card?.card?.info;
    
    // const { menuList} = resList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards)
    const menu = resList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards ||resList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card.categories[0].itemCards
    // console.log(resList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.categories[0].itemCards)


    
    return (<>
        <h1> {name}</h1>
        <h3>{cuisines.join(",")}</h3>
        <h3>{costForTwoMessage}</h3>
        {/* <h3>{menu[0]?.card?.info?.name}</h3> */}
        {
            
            
            menu.map((item)=>{
                return(
                    <div key={item?.card?.info?.id}>
                        {/* <img scr={CDN_LINK + item.card.info.imageId} /> */}
                        
                        {item.card.info.imageId == null ? "" : <img className="menu-card" src={CDN_LINK + item.card.info.imageId || ""}/>}
                            
                        
                        
                        <h3>{item?.card?.info?.name}</h3>
                        <h3>Rs {item?.card?.info?.price / 100}.00</h3>

                </div>
                   

                )
            })
           
        
        }


    </>
    )
}

export default ResMenu;

