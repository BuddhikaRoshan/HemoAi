"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Clock,
  Lock,
  BarChart3,
  Award,
  Activity,
  Users,
  CheckCircle2,
  Microscope,
  Upload,
  FileText,
  Zap,
  Shield,
  TrendingUp,
  Database,
  Eye,
  ArrowRight,
  Sparkles,
  Target,
  Globe,
  FlaskConical,
  Scan,
  Droplet,
  AlertCircle,
  BookOpen,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const HomePage = () => {
  const [activeModule, setActiveModule] = useState(0);

  // Disease detection modules
  const modules = [
    {
      name: "Leukemia",
      icon: Activity,
      color: "from-rose-500 to-red-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-500",
      description: "ALL/AML detection with CNN-ViT hybrid model",
      accuracy: ">95%",
      samples: "1,000+",
      path: "/demo"
    },
    {
      name: "Thalassemia",
      icon: FlaskConical,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
      description: "Binary classification with silent carrier detection",
      accuracy: ">95%",
      samples: "1,000+",
      path: "/demo"
    },
    {
      name: "Anemia",
      icon: Droplet,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-500",
      description: "Multi-class subtype classification with CBC integration",
      accuracy: ">95%",
      samples: "1,000+",
      path: "/demo"
    },
    {
      name: "Malaria",
      icon: Scan,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-500",
      description: "Parasitized cell detection with species classification",
      accuracy: ">95%",
      samples: "1,000+",
      path: "/demo"
    }
  ];

  // Platform statistics
  const stats = [
    { label: "Overall Accuracy", value: "96.2%", icon: Target, color: "text-green-600" },
    { label: "Analyses Completed", value: "12,847", icon: Activity, color: "text-blue-600" },
    { label: "Active Researchers", value: "247", icon: Users, color: "text-purple-600" },
    { label: "Avg. Inference Time", value: "<5s", icon: Zap, color: "text-amber-600" }
  ];

  // Key features
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "CNN-ViT hybrid architecture with transfer learning and ensemble methods for robust classification"
    },
    {
      icon: Eye,
      title: "Explainable AI",
      description: "Grad-CAM, SHAP, and attention visualizations provide transparent diagnostic reasoning"
    },
    {
      icon: Clock,
      title: "Real-Time Processing",
      description: "Sub-5-second inference with optimized model architecture for clinical workflows"
    },
    {
      icon: Shield,
      title: "Clinical Validation",
      description: "Cross-institutional validation across 3+ hospitals with >1,000 patient cases"
    },
    {
      icon: Database,
      title: "Local Dataset",
      description: "First large-scale annotated blood disorder dataset specific to Sri Lankan population"
    },
    {
      icon: Lock,
      title: "Data Compliance",
      description: "PDPA 2022 compliant with end-to-end encryption and audit trails"
    }
  ];

  // Quick start workflow
  const workflow = [
    { step: "Upload", icon: Upload, desc: "Blood smear image" },
    { step: "Analyze", icon: Brain, desc: "AI processing" },
    { step: "Review", icon: Eye, desc: "Explainable results" },
    { step: "Report", icon: FileText, desc: "Generate documentation" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >


            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-3xl">
              ML-Assisted Blood Disorder Detection Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
              Advanced machine learning system for automated detection and classification 
              of hematological disorders through microscopic image analysis
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/demo"
                className="group px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition flex items-center gap-2"
              >
                Start New Analysis
                
              </Link>

            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                  <stat.icon className={`w-6 h-6 mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diagnostic Modules */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Diagnostic Modules</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select a specialized module to begin AI-assisted diagnostic analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, idx) => (
              <Link
                key={idx}
                href={module.path}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <module.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700">
                  {module.name}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {module.description}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    <Target className="w-3 h-3 text-green-600" />
                    <span className="font-semibold text-slate-700">{module.accuracy}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Database className="w-3 h-3 text-slate-400" />
                    <span className="text-slate-500">{module.samples}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-medium text-slate-700 group-hover:text-slate-900">
                  Start Analysis
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Simple four-step process from image upload to diagnostic report
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-4 gap-0 md:gap-2">
              {workflow.map((item, idx) => (
                <div key={idx} className="relative pr-6">
                  <div className="h-full bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-slate-500 mb-2">Step {idx + 1}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.step}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                  {idx < workflow.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <ChevronRight className="w-6 h-6 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Platform Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Research-grade features designed for clinical validation and academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>

              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Advancing Healthcare in Sri Lanka
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                First comprehensive ML based blood disorder detection system developed specifically 
                for Sri Lankan healthcare infrastructure and patient populations.
              </p>
              <div className="space-y-3">
                {[
                  "50% reduction in diagnostic time vs manual microscopy",
                  "Cross-institutional validation across 3+ hospitals",
                  "Compliance with Sri Lanka PDPA (2022)",
                  "Integration with existing clinical workflows"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Validation Sites</h3>
              <div className="space-y-4">
                {[
                  "National Cancer Institute, Maharagama",
                  "Teaching Hospital, Kandy",
                  "Karapitiya Teaching Hospital, Galle",
                  "Colombo South Teaching Hospital"
                ].map((site, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <Globe className="w-5 h-5 text-slate-600" />
                    <span className="text-sm font-medium text-slate-700">{site}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Clinical Use Guidelines
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  This system is designed as a <strong>decision-support tool</strong> for academic research 
                  and supervised clinical validation. All diagnostic outputs must be reviewed and verified 
                  by qualified medical professionals before clinical decision-making.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/documentation"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Documentation
                  </Link>
                  <Link
                    href="/guidelines"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition"
                  >
                    <Shield className="w-4 h-4" />
                    Clinical Guidelines
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Microscope className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Begin your diagnostic analysis with our AI-assisted platform
          </p>
          <Link
            href="/diagnostics"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            Start New Analysis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;