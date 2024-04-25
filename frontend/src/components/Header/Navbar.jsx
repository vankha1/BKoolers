import { memo} from "react";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const categories = [
        { name: "All Products", link: "/products" },
        { name: "New Arrivals", link: "/products/newarrivals" },
        { name: "Best Sellers", link: "/products/bestsellers" },
        { name: "Shirts", link: "/products/shirts" },
        { name: "Pants", link: "/products/pants" },
        { name: "Foot Wears", link: "/products/footwears" },
        { name: "Outer Wears", link: "/products/outerwears" },
        { name: "About us", link: "/about" }
];

const Navbar = memo((props) => {
    const { handleMenu, menuState } = props;

    return (
        <div className={`flex flex-col h-[100%] flex-1 ${menuState ? "block" : "hidden"}`}>
            <div className="px-5 h-[8%] flex items-center">
                <RiArrowLeftDoubleLine size={33} onClick={() => { handleMenu() }} />
            </div>
            <div className="flex flex-col flex-1">
                {
                    categories.map((category, index) => {
                        return (
                            <div key={index} className="h-[10%] flex items-center justify-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-semibold">
                                <Link className="w-full text-center" to={category.link} onClick={() => { handleMenu() }}>{category.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
});

export default Navbar;