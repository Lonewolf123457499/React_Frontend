import React from "react"
import  ReactDOM from "react-dom/client"

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import DarkMode from "./src/components/DarkMode";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import Contact from "./src/components/Contact";
import ResMenu from "./src/components/ResMenu";
import Cart from "./src/components/Cart";

//   this the to gave css in jsx  we gave css in object form
// style = {{ backgroundColor: "grey" }}



const AppLayout=()=>{
    return(
      <div>
        <Header/>
        <Outlet/>
      </div>
    )
}
const appRout = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body/>
      },
    
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/cart",
        element:<Cart/>


      },
      {
        path:"/res/:resId",
      element:<ResMenu/>      }
  ],
}

 


])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRout}/>)
