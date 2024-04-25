import Link from 'next/link'

import { siteConfig } from '@/config/site'

type ShinyProps = {
    color?: string
    bg?: string
    children?: React.ReactNode
    link?: string
    external?: boolean
}

export default function ShinyButton({
    color = 'text-black dark:text-white',
    bg = 'bg-white dark:bg-black hover:bg-blue-500 hover:text-white',
    link = siteConfig.links.github,
    children,
    external,
}: ShinyProps) {
    return (
        <>
            <button
                className={`hover:{bg}/80 relative border border-neutral-200 text-sm font-medium dark:border-white/[0.2] ${color} ${bg} rounded-full px-4 py-2`}
            >
                {link && (
                    <Link href={link} target={external ? '_blank' : '_self'}>
                        <span>{children}</span>
                        <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500  to-transparent" />
                    </Link>
                )}
                {!link && children}
            </button>
        </>
    )
}
