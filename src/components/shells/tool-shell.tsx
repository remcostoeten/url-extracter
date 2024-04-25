'use client'

import { SelectContent, SelectItem, SelectValue } from '@radix-ui/react-select'

import {
    Badge,
    Button,
    Input,
    Label,
    Select,
    SelectTrigger,
    Textarea,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../ui'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '../ui/drawer'
import ToolHeader from './ToolHeader'

export function ToolShell() {
    return (
        <><ToolHeader title="Text Transformer">
            <Drawer>
                <DrawerTrigger asChild>
                    <Button
                        className="md:hidden"
                        size="icon"
                        variant="ghost"
                    >
                        <SettingsIcon className="size-4" />
                        <span className="sr-only">Settings</span>
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="max-h-[80vh]">
                    <DrawerHeader>
                        <DrawerTitle>Configuration</DrawerTitle>
                        <DrawerDescription>
                            Configure the settings for the model and
                            messages.
                        </DrawerDescription>
                    </DrawerHeader>
                    <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Settings
                            </legend>
                            <div className="grid gap-3">
                                <Label>Model</Label>
                                <Select>
                                    <SelectTrigger
                                        className="items-start [&_[data-description]]:hidden"
                                        id="model"
                                    >
                                        <SelectValue placeholder="Select a model" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="genesis">
                                            <div className="flex items-start gap-3 text-muted-foreground">
                                                <RabbitIcon className="size-5" />
                                                <div className="grid gap-0.5">
                                                    <p>
                                                        Neural
                                                        <span className="font-medium text-foreground">
                                                            Genesis
                                                        </span>
                                                    </p>
                                                    <p
                                                        className="text-xs"
                                                        data-description
                                                    >
                                                        Our fastest
                                                        model for
                                                        general use
                                                        cases.
                                                    </p>
                                                </div>
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="explorer">
                                            <div className="flex items-start gap-3 text-muted-foreground">
                                                <BirdIcon className="size-5" />
                                                <div className="grid gap-0.5">
                                                    <p>
                                                        Neural
                                                        <span className="font-medium text-foreground">
                                                            Explorer
                                                        </span>
                                                    </p>
                                                    <p
                                                        className="text-xs"
                                                        data-description
                                                    >
                                                        Performance and
                                                        speed for
                                                        efficiency.
                                                    </p>
                                                </div>
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="quantum">
                                            <div className="flex items-start gap-3 text-muted-foreground">
                                                <TurtleIcon className="size-5" />
                                                <div className="grid gap-0.5">
                                                    <p>
                                                        Neural
                                                        <span className="font-medium text-foreground">
                                                            Quantum
                                                        </span>
                                                    </p>
                                                    <p
                                                        className="text-xs"
                                                        data-description
                                                    >
                                                        The most
                                                        powerful model
                                                        for complex
                                                        computations.
                                                    </p>
                                                </div>
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-3">
                                <label htmlFor="temperature">
                                    Temperature
                                </label>
                                <Input
                                    id="temperature"
                                    placeholder="0.4"
                                    type="number" />
                            </div>
                            <div className="grid gap-3">
                                <label htmlFor="top-p">Top P</label>
                                <Input
                                    id="top-p"
                                    placeholder="0.7"
                                    type="number" />
                            </div>
                            <div className="grid gap-3">
                                <label htmlFor="top-k">Top K</label>
                                <Input
                                    id="top-k"
                                    placeholder="0.0"
                                    type="number" />
                            </div>
                        </fieldset>
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Messages
                            </legend>
                            <div className="grid gap-3">
                                <label htmlFor="role">Role</label>
                                <Select defaultValue="system">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="system">
                                            System
                                        </SelectItem>
                                        <SelectItem value="user">
                                            User
                                        </SelectItem>
                                        <SelectItem value="assistant">
                                            Assistant
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    placeholder="You are a..." />
                            </div>
                        </fieldset>
                    </form>
                </DrawerContent>
            </Drawer>
            <Button
                className="ml-auto gap-1.5 text-sm"
                size="sm"
                variant="outline"
            >
                <ShareIcon className="size-3.5" />
                Share
            </Button>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
                <div
                    className="relative hidden flex-col items-start gap-8 md:flex"
                    x-chunk="dashboard-03-chunk-0"
                >
                    <form className="grid w-full items-start gap-6">
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Text Transformer
                            </legend>
                            <div className="grid gap-3">
                                <Label>                                        Input Text
                                </Label>
                                <Textarea
                                    className="min-h-[150px]"
                                    id="text-input"
                                    placeholder="Paste your text here..." />
                                <div className="flex items-center gap-2">
                                    <CopyIcon className="size-4" />
                                    <Input
                                        className="w-16"
                                        defaultValue="1"
                                        max="10"
                                        min="1"
                                        type="number" />
                                    <span>Number of URLs to copy:</span>
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <Label>
                                    Enter any character that the line should
                                    contain that you want to
                                    <strong>_keep_</strong>
                                </Label>
                                <Input
                                    id="keep-string"
                                    placeholder="Enter character" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Button>Remove all except URLs</Button>
                                <Button>
                                    Remove all lines except with character
                                </Button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="relative flex h-[1005px] min-h-[70vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                    <div className="flex items-center justify-between">
                        <Button
                            className="ml-auto absolute right-8 top-8 z-10 gap-1.5 text-sm"
                            size="icon"
                            variant="outline"
                        >
                            <CopyIcon className="size-3.5" />
                        </Button>
                    </div>
                    <div className="flex-1" />
                    <form
                        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
                        x-chunk="dashboard-03-chunk-1"
                    >
                        <Label className="sr-only">
                            Message
                        </Label>
                        <Textarea
                            className="h-full resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                            id="message"
                            disabled
                            placeholder="Extracted text will go here..." />
                        <div className="flex items-center p-3 pt-0">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <PaperclipIcon className="size-4" />
                                            <span className="sr-only">
                                                Attach file
                                            </span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top">
                                        Attach File
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MicIcon className="size-4" />
                                            <span className="sr-only">
                                                Use Microphone
                                            </span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top">
                                        Use Microphone
                                    </TooltipContent>
                                </Tooltip>
                                <Button
                                    className="ml-auto gap-1.5"
                                    size="sm"
                                    type="submit"
                                >
                                    Send Message
                                    <CornerDownLeftIcon className="size-3.5" />
                                </Button>
                            </TooltipProvider>
                        </div>
                    </form>
                </div>
            </main>
        </ToolHeader></>
    )
}

function BirdIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 7h.01" />
            <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
            <path d="m20 7 2 .5-2 .5" />
            <path d="M10 18v3" />
            <path d="M14 17.75V21" />
            <path d="M7 18a6 6 0 0 0 3.84-10.61" />
        </svg>
    )
}

function BookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
    )
}

function BotIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
        </svg>
    )
}

function Code2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
        </svg>
    )
}

function CopyIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
    )
}

function CornerDownLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="9 10 4 15 9 20" />
            <path d="M20 4v7a4 4 0 0 1-4 4H4" />
        </svg>
    )
}

function LifeBuoyIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m4.93 4.93 4.24 4.24" />
            <path d="m14.83 9.17 4.24-4.24" />
            <path d="m14.83 14.83 4.24 4.24" />
            <path d="m9.17 14.83-4.24 4.24" />
            <circle cx="12" cy="12" r="4" />
        </svg>
    )
}

function MicIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
    )
}

function PaperclipIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
    )
}

function RabbitIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
            <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3" />
            <path d="M7.61 12.53a3 3 0 1 0-1.6 4.3" />
            <path d="M13 16a3 3 0 0 1 2.24 5" />
            <path d="M18 12h.01" />
        </svg>
    )
}

function Settings2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 7h-9" />
            <path d="M14 17H5" />
            <circle cx="17" cy="17" r="3" />
            <circle cx="7" cy="7" r="3" />
        </svg>
    )
}

function SettingsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}

function ShareIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" x2="12" y1="2" y2="15" />
        </svg>
    )
}

function TerminalSquareIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7 11 2-2-2-2" />
            <path d="M11 13h4" />
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        </svg>
    )
}

function TriangleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        </svg>
    )
}

function TurtleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
            <path d="M4.82 7.9 8 10" />
            <path d="M15.18 7.9 12 10" />
            <path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
        </svg>
    )
}

function UserSquareIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
        </svg>
    )
}
