"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { deleteUser, updateUser, getUserById } from "@/services/user.service";
import { 
  Loader2, 
  Save, 
  Trash2, 
  LogOut, 
  User as UserIcon,
  Mail,
  Phone,
  Building2,
  Briefcase,
  FileText,
  Shield,
  Activity,
  Award,
  Settings,
  Eye,
  Download
} from "lucide-react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

/**
 * HematoScan AI - User Profile Page
 * Medical professional profile management
 */

// Validation schema for medical professionals
const profileSchema = z.object({
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

  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number cannot exceed 15 digits")
    .regex(/^[0-9+\s()-]+$/, "Invalid contact number format"),

  hospitalName: z.string().min(1, "Hospital/Institution name is required"),
  
  role: z.string().min(1, "Professional role is required"),
  
  department: z.string().optional(),
  
  licenseNumber: z.string().min(1, "Professional license number is required"),
  
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase, and number"
    )
    .optional()
    .or(z.literal('')),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfilePage = () => {
  const router = useRouter();
  
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [userId, setUserId] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      email: "",
      contactNumber: "",
      hospitalName: "",
      role: "",
      department: "",
      licenseNumber: "",
      password: ""
    },
  });

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      const storedUserId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      
      if (!storedUserId || !token) {
        router.push('/login');
        return;
      }

      setUserId(storedUserId);
      setIsLoadingProfile(true);
      
      try {
        const user = await getUserById(storedUserId);
        if (user) {
          form.reset({
            fullName: user.fullName || "",
            email: user.email || "",
            contactNumber: user.contactNumber || "",
            hospitalName: user.hospitalName || "",
            role: user.role || "",
            department: user.department || "",
            licenseNumber: user.licenseNumber || "",
            password: "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        if (error instanceof Error && error.message.includes('authentication')) {
          router.push('/login');
        }
      } finally {
        setIsLoadingProfile(false);
      }
    };

    fetchUserData();
  }, [router, form]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const handleUpdate = async (data: ProfileFormData) => {
    if (!userId) return;
    
    setIsUpdating(true);
    setUpdateSuccess(false);
    
    try {
      const updateData = { ...data };
      if (!updateData.password) {
        delete updateData.password;
      }
      
      await updateUser(userId, updateData);
      setUpdateSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setUpdateSuccess(false), 3000);
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = confirm(
      "⚠️ WARNING: This will permanently delete your account and all associated data.\n\nThis action cannot be undone. Are you sure you want to proceed?"
    );
    if (!confirmDelete) return;

    const doubleConfirm = confirm(
      "This is your final confirmation. Type 'DELETE' in the next prompt to proceed."
    );
    if (!doubleConfirm) return;

    setIsDeleting(true);
    try {
      await deleteUser(userId);
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      alert("Account deleted successfully.");
      router.push("/register");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to delete account");
    } finally {
      setIsDeleting(false);
    }
  };

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">MY Profile</h1>
          <p className="text-xl text-slate-300">Manage your professional account information</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {isLoadingProfile ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-16 w-16 animate-spin text-slate-600 mb-4" />
            <p className="text-slate-600 text-lg">Loading your profile...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Profile Overview */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 sticky top-24">
                {/* Avatar */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold mb-4">
                    {getInitials(form.watch('fullName') || 'User')}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 text-center">
                    {form.watch('fullName') || 'Your Name'}
                  </h2>
                  <p className="text-slate-600 text-center mt-2">
                    {form.watch('role') || 'Medical Professional'}
                  </p>
                  {form.watch('department') && (
                    <p className="text-sm text-slate-500 mt-1">
                      {form.watch('department')}
                    </p>
                  )}
                </div>

                {/* Quick Info */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-3 text-sm">
                    <Building2 className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="text-slate-500 text-xs">Institution</p>
                      <p className="text-slate-900 font-medium">
                        {form.watch('hospitalName') || 'Not specified'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="text-slate-500 text-xs">License Number</p>
                      <p className="text-slate-900 font-medium">
                        {form.watch('licenseNumber') || 'Not specified'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="text-slate-500 text-xs">Email</p>
                      <p className="text-slate-900 font-medium break-all">
                        {form.watch('email') || 'Not specified'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="text-slate-500 text-xs">Contact</p>
                      <p className="text-slate-900 font-medium">
                        {form.watch('contactNumber') || 'Not specified'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Account Status */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-sm">
                    <Activity className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 font-medium">Account Active</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Member since {new Date().getFullYear()}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content - Profile Form */}
            <div className="lg:col-span-2">
              {/* Success Message */}
              {updateSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3"
                >
                  <Activity className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900">Profile Updated Successfully!</p>
                    <p className="text-sm text-green-700 mt-1">Your changes have been saved.</p>
                  </div>
                </motion.div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleUpdate)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <UserIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Personal Information</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700">
                              Full Name *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Dr. John Doe"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700">
                              Email Address *
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="doctor@hospital.lk"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="contactNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700">
                              Contact Number *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+94 77 123 4567"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700">
                              New Password (Optional)
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Leave blank to keep current"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Professional Details */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Award className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Professional Details</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="hospitalName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700">
                              Hospital / Institution *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="National Hospital Colombo"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700">
                              Professional Role *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Hematologist, Laboratory Technician"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700">
                              Department (Optional)
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Hematology, Pathology"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="licenseNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-slate-700">
                              Professional License Number *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="SLMC-12345"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <Button
                      type="submit"
                      disabled={isUpdating || isDeleting}
                      className="h-14 bg-slate-900 hover:bg-slate-800 text-white font-semibold"
                    >
                      {isUpdating ? (
                        <>
                          <Loader2 className="animate-spin h-5 w-5 mr-2" />
                          Updating...
                        </>
                      ) : (
                        <>
                          <Save className="h-5 w-5 mr-2" />
                          Save Changes
                        </>
                      )}
                    </Button>

                    <Button
                      type="button"
                      onClick={handleLogout}
                      disabled={isUpdating || isDeleting}
                      className="h-14 bg-slate-600 hover:bg-slate-700 text-white font-semibold"
                    >
                      <LogOut className="h-5 w-5 mr-2" />
                      Logout
                    </Button>

                    <Button
                      type="button"
                      onClick={handleDelete}
                      disabled={isUpdating || isDeleting}
                      className="h-14 bg-red-600 hover:bg-red-700 text-white font-semibold"
                    >
                      {isDeleting ? (
                        <>
                          <Loader2 className="animate-spin h-5 w-5 mr-2" />
                          Deleting...
                        </>
                      ) : (
                        <>
                          <Trash2 className="h-5 w-5 mr-2" />
                          Delete Account
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Warning Notice */}
                  <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-amber-900">Data Protection Notice</p>
                        <p className="text-xs text-amber-800 mt-1">
                          Your information is protected under Sri Lanka PDPA (2022). We use industry-standard
                          encryption to secure your data. Account deletion is permanent and cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;