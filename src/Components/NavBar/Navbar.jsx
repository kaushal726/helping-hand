import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./Navbar.css";
const Navbar = () => {
    return (
        <>
            <nav className="w-full ">
                <div className="w-full flex items-center justify-center h-12 bg-black text-white ">
                    <ul className="flex items-center justify-center space-x-6 h-12">
                        <li className="flex items-center justify-center ">
                            <NavLink
                                className="h-12 flex items-center justify-center text-2xl "
                                to="/"
                            >
                                {AiFillHome}
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                className="h-12 flex items-center justify-center "
                                to="/your-health-and-wellbeing"
                            >
                                Your Health and WellBeing
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                className="h-12 flex items-center justify-center "
                                to="/financial-aid"
                            >
                                Financial Aid
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                className="h-12 flex items-center justify-center "
                                to="/helping-your-business"
                            >
                                Helping your Business
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                className="h-12 flex items-center justify-center "
                                to="/supported-living"
                            >
                                Supported Living
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                className="h-12 flex items-center justify-center "
                                to="/get-involved"
                            >
                                Get Involved
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink
                                className="h-12 flex items-center justify-center "
                                to="/about-us"
                            >
                                About us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
