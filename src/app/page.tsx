import Link from 'next/link'
import { siteConfig } from '@/core/config/site'
import { cn } from '@/core/lib/utils'

import { buttonVariants } from '@/components/ui/button'
import { ModeToggle } from '@/components/effects/mode-toggle'
import { Icons } from '@/components/theme/icons'
import Navbar from '@/components/theme/navbar'

export default function Home() {
    return (
        <main className="flex h-screen items-center justify-center">
            <Navbar />
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                <Icons.logo className="h-16 w-16" />
                <h1 className="text-4xl font-semibold dark:text-zinc-200 sm:text-5xl md:text-6xl lg:text-7xl">
                    {siteConfig.name}
                </h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    {siteConfig.description}
                </p>
                <div className="flex gap-2">
                    <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        className={cn(buttonVariants({ size: 'default' }))}
                    >
                        Get Started
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </main>
    )
}
