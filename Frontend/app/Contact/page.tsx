'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building2,
  Globe,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ExternalLink,
  FileText,
  Users,
  Microscope,
  Award,
  BookOpen,
  Shield
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

/**
 * HematoScan AI - Contact Page
 * Contact form, team information, and institutional details
 */

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: 'general',
        message: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      setSubmitStatus('error');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Building2,
      title: 'Institution',
      details: [
        'Sri Lanka Institute of Information Technology (SLIIT)',
        'Department of Information Technology',
        'Faculty of Computing'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: [
        'New Kandy Road, Malabe',
        'Sri Lanka',
        'Postal Code: 10115'
      ],
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        'Main: +94 11 754 4801',
        'Department: +94 11 754 4802',
        'Fax: +94 11 241 3901'
      ],
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'General: info@sliit.lk',
        'Research: research@sliit.lk',
        'Project: hematoscan@sliit.lk'
      ],
      color: 'from-rose-500 to-red-600'
    }
  ];

  const researchTeam = [
    {
      name: 'Bandara L.P.B.R.',
      role: 'Leukemia Detection Lead',
      id: 'IT22564122',
      email: 'it22564122@my.sliit.lk',
      focus: 'CNN-ViT hybrid models for leukemia classification',
      color: 'from-rose-500 to-red-600'
    },
    {
      name: 'Niwanthika M.A.H.',
      role: 'Thalassemia Screening Lead',
      id: 'IT22570758',
      email: 'it22570758@my.sliit.lk',
      focus: 'Binary classification for thalassemia detection',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Udesha S.M.S.',
      role: 'Anemia Classification Lead',
      id: 'IT22586902',
      email: 'it22586902@my.sliit.lk',
      focus: 'Multi-class anemia subtype identification',
      color: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Liyanahetti L.H.R.S.D',
      role: 'Malaria Detection Lead',
      id: 'IT22592088',
      email: 'it22592088@my.sliit.lk',
      focus: 'Parasitized cell detection and species classification',
      color: 'from-emerald-500 to-green-600'
    }
  ];

  const supervisors = [
    {
      name: 'Ms. Dinithi Pandithage',
      title: 'Lecturer',
      role: 'Supervisor',
      department: 'Department of Computer Systems Engineering',
      email: 'dinithi.p@sliit.lk',
      phone: '+94 11 754 4801',
        expertise: [
    'Computer Networks',
    'Wireless Networks',
    'Internet of Things (IoT)',
    'Cloud Computing',
    'Blockchain Systems',
    'Network Security',]
    },
    {
       name: 'Ms. Rangi Prarthana Babarande Liyanage',
      title: 'Lecturer',
      role: 'Co-Supervisor',
      department: 'Department of Information Technology',
      email: 'rangi.p@sliit.lk',
      phone: '+94 11 754 4802',
              expertise: [
    'Computer Networks',
    'Wireless Networks',
    'Internet of Things (IoT)',
    'Cloud Computing',
    'Blockchain Systems',
    'Network Security',]
    },
    {
      name: 'Dr. Subhash Jayasinghe',
      title: 'M.B.B.S.',
      role: 'External Medical Supervisor',
      institution: 'Teaching Hospital Kegalle',
      email: 'medical.supervisor@hospital.lk',
      phone: '+94 35 223 6261',
      expertise: ['Clinical Hematology', 'Blood Disorder Diagnosis', 'Laboratory Medicine']
    }
  ];

  const quickLinks = [
    { icon: BookOpen, label: 'About Project', href: '/about' },
    { icon: Users, label: 'Research Team', href: '/Team' },
    { icon: Microscope, label: 'Blood Disorders', href: '/disorders' },
    { icon: FileText, label: 'Documentation', href: '/documentation' },
    { icon: Award, label: 'Demo Analysis', href: '/demo' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:bg-slate-700' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:bg-blue-700' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:bg-sky-500' },
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:bg-blue-600' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
   

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-3xl">
            Contact Our Research Team
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">
            Have questions about our research, want to collaborate, or need more information?
            We're here to help. Reach out to us through any of the channels below.
          </p>

          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                  <Icon className="w-6 h-6 mb-2" />
                  <div className="text-sm font-semibold mb-1">{info.title}</div>
                  <div className="text-xs text-slate-300">{info.details[0]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - Left 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900">Message Sent Successfully!</p>
                    <p className="text-sm text-green-700 mt-1">
                      Thank you for contacting us. We'll respond within 24-48 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-900">Failed to Send Message</p>
                    <p className="text-sm text-red-700 mt-1">
                      Please try again or contact us directly via email.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-300' : 'border-slate-300'
                        } focus:ring-2 focus:ring-slate-400 focus:outline-none`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-300' : 'border-slate-300'
                        } focus:ring-2 focus:ring-slate-400 focus:outline-none`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Category */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:outline-none"
                        placeholder="+94 77 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-2">
                      Inquiry Category
                    </label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:outline-none"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="research">Research Collaboration</option>
                      <option value="technical">Technical Support</option>
                      <option value="clinical">Clinical Partnership</option>
                      <option value="academic">Academic Information</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.subject ? 'border-red-300' : 'border-slate-300'
                    } focus:ring-2 focus:ring-slate-400 focus:outline-none`}
                    placeholder="Brief description of your inquiry"
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-600 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-red-300' : 'border-slate-300'
                    } focus:ring-2 focus:ring-slate-400 focus:outline-none resize-none`}
                    placeholder="Please provide details about your inquiry..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-slate-900">{info.title}</h4>
                      </div>
                      <div className="pl-13 space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-sm text-slate-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Office Hours</h3>
              </div>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Friday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday:</span>
                  <span className="text-red-600">Closed</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-4 pt-4 border-t border-blue-200">
                Response time: 24-48 hours for email inquiries
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                {quickLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={idx}
                      href={link.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-slate-600" />
                        <span className="text-sm font-medium text-slate-900">{link.label}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Research Team Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Research Team Contacts</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Get in touch with individual researchers for specific inquiries about their work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {researchTeam.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-4 text-2xl font-bold text-white`}>
                  {member.name.split(' ')[0][0]}{member.name.split(' ').slice(-1)[0][0]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm text-slate-600 mb-1">{member.id}</p>
                <p className="text-sm font-semibold text-slate-700 mb-3">{member.role}</p>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">{member.focus}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            ))}
          </div>

          {/* Supervisors */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Project Supervisors</h3>
            <p className="text-slate-600">Academic and medical supervision team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supervisors.map((supervisor, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-1">{supervisor.name}</h3>
                <p className="text-blue-200 mb-2">{supervisor.title}</p>
                <p className="text-sm text-slate-300 mb-4">{supervisor.role}</p>
                
                <div className="mb-4 pb-4 border-b border-white/20">
                  <p className="text-xs text-slate-400 mb-1">{supervisor.department || supervisor.institution}</p>
                </div>

                <div className="space-y-2 mb-4">
                  <a href={`mailto:${supervisor.email}`} className="flex items-center gap-2 text-sm hover:text-blue-200 transition">
                    <Mail className="w-4 h-4" />
                    {supervisor.email}
                  </a>
                  <a href={`tel:${supervisor.phone}`} className="flex items-center gap-2 text-sm hover:text-blue-200 transition">
                    <Phone className="w-4 h-4" />
                    {supervisor.phone}
                  </a>
                </div>

                <div>
                  <p className="text-xs text-slate-400 mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {supervisor.expertise.map((exp, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map/Location Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">SLIIT Malabe Campus</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Address</p>
                    <p className="text-sm text-slate-600">
                      New Kandy Road, Malabe<br />
                      Sri Lanka 10115
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-slate-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Coordinates</p>
                    <p className="text-sm text-slate-600">
                      6.9144° N, 79.9731° E
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=SLIIT+Malabe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div className="bg-slate-100 rounded-xl h-80 flex items-center justify-center">
              <div className="text-center text-slate-600">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-slate-400" />
                <p className="text-sm">Interactive Map</p>
                <p className="text-xs text-slate-500">Google Maps Integration</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}