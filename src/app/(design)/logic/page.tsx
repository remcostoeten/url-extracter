import { ModeToggle } from '@/components/effects/mode-toggle'
import Dashboard from '@/components/shells/Dashboard'

export default function page() {
    return (
        <div className="relative">
            <Dashboard />
            <span className="fixed bottom-10 right-10">
                <ModeToggle />
            </span>
        </div>
    )
}
