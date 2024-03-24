import { RiArrowLeftDoubleLine } from "react-icons/ri";

const Menu = (props) => {
    const {handleMenu} = props;
    const handle = () => {
        handleMenu()
    }

    return (
        <div class="flex flex-col flex-1 h-[100%]">  
            <div className="ml-4">
            <RiArrowLeftDoubleLine size={'4rem'} onClick={() => {handleMenu()}}/>
            </div>
            <div className="flex flex-col flex-1">
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="#">All Products</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="#">New Arrivals</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="#">Best Sellers</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="#">Shirts</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="#">Pants</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="#">Foot Wears</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="#">Outer Wears</a>
                <a className="h-[10%] block text-center border-b-2 border-gray-300 hover:border-gray-700 hover:font-medium" href="#">About Us</a>
            </div>
        </div>
    )
};

export default Menu;