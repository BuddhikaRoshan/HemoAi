import { User } from "@prisma/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

// Register a new medical professional user
export const registerUser = async (userData: {
  fullName: string;
  email: string;
  password: string;
  contactNumber: string;
  hospitalName: string;
  role: string;
  department?: string;
  licenseNumber: string;
  imageUrl?: string;
}) => {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // First, read the response as text
    const responseText = await response.text();
    
    if (!response.ok) {
      try {
        // Try to parse the error response as JSON
        const errorData = JSON.parse(responseText);
        console.error('Registration error response:', errorData);
        throw new Error(errorData.message || `Registration failed with status ${response.status}`);
      } catch (jsonError) {
        // If JSON parsing fails, use the raw text as error message
        console.error('Registration error (raw response):', responseText);
        throw new Error(`Registration failed: ${response.status} ${responseText || 'Unknown error'}`);
      }
    }

    try {
      // Parse the successful response as JSON
      const data = JSON.parse(responseText);
      console.log('Registration successful:', data);
      return data;
    } catch (jsonError) {
      console.error('Failed to parse registration response:', jsonError);
      throw new Error('Received invalid JSON response from server');
    }
  } catch (error) {
    console.error('Registration request failed:', error);
    throw error instanceof Error 
      ? error 
      : new Error('Network error during registration');
  }
};

// Define the login response type
type LoginResponse = {
  token: string;
  user: User;
};

// Login a user
export const loginUser = async (credentials: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Invalid email or password");
  }

  return response.json();
};

// Get user by ID
export const getUserById = async (userId: string): Promise<User> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to fetch user');
    }

    return await response.json();
  } catch (error) {
    console.error('Error in getUserById:', error);
    throw error; // Re-throw to allow handling in the component
  }
};

// Update user profile
export const updateUser = async (
  userId: string,
  userData: {
    fullName?: string;
    email?: string;
    password?: string;
    contactNumber?: string;
    hospitalName?: string;
    role?: string;
    department?: string;
    licenseNumber?: string;
    imageUrl?: string;
  }
) => {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to update user");
  }

  return response.json();
};

// Delete user account
export const deleteUser = async (userId: string) => {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to delete user");
  }

  return response.json();
};

// Verify user account (for email verification)
export const verifyUser = async (userId: string, verificationToken: string) => {
  const response = await fetch(`${API_URL}/users/${userId}/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ verificationToken }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to verify user");
  }

  return response.json();
};

// Request password reset
export const requestPasswordReset = async (email: string) => {
  const response = await fetch(`${API_URL}/users/password-reset/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to request password reset");
  }

  return response.json();
};

// Reset password with token
export const resetPassword = async (
  token: string,
  newPassword: string
) => {
  const response = await fetch(`${API_URL}/users/password-reset/confirm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, newPassword }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to reset password");
  }

  return response.json();
};

// Get user statistics (diagnoses count, etc.)
export const getUserStats = async (userId: string) => {
  const response = await fetch(`${API_URL}/users/${userId}/stats`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user statistics");
  }

  return response.json();
};

// Logout user (clear session)
export const logoutUser = () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("userToken");
  // Clear any other stored user data
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("userId");
};

// Get current user ID from storage
export const getCurrentUserId = (): string | null => {
  return localStorage.getItem("userId");
};