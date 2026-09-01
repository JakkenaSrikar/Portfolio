export interface SkillCategory {
  title: string;
  isExploring?: boolean;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Programming",
    skills: ["Python", "JavaScript", "Java", "SQL", "TypeScript"]
  },
  {
    title: "Machine Learning & Data",
    skills: ["Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    title: "Computer Vision & Deep Learning",
    skills: ["OpenCV", "CNNs", "MobileNetV2", "U-Net", "Grad-CAM", "Computer Vision"]
  },
  {
    title: "Generative AI",
    skills: ["LangChain", "RAG", "Embeddings", "ChromaDB", "Groq / Whisper", "LLM APIs"]
  },
  {
    title: "Development & Tools",
    skills: ["Git", "GitHub", "Docker", "Streamlit", "Node.js", "VS Code", "AWS"]
  },
  {
    title: "Currently Exploring",
    isExploring: true,
    skills: ["LangGraph", "Multi-Agent Systems", "Tool-Calling", "Ollama"]
  }
];
