"use client";

import React from "react";
import Link from "next/link";
import { HomeIcon, ShoppingCartIcon, InformationCircleIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ isOpen }) => {
    return (
        <div
            className={`bg-custom-pink text-white h-screen fixed z-50 top-0 left-0 ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-20 p-4 rounded-3xl hover:w-40 transition-width duration-300 shadow-lg`}
        >
            <ul className="flex flex-col items-start ml-2 mt-40 overflow-x-hidden  overflow-hidden space-y-6">
                {/* Home Link */}
                <SidebarLink href="/home" ariaLabel="Home" title="Home" icon={<HomeIcon className="h-8 w-8 md:h-10 md:w-10" />} />

                {/* Order Link */}
                <SidebarLink href="/order" ariaLabel="Order" title="Order" icon={<ShoppingCartIcon className="h-8 w-8 md:h-10 md:w-10" />} />

                {/* About Link */}
                <SidebarLink href="/about" ariaLabel="About" title="About" icon={<InformationCircleIcon className="h-8 w-8 md:h-10 md:w-10" />} />

                {/* Contact Link */}
                <SidebarLink href="/contact" ariaLabel="Contact" title="Contact" icon={<PhoneIcon className="h-8 w-8 md:h-10 md:w-10" />} />
            </ul>
        </div>
    );
};

const SidebarLink = ({ href, ariaLabel, title, icon }) => (
    <li className="flex flex-row  items-center w-full transition-transform duration-200 hover:scale-105">
        <Link href={href} aria-label={ariaLabel} title={title} className={`flex items-center ml-1  justify-between  text-3xl transition-opacity duration-300 opacity-100`}>
            {icon}
            <span className="flex items-center w-full p-2 rounded-md ">
                {title}
            </span>
        </Link>
    </li>
);


export default Sidebar;
