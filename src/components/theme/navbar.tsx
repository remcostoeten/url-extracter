"use client";
import React from "react";
import { FloatingNav } from "./NavLogic";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export default function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];
    return (
        <FloatingNav navItems={navItems} />
    );
}