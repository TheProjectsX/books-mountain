'use client';

import React, { useEffect, useState, useCallback } from 'react';
import {
  Table,
  Button,
  Space,
  Tag,
  Typography,
  Popconfirm,
  Input,
  message,
  Card,
  Image,
} from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { ProductModal, ProductItem } from '@/components/admin/ProductModal';
import { formatCurrency } from '@/lib/utils';

const { Title, Text } = Typography;

export default function AdminProductsPage() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const url = searchQuery
        ? `/api/products?search=${encodeURIComponent(searchQuery)}`
        : '/api/products';
      const res = await fetch(url);
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        setProducts(data.data);
      } else {
        message.error(data.error || 'Failed to fetch products');
      }
    } catch {
      message.error('Network error while retrieving products');
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDelete = async (id?: string) => {
    if (!id) return;
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (res.ok && data.success) {
        message.success('Product deleted successfully');
        fetchProducts();
      } else {
        message.error(data.error || 'Failed to delete product');
      }
    } catch {
      message.error('Error occurred while deleting product');
    }
  };

  const handleOpenCreate = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (record: ProductItem) => {
    setSelectedProduct(record);
    setIsModalOpen(true);
  };

  const columns: ColumnsType<ProductItem> = [
    {
      title: 'Cover',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      width: 70,
      render: (url: string | null) => (
        <div className="w-10 h-14 bg-surface-container rounded-xs overflow-hidden border border-border flex items-center justify-center">
          {url ? (
            <Image
              src={url}
              alt="Book cover"
              width={40}
              height={56}
              className="object-cover"
              fallback="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='56' fill='%23ccc'><rect width='40' height='56'/></svg>"
            />
          ) : (
            <span className="text-[10px] text-text-secondary uppercase font-mono">None</span>
          )}
        </div>
      ),
    },
    {
      title: 'Title & Slug',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, record: ProductItem) => (
        <div>
          <span className="font-semibold text-text-primary text-sm">{name}</span>
          <div className="text-xs font-mono text-text-secondary mt-0.5">
            /{record.slug}
          </div>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: 140,
      render: (price: number, record: ProductItem) => (
        <span className="font-heading font-medium text-sm text-text-primary">
          {formatCurrency(price, record.currency)}
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      width: 110,
      render: (isActive: boolean) =>
        isActive ? (
          <Tag color="success" className="text-xs">
            Active
          </Tag>
        ) : (
          <Tag color="default" className="text-xs">
            Inactive
          </Tag>
        ),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 160,
      align: 'right',
      render: (_, record: ProductItem) => (
        <Space size="small">
          <Button
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={() => handleOpenEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete Product"
            description="Are you sure you want to permanently delete this item?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes, Delete"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
          >
            <Button type="text" danger icon={<DeleteOutlined />} size="small">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Title & Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Title level={2} style={{ margin: 0, fontWeight: 700 }}>
            Products Catalog
          </Title>
          <Text type="secondary" className="font-label text-xs uppercase tracking-wider">
            Manage books, pricing, and availability
          </Text>
        </div>

        <Space>
          <Button
            icon={<ReloadOutlined />}
            onClick={() => fetchProducts()}
            disabled={loading}
          >
            Refresh
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleOpenCreate}
            className="font-button tracking-wider uppercase text-xs"
          >
            Add Product
          </Button>
        </Space>
      </div>

      {/* Filter and Table Card */}
      <Card bordered className="shadow-2xs">
        <div className="mb-4 max-w-sm">
          <Input
            placeholder="Search by title or description..."
            prefix={<SearchOutlined className="text-secondary" />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            allowClear
          />
        </div>

        <Table
          columns={columns}
          dataSource={products}
          rowKey={(record) => record.id || record.slug}
          loading={loading}
          pagination={{ pageSize: 8, showTotal: (total) => `Total ${total} items` }}
        />
      </Card>

      <ProductModal
        open={isModalOpen}
        product={selectedProduct}
        onClose={() => setIsModalOpen(false)}
        onSuccess={fetchProducts}
      />
    </div>
  );
}
