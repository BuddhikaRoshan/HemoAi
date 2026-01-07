import { NextResponse } from "next/server";
import { PrismaClient, User } from "@prisma/client";
import { userSchema, loginSchema, updateUserSchema } from "@/schemas/user.schema";
import bcrypt from "bcrypt";

type UserLoginResponse = {
  id: string;
  email: string;
  password: string;
  isActive: boolean;
  fullName: string;
  contactNumber: string;
  imageUrl: string | null;
  role: string;
  hospitalName: string;
  department: string | null;
  licenseNumber: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
};

// Create a single Prisma instance to be reused across requests
const prisma = new PrismaClient();

// POST /api/users/register - Create a new medical professional user
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = userSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.errors },
        { status: 400 }
      );
    }

    const { email, password } = validation.data;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        fullName: validation.data.fullName,
        email: validation.data.email,
        password: hashedPassword,
        contactNumber: validation.data.contactNumber,
        hospitalName: validation.data.hospitalName,
        role: validation.data.role,
        department: validation.data.department,
        licenseNumber: validation.data.licenseNumber,
        imageUrl: validation.data.imageUrl,
        isVerified: false,
        isActive: true,
      },
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: userWithoutPassword
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("User registration error:", error);
    return NextResponse.json(
      { error: "Registration failed" },
      { status: 500 }
    );
  }
}

// POST /api/users/login - Login user
export async function LOGIN(request: Request) {
  try {
    const body = await request.json();
    const validation = loginSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.errors },
        { status: 400 }
      );
    }

    const { email, password } = validation.data;

    // Find user by email and include the isActive field
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        isActive: true,
        fullName: true,
        contactNumber: true,
        imageUrl: true,
        role: true,
        hospitalName: true,
        department: true,
        licenseNumber: true,
        isVerified: true,
        createdAt: true,
        updatedAt: true,
      }
    }) as UserLoginResponse | null;

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Check if account is active
    if (!user.isActive) {
      return NextResponse.json(
        { error: "Account is deactivated. Please contact support." },
        { status: 403 }
      );
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message: "Login successful",
        user: userWithoutPassword,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}

// GET /api/users - Get all users (admin only)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");
    const role = searchParams.get("role");
    const hospitalName = searchParams.get("hospitalName");

    const where: any = {};
    if (role) where.role = role;
    if (hospitalName) where.hospitalName = { contains: hospitalName, mode: 'insensitive' };

    const users = await prisma.user.findMany({
      where,
      select: {
        id: true,
        fullName: true, // This should match your Prisma schema
        email: true,
        contactNumber: true,
        hospitalName: true,
        role: true,
        department: true,
        licenseNumber: true,
        imageUrl: true,
        isVerified: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      take: limit,
      skip: offset,
      orderBy: { createdAt: 'desc' },
    });

    const total = await prisma.user.count({ where });

    return NextResponse.json(
      {
        users,
        pagination: {
          total,
          limit,
          offset,
          hasMore: offset + limit < total,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// GET /api/users/[userId] - Get user by ID
export async function GET_BY_ID(request: Request, userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        fullName: true,
        email: true,
        contactNumber: true,
        hospitalName: true,
        role: true,
        department: true,
        licenseNumber: true,
        imageUrl: true,
        isVerified: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            diagnoses: true,
            patients: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// PUT /api/users/[userId] - Update user profile
export async function PUT(request: Request, userId: string) {
  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const body = await request.json();
    const validation = updateUserSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.errors },
        { status: 400 }
      );
    }

    const updateData: any = { ...validation.data };

    // Hash password if provided
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    // Check email uniqueness if email is being updated
    if (updateData.email && updateData.email !== existingUser.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email: updateData.email },
      });
      if (emailExists) {
        return NextResponse.json(
          { error: "Email already in use" },
          { status: 400 }
        );
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        fullName: true,
        email: true,
        contactNumber: true,
        hospitalName: true,
        role: true,
        department: true,
        licenseNumber: true,
        imageUrl: true,
        isVerified: true,
        isActive: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(
      {
        message: "User updated successfully",
        user: updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("User update error:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// Type for user with counts
type UserWithCounts = User & {
  _count: {
    diagnoses: number;
    patients: number;
  };
};

// DELETE /api/users/[userId] - Delete user account
export async function DELETE(request: Request, userId: string) {
  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        _count: {
          select: {
            diagnoses: true,
            patients: true,
          },
        },
      },
    }) as UserWithCounts | null;

    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Check if user has associated data
    if (existingUser._count.diagnoses > 0 || existingUser._count.patients > 0) {
      return NextResponse.json(
        {
          error: "Cannot delete user with existing diagnoses or patients",
          details: {
            diagnoses: existingUser._count.diagnoses,
            patients: existingUser._count.patients,
          },
        },
        { status: 400 }
      );
    }

    // Delete user
    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("User deletion error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to delete user", details: errorMessage },
      { status: 500 }
    );
  }
}

// POST /api/users/[userId]/verify - Verify user account
export async function VERIFY(request: Request, userId: string) {
  try {
    const body = await request.json();
    const { verificationToken } = body;

    if (!verificationToken) {
      return NextResponse.json(
        { error: "Verification token is required" },
        { status: 400 }
      );
    }

    // Verify token logic here (implement based on your token strategy)
    // For now, just set isVerified to true

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { isActive: true },
      select: {
        id: true,
        fullName: true,
        email: true,
        isActive: true,
      },
    });

    return NextResponse.json(
      {
        message: "Account verified successfully",
        user: updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json(
      { error: "Failed to verify account" },
      { status: 500 }
    );
  }
}

// GET /api/users/[userId]/stats - Get user statistics
export async function GET_STATS(request: Request, userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        _count: {
          select: {
            diagnoses: true,
            patients: true,
            annotations: true,
          },
        },
      },
    }) as UserWithCounts | null;

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Get diagnosis statistics by disorder type
    const diagnosisStats = await prisma.diagnosis.groupBy({
      by: ['disorderType', 'detectionResult'],
      where: { userId },
      _count: true,
    });

    // Get recent diagnoses
    const recentDiagnoses = await prisma.diagnosis.findMany({
      where: { userId },
      take: 10,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        disorderType: true,
        detectionResult: true,
        confidence: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        counts: user._count,
        diagnosisStats,
        recentDiagnoses,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch user statistics" },
      { status: 500 }
    );
  }
}