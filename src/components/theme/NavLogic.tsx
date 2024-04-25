import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/core/config/site'
import { cn } from '@core/index'
import { AnimatePresence, motion } from 'framer-motion'

import { ModeToggle } from '../mode-toggle'
import ShinyButton from '../ui/shiny-button'

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string
        link: string
        icon?: JSX.Element
        component?: JSX.Element
    }[]
    className?: string
}) => {
    const visible = true

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 0,
                    y: -100,
                    scale: 0.3,
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
                    'fixed inset-x-0 top-5  z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2 !opacity-75  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black',
                    className
                )}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            'relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300'
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden text-sm sm:block">
                            {navItem.name}
                        </span>
                    </Link>
                ))}
                <ShinyButton link={siteConfig.links.github} external>
                    Github
                </ShinyButton>
                <ModeToggle />
            </motion.div>
        </AnimatePresence>
    )
}
