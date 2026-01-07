"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Microscope, 
  Eye, 
  EyeOff, 
  LogIn, 
  Shield, 
  Award,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Lock,
  Mail
} from "lucide-react";
import Link from "next/link";
import { loginUser } from "@/services/user.service";


export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (response?.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("userId", response.user.id);
        router.push("/Home");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed. Please verify your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left Side - Branding & Info */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 flex-col justify-between relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Logo & Title */}
          <Link href="/" className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
              <Microscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">HemoAI</h1>
              <p className="text-xs text-slate-300">Project 25-26J-344</p>
            </div>
          </Link>

          {/* Mission Statement */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
              Advanced Blood Disorder Detection Platform
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Machine learning based microscopic image analysis for automated detection 
              and classification of hematological disorders in Sri Lankan healthcare.
            </p>

            {/* Key Features */}
            <div className="space-y-3">
              {[
                "Multi-disease diagnostic framework",
                "CNN-ViT hybrid architecture",
                "Explainable AI integration",
                ">95% diagnostic accuracy"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
{/* Copyright */}
            <p className="text-center text-xs text-slate-500">
              © 2025 HemoAI · SLIIT · 25-26J-344
            </p>

      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
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
                Authorized Access
              </h2>
              <p className="text-slate-600 text-sm">
                Sign in to access the diagnostic platform
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
              {/* Error Alert */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  role="alert"
                  aria-live="assertive"
                  className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-900">Authentication Failed</p>
                    <p className="text-xs text-red-700 mt-1">{error}</p>
                  </div>
                </motion.div>
              )}

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Institutional Email
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="researcher@sliit.lk"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 focus:outline-none text-sm transition"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label 
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-slate-600 hover:text-slate-900 transition font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    placeholder="Enter your password"
                    className="w-full pl-11 pr-11 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-slate-400 focus:outline-none text-sm transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2.5">
                <input
                  id="remember"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-2 focus:ring-slate-400"
                />
                <label htmlFor="remember" className="text-sm text-slate-600 cursor-pointer">
                  Remember this device for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full group relative overflow-hidden py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                  
                    <span>Sign In</span>
                   
                  </>
                )}
              </button>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 pt-1">
                <Shield className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-500">
                  Protected by institutional authentication
                </span>
              </div>
            </form>

            {/* Divider */}
            <div className="px-6 pb-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-4 bg-white text-slate-500">
                    New to HemoAI?
                  </span>
                </div>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="px-6 pb-6">
              <Link
                href="/register"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-200 text-slate-700 text-sm font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                Create Account
              </Link>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-4 space-y-2">
            {/* Access Notice */}
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-blue-900">Academic & Clinical Use Only</p>
                  <p className="text-xs text-blue-700 mt-0.5">
                    Authorized researchers and healthcare professionals only.
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </motion.div>
      </div>
    </div>
  );
}