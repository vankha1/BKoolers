import { FaBars } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Cart from "../Cart/Cart";
import Navbar from "./Navbar";

const Header = (props) => {
    const userId = document.cookie.includes('user');
    const [isMenuOpen, setMenuStatus] = useState(false);
    const scrollRef = props.scrollRef;
    const handleMenu = async () => {
        setMenuStatus(!isMenuOpen)
    }

    useEffect(() => {
        if(isMenuOpen) {
            scrollRef.current.className = "overflow-hidden h-screen";
        } else {
            scrollRef.current.className = "h-screen";
        }
    }, [isMenuOpen])


    return (
        <div className="w-full py-5 flex justify-between align-middle bg-white">
            <div className="px-5 flex basis-1/3 items-center justify-between">
                <div className={`h-fit ${isMenuOpen ? "hidden" : "block"} hover:cursor-pointer`}>
                    <FaBars size={25} onClick={() => { handleMenu() }} />
                </div>
                <div className={`fixed inset-0 z-[99] w-screen bg-black/20 ${isMenuOpen ? "h-screen" : "h-0"}`}>
                    <div className={`flex h-full bg-white ${isMenuOpen ? 'w-1/2 lg:w-[25%]' : 'w-[0%]'} duration-[0.25s] transition-width ease-in-out`}>
                        <Navbar handleMenu={handleMenu} menuState={isMenuOpen}  />
                    </div>
                </div>
            </div>
            <div className="flex basis-1/3 justify-center items-center">
                <Link to="/">
                    <div className='m-auto w-40 md:w-52 h-10 flex justify-center items-center font-bold bg-black text-white'>
                        BKoolers
                    </div>
                </Link>
            </div>
            <div className="flex basis-1/3 justify-end">
                <input className="h-2/3 w-1/3 md:w-1/2 mx-3 my-auto px-2 rounded border-2 border-gray-300 focus:border-gray-500 outline-none" />
                <IoIosSearch className="my-auto hidden md:block" size={25} />
                <div className="relative inline-flex mx-0 md:ml-3 mr-3 my-auto">
                    <Cart scrollRef={scrollRef}/>
                </div>
                {
                    userId ?
                    <Link to={"/user"} className="h-[95%] w-20 px-1 flex justify-between items-center">
                        <div className="h-10 w-10 rounded-full flex justify-between items-center border border-gray-300">
                            <img className="object-scale-down h-6 w-10" src="/images/user.webp" alt=""></img>
                        </div>
                    </Link>
                    :
                    <Link to={"/signin"} className="h-[95%] w-20 py-3 px-1">
                        <div className="h-full w-full flex items-center justify-center rounded-lg border-2 border-gray-300 text-sm hover:border-gray-700">
                            Sign in
                        </div>
                    </Link>
                }
            </div>
        </div>
    )
};

export default Header;