'use client'

import React from 'react'
import { AuroraBackground } from '@c/effects/aurora-background'
import { motion } from 'framer-motion'

export default function BackgroundWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: 'easeInOut',
                }}
                className="relative flex flex-col items-center justify-center gap-4 px-4"
            >
                {children}
            </motion.div>
        </AuroraBackground>
    )
}
