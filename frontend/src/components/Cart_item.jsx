
const Cart_Item = (props) => {
    const { isMobile } = props;

    if(!isMobile) return (
            <div className="w-full h-1/5 my-1 flex items-center bg-white border-b-2 border-gray-700">
                <div className="w-1/4 lg:w-1/3 h-[90%] mx-1 my-auto flex items-start lg:items-center">
                    <img className="object-fill max-h-full" src='https://vn-test-11.slatic.net/p/241db312b371ef971cd74329edaa6bac.jpg' alt="" /> 
                </div>
                <div className="h-full w-full my-auto">
                    <div class="h-1/4 py-2 my-1 mx-2 lg:mx-0">Ao polo </div>
                    <div className="h-1/5 my-1 mx-2 lg:mx-0 flex items-center">
                        <div className="h-full mr-3 flex items-center">XL</div>
                        <div className="h-4 w-4" style={{background: "red"}}></div>
                    </div>
                    <div className="h-1/5 w-full my-1 mx-2 lg:mx-0 flex">
                        <div className="h-full w-1/6 rounded-lg bg-gray-200 flex items-center justify-center">-</div>
                        <div className="h-full w-1/6 mx-2 flex items-center justify-center">1</div>
                        <div className="h-full w-1/6 rounded-lg bg-gray-200 flex items-center justify-center">+</div>
                    </div>
                    <div className="h-1/5 w-full my-1 mx-2 lg:mx-0 bg-white flex justify-between">
                        <div className="h-ful w-3/4">
                            Gia: 300000d
                        </div>
                        <div className="h-full w-1/4 mx-2 rounded-lg bg-gray-200 flex items-center justify-center">
                            Huy
                        </div>
                    </div>
                </div>
            </div>
        )
    else return (
        <div className="h-1/4 w-full p-1 flex bg-white">
            <div className="w-1/2 h-full mx-1 my-auto flex items-center">
                <img className="object-fill max-h-full" src='https://vn-test-11.slatic.net/p/241db312b371ef971cd74329edaa6bac.jpg' alt="" /> 
            </div>
            <div className="h-full w-1/2 px-1">
                <div className="h-1/3 w-full py-auto flex font-semibold text-xl text-gray-500">
                    <div className="h-full w-4/5">Ao Polo </div>
                    <div className="h-1/2 w-1/5 flex justify-center">X</div>
                </div>
                <div className="h-1/6 w-full flex items-center">
                    <span className="text-gray-500 mr-7 ">Color:</span>
                    <div className="h-6 w-6" style={{background: "red"}}></div>
                </div>
                <div className="h-1/6 w-full flex items-center">
                    <span className="text-gray-500 mr-9">Size:</span>
                    <span className="text-gray-500 text-xl">S</span>
                </div>
                <div className="h-1/6 w-full flex items-center">
                    <span className="text-gray-500 mr-2">Amount:</span>
                    <div className="h-full w-1/6 rounded-lg bg-gray-400 flex items-center justify-center">-</div>
                    <div className="h-full w-1/12 mx-2 flex items-center justify-center">1</div>
                    <div className="h-full w-1/6 rounded-lg bg-gray-400 flex items-center justify-center">+</div>
                </div>
                <div className="h-1/6 w-full flex items-center">
                    <span className="text-gray-500 mr-7">Total:</span>
                    <span className="text-gray-500 text-xl">300000d</span>
                </div>
            </div>
        </div>
    )
}

export default Cart_Item;