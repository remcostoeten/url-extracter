'use client'

import React from 'react'

import MessageForm from './MessageForm'
import TextTransformerForm from './TextTransformerForm'

const Dashboard = () => {
    return (
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <aside className="relative hidden flex-col items-start gap-8 md:flex">
                <TextTransformerForm title="Text transform" />
            </aside>
            <main className="relative flex h-[1005px] min-h-[70vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                <div className="flex items-center justify-between">
                    {/* Button */}
                </div>
                <div className="flex-1" />
                <MessageForm />
            </main>
        </main>
    )
}

export default Dashboard
