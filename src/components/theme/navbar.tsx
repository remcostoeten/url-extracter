'use client'

import React from 'react'
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react'

import { FloatingNav } from './NavLogic'

export default function Navbar() {
    const navItems = [
        {
            name: 'Home',
            link: '/',
            icon: (
                <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ]
    return <FloatingNav navItems={navItems} />
}
