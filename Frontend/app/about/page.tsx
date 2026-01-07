'use client';

import { useState } from 'react';
import {
  BookOpen,
  Target,
  GitBranch,
  Brain,
  Database,
  Users,
  Microscope,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Eye,
  Settings,
  Activity,
  FlaskConical,
  Droplet,
  Scan,
  Clock,
  Shield,
  Globe,
  Sparkles,
  FileText,
  Zap
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type Tab = 'overview' | 'objectives' | 'methodology' | 'diseases';

export default function AboutProject() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const diseases = [
    {
      name: 'Leukemia',
      description: 'CNN-ViT hybrid model for automated detection and classification of ALL/AML subtypes with explainable AI integration',
      researcher: 'Bandara L.P.B.R.',
      id: 'IT22564122',
      icon: Activity,
      color: 'from-rose-500 to-red-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-500',
      accuracy: '>95%',
      dataset: '1,000+'
    },
    {
      name: 'Thalassemia',
      description: 'Binary classification system using blood smear morphology for thalassemia vs. non-thalassemia detection',
      researcher: 'Niwanthika M.A.H.',
      id: 'IT22570758',
      icon: FlaskConical,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      accuracy: '>95%',
      dataset: '1,000+'
    },
    {
      name: 'Anemia',
      description: 'Multi-class classification with multimodal integration of microscopic images and CBC parameters',
      researcher: 'Udesha S.M.S.',
      id: 'IT22586902',
      icon: Droplet,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-500',
      accuracy: '>95%',
      dataset: '1,000+'
    },
    {
      name: 'Malaria',
      description: 'Automated parasitized cell detection with multi-species Plasmodium classification capability',
      researcher: 'Liyanahetti L.H.R.S.D',
      id: 'IT22592088',
      icon: Scan,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-500',
      accuracy: '>95%',
      dataset: '1,000+'
    },
  ];

  const teamMembers = [
    { name: 'Bandara L.P.B.R.', id: 'IT22564122', focus: 'Leukemia Detection', color: 'from-rose-500 to-red-600' },
    { name: 'Niwanthika M.A.H.', id: 'IT22570758', focus: 'Thalassemia Detection', color: 'from-blue-500 to-indigo-600' },
    { name: 'Udesha S.M.S.', id: 'IT22586902', focus: 'Anemia Detection', color: 'from-amber-500 to-orange-600' },
    { name: 'Liyanahetti L.H.R.S.D.', id: 'IT22592088', focus: 'Malaria Detection', color: 'from-emerald-500 to-green-600' },
  ];

  const keyFeatures = [
    { 
      icon: Brain, 
      title: 'Deep Learning', 
      desc: 'Hybrid CNN-ViT architectures with transfer learning',
      detail: 'State-of-the-art model architecture'
    },
    { 
      icon: Eye, 
      title: 'Explainable AI', 
      desc: 'Grad-CAM, SHAP & attention visualization',
      detail: 'Clinical transparency and trust'
    },
    { 
      icon: Target, 
      title: 'High Accuracy', 
      desc: '≥95% diagnostic precision across modules',
      detail: 'Clinically validated performance'
    },
    { 
      icon: Database, 
      title: 'Local Dataset', 
      desc: 'Sri Lankan population-specific training data',
      detail: 'First comprehensive local dataset'
    },
  ];

  const methodologySteps = [
    {
      phase: 'Data Acquisition & Ethics',
      icon: Database,
      timeline: 'Months 1-3',
      desc: 'Collection of anonymized blood smear images from National Cancer Institute, Teaching Hospitals (Colombo, Kandy, Galle) with ethical approval from SLIIT Research Ethics Committee and Ministry of Health. Expert annotation by ≥2 hematologists per case.',
      deliverables: ['≥1,000 annotated images per disease', 'Ethical clearance obtained', 'Multi-hospital data diversity']
    },
    {
      phase: 'Preprocessing & Augmentation',
      icon: Settings,
      timeline: 'Months 2-4',
      desc: 'Image normalization, noise reduction, CLAHE-enhanced segmentation, and comprehensive data augmentation (rotation, flipping, contrast adjustment) to improve model robustness and handle inter-laboratory staining variability.',
      deliverables: ['Standardized preprocessing pipeline', 'Augmented dataset (3x original)', 'Quality assurance protocols']
    },
    {
      phase: 'Model Development & Training',
      icon: Brain,
      timeline: 'Months 4-8',
      desc: 'Development of hybrid CNN-Vision Transformer architectures using transfer learning from ImageNet and medical imaging datasets. Ensemble methods combine local morphological features and global contextual patterns for robust classification.',
      deliverables: ['Hybrid CNN-ViT models', '≥95% sensitivity, ≥93% specificity', 'Optimized hyperparameters']
    },
    {
      phase: 'Explainability Integration',
      icon: Eye,
      timeline: 'Months 6-10',
      desc: 'Implementation of Grad-CAM heatmaps, SHAP values, and attention mechanisms to visualize diagnostically significant regions and provide clinically interpretable explanations that build trust among healthcare professionals.',
      deliverables: ['XAI visualizations integrated', '≥80% clinician satisfaction', 'Interpretability documentation']
    },
    {
      phase: 'Clinical Validation',
      icon: CheckCircle2,
      timeline: 'Months 10-12',
      desc: 'Cross-site validation across ≥3 hospitals with ≥1,000 patient cases. Performance assessment using accuracy, sensitivity, specificity, F1-score, and ROC-AUC metrics to ensure clinical reliability.',
      deliverables: ['Multi-site validation complete', '<3% accuracy variance', 'Clinical evaluation reports']
    },
    {
      phase: 'Platform Deployment',
      icon: Zap,
      timeline: 'Months 9-12',
      desc: 'Implementation of web-based interface (React + Flask/Django) optimized for <5s inference time, suitable for both urban hospitals and rural clinics with limited computational resources.',
      deliverables: ['Production-ready platform', '>99% system uptime', 'User training materials']
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          {/* Project Badge 
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">SLIIT Research Project 25-26J-344</span>
          </div>*/}

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-4xl">
            ML Based Microscopic Image Analysis for Automated Detection of Blood Disorders
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
            An integrated diagnostic system leveraging advanced machine learning to detect and classify
            Leukemia, Thalassemia, Anemia, and Malaria from microscopic blood smear images.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {[
              { value: '4', label: 'Blood Disorders', icon: Microscope },
              { value: '≥95%', label: 'Target Accuracy', icon: Target },
              { value: '<5s', label: 'Inference Time', icon: Clock },
              { value: '3+', label: 'Hospital Sites', icon: Globe }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <stat.icon className="w-6 h-6 mb-2 text-slate-300" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 mb-2">{feature.desc}</p>
                <p className="text-xs text-slate-500">{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-20 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'objectives', label: 'Objectives', icon: Target },
              { id: 'methodology', label: 'Methodology', icon: GitBranch },
              { id: 'diseases', label: 'Disease Modules', icon: Microscope },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Overview</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  This undergraduate research project at the <strong>Sri Lanka Institute of Information
                  Technology (SLIIT)</strong> addresses critical diagnostic challenges in hematology through
                  the development of an automated, ML-based system for detecting major blood disorders using
                  microscopic blood smear images.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Conventional diagnosis relies heavily on manual microscopic examination by trained
                  hematologists—a process that is time-consuming, subjective, and prone to inter-observer
                  variability. These limitations are particularly acute in resource-constrained healthcare
                  settings across Sri Lanka, where access to specialized expertise is limited.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Our proposed solution employs state-of-the-art <strong>Convolutional Neural Networks
                  (CNNs)</strong> and <strong>Vision Transformers (ViTs)</strong> to achieve diagnostic
                  accuracy exceeding 95%, while integrating Explainable AI techniques such as{' '}
                  <strong>Grad-CAM</strong> and <strong>SHAP</strong> to enhance transparency and build
                  clinical trust among healthcare professionals.
                </p>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Research Problem</h3>
                <ul className="space-y-3">
                  {[
                    'Manual diagnosis is slow and subjective',
                    'Limited specialist access in rural areas',
                    'High inter-observer diagnostic variability',
                    'Costly and time-consuming processes',
                    'Delayed treatment initiation'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Solution</h3>
                <ul className="space-y-3">
                  {[
                    'Automated AI-powered diagnosis (<5s)',
                    'Web-based accessible platform',
                    'Explainable and trustworthy results',
                    'Multi-disease unified framework',
                    'Clinical validation across hospitals'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Expected Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: '50% Faster', desc: 'Reduction in diagnostic time vs manual methods' },
                  { title: 'Accessible', desc: 'Deployment in rural healthcare facilities' },
                  { title: 'Reliable', desc: 'Consistent accuracy across institutions' }
                ].map((impact, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                    <div className="text-3xl font-bold mb-2">{impact.title}</div>
                    <div className="text-sm text-slate-300">{impact.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* OBJECTIVES */}
        {activeTab === 'objectives' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Main Objective */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8 shadow-lg">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Main Objective</span>
              </div>
              <p className="text-lg leading-relaxed text-slate-100">
                To design, implement, and validate an intelligent and explainable ML-based diagnostic
                system capable of detecting and classifying multiple blood disorders (Leukemia, Thalassemia,
                Anemia, Malaria) from microscopic blood smear images with <strong>≥95% accuracy</strong>, achieving
                real-time inference <strong>(&lt;5 seconds)</strong>, and providing clinically interpretable outputs suitable
                for deployment in resource-constrained Sri Lankan healthcare settings.
              </p>
            </div>

            {/* Specific Objectives */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Specific Objectives</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Data Acquisition & Preparation (Months 1-3)',
                    desc: 'Collect and annotate ≥1,000 blood smear images from Sri Lankan hospitals (National Cancer Institute, Teaching Hospitals) with expert validation by ≥2 hematologists per case',
                    icon: Database
                  },
                  {
                    title: 'Deep Learning Model Development (Months 4-8)',
                    desc: 'Develop hybrid CNN-ViT architectures achieving ≥95% sensitivity and ≥93% specificity for binary and multi-class blood disorder classification',
                    icon: Brain
                  },
                  {
                    title: 'Explainable AI Integration (Months 6-10)',
                    desc: 'Implement Grad-CAM, SHAP, and attention mechanisms ensuring ≥80% clinician satisfaction with interpretability and diagnostic transparency',
                    icon: Eye
                  },
                  {
                    title: 'Multi-Disease Diagnostic Framework',
                    desc: 'Create the first integrated diagnostic system in Sri Lanka capable of detecting multiple blood disorders concurrently with unified preprocessing and analysis',
                    icon: Sparkles
                  },
                  {
                    title: 'Clinical Web Platform (Months 9-11)',
                    desc: 'Develop responsive web interface with <5s inference time, optimized for both urban hospitals and rural clinics with limited resources',
                    icon: Globe
                  },
                  {
                    title: 'Cross-Institutional Validation (Months 10-12)',
                    desc: 'Validate system across ≥3 hospitals with ≥1,000 patient cases, ensuring <3% accuracy variance across different imaging equipment and protocols',
                    icon: CheckCircle2
                  },
                  {
                    title: 'System Optimization & Deployment (Month 12)',
                    desc: 'Ensure >99% system uptime, PDPA 2022 compliance, and comprehensive documentation for clinical deployment readiness',
                    icon: Shield
                  },
                  {
                    title: 'Knowledge Dissemination & Impact',
                    desc: 'Publish ≥1 peer-reviewed paper, present at international conferences, and demonstrate ≥50% reduction in diagnostic time vs manual microscopy',
                    icon: TrendingUp
                  },
                ].map((obj, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                        {i + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <obj.icon className="w-5 h-5 text-slate-600" />
                        {obj.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{obj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* METHODOLOGY */}
        {activeTab === 'methodology' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Research Methodology</h2>
              <p className="text-slate-600 mb-8">
                Agile SCRUM-based development over 12 months with iterative sprints and continuous clinical feedback
              </p>

              <div className="space-y-6">
                {methodologySteps.map((step, i) => (
                  <div key={i} className="relative">
                    {i < methodologySteps.length - 1 && (
                      <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-slate-200"></div>
                    )}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center justify-center font-bold text-lg shadow-lg relative z-10">
                          {i + 1}
                        </div>
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-3 mb-3">
                            <step.icon className="w-6 h-6 text-slate-700" />
                            <div>
                              <h3 className="text-xl font-bold text-slate-900">{step.phase}</h3>
                              <p className="text-sm text-slate-500">{step.timeline}</p>
                            </div>
                          </div>
                          <p className="text-slate-700 leading-relaxed mb-4">{step.desc}</p>
                          <div className="pt-4 border-t border-slate-200">
                            <h4 className="text-sm font-semibold text-slate-700 mb-2">Deliverables:</h4>
                            <ul className="space-y-2">
                              {step.deliverables.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Stack */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Technical Stack & Infrastructure</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    title: 'Deep Learning', 
                    items: ['TensorFlow', 'PyTorch', 'CNN', 'Vision Transformers'],
                    icon: Brain
                  },
                  { 
                    title: 'Development', 
                    items: ['React', 'Flask/Django', 'Docker', 'GCP'],
                    icon: Settings
                  },
                  { 
                    title: 'Validation', 
                    items: ['3+ hospitals', '1,000+ cases', '12 months', '6 sprints'],
                    icon: CheckCircle2
                  },
                ].map((tech, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                    <tech.icon className="w-8 h-8 mb-4 text-white" />
                    <h4 className="font-bold mb-3">{tech.title}</h4>
                    <ul className="space-y-2">
                      {tech.items.map((item, i) => (
                        <li key={i} className="text-sm text-slate-200 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* DISEASES */}
        {activeTab === 'diseases' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Disease-Specific Modules</h2>
              <p className="text-lg text-slate-600">
                Four specialized detection modules, each optimized for specific blood disorders while 
                sharing a common technical foundation and unified preprocessing pipeline.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {diseases.map((disease, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${disease.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <disease.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{disease.name}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{disease.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`${disease.bgColor} border ${disease.borderColor} rounded-xl p-4`}>
                      <div className="text-xs text-slate-600 mb-1">Target Accuracy</div>
                      <div className="text-2xl font-bold text-slate-900">{disease.accuracy}</div>
                    </div>
                    <div className={`${disease.bgColor} border ${disease.borderColor} rounded-xl p-4`}>
                      <div className="text-xs text-slate-600 mb-1">Dataset Size</div>
                      <div className="text-2xl font-bold text-slate-900">{disease.dataset}</div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <div className="text-sm text-slate-600 mb-1">Lead Researcher</div>
                    <div className="font-bold text-slate-900">{disease.researcher}</div>
                    <div className="text-sm text-slate-500">{disease.id}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Research Team */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Research Team</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-4`}>
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                    <p className="text-sm text-slate-300 mb-2">{member.id}</p>
                    <p className="text-sm text-slate-200">{member.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Framework Benefits */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Unified Framework Benefits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    title: 'Shared Infrastructure', 
                    desc: 'Common preprocessing, feature extraction, and deployment pipelines reduce development time',
                    icon: Settings
                  },
                  { 
                    title: 'Consistent Quality', 
                    desc: 'Standardized evaluation metrics and validation protocols across all disorders',
                    icon: Target
                  },
                  { 
                    title: 'Resource Efficiency', 
                    desc: 'Single platform serves multiple diagnostic needs, reducing hospital infrastructure costs',
                    icon: TrendingUp
                  },
                ].map((benefit, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                    <benefit.icon className="w-8 h-8 text-blue-600 mb-4" />
                    <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}