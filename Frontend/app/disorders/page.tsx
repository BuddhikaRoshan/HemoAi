'use client';

import { useState } from 'react';
import {
  Activity,
  FlaskConical,
  Droplet,
  Scan,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Brain,
  Eye,
  Target,
  Zap,
  TrendingUp,
  Users,
  Microscope,
  Heart,
  Shield,
  BookOpen,
  FileText,
  BarChart3,
  Stethoscope,
  Globe,
  Award
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

/**
 * HematoScan AI - Blood Disorders Information Page
 * Comprehensive medical and technical overview of detectable disorders
 */

type DisorderKey = 'leukemia' | 'thalassemia' | 'anemia' | 'malaria';

export default function DisordersPage() {
  const [activeDisorder, setActiveDisorder] = useState<DisorderKey>('leukemia');

  const disorders = {
    leukemia: {
      name: 'Leukemia',
      subtitle: 'Blood Cancer Detection',
      icon: Activity,
      color: 'from-rose-500 to-red-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-500',
      textColor: 'text-rose-700',
      description: 'Cancer of blood-forming tissues, including bone marrow and lymphatic system, characterized by abnormal white blood cell production.',
      
      medicalOverview: {
        definition: 'Leukemia is a malignant disease of the blood and bone marrow characterized by the uncontrolled proliferation of abnormal white blood cells (leukocytes). These abnormal cells accumulate in the bone marrow and blood, interfering with normal blood cell production.',
        types: [
          {
            name: 'Acute Lymphoblastic Leukemia (ALL)',
            description: 'Rapid-onset cancer affecting lymphoid cells, most common in children',
            prevalence: '75% of childhood leukemia cases'
          },
          {
            name: 'Acute Myeloid Leukemia (AML)',
            description: 'Fast-growing cancer of myeloid lineage cells, more common in adults',
            prevalence: '80% of adult acute leukemia'
          },
          {
            name: 'Chronic Lymphocytic Leukemia (CLL)',
            description: 'Slow-growing cancer affecting mature lymphocytes',
            prevalence: 'Most common adult leukemia'
          },
          {
            name: 'Chronic Myeloid Leukemia (CML)',
            description: 'Slow-progressing myeloid cell cancer',
            prevalence: '15% of adult leukemia cases'
          }
        ],
        symptoms: [
          'Frequent infections and fever',
          'Persistent fatigue and weakness',
          'Easy bruising and bleeding',
          'Swollen lymph nodes',
          'Unexplained weight loss',
          'Bone and joint pain',
          'Night sweats'
        ],
        riskFactors: [
          'Previous chemotherapy or radiation',
          'Genetic disorders (Down syndrome)',
          'Family history of leukemia',
          'Exposure to chemicals (benzene)',
          'Smoking',
          'Age (varies by type)'
        ]
      },

      diagnosticApproach: {
        traditional: [
          'Complete Blood Count (CBC) with differential',
          'Peripheral blood smear examination',
          'Bone marrow aspiration and biopsy',
          'Flow cytometry for cell typing',
          'Cytogenetic analysis',
          'Molecular genetic testing'
        ],
        aiMethod: 'CNN-ViT hybrid model analyzes microscopic blood smear images to detect abnormal blast cells, cellular morphology changes, and leukemic patterns with >95% accuracy'
      },

      technicalDetails: {
        model: 'Hybrid CNN-Vision Transformer Architecture',
        accuracy: '>95%',
        sensitivity: '≥95%',
        specificity: '≥93%',
        dataset: '≥1,000 annotated images',
        inferenceTime: '<5 seconds',
        features: [
          'Automated blast cell detection',
          'Multi-class subtype classification (ALL/AML)',
          'Morphological feature extraction',
          'Grad-CAM visualization for explainability',
          'SHAP value analysis for transparency'
        ]
      },

      clinicalImpact: {
        early: 'Early detection significantly improves treatment outcomes and survival rates',
        current: 'Manual microscopy is time-consuming (30+ minutes) and requires expert hematologists',
        solution: 'AI-assisted analysis reduces diagnostic time by 50% while maintaining clinical accuracy',
        deployment: 'Suitable for both urban hospitals and resource-limited rural clinics'
      },

      researchLead: {
        name: 'Bandara L.P.B.R.',
        id: 'IT22564122',
        focus: 'Deep learning architectures for leukemia detection'
      }
    },

    thalassemia: {
      name: 'Thalassemia',
      subtitle: 'Inherited Blood Disorder',
      icon: FlaskConical,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-700',
      description: 'Inherited blood disorder causing reduced hemoglobin production, leading to anemia and requiring lifelong management.',

      medicalOverview: {
        definition: 'Thalassemia is an inherited blood disorder characterized by abnormal hemoglobin production due to genetic mutations affecting globin chain synthesis. This results in ineffective erythropoiesis, chronic anemia, and iron overload.',
        types: [
          {
            name: 'Beta-Thalassemia Major',
            description: 'Severe form requiring regular blood transfusions',
            prevalence: 'Life-threatening without treatment'
          },
          {
            name: 'Beta-Thalassemia Intermediate',
            description: 'Moderate severity, occasional transfusions needed',
            prevalence: 'Variable clinical presentation'
          },
          {
            name: 'Beta-Thalassemia Minor (Trait)',
            description: 'Mild or no symptoms, carrier state',
            prevalence: 'Often asymptomatic'
          },
          {
            name: 'Alpha-Thalassemia',
            description: 'Ranges from silent carrier to severe forms',
            prevalence: 'Four clinical subtypes based on gene deletions'
          }
        ],
        symptoms: [
          'Severe anemia and fatigue',
          'Pale or jaundiced skin',
          'Facial bone deformities',
          'Slow growth in children',
          'Abdominal swelling (enlarged spleen)',
          'Dark urine',
          'Frequent infections'
        ],
        riskFactors: [
          'Family history of thalassemia',
          'Mediterranean, Asian, or African ancestry',
          'Consanguineous marriage',
          'Carrier parents',
          'Endemic regions (South Asia, Mediterranean)'
        ]
      },

      diagnosticApproach: {
        traditional: [
          'Complete Blood Count (CBC)',
          'Peripheral blood smear (microcytic, hypochromic RBCs)',
          'Hemoglobin electrophoresis (HPLC)',
          'Iron studies (to rule out iron deficiency)',
          'DNA analysis for genetic confirmation',
          'Family screening'
        ],
        aiMethod: 'Binary classification model analyzes RBC morphology, size, and hemoglobin content to differentiate thalassemia from other anemias with >95% accuracy'
      },

      technicalDetails: {
        model: 'CNN-ViT Binary Classification System',
        accuracy: '>95%',
        sensitivity: '≥95%',
        specificity: '≥93%',
        dataset: '≥1,000 annotated blood smears',
        inferenceTime: '<5 seconds',
        features: [
          'Microcytosis detection',
          'Hypochromia analysis',
          'Target cell identification',
          'Silent carrier detection capability',
          'CBC parameter integration',
          'Cost-effective screening solution'
        ]
      },

      clinicalImpact: {
        early: 'Early screening enables genetic counseling and prevention of severe cases',
        current: 'HPLC testing is expensive (LKR 8,000+) and unavailable in rural areas',
        solution: 'AI-based screening reduces costs by 70% and enables population-level screening',
        deployment: 'Particularly beneficial for prenatal and premarital screening programs'
      },

      researchLead: {
        name: 'Niwanthika M.A.H.',
        id: 'IT22570758',
        focus: 'ML-based thalassemia screening and carrier detection'
      }
    },

    anemia: {
      name: 'Anemia',
      subtitle: 'Red Blood Cell Deficiency',
      icon: Droplet,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-500',
      textColor: 'text-amber-700',
      description: 'Condition characterized by insufficient healthy red blood cells or hemoglobin, resulting in reduced oxygen delivery to body tissues.',

      medicalOverview: {
        definition: 'Anemia is a hematological condition defined by a reduction in red blood cell count or hemoglobin concentration below normal reference ranges, leading to impaired oxygen transport and tissue hypoxia.',
        types: [
          {
            name: 'Iron Deficiency Anemia (IDA)',
            description: 'Most common type, caused by insufficient iron for hemoglobin production',
            prevalence: '50% of all anemia cases globally'
          },
          {
            name: 'Megaloblastic Anemia',
            description: 'B12 or folate deficiency causing large, immature RBCs',
            prevalence: 'Common in vegetarians and elderly'
          },
          {
            name: 'Hemolytic Anemia',
            description: 'Premature destruction of red blood cells',
            prevalence: 'Can be inherited or acquired'
          },
          {
            name: 'Aplastic Anemia',
            description: 'Bone marrow failure to produce sufficient blood cells',
            prevalence: 'Rare but serious condition'
          },
          {
            name: 'Sickle Cell Anemia',
            description: 'Inherited disorder with abnormally shaped red blood cells',
            prevalence: 'Prevalent in sub-Saharan Africa'
          }
        ],
        symptoms: [
          'Persistent fatigue and weakness',
          'Pale or yellowish skin',
          'Shortness of breath',
          'Dizziness and lightheadedness',
          'Cold hands and feet',
          'Irregular heartbeat',
          'Headaches and concentration difficulty'
        ],
        riskFactors: [
          'Poor nutrition (iron, B12, folate deficiency)',
          'Pregnancy and menstruation',
          'Chronic diseases (kidney, cancer)',
          'Intestinal disorders affecting absorption',
          'Family history of inherited anemias',
          'Age (infants, children, elderly)'
        ]
      },

      diagnosticApproach: {
        traditional: [
          'Complete Blood Count (CBC)',
          'Peripheral blood smear examination',
          'Reticulocyte count',
          'Iron studies (serum iron, ferritin, TIBC)',
          'Vitamin B12 and folate levels',
          'Hemoglobin electrophoresis'
        ],
        aiMethod: 'Multi-class CNN-ViT model with multimodal integration analyzes blood smear morphology and CBC parameters to classify anemia subtypes with >95% accuracy'
      },

      technicalDetails: {
        model: 'Hybrid CNN-ViT with Multimodal Fusion',
        accuracy: '>95%',
        sensitivity: '≥95%',
        specificity: '≥93%',
        dataset: '≥1,000 annotated images with CBC data',
        inferenceTime: '<5 seconds',
        features: [
          'Binary classification (anemic vs. normal)',
          'Multi-class subtype differentiation',
          'RBC morphology analysis (size, shape, color)',
          'CBC parameter integration',
          'Poikilocytosis detection',
          'Maternal health screening optimization'
        ]
      },

      clinicalImpact: {
        early: 'Early detection prevents complications in pregnancy and child development',
        current: 'Sri Lanka: 29% of reproductive-age women and 16-17% of pregnant women affected',
        solution: 'Automated screening enables early intervention in maternal and child health programs',
        deployment: 'Critical for antenatal clinics and primary healthcare centers'
      },

      researchLead: {
        name: 'Udesha S.M.S.',
        id: 'IT22586902',
        focus: 'Iron deficiency anemia detection with multimodal analysis'
      }
    },

    malaria: {
      name: 'Malaria',
      subtitle: 'Parasitic Infection',
      icon: Scan,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-500',
      textColor: 'text-emerald-700',
      description: 'Life-threatening disease caused by Plasmodium parasites transmitted through mosquito bites, requiring rapid diagnosis for treatment.',

      medicalOverview: {
        definition: 'Malaria is an infectious disease caused by Plasmodium parasites transmitted to humans through the bite of infected female Anopheles mosquitoes. The parasites multiply in the liver and then infect red blood cells.',
        types: [
          {
            name: 'Plasmodium falciparum',
            description: 'Most deadly species, causes severe malaria',
            prevalence: 'Responsible for majority of malaria deaths'
          },
          {
            name: 'Plasmodium vivax',
            description: 'Most geographically widespread, causes relapses',
            prevalence: 'Dominant in Asia and Americas'
          },
          {
            name: 'Plasmodium malariae',
            description: 'Causes chronic infections',
            prevalence: 'Found worldwide in endemic areas'
          },
          {
            name: 'Plasmodium ovale',
            description: 'Similar to P. vivax, can cause relapses',
            prevalence: 'Primarily in West Africa'
          },
          {
            name: 'Plasmodium knowlesi',
            description: 'Zoonotic malaria from primates',
            prevalence: 'Emerging in Southeast Asia'
          }
        ],
        symptoms: [
          'High fever and chills',
          'Profuse sweating',
          'Headache and muscle pain',
          'Nausea and vomiting',
          'Fatigue and weakness',
          'Diarrhea',
          'In severe cases: organ failure, anemia, cerebral malaria'
        ],
        riskFactors: [
          'Travel to endemic regions',
          'Living in malaria-endemic areas',
          'Lack of preventive measures',
          'Young children and infants',
          'Pregnant women',
          'Immunocompromised individuals'
        ]
      },

      diagnosticApproach: {
        traditional: [
          'Microscopic examination of thick and thin blood smears',
          'Giemsa staining for parasite visualization',
          'Rapid Diagnostic Tests (RDTs) for antigen detection',
          'Polymerase Chain Reaction (PCR) for species identification',
          'Manual parasite counting',
          'Species differentiation by morphology'
        ],
        aiMethod: 'Deep learning model with object detection capabilities identifies parasitized RBCs and classifies Plasmodium species in real-time with >95% accuracy'
      },

      technicalDetails: {
        model: 'CNN with Transfer Learning and YOLO Detection',
        accuracy: '>95%',
        sensitivity: '≥95%',
        specificity: '≥93%',
        dataset: '≥1,000 thin blood smear images',
        inferenceTime: '<30 seconds per sample',
        features: [
          'Binary classification (infected vs. uninfected)',
          'Multi-species Plasmodium identification',
          'Parasite stage detection (ring, trophozoite, schizont)',
          'Parasitemia quantification',
          'Low-parasitemia detection',
          'Real-time diagnostic support'
        ]
      },

      clinicalImpact: {
        early: 'Sri Lanka achieved malaria-free status (2016) but remains at risk for imported cases',
        current: 'Manual microscopy takes 20-30 minutes and requires expert microscopists',
        solution: 'AI system enables rapid screening of imported cases and surveillance',
        deployment: 'Essential for ports of entry, malaria surveillance units, and travel clinics'
      },

      researchLead: {
        name: 'Liyanahetti L.H.R.S.D',
        id: 'IT22592088',
        focus: 'Real-time parasite detection with species classification'
      }
    }
  };

  const currentDisorder = disorders[activeDisorder];

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Stethoscope className="w-4 h-4" />
            <span className="text-sm font-medium">Blood Disorders</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-3xl">
            Detectable Blood Disorders
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
            Comprehensive information about the four major blood disorders our AI system can detect,
            including medical overview, diagnostic approaches, and clinical impact.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {[
              { value: '4', label: 'Disorders', icon: Microscope },
              { value: '>95%', label: 'Accuracy', icon: Target },
              { value: '<5s', label: 'Analysis', icon: Zap },
              { value: '3+', label: 'Hospitals', icon: Globe }
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

      {/* Disorder Selection */}
      <section className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {(Object.keys(disorders) as DisorderKey[]).map((key) => {
              const disorder = disorders[key];
              const Icon = disorder.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveDisorder(key)}
                  className={`group text-left p-6 rounded-2xl border-2 transition-all ${
                    activeDisorder === key
                      ? `bg-gradient-to-br ${disorder.color} text-white border-transparent shadow-lg`
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <Icon className={`w-10 h-10 mb-4 ${
                    activeDisorder === key ? 'text-white' : 'text-slate-700'
                  }`} />
                  <h3 className={`text-xl font-bold mb-1 ${
                    activeDisorder === key ? 'text-white' : 'text-slate-900'
                  }`}>
                    {disorder.name}
                  </h3>
                  <p className={`text-sm ${
                    activeDisorder === key ? 'text-white/90' : 'text-slate-600'
                  }`}>
                    {disorder.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Overview Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentDisorder.color} flex items-center justify-center`}>
              <currentDisorder.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">{currentDisorder.name}</h2>
              <p className="text-lg text-slate-600">{currentDisorder.subtitle}</p>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">{currentDisorder.description}</p>
        </div>

        {/* Medical Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Definition */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-slate-700" />
              <h3 className="text-xl font-bold text-slate-900">Medical Definition</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">{currentDisorder.medicalOverview.definition}</p>
          </div>

          {/* Symptoms */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-6 h-6 text-slate-700" />
              <h3 className="text-xl font-bold text-slate-900">Common Symptoms</h3>
            </div>
            <ul className="space-y-2">
              {currentDisorder.medicalOverview.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Types & Classifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {currentDisorder.medicalOverview.types.map((type, idx) => (
              <div key={idx} className={`${currentDisorder.bgColor} border-2 ${currentDisorder.borderColor} rounded-xl p-6`}>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{type.name}</h4>
                <p className="text-sm text-slate-700 mb-3">{type.description}</p>
                <div className="text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full inline-block">
                  {type.prevalence}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Factors */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-red-600" />
            <h3 className="text-2xl font-bold text-slate-900">Risk Factors</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {currentDisorder.medicalOverview.riskFactors.map((factor, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{factor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnostic Approaches */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Methods */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <Microscope className="w-6 h-6 text-slate-700" />
              <h3 className="text-xl font-bold text-slate-900">Traditional Diagnosis</h3>
            </div>
            <ul className="space-y-3">
              {currentDisorder.diagnosticApproach.traditional.map((method, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{method}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Method */}
          <div className={`${currentDisorder.bgColor} border-2 ${currentDisorder.borderColor} rounded-2xl p-8`}>
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-6 h-6 text-slate-900" />
              <h3 className="text-xl font-bold text-slate-900">AI-Assisted Diagnosis</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">{currentDisorder.diagnosticApproach.aiMethod}</p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Brain className="w-6 h-6" />
            <h3 className="text-2xl font-bold">Technical Specifications</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">{currentDisorder.technicalDetails.accuracy}</div>
              <div className="text-sm text-slate-300">Target Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">{currentDisorder.technicalDetails.inferenceTime}</div>
              <div className="text-sm text-slate-300">Inference Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">{currentDisorder.technicalDetails.dataset}</div>
              <div className="text-sm text-slate-300">Dataset Size</div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold mb-4">Model Architecture</h4>
            <p className="text-slate-200">{currentDisorder.technicalDetails.model}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Key Features</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {currentDisorder.technicalDetails.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clinical Impact */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-slate-700" />
            <h3 className="text-2xl font-bold text-slate-900">Clinical Impact & Deployment</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Early Detection Importance</h4>
              <p className="text-slate-700 mb-6 leading-relaxed">{currentDisorder.clinicalImpact.early}</p>
              
              <h4 className="font-bold text-slate-900 mb-3">Current Challenges</h4>
              <p className="text-slate-700 leading-relaxed">{currentDisorder.clinicalImpact.current}</p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Our Solution</h4>
              <p className="text-slate-700 mb-6 leading-relaxed">{currentDisorder.clinicalImpact.solution}</p>
              
              <h4 className="font-bold text-slate-900 mb-3">Deployment Strategy</h4>
              <p className="text-slate-700 leading-relaxed">{currentDisorder.clinicalImpact.deployment}</p>
            </div>
          </div>
        </div>

        {/* Research Lead */}
        <div className={`${currentDisorder.bgColor} border-2 ${currentDisorder.borderColor} rounded-2xl p-8`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-slate-700" />
                <span className="text-sm font-semibold text-slate-600">Research Lead</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-1">{currentDisorder.researchLead.name}</h4>
              <p className="text-slate-600 mb-2">{currentDisorder.researchLead.id}</p>
              <p className="text-sm text-slate-700">{currentDisorder.researchLead.focus}</p>
            </div>
            <Link
              href="/Team"
              className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition flex items-center gap-2"
            >
              View Team
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Start Diagnostic Analysis</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Access our AI-powered platform for rapid and accurate blood disorder detection
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            Begin Analysis
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}