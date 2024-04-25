'use client'

import React, { useState } from 'react'

import Extractor from '@/components/tool-logic/extractor'

export default function MainComponent() {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <>
            <Extractor inputValue={inputValue} />
        </>
    )
}
