import React from 'react'

import Dashboard from '@/components/shells/Dashboard'
import { ModeToggle } from '@/components/effects/mode-toggle'

export default function page() {
    return (
        <div className='relative'>
            <Dashboard />
            <span className='fixed right-10 bottom-10'>
            <ModeToggle />
            </span>
        </div>
    )
}
