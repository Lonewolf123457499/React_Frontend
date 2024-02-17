import { IoCartOutline } from "react-icons/io5";
import { LOGO } from "../utils/constant";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import { FaExclamationCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
// import { LOGO } from "../../public/images/";
import { LOGO } from "../utils/constant";

const Header = () => {
    const onlineStatus=useOnline();
    console.log(onlineStatus);
    return (
        <div className="flex h-[110px] bg-white justify-between  items-center shadow-md shadow-rose-200 font-semibold  font-mono sticky top-0 left-0 right-0 z-20  ">
            <div className="logo-container">
                <img className="w-10 rounded-full" src={LOGO} />
                
            </div>
            <div className="">
                <ul className="flex items-center text-slate-600  justify-between">
                    {onlineStatus == true ? <li className="px-2 py-1.5 text-green-600 text-xl"> <FaCheckCircle /></li> : <li className="px-2 py-1.5 text-red-600">
                        <FaExclamationCircle /></li>}
                    <li className="px-2 text-green-400 text-2xl hover:text-red-400"> <Link to={"/"}>Home</Link></li>
                    <li className="px-2 text-green-400 text-2xl hover:text-red-400" ><Link to={"/about"}>About</Link></li>
                    <li className="px-2 text-green-400 text-2xl hover:text-red-400"><Link to={"/contact"}>Contact</Link></li>
                    <li className="px-2 text-green-400 text-2xl hover:text-red-400"><Link to={"/grocery"}>Grocery</Link></li>
                    <li className="">
                    
                        <Link className="text-green-500 text-2xl hover:text-red-400" to={"/Cart"}><HiShoppingCart  style={{ width: 95 }} /></Link>
                    </li>
                    {/* <li className="text-black-400"><DarkMode  /></li> */}

                </ul>
            </div>
        </div>

    )
}

export default Header;