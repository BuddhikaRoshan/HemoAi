'use client';

import { useState } from 'react';
import {
  Upload,
  Activity,
  FlaskConical,
  Droplet,
  Scan,
  Image as ImageIcon,
  FileText,
  AlertCircle,
  CheckCircle2,
  Loader2,
  X,
  Download,
  Eye,
  Brain,
  Zap,
  BarChart3,
  Target,
  Clock,
  ArrowRight,
  Info,
  Shield
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

/**
 * HematoScan AI - Demo Analysis Platform
 * Separate modules for each disorder with backend integration ready
 */

type DisorderType = 'leukemia' | 'thalassemia' | 'anemia' | 'malaria';

interface AnalysisResult {
  prediction: string;
  confidence: number;
  subtype?: string;
  details: {
    label: string;
    value: string;
  }[];
  visualizations?: {
    gradcam?: string;
    attention?: string;
  };
}

export default function DemoUploadPage() {
  const [activeModule, setActiveModule] = useState<DisorderType>('leukemia');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const modules = {
    leukemia: {
      name: 'Leukemia Detection',
      icon: Activity,
      color: 'from-rose-500 to-red-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-500',
      textColor: 'text-rose-700',
      description: 'Automated detection and classification of ALL/AML subtypes',
      apiEndpoint: '/api/analyze/leukemia', // Backend endpoint
      acceptedFormats: '.jpg, .jpeg, .png',
      maxSize: '10MB',
      requirements: [
        'Peripheral blood smear image',
        'Giemsa or Wright stain preferred',
        '100x magnification or higher',
        'Clear cell visualization',
        'Minimum resolution: 512x512'
      ],
      outputMetrics: [
        { label: 'Classification', key: 'prediction' },
        { label: 'Confidence Score', key: 'confidence' },
        { label: 'Leukemia Subtype', key: 'subtype' },
        { label: 'Blast Cell Count', key: 'blastCount' },
        { label: 'Risk Assessment', key: 'riskLevel' }
      ]
    },
    thalassemia: {
      name: 'Thalassemia Screening',
      icon: FlaskConical,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-700',
      description: 'Binary classification for thalassemia vs. non-thalassemia',
      apiEndpoint: '/api/analyze/thalassemia',
      acceptedFormats: '.jpg, .jpeg, .png',
      maxSize: '10MB',
      requirements: [
        'Peripheral blood smear image',
        'Standard staining (Giemsa/Wright)',
        '40x - 100x magnification',
        'Multiple RBCs visible',
        'Good image quality'
      ],
      outputMetrics: [
        { label: 'Screening Result', key: 'prediction' },
        { label: 'Confidence Score', key: 'confidence' },
        { label: 'Carrier Status', key: 'carrierStatus' },
        { label: 'RBC Morphology', key: 'morphology' },
        { label: 'Recommendation', key: 'recommendation' }
      ]
    },
    anemia: {
      name: 'Anemia Classification',
      icon: Droplet,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-500',
      textColor: 'text-amber-700',
      description: 'Multi-class classification of anemia subtypes',
      apiEndpoint: '/api/analyze/anemia',
      acceptedFormats: '.jpg, .jpeg, .png',
      maxSize: '10MB',
      requirements: [
        'Blood smear or CBC report image',
        'Clear RBC visualization',
        '40x - 100x magnification',
        'Standard laboratory staining',
        'CBC data (optional, for enhanced accuracy)'
      ],
      outputMetrics: [
        { label: 'Anemia Type', key: 'prediction' },
        { label: 'Confidence Score', key: 'confidence' },
        { label: 'Severity Level', key: 'severity' },
        { label: 'Hemoglobin Status', key: 'hemoglobin' },
        { label: 'Treatment Priority', key: 'priority' }
      ]
    },
    malaria: {
      name: 'Malaria Detection',
      icon: Scan,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-500',
      textColor: 'text-emerald-700',
      description: 'Parasitized cell detection with species identification',
      apiEndpoint: '/api/analyze/malaria',
      acceptedFormats: '.jpg, .jpeg, .png',
      maxSize: '10MB',
      requirements: [
        'Thin blood smear image',
        'Giemsa stain required',
        '100x magnification (oil immersion)',
        'Clear parasite visualization',
        'Multiple RBCs in field'
      ],
      outputMetrics: [
        { label: 'Detection Result', key: 'prediction' },
        { label: 'Confidence Score', key: 'confidence' },
        { label: 'Plasmodium Species', key: 'species' },
        { label: 'Parasitemia Level', key: 'parasitemia' },
        { label: 'Infection Stage', key: 'stage' }
      ]
    }
  };

  const currentModule = modules[activeModule];

  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file (JPG, PNG)');
        return;
      }

      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        return;
      }

      setSelectedFile(file);
      setError(null);
      setAnalysisResult(null);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const event = {
        target: { files: [file] }
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      handleFileSelect(event);
    }
  };

  // Clear selected file
  const clearFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setAnalysisResult(null);
    setError(null);
  };

  // Analyze image
  const analyzeImage = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      // Prepare form data
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('disorder_type', activeModule);

      // Call backend API
      const response = await fetch(currentModule.apiEndpoint, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Analysis failed. Please try again.');
      }

      const result = await response.json();
      setAnalysisResult(result);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Analysis failed. Please try again.');
      
      // Demo mode: Show mock results if API not available
      if (process.env.NODE_ENV === 'development') {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock result for demo
        setAnalysisResult({
          prediction: activeModule === 'leukemia' ? 'Acute Lymphoblastic Leukemia (ALL)' :
                     activeModule === 'thalassemia' ? 'Thalassemia Detected' :
                     activeModule === 'anemia' ? 'Iron Deficiency Anemia' :
                     'Plasmodium falciparum',
          confidence: 96.8,
          subtype: activeModule === 'leukemia' ? 'L1 Subtype' : undefined,
          details: [
            { label: currentModule.outputMetrics[0].label, value: 'Positive' },
            { label: currentModule.outputMetrics[1].label, value: '96.8%' },
            { label: currentModule.outputMetrics[2].label, value: 'Confirmed' },
            { label: currentModule.outputMetrics[3].label, value: 'Moderate' },
            { label: currentModule.outputMetrics[4].label, value: 'High Priority' }
          ]
        });
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">


          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-3xl">
            Analyze Blood Disorders with AI
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl">
            Upload microscopic blood smear images for instant AI-powered analysis.
            Select a disorder module to begin.
          </p>

          {/* Important Notice */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 max-w-3xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-200">
                <strong className="text-amber-100">Research Demo:</strong> This is a demonstration system for academic evaluation.
                Results should be reviewed by qualified medical professionals before clinical decision-making.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module Selection */}
      <section className="py-12 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Analysis Module</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {(Object.keys(modules) as DisorderType[]).map((key) => {
              const module = modules[key];
              const Icon = module.icon;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveModule(key);
                    clearFile();
                  }}
                  className={`text-left p-6 rounded-2xl border-2 transition-all ${
                    activeModule === key
                      ? `bg-gradient-to-br ${module.color} text-white border-transparent shadow-lg`
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-3 ${
                    activeModule === key ? 'text-white' : 'text-slate-700'
                  }`} />
                  <h3 className={`text-lg font-bold mb-2 ${
                    activeModule === key ? 'text-white' : 'text-slate-900'
                  }`}>
                    {module.name}
                  </h3>
                  <p className={`text-sm ${
                    activeModule === key ? 'text-white/90' : 'text-slate-600'
                  }`}>
                    {module.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Upload & Requirements */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upload Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentModule.color} flex items-center justify-center`}>
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Upload Blood Smear Image</h2>
                  <p className="text-sm text-slate-600">For {currentModule.name}</p>
                </div>
              </div>

              {/* Drop Zone */}
              {!selectedFile ? (
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-slate-400 transition cursor-pointer"
                >
                  <input
                    type="file"
                    accept={currentModule.acceptedFormats}
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <ImageIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-slate-900 mb-2">
                      Drop your image here or click to browse
                    </p>
                    <p className="text-sm text-slate-600 mb-4">
                      Supported formats: {currentModule.acceptedFormats}
                    </p>
                    <p className="text-xs text-slate-500">
                      Maximum file size: {currentModule.maxSize}
                    </p>
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Preview */}
                  <div className="relative rounded-xl overflow-hidden border border-slate-200">
                    <img
                      src={previewUrl || ''}
                      alt="Preview"
                      className="w-full h-96 object-contain bg-slate-100"
                    />
                    <button
                      onClick={clearFile}
                      className="absolute top-4 right-4 w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* File Info */}
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-slate-600" />
                      <div>
                        <p className="font-medium text-slate-900">{selectedFile.name}</p>
                        <p className="text-sm text-slate-600">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  {/* Analyze Button */}
                  <button
                    onClick={analyzeImage}
                    disabled={isAnalyzing}
                    className={`w-full py-4 rounded-xl font-semibold text-white transition flex items-center justify-center gap-3 ${
                      isAnalyzing
                        ? 'bg-slate-400 cursor-not-allowed'
                        : `bg-gradient-to-r ${currentModule.color} hover:opacity-90`
                    }`}
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Analyzing Image...
                      </>
                    ) : (
                      <>
                        <Brain className="w-5 h-5" />
                        Start AI Analysis
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Results Section */}
            {analysisResult && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 animate-in fade-in duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentModule.color} flex items-center justify-center`}>
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Analysis Results</h2>
                    <p className="text-sm text-slate-600">AI-powered diagnostic assessment</p>
                  </div>
                </div>

                {/* Main Prediction */}
                <div className={`${currentModule.bgColor} border-2 ${currentModule.borderColor} rounded-xl p-6 mb-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-600 mb-1">Diagnosis</p>
                      <p className="text-2xl font-bold text-slate-900">{analysisResult.prediction}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-600 mb-1">Confidence</p>
                      <p className="text-3xl font-bold text-slate-900">{analysisResult.confidence}%</p>
                    </div>
                  </div>
                  
                  {/* Confidence Bar */}
                  <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${currentModule.color}`}
                      style={{ width: `${analysisResult.confidence}%` }}
                    />
                  </div>
                </div>

                {/* Detailed Metrics */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {analysisResult.details.map((detail, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="text-xs font-semibold text-slate-600 mb-1">{detail.label}</p>
                      <p className="text-lg font-bold text-slate-900">{detail.value}</p>
                    </div>
                  ))}
                </div>

                {/* Explainability Section */}
                <div className="border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Eye className="w-5 h-5 text-slate-700" />
                    <h3 className="text-lg font-bold text-slate-900">Explainable AI Visualization</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
                      <p className="text-sm font-semibold text-slate-600 mb-2">Grad-CAM Heatmap</p>
                      <div className="w-full h-48 bg-slate-200 rounded-lg flex items-center justify-center">
                        <p className="text-slate-500 text-sm">Visualization available after analysis</p>
                      </div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
                      <p className="text-sm font-semibold text-slate-600 mb-2">Attention Map</p>
                      <div className="w-full h-48 bg-slate-200 rounded-lg flex items-center justify-center">
                        <p className="text-slate-500 text-sm">Visualization available after analysis</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <button className="flex-1 py-3 px-6 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Report
                  </button>
                  <button
                    onClick={clearFile}
                    className="flex-1 py-3 px-6 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition"
                  >
                    Analyze Another Image
                  </button>
                </div>

                {/* Medical Disclaimer */}
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800">
                      <strong>Medical Disclaimer:</strong> This AI analysis is for research and educational purposes only.
                      Results must be verified by qualified medical professionals before any clinical decisions.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Info */}
          <div className="space-y-6">
            {/* Requirements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-slate-700" />
                <h3 className="text-lg font-bold text-slate-900">Image Requirements</h3>
              </div>
              <ul className="space-y-3">
                {currentModule.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Model Performance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Accuracy</span>
                  </div>
                  <span className="font-bold">&gt;95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Inference Time</span>
                  </div>
                  <span className="font-bold">&lt;5s</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    <span className="text-sm">Model Type</span>
                  </div>
                  <span className="font-bold text-xs">CNN-ViT</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">Explainability</span>
                  </div>
                  <span className="font-bold text-xs">Grad-CAM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Learn More</h3>
              <div className="space-y-3">
                <Link
                  href="/disorders"
                  className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition"
                >
                  <span className="text-sm font-medium text-slate-900">About Disorders</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </Link>
                <Link
                  href="/about"
                  className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition"
                >
                  <span className="text-sm font-medium text-slate-900">Research Methodology</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </Link>
                <Link
                  href="/Team"
                  className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition"
                >
                  <span className="text-sm font-medium text-slate-900">Meet the Team</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}