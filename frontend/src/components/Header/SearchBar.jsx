import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";

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
    }

    return mobile ?
    (
        <div className="h-full w-full relative">
            <div className="flex">
                <IoIosSearch size={23}/>
                <input className="h-1/2 w-full ml-2 px-2 rounded border-2 border-gray-300 focus:outline-gray-500"
                onChange={(e) => handleInputOnChange(e)}/> 
            </div>
            <div className={`absolute ${inputText == "" ? "hidden" : "block"} h-52 overflow-scroll z-0 w-full border-2 border-t-0 border-gray-300 border-collapse bg-white`}>
                {product.length == 0 || inputText == "" ? null :
                product.map((item, index) => {
                    return item.name.toLowerCase().includes(inputText) || item.name.includes(inputText) || item.id.toLowerCase().includes(inputText) || item.id.includes(inputText) ?
                    //put <link> here
                    <div className="h-1/5 flex items-center border-b border-gray-300" key={index}> 
                        <span className="w-fit mr-1 text-sm">{item.id + " - "}</span>
                        <span className="flex-1 truncate text-xs">{item.name}</span>
                        <span className="w-fit text-end ml-1">{" - " + item.price}</span>
                    </div>
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
            <div className={`${openSearch ? "absolute" : "hidden"} inset-0 h-[8%] z-[99] w-full flex justify-center items-center bg-white border-b border-gray-300`}>
                <div className="w-1/2 h-full relative">
                    <div className="w-full h-full relative py-4 flex justify-center items-center">
                        <input className="h-full w-full rounded border border-gray-300"
                        onChange={(e) => handleInputOnChange(e)}/>
                        <button className="h-fit w-fit ml-3 px-2 text-xs btn-secondary rounded"
                        onClick={() => handleOpenSearch()}>Huỷ</button>
                    </div>
                    <div className={`absolute ${inputText == "" ? "hidden" : "block"} h-96 overflow-scroll z-0 w-full border-2 border-t-0 border-gray-300 border-collapse bg-white`}>
                        {product.length == 0 || inputText == "" ? null :
                        product.map((item, index) => {
                            return item.name.toLowerCase().includes(inputText) || item.name.includes(inputText) || item.id.toLowerCase().includes(inputText) || item.id.includes(inputText) ?
                            //put <link> here
                            <div className="h-1/5 flex items-center border-b border-gray-300" key={index}> 
                                <span className="w-fit mr-1 text-sm">{item.id + " - "}</span>
                                <span className="flex-1 truncate text-xs">{item.name}</span>
                                <span className="w-fit text-end ml-1">{item.price}</span>
                            </div>
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