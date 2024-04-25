'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui'

export default function Component() {
    return (
        <div key="1" className="flex min-h-screen flex-col">
            <div className="grid h-screen w-full pl-[56px]">
                <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
                    <div className="border-b p-2">
                        <Button aria-label="Home" size="icon" variant="outline">
                            <TriangleIcon className="size-5 fill-foreground" />
                        </Button>
                    </div>
                    <nav className="grid gap-1 p-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        aria-label="Playground"
                                        className="rounded-lg bg-muted"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <TerminalSquareIcon className="size-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    Playground
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        aria-label="Models"
                                        className="rounded-lg"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <BotIcon className="size-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    Models
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        aria-label="API"
                                        className="rounded-lg"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <Code2Icon className="size-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    API
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        aria-label="Documentation"
                                        className="rounded-lg"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <BookIcon className="size-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    Documentation
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        aria-label="Settings"
                                        className="rounded-lg"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <Settings2Icon className="size-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    Settings
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </nav>
                    <nav className="mt-auto grid gap-1 p-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        aria-label="Help"
                                        className="mt-auto rounded-lg"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <LifeBuoyIcon className="size-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    Help
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        aria-label="Account"
                                        className="mt-auto rounded-lg"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <UserSquareIcon className="size-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    Account
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </nav>
                </aside>
                <div className="flex flex-col">
                    <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
                        <h1 className="text-xl font-semibold">URL Extractor</h1>
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
                                            <Label htmlFor="model">Model</Label>
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
                                                                    Performance
                                                                    and speed
                                                                    for
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
                                                                    powerful
                                                                    model for
                                                                    complex
                                                                    computations.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="temperature">
                                                Temperature
                                            </Label>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MinusIcon className="size-4" />
                                                </Button>
                                                <Input
                                                    id="temperature"
                                                    placeholder="0.4"
                                                    type="number"
                                                />
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <PlusIcon className="size-4" />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="keep-character">
                                                Keep any character that the line
                                                should contain
                                            </Label>
                                            <Input
                                                id="keep-character"
                                                placeholder="Enter character"
                                                type="text"
                                            />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="number-of-urls">
                                                Number of URLs to copy
                                            </Label>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MinusIcon className="size-4" />
                                                </Button>
                                                <Input
                                                    className="w-16"
                                                    id="number-of-urls"
                                                    placeholder="5"
                                                    type="number"
                                                />
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <PlusIcon className="size-4" />
                                                </Button>
                                            </div>
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
                    </header>
                    <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="relative hidden flex-col items-start gap-8 md:flex">
                            <form className="grid w-full items-start gap-6">
                                <fieldset className="grid gap-6 rounded-lg border p-4">
                                    <legend className="-ml-1 px-1 text-sm font-medium">
                                        Settings
                                    </legend>
                                    <div className="grid gap-3">
                                        <Label htmlFor="input-text">
                                            Input Text
                                        </Label>
                                        <Textarea
                                            className="min-h-[100px]"
                                            placeholder="Paste text here to extract URLs"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex-1" />
                                                <Button className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                                                    <ClipboardPasteIcon className="mr-2 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </Textarea>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Button className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                                                <ScissorsIcon className="mr-2 h-4 w-4" />
                                                Extract URLs
                                            </Button>
                                            <Button className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                                                <BrushIcon className="mr-2 h-4 w-4" />
                                                Format
                                            </Button>
                                            <Button className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                                                <CopyIcon className="mr-2 h-4 w-4" />
                                                Copy Content
                                            </Button>
                                            <Button className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                                                <LinkIcon className="mr-2 h-4 w-4" />
                                                Open 50 URLs and remove them
                                            </Button>
                                            <Button className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                                                <CopyIcon className="mr-2 h-4 w-4" />
                                                Copy 50 URLs and remove them
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p>
                                                Characters:
                                                <span id="character-count">
                                                    0
                                                </span>
                                            </p>
                                            <p>
                                                Lines:
                                                <span id="line-count">0</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="keep-character">
                                            Keep any character that the line
                                            should contain
                                        </Label>
                                        <Input
                                            id="keep-character"
                                            placeholder="Enter character"
                                            type="text"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="number-of-urls">
                                            Number of URLs to copy
                                        </Label>
                                        <div className="flex items-center gap-2">
                                            <Button size="icon" variant="ghost">
                                                <MinusIcon className="h-4 w-4" />
                                            </Button>
                                            <Input
                                                className="w-16"
                                                id="number-of-urls"
                                                placeholder="5"
                                                type="number"
                                            />
                                            <Button size="icon" variant="ghost">
                                                <PlusIcon className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="relative flex h-full flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                            <Badge
                                className="absolute right-3 top-3"
                                variant="outline"
                            >
                                Output
                            </Badge>
                            <Textarea
                                className="flex-1 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                                placeholder="Extracted text will appear here..."
                            />
                            <div className="mt-4 flex flex-col gap-2">
                                <Button variant="outline">Clear</Button>
                                <Button variant="outline">Copy</Button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
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

function BrushIcon(props) {
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
            <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
            <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
        </svg>
    )
}

function ClipboardPasteIcon(props) {
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
            <path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z" />
            <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10" />
            <path d="m17 10 4 4-4 4" />
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

function LinkIcon(props) {
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
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    )
}

function MinusIcon(props) {
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
            <path d="M5 12h14" />
        </svg>
    )
}

function PlusIcon(props) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
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

function ScissorsIcon(props) {
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
            <circle cx="6" cy="6" r="3" />
            <path d="M8.12 8.12 12 12" />
            <path d="M20 4 8.12 15.88" />
            <circle cx="6" cy="18" r="3" />
            <path d="M14.8 14.8 20 20" />
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
