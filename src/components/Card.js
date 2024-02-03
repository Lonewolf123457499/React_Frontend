import { CDN_LINK } from "../utils/constant";

const Card = (props) => {

    const{resData}=props;

    const { name, cuisines, avgRating, costForTwo, sla,areaName }=resData?.info;
    console.log(resData.info.name)
    return (
        <div className="res-card">

            <img className="card-img" src={CDN_LINK+resData.info.cloudinaryImageId} />
            <h3>{name} </h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>⭐{avgRating} </h4>
            <h4>{costForTwo} </h4>
            <h4>{sla.slaString} </h4>
            <h4>{areaName} </h4>

        </div>
    )
}

export default Card;