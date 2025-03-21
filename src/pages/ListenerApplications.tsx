import React from 'react'
import { Headphones } from 'lucide-react'

export default function ListenerApplications() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Headphones className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Listener Applications</h1>
        </div>
        <div className="flex gap-2">
          <select className="px-3 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Applications</h2>
            <div className="flex gap-2">
              <input
                type="search"
                placeholder="Search applications..."
                className="px-3 py-1 bg-muted rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-8 text-center text-muted-foreground">
            <p>No applications found</p>
          </div>
        </div>
      </div>
    </div>
  )
}