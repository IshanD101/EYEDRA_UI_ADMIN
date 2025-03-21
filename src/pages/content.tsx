import React from 'react'
import { FileText } from 'lucide-react'

export default function Content() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Content Management</h1>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors">
            Reported Content
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Add Content
          </button>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Content Library</h2>
            <div className="flex gap-2">
              <select className="px-3 py-1 bg-muted rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="all">All Types</option>
                <option value="articles">Articles</option>
                <option value="videos">Videos</option>
                <option value="podcasts">Podcasts</option>
              </select>
              <input
                type="search"
                placeholder="Search content..."
                className="px-3 py-1 bg-muted rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-8 text-center text-muted-foreground">
            <p>No content found</p>
          </div>
        </div>
      </div>
    </div>
  )
}