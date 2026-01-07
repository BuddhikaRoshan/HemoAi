'use client';

import React, { useState } from 'react';
import {
  Users,
  GraduationCap,
  Briefcase,
  Clock,
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Target,
  Activity,
  Droplet,
  Scan,
  Brain,
  Database,
  Github,
  Linkedin,
  ChevronRight,
  Building2,
  Stethoscope,
  UserCheck,
  Star,
  Shield,
  FlaskConical
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type MemberCategory = 'students' | 'internal' | 'external';

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState<MemberCategory>('students');

  const students = [
    {
      name: 'Bandara L.P.B.R.',
      id: 'IT22564122',
      role: 'Research Lead - Leukemia Detection',
      disorder: 'Leukemia',
      icon: Activity,
      gradient: 'from-rose-500 to-red-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-500',
      bio: 'Specializing in deep learning architectures for automated leukemia detection and classification from microscopic blood smear images.',
      expertise: [
        'Convolutional Neural Networks (CNN)',
        'Vision Transformers (ViT)',
        'Medical Image Analysis',
        'Explainable AI (XAI)',
      ],
      responsibilities: [
        'Dataset collection and annotation from Sri Lankan hospitals',
        'Development of hybrid CNN-ViT models for leukemia classification',
        'Integration of Grad-CAM and SHAP for explainability',
        'Clinical validation and accuracy assessment',
      ],
      achievements: [
        'Achieved >95% classification accuracy',
        'Developed local Sri Lankan leukemia dataset',
        'Published research findings in project proposal',
      ],
      contact: {
        email: 'it22564122@my.sliit.lk',
      },
    },
    {
      name: 'Niwanthika M.A.H.',
      id: 'IT22570758',
      role: 'Research Lead - Thalassemia Detection',
      disorder: 'Thalassemia',
      icon: FlaskConical,
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      bio: 'Focused on machine learning-based screening and diagnosis of thalassemia disorders using microscopic blood images and hematological data.',
      expertise: [
        'Binary Classification Models',
        'Feature Engineering',
        'Multi-modal Data Integration',
        'Clinical Data Analysis',
      ],
      responsibilities: [
        'Data collection from National Thalassemia Prevention Unit',
        'Development of ML models for thalassemia screening',
        'Silent carrier detection algorithm development',
        'Cost-effective diagnostic framework design',
      ],
      achievements: [
        'Created comprehensive thalassemia detection framework',
        'Integrated CBC parameters with image analysis',
        'Developed affordable screening solution',
      ],
      contact: {
        email: 'it22570758@my.sliit.lk',
      },
    },
    {
      name: 'Udesha S.M.S.',
      id: 'IT22586902',
      role: 'Research Lead - Anemia Detection',
      disorder: 'Anemia',
      icon: Droplet,
      gradient: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-500',
      bio: 'Developing ML-based framework for automated iron deficiency anemia detection and classification through blood smear analysis.',
      expertise: [
        'Deep Learning',
        'Image Preprocessing',
        'RBC Morphology Analysis',
        'Data Augmentation',
      ],
      responsibilities: [
        'Collection of anemia patient blood smear images',
        'Development of CNN-based RBC classification models',
        'Multi-class anemia subtype differentiation',
        'Integration with maternal health screening programs',
      ],
      achievements: [
        'Developed automated anemia screening system',
        'Achieved high diagnostic accuracy for IDA',
        'Created scalable solution for rural healthcare',
      ],
      contact: {
        email: 'it22586902@my.sliit.lk',
      },
    },
    {
      name: 'Liyanahetti L.H.R.S.D',
      id: 'IT22592088',
      role: 'Research Lead - Malaria Detection',
      disorder: 'Malaria',
      icon: Scan,
      gradient: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-500',
      bio: 'Specializing in automated malaria parasite detection and classification using deep learning and microscopic image analysis.',
      expertise: [
        'Object Detection (YOLO)',
        'Parasite Identification',
        'Real-time Image Processing',
        'Species Classification',
      ],
      responsibilities: [
        'Collaboration with Anti-Malaria Campaign Kurunegala',
        'Development of real-time parasite detection system',
        'Multi-species Plasmodium classification',
        'Low parasitemia detection optimization',
      ],
      achievements: [
        'Achieved 99%+ parasite detection accuracy',
        'Developed rapid diagnostic support system',
        'Created surveillance tool for imported cases',
      ],
      contact: {
        email: 'it22592088@my.sliit.lk',
      },
    },
  ];

  const internalSupervisors = [
    {
  name: 'Ms. Dinithi Pandithage',
  title: 'Lecturer',
  role: 'Supervisor',
  department: 'Department of Computer Systems Engineering',
  institution: 'Faculty of Computing, Sri Lanka Institute of Information Technology (SLIIT)',
  qualifications: [
    'MPhil in Computer Networks (Reading) – Sri Lanka Institute of Information Technology',
    'B.Sc. (Hons) in Computer Engineering – Kotelawala Defence University',
  ],
  expertise: [
    'Computer Networks',
    'Wireless Networks',
    'Internet of Things (IoT)',
    'Cloud Computing',
    'Blockchain Systems',
    'Network Security',
  ],
  responsibilities: [
    'Undergraduate teaching and supervision',
    'Academic and research mentoring',
    'Project evaluation and assessment',
    'Research guidance and publication support',
    'Curriculum development',
  ],
  experience:
    'Lecturer at SLIIT (Oct 2022 – Present); Instructor at University of Sri Jayewardenepura (Apr 2021 – Oct 2022)',
  researchAreas: [
    'Computer Networks',
    'IoT-based Systems',
    'Blockchain Applications',
    'Network Monitoring and Security',
    'Smart Systems and Embedded Technologies',
  ],
  contact: {
    email: 'dinithi.p@sliit.lk',
    phone: '+94 11 754 4801',
    office: 'SLIIT, Malabe Campus',
  },
},

   
    {
  name: 'Ms. Rangi Prarthana Babarande Liyanage',
  title: 'Lecturer',
  role: 'Co-Supervisor',
  department: 'Department of Information Technology',
  institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
  qualifications: [
    'M.Sc. in Information Technology',
    'B.Sc. (Hons) in Information Technology',
  ],
  expertise: [
    'Software Engineering',
    'Web Application Development',
    'Data Management Systems',
    'Information Systems',
    'Academic Research',
  ],
  responsibilities: [
    'Co-supervision of undergraduate research',
    'Technical guidance and mentoring',
    'Research progress evaluation',
    'Documentation and presentation review',
    'Quality assurance of project outcomes',
  ],
  experience: 'Lecturer and academic researcher at SLIIT',
  researchAreas: [
    'Information Systems',
    'Software Engineering',
    'Web Technologies',
    'Data-Driven Applications',
  ],
  contact: {
    email: 'rangi.p@sliit.lk',
    phone: '+94 11 754 4802',
    office: 'SLIIT, Malabe Campus',
  },
}

  ];

  const externalSupervisor = {
    name: 'Dr. Subhash Jayasinghe',
    title: 'M.B.B.S. (Sri Lanka)',
    role: 'External Medical Supervisor',
    registration: 'S.L.M.C Reg No: 18906',
    currentPosition: 'Medical Officer',
    institution: 'Teaching Hospital Kegalle',
    qualifications: [
      'Bachelor of Medicine, Bachelor of Surgery (M.B.B.S.)',
      'Sri Lanka Medical Council Registered Practitioner',
      'Specialized Training in Hematology',
    ],
    expertise: [
      'Clinical Hematology',
      'Blood Disorder Diagnosis',
      'Microscopic Blood Smear Analysis',
      'Patient Care and Management',
      'Medical Laboratory Standards',
    ],
    responsibilities: [
      'Clinical validation of AI diagnostic outputs',
      'Medical expertise and guidance on hematology',
      'Dataset annotation and quality assurance',
      'Ensuring clinical relevance and accuracy',
      'Hospital coordination for data collection',
      'Ethical compliance oversight',
    ],
    experience: '12+ years of clinical medical practice',
    clinicalFocus: [
      'Diagnosis and treatment of blood disorders',
      'Hematological laboratory procedures',
      'Patient care in resource-limited settings',
      'Medical education and training',
    ],
    contribution: 'Provides critical clinical perspective ensuring the AI system meets real-world medical standards and is suitable for deployment in Sri Lankan hospitals.',
    contact: {
      institution: 'Teaching Hospital Kegalle',
      phone: '+94 35 223 6261',
      location: 'Kegalle, Sabaragamuwa Province, Sri Lanka',
    },
  };

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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Research Team</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-3xl">
            Meet the Research Team
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
            A dedicated team of student researchers, academic supervisors, and medical experts working together
            to advance AI-driven blood disorder detection in Sri Lanka.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            {[
              { value: '4', label: 'Student Researchers', icon: GraduationCap },
              { value: '2', label: 'SLIIT Supervisors', icon: BookOpen },
              { value: '1', label: 'Medical Expert', icon: Stethoscope },
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

      {/* Category Navigation */}
      <div className="sticky top-20 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2">
            {[
              { id: 'students', label: 'Student Researchers', icon: GraduationCap, count: 4 },
              { id: 'internal', label: 'SLIIT Supervisors', icon: BookOpen, count: 2 },
              { id: 'external', label: 'Medical Supervisor', icon: Stethoscope, count: 1 },
            ].map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as MemberCategory)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden md:inline">{cat.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    activeCategory === cat.id ? 'bg-white/20' : 'bg-slate-200'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Student Researchers */}
        {activeCategory === 'students' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Student Researchers</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Four undergraduate students leading individual research components, each focusing on a specific blood disorder
                while contributing to the unified diagnostic framework.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {students.map((student, i) => {
                const Icon = student.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all"
                  >
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${student.gradient} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8 opacity-20">
                        <Icon className="w-full h-full" />
                      </div>
                      <div className="relative flex items-start gap-4">
                        <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-3xl font-bold">
                          {student.name.split(' ')[0][0]}{student.name.split(' ').slice(-1)[0][0]}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-1">{student.name}</h3>
                          <p className="text-white/90 text-sm mb-2">{student.id}</p>
                          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                            <Icon className="w-4 h-4" />
                            {student.disorder}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      {/* Role */}
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-2">
                          <Target className="w-4 h-4" />
                          Role
                        </div>
                        <p className="font-bold text-slate-900">{student.role}</p>
                      </div>

                      {/* Bio */}
                      <p className="text-sm text-slate-700 leading-relaxed">{student.bio}</p>

                      {/* Expertise */}
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-3">
                          <Brain className="w-4 h-4" />
                          Technical Expertise
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {student.expertise.map((skill, j) => (
                            <span key={j} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg border border-slate-200">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-3">
                          <UserCheck className="w-4 h-4" />
                          Key Responsibilities
                        </div>
                        <ul className="space-y-2">
                          {student.responsibilities.map((resp, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                              <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div className={`${student.bgColor} border ${student.borderColor} rounded-xl p-4`}>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-3">
                          <Award className="w-4 h-4" />
                          Key Achievements
                        </div>
                        <ul className="space-y-2">
                          {student.achievements.map((achievement, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                              <Star className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact */}
                      <div className="pt-6 border-t border-slate-200 flex items-center gap-2 text-sm text-slate-600">
                        <Mail className="w-4 h-4" />
                        <span className="text-xs">{student.contact.email}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Internal Supervisors */}
        {activeCategory === 'internal' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">SLIIT Academic Supervisors</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Experienced faculty members from the Department of Information Technology providing academic guidance,
                technical expertise, and research mentorship.
              </p>
            </div>

            <div className="space-y-8">
              {internalSupervisors.map((supervisor, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 transform translate-x-12 -translate-y-12 opacity-10">
                      <BookOpen className="w-full h-full" />
                    </div>
                    <div className="relative flex items-start gap-6">
                      <div className="w-28 h-28 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-4xl font-bold">
                        {supervisor.name.split(' ').slice(-1)[0][0]}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-2">{supervisor.name}</h3>
                        <p className="text-xl text-blue-100 mb-2">{supervisor.title}</p>
                        <p className="text-blue-200 mb-4">{supervisor.role}</p>
                        <div className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm">
                            <Building2 className="w-4 h-4" />
                            {supervisor.department}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        {/* Qualifications */}
                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-3">
                            <Award className="w-4 h-4" />
                            Academic Qualifications
                          </div>
                          <ul className="space-y-2">
                            {supervisor.qualifications.map((qual, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                                <Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                {qual}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Expertise */}
                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-3">
                            <Brain className="w-4 h-4" />
                            Areas of Expertise
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {supervisor.expertise.map((exp, j) => (
                              <span
                                key={j}
                                className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-200"
                              >
                                {exp}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Experience */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                            <Briefcase className="w-4 h-4 text-blue-600" />
                            Professional Experience
                          </div>
                          <p className="text-sm text-slate-700 font-semibold">{supervisor.experience}</p>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {/* Responsibilities */}
                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-3">
                            <UserCheck className="w-4 h-4" />
                            Supervision Responsibilities
                          </div>
                          <ul className="space-y-2">
                            {supervisor.responsibilities.map((resp, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                                <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Research Areas */}
                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-3">
                            <Database className="w-4 h-4" />
                            Research Interests
                          </div>
                          <ul className="space-y-2">
                            {supervisor.researchAreas.map((area, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                                <Star className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                {area}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-xs text-slate-600">Email</div>
                            <div className="text-sm font-medium text-slate-900">{supervisor.contact.email}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                            <Phone className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-xs text-slate-600">Phone</div>
                            <div className="text-sm font-medium text-slate-900">{supervisor.contact.phone}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-xs text-slate-600">Office</div>
                            <div className="text-sm font-medium text-slate-900">{supervisor.contact.office}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* External Supervisor */}
        {activeCategory === 'external' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">External Medical Supervisor</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Clinical medical expert providing essential hematological expertise, ensuring the AI system meets
                real-world medical standards and clinical requirements.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-5xl mx-auto">
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 transform translate-x-16 -translate-y-16 opacity-10">
                  <Stethoscope className="w-full h-full" />
                </div>
                <div className="relative flex items-start gap-8">
                  <div className="w-36 h-36 rounded-2xl bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
                    <Stethoscope className="w-16 h-16" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold mb-2">{externalSupervisor.name}</h3>
                    <p className="text-2xl text-emerald-100 mb-3">{externalSupervisor.title}</p>
                    <p className="text-emerald-200 mb-4">{externalSupervisor.role}</p>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm">{externalSupervisor.registration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm">{externalSupervisor.currentPosition}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{externalSupervisor.institution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 space-y-8">
                {/* Professional Background */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-4">
                    <Briefcase className="w-5 h-5 text-emerald-600" />
                    Professional Background
                  </div>
                  <p className="text-slate-700 mb-4 leading-relaxed">{externalSupervisor.contribution}</p>
                  <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-emerald-200">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-slate-900">{externalSupervisor.experience}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Qualifications */}
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-3">
                        <Award className="w-4 h-4" />
                        Medical Qualifications
                      </div>
                      <ul className="space-y-2">
                        {externalSupervisor.qualifications.map((qual, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                            <Shield className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            {qual}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Clinical Expertise */}
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-3">
                        <Stethoscope className="w-4 h-4" />
                        Medical Expertise
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {externalSupervisor.expertise.map((exp, j) => (
                          <span
                            key={j}
                            className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-medium border border-emerald-200"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Clinical Focus */}
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-3">
                        <Target className="w-4 h-4" />
                        Clinical Focus Areas
                      </div>
                      <ul className="space-y-2">
                        {externalSupervisor.clinicalFocus.map((focus, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                            <ChevronRight className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            {focus}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Responsibilities */}
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-3">
                        <UserCheck className="w-4 h-4" />
                        Supervision Responsibilities
                      </div>
                      <ul className="space-y-2">
                        {externalSupervisor.responsibilities.map((resp, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                            <ChevronRight className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-600">Institution</div>
                        <div className="text-sm font-medium text-slate-900">{externalSupervisor.contact.institution}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-600">Phone</div>
                        <div className="text-sm font-medium text-slate-900">{externalSupervisor.contact.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-600">Location</div>
                        <div className="text-sm font-medium text-slate-900">{externalSupervisor.contact.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Team Statistics */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-12">Collaborative Research Excellence</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Team Members', value: '7' },
              { icon: GraduationCap, label: 'Combined Experience', value: '35+ Years' },
              { icon: Award, label: 'Research Areas', value: '4 Disorders' },
              { icon: Target, label: 'Target Accuracy', value: '≥95%' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}