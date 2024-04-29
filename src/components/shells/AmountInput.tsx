export default function AmountInput() {
    return (
        <div
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
            data-hs-input-number
        >
            <div className="flex w-full items-center justify-between gap-x-3">
                <div>
                    <span className="block text-sm font-medium text-gray-800 dark:text-white">
                        nr. of URLs
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-neutral-400">
                        to copy
                    </span>
                </div>
                <div className="flex items-center gap-x-1.5">
                    <button
                        type="button"
                        className="inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                        data-hs-input-number-decrement
                    >
                        {minusIcon()}
                    </button>
                    <input
                        className="w-6 border-0 bg-transparent p-0 text-center text-gray-800 focus:ring-0 dark:text-white"
                        type="text"
                        defaultValue={0}
                        data-hs-input-number-input
                    />
                    <button
                        type="button"
                        className="inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                        data-hs-input-number-increment
                    >
                        {plusIcon()}
                    </button>
                </div>
            </div>
        </div>
    )
}

function plusIcon() {
    return (
        <svg
            className="size-3.5 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}

function minusIcon() {
    return (
        <svg
            className="size-3.5 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
        </svg>
    )
}
