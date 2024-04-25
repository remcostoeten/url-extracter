'use client'

import React, { useEffect, useState } from 'react'
import { CopyIcon, TrashIcon } from '@radix-ui/react-icons'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function MyComponent() {
    const [text, setText] = useState('')
    const [character, setCharacter] = useState('')
    const [numUrlsToCopy, setNumUrlsToCopy] = useState(50)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [hasText, setHasText] = useState(false)
    const [removeDuplicates, setRemoveDuplicates] = useState(false)
    const [keepContaining, setKeepContaining] = useState(false)

    const handleToggle = () => {
        setKeepContaining((prevValue) => !prevValue)
    }

    const removeDuplicatesFromResults = () => {
        const lines = text.split('\n')
        const uniqueLines = Array.from(new Set(lines))
        const newText = uniqueLines.join('\n')
        setText(newText)
        displayToast(`${lines.length - uniqueLines.length} duplicates removed`)
        setRemoveDuplicates(true)
    }

    const increeaseNumUrlsToCopy = () => {
        setNumUrlsToCopy(numUrlsToCopy + 1)
    }

    const decreeaseNumUrlsToCopy = () => {
        setNumUrlsToCopy(numUrlsToCopy - 1)
    }

    useEffect(() => {
        const savedText = localStorage.getItem('myComponentText')
        if (savedText) {
            setText(savedText)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('myComponentText', text)
        setHasText(text.trim() !== '')
    }, [text])

    const displayToast = (message) => {
        setToastMessage(message)
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false)
        }, 5000)
    }

    const pasteFromClipboard = async () => {
        try {
            const clipboardContent = await navigator.clipboard.readText()
            setText(clipboardContent)
            displayToast(
                clipboardContent.length + ' characters pasted from clipboard'
            )
        } catch (err) {
            displayToast('Failed to paste from clipboard')
            console.error('Failed to paste from clipboard: ', err)
        }
    }

    const copyUrlsAndRemove = () => {
        const urlPattern =
            /(https?:\/\/)?[\w.-]+(\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]*/g
        const urls = text.match(urlPattern)

        if (urls) {
            const remainingUrls = urls.slice(numUrlsToCopy)
            const copiedUrls = urls.slice(0, numUrlsToCopy).join('\n')

            setText(remainingUrls.join('\n'))
            navigator.clipboard.writeText(copiedUrls)

            displayToast(
                `${numUrlsToCopy} URLs copied to clipboard and removed from the text`
            )
        }
    }

    const removeNonURLs = () => {
        const urlPattern =
            /(https?:\/\/)?[\w.-]+(\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]*/g
        const lines = text.split('\n')

        const urls = lines.map((line) => {
            const urlsInLine = line.match(urlPattern)
            return urlsInLine ? urlsInLine.join('\n') : null
        })

        const newText = urls.filter((url) => url !== null).join('\n')
        setText(newText)
        displayToast(`${lines.length - urls.length} lines removed`)
    }

    const removeAllExceptCharacter = () => {
        const lines = text.split('\n')
        const filteredLines = keepContaining
            ? lines.filter((line) => line.includes(character)) // Step 3: Check keepContaining value
            : lines.filter((line) => !line.includes(character)) // Step 3: Handle opposite scenario

        const newText = filteredLines.join('\n')
        setText(newText)
        displayToast(`${lines.length - filteredLines.length} lines removed`)
    }
    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(text)
            displayToast('Content copied to clipboard')
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    const openUrls = () => {
        const urlPattern =
            /(https?:\/\/)?[\w.-]+(\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]*/g
        const urls = text.match(urlPattern)
        if (urls) {
            const urlsToOpen = urls.slice(0, numUrlsToCopy)
            const updatedUrls = urls.filter((url) => !urlsToOpen.includes(url))
            setText(updatedUrls.join('\n'))
            urlsToOpen.forEach((url) => window.open(url, '_blank'))
        }
    }

    const clearResults = () => {
        setText('')
        displayToast('results cleared')
    }

    return (
        <>
            <div className="relative flex flex-col gap-2">
                <span className="custom relative\   textarea-max w-[60%]">
                    {text && (
                        <div className="absolute right-0 top-8 scale-[2]">
                            <TrashIcon onClick={clearResults} />
                        </div>
                    )}
                    <div className="absolute right-0 mt-[-30px] scale-[2]">
                        <CopyIcon onClick={pasteFromClipboard} />
                    </div>{' '}
                    <textarea
                        spellCheck="false"
                        className={`custom absolute -top-[30px] w-[90%]  border-0 focus:bg-gray-800 ${
                            hasText ? 'bg-gray-800' : 'bg-transparent'
                        }`}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                </span>
            </div>
            <div className="relative mt-8 flex flex-col md:flex-row">
                <span className="text-green-400">{'~/chars-keep'}</span>
                <p className="typing text-offgrey flex-1 items-center pl-2">
                    Enter any character that the line should{' '}
                    <strong>
                        <u>{keepContaining ? 'contain' : 'not contain'}</u>
                    </strong>{' '}
                    that you want to{' '}
                    <strong>
                        <u>keep</u>
                    </strong>
                    .
                    <br />
                </p>{' '}
                <div className="mt-4 flex items-center">
                    <input
                        type="checkbox"
                        id="toggleKeepContaining"
                        checked={keepContaining}
                        onChange={handleToggle}
                    />
                    <label
                        htmlFor="toggleKeepContaining"
                        className="text-offgrey ml-2 cursor-pointer"
                    >
                        {keepContaining
                            ? 'Keep lines containing character'
                            : 'Remove lines containing character'}
                    </label>
                </div>
                <Input
                    type="text"
                    className="custom z-max chars-keep-input absolute top-5 border-0 bg-transparent outline-none"
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                />
                <div className="animate-blink absolute left-0 top-[44px] h-5 w-0.5 bg-white" />
            </div>
            <div className="flexxer mt-12 flex gap-2">
                <div onClick={removeDuplicatesFromResults}>
                    Remove All Duplicates
                </div>
                <div onClick={removeNonURLs}>Remove all text except URLs</div>
                <div onClick={removeAllExceptCharacter}>
                    {keepContaining
                        ? 'Keep lines containing character'
                        : 'Remove lines containing character'}
                </div>
            </div>
            <div className="mt-4 flex justify-between">
                <span className="text-green-400">
                    {'~/url-extract/your-results'}
                </span>
                <div className="flex flex-col items-end gap-1 ">
                    <Label htmlFor="numUrlsToCopy">
                        Number of URLs to copy:
                    </Label>
                    <input
                        className="numberstyle-qty"
                        type="number"
                        min="1"
                        id="numUrlsToCopy"
                        step="1"
                        value="1"
                        onChange={(e) => setNumUrlsToCopy(e.target.value)}
                    />
                </div>
            </div>
            {text && (
                <>
                    <div className="flexxer mt-4 flex gap-2">
                        <div onClick={copyUrlsAndRemove}>
                            Copy {numUrlsToCopy} URLs and remove them
                        </div>
                        <div onClick={copyContent}>Copy Content</div>
                        <div onClick={openUrls}>
                            Open {numUrlsToCopy} URLs and remove them
                        </div>{' '}
                    </div>

                    <code className="results relative block">
                        <span
                            className="absolute right-3 top-3 scale-[2]"
                            onClick={clearResults}
                        >
                            <TrashIcon />
                        </span>
                        {text.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                <a
                                    href={line}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {line}
                                </a>
                                <br />
                            </React.Fragment>
                        ))}
                    </code>
                </>
            )}

            {showToast && (
                <Mes
                    message={toastMessage}
                    onClose={() => setShowToast(false)}
                />
            )}
        </>
    )
}

const Mes = ({ message, onClose }) => {
    return (
        <div
            className="toast absolute bottom-0 right-0 rounded-md bg-gray-800 p-2 text-white"
            onClick={onClose}
        >
            {message}
        </div>
    )
}
