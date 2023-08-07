"use client"

import useAuth from "@/context/useAuth"
import appwriteService from "@/appwriteConf/config"
import { useRouter } from "next/navigation"
import React from "react"
import { useEffect } from "react"


const LogoutPage = () => {
    const router = useRouter()
    const {setAuthStatus} =useAuth()

    useEffect(() =>{
        appwriteService.logout()
            .then(() => {
                setAuthStatus(false)
                router.replace('/')
            })
    },[]);

    return(
        <></>
    )
}


export default LogoutPage