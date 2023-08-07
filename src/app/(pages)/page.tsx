"use client"


import useAuth from "@/context/useAuth"
import React from 'react'
import ProfileCard from "@/components/ProfileCard"
import Login from "@/components/Login"



const Home = () => {
    const {authStatus} =useAuth()

    return(
        <div className="w-full max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap -mx-2 mt-32 gap-y-8">
            <div className="w-full sm:w-1/2 px-2 flex justify-center flex-wrap items-center">
                <div className="relative text-center w-full flex justify-center flex-wrap">
                    <div className="w-full max-w-[550px]">
                        <img src="/Logo.svg" alt="Logo" className="ml-24" />
                    </div>
                    <div className="w-full">
                        <h1 className="font-bold text-3xl mb-4">
                           <span className="text-4xl text-blue-900 m-1">Next</span> 
                           <span className="text-4xl text-sky-500">Auth</span>  is an authentication system 
                         
                        </h1>
                        <p className="text-zinc-100">
                            An User Authentication System integrating with Appwrite. 
                            Enjoy your browising more sercure and friendly. Next Auth authentication
                            system made by <a href="" className="text-lg text-sky-600 hover:underline">Hrittik Bhattacharjee</a>  
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 px-2 flex flex-wrap justify-end">
                {authStatus ? (
                    <div className="max-w-md">
                        <ProfileCard />
                    </div>
                ) : (
                    <Login />
                )}
            </div>
        </div>
    </div>
    )

}

export default Home;