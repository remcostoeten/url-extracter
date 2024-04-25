import React from 'react'
import { CopyIcon } from '@radix-ui/react-icons'

import { Button, Input, Label, Textarea } from '../ui'
import FormIntroShell from './FormIntroShell'

const TextTransformerForm = ({ title }) => {
    return (
        <FormIntroShell title={title}>
            <Label> Input Text</Label>
            <Textarea
                className="min-h-[150px]"
                id="text-input"
                placeholder="Paste your text here..."
            />
            <div className="flex items-center gap-2">
                <CopyIcon className="size-4" />
                <Input
                    className="w-16"
                    defaultValue="1"
                    max="10"
                    min="1"
                    type="number"
                />
                <span>Number of URLs to copy:</span>
            </div>
            <div className="grid gap-3">
                <Label>
                    Enter any character that the line should contain that you
                    want to
                    <strong>_keep_</strong>
                </Label>
                <Input id="keep-string" placeholder="Enter character" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Button>Remove all except URLs</Button>
                <Button>Remove all lines except with character</Button>
            </div>
        </FormIntroShell>
    )
}

export default TextTransformerForm
