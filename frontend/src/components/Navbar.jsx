import {RiListCheck} from "react-icons/ri";
import { useState, useEffect } from "react";

import Menu from "./Menu";

const Navbar = () => {
    const [isMenuOpen, setMenuStatus] = useState(false);

    const handleMenu = () => {
        console.log(isMenuOpen);
        setMenuStatus(!isMenuOpen);
    }

    return (
        <div className="h-[8%] flex justify-between align-middle bg-gray-600">
            <div className="flex basis-1/2 justify-between">
                <div className="basis-1/2 my-auto">
                    <div className="ml-5">
                        <div style={{display: (isMenuOpen ? "none" : "block")}}>
                           <RiListCheck size={"3rem"} onClick={() => {handleMenu()}}/> 
                        </div>
                        <div className={`flex absolute inset-0 bg-white ${isMenuOpen ? 'w-[25%] h-[100%]' : 'w-[0%] h-[100%]' } duration-[0.25s] transition-all ease-in-out`}  style={{}}>
                           <div className={`flex-1 ${isMenuOpen ? "block" : "hidden"}`}><Menu handleMenu={handleMenu}/> </div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/2">Logo</div>
            </div>
            <div className="basis-1/2">tool bar</div>
        </div>
    )
};

export default Navbar;