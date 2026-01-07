# ML-BASED MICROSCOPIC IMAGE ANALYSIS FOR AUTOMATED DETECTION AND CLASSIFICATION OF BLOOD DISORDERS

**Project ID:** 25-26J-344  
**Institution:** Sri Lanka Institute of Information Technology (SLIIT)  
**Department:** Information Technology  
**Academic Year:** 2025-2026

---

## 📋 Project Overview

This project presents an intelligent, explainable AI-powered diagnostic framework for the automated detection and classification of multiple blood disorders from microscopic blood smear images. The system addresses critical healthcare challenges in Sri Lanka by providing accurate, rapid, and accessible diagnostic support for resource-limited clinical settings.

### Target Diseases

The system is designed to detect and classify four major blood disorders:

1. **Leukemia** - Detection and classification of blood cancer subtypes (ALL, AML)
2. **Thalassemia** - Automated identification of thalassemia 
3. **Anemia** - Detection of iron deficiency anemia and related morphological changes
4. **Malaria** - Identification of parasitized cells and Plasmodium species classification

### Key Features

- **Multi-Disease Detection:** Unified framework capable of detecting multiple blood disorders simultaneously
- **High Accuracy:** Target high diagnostic accuracy for all disease categories
- **Explainable AI:** Integration of Grad-CAM, SHAP, and attention mechanisms for transparent decision-making
- **Real-Time Inference:** Analysis completed in <5 seconds per blood smear image
- **Cost-Effective:** Designed for deployment in low-resource hospital settings
- **Clinical Validation:** Cross-institutional validation across multiple Sri Lankan hospitals
- **User-Friendly Interface:** Web-based platform accessible to healthcare professionals

---

## 👥 Project Team

### Research Team

| Name | Student ID | Component | Role |
|------|-----------|-----------|------|
| Bandara L.P.B.R. | IT21147678 | Leukemia Detection | Lead Developer - Leukemia Module |
| Niwanthika M.A.H. | IT22570758 | Thalassemia Detection | Lead Developer - Thalassemia Module |
| Udesha S.M.S. | IT22586902 | Anemia Detection | Lead Developer - Anemia Module |
| Liyanahetti L.H.R.S.D | IT22592088 | Malaria Detection | Lead Developer - Malaria Module |

### Supervisors

- **Main Supervisor:** Ms. Dinithi Pandithage
- **Co-Supervisor:** Ms. Rangi Liyanage

---

## 🎯 Project Objectives

### Main Objective

To design, develop, and validate an intelligent and explainable AI-based diagnostic system for blood disorder detection, achieving:
- High Diagnostic accuracy for all disease categories
- Real-time inference (<5 seconds per analysis)
- Clinical deployment readiness within 12 months
- Cost-effective solution suitable for Sri Lankan healthcare infrastructure

### Specific Objectives

1. **Data Acquisition & Preparation (Months 1-3)**
   - Collect and annotate ≥4,000 blood smear images from Sri Lankan hospitals
   - Ensure dataset diversity across institutions, demographics, and disease subtypes
   - Implement robust preprocessing pipeline for image standardization

2. **Deep Learning Model Development (Months 4-8)**
   - Develop hybrid CNN-Vision Transformer architectures
   - Achieve ≥95% sensitivity and ≥93% specificity for each disease category
   - Implement multi-class classification for disease subtypes

3. **Explainable AI Integration (Months 6-10)**
   - Integrate Grad-CAM, SHAP, and attention visualization mechanisms
   - Achieve ≥80% clinician satisfaction with explainability features
   - Provide transparent diagnostic reasoning for clinical trust

4. **Clinical Web Platform Development (Months 9-11)**
   - Build responsive, low-cost web interface for clinical deployment
   - Ensure compatibility with diverse hospital IT infrastructure
   - Support both urban tertiary hospitals and rural primary healthcare facilities

5. **Cross-Institutional Validation (Months 10-12)**
   - Validate system across ≥3 hospitals with ≥1,000 patient cases
   - Ensure accuracy variance <3% across different institutional settings
   - Verify robustness across varied imaging equipment and staining protocols

6. **System Optimization & Deployment (Month 12)**
   - Achieve >99% system uptime
   - Ensure compliance with Sri Lankan healthcare data regulations
   - Provide comprehensive documentation for clinical deployment

---

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      USER INTERFACE LAYER                        │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Web-Based Clinical Dashboard (React + Flask/Django)    │   │
│  │  - Image Upload Portal                                   │   │
│  │  - Real-time Analysis Display                           │   │
│  │  - XAI Visualization (Grad-CAM, SHAP, Attention Maps)  │   │
│  │  - Diagnostic Reports & Export                          │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                   PREPROCESSING PIPELINE                         │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  • Normalization (resolution, intensity)                │   │
│  │  • Noise Reduction (artifact removal)                   │   │
│  │  • Augmentation (rotation, flipping, contrast)          │   │
│  │  • Segmentation (CLAHE-enhanced)                        │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                   AI MODEL LAYER (HYBRID CNN-ViT)               │
│  ┌──────────────┬──────────────┬──────────────┬─────────────┐  │
│  │  Leukemia    │  Thalassemia │   Anemia     │   Malaria   │  │
│  │  Detection   │  Detection   │  Detection   │  Detection  │  │
│  │              │              │              │             │  │
│  │  CNN-ViT     │  CNN-ViT     │  CNN-ViT     │  CNN-ViT    │  │
│  │  Ensemble    │  Ensemble    │  Ensemble    │  Ensemble   │  │
│  └──────────────┴──────────────┴──────────────┴─────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                  EXPLAINABLE AI LAYER                            │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  • Grad-CAM (visual attention heatmaps)                 │   │
│  │  • SHAP (feature importance analysis)                   │   │
│  │  • Attention Maps (transformer-based visualization)     │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                  DATA STORAGE & MANAGEMENT                       │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  • Google Cloud Platform (GCP) - Primary Storage        │   │
│  │  • Firebase - Real-time Collaboration                   │   │
│  │  • DVC - Dataset Version Control                        │   │
│  │  • Secure, PDPA-compliant data handling                 │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘





<img width="502" height="863" alt="image" src="https://github.com/user-attachments/assets/b815c7ab-7203-414b-8b3d-67593239a5a3" />





### Technical Architecture Details

#### 1. Image Acquisition & Ingestion
- Secure upload portal for blood smear microscopic images
- Support for various image formats (JPEG, PNG, TIFF)
- Automated metadata extraction and organization

#### 2. Preprocessing Pipeline
- **Normalization:** Standardize resolution (1024×1024) and intensity values
- **Noise Reduction:** Gaussian filtering for artifact removal
- **Contrast Enhancement:** CLAHE (Contrast Limited Adaptive Histogram Equalization)
- **Color Space Conversion:** RGB to Lab/HSV for improved feature extraction
- **Data Augmentation:** Rotation (±30°), horizontal/vertical flipping, brightness/contrast adjustment

#### 3. Disease-Specific Deep Learning Models

**Hybrid CNN-Vision Transformer Architecture:**
- **CNN Branch:** Local morphological feature extraction (cell shape, size, texture)
- **Vision Transformer Branch:** Global contextual pattern recognition
- **Fusion Layer:** Multi-scale feature integration
- **Classification Head:** Multi-class disease classification with confidence scores

**Model Specifications:**
- Input Size: 1024×1024×3 (RGB images)
- CNN Backbone: ResNet-50 / EfficientNet-B4
- Vision Transformer: ViT-Base (12 layers, 768 hidden dimensions)
- Output: Multi-class probabilities for each disease category

#### 4. Explainable AI Integration

**Grad-CAM (Gradient-weighted Class Activation Mapping):**
- Visual heatmaps highlighting diagnostically relevant regions
- Layer-wise activation visualization for CNN features

**SHAP (SHapley Additive exPlanations):**
- Feature importance quantification
- Individual prediction explanations with contribution scores

**Attention Mechanisms:**
- Transformer attention weight visualization
- Multi-head attention pattern analysis

#### 5. Clinical Web Interface
- **Frontend:** React.js with responsive design
- **Backend:** Flask/Django REST API
- **Database:** PostgreSQL for patient records, MongoDB for image metadata
- **Authentication:** Role-based access control (RBAC) for clinical staff
- **Reporting:** Automated PDF report generation with diagnostic insights

---

## 🛠️ Technology Stack

### Deep Learning & AI
- **Frameworks:** TensorFlow 2.x, PyTorch 2.x
- **Model Architectures:** CNN (ResNet-50, EfficientNet), Vision Transformers (ViT)
- **XAI Libraries:** SHAP, Captum, Grad-CAM, Layer-wise Relevance Propagation

### Image Processing
- **Libraries:** OpenCV 4.x, Pillow, scikit-image
- **Preprocessing:** NumPy, SciPy

### Web Development
- **Frontend:** React.js, Next.js, TailwindCSS, ShadCN UI
- **Backend:** Flask/FastAPI (Python), Django (optional)
- **API:** RESTful API design with JWT authentication

### Database & Storage
- **Cloud Storage:** Google Cloud Platform (GCP) - Cloud Storage Buckets
- **Real-time Database:** Firebase Firestore
- **Relational Database:** PostgreSQL 15+
- **NoSQL Database:** MongoDB 6+
- **Version Control:** Data Version Control (DVC)

### Deployment & Infrastructure
- **Containerization:** Docker, Docker Compose
- **Orchestration:** Kubernetes (optional for large-scale deployment)
- **Cloud Platform:** Google Cloud Platform (GCP)
- **CI/CD:** GitHub Actions, GitLab CI/CD
- **Monitoring:** Prometheus, Grafana

### Development Tools
- **Version Control:** Git, GitHub
- **IDE:** PyCharm, Visual Studio Code
- **Project Management:** Jira, Trello, Azure DevOps
- **Collaboration:** Slack, Microsoft Teams

---

## 📊 Dataset Specifications

### Data Sources

#### Primary Data Collection
- **National Cancer Institute (Apeksha Hospital)** - Colombo, Sri Lanka
- **Teaching Hospital Kandy** - Kandy, Sri Lanka
- **Teaching Hospital Karapitiya** - Galle, Sri Lanka
- **Private Hematology Laboratories** - Colombo metropolitan area
- **District Hospitals** - Kurunegala province

#### Public Datasets (for pre-training)
- **ALL-IDB (Acute Lymphoblastic Leukemia Image Database)**
- **C-NMC 2020 (Cancer Neural Network Challenge)**
- **Malaria Cell Images Dataset (NIH)**
- **Blood Cell Images (Kaggle)**

### Dataset Requirements

| Disease | Target Images | Annotations | Balance |
|---------|--------------|-------------|---------|
| Leukemia | ≥1,000 | ≥2 hematologists | Age, sex, subtype balanced |
| Thalassemia | ≥1,000 | ≥2 hematologists | Genetic variation balanced |
| Anemia | ≥1,000 | ≥2 hematologists | Severity-based balanced |
| Malaria | ≥1,000 | ≥2 hematologists | Species-based balanced |
| **Total** | **≥4,000** | - | Multi-institutional |

### Data Preprocessing Pipeline

```
Raw Blood Smear Image
         ↓
    Normalization
    (Resolution: 1024×1024, Intensity: [0, 1])
         ↓
    Noise Reduction
    (Gaussian Filter, Median Filter)
         ↓
    Contrast Enhancement
    (CLAHE, Histogram Equalization)
         ↓
    Color Space Conversion
    (RGB → Lab/HSV)
         ↓
    Cell Segmentation
    (Watershed, U-Net, Cellpose)
         ↓
    Data Augmentation
    (Rotation, Flip, Brightness, Contrast)
         ↓
    Dataset Split
    (70% Train, 15% Validation, 15% Test)
         ↓
    Preprocessed Dataset
```

### Ethical Considerations
- **Ethics Approval:** SLIIT Research Ethics Committee + Ministry of Health (MoH)
- **Data Protection:** Compliance with Sri Lanka's Personal Data Protection Act (PDPA) 2022
- **Anonymization:** Complete removal of personally identifiable information (PII)
- **Consent:** Informed consent obtained from all data sources
- **Security:** End-to-end encryption, secure cloud storage with access controls

---

## 🔬 Methodology

### Development Approach: Agile SCRUM

**Sprint Duration:** 2 weeks  
**Total Sprints:** 6 sprints over 12 months

#### Sprint Structure
1. **Sprint Planning:** Define sprint goals, user stories, and acceptance criteria
2. **Daily Stand-ups:** 15-minute daily synchronization meetings
3. **Sprint Review:** Demonstration of completed features to supervisors and clinical stakeholders
4. **Sprint Retrospective:** Team reflection and process improvement

### Project Phases

#### Phase 1: Requirement Analysis & Data Collection (Months 1-3)
- Conduct stakeholder interviews with hematologists and laboratory technicians
- Perform field observations in hospital laboratories
- Collect and annotate blood smear images from Sri Lankan hospitals
- Establish data governance and ethical compliance frameworks

#### Phase 2: Data Preprocessing & Model Development (Months 4-8)
- Implement preprocessing pipeline (normalization, augmentation, segmentation)
- Develop individual disease detection models (CNN-ViT hybrids)
- Train and optimize models using transfer learning
- Conduct iterative model evaluation and hyperparameter tuning

#### Phase 3: Explainable AI Integration (Months 6-10)
- Integrate Grad-CAM visualization for attention heatmaps
- Implement SHAP for feature importance analysis
- Develop attention mechanism visualization for Vision Transformers
- Conduct clinician feedback sessions for XAI effectiveness evaluation

#### Phase 4: Interface Design & System Integration (Months 9-11)
- Design and develop web-based clinical dashboard
- Implement real-time inference pipeline
- Integrate all disease detection modules into unified platform
- Conduct usability testing with healthcare professionals

#### Phase 5: Clinical Validation & Testing (Months 10-12)
- Deploy system in pilot hospitals for validation
- Conduct cross-institutional testing across ≥3 hospitals
- Collect clinician feedback and performance metrics
- Refine system based on clinical validation results

#### Phase 6: Deployment & Documentation (Month 12)
- Optimize system for production deployment
- Prepare comprehensive documentation (user manuals, technical specifications)
- Conduct training sessions for hospital staff
- Establish maintenance and support protocols

---

## 📈 Performance Metrics & Validation

### Target Performance Metrics

| Metric | Target Value | Description |
|--------|-------------|-------------|
| **Accuracy** | ≥95% | Overall classification accuracy |
| **Sensitivity (Recall)** | ≥95% | True positive rate (disease detection) |
| **Specificity** | ≥93% | True negative rate (healthy cell identification) |
| **Precision** | ≥94% | Positive predictive value |
| **F1-Score** | ≥94% | Harmonic mean of precision and recall |
| **ROC-AUC** | ≥0.97 | Area under ROC curve |
| **Inference Time** | <5 seconds | Time per blood smear analysis |
| **System Uptime** | >99% | Availability for clinical use |
| **Clinician Satisfaction** | ≥80% | XAI explainability satisfaction |

### Validation Strategy

#### Cross-Validation
- **K-Fold Cross-Validation:** 5-fold stratified cross-validation during training
- **Cross-Institutional Validation:** Testing across multiple hospitals to ensure generalizability

#### Clinical Validation
- **Prospective Study:** Real-world testing in clinical laboratories
- **Blinded Evaluation:** Comparison with expert hematologist diagnoses
- **Inter-Rater Reliability:** Agreement analysis between AI system and multiple clinicians

#### Benchmarking
- Comparison with existing state-of-the-art models:
  - ALLNet (Leukemia detection)
  - DeepThal (Thalassemia prediction)
  - Malaria detection CNNs
  - Anemia classification systems

---

## 💰 Budget & Resources

### Estimated Budget

| Category | Cost (LKR) | Justification |
|----------|-----------|---------------|
| **Database & Storage** | 45,000 | GCP Cloud Storage, Firebase for real-time collaboration, long-term image storage |
| **Travel & Field Visits** | 5,000 | Hospital visits for data collection across Colombo, Kandy, Galle, Kurunegala |
| **Miscellaneous** | 2,000 | Internet, report writing, printing, contingency |
| **Total** | **52,000** | - |

**Note:** This is a software-only project with minimal hardware requirements, leveraging cloud infrastructure and existing hospital equipment.

### Justification for Cost-Effectiveness
- **Cloud-Based Architecture:** Pay-as-you-go model minimizes upfront infrastructure costs
- **Open-Source Technologies:** TensorFlow, PyTorch, OpenCV reduce licensing expenses
- **Academic Resources:** University computational resources and research facilities
- **Collaborative Data Collection:** Partnership with hospitals eliminates data acquisition costs

---

## 📚 Research Contributions

### Scientific Novelty

1. **First Multi-Disease Blood Disorder Detection System in Sri Lanka**
   - Unified framework for simultaneous detection of leukemia, thalassemia, anemia, and malaria
   - Addresses multiple public health challenges in a single integrated platform

2. **Locally Validated Dataset**
   - First large-scale, annotated blood disorder dataset from Sri Lankan hospitals
   - Accounts for local variations in staining, imaging, and patient demographics

3. **Hybrid CNN-Vision Transformer Architecture**
   - Novel integration of local morphological features (CNN) and global contextual patterns (ViT)
   - Optimized for blood smear image analysis

4. **Clinical Explainability Framework**
   - Comprehensive XAI integration (Grad-CAM, SHAP, attention mechanisms)
   - Designed specifically for clinician trust and adoption in Sri Lankan healthcare

5. **Resource-Constrained Deployment**
   - Lightweight, cost-effective solution for low-resource hospital settings
   - Mobile-compatible inference for point-of-care diagnostics

### Expected Research Outputs

- **Publications:** ≥1 peer-reviewed journal paper (IEEE, Springer, MDPI)
- **Conference Presentations:** ≥1 international conference (ICML, NeurIPS, MICCAI)
- **Technical Reports:** Comprehensive documentation for clinical deployment
- **Open-Source Contributions:** Dataset and model release for research community (subject to ethical approval)

### Societal Impact

- **Reduced Diagnostic Time:** ≥50% reduction compared to manual examination
- **Improved Healthcare Access:** Diagnostic support for rural and underserved regions
- **Reduced Healthcare Costs:** Lower dependency on expensive imported diagnostic systems
- **Enhanced Patient Outcomes:** Earlier disease detection and treatment initiation
- **Standardized Diagnostics:** Reduced inter-observer variability across hospitals

---

## 🔒 Data Privacy & Security

### Compliance Framework

#### Sri Lankan Regulations
- **Personal Data Protection Act (PDPA) 2022:** Full compliance with national data protection laws
- **Ministry of Health Guidelines:** Adherence to MoH data governance protocols
- **SLIIT Research Ethics Committee:** Ethical approval for all data collection activities

#### International Standards (Reference)
- **HIPAA Principles:** Health Insurance Portability and Accountability Act (USA) guidelines
- **GDPR Principles:** General Data Protection Regulation (EU) best practices

### Security Measures

1. **Data Anonymization**
   - Complete removal of personally identifiable information (PII)
   - De-identification of patient records before model training
   - Secure key management for re-identification (if required for clinical follow-up)

2. **Encryption**
   - **Data at Rest:** AES-256 encryption for stored images and patient data
   - **Data in Transit:** TLS 1.3 encryption for all network communications
   - **End-to-End Encryption:** Secure transmission from hospital to cloud storage

3. **Access Controls**
   - **Role-Based Access Control (RBAC):** Granular permissions for clinical staff
   - **Multi-Factor Authentication (MFA):** Required for all system access
   - **Audit Logging:** Comprehensive tracking of all data access and modifications

4. **Cloud Security**
   - **GCP Security:** Leveraging Google Cloud Platform's enterprise-grade security
   - **Firewall Rules:** Strict network access policies
   - **DDoS Protection:** Distributed denial-of-service attack mitigation

---

## 🚀 Deployment & Scalability

### Deployment Strategy

#### Pilot Deployment (Month 11-12)
- **Phase 1:** Deploy in 1 tertiary care hospital (Colombo)
- **Phase 2:** Expand to 2 additional hospitals (Kandy, Galle)
- **Phase 3:** Rural hospital deployment (Kurunegala district)

#### Production Deployment (Post-Project)
- **Hospital Information System (HIS) Integration:** API-based integration with existing HIS
- **Telemedicine Platform:** Remote diagnostic support for rural healthcare facilities
- **Mobile Application:** Point-of-care diagnostics using smartphone cameras

### Scalability Considerations

1. **Horizontal Scalability**
   - Dockerized microservices architecture for independent component scaling
   - Load balancing for high-throughput clinical environments
   - Auto-scaling based on diagnostic request volume

2. **Vertical Scalability**
   - GPU-accelerated inference for faster processing
   - Model optimization (quantization, pruning) for resource-constrained devices

3. **Data Scalability**
   - Cloud storage with unlimited expansion capacity
   - Distributed database architecture for large-scale patient records

4. **Geographic Scalability**
   - Multi-region deployment for nationwide coverage
   - Edge computing nodes for rural areas with limited internet connectivity

---

## 🔮 Future Directions

### Short-Term Enhancements (Year 1-2)

1. **Additional Blood Disorders**
   - Sickle cell disease detection
   - Hemolytic anemia classification
   - Other rare hematological conditions

2. **Advanced AI Techniques**
   - Self-supervised learning for data efficiency
   - Federated learning for privacy-preserving multi-hospital collaboration
   - Contrastive learning for improved feature representation

3. **Mobile Application**
   - Smartphone-based blood smear capture and analysis
   - Offline inference capability for remote areas
   - Real-time diagnostic feedback for point-of-care settings

### Long-Term Vision (Year 3-5)

1. **Comprehensive Hematology AI Platform**
   - Integration with complete blood count (CBC) analyzers
   - Bone marrow biopsy analysis
   - Coagulation disorder detection

2. **Personalized Medicine**
   - Treatment response prediction
   - Disease progression modeling
   - Risk stratification for targeted interventions

3. **Regional Expansion**
   - Deployment across South Asian countries
   - Collaboration with WHO for global health initiatives
   - Dataset sharing and model adaptation for diverse populations

4. **Commercial Viability**
   - Medical device certification (ISO 13485)
   - Regulatory approval (FDA, CE marking)
   - Licensing to healthcare technology companies

---

## 📞 Contact Information

### Project Team

**Lead Researchers:**
- Bandara L.P.B.R. (Leukemia) - IT21147678
- Niwanthika M.A.H. (Thalassemia) - IT22570758
- Udesha S.M.S. (Anemia) - IT22586902
- Liyanahetti L.H.R.S.D (Malaria) - IT22592088

**Supervisors:**
- Ms. Dinithi Pandithage (Main Supervisor)
- Ms. Rangi Liyanage (Co-Supervisor)

**Institution:**
Department of Information Technology  
Sri Lanka Institute of Information Technology (SLIIT)  
New Kandy Road, Malabe, Sri Lanka

**Email:** [Project email to be added]  
**Website:** [Project website to be added]

---

## 📄 License

This project is developed as part of academic research at SLIIT. All intellectual property rights are reserved by the research team and the institution. For inquiries about collaboration, dataset access, or commercial licensing, please contact the supervisors.

---

## 🙏 Acknowledgments

We extend our sincere gratitude to:

- **Clinical Collaborators:** Hematologists and laboratory technicians at National Cancer Institute (Apeksha Hospital), Teaching Hospital Kandy, Teaching Hospital Karapitiya, and district hospitals across Sri Lanka
- **SLIIT Research Ethics Committee:** For ethical approval and guidance
- **Ministry of Health, Sri Lanka:** For support and data access permissions
- **Supervisors:** Ms. Dinithi Pandithage and Ms. Rangi Liyanage for their continuous guidance
- **Open-Source Community:** For providing essential frameworks and datasets (TensorFlow, PyTorch, OpenCV)

---

## 📚 References

### Key Publications Informing This Research

**Leukemia Detection:**
1. Walter, W., et al. (2021). "How artificial intelligence might disrupt diagnostics in hematology in the near future." *Oncogene*, 40(25), 4271–4280.
2. Genovese, A. (2022). "ALLNet: Acute Lymphoblastic Leukemia Detection Using Lightweight Convolutional Networks." *IEEE CIVEMSA*.

**Thalassemia Detection:**
3. Christensen, F., et al. "Classification of α-thalassemia data using machine learning models." *Computer Methods and Programs in Biomedicine*.
4. Phirom, K., et al. "DeepThal: A Deep Learning-Based Framework for the Large-Scale Prediction of the α+-Thalassemia Trait." *Journal of Clinical Medicine*.

**Anemia Detection:**
5. Navya K.T., et al. (2025). "Efficient diagnostic model for iron deficiency anaemia detection: a comparison of CNN and object detection algorithms." *Automatika*.
6. Riaz Ullah Khan, et al. (2024). "An intelligent neural network model to detect red blood cells for various blood structure classification." *Heliyon*.

**Malaria Detection:**
7. Poostchi, M., et al. (2018). "Image analysis and machine learning for Detecting Malaria." *Crossmark*.
8. AL Kafaf, D., et al. (2024). "Malaria Disease Prediction Based on Convolutional Neural Networks." *Journal of Applied Engineering and Technological Science*.

**Explainable AI:**
9. Gimeno, M., et al. (2022). "Explainable artificial intelligence for precision medicine in acute myeloid leukemia." *Frontiers in Immunology*, 13.
10. Hehr, M., et al. (2023). "Explainable AI identifies diagnostic cells of genetic AML subtypes." *PLOS Digital Health*, 2(3), e0000187.

---

**Last Updated:** January 2026  
**Version:** 1.0  
**Project Status:** In Development (PP1 Phase)

---

*This README is a living document and will be updated throughout the project lifecycle to reflect progress, changes, and new findings.*
