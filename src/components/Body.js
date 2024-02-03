import Card from "./Card";

import resList from "../utils/Data";

   
const Body = () => {
    return (
        <div className="body-container">
            <div className="search">Search Box</div>
            <div className="res-container">
                {/* restaurent */}


               {
                resList.map((item)=>{
                    return(
                        <div key={item.id}>
                            <Card resData={item}/>
                        </div>
                    )
                    
                })
               }
                

            </div>
        </div>
    )
}

export default Body;