import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '@/layouts/DashboardLayout'
import Dashboard from '@/pages/Dashboard'
import Users from '@/pages/Users'
import ListenerApplications from '@/pages/ListenerApplications'
import Conferences from '@/pages/Conferences'
import Content from '@/pages/Content'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="listener-applications" element={<ListenerApplications />} />
        <Route path="conferences" element={<Conferences />} />
        <Route path="content" element={<Content />} />
      </Route>
    </Routes>
  )
}

export default App