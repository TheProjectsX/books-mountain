'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  BookOutlined,
  SettingOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const getSelectedKey = () => {
    if (pathname === '/admin') return 'dashboard';
    if (pathname.startsWith('/admin/products')) return 'products';
    if (pathname.startsWith('/admin/settings')) return 'settings';
    return 'dashboard';
  };

  const menuItems: MenuItem[] = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      onClick: () => router.push('/admin'),
    },
    {
      key: 'products',
      icon: <BookOutlined />,
      label: 'Products Catalog',
      onClick: () => router.push('/admin/products'),
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Theme & System',
      onClick: () => router.push('/admin/settings'),
    },
    {
      type: 'divider',
    },
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Public Site',
      onClick: () => router.push('/'),
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={240}
      style={{
        borderRight: '1px solid var(--color-border)',
        minHeight: '100vh',
      }}
      breakpoint="lg"
      theme="light"
    >
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="flex items-center space-x-2 overflow-hidden">
          <span className="w-7 h-7 bg-primary text-on-primary rounded-sm flex items-center justify-center font-bold text-xs shrink-0">
            BM
          </span>
          {!collapsed && (
            <span className="font-heading font-bold text-sm text-text-primary truncate">
              Books Mountain
            </span>
          )}
        </div>
      </div>

      <Menu
        mode="inline"
        selectedKeys={[getSelectedKey()]}
        items={menuItems}
        style={{ borderRight: 0, padding: '12px 8px' }}
      />
    </Sider>
  );
}
