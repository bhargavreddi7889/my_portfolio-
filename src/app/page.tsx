import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown, FaDownload, FaFileAlt } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiPython, SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql } from "react-icons/si";

export default function Home() {
  const projects = [
    {
      title: "AI-Powered Generative Chatbot",
      description: "It is a  Generative AI Chatbot which generates content to user queries using OpenAI API.it also has multiple real-time data services such as  PDF upload & summarization using NLP models, real-time news updates, live weather data, and stock market information.",
      tech: ["OpenAI GPT", "Hugging Face", "NewsAPI", "OpenWeatherMap", "Alpha Vantage", "React", "Node.js"],
      link: "https://github.com/bhargavreddi7889/brahmandAI",
      visit:"https://brahamand.ai/",
      image: "/ai-aggregator.jpg"
    },
    {
      title: "Full Stack Chat Application",
      description: "React-powered chat application with dynamic UI, seamless conversations, and chat room navigation. Features REST APIs, persistent chat sessions, real-time typing indicators, and active user status.",
      tech: ["React", "Node.js", "Express.js", "Socket.io", "MongoDB", "JavaScript"],
      link: "https://github.com/yourusername/fullstack-chat-app",
      image: "/chat-app.jpg"
    },
    {
      title: "Transcription-System",
      description: "Full-stack transcription system with React/Tailwind frontend and FastAPI/Python backend. Integrated OpenAI Whisper with PyTorch for high-accuracy audio/video to text conversion with batch processing.",
      tech: ["React", "Tailwind CSS", "FastAPI", "Python", "OpenAI Whisper", "PyTorch"],
      link: "https://github.com/bhargavreddi7889/Transcription-system",
      image: "/transcription.jpg"
    },
    {
      title: "Blog-Website",
      description: "Full-stack blog system with user authentication and complete CRUD operations. Features rich-text editor, comment system, dynamic routing with SEO-friendly URLs, and responsive design.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
      link: "https://github.com/bhargavreddi7889/my_Blog",
      image: "/blog.jpg"
    }
  ];

  const skills = [
    { name: "React", icon: SiReact, color: "text-blue-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Python", icon: SiPython, color: "text-yellow-500" },
    { name: "JavaScript", color: "text-yellow-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "MySQL", color: "text-blue-700" },
    { name: "Java", color: "text-red-500" },
    { name: "HTML & CSS", color: "text-orange-500" },
    { name: "Git", color: "text-gray-600" },
    { name: "Firebase", color: "text-orange-600" },
    { name: "OpenAI API", color: "text-purple-500" },
    { name: "Deep Learning", color: "text-indigo-600" },
    { name: "Neural Networks", color: "text-pink-500" },
    { name: "NLP", color: "text-teal-500" },
    { name: "Android Studio", color: "text-green-700" },
    { name: "Postman", color: "text-orange-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-800 dark:text-white">REDDI ESWAR BHARGAV</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">B</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Bhargav</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8">
            I build <span className="font-semibold text-slate-800 dark:text-white">AI + MERN stack applications</span>
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Final year B.Tech IT student at MVGR College, specializing in AI, ML, and MERN stack development. 
            Experienced in building AI-powered tools and scalable full-stack applications. 
            Focused on solving real-world problems using data-driven and user-centric solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
          <div className="mt-12">
            <a href="#about" className="inline-block animate-bounce">
              <FaArrowDown className="text-2xl text-slate-400" />
            </a>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">About Me</h2>
          <div className="space-y-12">
            <div className="text-center">
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
                I'm a final year B.Tech IT student at MVGR College with a passion for AI, machine learning, and full-stack development. 
                My journey in technology has been driven by curiosity and a desire to create solutions that make a real impact.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                I believe in combining technical expertise with user-centric design to build scalable applications that solve 
                real-world problems through data-driven approaches.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 text-center">Professional Experience</h4>
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-slate-800 dark:text-white">Developer Intern</h5>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Robustrix IT Solutions • April 2025 - Present • Delhi, India</p>
                </div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Built an AI chat model (Brahamand.ai) which performs various functions like PDF summarization, news, weather, stock analysis</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Developed a production-ready CRM system using the MERN stack</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Implemented PDF processing features for content extraction and summarization</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>Designed, developed, and hosted internal web applications with real user adoption</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 text-center">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-semibold text-slate-800 dark:text-white">B.Tech (Information Technology)</h5>
                    <p className="text-green-600 dark:text-green-400 font-medium">Maharaj Vijayaram Gajapathi Raj College of Engineering • 2026 • Vizianagaram, India</p>
                    <p className="text-slate-600 dark:text-slate-300">CGPA: 8.92</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-slate-800 dark:text-white">Intermediate</h5>
                    <p className="text-green-600 dark:text-green-400 font-medium">Sainik School Kalikiri • Kalikiri, India</p>
                    <p className="text-slate-600 dark:text-slate-300">Percentage: 92%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">Featured Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">{project.title}</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center text-slate-500 dark:text-slate-400">
                      <span className="text-sm">Project #{index + 1}</span>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <FaGithub className="text-lg" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">Skills & Technologies</h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4 py-3 px-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200">
                <div className="flex items-center justify-center w-8 h-8">
                  {skill.icon ? (
                    <skill.icon className={`text-xl ${skill.color}`} />
                  ) : (
                    <span className={`text-sm font-bold ${skill.color}`}>
                      {skill.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  )}
                </div>
                <span className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full"></span>
                <h3 className="text-lg font-medium text-slate-800 dark:text-white">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-16">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:bhargav623sskal@gmail.com" 
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <FaEnvelope /> Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/reddi-bhargav-a977bb259/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/bhargavreddi7889" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-800">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <FaFileAlt className="text-2xl text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Download My Resume</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my skills, experience, and projects. Perfect for recruiters and hiring managers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/bhargav_resume.pdf" 
                download="bhargav_resume.pdf"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FaDownload className="text-lg" />
                Download Resume (PDF)
              </a>
              <a 
                href="/bhargav_resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                <FaFileAlt className="text-lg" />
                View Online
              </a>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
              Last updated: January 2025 • File size: ~200KB
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-black text-center">
        <p className="text-slate-400">
          © 2025 Bhargav. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
