'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Statistic, Typography, Button, Space, Tag, Alert } from 'antd';
import {
  BookOutlined,
  CheckCircleOutlined,
  BgColorsOutlined,
  ArrowRightOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { ProductModal, ProductItem } from '@/components/admin/ProductModal';

const { Title, Text, Paragraph } = Typography;

export default function AdminDashboardPage() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [catalogSource, setCatalogSource] = useState<string>('');

  const loadStats = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setProducts(data.data);
          setCatalogSource(data.source || 'database');
        }
      }
    } catch (err) {
      console.error('Failed to load dashboard metrics:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const totalProducts = products.length;
  const activeProducts = products.filter((p) => p.isActive).length;

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Title level={2} style={{ margin: 0, fontWeight: 700 }}>
            Dashboard Overview
          </Title>
          <Text type="secondary" className="font-label text-xs uppercase tracking-wider">
            Books Mountain Management Console
          </Text>
        </div>

        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(true)}
            className="font-button tracking-wider uppercase text-xs"
          >
            New Product
          </Button>
          <Link href="/admin/products">
            <Button className="font-button tracking-wider uppercase text-xs">
              View Catalog
            </Button>
          </Link>
        </Space>
      </div>

      {catalogSource === 'mock_fallback' && (
        <Alert
          message="Offline / Dev Fallback Active"
          description="MongoDB is not yet connected; using starter seed items. Once your MongoDB connection is specified in DATABASE_URL and pushed via 'npm run prisma:push', live database persistence activates automatically."
          type="info"
          showIcon
          closable
        />
      )}

      {/* Metric Cards */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered hoverable className="shadow-2xs">
            <Statistic
              title={<span className="font-label text-xs uppercase text-text-secondary tracking-wider">Total Products</span>}
              value={totalProducts}
              loading={loading}
              prefix={<BookOutlined className="text-primary mr-2" />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card bordered hoverable className="shadow-2xs">
            <Statistic
              title={<span className="font-label text-xs uppercase text-text-secondary tracking-wider">Active in Catalog</span>}
              value={activeProducts}
              loading={loading}
              valueStyle={{ color: 'var(--color-success)' }}
              prefix={<CheckCircleOutlined className="text-success mr-2" />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card bordered hoverable className="shadow-2xs">
            <Statistic
              title={<span className="font-label text-xs uppercase text-text-secondary tracking-wider">Default Currency</span>}
              value="BDT (৳)"
              loading={loading}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card bordered hoverable className="shadow-2xs">
            <Statistic
              title={<span className="font-label text-xs uppercase text-text-secondary tracking-wider">Design System</span>}
              value="Literary Precision"
              loading={loading}
              prefix={<BgColorsOutlined className="text-secondary mr-2" />}
              formatter={() => (
                <Tag color="geekblue" className="text-xs font-mono font-normal">
                  DESIGN.md
                </Tag>
              )}
            />
          </Card>
        </Col>
      </Row>

      {/* Info & Feature Highlights */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card
            title={
              <span className="font-heading font-bold text-base">
                Theme Architecture Status
              </span>
            }
            bordered
            extra={<Link href="/admin/settings" className="text-xs">Inspect Tokens <ArrowRightOutlined /></Link>}
          >
            <Paragraph className="text-sm text-text-secondary leading-relaxed">
              This client starter reads design parameters directly from <code className="bg-surface-container px-1 py-0.5 rounded-sm">src/theme/designTokens.ts</code> and syncs them automatically into:
            </Paragraph>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-text-secondary">
              <li><strong className="text-text-primary">Ant Design Theme:</strong> Primary Deep Indigo, custom button typography, and card radius.</li>
              <li><strong className="text-text-primary">Tailwind CSS:</strong> Mapped to root CSS variables (<code className="bg-surface-container px-1 rounded-xs">--color-primary</code>, <code className="bg-surface-container px-1 rounded-xs">--radius-sm</code>).</li>
              <li><strong className="text-text-primary">Google Fonts:</strong> Public Sans & Space Grotesk loaded via <code className="bg-surface-container px-1 rounded-xs">next/font/google</code>.</li>
            </ul>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card
            title={
              <span className="font-heading font-bold text-base">
                Prisma & MongoDB Integration
              </span>
            }
            bordered
            extra={<Link href="/admin/products" className="text-xs">Manage Items <ArrowRightOutlined /></Link>}
          >
            <Paragraph className="text-sm text-text-secondary leading-relaxed">
              MongoDB models are defined in <code className="bg-surface-container px-1 py-0.5 rounded-sm">prisma/schema.prisma</code> using ObjectId strings and pushed using <code className="bg-surface-container px-1 py-0.5 rounded-sm">npx prisma db push</code>.
            </Paragraph>
            <div className="bg-surface-container p-3 rounded-md text-xs font-mono text-text-secondary space-y-1">
              <div>Model: User (Auth Credentials & Roles)</div>
              <div>Model: Product (Catalog, Slug, Price in BDT Poisha)</div>
              <div>Auth: Stateless JWT cookies via jose in proxy.ts</div>
            </div>
          </Card>
        </Col>
      </Row>

      <ProductModal
        open={isModalOpen}
        product={null}
        onClose={() => setIsModalOpen(false)}
        onSuccess={loadStats}
      />
    </div>
  );
}
