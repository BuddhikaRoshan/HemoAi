import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { loginSchema } from "@/schemas/user.schema";
import bcrypt from "bcrypt";
import { generateToken } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const validation = loginSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { email, password } = validation.data;

  try {
    // Find user by email
    const user = await prisma.user.findUnique({ 
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
        fullName: true,
        contactNumber: true,
        hospitalName: true,
        department: true,
        licenseNumber: true,
        isVerified: true,
        isActive: true,
        imageUrl: true,
        createdAt: true,
        updatedAt: true
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Validate password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Generate JWT token
    const token = generateToken(user.id, user.role);

    // Exclude password from the response
    const { password: _, ...userData } = user;

    return NextResponse.json(
      { 
        token,
        user: userData 
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: "An error occurred during login. Please try again." },
      { status: 500 }
    );
  }
}
