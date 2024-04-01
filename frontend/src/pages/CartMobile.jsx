import Cart_Item from "../components/Cart_item";

const CartMobile = () => {
 return (
    <div className="h-fit w-screen overflow-auto">
            <Cart_Item isMobile={true}/>
            <Cart_Item isMobile={true}/>
        <div className="h-15 w-screen p-2">
            <div className="h-full w-full flex items-center justify-center rounded-lg bg-black text-2xl text-white">Buy</div>
        </div>
    </div>
 )
}

export default CartMobile;