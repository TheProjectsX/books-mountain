'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Layout, Button, Space, Typography, Tag, message } from 'antd';
import {
  LogoutOutlined,
  GlobalOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useDictionary } from '@/dictionary/LanguageContext';
import { LanguageToggle } from '@/components/common/LanguageToggle';

const { Header } = Layout;
const { Text } = Typography;

interface AdminHeaderProps {
  userEmail?: string;
  userRole?: string;
}

export function AdminHeader({ userEmail = 'admin@example.com', userRole = 'ADMIN' }: AdminHeaderProps) {
  const router = useRouter();
  const dict = useDictionary();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      if (res.ok) {
        message.success(dict.common.logout);
        router.push('/admin/login');
        router.refresh();
      }
    } catch {
      message.error('Failed to log out');
    }
  };

  return (
    <Header
      style={{
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--color-border)',
        height: 64,
      }}
    >
      <div className="flex items-center space-x-3">
        <span className="font-heading font-semibold text-base text-text-primary">
          {dict.admin.consoleTitle}
        </span>
        <Tag color="geekblue" className="font-mono text-xs">
          {dict.common.theme}
        </Tag>
      </div>

      <Space size="middle">
        <LanguageToggle compact showIcon={false} />

        <Link href="/" target="_blank">
          <Button icon={<GlobalOutlined />} size="small">
            {dict.common.liveSite}
          </Button>
        </Link>

        <div className="hidden sm:flex items-center space-x-2 border-l border-border pl-4">
          <UserOutlined className="text-secondary text-sm" />
          <Text className="text-xs font-medium text-text-secondary">{userEmail}</Text>
          <Tag color="blue" className="text-[10px] font-mono">
            {userRole}
          </Tag>
        </div>

        <Button
          type="text"
          danger
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          size="small"
        >
          {dict.common.logout}
        </Button>
      </Space>
    </Header>
  );
}
