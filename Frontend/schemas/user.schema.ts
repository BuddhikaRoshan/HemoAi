import { z } from "zod";

// User Registration Schema
export const userSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/^[a-zA-Z\s.]+$/, "Name can only contain letters, spaces, and dots"),
  email: z
    .string()
    .email("Invalid email address")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number cannot exceed 15 digits")
    .regex(/^[0-9]+$/, "Contact number can only contain numbers"),
  hospitalName: z.string().min(1, "Hospital/Institution name is required"),
  role: z.enum([
    "Laboratory Technician",
    "Hematologist",
    "Medical Officer",
    "Pathologist",
    "Researcher",
    "Other",
  ]),
  department: z.string().optional(),
  licenseNumber: z.string().min(1, "Professional license number is required"),
  imageUrl: z.string().optional(),
});

// Login Schema
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Patient Schema
export const patientSchema = z.object({
  patientId: z.string().min(1, "Patient ID is required"),
  age: z.number().min(0, "Age must be positive").max(150, "Invalid age"),
  gender: z.enum(["Male", "Female", "Other"]),
  bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
  medicalHistory: z.array(z.string()).optional(),
});

// Diagnosis Schema
export const diagnosisSchema = z.object({
  patientId: z.string().min(1, "Patient ID is required"),
  disorderType: z.enum(["Leukemia", "Thalassemia", "Anemia", "Malaria"]),
  imageFile: z.instanceof(File, { message: "Blood smear image is required" }),
  cbcParameters: z
    .object({
      hemoglobin: z.number().optional(),
      wbc: z.number().optional(),
      rbc: z.number().optional(),
      mcv: z.number().optional(),
      mch: z.number().optional(),
      platelets: z.number().optional(),
    })
    .optional(),
  notes: z.string().optional(),
});

// Diagnosis Review Schema
export const diagnosisReviewSchema = z.object({
  status: z.enum(["pending", "reviewed", "confirmed"]),
  reviewNotes: z.string().optional(),
});

// Update User Schema
export const updateUserSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/^[a-zA-Z\s.]+$/, "Name can only contain letters, spaces, and dots")
    .optional(),
  email: z.string().email("Invalid email address").optional(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase, and number"
    )
    .optional(),
  contactNumber: z
    .string()
    .regex(/^[0-9]{10,15}$/, "Contact number must be 10-15 digits")
    .optional(),
  hospitalName: z.string().optional(),
  role: z
    .enum([
      "Laboratory Technician",
      "Hematologist",
      "Medical Officer",
      "Pathologist",
      "Researcher",
      "Other",
    ])
    .optional(),
  department: z.string().optional(),
  licenseNumber: z.string().optional(),
  imageUrl: z.string().optional(),
});

// Update Patient Schema
export const updatePatientSchema = z.object({
  age: z.number().min(0).max(150).optional(),
  gender: z.enum(["Male", "Female", "Other"]).optional(),
  bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
  medicalHistory: z.array(z.string()).optional(),
});

// Password Reset Request Schema
export const passwordResetRequestSchema = z.object({
  email: z.string().email("Invalid email address"),
});

// Password Reset Confirm Schema
export const passwordResetConfirmSchema = z.object({
  token: z.string().min(1, "Reset token is required"),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase, and number"
    ),
});

// Search Filter Schema
export const searchFilterSchema = z.object({
  search: z.string().optional(),
  disorderType: z.enum(["Leukemia", "Thalassemia", "Anemia", "Malaria"]).optional(),
  status: z.enum(["pending", "reviewed", "confirmed"]).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  limit: z.number().min(1).max(100).optional(),
  offset: z.number().min(0).optional(),
});

// Image Annotation Schema
export const imageAnnotationSchema = z.object({
  diagnosisId: z.string().min(1, "Diagnosis ID is required"),
  annotationType: z.string().min(1, "Annotation type is required"),
  coordinates: z.object({}).passthrough(), // JSON object for coordinates
  label: z.string().min(1, "Label is required"),
  confidence: z.number().min(0).max(1).optional(),
  notes: z.string().optional(),
});

// Export Types
export type UserFormData = z.infer<typeof userSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type PatientFormData = z.infer<typeof patientSchema>;
export type DiagnosisFormData = z.infer<typeof diagnosisSchema>;
export type DiagnosisReviewData = z.infer<typeof diagnosisReviewSchema>;
export type UpdateUserData = z.infer<typeof updateUserSchema>;
export type UpdatePatientData = z.infer<typeof updatePatientSchema>;
export type PasswordResetRequestData = z.infer<typeof passwordResetRequestSchema>;
export type PasswordResetConfirmData = z.infer<typeof passwordResetConfirmSchema>;
export type SearchFilterData = z.infer<typeof searchFilterSchema>;
export type ImageAnnotationData = z.infer<typeof imageAnnotationSchema>;