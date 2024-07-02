'use client'
import Image from "next/image";
import { useState } from "react";
import Loader from "../Loader/Loader";

const UserDetails = ({ user }) => {

    const [loading, setLoading] = useState(true);

    console.log(user)
    return (
        <div>
            {
                user.map((details) => <div>
                    {loading &&
                        <div className="flex justify-center items-center relative top-28 bg-white bg-opacity-50">
                            <Loader />
                        </div>}
                    <Image className="rounded-lg" width={500} height={500} src={details.avatar} onLoad={() => setLoading(false)} />
                    <div className="my-10">
                        <p className="text-base lg:text-lg my-1 text-start"><b className="text-[#234239]">Bio:  </b>{details.Bio}</p>
                        <p className="text-base lg:text-lg my-1 text-start"><b className="text-[#234239]">Job Title:  </b>{details.jobTitle}</p>
                        <p className="text-xl font-bold text-start">User profile 👉</p>
                        <div className="text-start">
                            <p className="text-base lg:text-lg my-1"><b className="text-[#234239]">Username: </b>{details.profile.username}</p>
                            <p className="text-base lg:text-lg my-1"><b className="text-[#234239]">First Name:  </b>{details.profile.firstName}</p>
                            <p className="text-base lg:text-lg my-1"><b className="text-[#234239]">Lase Name:  </b>{details.profile.lastName}</p>
                            <p className="text-base lg:text-lg my-1"><b className="text-[#234239]">Email:  </b>{details.profile.email}</p>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default UserDetails;