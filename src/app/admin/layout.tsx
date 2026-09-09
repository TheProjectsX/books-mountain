'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Layout, Spin } from 'antd';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';

const { Content } = Layout;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  const [user, setUser] = useState<{ email: string; role: string } | null>(null);
  const [loading, setLoading] = useState(!isLoginPage);

  useEffect(() => {
    if (isLoginPage) {
      setLoading(false);
      return;
    }

    async function fetchUser() {
      try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.user) {
            setUser(data.user);
          }
        }
      } catch (err) {
        console.error('Failed to load user info:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [isLoginPage]);

  // Login page should not have sidebar/header wrapper
  if (isLoginPage) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Spin size="large" tip="Loading Books Mountain console..." />
      </div>
    );
  }

  return (
    <Layout className="min-h-screen bg-background">
      <AdminSidebar />
      <Layout>
        <AdminHeader
          userEmail={user?.email || 'admin@example.com'}
          userRole={user?.role || 'ADMIN'}
        />
        <Content className="p-6 sm:p-8 max-w-7xl w-full mx-auto">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
