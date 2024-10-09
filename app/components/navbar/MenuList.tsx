'use client'
import React from "react";

interface MenuListProps {
    label: string;
    onClick: () => void;
}
const MenuList: React.FC<MenuListProps> = ({label, onClick}) => {
    return (
        <div
            className="px-5 py-4 hover:bg-gray-100 transition cursor-pointer"
            onClick={onClick}
        >
            {label}
        </div>
    )
}
export default MenuList