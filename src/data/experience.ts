export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "deify-infocomm",
    company: "Deify Infocomm Solutions Private Limited",
    role: "Front-End Web Developer Intern",
    period: "Jul 2024 – Jan 2025",
    location: "Hyderabad, India",
    description: [
      "Architected and deployed an IP-based real-time video conferencing platform, achieving a 30% increase in user engagement during beta testing with 200+ users.",
      "Developed responsive UI components for a real-time communication platform using HTML, CSS, JavaScript, and jQuery.",
      "Reduced page load time by optimizing CSS and JavaScript bundles, improving performance across 5+ responsive UI components."
    ]
  }
];
