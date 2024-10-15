'use client'

import {useRouter} from "next/navigation";

import {resetAuthCookies} from "@/app/lib/actions";
import MenuList from "@/app/components/navbar/MenuList";
import React from "react";



const LogoutButton: React.FC = () => {
    const router = useRouter();

    const submitLogout = async () => {
        resetAuthCookies();

        router.push('/')
    }

    return (
        <MenuList
            label="Log out"
            onClick={submitLogout}
        />
    )
}

export default LogoutButton