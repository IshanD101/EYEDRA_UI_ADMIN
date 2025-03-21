import React from 'react'
import { Video } from 'lucide-react'

export default function Conferences() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Video className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Video Conferences</h1>
        </div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Schedule Conference
        </button>
      </div>
      <div className="grid gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Upcoming Conferences</h2>
            <div className="flex gap-2">
              <input
                type="search"
                placeholder="Search conferences..."
                className="px-3 py-1 bg-muted rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-8 text-center text-muted-foreground">
            <p>No conferences scheduled</p>
          </div>
        </div>
      </div>
    </div>
  )
}