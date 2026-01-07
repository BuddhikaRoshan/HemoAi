"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Eye, 
  EyeOff, 
  Microscope, 
  Shield,
  Award,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  User,
  Mail,
  Lock,
  Phone,
  Building2,
  FileText,
  Briefcase
} from "lucide-react";
import Link from "next/link";

/**
 * HematoScan AI - Registration Interface
 * IEEE Standard-Compliant Academic Registration Portal
 */

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    hospitalName: "",
    role: "Laboratory Technician",
    department: "",
    licenseNumber: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const e: Record<string, string> = {};
    if (!formData.fullName) e.fullName = "Full name is required";
    if (!formData.email) e.email = "Email is required";
    if (!formData.password) e.password = "Password is required";
    if (formData.password.length < 8) e.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      e.confirmPassword = "Passwords do not match";
    if (!formData.contactNumber) e.contactNumber = "Contact number is required";
    if (!formData.hospitalName) e.hospitalName = "Institution is required";
    if (!formData.licenseNumber) e.licenseNumber = "License number is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Registration failed");
      const data = await res.json();
      localStorage.setItem("userId", data.user.id);
      router.push("/Home");
    } catch (err) {
      setErrors({ submit: "Registration failed. Please verify your details and try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 flex-col justify-between relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
              <Microscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">HemoAI</h1>
              <p className="text-xs text-slate-300">Project 25-26J-344</p>
            </div>
          </Link>

          {/* Benefits */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
              Join Our Research Community
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Access state-of-the-art AI-powered diagnostic tools for blood disorder detection
            </p>

            <div className="space-y-3">
              {[
                "Access to 4 specialized diagnostic modules",
                "Real-time AI-assisted analysis",
                "Explainable AI visualizations",
                "Collaborative research platform"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
          {/* Footer */}
          <p className="text-center text-xs text-slate-500 mt-4">
            © 2025 HemoAI · SLIIT · 25-26J-344
          </p>
        
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl my-4"
        >
          {/* Mobile Logo */}
          <Link href="/" className="lg:hidden flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
              <Microscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">HematoScan AI</h1>
              <p className="text-xs text-slate-600">Project 25-26J-344</p>
            </div>
          </Link>

          {/* Form Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
            {/* Header */}
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Create Research Account
              </h2>
              <p className="text-slate-600 text-sm">
                Register for authorized access to the diagnostic platform
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6">
              {/* Global Error */}
              {errors.submit && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-4 flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-900">Registration Failed</p>
                    <p className="text-xs text-red-700 mt-1">{errors.submit}</p>
                  </div>
                </motion.div>
              )}

              {/* Form Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Dr. Samantha Silva"
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border ${
                        errors.fullName ? "border-red-300" : "border-slate-300"
                      } focus:ring-2 focus:ring-slate-400 focus:border-slate-400 focus:outline-none transition`}
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Institutional Email
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="researcher@sliit.lk"
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border ${
                        errors.email ? "border-red-300" : "border-slate-300"
                      } focus:ring-2 focus:ring-slate-400 focus:border-slate-400 focus:outline-none transition`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Min. 8 characters"
                      className={`w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border ${
                        errors.password ? "border-red-300" : "border-slate-300"
                      } focus:ring-2 focus:ring-slate-400 focus:border-slate-400 focus:outline-none transition`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      aria-label="Toggle password"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="Re-enter password"
                      className={`w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border ${
                        errors.confirmPassword ? "border-red-300" : "border-slate-300"
                      } focus:ring-2 focus:ring-slate-400 focus:border-slate-400 focus:outline-none transition`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      aria-label="Toggle confirm password"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-xs text-red-600 mt-1">{errors.confirmPassword}</p>}
                </div>

                {/* Contact Number */}
                <div>
                  <label htmlFor="contact" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Contact Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="contact"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      placeholder="+94 77 123 4567"
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border ${
                        errors.contactNumber ? "border-red-300" : "border-slate-300"
                      } focus:ring-2 focus:ring-slate-400 focus:border-slate-400 focus:outline-none transition`}
                    />
                  </div>
                  {errors.contactNumber && <p className="text-xs text-red-600 mt-1">{errors.contactNumber}</p>}
                </div>

                {/* Hospital/Institution */}
                <div>
                  <label htmlFor="hospital" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Hospital / Institution
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <input
                      id="hospital"
                      type="text"
                      value={formData.hospitalName}
                      onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                      placeholder="National Hospital Colombo"
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border ${
                        errors.hospitalName ? "border-red-300" : "border-slate-300"
                      } focus:ring-2 focus:ring-slate-400 focus:border-slate-400 focus:outline-none transition`}
                    />
                  </div>
                  {errors.hospitalName && <p className="text-xs text-red-600 mt-1">{errors.hospitalName}</p>}
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Professional Role
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 focus:outline-none transition appearance-none bg-white"
                    >
                      <option>Laboratory Technician</option>
                      <option>Hematologist</option>
                      <option>Pathologist</option>
                      <option>Medical Officer</option>
                      <option>Researcher</option>
                      <option>Clinical Scientist</option>
                    </select>
                  </div>
                </div>

                {/* License Number */}
                <div>
                  <label htmlFor="license" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Professional License Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <input
                      id="license"
                      type="text"
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                      placeholder="SLMC-12345"
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border ${
                        errors.licenseNumber ? "border-red-300" : "border-slate-300"
                      } focus:ring-2 focus:ring-slate-400 focus:border-slate-400 focus:outline-none transition`}
                    />
                  </div>
                  {errors.licenseNumber && <p className="text-xs text-red-600 mt-1">{errors.licenseNumber}</p>}
                </div>
              </div>

              {/* Compliance Notice */}
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-900">
                    <span className="font-semibold">Academic & Clinical Use:</span> This system is for authorized research and clinical use. All diagnostic outputs must be reviewed by qualified medical personnel.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-4"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                
                  </>
                )}
              </button>

              {/* Sign In Link */}
              <p className="text-center text-sm text-slate-600">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-slate-900 hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          </div>


        </motion.div>
      </div>
    </div>
  );
}