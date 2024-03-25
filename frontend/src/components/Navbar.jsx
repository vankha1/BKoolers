import {FaBars} from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { PiSuitcaseSimple } from "react-icons/pi";
import { useState, useEffect } from "react";

import Menu from "./Menu";

const Navbar = () => {
    const [isMenuOpen, setMenuStatus] = useState(false);

    const handleMenu = () => {
        setMenuStatus(!isMenuOpen);
    }

    return (
        <div className="h-[8%] flex justify-between align-middle bg-gray-600">
            <div className="flex basis-1/2 justify-between">
                <div className="basis-1/2 my-auto">
                    <div className="ml-5">
                        <div style={{display: (isMenuOpen ? "none" : "block")}}>
                           <FaBars size={"3rem"} onClick={() => {handleMenu()}}/> 
                        </div>
                        <div className={`flex absolute inset-0 bg-white ${isMenuOpen ? 'w-[25%] h-[100%]' : 'w-[0%] h-[100%]' } duration-[0.25s] transition-all ease-in-out`}  style={{}}>
                           <div className={`flex-1 ${isMenuOpen ? "block" : "hidden"}`}><Menu handleMenu={handleMenu}/> </div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/2">
                    <a href="#">
                        Logo
                    </a>
                </div>
            </div>
            <div className="flex flex-1 justify-end">
                <input className="h-1/2 w-1/3 mx-2 my-auto rounded"/>
                <IoIosSearch className="my-auto" size={"2.5rem"}/>
                <PiSuitcaseSimple className="ml-8 mr-3 my-auto" size={"2.5rem"}/>
                <a className="h-[90%] w-10 mx-3 my-auto flex">
                </a>
            </div>
        </div>
    )
};

export default Navbar;