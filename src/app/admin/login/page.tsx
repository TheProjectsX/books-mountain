'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, Form, Input, Button, Alert, Typography, Spin } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useDictionary } from '@/dictionary/LanguageContext';
import { LanguageToggle } from '@/components/common/LanguageToggle';

const { Title, Text } = Typography;

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/admin';
  const dict = useDictionary();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Authentication failed. Please check credentials.');
      }

      router.push(from);
      router.refresh();
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      className="shadow-sm border-border"
      style={{ borderRadius: 8, padding: '12px 8px' }}
    >
      <div className="flex justify-end mb-4">
        <LanguageToggle compact showIcon={false} />
      </div>

      {errorMsg && (
        <Alert
          message={errorMsg}
          type="error"
          showIcon
          className="mb-6"
          closable
          onClose={() => setErrorMsg(null)}
        />
      )}

      <Form
        name="admin_login"
        layout="vertical"
        initialValues={{
          email: 'admin@example.com',
          password: 'ChangeMe123!',
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          label={<span className="font-label text-xs uppercase tracking-wider">{dict.admin.emailLabel}</span>}
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input
            prefix={<MailOutlined className="text-secondary" />}
            placeholder="admin@example.com"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={<span className="font-label text-xs uppercase tracking-wider">{dict.admin.passwordLabel}</span>}
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="text-secondary" />}
            placeholder="Enter admin password"
            size="large"
          />
        </Form.Item>

        <Form.Item className="mt-6 mb-2">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            size="large"
            className="font-button tracking-wider uppercase font-semibold"
          >
            {dict.admin.signInBtn}
          </Button>
        </Form.Item>
      </Form>

      <div className="mt-6 pt-4 border-t border-border text-center">
        <div className="text-xs text-text-secondary">
          {dict.admin.defaultCredentials}
        </div>
        <div className="font-mono text-xs text-text-primary mt-1 bg-surface-container py-1.5 px-3 rounded-sm border border-border inline-block">
          admin@example.com / ChangeMe123!
        </div>
      </div>
    </Card>
  );
}

export default function AdminLoginPage() {
  const dict = useDictionary();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="max-w-md w-full">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-primary text-on-primary font-bold text-lg mb-3 shadow-sm">
            BM
          </div>
          <Title level={3} style={{ margin: 0, fontWeight: 700 }}>
            {dict.admin.loginTitle}
          </Title>
          <Text type="secondary" className="font-label text-xs uppercase tracking-wider">
            {dict.admin.loginSubtitle}
          </Text>
        </div>

        <Suspense
          fallback={
            <div className="p-12 text-center">
              <Spin size="large" />
            </div>
          }
        >
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
