import React from "react"
import  ReactDOM from "react-dom/client"



const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-delivery-man-riding-motorcycles-cartoon-art-illustration_56104-610.jpg?w=900&t=st=1706800740~exp=1706801340~hmac=76ec51cbee95ea4cbec0bd97bafd44a175facc026c9b40cda02a75c4ea711487"/>
            </div>
            <div className="nav-item">
                <ul className="nav-ul">
                    <li>Home</li>
                    <li>Order</li>
                    <li>ContactUS</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>

    )
}

//   this the to gave css in jsx  we gave css in object form
// style = {{ backgroundColor: "grey" }}

const Card=()=>{
    return(
        <div className="res-card">

            <img className="card-img" src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"/>
            <h3>Lassi </h3>
            <h4>3.8 ⭐ </h4>
            <h4>20-25 mins </h4>
            <h4>North Indian, Chinese, FastFood </h4>
            <h4>Shankar vihar </h4>
            
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body-container">
            <div className="search">Search Box</div>
            <div className="res-container">
                 {/* restaurent */}
                 <Card/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

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
