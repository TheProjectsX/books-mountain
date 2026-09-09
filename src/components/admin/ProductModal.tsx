'use client';

import React, { useEffect } from 'react';
import { Modal, Form, Input, InputNumber, Switch, message } from 'antd';

export interface ProductItem {
  id?: string;
  name: string;
  slug: string;
  description?: string | null;
  price: number; // in poisha/cents (Int)
  currency: string;
  imageUrl?: string | null;
  isActive: boolean;
}

interface ProductModalProps {
  open: boolean;
  product: ProductItem | null;
  onClose: () => void;
  onSuccess: () => void;
}

export function ProductModal({ open, product, onClose, onSuccess }: ProductModalProps) {
  const [form] = Form.useForm();
  const isEditing = Boolean(product?.id);

  useEffect(() => {
    if (open) {
      if (product) {
        form.setFieldsValue({
          name: product.name,
          slug: product.slug,
          description: product.description || '',
          price: product.price ? product.price / 100 : 0, // Convert poisha to main unit for UI
          currency: product.currency || 'BDT',
          imageUrl: product.imageUrl || '',
          isActive: product.isActive !== undefined ? product.isActive : true,
        });
      } else {
        form.resetFields();
        form.setFieldsValue({
          currency: 'BDT',
          isActive: true,
          price: 1000,
        });
      }
    }
  }, [open, product, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        name: values.name,
        slug: values.slug || undefined,
        description: values.description || null,
        price: Math.round(Number(values.price) * 100), // convert to poisha (integer)
        currency: values.currency || 'BDT',
        imageUrl: values.imageUrl || null,
        isActive: values.isActive,
      };

      const url = isEditing ? `/api/products/${product?.id}` : '/api/products';
      const method = isEditing ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to save product');
      }

      message.success(isEditing ? 'Product updated successfully' : 'Product created successfully');
      onSuccess();
      onClose();
    } catch (err: any) {
      message.error(err.message || 'Error saving product');
    }
  };

  return (
    <Modal
      title={
        <span className="font-heading font-bold text-base">
          {isEditing ? 'Edit Product Item' : 'Create New Product'}
        </span>
      }
      open={open}
      onOk={handleSubmit}
      onCancel={onClose}
      okText={isEditing ? 'Save Changes' : 'Create Product'}
      cancelText="Cancel"
      destroyOnClose
      width={560}
    >
      <Form form={form} layout="vertical" className="mt-4">
        <Form.Item
          name="name"
          label={<span className="font-label text-xs uppercase tracking-wider">Product Name</span>}
          rules={[{ required: true, message: 'Please enter product title' }]}
        >
          <Input placeholder="e.g. The Architecture of Solitude" />
        </Form.Item>

        <Form.Item
          name="slug"
          label={<span className="font-label text-xs uppercase tracking-wider">URL Slug (Optional)</span>}
          extra="Leave blank to generate automatically from title"
        >
          <Input placeholder="the-architecture-of-solitude" />
        </Form.Item>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            name="price"
            label={<span className="font-label text-xs uppercase tracking-wider">Price (BDT)</span>}
            rules={[{ required: true, message: 'Please enter product price' }]}
          >
            <InputNumber
              style={{ width: '100%' }}
              min={0}
              step={10}
              formatter={(value) => `৳ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value!.replace(/৳\s?|(,*)/g, '') as any}
            />
          </Form.Item>

          <Form.Item
            name="currency"
            label={<span className="font-label text-xs uppercase tracking-wider">Currency</span>}
          >
            <Input disabled placeholder="BDT" />
          </Form.Item>
        </div>

        <Form.Item
          name="imageUrl"
          label={<span className="font-label text-xs uppercase tracking-wider">Cover / Image URL</span>}
          rules={[{ type: 'url', message: 'Must be a valid URL', warningOnly: true }]}
        >
          <Input placeholder="https://images.unsplash.com/..." />
        </Form.Item>

        <Form.Item
          name="description"
          label={<span className="font-label text-xs uppercase tracking-wider">Description</span>}
        >
          <Input.TextArea
            rows={3}
            placeholder="Editorial monograph exploring form and quiet domestic spaces..."
          />
        </Form.Item>

        <Form.Item
          name="isActive"
          label={<span className="font-label text-xs uppercase tracking-wider">Active in Catalog</span>}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
}
