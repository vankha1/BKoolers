import { memo} from "react";
import { RiArrowLeftDoubleLine } from "react-icons/ri";

const categories = [
        { name: "All Products", link: "/products" },
        { name: "New Arrivals", link: "/products/newarrivals" },
        { name: "Shirts", link: "/products/shirts" },
        { name: "T-shirts", link: "/products/tshirts" },
        { name: "Pants", link: "/products/pants" },
        { name: "Outerwears", link: "/products/outerwears" },
        { name: "About us", link: "/about" }
];

const Navbar = memo((props) => {
    const { handleMenu, menuState } = props;

    return (
        <div className={`flex flex-col h-[100%] flex-1 bg-[#F5F5F5] ${menuState ? "block" : "hidden"}`}>
            <div className="px-5 h-[10%] flex items-center hover:cursor-pointer border-b border-gray-300">
                <RiArrowLeftDoubleLine size={33} onClick={() => { handleMenu() }} />
            </div>
            <div className="flex flex-col flex-1">
                {
                    categories.map((category, index) => {
                        return (
                            <div key={index} className="h-[10%] flex items-center justify-center border-b-2 border-gray-300 hover:bg-[#FFFFFF] hover:font-semibold hover:cursor-pointer">
                                <a className="w-full text-start ml-10 font-semibold" href={category.link} onClick={() => { handleMenu() }}>{category.name.toUpperCase()}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
});

export default Navbar;