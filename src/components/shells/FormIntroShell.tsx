import React from 'react'

export default function FormIntroShell({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) {
    return (
        <>
            <form className="grid w-full items-start gap-6">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                    <legend className="-ml-1 px-1 text-sm font-medium">
                        {title}
                    </legend>
                    <div className="grid gap-3">{children}</div>
                </fieldset>
            </form>
        </>
    )
}
