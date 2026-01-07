"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Microscope,
  Activity,
  Brain,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  Scan,
  Target,
  BookOpen,
  FileText,
  Users,
  Award,
  ChevronRight,
  Download,
  ExternalLink,
  Droplet,
  Heart,
  AlertCircle,
  BarChart3,
  Zap,
  Shield,
  Globe
} from "lucide-react";



// Type definitions
type DiseaseKey = "leukemia" | "thalassemia" | "anemia" | "malaria";

interface DiseaseModule {
  title: string;
  researcher: string;
  icon: React.ReactElement;
  color: string;
  borderColor: string;
  bgColor: string;
  description: string;
  accuracy: string;
  methods: string[];
  dataset: string;
  keyFeatures: string[];
}

type DiseaseModules = Record<DiseaseKey, DiseaseModule>;

const HematoScanAI = () => {
  const [activeDisease, setActiveDisease] = useState<DiseaseKey>("leukemia");

  // Disease module data from research proposals
  const diseaseModules: DiseaseModules = {
    leukemia: {
      title: "Leukemia Detection",
      researcher: "Bandara L.P.B.R. (IT22564122)",
      icon: <Activity className="w-6 h-6" />,
      color: "from-rose-500 to-red-600",
      borderColor: "border-rose-500",
      bgColor: "bg-rose-50",
      description: "CNN-ViT hybrid model for automated detection and classification of leukemia subtypes (ALL, AML) with explainable AI integration.",
      accuracy: ">95%",
      methods: ["CNN", "Vision Transformer", "Grad-CAM", "SHAP"],
      dataset: "≥1,000 annotated blood smear images",
      keyFeatures: [
        "Hybrid CNN-ViT architecture for local and global feature extraction",
        "Multi-class classification (ALL, AML subtypes)",
        "Explainable AI with Grad-CAM and SHAP visualizations",
        "Real-time inference (<5 seconds per sample)"
      ]
    },
    thalassemia: {
      title: "Thalassemia Detection",
      researcher: "Niwanthika M.A.H. (IT22570758)",
      icon: <FlaskConical className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
      description: "Binary classification system using microscopic blood images to determine thalassemia status, including silent carrier detection.",
      accuracy: ">95%",
      methods: ["CNN", "ViT", "SMOTE", "ADASYN"],
      dataset: "≥1,000 microscopic blood smear images",
      keyFeatures: [
        "Binary classification (thalassemia vs. non-thalassemia)",
        "Detection of subtle carrier states including silent carriers",
        "Morphological, texture, and color-based feature extraction",
        "Cost-effective solution for resource-limited settings"
      ]
    },
    anemia: {
      title: "Anemia Detection",
      researcher: "Udesha S.M.S. (IT22586902)",
      icon: <Droplet className="w-6 h-6" />,
      color: "from-amber-500 to-orange-600",
      borderColor: "border-amber-500",
      bgColor: "bg-amber-50",
      description: "Multi-class classification of anemia subtypes with multimodal integration of microscopic images and CBC parameters.",
      accuracy: ">95%",
      methods: ["CNN-ViT Hybrid", "XAI", "Multimodal Fusion"],
      dataset: "≥1,000 blood smear images with clinical metadata",
      keyFeatures: [
        "Binary and multi-class classification (IDA, megaloblastic, sickle cell)",
        "Integration of blood smear images with CBC parameters",
        "Explainable AI for transparent diagnostic reasoning",
        "Optimized for low-resource healthcare environments"
      ]
    },
    malaria: {
      title: "Malaria Detection",
      researcher: "Liyanahetti L.H.R.S.D (IT22592088)",
      icon: <Scan className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
      borderColor: "border-emerald-500",
      bgColor: "bg-emerald-50",
      description: "Automated detection of malaria parasites with species classification (P. falciparum, P. vivax, P. malariae, P. ovale).",
      accuracy: ">95%",
      methods: ["CNN", "ViT", "Grad-CAM", "Transfer Learning"],
      dataset: "≥1,000 thin blood smear images",
      keyFeatures: [
        "Binary classification (parasitized vs. uninfected)",
        "Multi-species Plasmodium detection",
        "Real-time inference (<30 seconds per sample)",
        "Cross-institutional validation across multiple hospitals"
      ]
    }
  };

  const researchMetrics = [
    { value: ">95%", label: "Diagnostic Accuracy", icon: <Target />, desc: "Across all disease modules" },
    { value: "<5s", label: "Inference Time", icon: <Zap />, desc: "Real-time clinical deployment" },
    { value: "4", label: "Blood Disorders", icon: <Microscope />, desc: "Unified diagnostic platform" },
    { value: "3+", label: "Hospital Sites", icon: <Globe />, desc: "Cross-institutional validation" }
  ];

  const technicalStack = [
    { category: "Deep Learning", items: ["TensorFlow", "PyTorch", "CNN", "Vision Transformers"] },
    { category: "Explainable AI", items: ["Grad-CAM", "SHAP", "Captum", "Attention Maps"] },
    { category: "Image Processing", items: ["OpenCV", "CLAHE", "Segmentation", "Augmentation"] },
    { category: "Deployment", items: ["React", "Python", "Docker", "GCP"] }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">HemoAI</h1>
                <p className="text-xs text-slate-600">Project 25-26J-344</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#overview" className="text-slate-700 hover:text-slate-900 transition">Overview</a>
              <a href="#modules" className="text-slate-700 hover:text-slate-900 transition">Modules</a>
              <a href="#methodology" className="text-slate-700 hover:text-slate-900 transition">Methodology</a>
              <a href="#team" className="text-slate-700 hover:text-slate-900 transition">Team</a>
              <button ><a href="/login" className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition">
                Access System
              </a></button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Institution Badge 
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-slate-300 bg-white shadow-sm">
              <Award className="w-4 h-4 text-slate-600" />
              <span className="text-xs font-medium text-slate-700">
                Sri Lanka Institute of Information Technology • Department of IT
              </span>
            </div>*/}

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
              HemoAI
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-4xl mx-auto leading-relaxed">
              Machine Learning Based Microscopic Image Analysis for Automated Detection
              and Classification of Blood Disorders
            </p>
            <p className="text-sm text-slate-500 mb-12">
              Research Project ID: 25-26J-344 | Sri Lanka Institute of Information Technology | Department of IT
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <a href="/login"> <button className="group px-8 py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition flex items-center justify-center gap-2">
                Start Diagnostic Analysis
              </button></a>

            </div>


            {/* Research Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {researchMetrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 text-left hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                    {React.cloneElement(metric.icon, { className: "w-6 h-6 text-slate-700" })}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</div>
                  <div className="text-sm font-medium text-slate-700 mb-1">{metric.label}</div>
                  <div className="text-xs text-slate-500">{metric.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disease Modules Section */}
      <section id="modules" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Diagnostic Modules</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Four specialized AI modules for comprehensive hematological disorder detection,
              each developed with state-of-the-art deep learning architectures
            </p>
          </div>

          {/* Module Selection Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {(Object.keys(diseaseModules) as DiseaseKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveDisease(key)}
                className={`px-6 py-3 rounded-xl font-medium transition flex items-center gap-2 ${activeDisease === key
                    ? `bg-gradient-to-r ${diseaseModules[key].color} text-white shadow-lg`
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
              >
                {diseaseModules[key].icon}
                {diseaseModules[key].title}
              </button>
            ))}
          </div>

          {/* Active Module Details */}
          <motion.div
            key={activeDisease}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${diseaseModules[activeDisease].bgColor} border ${diseaseModules[activeDisease].borderColor} mb-6`}>
                  {diseaseModules[activeDisease].icon}
                  <span className="font-medium text-sm">{diseaseModules[activeDisease].title}</span>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {diseaseModules[activeDisease].title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {diseaseModules[activeDisease].description}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg">
                    <div className="text-xs text-slate-500 mb-1">Target Accuracy</div>
                    <div className="text-2xl font-bold text-slate-900">{diseaseModules[activeDisease].accuracy}</div>
                  </div>
                  <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg flex-1">
                    <div className="text-xs text-slate-500 mb-1">Dataset Size</div>
                    <div className="text-sm font-semibold text-slate-900">{diseaseModules[activeDisease].dataset}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Lead Researcher</h4>
                  <p className="text-slate-600">{diseaseModules[activeDisease].researcher}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Methodologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {diseaseModules[activeDisease].methods.map((method, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-700">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-4">Key Features</h4>
                <div className="space-y-3">
                  {diseaseModules[activeDisease].keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700 text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl">
                  <h4 className="text-sm font-semibold text-slate-700 mb-4">Clinical Validation</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Sensitivity</span>
                      <span className="font-semibold text-slate-900">≥95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Specificity</span>
                      <span className="font-semibold text-slate-900">≥93%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Inference Time</span>
                      <span className="font-semibold text-slate-900">&lt;5 seconds</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Validation Sites</span>
                      <span className="font-semibold text-slate-900">≥3 hospitals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Research Methodology</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Agile SCRUM-based development with 12-month timeline, focusing on data collection,
              model development, clinical validation, and deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                phase: "Phase 1",
                title: "Data Collection",
                duration: "Months 1-3",
                icon: <FlaskConical />,
                items: ["Sri Lankan hospital partnerships", "Expert hematologist annotation", "Multi-site data diversity", "Ethical approval & PDPA compliance"]
              },
              {
                phase: "Phase 2",
                title: "Model Development",
                duration: "Months 4-8",
                icon: <Brain />,
                items: ["CNN-ViT hybrid architecture", "Transfer learning & fine-tuning", "Data augmentation strategies", "Hyperparameter optimization"]
              },
              {
                phase: "Phase 3",
                title: "XAI Integration",
                duration: "Months 6-10",
                icon: <Target />,
                items: ["Grad-CAM visualization", "SHAP value analysis", "Attention mechanism mapping", "Clinical interpretability testing"]
              },
              {
                phase: "Phase 4",
                title: "Deployment",
                duration: "Months 9-12",
                icon: <Zap />,
                items: ["Web platform development", "Cross-institutional validation", "Performance optimization", "Documentation & training"]
              }
            ].map((phase, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                  {React.cloneElement(phase.icon, { className: "w-6 h-6 text-slate-700" })}
                </div>
                <div className="text-xs font-semibold text-slate-500 mb-1">{phase.phase}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{phase.duration}</p>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Stack */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Technical Architecture</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {technicalStack.map((stack, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-semibold text-slate-700 mb-4">{stack.category}</h4>
                  <div className="space-y-2">
                    {stack.items.map((item, i) => (
                      <div key={i} className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Research Impact</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Addressing critical diagnostic gaps in Sri Lankan healthcare through accessible,
                accurate, and explainable AI-based blood disorder screening.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "First large-scale annotated blood disorder dataset in Sri Lanka",
                  "50% reduction in diagnostic time compared to manual microscopy",
                  "Scalable deployment architecture for rural and urban hospitals",
                  "Compliance with Sri Lanka PDPA (2022) and MoH guidelines",
                  "Multi-disease unified framework reducing resource requirements",
                  "Integration with telemedicine and hospital information systems"
                ].map((impact, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">{impact}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Proposal
                </button>
                <button className="px-6 py-3 border-2 border-slate-300 rounded-xl font-medium hover:border-slate-400 transition flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  View Publications
                </button>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Clinical Validation Sites</h3>
              <div className="space-y-4 mb-8">
                {[
                  "National Cancer Institute, Maharagama",
                  "Teaching Hospital, Kandy",
                  "Karapitiya Teaching Hospital, Galle",
                  "Colombo South Teaching Hospital",
                  "Anti Malaria/Filaria Campaign, Kurunegala"
                ].map((site, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                    <span className="text-slate-700">{site}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl">
                <div className="text-sm text-slate-600 mb-2">Supervisor</div>
                <div className="font-semibold text-slate-900">Ms. Dinithi Pandithage</div>
                <div className="text-sm text-slate-600">Lecturer</div>
                <div className="text-sm text-slate-600">Computer Systems Engineering-Faculty of Computing  </div>
                <div className="text-sm text-slate-600 mb-2">SLIIT</div>

                <div className="font-semibold text-slate-900">Ms. Rangi Liyanage</div>
                <div className="text-sm text-slate-600">Lecturer</div>
                <div className="text-sm text-slate-600">Computer Systems Engineering-Faculty of Computing  </div>
                <div className="text-sm text-slate-600 mb-2">SLIIT</div>

                <div className="text-sm text-slate-600 mb-2">External Supervisor</div>
                <div className="font-semibold text-slate-900">Dr. Subhash Jayasinghe</div>
                <div className="text-sm text-slate-600">M.B.B.S (Sri Lanka), SLMC Reg No-18906</div>
                <div className="text-sm text-slate-600">Medical Officer, TH Kegalle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section id="team" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Research Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              B.Sc. (Hons) in Information Technology • Department of IT • SLIIT
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Bandara L.P.B.R.",
                id: "IT22564122",
                focus: "Leukemia Detection",
                icon: <Activity />,
                gradient: "from-rose-500 to-red-600"
              },
              {
                name: "Niwanthika M.A.H.",
                id: "IT22570758",
                focus: "Thalassemia Detection",
                icon: <FlaskConical />,
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                name: "Udesha S.M.S.",
                id: "IT22586902",
                focus: "Anemia Detection",
                icon: <Droplet />,
                gradient: "from-amber-500 to-orange-600"
              },
              {
                name: "Liyanahetti L.H.R.S.D",
                id: "IT22592088",
                focus: "Malaria Detection",
                icon: <Scan />,
                gradient: "from-emerald-500 to-green-600"
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                  {React.cloneElement(member.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm text-slate-600 mb-3">{member.id}</p>
                <div className="pt-3 border-t border-slate-200">
                  <p className="text-sm font-medium text-slate-700">{member.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl font-bold mb-4">Academic & Clinical Access</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            This system is intended for academic research and professional medical use only.
            Authorized access is required for diagnostic functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" ><button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-medium hover:bg-slate-100 transition">
              Request Access
            </button></a>
            <a href="mailto:it22564122@my.sliit.lk">
              <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-medium hover:bg-white/10 transition">
                Contact Research Team
              </button>
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start w-full gap-8">
            {/* Left Aligned - HemoAI */}
            <div className="md:max-w-[40%]">
              <h4 className="font-bold text-slate-900 mb-4">HemoAI</h4>
              <p className="text-sm text-slate-600">
                Machine Learning Based Microscopic Image Analysis Platform
              </p>
            </div>

            {/* Right Aligned - Institution */}
            <div className="md:text-right md:ml-auto">
              <h4 className="font-semibold text-slate-900 mb-4">Institution</h4>
              <p className="text-sm text-slate-600">
                Sri Lanka Institute of Information Technology<br />
                Department of Information Technology<br />
                Project ID: 25-26J-344
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">
              © 2025 HemoAI Research Project. All rights reserved.
            </p>
            <p className="text-sm text-slate-600">
              IEEE Standards Compliant • PDPA 2022 Compliant
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HematoScanAI;