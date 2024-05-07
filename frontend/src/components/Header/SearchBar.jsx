import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
    const {mobile} = props;
    const [inputText, setInputText] = useState("");
    const [product, setProduct] = useState([]);
    const [openSearch, setOpenSearch] = useState(false);

    useEffect(() => {
        axios.get("http://localhost/web-assignment/backend/products/all")
        .then(res => {
            setProduct(res.data);
        })
        .catch(error => {
            setProduct([]);
        })
    }, [])

    const handleInputOnChange = (e) => {
        const value = e.target.value;
        setInputText(value);
    }

    const handleOpenSearch = () => {
        setOpenSearch(!openSearch);
        setInputText("");
    }

    return mobile ?
    (
        <div className="h-full w-full relative">
            <div className="flex">
                <IoIosSearch size={23}/>
                <input className="h-1/2 text-sm w-full ml-2 px-3 rounded-xl border-2 border-gray-300 focus:outline-gray-500" value={inputText}
                onChange={(e) => handleInputOnChange(e)}/> 
            </div>
            <div className={`absolute ${inputText == "" ? "hidden" : "block"} h-72 overflow-scroll z-0 w-full border border-t-0 border-gray-200 border-collapse bg-white shadow`}>
                {product.length == 0 || inputText == "" ? null :
                product.map((item, index) => {
                    return item.name.toLowerCase().includes(inputText) || item.name.includes(inputText) || item.id.toLowerCase().includes(inputText) || item.id.includes(inputText) ?
                    <a key={index} href={`/products/product/${item.id}`}>
                    <div className="py-2 flex items-center border-b border-gray-300"> 
                        <div className="w-[12%] mx-2">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="w-4/5">
                            <div className="flex-1 truncate text-xs">{item.name}</div>
                            <div className={`w-fit text-end ml-1 ${item.discount != 0 ? "text-red-500" : "text-black"}`}>{`${item.price * (item.discount == 0 ? 1 : item.discount)}VND`}</div>
                        </div>
                    </div>
                    </a>
                    : null;
                })
                }
            </div> 
        </div>
    )
    : (
        <div className="mt-3">
            <IoIosSearch className="hover:cursor-pointer" size={25} 
            onClick={() => handleOpenSearch()}/>
            <div className={`${openSearch ? "absolute" : "hidden"} inset-0 h-[10%] z-[99] w-full flex justify-center items-center bg-white`}>
                <div className="w-5 h-5 relative top-6 left-10"></div>
                <div className="w-1/2 h-full relative">
                    <div className="w-full h-full relative py-4 flex justify-center items-center">
                        <input className="text-sm w-full px-5 py-1 rounded-xl outline-none border border-gray-300" value={inputText}
                        onChange={(e) => handleInputOnChange(e)}/>
                        <button className="w-fit ml-3 px-2 py-1 text-xs bg-gray-300 rounded"
                        onClick={() => handleOpenSearch()}>Hủy</button>
                    </div>
                    <div className={`absolute top-16 ${inputText == "" ? "hidden" : "block"} h-96 overflow-scroll z-0 w-full border border-t-0 border-gray-200 border-collapse bg-white shadow`}>
                        {product.length == 0 || inputText == "" ? null :
                        product.map((item, index) => {
                            return item.name.toLowerCase().includes(inputText) || item.name.includes(inputText) || item.id.toLowerCase().includes(inputText) || item.id.includes(inputText) ?
                            <a key={index} className="block hover:bg-gray-200 py-3 border-b border-gray-300" href={`/products/product/${item.id}`}>
                                <div className="h-1/5 px-5 flex items-center"> 
                                <img className="w-10 mr-5" src={item.image} alt="" />
                                <span className="flex-1 truncate text-xs">{item.name}</span>
                                <span className={`w-fit text-end ml-1 ${item.discount != 0 ? "text-red-500" : "text-black"}`}>{`${Math.round(item.price * (1 - item.discount))} VND`}</span>
                            </div>
                            </a>
                            : null;
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;