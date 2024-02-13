import { useEffect, useState } from "react";

const useOnline=()=>{

    const [onlineStatus,setOnlineStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("online", (event) => {
            console.log("You are now connected to the network.");
            setOnlineStatus(true)
        });
        
    
    })

    useEffect(() => {
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false)
            console.log("You are now connected to the network.");
        });
    })

    return onlineStatus;

}
export default useOnline;