import React from "react";
import { motion } from "framer-motion";
import {
  Microscope,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Award,
  Shield,
  BookOpen,
  Users,
  FileText,
  Activity,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";
import Link from "next/link";

/**
 * HematoScan AI - Footer Component
 * Comprehensive footer with project information, links, and institutional details
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <Microscope className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">HemoAI</h3>
                <p className="text-xs text-slate-400">Project 25-26J-344</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              ML powered blood disorder detection system using CNN-ViT hybrid models
              for automated microscopic image analysis.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Research */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Research
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/about" icon={BookOpen}>
                About Project
              </FooterLink>
              <FooterLink href="/disorders" icon={Activity}>
                Blood Disorders
              </FooterLink>
              <FooterLink href="/Team" icon={Users}>
                Research Team
              </FooterLink>
              <FooterLink href="/documentation" icon={FileText}>
                Documentation
              </FooterLink>
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Resources
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/demo" icon={Microscope}>
                Demo Analysis
              </FooterLink>
              <FooterLink href="/api-docs" icon={FileText}>
                API Documentation
              </FooterLink>
              <FooterLink href="/user-guide" icon={BookOpen}>
                User Guide
              </FooterLink>
              <FooterLink href="/contact" icon={Mail}>
                Contact Us
              </FooterLink>
            </ul>
          </motion.div>

          {/* Column 4: Institution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Institution
            </h4>
            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-white mb-1">
                  Sri Lanka Institute of Information Technology
                </p>
                <p className="text-xs text-slate-400">
                  Department of Information Technology
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-slate-400" />
                  <span className="text-xs">
                    New Kandy Road, Malabe<br />
                    Sri Lanka 10115
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0 text-slate-400" />
                  <span className="text-xs">+94 11 754 4801</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0 text-slate-400" />
                  <span className="text-xs">research@sliit.lk</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Compliance Section */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-3 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-slate-400" />
              <span className="font-semibold text-slate-300">Compliance & Ethics</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <div className="px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg text-xs text-green-400 flex items-center gap-1">
                <Shield className="w-3 h-3" />
                SLIIT Ethics Approved
              </div>
              <div className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400 flex items-center gap-1">
                <Shield className="w-3 h-3" />
                MoH Approved
              </div>
              <div className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-xs text-purple-400 flex items-center gap-1">
                <Shield className="w-3 h-3" />
                PDPA 2022 Compliant
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <p>© {currentYear} HemoAI Research Project</p>
            <span className="hidden md:inline">•</span>
            <p>Project ID: 25-26J-344</p>
            <span className="hidden md:inline">•</span>
            <p>SLIIT Department of IT</p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-white transition"
            >
              Terms of Use
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              href="/ethics"
              className="text-slate-400 hover:text-white transition"
            >
              Research Ethics
            </Link>
          </div>
        </motion.div>

        {/* Academic Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 pt-6 border-t border-white/10"
        >
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-amber-200">
                <p className="font-semibold mb-1">Academic & Research Use Notice</p>
                <p className="text-amber-300/80">
                  This system is designed for academic research and clinical decision support.
                  All diagnostic outputs must be reviewed and verified by qualified medical professionals.
                  This tool does not replace professional medical judgment or clinical expertise.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Footer Link Component
interface FooterLinkProps {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const FooterLink = ({ href, icon: Icon, children }: FooterLinkProps) => (
  <li>
    <Link
      href={href}
      className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition group"
    >
      <Icon className="w-4 h-4 text-slate-500 group-hover:text-white transition" />
      <span>{children}</span>
    </Link>
  </li>
);

export default Footer;