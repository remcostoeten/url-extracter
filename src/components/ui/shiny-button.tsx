import Link from 'next/link';
import { siteConfig } from "@/config/site";

type ShinyProps = {
    color?: string;
    bg?: string;
    children?: React.ReactNode;
    link?: string;
    external?: boolean;
}

export default function ShinyButton({
    color = 'text-black dark:text-white',
    bg = 'bg-white dark:bg-black hover:bg-blue-500 hover:text-white',
    link = siteConfig.links.github,
    children,
    external
}: ShinyProps) {
    return (
        <>
            <button className={`border hover:{bg}/80 text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] ${color} ${bg} px-4 py-2 rounded-full`}>
                {link &&
                    <Link href={link} target={external ? "_blank" : "_self"}>
                        <span>{children}</span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                    </Link>
                }
                {!link && children}
            </button>
        </>
    )
}