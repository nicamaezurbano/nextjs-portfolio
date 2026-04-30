"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Mail, MapPin, Phone, ExternalLink, Code2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Custom LinkedIn Icon
const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Animation Configurations
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// Portfolio Data
const projects = [
  {
    title: "Inventory Management System",
    description: "A comprehensive web-based platform designed to optimize operational efficiency and fully automate dispatching workflows.",
    tech: ["PHP", "SQL", "JavaScript", "Bootstrap"],
    gradient: "from-blue-500 to-cyan-400",
    image: "/inventory.jpg",
    link: "#"
  },
  {
    title: "MyGPS Application Backend",
    description: "Scalable database structures, ERDs, and secure API endpoints to handle complex connections for real-time tracking.",
    tech: ["Laravel", "MySQL", "REST APIs"],
    gradient: "from-purple-500 to-pink-500",
    image: "/gps.jpg",
    link: "#"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] selection:bg-blue-100 dark:selection:bg-blue-900/30 relative overflow-hidden">
      
      {/* Ambient Background Graphics (Color Orbs) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-80 h-80 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* Sticky Glassmorphism Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#0a0a0a]/70 border-b border-gray-100 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-end">
          <ThemeToggle />
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-24">
          
          {/* Header Section */}
          <motion.header variants={fadeInUp} className="space-y-6 max-w-2xl">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Nica Mae</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                A Web Developer focused on building robust backend architectures and highly efficient, responsive user interfaces.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 pt-2">
              <span className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full"><MapPin size={14} /> Calapan City</span>
              <span className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full"><Phone size={14} /> (+63) 961-428-5109</span>
              <a href="mailto:nicamaezurbano59@gmail.com" className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Mail size={14} /> Email Me</a>
              <a href="https://linkedin.com/in/nica-mae-zurbano" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><LinkedinIcon size={14} /> LinkedIn</a>
            </div>
          </motion.header>

          {/* Projects Gallery Section */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-2 mb-8">
              <Code2 className="text-blue-500" size={20} />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="group flex flex-col justify-between bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-colors">
                  {/* Decorative Project Graphic/Image Placeholder */}
                  {/* <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`} /> */}
                  <div className="h-48 w-full relative overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <a href={project.link} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white dark:bg-black/20 text-gray-600 dark:text-gray-300 rounded-md border border-gray-200 dark:border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/10 pb-4">Professional Experience</h2>
            
            <div className="space-y-12">
              <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 pl-8">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-white dark:ring-[#0a0a0a]" />
                <header className="mb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Web Developer <span className="text-gray-400 font-normal ml-1">at Myfi Network Inc.</span></h3>
                  <p className="text-sm font-medium text-blue-500 dark:text-blue-400">Feb 2024 — Present</p>
                </header>
                <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400 marker:text-gray-300 dark:marker:text-gray-700">
                  <li>Deploy comprehensive web-based systems to optimize operational efficiency and automate dispatching workflows.</li>
                  <li>Develop robust backend architecture and responsive user interfaces utilizing PHP, SQL, JavaScript, and Bootstrap.</li>
                  <li>Administer and maintain company email servers and web hosting environments to ensure continuous uptime.</li>
                  <li>Perform ongoing maintenance, troubleshooting, and feature updates for the company's existing websites.</li>
                </ul>
              </div>

              <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 pl-8">
                <div className="absolute w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full -left-[6.5px] top-1.5 ring-4 ring-white dark:ring-[#0a0a0a]" />
                <header className="mb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Web Developer Intern <span className="text-gray-400 font-normal ml-1">at MVSoftech Inc.</span></h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-500">Jan 2023 — May 2023</p>
                </header>
                <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400 marker:text-gray-300 dark:marker:text-gray-700">
                  <li>Planned and designed scalable database structures and Entity Relationship Diagrams (ERDs).</li>
                  <li>Documented and coded secure API endpoints with complex database connections utilizing Laravel.</li>
                  <li>Collaborated with the front-end team to seamlessly integrate back-end logic with user-facing components.</li>
                  <li>Participated in weekly agile meetings and code reviews to ensure best practices in software development.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Footer Grid (Skills, Education, Certs) */}
          <motion.section variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-100 dark:border-white/10">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">Technical Skills</h2>
              
              {/* Core Development Skills */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wider">Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'JavaScript', 'HTML5', 'CSS3', 'Laravel', 'Code Igniter', 'Angular', 'Bootstrap', 'Tailwind CSS', 'MySQL', 'PostgreSQL', 'Git'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI & Workflow Skills */}
              <div>
                <h3 className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wider">AI & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Prompt Engineering', 'ChatGPT', 'Gemini', 'Windsurf'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md border border-blue-100 dark:border-blue-800/30 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Education</h2>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">BS in Information Technology</h3>
                <p className="text-sm text-gray-500">Divine Word College of Calapan (2019 — 2023)</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Award: Excellence in Web and Mobile Systems • Dean's Lister</p>
              </div>
              
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Certifications</h2>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">NC II in Computer Systems Servicing</h3>
                <p className="text-sm text-gray-500">TESDA (Valid thru Nov 2027)</p>
              </div>
            </div>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
}