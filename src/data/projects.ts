export interface ProjectPipelineStep {
  label: string;
  description?: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string | null;
  highlight: string;
  features: string[];
  pipeline: ProjectPipelineStep[];
  dataset: string;
  methodology: string[];
  results: string[];
  challenges: string[];
  futureScope: string[];
  thumbnail: string;
}

export const projects: ProjectDetail[] = [
  {
    slug: "rag-document-qa",
    title: "RAG-Based Document Q&A Chatbot",
    subtitle: "Context-Aware Document Retrieval & Multi-Step QA System",
    category: "Generative AI & LLMs",
    description: "A retrieval-augmented generation (RAG) chatbot enabling users to upload PDF documents and ask natural-language questions, with responses strictly grounded in retrieved source content.",
    problem: "Standard Large Language Models often hallucinate or lack access to private, domain-specific documents when queried, making them unreliable for proprietary document analysis.",
    solution: "Built an end-to-end RAG pipeline using LangChain and ChromaDB that extracts text from PDFs, creates dense semantic embeddings, retrieves relevant chunks via vector similarity search, and provides context-grounded answers without hallucinations.",
    technologies: ["Python", "LangChain", "ChromaDB", "Gemini API", "OpenAI API", "Streamlit", "Vector Embeddings"],
    githubUrl: "https://github.com/JakkenaSrikar/RAG-Document-QA-Chatbot",
    demoUrl: "https://rag-document-chatbot-questionandanswer.streamlit.app/",
    highlight: "Grounded Retrieval via ChromaDB",
    features: [
      "PDF upload and automated text extraction pipeline",
      "Semantic text chunking with overlapping bounds for context preservation",
      "Vector embeddings and cosine similarity search using ChromaDB",
      "Prompt orchestration via LangChain enforcing strict source grounding",
      "Interactive, responsive conversational UI built with Streamlit"
    ],
    pipeline: [
      { label: "PDF Upload", description: "User uploads PDF files via Streamlit UI" },
      { label: "Text Extraction", description: "Extracts raw text content across all pages" },
      { label: "Semantic Chunking", description: "Splits text into chunks with 200-token overlaps" },
      { label: "Vector Embeddings", description: "Generates high-dimensional dense embeddings" },
      { label: "ChromaDB Storage", description: "Indexes vectors and metadata for fast similarity lookup" },
      { label: "Similarity Search", description: "Retrieves top-K relevant chunks for user question" },
      { label: "Grounded LLM Answer", description: "Synthesizes final answer constrained to retrieved context" }
    ],
    dataset: "Tested across multi-page technical documentation, contracts, research papers, and domain reports to evaluate retrieval accuracy and answer grounding.",
    methodology: [
      "Built a modular document ingestion pipeline that cleans raw text and chunks it into coherent segments.",
      "Embedded text chunks using embedding models and stored representations in a local ChromaDB instance.",
      "Applied cosine-similarity scoring to match user queries with the most relevant document segments.",
      "Engineered prompt templates in LangChain that instruct the LLM to answer solely using retrieved passages or explicitly state when context is insufficient."
    ],
    results: [
      "Eliminated out-of-context hallucinations through context-constrained prompt boundaries.",
      "Maintained sub-2 second query-to-response latency on multi-page PDF documents.",
      "Delivered a seamless user experience using Streamlit state management."
    ],
    challenges: [
      "PDF Layout Artifacts: Overcame irregular headers, footers, and table formats using regex preprocessing and structured chunk boundaries.",
      "Context Window Management: Tuned chunk sizes and top-K retrieval parameters to maximize relevance without overflowing token limits."
    ],
    futureScope: [
      "Incorporate Agentic RAG workflows with LangGraph for multi-document reasoning and comparative analysis.",
      "Add multimodal OCR processing for document diagrams and charts."
    ],
    thumbnail: "/images/rag-chatbot-thumbnail.svg"
  },
  {
    slug: "brain-tumor-ai",
    title: "Hybrid Brain Tumor Detection & Classification System",
    subtitle: "Deep Feature Extraction, U-Net Segmentation & Explainable AI",
    category: "Medical AI & Computer Vision",
    description: "A hybrid medical AI pipeline combining U-Net segmentation for tumor boundary detection and MobileNetV2 for deep feature extraction on 3,000+ MRI images and the benchmark BraTS Dataset.",
    problem: "Manual MRI tumor detection and boundary identification is time-consuming, prone to inter-observer variability, and classical 'black-box' deep learning models lack interpretability for clinical trust.",
    solution: "Designed a hybrid pipeline integrating U-Net for spatial segmentation, MobileNetV2 for transfer-learned feature extraction, SVM/Random Forest for 4-class classification, and Grad-CAM for visual explainability.",
    technologies: ["Python", "TensorFlow", "Keras", "MobileNetV2", "U-Net", "Grad-CAM", "SVM", "Random Forest", "Scikit-learn", "OpenCV"],
    githubUrl: "https://github.com/JakkenaSrikar/brain-tumor-ai",
    demoUrl: "https://huggingface.co/spaces/JakkenaSrikar/brain-tumor-system",
    highlight: "96% Accuracy on BraTS Dataset",
    features: [
      "Dual pipeline combining U-Net pixel-level segmentation with classification",
      "Deep feature extraction using pre-trained MobileNetV2 architecture",
      "4-class classification (Glioma, Meningioma, Pituitary, No Tumor) via SVM and Random Forest",
      "96% classification accuracy on benchmark 3,000+ MRI images and BraTS Dataset",
      "Grad-CAM explainable AI heatmaps showing model focus regions for clinical transparency"
    ],
    pipeline: [
      { label: "MRI Scan (T2)", description: "Axial T2-weighted brain MRI input" },
      { label: "CLAHE Preprocessing", description: "Contrast enhancement and noise filtering" },
      { label: "U-Net Segmentation", description: "Generates precise pixel-wise tumor boundary mask" },
      { label: "MobileNetV2 Extraction", description: "Extracts deep convolutional feature representations" },
      { label: "SVM / Random Forest", description: "Predicts tumor class with 96% accuracy" },
      { label: "Grad-CAM Heatmap", description: "Overlays decision-critical activation regions" }
    ],
    dataset: "3,000+ MRI images and benchmark BraTS Dataset encompassing Glioma, Meningioma, Pituitary, and No-Tumor scans.",
    methodology: [
      "Preprocessed MRI scans with Contrast-Limited Adaptive Histogram Equalization (CLAHE) to enhance tumor contrast.",
      "Trained a symmetric U-Net encoder-decoder architecture to output binary tumor localization masks.",
      "Extracted high-level convolutional feature vectors from MRI slices using MobileNetV2.",
      "Trained Support Vector Machine (SVM) and Random Forest classifiers on the extracted feature vectors for robust classification.",
      "Integrated Grad-CAM to generate visual heatmaps of the final convolutional layer to verify diagnostic focus areas."
    ],
    results: [
      "Achieved 96% classification accuracy across all 4 tumor categories on benchmark datasets.",
      "Generated high-precision pixel boundary masks for tumor localization.",
      "Validated diagnostic reliability with Grad-CAM overlays aligned to tumor positions."
    ],
    challenges: [
      "Low Contrast in MRI Scans: Overcome using CLAHE contrast enhancement during preprocessing.",
      "Class Imbalance: Applied selective data augmentation (elastic deformations, affine transforms) on minority tumor classes."
    ],
    futureScope: [
      "Extend pipeline to volumetric 3D MRI scans using 3D U-Net architectures.",
      "Deploy as an automated diagnostic API for clinical decision support workflows."
    ],
    thumbnail: "/images/brain-tumor-thumbnail.svg"
  },
  {
    slug: "signbridge-ai",
    title: "Real-Time Sign Language Recognition System",
    subtitle: "CNN-Based ASL Gesture Recognition to Text",
    category: "Computer Vision & Deep Learning",
    description: "An end-to-end CNN-based gesture recognition system translating American Sign Language (ASL) hand gestures into text with 92% accuracy in real time.",
    problem: "Communication barriers exist between the deaf/hard-of-hearing community and individuals who do not understand sign language, requiring accessible, low-latency translation tools.",
    solution: "Engineered a real-time computer vision and deep learning application using OpenCV and a custom Convolutional Neural Network that captures live webcam frames, isolates hand gestures, and translates them into text with 92% accuracy.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Computer Vision", "NumPy"],
    githubUrl: "https://github.com/JakkenaSrikar/Sign-Language-Recognition-System",
    demoUrl: "https://sign-language-recognition-system.streamlit.app/",
    highlight: "92% Real-Time Recognition Accuracy",
    features: [
      "Real-time webcam video stream capture and hand gesture processing",
      "Custom Convolutional Neural Network (CNN) architecture for spatial gesture learning",
      "92% accuracy in translating American Sign Language (ASL) gestures to text",
      "Robust preprocessing pipeline with frame extraction, normalization, and augmentation",
      "Sub-second inference latency running on consumer hardware without dedicated GPUs"
    ],
    pipeline: [
      { label: "Live Webcam Stream", description: "Captures continuous video frames at 30+ FPS" },
      { label: "Frame Extraction", description: "Isolates hand Region of Interest (ROI)" },
      { label: "Normalization & Augmentation", description: "Standardizes lighting and hand positioning" },
      { label: "CNN Feature Learning", description: "Extracts spatial hand shape characteristics" },
      { label: "Real-Time Classification", description: "Outputs predicted ASL character with 92% accuracy" }
    ],
    dataset: "Extensive dataset of American Sign Language (ASL) hand signs covering individual alphabet letters and common gestures across varied angles and lighting conditions.",
    methodology: [
      "Designed and trained a custom Convolutional Neural Network (CNN) optimized for spatial hand shape feature learning.",
      "Built an OpenCV preprocessing pipeline performing background subtraction, skin-color thresholding, and contour extraction.",
      "Applied extensive data augmentation (rotations, zooms, brightness shifts) to ensure robust generalization across real-world environments."
    ],
    results: [
      "Achieved 92% classification accuracy in real-time testing.",
      "Maintained smooth 30+ FPS processing speed on standard laptop webcams without GPU acceleration.",
      "Demonstrated reliable gesture recognition across varying lighting environments."
    ],
    challenges: [
      "Lighting Variations: Mitigated using dynamic adaptive thresholding and normalized color spaces.",
      "Similar Gesture Distinctions: Refined CNN filter architectures and edge detection to differentiate visually close hand shapes."
    ],
    futureScope: [
      "Expand gesture vocabulary to continuous sentence-level recognition using temporal models (LSTM / Transformers).",
      "Integrate real-time text-to-speech audio synthesis for two-way communication."
    ],
    thumbnail: "/images/signbridge-thumbnail.svg"
  }
];
