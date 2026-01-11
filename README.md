# ML-Based Microscopic Image Analysis for Automated Detection and Classification of Blood Disorders

<div align="center">

![Project Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![License](https://img.shields.io/badge/License-Academic%20Research-blue)
![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-orange)
![PyTorch](https://img.shields.io/badge/PyTorch-2.x-red)

**Final Year Research Project | 2025-2026**  
**Sri Lanka Institute of Information Technology (SLIIT)**  
**Department of Information Technology**


</div>

---

## 📌 Project Overview

### Project ID: 25-26J-344

This research project presents a comprehensive, **multi-disease blood disorder diagnostic framework** powered by advanced machine learning and deep learning techniques. The system provides automated, accurate, and explainable detection of four major blood disorders from microscopic blood smear images, specifically designed for deployment in resource-limited healthcare settings across Sri Lanka.

### Target Blood Disorders

| Disease | Type | Clinical Significance |
|---------|------|----------------------|
| **Leukemia** | Blood Cancer | Detection and classification of ALL, AML and other subtypes |
| **Thalassemia** | Genetic Blood Disorder | Automated identification of carrier status and disease severity |
| **Anemia** | Nutritional Deficiency | Iron deficiency anemia and morphological variations |
| **Malaria** | Parasitic Infection | Parasitized cell detection and Plasmodium species classification |

### Research Problem

Current diagnostic practices in Sri Lankan healthcare facilities face critical challenges:

- **Manual Dependency**: Time-consuming microscopic examination (≥30 minutes/sample)
- **Human Error**: Subjective interpretation with inter-observer variability of 15-25%
- **Limited Access**: Scarcity of trained hematologists in rural areas (1:50,000 in remote regions)
- **Delayed Diagnosis**: Average diagnostic delay of 3-7 days in resource-limited settings
- **High Costs**: Expensive confirmatory tests (HPLC, genetic testing) unavailable in most district hospitals

### Research Solution

An **intelligent, explainable AI-powered diagnostic platform** that delivers:

✅ **High Accuracy**: ≥95% diagnostic accuracy across all disease categories  
✅ **Rapid Analysis**: <5 seconds per blood smear image  
✅ **Clinical Trust**: Explainable AI with Grad-CAM, SHAP, and attention visualization  
✅ **Cost-Effective**: Software-only solution requiring minimal infrastructure  
✅ **Scalable**: Deployable across urban tertiary hospitals and rural clinics  
✅ **Multi-Disease**: Unified framework for simultaneous detection of multiple disorders

---

## 🎯 Key Features

### 1. Advanced AI Architecture

- **Hybrid CNN-Vision Transformer Models**
  - Local morphological feature extraction via ResNet-50/EfficientNet CNNs
  - Global contextual pattern recognition using Vision Transformers (ViT)
  - Multi-scale feature fusion for comprehensive cell analysis
  - Ensemble learning for improved robustness

### 2. Explainable AI (XAI) Integration

- **Grad-CAM Visualization**: Heatmaps highlighting diagnostically relevant cell regions
- **SHAP Analysis**: Quantitative feature importance scores for transparent decision-making
- **Attention Mechanisms**: Transformer-based attention weight visualization
- **Clinical Interpretability**: AI reasoning aligned with hematological diagnostic criteria

### 3. Clinical Deployment Ready

- **Real-Time Inference**: <5 seconds per 1024×1024 blood smear image
- **Web-Based Interface**: Responsive dashboard for clinical laboratories
- **99% Uptime**: Production-grade reliability with comprehensive monitoring

### 4. Resource-Optimized Design

- **Lightweight Architecture**: Optimized for deployment on standard hospital computing resources
- **Cloud-Native**: Serverless deployment options for minimal infrastructure costs
- **Mobile-Compatible**: Inference capabilities for smartphone-based point-of-care diagnostics
- **Offline Mode**: Local processing for areas with limited internet connectivity

### 5. Data Security & Privacy

- **PDPA 2022 Compliant**: Full compliance with Sri Lankan data protection regulations
- **End-to-End Encryption**: AES-256 encryption for data at rest, TLS 1.3 for data in transit
- **De-Identification**: Automated removal of personally identifiable information (PII)
- **Access Controls**: Role-based authentication with audit logging

---

## 🏗️ System Architecture

### High-Level Architecture Diagram

```
┌───────────────────────────────────────────────────────────────────────┐
│                     CLINICAL WEB INTERFACE                             │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │  • Image Upload Portal          • Real-Time Analysis Display   │  │
│  │  • XAI Visualization Dashboard  • Diagnostic Report Generation │  │
│  │  • Patient Management System    • Export & Integration APIs    │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│           Technology: React.js + Next.js + Flask/FastAPI              │
└───────────────────────────────────────────────────────────────────────┘
                                    ↓
┌───────────────────────────────────────────────────────────────────────┐
│                      PREPROCESSING PIPELINE                            │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │  Input Processing → Normalization → Noise Reduction →           │  │
│  │  CLAHE Enhancement → Color Space Conversion → Cell Segmentation │  │
│  │  Data Augmentation → Quality Control → Feature Extraction       │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│        Technology: OpenCV 4.x + scikit-image + Custom Algorithms      │
└───────────────────────────────────────────────────────────────────────┘
                                    ↓
┌───────────────────────────────────────────────────────────────────────┐
│                 HYBRID CNN-ViT MODEL LAYER                             │
│  ┌──────────────┬──────────────┬──────────────┬──────────────────┐   │
│  │   Leukemia   │ Thalassemia  │    Anemia    │     Malaria      │   │
│  │   Detection  │  Detection   │   Detection  │    Detection     │   │
│  │              │              │              │                  │   │
│  │  CNN Branch  │  CNN Branch  │  CNN Branch  │   CNN Branch     │   │
│  │  ResNet-50   │ EfficientNet │  ResNet-50   │  EfficientNet-B4 │   │
│  │      +       │      +       │      +       │        +         │   │
│  │  ViT-Base    │  ViT-Base    │  ViT-Base    │    ViT-Base      │   │
│  │  (12 layers) │  (12 layers) │  (12 layers) │   (12 layers)    │   │
│  │              │              │              │                  │   │
│  │  Binary +    │  Multi-class │  Binary +    │   Binary +       │   │
│  │  Multi-class │  Carrier     │  Severity    │   Species        │   │
│  │  (ALL/AML)   │  Detection   │  Grading     │   Classification │   │
│  └──────────────┴──────────────┴──────────────┴──────────────────┘   │
│     Technology: TensorFlow 2.x + PyTorch 2.x + Transfer Learning      │
└───────────────────────────────────────────────────────────────────────┘
                                    ↓
┌───────────────────────────────────────────────────────────────────────┐
│                    EXPLAINABLE AI (XAI) LAYER                          │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │  • Grad-CAM: Visual attention heatmaps on blood cell regions    │  │
│  │  • SHAP: Feature importance quantification and contribution     │  │
│  │  • Attention Maps: Transformer attention weight visualization   │  │
│  │  • Clinical Reasoning: AI decision alignment with pathology     │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│         Technology: SHAP + Captum + Custom Visualization Tools        │
└───────────────────────────────────────────────────────────────────────┘
                                    ↓
┌───────────────────────────────────────────────────────────────────────┐
│               DATA STORAGE & MANAGEMENT LAYER                          │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │  • GCP Cloud Storage: Primary image and dataset repository      │  │
│  │  • Firebase Firestore: Real-time collaboration and annotations  │  │
│  │  • PostgreSQL: Structured patient and diagnostic records        │  │
│  │  • MongoDB: Unstructured image metadata and inference logs      │  │
│  │  • DVC: Dataset version control and reproducibility tracking    │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│      Security: AES-256 encryption, TLS 1.3, RBAC, PDPA 2022 compliant │
└───────────────────────────────────────────────────────────────────────┘
```

### Technical Stack Summary

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React.js, Next.js, TailwindCSS, ShadCN UI |
| **Backend** | Flask/FastAPI (Python), RESTful APIs, JWT Auth |
| **AI/ML** | TensorFlow 2.x, PyTorch 2.x, CNN (ResNet-50, EfficientNet), ViT |
| **XAI** | SHAP, Captum, Grad-CAM, Layer-wise Relevance Propagation |
| **Image Processing** | OpenCV 4.x, Pillow, scikit-image, NumPy, SciPy |
| **Database** | MongoDB 6+, Firebase Firestore |
| **Cloud** | Google Cloud Platform (Storage, Compute, Functions) |
| **DevOps** | Docker, GitHub Actions, DVC |
| **Monitoring** | Prometheus, Grafana, Custom health checks |

---

## 📊 Dataset Specifications

### Data Collection Strategy

#### Primary Sources (Sri Lankan Hospitals)

1. **National Cancer Institute (Apeksha Hospital)** - Colombo
   - Focus: Leukemia cases, comprehensive cancer diagnostics
   - Target: ≥500 annotated leukemia blood smear images

2. **Teaching Hospital Kandy** - Kandy
   - Focus: Thalassemia screening, general hematology
   - Target: ≥400 annotated thalassemia images

3. **Teaching Hospital Karapitiya** - Galle
   - Focus: Anemia diagnosis, nutritional deficiency disorders
   - Target: ≥400 annotated anemia images

4. **Anti Malaria campaign - Colombo**
   - Focus: Malaria endemic region data collection
   - Target: ≥400 annotated malaria images

5. **Private Hematology Laboratories** - Colombo Metropolitan
   - Focus: Multi-disease validation, diverse staining protocols
   - Target: ≥300 images across all disease categories

#### Secondary Sources (Public Datasets for Pre-training)

- **ALL-IDB**: Acute Lymphoblastic Leukemia Image Database
- **C-NMC 2020**: Cancer Neural Network Challenge Dataset
- **NIH Malaria Dataset**: Parasitized and uninfected cell images
- **Kaggle Blood Cell Images**: Multi-disease public dataset

### Dataset Composition

| Disease | Target Images | Annotations | Data Split | Balance Strategy |
|---------|--------------|-------------|------------|------------------|
| **Leukemia** | ≥1,000 | ≥2 hematologists | 70/15/15 | Age, sex, ALL/AML subtype balanced |
| **Thalassemia** | ≥1,000 | ≥2 hematologists | 70/15/15 | Carrier status, genetic variation balanced |
| **Anemia** | ≥1,000 | ≥2 hematologists | 70/15/15 | Severity grading (mild/moderate/severe) balanced |
| **Malaria** | ≥1,000 | ≥2 hematologists | 70/15/15 | Parasitized vs. uninfected, species balanced |
| **Total** | **≥4,000** | Multi-expert validation | Train/Val/Test | Multi-institutional diversity |

### Data Preprocessing Pipeline

```python
# Preprocessing Workflow
Raw Blood Smear Image (JPEG/PNG/TIFF)
    ↓
1. Quality Assessment
   - Resolution check (minimum 512×512)
   - Staining quality verification
   - Artifact detection
    ↓
2. Normalization
   - Resize to 1024×1024 pixels
   - Intensity normalization [0, 1]
   - White balance correction
    ↓
3. Noise Reduction
   - Gaussian filtering (σ=1.0)
   - Median filtering (kernel=3×3)
   - Morphological operations
    ↓
4. Contrast Enhancement
   - CLAHE (Contrast Limited Adaptive Histogram Equalization)
   - Histogram equalization
   - Adaptive gamma correction
    ↓
5. Color Space Conversion
   - RGB → Lab (for thalassemia/anemia)
   - RGB → HSV (for malaria)
   - Multi-channel feature extraction
    ↓
6. Cell Segmentation
   - Watershed segmentation
   - U-Net-based semantic segmentation
   - Cellpose 2.0 for overlapping cells
    ↓
7. Data Augmentation (Training Only)
   - Rotation: ±30°
   - Horizontal/Vertical flipping
   - Brightness: ±20%
   - Contrast: ±15%
   - Elastic deformation
    ↓
8. Dataset Splitting
   - Training: 70% (≥2,800 images)
   - Validation: 15% (≥600 images)
   - Testing: 15% (≥600 images)
   - Stratified sampling by disease/severity
    ↓
Preprocessed, Augmented Dataset
Ready for Model Training
```

### Ethical & Legal Compliance

#### Ethics Approvals
- ✅ **SLIIT Research Ethics Committee**: Institutional ethical approval
- ✅ **Ministry of Health (MoH), Sri Lanka**: National health research clearance

#### Data Protection
- ✅ **Personal Data Protection Act (PDPA) 2022**: Full compliance
- ✅ **De-Identification**: Complete removal of PII (names, NIC, contact info)
- ✅ **Informed Consent**: Written consent from all data sources
- ✅ **Secure Storage**: End-to-end encryption (AES-256, TLS 1.3)

---

## 🎯 Performance Metrics & Validation

### Target Performance Benchmarks

| Metric | Target | Baseline (Manual) | Improvement |
|--------|--------|-------------------|-------------|
| **Accuracy** | ≥95.0% | 88-92% | +3-7% |
| **Sensitivity (Recall)** | ≥95.0% | 85-90% | +5-10% |
| **Specificity** | ≥93.0% | 87-91% | +2-6% |
| **Precision (PPV)** | ≥94.0% | 86-90% | +4-8% |
| **F1-Score** | ≥94.5% | 86-91% | +3.5-8.5% |
| **ROC-AUC** | ≥0.97 | 0.89-0.93 | +0.04-0.08 |
| **Inference Time** | <5 sec | 30-45 min | 360-540× faster |
| **Inter-Observer Agreement** | κ ≥0.90 | κ = 0.75-0.82 | +0.08-0.15 |
| **System Uptime** | >99% | N/A (manual) | - |
| **Clinician Satisfaction** | ≥80% | N/A | - |


### Benchmarking Against State-of-the-Art

| Model | Leukemia | Thalassemia | Anemia | Malaria | Avg. |
|-------|----------|-------------|--------|---------|------|
| **Our Hybrid CNN-ViT** | **96.2%** | **95.8%** | **95.4%** | **97.1%** | **96.1%** |
| ALLNet (CNN-only) | 94.1% | - | - | - | 94.1% |
| DeepThal (ML-based) | - | 93.7% | - | - | 93.7% |
| RCNN Anemia Detector | - | - | 93.2% | - | 93.2% |
| CNN Malaria Classifier | - | - | - | 95.8% | 95.8% |
| Manual (Expert Avg.) | 90.5% | 91.2% | 89.8% | 92.4% | 91.0% |

**Note:** Target benchmarks are based on comprehensive literature review. Actual performance will be validated during testing phase (Months 10-12).

---

## 🚀 Installation & Setup

### System Requirements

#### Minimum Requirements (Development)
- **CPU**: 4-core processor (Intel i5/AMD Ryzen 5 or equivalent)
- **RAM**: 8 GB
- **Storage**: 100 GB available space
- **GPU**: Not required (CPU inference supported)
- **OS**: Ubuntu 20.04/22.04, macOS 11+, Windows 10/11

#### Recommended Requirements (Production)
- **CPU**: 8-core processor (Intel Xeon/AMD EPYC)
- **RAM**: 16 GB (32 GB for large-scale deployments)
- **Storage**: 200 GB SSD (NVMe preferred)
- **GPU**: NVIDIA Tesla T4, RTX 3060, or equivalent (8GB+ VRAM)
- **OS**: Ubuntu 22.04 LTS Server
- **Network**: Stable internet connection for cloud services

### Prerequisites

```bash
# Python 3.8 or higher
python --version  # Should be 3.8+

# pip package manager
pip --version

# Git for version control
git --version

# (Optional) NVIDIA GPU with CUDA 11.2+
nvidia-smi
```

### Installation Steps

#### 1. Clone the Repository

```bash
# Clone the project repository
git clone https://github.com/your-org/blood-disorder-detection.git
cd blood-disorder-detection
```

#### 2. Create Virtual Environment

```bash
# Using venv (recommended)
python -m venv venv

# Activate virtual environment
# On Linux/macOS:
source venv/bin/activate
# On Windows:
venv\Scripts\activate
```

#### 3. Install Dependencies

```bash
# Upgrade pip
pip install --upgrade pip

# Install core dependencies
pip install -r requirements.txt

# Install development dependencies (optional)
pip install -r requirements-dev.txt

# Verify installation
python -c "import tensorflow as tf; print(f'TensorFlow {tf.__version__}')"
python -c "import torch; print(f'PyTorch {torch.__version__}')"
```

#### 7. Run the Application

```bash
# Start backend API server
python app.py

# In a separate terminal, start frontend (if applicable)
cd frontend
npm install
npm run dev

# Access the application
# API: http://localhost:5000
# Frontend: http://localhost:3000
```

#### 8. Verify Installation


---

## 👥 Research Team

### Core Development Team

| Name | Student ID | Role | Component | Contact |
|------|-----------|------|-----------|---------|
| **Bandara L.P.B.R.** | IT21147678 | Team Member | Leukemia Detection Module | - |
| **Niwanthika M.A.H.** | IT22570758 | Team Member | Thalassemia Detection Module | - |
| **Udesha S.M.S.** | IT22586902 | Team Member | Anemia Detection Module | - |
| **Liyanahetti L.H.R.S.D** | IT22592088 | Team Member | Malaria Detection Module | - |

### Academic Supervision

| Name | Role | Affiliation |
|------|------|-------------|
| **Ms. Dinithi Pandithage** | Main Supervisor | SLIIT - Department of  CSNE |
| **Ms. Rangi Liyanage** | Co-Supervisor | SLIIT - Department of CSNE |


---

## 🗓️ Project Timeline

### 12-Month Development Roadmap

```
Month 1-3: Data Acquisition & Preprocessing
├── Stakeholder engagement and requirement gathering
├── Ethics approvals (SLIIT, MoH, hospital IRBs)
├── Hospital visits and data collection (≥4,000 images)
├── Expert annotation and quality control
├── Preprocessing pipeline development
└── Deliverable: Annotated, preprocessed dataset

Month 4-8: Model Development & Training
├── CNN-ViT hybrid architecture design
├── Transfer learning and fine-tuning
├── Individual disease model training
│   ├── Leukemia: Binary + multi-class (ALL/AML)
│   ├── Thalassemia: Carrier detection + severity
│   ├── Anemia: IDA detection + severity grading
│   └── Malaria: Parasitized detection + species classification
├── Hyperparameter optimization
├── Model ensembling and fusion
└── Deliverable: Trained models (≥95% accuracy target)

Month 6-10: Explainable AI Integration
├── Grad-CAM implementation and visualization
├── SHAP value calculation and interpretation
├── Attention mechanism visualization
├── Clinical reasoning alignment
├── Clinician feedback sessions
└── Deliverable: XAI-enhanced diagnostic system

Month 9-11: Web Interface Development
├── Frontend design (React + Next.js)
├── Backend API development (Flask/FastAPI)
├── Real-time inference pipeline
├── Database integration (PostgreSQL, MongoDB)
├── Cloud deployment (GCP)
├── Usability testing
└── Deliverable: Production-ready web platform

Month 10-12: Clinical Validation & Testing
├── Cross-institutional validation (≥3 hospitals)
├── Prospective blinded clinical trial (≥1,000 cases)
├── Performance benchmarking
├── Clinician satisfaction surveys
├── System optimization and bug fixes
├── Documentation and user manuals
└── Deliverable: Clinically validated, deployment-ready system

Continuous Activities:
├── Agile sprints (2-week iterations)
├── Daily stand-ups and weekly reviews
├── Literature review and methodology updates
├── Progress reporting to supervisors
└── Research paper drafting
```

---

## 📊 Expected Outcomes & Impact

### Academic Outcomes

#### Publications (Target)
- ✅ **1 Journal Paper**
  
- ✅ **1 Conference Presentation**

#### Research Contributions
1. **First Locally Validated Dataset**: ≥4,000 annotated Sri Lankan blood smear images
2. **Novel Hybrid Architecture**: CNN-ViT fusion optimized for blood cell morphology
3. **Multi-Disease Unified Framework**: Simultaneous detection of 4 blood disorders
4. **Explainability Framework**: Clinical XAI integration (Grad-CAM + SHAP + Attention)
5. **Resource-Constrained Deployment**: Lightweight inference for low-resource hospitals

### Clinical Outcomes

#### Diagnostic Improvements
- **Accuracy**: ≥95% across all disease categories (vs. 88-92% manual)
- **Speed**: <5 seconds per analysis (vs. 30-45 minutes manual)
- **Consistency**: Inter-observer agreement κ ≥0.90 (vs. κ = 0.75-0.82 manual)
- **Early Detection**: 20-30% improvement in early-stage disease identification

#### Healthcare Access
- **Rural Hospitals**: Diagnostic support without specialist hematologists
- **Cost Reduction**: ≥60% reduction in diagnostic costs (vs. HPLC, genetic testing)
- **Throughput**: 100+ samples/day processing capacity
- **Telemedicine**: Remote diagnostic consultation for underserved regions

### Societal Impact

#### Public Health Benefits
- **Timely Treatment**: Faster diagnosis → earlier intervention → improved survival rates
- **Reduced Mortality**: Estimated 10-15% reduction in blood disorder-related deaths
- **Genetic Counseling**: Enhanced thalassemia carrier screening for family planning
- **Epidemic Response**: Rapid malaria outbreak detection and monitoring

#### Economic Impact
- **Healthcare Savings**: Estimated LKR 50-75 million/year in diagnostic costs (national scale)
- **Reduced Hospital Burden**: Decreased need for specialist consultations
- **Commercialization Potential**: Medical device certification and licensing
- **Job Creation**: AI-augmented diagnostic technician roles

#### Equity & Access
- **Geographic Equity**: Equal diagnostic quality in urban and rural hospitals
- **Socioeconomic Equity**: Low-cost solution accessible to all income levels
- **Knowledge Transfer**: Training programs for laboratory technicians
- **Open Science**: Dataset and model release for research community (post-publication)

---

## 🔬 Methodology

### Research Design

**Study Type**: Applied research with clinical validation  
**Approach**: Hybrid quantitative (AI model performance) + qualitative (clinician feedback)  
**Framework**: Agile SCRUM for iterative development

### Development Methodology

#### Phase 1: Requirements Engineering
- **Stakeholder Analysis**: Hematologists, lab technicians, hospital administrators
- **Need Assessment**: Surveys, interviews, workflow observations
- **Functional Requirements**: Feature prioritization using MoSCoW method
- **Non-Functional Requirements**: Performance, security, usability benchmarks

#### Phase 2: Data Engineering
```python
# Data Collection Pipeline
Hospital Data Sources
    ↓
De-Identification (PII removal)
    ↓
Quality Control (resolution, staining, artifacts)
    ↓
Expert Annotation (≥2 hematologists, blind review)
    ↓
Inter-Rater Reliability Check (κ ≥0.85)
    ↓
Dataset Versioning (DVC)
    ↓
Preprocessing (normalization, augmentation, segmentation)
    ↓
Stratified Splitting (70/15/15 train/val/test)
    ↓
Training-Ready Dataset
```

#### Phase 3: Model Development
```
Architecture Design
├── Literature Review: State-of-the-art models (ResNet, ViT, EfficientNet)
├── Baseline Implementation: Transfer learning from ImageNet
├── Hybrid CNN-ViT Design
│   ├── CNN Branch: Local morphological features (ResNet-50)
│   ├── ViT Branch: Global contextual patterns (ViT-Base)
│   ├── Fusion Layer: Multi-scale feature integration
│   └── Classification Head: Disease-specific outputs
│
Training Strategy
├── Transfer Learning: Pre-trained weights (ImageNet, medical datasets)
├── Fine-Tuning: Domain adaptation for blood smear images
├── Hyperparameter Optimization: Bayesian optimization, grid search
├── Regularization: Dropout, L2 regularization, early stopping
├── Data Augmentation: Online augmentation during training
└── Ensemble Learning: Model averaging, stacking, boosting

Evaluation
├── Cross-Validation: 5-fold stratified CV
├── Holdout Testing: Independent test set (15% of data)
├── Cross-Institutional Testing: External validation (≥3 hospitals)
└── Ablation Studies: Component contribution analysis
```

#### Phase 4: Explainability Integration
```
XAI Implementation
├── Grad-CAM: Visual attention heatmaps
│   └── Layer-wise activation maximization
├── SHAP: Feature importance quantification
│   └── Shapley value computation (KernelSHAP, DeepSHAP)
├── Attention Visualization: Transformer attention weights
│   └── Multi-head attention analysis
└── Clinical Alignment: AI reasoning vs. pathology criteria

Validation
├── Clinician Surveys: Explainability effectiveness (Likert scale)
├── Think-Aloud Protocols: Cognitive walkthrough with hematologists
├── Trust Calibration: Decision-making with/without AI explanations
└── Error Analysis: False positive/negative investigation
```

#### Phase 5: Clinical Deployment
```
System Integration
├── API Development: RESTful endpoints (Flask/FastAPI)
├── Frontend Design: Clinical dashboard (React + Next.js)
├── Database Setup: Patient records, inference logs
├── Cloud Deployment: GCP (Cloud Run, Cloud Functions)
└── Security Hardening: HTTPS, JWT auth, RBAC

Testing
├── Unit Tests: Individual component testing (pytest)
├── Integration Tests: End-to-end workflow validation
├── Performance Tests: Load testing, stress testing (Locust)
├── Security Tests: Penetration testing, vulnerability scanning
└── Usability Tests: SUS score ≥75 target

Deployment
├── Pilot Deployment: 1 hospital (Apeksha - Colombo)
├── Staged Rollout: 2 additional hospitals (Kandy, Galle)
├── Production Monitoring: Uptime, latency, error rates
└── Continuous Improvement: Feedback loops, model retraining
```

### Validation Methodology

#### Quantitative Validation
- **Performance Metrics**: Accuracy, sensitivity, specificity, F1-score, ROC-AUC
- **Statistical Significance**: Paired t-tests, McNemar's test (AI vs. manual)
- **Confidence Intervals**: 95% CI for all performance metrics
- **Sample Size**: Power analysis (β = 0.20, α = 0.05) → ≥500 cases/disease

#### Qualitative Validation
- **Clinician Surveys**: System Usability Scale (SUS)
- **Focus Groups**: Thematic analysis of clinician feedback
- **Case Studies**: In-depth analysis of edge cases, failure modes
- **User Acceptance**: Technology Acceptance Model (TAM) framework

#### Cross-Validation
- **Geographic Diversity**: Urban (Colombo) vs. Rural (Kurunegala)
- **Institutional Diversity**: Teaching hospitals vs. District hospitals
- **Equipment Diversity**: Different microscope brands, staining protocols
- **Demographic Diversity**: Age, sex, ethnicity stratification

---

## 📄 License

**Academic Research License**

© 2025-2026 Blood Disorder Detection Research Team, SLIIT

This project is developed as part of academic research at the Sri Lanka Institute of Information Technology (SLIIT). All intellectual property rights are reserved by the research team and the institution.

### Usage Restrictions
- ✅ **Academic Use**: Free for educational and non-commercial research purposes
- ✅ **Citation Required**: Proper attribution in publications and derivative works
- ❌ **Commercial Use**: Requires explicit written permission from research team
- ❌ **Redistribution**: Dataset and models cannot be redistributed without authorization

### Data Access
- **Clinical Dataset**: Restricted access (requires ethics approval, data use agreement)
- **Pre-trained Models**: Available upon request for research collaboration
- **Source Code**: Open-source release planned post-publication (TBD)

For inquiries about collaboration, licensing, or data access:
- **Email**: hemoai25@gmail.com
- **Institution**: Department of Information Technology, SLIIT
- **Supervisors**: Ms. Dinithi Pandithage, Ms. Rangi Liyanage

---

## 🙏 Acknowledgments

### Clinical Collaborators
We extend our sincere gratitude to the following institutions and individuals for their invaluable contributions:

- **National Cancer Institute (Apeksha Hospital)** - Hematology and Oncology Department
- **Teaching Hospital Kandy** - Pathology and Laboratory Services
- **Teaching Hospital Karapitiya** - Hematology Laboratory
- **Kurunegala General Hospital** - Laboratory Medicine Department

### Technical Acknowledgments
- **TensorFlow & PyTorch Communities** - Open-source deep learning frameworks
- **Hugging Face** - Vision Transformer model implementations
- **OpenCV Community** - Image processing libraries
- **Google Cloud Platform** - Educational credits for cloud infrastructure

---

## 📋 Project Status

**Current Phase**: Progress Presentation 1 (PP1)  
**Last Updated**: January 11, 2026  

---

**⭐ If you find this research valuable, please star this repository and cite our work in your publications!**

---

*This README is a living document and will be updated throughout the project lifecycle. For the most recent information, please check the repository or contact the research team.*

**Last Updated**: January 11, 2026  
**Maintained by**: Blood Disorder Detection Research Team, SLIIT
