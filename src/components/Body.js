import { useEffect, useState } from "react";
import React from "react";
import Card from "./Card";

import { IoIosSearch } from "react-icons/io";
import resList from "../utils/Data";
import Shimmer from "./Shimmer";
import Cards2 from "./Cards2";
import { Link } from "react-router-dom";

import useOnline from "../hooks/useOnline";
import { promotedResCard } from "./Card";


const Body = () => {
    const [listRestaurent, setListRestaurent] = useState([])
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnline();
   
    const VegCard=promotedResCard(Card);
    // console.log(vegCard);

    useEffect(() => {
        fetchData();

    }, [])
    const fetchData = async function () {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.49870&lng=77.66690&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();

        console.log(json.data.cards)
        setListRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    if (onlineStatus == false) {
        return <h1>Seems that you are not connected to the internet

        </h1>

    }

    if (listRestaurent?.length == 0) {
        return <Shimmer />
    }
    return (
        <div className="mt-4 z-0" >
            <div className=" flex">
            <div className="">

                <button className=" bg-green-100 rounded-md  px-2 py-2 m-12 hover:scale-95 duration-200 text-gray-500 border-2 border-solid border-green-400  " onClick={() => {
                    filteredlistRestaurent = listRestaurent.filter((item) => {

                        return item.info.avgRating > 4.3
                    })

                    setListRestaurent(filteredlistRestaurent)
                }

                }>Top-rated</button>
            </div>

            <div className="flex  m-12">
                    <div className="px-3 py-3   rounded-l-md border-2 border-solid border-green-200">
                <input className="rounded-md " type="text"  class="searchTerm" placeholder="Search here......" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    </div>
                <button type="submit" className="flex justify-center items-center py-4 px-4  bg-green-200 rounded-r-md hover:scale-95 duration-200"
                    onClick={() => {
                        const searchfilter = listRestaurent.filter((resdata) => {
                            console.log(resdata.info.name, searchText)
                            return resdata.info.name.toLowerCase().includes(searchText.toLowerCase)
                        })
                        setListRestaurent(searchfilter)
                    }}
                >
                    <IoIosSearch />Search
                </button>
            </div>
            </div>
            {/* <div>
                <img className="min-w-max" src="https://t4.ftcdn.net/jpg/02/94/26/33/360_F_294263329_1IgvqNgDbhmQNgDxkhlW433uOFuIDar4.jpg" />
            </div> */}






            <div className=" flex justify-center items-center flex-wrap gap-4">


                {
                    listRestaurent?.map((item) => {

                        return (

                            <Link to={"/res/" + item.info.id}
                                key={item.info.id} >

                                {console.log(item.info.veg)}
                                {item.info.veg==true ? (<VegCard resData={item} />) : (<Card resData={item} />)}
                                {/* <Card resData={item} /> */}

                            </Link>
                        )

                    })
                }


            </div>
        </div>
    )
}

export default Body;