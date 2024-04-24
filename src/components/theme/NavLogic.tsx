import React from "react";
import {
    motion,
    AnimatePresence,
} from "framer-motion";
import { cn } from "@core/index";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "../mode-toggle";
import ShinyButton from "../ui/shiny-button";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
        component?: JSX.Element;
    }[];
    className?: string;
}) => {
    const visible = true;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 0,
                    y: -100,
                    scale: .3,
                }}
                animate={{
                    scale: 1,
                    y: visible ? 0 : -50,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                    "flex max-w-fit  fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
                    className
                )}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </Link>
                ))}
                <ShinyButton link={siteConfig.links.github} external>Github</ShinyButton>
                <ModeToggle />

            </motion.div>
        </AnimatePresence>
    );
};