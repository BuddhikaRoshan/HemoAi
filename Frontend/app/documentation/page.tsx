'use client';

import { useState } from 'react';
import {
  FileText,
  Download,
  Eye,
  BookOpen,
  FileCode,
  Video,
  Image as ImageIcon,
  Presentation,
  Database,
  ClipboardList,
  GitBranch,
  Award,
  Users,
  Search,
  Filter,
  ExternalLink,
  ChevronRight,
  Calendar,
  Tag,
  Bookmark,
  Share2,
  FileSpreadsheet,
  FilePieChart,
  BookMarked,
  GraduationCap,
  Microscope,
  Settings,
  Shield,
  Globe,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

/**
 * HematoScan AI - Documentation & Resources Page
 * Comprehensive repository of all research documents and resources
 */

type CategoryType = 'all' | 'proposals' | 'technical' | 'presentations' | 'datasets' | 'publications' | 'legal' | 'guides';

interface Document {
  id: string;
  title: string;
  description: string;
  category: CategoryType;
  subcategory?: string;
  type: 'pdf' | 'docx' | 'pptx' | 'xlsx' | 'video' | 'link' | 'zip';
  size?: string;
  date: string;
  author?: string;
  tags: string[];
  downloadUrl?: string;
  viewUrl?: string;
  icon: any;
  featured?: boolean;
}

export default function DocumentationPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Documents', icon: BookOpen, count: 28 },
    { id: 'proposals', label: 'Research Proposals', icon: FileText, count: 4 },
    { id: 'technical', label: 'Technical Documentation', icon: FileCode, count: 6 },
    { id: 'presentations', label: 'Presentations', icon: Presentation, count: 5 },
    { id: 'datasets', label: 'Datasets & Data', icon: Database, count: 4 },
    { id: 'publications', label: 'Publications', icon: Award, count: 3 },
    { id: 'legal', label: 'Legal & Compliance', icon: Shield, count: 4 },
    { id: 'guides', label: 'User Guides', icon: BookMarked, count: 2 },
  ];

  const documents: Document[] = [
    // Research Proposals
    {
      id: 'prop-leukemia',
      title: 'Leukemia Detection System - Project Proposal',
      description: 'Comprehensive research proposal for CNN-ViT hybrid model development for automated leukemia detection and classification.',
      category: 'proposals',
      subcategory: 'Individual Component',
      type: 'pdf',
      size: '2.4 MB',
      date: '2024-09-15',
      author: 'Bandara L.P.B.R.',
      tags: ['Leukemia', 'CNN', 'Vision Transformer', 'ALL/AML'],
      downloadUrl: '/documents/proposals/25-26J-344_Leukemia_Proposal.pdf',
      viewUrl: '/documents/proposals/25-26J-344_Leukemia_Proposal.pdf',
      icon: FileText,
      featured: true
    },
    {
      id: 'prop-thalassemia',
      title: 'Thalassemia Screening System - Project Proposal',
      description: 'Binary classification framework for automated thalassemia screening using blood smear morphology analysis.',
      category: 'proposals',
      subcategory: 'Individual Component',
      type: 'pdf',
      size: '2.1 MB',
      date: '2024-09-15',
      author: 'Niwanthika M.A.H.',
      tags: ['Thalassemia', 'Binary Classification', 'RBC Morphology'],
      downloadUrl: '/documents/proposals/25-26J-344_Thalassemia_Proposal.pdf',
      viewUrl: '/documents/proposals/25-26J-344_Thalassemia_Proposal.pdf',
      icon: FileText,
      featured: true
    },
    {
      id: 'prop-anemia',
      title: 'Anemia Classification System - Project Proposal',
      description: 'Multi-class classification system with multimodal integration for automated anemia subtype detection.',
      category: 'proposals',
      subcategory: 'Individual Component',
      type: 'pdf',
      size: '2.3 MB',
      date: '2024-09-15',
      author: 'Udesha S.M.S.',
      tags: ['Anemia', 'Multi-class', 'CBC Integration', 'IDA'],
      downloadUrl: '/documents/proposals/25-26J-344_Anemia_Proposal.pdf',
      viewUrl: '/documents/proposals/25-26J-344_Anemia_Proposal.pdf',
      icon: FileText,
      featured: true
    },
    {
      id: 'prop-malaria',
      title: 'Malaria Detection System - Project Proposal',
      description: 'Real-time parasite detection with multi-species Plasmodium classification using deep learning.',
      category: 'proposals',
      subcategory: 'Individual Component',
      type: 'pdf',
      size: '2.2 MB',
      date: '2024-09-15',
      author: 'Liyanahetti L.H.R.S.D',
      tags: ['Malaria', 'Parasite Detection', 'Species Classification'],
      downloadUrl: '/documents/proposals/25-26J-344_Malaria_Proposal.pdf',
      viewUrl: '/documents/proposals/25-26J-344_Malaria_Proposal.pdf',
      icon: FileText,
      featured: true
    },

    // Technical Documentation
    {
      id: 'tech-architecture',
      title: 'System Architecture Document',
      description: 'Comprehensive technical architecture including CNN-ViT hybrid models, deployment infrastructure, and system design.',
      category: 'technical',
      subcategory: 'System Design',
      type: 'pdf',
      size: '3.8 MB',
      date: '2024-10-20',
      author: 'Research Team',
      tags: ['Architecture', 'System Design', 'CNN-ViT', 'Deployment'],
      downloadUrl: '/documents/technical/HematoScan_Architecture.pdf',
      icon: Settings,
      featured: true
    },
    {
      id: 'tech-api',
      title: 'API Documentation',
      description: 'Complete API reference for all diagnostic endpoints, authentication, and integration guidelines.',
      category: 'technical',
      subcategory: 'API Reference',
      type: 'pdf',
      size: '1.5 MB',
      date: '2024-11-05',
      author: 'Development Team',
      tags: ['API', 'REST', 'Integration', 'Endpoints'],
      downloadUrl: '/documents/technical/API_Documentation.pdf',
      viewUrl: '/api-docs',
      icon: FileCode
    },
    {
      id: 'tech-model',
      title: 'ML Model Specifications',
      description: 'Detailed specifications of all machine learning models including hyperparameters, training procedures, and validation metrics.',
      category: 'technical',
      subcategory: 'Model Documentation',
      type: 'pdf',
      size: '2.7 MB',
      date: '2024-11-10',
      author: 'ML Research Team',
      tags: ['Machine Learning', 'CNN', 'ViT', 'Hyperparameters'],
      downloadUrl: '/documents/technical/Model_Specifications.pdf',
      icon: FileCode
    },
    {
      id: 'tech-database',
      title: 'Database Schema & Design',
      description: 'Database architecture, schema diagrams, and data management protocols for patient records and analysis results.',
      category: 'technical',
      subcategory: 'Database',
      type: 'pdf',
      size: '1.2 MB',
      date: '2024-10-15',
      author: 'Database Team',
      tags: ['Database', 'Schema', 'MongoDB', 'Firebase'],
      downloadUrl: '/documents/technical/Database_Schema.pdf',
      icon: Database
    },
    {
      id: 'tech-deployment',
      title: 'Deployment Guide',
      description: 'Step-by-step deployment instructions for Docker containerization, cloud deployment, and environment setup.',
      category: 'technical',
      subcategory: 'DevOps',
      type: 'pdf',
      size: '1.8 MB',
      date: '2024-11-15',
      author: 'DevOps Team',
      tags: ['Deployment', 'Docker', 'GCP', 'CI/CD'],
      downloadUrl: '/documents/technical/Deployment_Guide.pdf',
      icon: GitBranch
    },
    {
      id: 'tech-security',
      title: 'Security & Privacy Documentation',
      description: 'Security protocols, encryption standards, PDPA compliance measures, and data protection guidelines.',
      category: 'technical',
      subcategory: 'Security',
      type: 'pdf',
      size: '2.1 MB',
      date: '2024-10-25',
      author: 'Security Team',
      tags: ['Security', 'PDPA', 'Encryption', 'Privacy'],
      downloadUrl: '/documents/technical/Security_Privacy.pdf',
      icon: Shield
    },

    // Presentations
    {
      id: 'pres-proposal',
      title: 'Project Proposal Presentation',
      description: 'Initial project proposal presentation covering all four blood disorder detection modules and research objectives.',
      category: 'presentations',
      subcategory: 'Milestone Presentations',
      type: 'pptx',
      size: '15.3 MB',
      date: '2024-09-20',
      author: 'Research Team',
      tags: ['Proposal', 'Overview', 'Objectives'],
      downloadUrl: '/documents/presentations/Proposal_Presentation.pptx',
      icon: Presentation,
      featured: true
    },
    {
      id: 'pres-progress1',
      title: 'Progress Presentation 1 - Data Collection',
      description: 'First progress review covering dataset collection, annotation process, and preliminary results.',
      category: 'presentations',
      subcategory: 'Milestone Presentations',
      type: 'pptx',
      size: '12.8 MB',
      date: '2024-10-15',
      author: 'Research Team',
      tags: ['Progress', 'Dataset', 'Annotation'],
      downloadUrl: '/documents/presentations/Progress_1_Presentation.pptx',
      icon: Presentation
    },
    {
      id: 'pres-progress2',
      title: 'Progress Presentation 2 - Model Development',
      description: 'Second progress review presenting model architecture, training results, and accuracy metrics.',
      category: 'presentations',
      subcategory: 'Milestone Presentations',
      type: 'pptx',
      size: '18.2 MB',
      date: '2024-11-10',
      author: 'Research Team',
      tags: ['Progress', 'Models', 'Training', 'Results'],
      downloadUrl: '/documents/presentations/Progress_2_Presentation.pptx',
      icon: Presentation
    },
    {
      id: 'pres-final',
      title: 'Final Presentation',
      description: 'Comprehensive final presentation with complete system demonstration, validation results, and future work.',
      category: 'presentations',
      subcategory: 'Milestone Presentations',
      type: 'pptx',
      size: '25.6 MB',
      date: '2025-02-15',
      author: 'Research Team',
      tags: ['Final', 'Demo', 'Results', 'Conclusions'],
      downloadUrl: '/documents/presentations/Final_Presentation.pptx',
      icon: Presentation
    },
    {
      id: 'pres-poster',
      title: 'Research Poster',
      description: 'Academic research poster summarizing methodology, results, and clinical impact for conferences.',
      category: 'presentations',
      subcategory: 'Conference Materials',
      type: 'pdf',
      size: '8.5 MB',
      date: '2025-01-20',
      author: 'Research Team',
      tags: ['Poster', 'Conference', 'Summary'],
      downloadUrl: '/documents/presentations/Research_Poster.pdf',
      icon: ImageIcon
    },

    // Datasets & Data
    {
      id: 'data-leukemia',
      title: 'Leukemia Dataset Documentation',
      description: 'Dataset specifications, collection methodology, annotation guidelines, and statistical analysis for leukemia images.',
      category: 'datasets',
      subcategory: 'Dataset Documentation',
      type: 'pdf',
      size: '1.8 MB',
      date: '2024-10-30',
      author: 'Bandara L.P.B.R.',
      tags: ['Dataset', 'Leukemia', 'Annotation', 'Statistics'],
      downloadUrl: '/documents/datasets/Leukemia_Dataset_Doc.pdf',
      icon: Database
    },
    {
      id: 'data-thalassemia',
      title: 'Thalassemia Dataset Documentation',
      description: 'Comprehensive documentation of thalassemia dataset including carrier detection samples and morphology analysis.',
      category: 'datasets',
      subcategory: 'Dataset Documentation',
      type: 'pdf',
      size: '1.6 MB',
      date: '2024-10-30',
      author: 'Niwanthika M.A.H.',
      tags: ['Dataset', 'Thalassemia', 'RBC', 'Morphology'],
      downloadUrl: '/documents/datasets/Thalassemia_Dataset_Doc.pdf',
      icon: Database
    },
    {
      id: 'data-anemia',
      title: 'Anemia Dataset Documentation',
      description: 'Multi-class anemia dataset documentation with CBC integration and subtype classification details.',
      category: 'datasets',
      subcategory: 'Dataset Documentation',
      type: 'pdf',
      size: '2.1 MB',
      date: '2024-10-30',
      author: 'Udesha S.M.S.',
      tags: ['Dataset', 'Anemia', 'CBC', 'Multi-class'],
      downloadUrl: '/documents/datasets/Anemia_Dataset_Doc.pdf',
      icon: Database
    },
    {
      id: 'data-malaria',
      title: 'Malaria Dataset Documentation',
      description: 'Parasitized cell dataset documentation including species identification and parasitemia quantification.',
      category: 'datasets',
      subcategory: 'Dataset Documentation',
      type: 'pdf',
      size: '1.9 MB',
      date: '2024-10-30',
      author: 'Liyanahetti L.H.R.S.D',
      tags: ['Dataset', 'Malaria', 'Parasite', 'Species'],
      downloadUrl: '/documents/datasets/Malaria_Dataset_Doc.pdf',
      icon: Database
    },

    // Publications
    {
      id: 'pub-ieee',
      title: 'IEEE Conference Paper',
      description: 'Peer-reviewed paper submitted to IEEE conference covering complete research methodology and results.',
      category: 'publications',
      subcategory: 'Conference Papers',
      type: 'pdf',
      size: '1.2 MB',
      date: '2025-01-10',
      author: 'Research Team',
      tags: ['IEEE', 'Conference', 'Peer-reviewed'],
      downloadUrl: '/documents/publications/IEEE_Conference_Paper.pdf',
      viewUrl: '/documents/publications/IEEE_Conference_Paper.pdf',
      icon: Award,
      featured: true
    },
    {
      id: 'pub-journal',
      title: 'Journal Article Draft',
      description: 'Extended journal article draft with comprehensive methodology, validation, and clinical trial results.',
      category: 'publications',
      subcategory: 'Journal Articles',
      type: 'pdf',
      size: '2.8 MB',
      date: '2025-02-01',
      author: 'Research Team',
      tags: ['Journal', 'Extended', 'Validation'],
      downloadUrl: '/documents/publications/Journal_Article_Draft.pdf',
      icon: BookOpen
    },
    {
      id: 'pub-thesis',
      title: 'Undergraduate Thesis',
      description: 'Complete undergraduate thesis document covering all aspects of the research project from inception to deployment.',
      category: 'publications',
      subcategory: 'Academic Thesis',
      type: 'pdf',
      size: '8.5 MB',
      date: '2025-02-20',
      author: 'Research Team',
      tags: ['Thesis', 'Complete', 'Academic'],
      downloadUrl: '/documents/publications/Undergraduate_Thesis.pdf',
      icon: GraduationCap,
      featured: true
    },

    // Legal & Compliance
    {
      id: 'legal-ethics',
      title: 'Ethics Approval Certificate',
      description: 'Official ethics approval from SLIIT Research Ethics Committee for human subject research and data collection.',
      category: 'legal',
      subcategory: 'Ethics',
      type: 'pdf',
      size: '450 KB',
      date: '2024-08-15',
      author: 'SLIIT Ethics Committee',
      tags: ['Ethics', 'Approval', 'Certificate'],
      downloadUrl: '/documents/legal/Ethics_Approval.pdf',
      icon: Shield,
      featured: true
    },
    {
      id: 'legal-moh',
      title: 'Ministry of Health Approval',
      description: 'Official approval from Sri Lanka Ministry of Health for data collection from government hospitals.',
      category: 'legal',
      subcategory: 'Government Approvals',
      type: 'pdf',
      size: '380 KB',
      date: '2024-08-20',
      author: 'Ministry of Health',
      tags: ['MoH', 'Approval', 'Government'],
      downloadUrl: '/documents/legal/MoH_Approval.pdf',
      icon: Shield
    },
    {
      id: 'legal-pdpa',
      title: 'PDPA Compliance Documentation',
      description: 'Comprehensive documentation demonstrating compliance with Sri Lanka Personal Data Protection Act (2022).',
      category: 'legal',
      subcategory: 'Data Protection',
      type: 'pdf',
      size: '1.5 MB',
      date: '2024-09-01',
      author: 'Legal Team',
      tags: ['PDPA', 'Privacy', 'Compliance'],
      downloadUrl: '/documents/legal/PDPA_Compliance.pdf',
      icon: Shield
    },
    {
      id: 'legal-consent',
      title: 'Patient Consent Forms',
      description: 'Standardized informed consent forms used for patient data collection across all hospital sites.',
      category: 'legal',
      subcategory: 'Consent',
      type: 'pdf',
      size: '520 KB',
      date: '2024-08-25',
      author: 'Research Team',
      tags: ['Consent', 'Forms', 'Patients'],
      downloadUrl: '/documents/legal/Consent_Forms.pdf',
      icon: ClipboardList
    },

    // User Guides
    {
      id: 'guide-user',
      title: 'User Manual',
      description: 'Complete user manual for healthcare professionals including system navigation, image upload, and result interpretation.',
      category: 'guides',
      subcategory: 'End User',
      type: 'pdf',
      size: '3.2 MB',
      date: '2024-12-01',
      author: 'Documentation Team',
      tags: ['Manual', 'User Guide', 'Instructions'],
      downloadUrl: '/documents/guides/User_Manual.pdf',
      icon: BookMarked,
      featured: true
    },
    {
      id: 'guide-admin',
      title: 'Administrator Guide',
      description: 'Technical administration guide for system setup, user management, and maintenance procedures.',
      category: 'guides',
      subcategory: 'Administrator',
      type: 'pdf',
      size: '2.4 MB',
      date: '2024-12-01',
      author: 'Technical Team',
      tags: ['Admin', 'Setup', 'Maintenance'],
      downloadUrl: '/documents/guides/Administrator_Guide.pdf',
      icon: Settings
    }
  ];

  // Filter documents
  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Get category info
  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">


          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-3xl">
            Project Documentation & Resources
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">
            Comprehensive repository of research proposals, technical documentation, presentations,
            datasets, and publications related to the HematoScan AI project.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search documents by title, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Documents', value: '28', icon: FileText },
              { label: 'Research Proposals', value: '4', icon: ClipboardList },
              { label: 'Publications', value: '3', icon: Award },
              { label: 'Last Updated', value: 'Feb 2025', icon: Calendar }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id as CategoryType)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                        activeCategory === category.id
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{category.label}</span>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        activeCategory === category.id
                          ? 'bg-white/20'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content - Documents */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {currentCategory?.label}
                </h2>
                <p className="text-slate-600">
                  {filteredDocuments.length} {filteredDocuments.length === 1 ? 'document' : 'documents'} found
                </p>
              </div>
            </div>

            {/* Featured Documents */}
            {activeCategory === 'all' && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Featured Documents</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {documents.filter(doc => doc.featured).slice(0, 4).map((doc) => {
                    const Icon = doc.icon;
                    return (
                      <div
                        key={doc.id}
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                            Featured
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">{doc.title}</h4>
                        <p className="text-sm text-slate-700 mb-4 line-clamp-2">{doc.description}</p>
                        <div className="flex items-center gap-3">
                          {doc.viewUrl && (
                            <a
                              href={doc.viewUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                            >
                              <Eye className="w-4 h-4" />
                              View
                            </a>
                          )}
                          <a
                            href={doc.downloadUrl}
                            download
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-50 transition"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* All Documents */}
            <div className="space-y-4">
              {filteredDocuments.map((doc) => {
                const Icon = doc.icon;
                return (
                  <div
                    key={doc.id}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-slate-900 mb-1">{doc.title}</h4>
                            {doc.subcategory && (
                              <span className="text-xs text-slate-500">{doc.subcategory}</span>
                            )}
                          </div>
                          {doc.featured && (
                            <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full whitespace-nowrap">
                              Featured
                            </span>
                          )}
                        </div>

                        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                          {doc.description}
                        </p>

                        {/* Metadata */}
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-slate-500">
                          {doc.author && (
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {doc.author}
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(doc.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                          {doc.size && (
                            <div className="flex items-center gap-1">
                              <FileText className="w-3 h-3" />
                              {doc.size}
                            </div>
                          )}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {doc.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                          {doc.viewUrl && (
                            <a
                              href={doc.viewUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition"
                            >
                              <Eye className="w-4 h-4" />
                              View
                            </a>
                          )}
                          <a
                            href={doc.downloadUrl}
                            download
                            className="flex items-center gap-2 px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* No Results */}
            {filteredDocuments.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">No documents found</h3>
                <p className="text-slate-600 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            For additional documentation, research data, or collaboration inquiries,
            please contact our research team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/Team"
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition flex items-center gap-2"
            >
              Contact Team
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition"
            >
              About Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}