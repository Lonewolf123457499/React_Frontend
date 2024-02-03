import React from "react"
import  ReactDOM from "react-dom/client"

import Header from "./src/components/Header";
import Body from "./src/components/Body";

//   this the to gave css in jsx  we gave css in object form
// style = {{ backgroundColor: "grey" }}


const AppLayout=()=>{
    return(
      <div>
        <Header/>
        <Body/>
      </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
