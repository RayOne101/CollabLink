import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUserRole } from '@/utils/getUserRole';

interface ProtectedRouteProps {
  allowedRole: 'agency' | 'creator';
  children: React.ReactNode;
}

export function ProtectedRoute({ allowedRole, children }: ProtectedRouteProps) {
  const role = getUserRole();
  if (role !== allowedRole) {
    return <Navigate to="/unauthorized" />;
  }
  return <>{children}</>;
} 