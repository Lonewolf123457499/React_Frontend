import React  from "react";
class UserClass extends React.Component
{
    constructor(props)
    {
        console.log("Inside the constuctor")
        super(props),
        this.state={
            userInfo:{
                name:"xyz",
                location:"India"
            }
           
        }
    }
    async componentDidMount()
    {
        debugger;
        const data = await fetch("https://api.github.com/users/Lonewolf123457499")
        const json=await data.json()
        this.setState({userInfo:json});

    }

    // never directly updated the state varaiable
    render()
    {
        
        
       
        return(
            <div className="user-card">
                <img src="https://avatars.githubusercontent.com/u/93176679?v=4" className="profile"></img>
                <h3> Name: {this.state.userInfo.name}</h3>
                <h3>Location:{this.state.userInfo.location}</h3>
                <h3>Contact:7668786248</h3>
            </div>
        )
    }
}
export default UserClass;