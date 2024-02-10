import React from "react";
import { ShimmerButton } from "react-shimmer-effects";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

class Shimmer extends React.Component {
    render() {

        return(
        <>
          <div style={{backgroundColor:"black"}}>

         
            {/* <ShimmerSimpleGallery card imageHeight={200} /> */}
            <ShimmerSimpleGallery card={true} imageHeight={200} caption />
            </div>
        </>)
    }
}
export  default Shimmer;