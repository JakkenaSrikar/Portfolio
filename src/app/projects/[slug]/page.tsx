import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle,
  Cpu,
  Eye,
  Database,
  Code,
  ShieldAlert,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Layers,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "@/components/UI/SocialIcons";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Render project architecture pipeline flowcharts
  const renderArchitectureDiagram = () => {
    switch (project.slug) {
      case "rag-document-qa":
        return (
          <div className="w-full py-8 px-5 bg-zinc-950 rounded-2xl border border-zinc-800/80 overflow-x-auto no-scrollbar">
            <div className="flex flex-col md:flex-row items-center justify-between min-w-[720px] gap-3">
              <div className="flex flex-col items-center p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl w-28 text-center shadow-md">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">PDF Upload</span>
                <span className="text-[9px] text-zinc-400 mt-1">Raw Document</span>
              </div>
              <div className="text-zinc-600 font-bold">➔</div>
              <div className="flex flex-col items-center p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl w-32 text-center shadow-md">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">Text Chunking</span>
                <span className="text-[9px] text-zinc-400 mt-1">Semantic Overlap</span>
              </div>
              <div className="text-zinc-600 font-bold">➔</div>
              <div className="flex flex-col items-center p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl w-32 text-center shadow-md border-green-500/20 bg-green-500/5">
                <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider font-mono">ChromaDB</span>
                <span className="text-[9px] text-zinc-400 mt-1">Vector Storage</span>
              </div>
              <div className="text-zinc-600 font-bold">➔</div>
              <div className="flex flex-col items-center p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl w-32 text-center shadow-md">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">Vector Query</span>
                <span className="text-[9px] text-zinc-400 mt-1">Cosine Similarity</span>
              </div>
              <div className="text-zinc-600 font-bold">➔</div>
              <div className="flex flex-col items-center p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl w-32 text-center shadow-md border-blue-500/20 bg-blue-500/5">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider font-mono">LangChain + LLM</span>
                <span className="text-[9px] text-zinc-400 mt-1">Grounded Output</span>
              </div>
            </div>
            <div className="text-center text-[11px] text-zinc-500 font-mono mt-5">
              Pipeline Flow: PDF Ingestion ➔ Semantic Splitting ➔ ChromaDB Vector Search ➔ Context-Constrained Prompting ➔ Grounded Answer
            </div>
          </div>
        );
      case "brain-tumor-ai":
        return (
          <div className="w-full space-y-6 py-6 px-5 bg-zinc-950 rounded-2xl border border-zinc-800/80 overflow-x-auto no-scrollbar">
            {/* Classification Pipeline */}
            <div className="space-y-2.5 min-w-[700px]">
              <div className="text-xs font-bold text-blue-400 font-mono uppercase tracking-wider">
                1. Dual Classification &amp; Explainability Pipeline
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col items-center p-3 bg-zinc-900 border border-zinc-800 rounded-xl w-28 text-center shadow-md">
                  <span className="text-[10px] font-bold text-zinc-200 font-mono">MRI SCAN (T2)</span>
                </div>
                <div className="text-zinc-600">➔</div>
                <div className="flex flex-col items-center p-3 bg-zinc-900 border border-zinc-800 rounded-xl w-32 text-center shadow-md">
                  <span className="text-[10px] font-bold text-zinc-200 font-mono">CLAHE ENHANCE</span>
                  <span className="text-[8px] text-zinc-400 mt-0.5">Preprocessing</span>
                </div>
                <div className="text-zinc-600">➔</div>
                <div className="flex flex-col items-center p-3 bg-zinc-900 border border-zinc-800 rounded-xl w-32 text-center shadow-md">
                  <span className="text-[10px] font-bold text-zinc-200 font-mono">MOBILENET V2</span>
                  <span className="text-[8px] text-blue-400 mt-0.5">Deep Features</span>
                </div>
                <div className="text-zinc-600">➔</div>
                <div className="flex flex-col items-center p-3 bg-zinc-900 border border-zinc-800 rounded-xl w-32 text-center shadow-md">
                  <span className="text-[10px] font-bold text-zinc-200 font-mono">SVM / RF HEAD</span>
                  <span className="text-[8px] text-green-400 mt-0.5">96% Accuracy</span>
                </div>
                <div className="text-zinc-600">➔</div>
                <div className="flex flex-col items-center p-3 bg-zinc-900 border border-zinc-800 rounded-xl w-32 text-center shadow-md bg-blue-900/10 border-blue-900/40">
                  <span className="text-[10px] font-bold text-blue-400 font-mono">GRAD-CAM (XAI)</span>
                  <span className="text-[8px] text-zinc-400 mt-0.5">Visual Heatmap</span>
                </div>
              </div>
            </div>

            {/* Segmentation Pipeline */}
            <div className="space-y-2.5 min-w-[700px] pt-4 border-t border-zinc-900">
              <div className="text-xs font-bold text-red-400 font-mono uppercase tracking-wider">
                2. Pixel-Level Tumor Boundary Segmentation
              </div>
              <div className="flex items-center justify-start gap-4">
                <div className="flex flex-col items-center p-3 bg-zinc-900 border border-zinc-800 rounded-xl w-28 text-center shadow-md">
                  <span className="text-[10px] font-bold text-zinc-200 font-mono">MRI SCAN (T2)</span>
                </div>
                <div className="text-zinc-600">➔</div>
                <div className="flex flex-col items-center p-3 bg-zinc-900 border border-zinc-800 rounded-xl w-32 text-center shadow-md">
                  <span className="text-[10px] font-bold text-zinc-200 font-mono">U-NET CORE</span>
                  <span className="text-[8px] text-red-400 mt-0.5">Encoder-Decoder</span>
                </div>
                <div className="text-zinc-600">➔</div>
                <div className="flex flex-col items-center p-3 bg-zinc-900 border border-zinc-800 rounded-xl w-36 text-center shadow-md bg-red-900/10 border-red-900/40">
                  <span className="text-[10px] font-bold text-red-400 font-mono">SEGMENTATION MASK</span>
                  <span className="text-[8px] text-zinc-400 mt-0.5">Spatial Boundaries</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "signbridge-ai":
        return (
          <div className="w-full py-8 px-5 bg-zinc-950 rounded-2xl border border-zinc-800/80 overflow-x-auto no-scrollbar">
            <div className="flex flex-col md:flex-row items-center justify-between min-w-[680px] gap-3">
              <div className="flex flex-col items-center p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl w-32 text-center shadow-md">
                <Eye className="w-5 h-5 text-blue-500 mb-1.5" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">Webcam Feed</span>
                <span className="text-[9px] text-zinc-400 mt-0.5">30+ FPS capture</span>
              </div>
              <div className="text-zinc-600 font-bold">➔</div>
              <div className="flex flex-col items-center p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl w-36 text-center shadow-md">
                <Code className="w-5 h-5 text-blue-500 mb-1.5" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">OpenCV Preprocess</span>
                <span className="text-[9px] text-zinc-400 mt-0.5">ROI &amp; Normalization</span>
              </div>
              <div className="text-zinc-600 font-bold">➔</div>
              <div className="flex flex-col items-center p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl w-36 text-center shadow-md">
                <Cpu className="w-5 h-5 text-blue-500 mb-1.5" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">Custom CNN</span>
                <span className="text-[9px] text-zinc-400 mt-0.5">Feature Extraction</span>
              </div>
              <div className="text-zinc-600 font-bold">➔</div>
              <div className="flex flex-col items-center p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl w-36 text-center shadow-md border-green-500/20 bg-green-500/5">
                <Database className="w-5 h-5 text-green-400 mb-1.5" />
                <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider font-mono">Text Conversion</span>
                <span className="text-[9px] text-zinc-400 mt-0.5">92% Accuracy</span>
              </div>
            </div>
            <div className="text-center text-[11px] text-zinc-500 font-mono mt-5">
              Pipeline Flow: Webcam Input ➔ Background Subtraction &amp; Normalization ➔ CNN Feature Extraction ➔ Real-Time Text Output
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Back button */}
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-semibold text-zinc-400 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to featured projects
          </Link>

          {/* Project Header */}
          <div className="space-y-4">
            <div className="inline-flex px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              {project.category}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed">
              {project.subtitle}
            </p>

            {/* Verified Metric & Link Banner */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-b border-zinc-900 pb-6">
              {project.highlight && (
                <div className="px-3.5 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-xs font-bold text-green-400 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1.5" />
                  {project.highlight}
                </div>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-1.5 text-xs font-bold text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 rounded-lg transition-all"
              >
                <GithubIcon className="w-4 h-4 mr-2 text-zinc-400" />
                View Repository on GitHub
              </a>
            </div>
          </div>

          {/* Case Study Sections */}
          <div className="space-y-12 mt-10">
            
            {/* 1. Overview */}
            <section className="space-y-3.5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-500" />
                Project Overview
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                {project.description}
              </p>
            </section>

            {/* 2. Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-850 space-y-3">
                <h3 className="text-base font-bold text-red-400 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  The Problem
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-850 space-y-3">
                <h3 className="text-base font-bold text-green-400 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  The Solution
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* 3. Pipeline Architecture Diagram */}
            <section className="space-y-3.5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-500" />
                System Architecture &amp; Pipeline
              </h2>
              {renderArchitectureDiagram()}
            </section>

            {/* 4. Technology Stack */}
            <section className="space-y-3.5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-500" />
                Technologies &amp; Libraries Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* 5. Dataset & Methodology */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-zinc-900">
              {/* Dataset */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-400" />
                  Dataset Details
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.dataset}
                </p>
              </div>

              {/* Methodology */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  Engineering Methodology
                </h3>
                <ul className="space-y-2 list-none">
                  {project.methodology.map((step, i) => (
                    <li key={i} className="flex items-start text-sm text-zinc-300">
                      <span className="text-blue-500 mr-2 font-bold font-mono">›</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 6. Results & Core Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-900">
              {/* Results */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Verified Results
                </h3>
                <ul className="space-y-2 list-none">
                  {project.results.map((res, i) => (
                    <li key={i} className="flex items-start text-sm text-zinc-300">
                      <span className="text-green-400 mr-2 font-bold">✓</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  Core Features
                </h3>
                <ul className="space-y-2 list-none">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-zinc-300">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 7. Challenges & Future Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-900">
              {/* Challenges */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  Implementation Challenges
                </h3>
                <ul className="space-y-2 list-none">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start text-sm text-zinc-300">
                      <span className="text-amber-400 mr-2 font-bold font-mono">!</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Improvements */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  Future Improvements
                </h3>
                <ul className="space-y-2 list-none">
                  {project.futureScope.map((scope, i) => (
                    <li key={i} className="flex items-start text-sm text-zinc-300">
                      <span className="text-blue-500 mr-2">→</span>
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Repository CTA */}
            <div className="pt-8 border-t border-zinc-900 text-center">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                Explore Source Code on GitHub
              </a>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
