import {FaBars} from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";

import Cart from "./Cart";
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
                    <div>
                        <div className={`ml-5 ${isMenuOpen ? "hidden" : "block"}`}>
                           <FaBars size={"3rem"} onClick={() => {handleMenu()}}/> 
                        </div>
                        <div className={`absolute inset-0 z-[99] w-screen bg-black/20 ${isMenuOpen ? "h-screen" : "h-0"}`}>
                            <div className={`flex h-full bg-white ${isMenuOpen ? 'w-[25%]' : 'w-[0%]' } duration-[0.25s] transition-all ease-in-out`}>
                               <Menu handleMenu={handleMenu} menuState={isMenuOpen}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/2">
                    <a href="/">
                        Logo
                    </a>
                </div>
            </div>
            <div className="flex flex-1 justify-end">
                <input className="h-1/2 w-1/3 mx-2 my-auto rounded"/>
                <IoIosSearch className="my-auto" size={"2.5rem"}/>
                <div className="relative inline-flex ml-8 mr-3 my-auto">
                    <Cart/>
                </div>
                <a className="h-[90%] w-10 mx-3 my-auto flex">
                </a>
            </div>
        </div>
    )
};

export default Navbar;