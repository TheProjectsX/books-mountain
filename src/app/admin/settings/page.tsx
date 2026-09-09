'use client';

import React from 'react';
import { Card, Typography, Descriptions, Tag, Row, Col, Divider, Alert } from 'antd';
import { BgColorsOutlined, CodeOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { designTokens } from '@/theme/designTokens';

const { Title, Text, Paragraph } = Typography;

export default function AdminSettingsPage() {
  const colorSwatches = Object.entries(designTokens.colors);

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <Title level={2} style={{ margin: 0, fontWeight: 700 }}>
          Theme & System Settings
        </Title>
        <Text type="secondary" className="font-label text-xs uppercase tracking-wider">
          Read-only theme tokens & system runtime parameters
        </Text>
      </div>

      <Alert
        message="Centralized Design Token Architecture"
        description="The active styling values below are parsed from DESIGN.md and defined in src/theme/designTokens.ts. Any modifications to that file automatically update Ant Design components, Tailwind CSS utility classes, and custom UI elements."
        type="info"
        showIcon
      />

      {/* Theme Info Card */}
      <Card
        title={
          <span className="font-heading font-bold text-base flex items-center gap-2">
            <BgColorsOutlined className="text-primary" /> Active Design Tokens ({designTokens.name})
          </span>
        }
        bordered
        className="shadow-2xs"
      >
        <Descriptions bordered column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }} size="small">
          <Descriptions.Item label="Design Name">
            <Tag color="purple">{designTokens.name}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Heading Typeface">
            <span className="font-mono text-xs">{designTokens.typography.headingFont}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Body Typeface">
            <span className="font-mono text-xs">{designTokens.typography.bodyFont}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Button & Label Typeface">
            <span className="font-mono text-xs">{designTokens.typography.buttonFont}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Base Rhythm Spacing">
            <span className="font-mono text-xs">{designTokens.spacing.base} baseline (16px gutters)</span>
          </Descriptions.Item>
          <Descriptions.Item label="Standard Radius">
            <span className="font-mono text-xs">4px (Soft) / 8px (Containers)</span>
          </Descriptions.Item>
        </Descriptions>

        <Divider orientation="left" plain>
          <span className="font-label text-xs uppercase tracking-wider text-text-secondary">
            Color Palette Tokens
          </span>
        </Divider>

        <Row gutter={[12, 12]}>
          {colorSwatches.map(([name, hex]) => (
            <Col xs={12} sm={8} md={6} lg={4} key={name}>
              <div className="border border-border rounded-md overflow-hidden bg-surface">
                <div
                  className="h-12 w-full flex items-center justify-center text-xs font-mono"
                  style={{ backgroundColor: hex }}
                >
                  <span
                    style={{
                      color: hex.startsWith('#0') || hex.startsWith('#1') || hex.startsWith('#4') || hex.startsWith('#5') || hex.startsWith('#b') ? '#fff' : '#000',
                      textShadow: '0 0 2px rgba(0,0,0,0.4)',
                    }}
                  >
                    {hex}
                  </span>
                </div>
                <div className="p-2 text-center bg-surface-container-low">
                  <div className="text-xs font-medium text-text-primary truncate" title={name}>
                    {name}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Card>

      {/* System Infrastructure Card */}
      <Card
        title={
          <span className="font-heading font-bold text-base flex items-center gap-2">
            <CodeOutlined className="text-primary" /> System Architecture & Runtime
          </span>
        }
        bordered
        className="shadow-2xs"
      >
        <Descriptions bordered column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }} size="small">
          <Descriptions.Item label="Framework">
            <Tag color="geekblue">Next.js 16+ (App Router Only)</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Request Proxy">
            <Tag color="cyan">src/proxy.ts (Next.js 16 Convention)</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="ORM & Database">
            <Tag color="green">Prisma ORM with MongoDB Provider</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Authentication">
            <Tag color="gold">jose (Stateless JWT) + bcryptjs</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Session Cookie">
            <span className="font-mono text-xs">admin_token (httpOnly, sameSite: lax)</span>
          </Descriptions.Item>
          <Descriptions.Item label="CSS Framework">
            <Tag color="blue">Tailwind CSS (CSS Variables) + Ant Design 5</Tag>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}
