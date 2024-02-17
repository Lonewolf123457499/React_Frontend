import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constant";
import { useParams } from "react-router-dom";
import { RES_MENU } from "../utils/constant";
import useMenu from "../hooks/useMenu" 



const ResMenu = () => {


    const {resId}=useParams();
    const resList=useMenu(resId);

    

    if (resList == null) {
        return <Shimmer />
    }
    const { name,cuisines, costForTwoMessage } = resList?.cards[0]?.card?.card?.info;
    
    
    const menu = resList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards ||resList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card.categories[0].itemCards

    const accData = resList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>( c.card.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
    
    
    console.log(accData)

    
    return (
    <div className="font-md text-center font-600 my-10">
        <h1 className="font-mono font-bold text-2xl text-slate-700"> {name}</h1>
            <p className=" font-md text-slate-500 text-lg">{cuisines.join(",")} - { costForTwoMessage }</p>
     
        {/* <h3>{menu[0]?.card?.info?.name}</h3> */}
        {
            
            
            // menu.map((item)=>{
            //     return(
            //     //     <div key={item?.card?.info?.id}>
            //     //         {/* <img scr={CDN_LINK + item.card.info.imageId} /> */}
                        
            //     //         {item.card.info.imageId == null ? "" : <img className="menu-card" src={CDN_LINK + item.card.info.imageId || ""}/>}
                            
                        
                        
            //     //         <h3>{item?.card?.info?.name}</h3>
            //     //         <h3>Rs {item?.card?.info?.price / 100}.00</h3>

            //     // </div>
                   

            //     )
            // })
           
        
        }


    </div>
    )
}

export default ResMenu;

