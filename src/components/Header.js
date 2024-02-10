import { IoCartOutline } from "react-icons/io5";
import { LOGO } from "../utils/constant";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO} />
            </div>
            <div className="nav-item">
                <ul className="nav-ul">
                    <li>
                        <Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About-Us</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>
                        <Link to={"/Cart"}><IoCartOutline style={{ width: 75 }} /></Link>
                         
                    </li>

                    <li><DarkMode /></li>

                </ul>
            </div>
        </div>

    )
}

export default Header;