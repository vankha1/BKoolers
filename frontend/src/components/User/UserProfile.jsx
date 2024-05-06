import { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
    const userID = document.cookie.slice(document.cookie.indexOf('userID')).split(';')[0].split('=')[1];
    const [profile, setProfile] = useState({FName: "", LName: "", email: "", phone: "", address: "", birthdat: ""});

    useEffect(() => {
        axios.get("http://localhost/web-assignment/backend/users/all")
        .then(res => {
            const data = res.data;
            const user = data.find(d => d.customer_id == userID);
            setProfile(user);
        })
        .catch(error => {
            setProfile({FName: "", LName: "", email: "", phone: "", address: "", birthdat: ""});
        })
    }, [])


    return (
        <div className="flex flex-col">
            <div className="flex mb-4">
                <div className="w-20 md:w-32 text-lg">
                    Khách hàng:
                </div>
                <div className="mx-5 text-lg text-gray-500">
                    {profile.FName + " " + profile.LName}
                </div>
            </div>
            <div className="flex mb-4">
                <div className="w-20 md:w-32 text-lg">
                    Địa chỉ:
                </div>
                <div className="mx-5 text-lg text-gray-500">
                    {profile.address}
                </div>
            </div>
            <div className="flex mb-4">
                <div className="w-20 md:w-32 text-lg">
                    Liên hệ:
                </div>
                <div className="mx-5 text-lg text-gray-500">
                    {profile.phone}
                </div>
            </div>
            <div className="flex mb-4">
                <div className="w-20 md:w-32 text-lg">
                    Địa chỉ mail:
                </div>
                <div className="mx-5 text-lg text-gray-500">
                    {profile.email}
                </div>
            </div>
            <div className="flex mb-4">
                <div className="w-20 md:w-32 text-lg">
                    Sinh nhật:
                </div>
                <div className="mx-5 text-lg text-gray-500">
                    {profile.birthday}
                </div>
            </div>
        </div>
    )
}

export default UserProfile;