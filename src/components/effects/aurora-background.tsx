'use client'

import React, { ReactNode } from 'react'
import { cn } from '@/core'

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode
    showRadialGradient?: boolean
    colorVariant?: 'dark' | 'light' | 'custom' | 'darkMode'
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    colorVariant = 'dark',
    ...props
}: AuroraBackgroundProps) => {
    const colorSchemes = {
        dark: `
            [--gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
        `,
        light: `
            [--gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
        `,
        custom: `
            [--gradient:repeating-linear-gradient(100deg,var(--red-500)_0%,var(--red-500)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--red-500)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--green-500)_10%,var(--yellow-300)_15%,var(--green-300)_20%,var(--orange-200)_25%,var(--green-400)_30%)]
        `,
        darkMode: `
            [--gradient:repeating-linear-gradient(100deg,var(--gray-800)_0%,var(--gray-800)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--gray-800)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--purple-500)_10%,var(--purple-300)_15%,var(--purple-300)_20%,var(--purple-200)_25%,var(--purple-400)_30%)]
        `,
    }

    return (
        <main>
            <div
                className={cn(
                    'transition-bg relative flex  h-[100vh] flex-col items-center justify-center bg-zinc-700  text-slate-950 dark:bg-zinc-900',
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className={cn(
                            `
            pointer-events-none
            absolute
            -inset-[10px]
            opacity-50 blur-[10px] invert filter
            will-change-transform [background-image:var(--gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%]
            after:absolute
            after:inset-0 after:animate-aurora after:mix-blend-difference
            after:content-[""]
            after:[background-attachment:fixed] after:[background-image:var(--gradient),var(--aurora)] after:[background-size:200%,_100%] dark:invert-0`,

                            showRadialGradient &&
                                '[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]',
                            colorSchemes[colorVariant]
                        )}
                    ></div>
                </div>
                {children}
            </div>
        </main>
    )
}
