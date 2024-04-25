import React from 'react'

type ToolHeaderProps = {
    children: React.ReactNode
    title: string
}

export default function ToolHeader({ children, title }: ToolHeaderProps) {
    return (
        <div className="flex h-screen flex-col">
            <header className="sticky top-0 z-10 flex items-center gap-1 border-b bg-background px-4">
                <h1 className="text-xl font-semibold">{title}</h1>
            </header>
            {children}
        </div>
    )
}
