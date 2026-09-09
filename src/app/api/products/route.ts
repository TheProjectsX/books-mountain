import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { getSessionFromRequest } from '@/lib/auth';
import { slugify } from '@/lib/utils';

export const runtime = 'nodejs';

// Fallback in-memory catalog when MongoDB connection is not yet configured
const fallbackProducts = [
  {
    id: 'mock-1',
    name: 'The Architecture of Solitude',
    slug: 'the-architecture-of-solitude',
    description: 'An editorial exploration into modern brutalism, typography, and quiet domestic spaces.',
    price: 240000,
    currency: 'BDT',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'mock-2',
    name: 'Typography & White Space: A Literary Approach',
    slug: 'typography-and-white-space',
    description: 'A comprehensive guide to micro-typography, rhythm, and grid design in digital literature.',
    price: 320000,
    currency: 'BDT',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'mock-3',
    name: 'Minimalist Design Systems',
    slug: 'minimalist-design-systems',
    description: 'Translating editorial aesthetics into structured component systems and design tokens.',
    price: 185000,
    currency: 'BDT',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const createProductSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  slug: z.string().optional(),
  description: z.string().optional(),
  price: z.number().int().nonnegative('Price must be a non-negative integer'),
  currency: z.string().default('BDT'),
  imageUrl: z.string().url('Invalid image URL').optional().or(z.literal('')),
  isActive: z.boolean().default(true),
});

/**
 * GET /api/products
 * List all products
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || '';

  try {
    const products = await prisma.product.findMany({
      where: search
        ? {
            OR: [
              { name: { contains: search, mode: 'insensitive' } },
              { description: { contains: search, mode: 'insensitive' } },
            ],
          }
        : undefined,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({
      success: true,
      data: products,
      source: 'database',
    });
  } catch (error) {
    console.warn('Prisma query failed, returning fallback mock products:', error);
    // Provide graceful mock data so client UI and dev server work out-of-the-box before DB connect
    const filtered = fallbackProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
    );

    return NextResponse.json({
      success: true,
      data: filtered,
      source: 'mock_fallback',
      message: 'Operating with starter fallback catalog (Configure DATABASE_URL to persist to MongoDB)',
    });
  }
}

/**
 * POST /api/products
 * Create product (Admin only)
 */
export async function POST(request: NextRequest) {
  const session = await getSessionFromRequest(request);

  if (!session) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized: Admin authentication required' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const parsed = createProductSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message || 'Validation error' },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const finalSlug = data.slug && data.slug.trim() ? slugify(data.slug) : slugify(data.name);

    try {
      const product = await prisma.product.create({
        data: {
          name: data.name,
          slug: finalSlug,
          description: data.description || null,
          price: data.price,
          currency: data.currency || 'BDT',
          imageUrl: data.imageUrl || null,
          isActive: data.isActive,
        },
      });

      return NextResponse.json(
        { success: true, data: product, message: 'Product created successfully' },
        { status: 201 }
      );
    } catch (dbError: any) {
      if (dbError.code === 'P2002') {
        return NextResponse.json(
          { success: false, error: 'A product with this slug already exists' },
          { status: 409 }
        );
      }

      console.error('Database create error:', dbError);
      return NextResponse.json(
        {
          success: false,
          error: 'Database operation failed. Verify MongoDB connection and schema push.',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Create product error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process product creation request' },
      { status: 500 }
    );
  }
}
