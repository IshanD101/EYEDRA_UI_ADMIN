import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from '@/components/auth/protected-route'
import DashboardLayout from '@/layouts/DashboardLayout'
import LoginPage from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Users from '@/pages/users'
import ListenerApplications from '@/pages/ListenerApplications'
import Conferences from '@/pages/conferences'
import Content from '@/pages/content'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="listener-applications" element={<ListenerApplications />} />
          <Route path="conferences" element={<Conferences />} />
          <Route path="content" element={<Content />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App