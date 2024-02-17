import { CDN_LINK } from "../utils/constant";
import { LuVegan } from "react-icons/lu";
import { MdStars } from "react-icons/md";
const Card = (props) => {

    const{resData}=props;

    const { name, cuisines, avgRating, costForTwo, sla,areaName }=resData?.info;
    return (
        <div className="flex flex-col   m-4 p-4 w-[250px]   max-w-sm overflow-hidden  bg-opacity-10 backdrop-blur-md bg-black/5    rounded-md  border border-gray-300 hover:scale-95 duration-200 
">
            <div className="">
                <img className="w-full h-[200px] rounded-md" src={CDN_LINK+resData.info.cloudinaryImageId} />
            </div>
            <h3 className="text-xl font-medium">{name} </h3>
            <h4 className="">{cuisines.join(",")}</h4>
            <h4 className="flex"><MdStars  className="my-1 text-green-600"/>{avgRating} </h4>
            <h4>{costForTwo} </h4>
            <h4>{sla.slaString} </h4>
            <h4>{areaName} </h4>

        </div>
    )
}
const promotedResCard=(Card)=>{
    return(props)=>{
        return(
            <div>
                <label className=" absolute z-10  my-8 mx-9 px-2 text-green-600 font-semibold"><LuVegan /></label>
            {console.log("pcard")}
            <Card {...props} className="z-0 relative"/>
            </div>
        )
    }
}

export default Card;
export {promotedResCard};