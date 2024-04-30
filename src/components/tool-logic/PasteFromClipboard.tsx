'use client'

import { useState } from 'react'
import { ClipboardPasteIcon } from 'lucide-react'
import { toast } from 'sonner'

import { Button, Tooltip, TooltipProvider, TooltipTrigger } from '../ui'
import removeNonURLs from './RemoveNonUrl'

export default function PasteFromClipboard({
    targetId,
    position,
}: {
    targetId: string
    position: { top?: string; right?: string; bottom?: string; left?: string }
}) {
    const [clipboardData, setClipboardData] = useState('')

    const handlePaste = async (event) => {
        event.preventDefault()
        try {
            const text = await navigator.clipboard.readText()
            setClipboardData(text)
            const newText = removeNonURLs(text)
            setClipboardData(newText)
            toast('Clipboard contents pasted successfully!')
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err)
            toast('Failed to read clipboard contents.')
        }
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button
                        className="absolute"
                        onClick={handlePaste}
                        style={position}
                        size="icon"
                        variant="outline"
                        aria-label="Paste from clipboard"
                    >
                        <ClipboardPasteIcon />
                    </Button>
                </TooltipTrigger>
            </Tooltip>
        </TooltipProvider>
    )
}
