"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/app/context/AuthContext";
import { Microscope, LogOut, User } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-slate-800 flex items-center justify-center">
              <Microscope className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-slate-800">HemoAI</span>
              <span className="text-[11px] text-slate-500">Academic Research System</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <NavLink href="/about">About Project</NavLink>
                <NavLink href="/disorders">Disorders</NavLink>
                <NavLink href="/Team">Team</NavLink>
                <NavLink href="/demo">Demo / Upload</NavLink>
                <NavLink href="/documentation">Documentation</NavLink>
                <NavLink href="/Contact">Contact</NavLink>
                <NavLink href="/profile" icon={<User className="h-4 w-4" />}>Profile</NavLink>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                >
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-md px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-md bg-slate-800 px-4 py-2 text-sm text-white hover:bg-slate-900"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden rounded-md p-2 text-slate-600 hover:bg-slate-100"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-slate-200 bg-white"
        >
          <div className="px-4 py-3 space-y-1">
            {isAuthenticated ? (
              <>
                <MobileLink href="/about">About Project</MobileLink>
                <MobileLink href="/disorders">Disorders</MobileLink>
                <MobileLink href="/Team">Team</MobileLink>
                <MobileLink href="/demo">Demo / Upload</MobileLink>
                <MobileLink href="/documentation">Documentation</MobileLink>
                <MobileLink href="/Contact">Contact</MobileLink>
                <MobileLink href="/profile">Profile</MobileLink>
                <button
                  onClick={handleLogout}
                  className="w-full text-left rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <MobileLink href="/about">About Research</MobileLink>
                <MobileLink href="/methodology">Methodology</MobileLink>
                <MobileLink href="/Team">Research Team</MobileLink>
                <MobileLink href="/login">Login</MobileLink>
                <MobileLink href="/register">Register</MobileLink>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactElement | null;
}

const NavLink = ({ href, children, icon = null }: NavLinkProps) => (
  <Link
    href={href}
    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 transition"
  >
    {icon && <span className="mr-1">{icon}</span>}
    {children}
  </Link>
);

interface MobileLinkProps {
  href: string;
  children: React.ReactNode;
}

const MobileLink = ({ href, children }: MobileLinkProps) => (
  <Link
    href={href}
    className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
  >
    {children}
  </Link>
);

export default Navbar;