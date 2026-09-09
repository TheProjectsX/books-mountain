import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionFromRequest } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const session = await getSessionFromRequest(request);

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    try {
      const user = await prisma.user.findUnique({
        where: { id: session.sub },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
        },
      });

      if (!user) {
        return NextResponse.json(
          { success: false, error: 'User no longer exists' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        user,
      });
    } catch {
      // Return session payload if DB temporarily unreachable
      return NextResponse.json({
        success: true,
        user: {
          id: session.sub,
          name: 'Site Administrator',
          email: session.email,
          role: session.role,
        },
      });
    }
  } catch (error) {
    console.error('Session retrieval error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve session' },
      { status: 500 }
    );
  }
}
