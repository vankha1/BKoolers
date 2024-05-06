import { useState } from "react";
import UserProfile from "../components/User/UserProfile";
import History from "../components/User/History";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const User = () => {
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();
    const handleEditModeOnClick = () => {
        setEditMode(!editMode);
    }

    const handleLogOut = () => {
        navigate("/signin");
    }

    return (
        <div>
            <div className='px-5 py-3 border border-gray-100'>
                <h1 className='title'>{editMode ? "Lịch sử giao dịch" : "Thông tin cá nhân"}</h1>
            </div>
            <div className="w-screen h-fit">
                <div className={`${editMode ? "btn-secondary inset-x-5 md:inset-x-1/2 mx-0" : "btn-primary inset-x-5"} relative w-1/4 h-fit
                flex justify-center items-center transition-all duration-500 ease-out hover:cursor-pointer`}
                onClick={() => handleEditModeOnClick()}>
                    {editMode ? "Quay lại" : "Xem lịch sử"} 
                </div>
                <div className="my-3 mx-5 flex flex-col md:flex-row">
                    <div className={`${editMode ? "opacity-0 hidden md:block" : "opacity-1 block"} transition duration-500 ease-out w-full md:w-1/2 h-96`}>
                        <UserProfile />
                    </div>
                    <div className={`${editMode ? "opacity-1 block" : "opacity-0 hidden md:block"} transition duration-500 ease-out w-full md:w-1/2 h-96 overflow-scroll`}>
                        <History />
                    </div>
                </div>
                <button className="btn-secondary mx-5 px-3 py-3 flex items-center"
                onClick={() => handleLogOut()}>
                    Đăng xuất
                </button>
            </div>
        </div>
    )
}

export default User;