import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';

export function ProtectedRoute() {
  const { token, isAdmin } = useAuth();

  if (!token || !isAdmin()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}