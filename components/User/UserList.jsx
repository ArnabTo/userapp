'use client';
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import UserDetails from "./UserDetails";

const UserList = ({ data }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/a/af/Default_avatar_profile.jpg'

    const showDetails = (id) => {
        const filteredData = data.filter(data => data.id == id)
        setUser(filteredData)
    }

    return (
        <div className="flex flex-col-reverse xl:flex-row items-start gap-3">
            <div className="w-full mt-20">
                {/* <h2 className="text-white text-center text-4xl font-black my-5">User list</h2> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 lg:mx-0">
                    {data.map(data => (
                        <div className="flex justify-between px-5 py-5 items-center gap-2 bg-white/80 shadow-lg rounded-lg border border-white/10 lg:hover:scale-110 transition-all cursor-pointer"
                            onClick={(id) => showDetails(data.id)}
                        >
                            <Image className=" rounded-full" width={50} height={100} src={data?.avatar || defaultImage} alt="user-image" />
                            <span className="flex flex-col text-end">
                                <p className="text-2xl text-[#234239] font-black">{data?.profile?.firstName}</p>
                                <p className="text-lg text-black">{data?.jobTitle}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" bg-white/80 rounded-lg p-5 mt-20">
                <h2 className="text-black text-center text-4xl font-black my-5">User Details</h2>
              {
                user ? <UserDetails user={user} /> : <h3 className="text-center">👉 Click any user first!</h3>
              }
            </div>
        </div>
    );
};

export default UserList;