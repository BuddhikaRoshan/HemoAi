import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'b1f0cb9eb923be794e536d15b96ee37d';
const JWT_EXPIRES_IN = '7d'; // Token expires in 7 days

export const generateToken = (userId: string, role: string): string => {
  return jwt.sign(
    { userId, role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

export const verifyToken = (token: string): { userId: string; role: string } | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; role: string };
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};
