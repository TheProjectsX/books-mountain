import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

export const ADMIN_COOKIE_NAME = 'admin_token';

const JWT_SECRET_STRING =
  process.env.JWT_SECRET || 'books_mountain_fallback_secret_key_minimum_32_characters_long_2026';

const secretKey = new TextEncoder().encode(JWT_SECRET_STRING);

export interface AdminJwtPayload {
  sub: string;
  email: string;
  role: string;
}

/**
 * Sign JWT token using jose
 */
export async function signJwt(payload: AdminJwtPayload): Promise<string> {
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secretKey);
}

/**
 * Verify JWT token using jose
 */
export async function verifyJwt(token: string): Promise<AdminJwtPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return {
      sub: payload.sub as string,
      email: payload.email as string,
      role: (payload.role as string) || 'ADMIN',
    };
  } catch {
    return null;
  }
}

/**
 * Hash password using bcryptjs
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

/**
 * Compare plain password with hash
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Extract and verify token from NextRequest (for Route Handlers or Proxy)
 */
export async function getSessionFromRequest(request: NextRequest): Promise<AdminJwtPayload | null> {
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyJwt(token);
}

/**
 * Extract and verify token from next/headers cookies (for Server Components)
 */
export async function getSession(): Promise<AdminJwtPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    if (!token) return null;
    return verifyJwt(token);
  } catch {
    return null;
  }
}
