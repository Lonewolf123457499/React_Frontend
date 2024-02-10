import { useEffect, useState } from "react";
import React from "react";
import Card from "./Card";

import { IoIosSearch } from "react-icons/io";
import resList from "../utils/Data";
import Shimmer from "./Shimmer";
import Cards2 from "./Cards2";




// const [listRestaurent, setListRestaurent]=React.useState(resList)

const Body = () => {
    const [listRestaurent, setListRestaurent] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        fetchData();

    }, [])
    const fetchData = async function () {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.49870&lng=77.66690&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();

        console.log(json.data.cards)
        setListRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    if (listRestaurent?.length == 0) {
        return <Shimmer />
    }
    return (
        <div className="body-container">

            <div className="filter">

                <button onClick={() => {
                    filteredlistRestaurent = listRestaurent.filter((item) => {

                        return item.info.avgRating > 4.3
                    })

                    setListRestaurent(filteredlistRestaurent)
                }

                }>Top-rated</button>
            </div>
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?" value={searchText}
                     onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button type="submit" class="searchButton" 
                    onClick={()=>{
                          const searchfilter=listRestaurent.filter((resdata)=>{
                            console.log(resdata.info.name,searchText)
                            return resdata.info.name.toLowerCase().includes(searchText.toLowerCase)
                        })
                        setListRestaurent(searchfilter)
                    }}
                    >
                        <IoIosSearch />
                    </button>
                </div>
            </div>

            <div className="res-container"
            >


                {
                    listRestaurent?.map((item) => {
                        return (
                            <div key={item.info.id} >
                                <Card resData={item} />
                            </div>
                        )

                    })
                }

                <Cards2/>


            </div>
        </div>
    )
}

export default Body;