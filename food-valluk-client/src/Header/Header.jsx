import { NavLink } from "react-router-dom";
import logo from '.././assets/Foodvalluk.svg'
import './Header.css'
import { IoMdMenu } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
    return (
        <div className="fixed z-10">
            <div className="navbar bg-[#714c3397] text-[#c38c66] backdrop-blur fixed top-0 p-4 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <IoMdMenu className="w-5 h-5" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#2d180d] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <NavLink className="flex justify-center space-x-1 items-end w-50%">
                    <img className="w-10" src={logo} />
                    <span className="leading-4 logoTextColor" style={{ fontFamily: "Rubik Beastly, system-ui" }}>Food Valluk</span>
                </NavLink>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                    <AiOutlineSearch className="w-5 h-5" />
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <IoNotificationsOutline className="w-5 h-5" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;