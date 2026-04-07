import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

/* --- CUSTOM SVG ICONS --- */
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h1z"></path>
  </svg>
);

const DiscordIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.607 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027 14.975 14.975 0 0 0 1.293-2.1.074.074 0 0 0-.041-.104 13.091 13.091 0 0 1-1.86-.888.075.075 0 0 1-.008-.125c.125-.093.25-.19.371-.287a.075.075 0 0 1 .078-.01c3.906 1.784 8.113 1.784 12.002 0a.075.075 0 0 1 .079.009c.12.098.246.195.371.288a.075.075 0 0 1-.006.125 12.976 12.976 0 0 1-1.873.892.074.074 0 0 0-.041.105c.36.687.772 1.341 1.225 1.937a.074.074 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-4.718-.838-8.812-3.549-12.456a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.948-2.157 2.157-2.157 1.211 0 2.176.964 2.157 2.157 0 1.19-.946 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.948-2.157 2.157-2.157 1.211 0 2.176.964 2.157 2.157 0 1.19-.946 2.156-2.157 2.156z"></path>
  </svg>
);

const SkillCard = ({ name, level }) => (
  <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 hover:border-[#22ff00]/50 transition-all">
    <h3 className="text-white font-semibold mb-4">{name}</h3>
    <div className="w-full bg-gray-800 rounded-full h-2">
      <div 
        className="bg-linear-to-r from-[#22ff00] to-[#00aa00] h-2 rounded-full transition-all"
        style={{ width: `${level}%` }}
      ></div>
    </div>
    <p className="text-gray-400 text-sm mt-3">{level}%</p>
  </div>
);

const ProjectCard = ({ title, description, tags, onClick }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-[#0f0f0f] border border-white/5 rounded-lg overflow-hidden hover:border-[#22ff00]/30 transition-all cursor-pointer p-4"
  >
    {/* Frame Effect - Inner Container */}
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10 p-4">
      {/* Thumbnail - Vertical Orientation */}
      <div className="bg-linear-to-br from-[#1a4d1a] to-[#0d2d0d] h-96 flex items-center justify-center text-center p-6 rounded-lg">
        <div>
          <h3 className="text-white text-2xl font-bold">{title}</h3>
        </div>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-6">
      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-xs px-3 py-1 bg-[#22ff00]/20 text-[#22ff00] rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <button 
        onClick={onClick}
        className="w-full mt-4 px-4 py-2 border border-[#22ff00] text-[#22ff00] rounded-lg hover:bg-[#22ff00]/10 transition-all text-sm font-semibold"
      >
        View Details
      </button>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#1a1a1a] border border-white/10 rounded-lg w-full max-h-[90vh] overflow-y-auto max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-all text-gray-400 hover:text-white z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Image Gallery */}
        <div className="bg-linear-to-br from-[#1a4d1a] to-[#0d2d0d] p-6 md:p-8 min-h-fit m-6 rounded-lg border border-white/10">
          <div className="flex items-center justify-center rounded-lg overflow-hidden bg-black/20 aspect-video md:aspect-auto md:h-96">
            <span className="text-white text-center">{project.galleryText || 'Project Gallery'}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 md:space-y-8">
          {/* Title */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
          </div>

          {/* Description */}
          <div>
            <p className="text-xs uppercase text-gray-500 font-semibold tracking-widest mb-3">Description</p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Role */}
          <div>
            <p className="text-xs uppercase text-gray-500 font-semibold tracking-widest mb-3">Role</p>
            <p className="text-gray-300 text-sm md:text-base">{project.role}</p>
          </div>

          {/* Duration */}
          <div>
            <p className="text-xs uppercase text-gray-500 font-semibold tracking-widest mb-3">Duration</p>
            <p className="text-gray-300 text-sm md:text-base">{project.duration}</p>
          </div>

          {/* Technologies */}
          <div>
            <p className="text-xs uppercase text-gray-500 font-semibold tracking-widest mb-4">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-800 text-gray-300 text-xs md:text-sm rounded border border-gray-700 hover:border-[#22ff00]/50 hover:text-[#22ff00] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ContactCard = ({ icon: Icon, label, value, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8 hover:border-[#22ff00]/50 transition-all hover:bg-[#222] cursor-pointer group"
  >
    <div className="flex items-start gap-4">
      <div className="text-[#22ff00] group-hover:text-[#00ff66] transition-colors flex-shrink-0">
        <Icon size={24} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{label}</p>
        <p className="text-white text-lg font-semibold mt-2 group-hover:text-[#22ff00] transition-colors break-words">{value}</p>
      </div>
    </div>
  </a>
);

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'dashboard', label: 'DASHBOARD' },
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skills', label: 'MODULES' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="hidden md:flex fixed left-0 top-0 w-56 h-screen bg-linear-to-b from-[#0f0f0f] to-[#0a0a0a] border-r border-white/10 p-8 flex-col z-50">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white tracking-tight">PB.</h1>
        <p className="text-xs text-gray-500 mt-2 font-medium">FULL STACK DEVELOPER</p>
        <p className="text-xs text-gray-600 mt-1">Manila, Philippines</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`block w-full text-left px-4 py-3 rounded-lg transition-all text-sm font-semibold tracking-wide ${
              activeSection === item.id
                ? 'bg-[#22ff00]/20 text-[#22ff00] border-l-2 border-[#22ff00]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="space-y-4 pt-8 border-t border-white/10">
        <p className="text-xs text-gray-500 font-semibold">CONTACT</p>
        <a href="tel:+639276111887" className="text-gray-400 hover:text-[#22ff00] transition-colors text-sm block">+63927-611-1887</a>
        <a href="mailto:pbbugacia@gmail.com" className="text-gray-400 hover:text-[#22ff00] transition-colors text-sm block">pbbugacia@gmail.com</a>
        <div className="flex gap-4 pt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#22ff00] transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#22ff00] transition-colors">
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

const MobileNav = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { id: 'dashboard', label: 'DASHBOARD' },
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skills', label: 'MODULES' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'COMMS' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Mobile Top Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-black border-b border-white/10 p-4 z-40">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-white/5 rounded-lg transition-all text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <h1 className="text-xl font-bold text-white tracking-tight">PB.</h1>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isMobileMenuOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed left-0 top-0 w-56 h-screen bg-linear-to-b from-[#0f0f0f] to-[#0a0a0a] border-r border-white/10 p-8 flex flex-col z-50 pt-20"
      >
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white tracking-tight">PB.</h1>
          <p className="text-xs text-gray-500 mt-2 font-medium">FULL STACK DEVELOPER</p>
          <p className="text-xs text-gray-600 mt-1">Manila, Philippines</p>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-all text-sm font-semibold tracking-wide ${
                activeSection === item.id
                  ? 'bg-[#22ff00]/20 text-[#22ff00] border-l-2 border-[#22ff00]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="space-y-4 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500 font-semibold">CONTACT</p>
          <a href="tel:+639276111887" className="text-gray-400 hover:text-[#22ff00] transition-colors text-sm block">+63927-611-1887</a>
          <a href="mailto:pbbugacia@gmail.com" className="text-gray-400 hover:text-[#22ff00] transition-colors text-sm block">pbbugacia@gmail.com</a>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#22ff00] transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#22ff00] transition-colors">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const ProjectCarousel = ({ projects, onProjectClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  const getProjectPosition = (idx) => {
    const distance = (idx - currentIndex + projects.length) % projects.length;
    
    if (distance === 0) return 'center'; // Current
    if (distance === 1) return 'right';  // Next
    if (distance === projects.length - 1) return 'left'; // Previous
    return 'hidden';
  };

  return (
    <div className="relative py-12">
      {/* Carousel Container */}
      <div className="relative h-auto md:h-[550px] flex items-center justify-center overflow-visible">
        {projects.map((project, idx) => {
          const position = getProjectPosition(idx);
          
          let transformClass = '';
          let opacityClass = '';
          let mobileClass = '';
          
          if (position === 'center') {
            transformClass = 'scale-100 translate-x-0 z-30';
            opacityClass = 'opacity-100';
            mobileClass = 'md:absolute static';
          } else if (position === 'right') {
            transformClass = 'scale-75 translate-x-80 z-10';
            opacityClass = 'opacity-70';
            mobileClass = 'md:absolute hidden md:block';
          } else if (position === 'left') {
            transformClass = 'scale-75 -translate-x-80 z-10';
            opacityClass = 'opacity-70';
            mobileClass = 'md:absolute hidden md:block';
          } else {
            transformClass = 'scale-50 z-0';
            opacityClass = 'opacity-0 pointer-events-none';
            mobileClass = 'md:absolute hidden';
          }

          return (
            idx === currentIndex ? (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`${mobileClass} w-full max-w-md transition-all duration-500 mx-auto ${transformClass} ${opacityClass}`}
              >
                <ProjectCard {...project} onClick={() => onProjectClick(project)} />
              </motion.div>
            ) : (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`${mobileClass} w-full max-w-md transition-all duration-500 mx-auto ${transformClass} ${opacityClass}`}
              >
                <ProjectCard {...project} onClick={() => onProjectClick(project)} />
              </motion.div>
            )
          );
        })}
      </div>
      
      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-8 mt-12">
        <button 
          onClick={prev}
          className="p-3 hover:bg-[#22ff00]/20 rounded-lg transition-all text-gray-400 hover:text-[#22ff00] hover:border hover:border-[#22ff00]/50"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="flex gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 rounded-full transition-all ${
                idx === currentIndex 
                  ? 'bg-[#22ff00] w-12' 
                  : 'bg-gray-700 w-3 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={next}
          className="p-3 hover:bg-[#22ff00]/20 rounded-lg transition-all text-gray-400 hover:text-[#22ff00] hover:border hover:border-[#22ff00]/50"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const skills = [
    { name: 'Laravel/PHP', level: 65 },
    { name: 'MS SQL Server', level: 71 },
    { name: 'React', level: 20 },
    { name: 'JavaScript', level: 32 },
    { name: 'C# / .NET', level: 45 },
    { name: 'HTML5/CSS3', level: 63 },
    { name: 'Git/GitHub', level: 44 },
    { name: 'Tailwind CSS', level: 40 },
    { name: 'REST APIs', level: 58 },
    { name: 'Database Design', level: 68 },
    { name: 'System Analysis', level: 56 },
    { name: 'Troubleshooting', level: 82 },
  ];

  const projects = [
    {
      title: 'Enterprise Accounting',
      description: 'Full-stack accounting software with automated financial reporting capabilities.',
      fullDescription: 'Enterprise-grade accounting software with comprehensive financial reporting, automated P&L statements, balance sheets, and multi-branch operations support. Features real-time data synchronization, role-based access control, and customizable report generation.',
      role: 'Full Stack Developer',
      duration: 'November 2023 - Present',
      tags: ['Laravel', 'T-SQL', 'React', 'Tailwind'],
      galleryText: 'Accounting Dashboard & Financial Reports',
      technologies: ['Laravel', 'PHP', 'T-SQL', 'React', 'Tailwind CSS', 'REST APIs', 'MySQL']
    },
    {
      title: 'Cash Management System',
      description: 'High-availability desktop solution for branch tracking and inventory management.',
      fullDescription: 'Comprehensive cash management solution for multi-branch operations with real-time inventory tracking, branch performance monitoring, and automated BIR data compliance. Includes synchronized database replication, transaction logging, and comprehensive audit trails.',
      role: 'System Developer & Database Architect',
      duration: 'July 2015 - April 2022',
      tags: ['C#', '.NET', 'MS SQL', 'WinForms'],
      galleryText: 'Cash Management & Inventory Dashboard',
      technologies: ['C#', '.NET Framework', 'MS SQL Server', 'WinForms', 'T-SQL', 'Stored Procedures', 'ADO.NET']
    },
    {
      title: 'HR Management System',
      description: 'Complete HR platform for employee and payroll management with administrative workflows.',
      fullDescription: 'Full-featured HR management system built for Clasiko Talent Hub featuring employee records management, payroll processing, benefits administration, performance tracking, and comprehensive reporting. Streamlines HR operations with automated workflows and data analytics.',
      role: 'System Web Developer & Admin',
      duration: 'April 2023 - November 2023',
      tags: ['Laravel', 'PHP', 'MySQL'],
      galleryText: 'HR Dashboard & Employee Management',
      technologies: ['Laravel', 'PHP', 'MySQL', 'React', 'Bootstrap', 'JavaScript', 'REST APIs']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-400 font-sans selection:bg-[#22ff00]/30">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <main className="ml-0 md:ml-56 min-h-screen pt-16 md:pt-0">
        {/* HERO/DASHBOARD */}
        <section id="dashboard" className="px-4 md:px-12 py-16 md:py-24 border-b border-white/5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm text-gray-500 mb-4 font-semibold tracking-wide">WELCOME</p>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Patrick <span className="text-[#22ff00]">Bugacia</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-8 leading-relaxed font-light">
              <span className="text-[#22ff00] font-semibold">Full Stack Web Developer</span> with expertise in Laravel, MS SQL Server, and modern web technologies. Building scalable applications that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/cv.pdf" download="Patrick_Bugacia_CV.pdf" className="px-6 py-3 bg-[#22ff00] hover:bg-[#00dd00] text-black rounded-lg font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer">
                <Download size={18} />
                Download CV
              </a>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-6 py-3 border border-[#22ff00]/50 hover:border-[#22ff00] text-[#22ff00] rounded-lg font-semibold transition-all hover:bg-[#22ff00]/10"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        </section>

        {/* ABOUT/PROFESSIONAL SUMMARY */}
        <section id="about" className="px-4 md:px-12 py-16 md:py-24 border-b border-white/5">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">About</h2>
          
          <div className="mb-12">
            <h3 className="text-xl text-[#22ff00] font-semibold mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Full Stack Web Developer with a strong foundation in Computer Engineering. Specialized in building scalable web applications using Laravel and managing complex MS SQL Server databases. Transitioned from C#/.NET desktop development to modern web technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Experienced in technical troubleshooting, system maintenance, and automating business workflows. Currently utilizing AI tools to optimize development efficiency.
            </p>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="px-4 md:px-12 py-16 md:py-24 border-b border-white/5">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-16">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-[#22ff00]/30 pl-8 py-4 hover:border-[#22ff00] transition-all">
              <h3 className="text-2xl font-bold text-white mb-1">Freelance Web Developer</h3>
              <p className="text-[#22ff00] text-sm font-semibold mb-2">November 2023 – Present</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Building full-stack web applications using Laravel with clean architecture</li>
                <li>• Developing comprehensive accounting software with automated reporting</li>
                <li>• Leveraging AI tools for rapid development and debugging</li>
              </ul>
            </div>

            <div className="border-l-2 border-[#22ff00]/30 pl-8 py-4 hover:border-[#22ff00] transition-all">
              <h3 className="text-2xl font-bold text-white mb-1">System Web Developer / Admin</h3>
              <p className="text-[#22ff00] text-sm font-semibold mb-2">Clasiko Talent Hub Inc. | April 2023 – November 2023</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Developed agency website and HR management system using Laravel</li>
                <li>• Managed payroll and billing operations</li>
              </ul>
            </div>

            <div className="border-l-2 border-[#22ff00]/30 pl-8 py-4 hover:border-[#22ff00] transition-all">
              <h3 className="text-2xl font-bold text-white mb-1">System Developer</h3>
              <p className="text-[#22ff00] text-sm font-semibold mb-2">Efficient Business Management Outsource Inc. | July 2015 – April 2022</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Developed Cash Management System (CMS) with integrated inventory tracking</li>
                <li>• Built Gate Pass System and Office Transmittal System</li>
                <li>• Automated tax compliance workflows for BIR Relief software</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section id="skills" className="px-4 md:px-12 py-16 md:py-24 border-b border-white/5">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-16">Skills</h2>
          <p className="text-gray-400 mb-12">Technologies I work with</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <SkillCard key={idx} {...skill} />
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="px-4 md:px-12 py-16 md:py-24 border-b border-white/5">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-16">Education</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8 hover:border-[#22ff00]/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#22ff00]">📚</div>
                <h3 className="text-2xl font-bold text-white">Computer Engineering</h3>
              </div>
              <p className="text-[#22ff00] text-sm font-semibold mb-3">Adamson University</p>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-3">
                <div className="bg-linear-to-r from-[#22ff00] to-[#00aa00] h-2 rounded-full w-3/5"></div>
              </div>
              <p className="text-gray-500 text-xs mb-4">In Progress...</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Core engineering concepts & software development foundations</li>
                <li>• Professional web development specialization</li>
                <li>• Laravel & MS SQL database design</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8 hover:border-[#22ff00]/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#22ff00]">🎓</div>
                <h3 className="text-2xl font-bold text-white">Self-Taught Development</h3>
              </div>
              <p className="text-[#22ff00] text-sm font-semibold mb-3">Continuous Learning</p>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-3">
                <div className="bg-linear-to-r from-[#22ff00] to-[#00aa00] h-2 rounded-full w-4/5"></div>
              </div>
              <p className="text-gray-500 text-xs mb-4">Learning</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Modern web frameworks & best practices</li>
                <li>• Full-stack web development mastery</li>
                <li>• AI-assisted coding & development tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-4 md:px-12 py-16 md:py-24 border-b border-white/5">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-16">Projects</h2>
          <ProjectCarousel projects={projects} onProjectClick={setSelectedProject} />
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-4 md:px-12 py-16 md:py-24">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">Contact</h2>
          <p className="text-gray-400 mb-16">Open to discussing new projects and opportunities.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ContactCard 
              icon={Mail}
              label="Email"
              value="pbbugacia@gmail.com"
              href="mailto:pbbugacia@gmail.com"
            />
            
            <ContactCard 
              icon={GithubIcon}
              label="GitHub"
              value="@PatrickTechStuff"
              href="https://github.com/PatrickTechStuff"
            />
            <ContactCard 
              icon={FacebookIcon}
              label="Facebook"
              value="Patrick Bugz"
              href="https://www.facebook.com/Patrick.Bugacia/"
            />
            <ContactCard 
              icon={DiscordIcon}
              label="Discord"
              value="@bugztech"
              href="https://discord.com/users/710910986181148772"
            />
            <ContactCard 
              icon={Phone} 
              label="Phone"
              value="+63927-611-1887"
              href="tel:+639276111887"
            />
            
          </div>

          <p className="text-center text-gray-600 text-sm">© 2026 Patrick Bernardo Bugacia. All rights reserved.</p>
        </section>
      </main>

      {/* PROJECT MODAL */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default App;
