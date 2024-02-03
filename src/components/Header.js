import { IoCartOutline } from "react-icons/io5";
import { LOGO } from "../utils/constant";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO} />
            </div>
            <div className="nav-item">
                <ul className="nav-ul">
                    <li>Home</li>
                    <li>Order</li>
                    <li>ContactUS</li>
                    <li><IoCartOutline style={{ width: 75 }} /></li>

                </ul>
            </div>
        </div>

    )
}

export default Header;