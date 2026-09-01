export interface Profile {
  name: string;
  fullName: string;
  title: string;
  headline: string;
  subheadline: string;
  description: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  statusBadge: string;
  educationShort: {
    degree: string;
    major: string;
    institution: string;
    gradYear: string;
    cgpa: string;
    focus: string;
  };
  certifications: {
    title: string;
    issuer: string;
    year: string;
  }[];
}

export const profile: Profile = {
  name: "Srikar Jakkena",
  fullName: "Srikar Jakkena",
  title: "AI/ML Engineer",
  headline: "Hi, I'm Srikar Jakkena.",
  subheadline: "Computer Vision • Generative AI • Python",
  description: "I build practical AI systems that turn machine learning research into usable applications—from computer vision and medical imaging to real-time sign language recognition and retrieval-augmented generation.",
  email: "jakkenasrikar007@gmail.com",
  location: "Karimnagar, Telangana, India",
  linkedin: "https://www.linkedin.com/in/jakkena-srikar/",
  github: "https://github.com/JakkenaSrikar",
  resumeUrl: "/resume/RESUME_SRIKAR_JAKKENA.pdf",
  statusBadge: "Open to AI/ML & Software Engineering Opportunities",
  educationShort: {
    degree: "B.Tech CSE",
    major: "AI & ML",
    institution: "Kakatiya Institute of Technology & Sciences (KITS)",
    gradYear: "2026",
    cgpa: "8.14",
    focus: "AI/ML • Computer Vision • GenAI"
  },
  certifications: [
    {
      title: "AI Upskilling Certificate: Hands-On Development from Model to App",
      issuer: "Qualcomm Academy",
      year: "2025"
    },
    {
      title: "Front-End Web Development",
      issuer: "Deify Infocomm Solutions Private Limited",
      year: "2025"
    }
  ]
};
