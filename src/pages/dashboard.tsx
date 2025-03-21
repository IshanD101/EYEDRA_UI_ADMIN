import React from 'react'
import { Users, Headphones, Video, FileText, TrendingUp, AlertTriangle } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-muted-foreground">Total Users</h2>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Headphones className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-muted-foreground">Active Listeners</h2>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Video className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-muted-foreground">Active Conferences</h2>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-muted-foreground">Content Reports</h2>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Recent Activity</h2>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-8 text-center text-muted-foreground">
            <p>No recent activity</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <h2 className="text-lg font-semibold">Alerts</h2>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-8 text-center text-muted-foreground">
            <p>No alerts</p>
          </div>
        </div>
      </div>
    </div>
  )
}