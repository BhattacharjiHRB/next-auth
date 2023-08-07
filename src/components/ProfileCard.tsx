"use client"

import appwriteService from "@/appwriteConf/config"; 
import { Models } from "appwrite";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Avatar from "../components/Avatar"


const ProfileCard= () => {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);

    useEffect(() => {
        (async () => {
            const userData = await appwriteService.getCurrentUser()
            if (userData) {
                setUser(userData)
            }
        })()
    }, [])

    return (
        user && (
            <>
                <div className="flex gap-y-6 flex-wrap">
                    <div className="flex w-full gap-x-4 items-center">
                        <div className="shrink-0 w-20">
                            <Avatar img="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=100" />
                        </div>
                        <div className="relative">
                            <p className="font-bold text-xl w-full mb-1">{user.name}</p>
                            <div className="text-[12px] p-0.5 inline-block rounded-md bg-gradient-to-tr from-primary to-secondary">
                                <button className="px-2 rounded-md font-bold bg-white">FREE</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-200/50 rounded-xl px-8 py-8 w-full flex gap-y-4 flex-wrap">
                        <div className="relative w-full">
                            <p className="text-sm text-gray-700">Display Name</p>
                            <p className="font-semibold">{user.name}</p>
                        </div>
                        <div className="relative w-full">
                            <p className="text-sm text-gray-700">Email Address</p>
                            <p className="font-semibold">{user.email}</p>
                        </div>
                        <div className="relative w-full">
                            <p className="text-sm text-gray-700">Phone Number</p>
                            <p className="font-semibold">+880-1712-345678</p>
                        </div>
                        <div className="relative w-full">
                            <p className="text-sm text-gray-700">Password</p>
                            <p className="font-semibold">********</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <Link
                            href={"/logout"}
                            className="bg-gray-200/70 rounded-xl px-6 py-3 inline-block hover:bg-gray-100 duration-150"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </>
        )
    );
}

export default ProfileCard;