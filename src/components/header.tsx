import { Bell, Settings } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border bg-card">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-medium">Welcome, Admin</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 hover:bg-accent transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 hover:bg-accent transition-colors">
            <Settings className="h-5 w-5" />
          </button>
          <div className="h-8 w-8 rounded-full bg-primary" />
        </div>
      </div>
    </header>
  )
}