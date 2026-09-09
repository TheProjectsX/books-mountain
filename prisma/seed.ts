import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'ChangeMe123!';
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  console.log(`🌱 Seeding admin user: ${adminEmail}`);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      passwordHash: hashedPassword,
      name: 'Site Administrator',
      role: 'ADMIN',
    },
    create: {
      email: adminEmail,
      name: 'Site Administrator',
      passwordHash: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log(`✓ Admin user created/updated with ID: ${admin.id}`);

  console.log('🌱 Seeding initial products for Books Mountain...');

  const sampleProducts = [
    {
      name: 'The Architecture of Solitude',
      slug: 'the-architecture-of-solitude',
      description: 'An editorial exploration into modern brutalism, typography, and quiet domestic spaces.',
      price: 240000, // 2,400.00 BDT in poisha/cents
      currency: 'BDT',
      imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
      isActive: true,
    },
    {
      name: 'Typography & White Space: A Literary Approach',
      slug: 'typography-and-white-space',
      description: 'A comprehensive guide to micro-typography, rhythm, and grid design in digital literature.',
      price: 320000, // 3,200.00 BDT
      currency: 'BDT',
      imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
      isActive: true,
    },
    {
      name: 'Minimalist Design Systems',
      slug: 'minimalist-design-systems',
      description: 'Translating editorial aesthetics into structured component systems and design tokens.',
      price: 185000, // 1,850.00 BDT
      currency: 'BDT',
      imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
      isActive: true,
    },
    {
      name: 'The Monograph of Modern Type',
      slug: 'the-monograph-of-modern-type',
      description: 'Curated specimens and case studies in contemporary humanist typography.',
      price: 450000, // 4,500.00 BDT
      currency: 'BDT',
      imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=800',
      isActive: true,
    },
  ];

  for (const product of sampleProducts) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }

  console.log(`✓ Created ${sampleProducts.length} sample products`);
  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
