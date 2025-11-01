import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaDownload, FaFileAlt, FaBriefcase, FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiPython, SiMongodb, SiNextdotjs, SiExpress } from "react-icons/si";

export default function Home() {
  const projects = [
    {
      title: "Chitbox - Email Communication Platform",
      description: "A self-hosted AI-powered mail and communication platform using Next.js and Express for backend, deployed on a private VPS with full control over Postfix (SMTP) and Dovecot (IMAP) mail servers. Integrated OpenAI-driven features like spell-check, tone polish, rewriter, summarizer, and smart auto-reply, enabling intelligent email assistance and enhanced productivity. Configured end-to-end infrastructure and domain security including SPF, DKIM, and DMARC records, SSL setup, DNS management, and scalable delivery handling—achieving complete independence from third-party mail providers.",
      tech: ["Next.js", "Express.js", "OpenAI API", "Postfix", "Dovecot", "VPS", "SMTP", "IMAP", "SSL", "DNS", "SPF", "DKIM", "DMARC"],
      link: "https://chitbox.co/",
      isLive: true
    },
    {
      title: "FoodFly – Food Delivery Application",
      description: "Built a Next.js-based food delivery platform with role-specific dashboards for customers, restaurants, delivery agents, and admins. Developed admin dashboards for managing restaurants, tracking deliveries, and monitoring platform analytics. Integrated Google Maps APIs for real-time delivery tracking and optimized routing. Designed a scalable order management system with secure payments, live order status, and responsive UI.",
      tech: ["Next.js", "React", "Google Maps API", "Payment Integration", "Order Management", "Role-Based Access", "Admin Dashboard"],
      link: "https://foodfly.co/",
      isLive: true
    },
    {
      title: "Full Stack Chat Application",
      description: "React-powered chat application with dynamic UI, seamless conversations, and chat room navigation. Features REST APIs, persistent chat sessions, real-time typing indicators, and active user status.",
      tech: ["React", "Node.js", "Express.js", "Socket.io", "MongoDB", "JavaScript"],
      link: "https://github.com/yourusername/fullstack-chat-app",
      isLive: false
    },
    {
      title: "Transcription-System",
      description: "Full-stack transcription system with React/Tailwind frontend and FastAPI/Python backend. Integrated OpenAI Whisper with PyTorch for high-accuracy audio/video to text conversion with batch processing.",
      tech: ["React", "Tailwind CSS", "FastAPI", "Python", "OpenAI Whisper", "PyTorch"],
      link: "https://github.com/bhargavreddi7889/Transcription-system",
      isLive: false
    },
    {
      title: "Blog-Website",
      description: "Full-stack blog system with user authentication and complete CRUD operations. Features rich-text editor, comment system, dynamic routing with SEO-friendly URLs, and responsive design.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
      link: "https://github.com/bhargavreddi7889/my_Blog",
      isLive: false
    }
  ];

  const skills = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Python", icon: SiPython },
    { name: "JavaScript" },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL" },
    { name: "Java" },
    { name: "HTML & CSS" },
    { name: "Git" },
    { name: "Firebase" },
    { name: "OpenAI API" },
    { name: "VPS/Server Management" },
    { name: "Google Maps API" },
    { name: "Deep Learning" },
    { name: "Neural Networks" },
    { name: "NLP" },
    { name: "Android Studio" },
    { name: "Postman" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-xl z-50 border-b border-yellow-400/20 shadow-lg shadow-yellow-500/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">REDDI ESWAR BHARGAV</div>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-yellow-400/10 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors font-medium text-sm lg:text-base">About</a>
              <a href="#experience" className="text-white hover:text-yellow-400 transition-colors font-medium text-sm lg:text-base">Experience</a>
              <a href="#education" className="text-white hover:text-yellow-400 transition-colors font-medium text-sm lg:text-base">Education</a>
              <a href="#projects" className="text-white hover:text-yellow-400 transition-colors font-medium text-sm lg:text-base">Projects</a>
              <a href="#skills" className="text-white hover:text-yellow-400 transition-colors font-medium text-sm lg:text-base">Skills</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors font-medium text-sm lg:text-base">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(245,158,11,0.05)_50%,transparent_75%)]"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl shadow-yellow-500/25">
              <span className="text-2xl sm:text-4xl font-bold text-black">B</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2">
            Hi, I'm Bhargav
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-300 mb-6 sm:mb-8 font-medium px-2">
            I build <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">AI + FULL stack applications</span>
          </p>
        
            
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <a 
              href="#projects" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-500/25"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-yellow-400 text-yellow-400 px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-yellow-400/10 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </div>
          <div className="mt-12 sm:mt-16">
            <a href="#about" className="inline-block animate-bounce">
              <FaArrowDown className="text-2xl sm:text-3xl text-yellow-400" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent px-4">About Me</h2>
          
          <div className="bg-gray-900/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl shadow-yellow-500/10 border border-yellow-400/20">
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Final year B.Tech IT student at MVGR College, specializing in AI, ML, and MERN stack development. I developed numerous full stack application using react, node.js,next.js.worked on backend using express.js and mongodb.I also specilize in integrating web applications with AI models and features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent px-4">Professional Experience</h2>
          
          <div className="bg-gray-900/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl shadow-yellow-500/10 border border-yellow-400/20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white flex flex-col sm:flex-row items-start sm:items-center">
              <FaBriefcase className="mr-0 sm:mr-4 mb-2 sm:mb-0 text-yellow-400" />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Work Experience</span>
            </h3>
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-4 border-yellow-400 pl-4 sm:pl-8 hover:pl-6 sm:hover:pl-12 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 sm:mb-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 lg:mb-0">Developer (Intern)</h4>
                  <span className="text-yellow-400 font-bold text-sm sm:text-lg bg-yellow-400/10 px-2 sm:px-3 py-1 rounded-full inline-block w-fit">04/2025 – Present</span>
                </div>
                <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-4">Robustrix IT Solutions | Delhi, India</p>
                
                <ul className="space-y-3 text-base sm:text-lg text-gray-300 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    <span>Led multiple AI and full-stack projects including <span className="whitespace-nowrap"><span className="text-yellow-400 font-semibold">brahamand.ai</span>, <span className="text-yellow-400 font-semibold">FoodFly</span>, and <span className="text-yellow-400 font-semibold">ChitBox</span></span>, focusing on clean deployment and real-time user interaction.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    Deployed and managed production servers on Hostinger VPS, handling domain setup, DNS configuration, SSL certification, and server security through SSH and command-line operations.
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    Configured Linux-based mail servers (Postfix SMTP, IMAP) and backend APIs for reliable communication between web applications and hosted services.
          </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">•</span>
                    Optimized deployment pipelines with Git-based workflows, ensuring smooth version control, continuous updates, and efficient collaboration across multiple live projects.
          </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent px-4">Education</h2>
          
          <div className="space-y-8 sm:space-y-12">
            <div className="bg-gray-900/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl shadow-yellow-500/10 border border-yellow-400/20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white flex flex-col sm:flex-row items-start sm:items-center">
                <FaGraduationCap className="mr-0 sm:mr-4 mb-2 sm:mb-0 text-yellow-400" />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Academic Background</span>
              </h3>
              <div className="space-y-6 sm:space-y-8">
                <div className="border-l-4 border-yellow-400 pl-4 sm:pl-8 hover:pl-6 sm:hover:pl-12 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 sm:mb-4">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 lg:mb-0">B.Tech in Information Technology</h4>
                    <span className="text-yellow-400 font-bold text-sm sm:text-lg bg-yellow-400/10 px-2 sm:px-3 py-1 rounded-full inline-block w-fit">2022 - 2026</span>
                  </div>
                  <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2 sm:mb-3">MVGR College of Engineering</p>
                  <p className="text-base sm:text-lg text-gray-300">CGPA: <span className="font-bold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded text-sm sm:text-base">8.92</span></p>
                </div>
                
                <div className="border-l-4 border-white pl-4 sm:pl-8 hover:pl-6 sm:hover:pl-12 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 sm:mb-4">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 lg:mb-0">Intermediate (XII)</h4>
                    <span className="text-white font-bold text-sm sm:text-lg bg-white/10 px-2 sm:px-3 py-1 rounded-full inline-block w-fit">2020 - 2022</span>
                  </div>
                  <p className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Sainik School Kalikiri</p>
                  <p className="text-base sm:text-lg text-gray-300">Percentage: <span className="font-bold text-white bg-white/10 px-2 py-1 rounded text-sm sm:text-base">92%</span></p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent px-4">Featured Projects</h2>
          <div className="space-y-8 sm:space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900/90 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 overflow-hidden border border-yellow-400/20">
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2 sm:mb-3">{project.title}</h3>
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wide mb-2 sm:mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 sm:px-4 py-1 sm:py-2 bg-yellow-400/10 text-yellow-400 text-xs sm:text-sm font-medium rounded-full border border-yellow-400/30 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-700 gap-3 sm:gap-0">
                    <div className="flex items-center text-gray-400">
                      <span className="text-xs sm:text-sm">Project #{index + 1}</span>
                    </div>
                    <a 
                      href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                    >
                      {project.isLive ? (
                        <>
                          <FaExternalLinkAlt className="text-base sm:text-lg" />
                          Visit Live Site
                        </>
                      ) : (
                        <>
                          <FaGithub className="text-base sm:text-lg" />
                          View on GitHub
                        </>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent px-4">Skills & Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {skills.map((skill, index) => {
              const colors = [
                'from-yellow-400 to-yellow-300',
                'from-white to-gray-200', 
                'from-yellow-500 to-yellow-400',
                'from-gray-100 to-white',
                'from-yellow-300 to-yellow-200',
                'from-white to-yellow-100'
              ];
              const colorClass = colors[index % colors.length];
              
              return (
                <div key={index} className="flex items-center space-x-3 sm:space-x-4 py-3 sm:py-4 px-4 sm:px-6 bg-gray-900/90 backdrop-blur-sm hover:bg-gray-800/90 rounded-lg sm:rounded-xl transition-all duration-300 border border-yellow-400/20 shadow-sm hover:shadow-md hover:shadow-yellow-500/20">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                    {skill.icon ? (
                      <skill.icon className={`text-xl sm:text-2xl bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`} />
                    ) : (
                      <span className={`text-xs sm:text-sm font-bold bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>
                        {skill.name.split(' ').map(word => word[0]).join('')}
                      </span>
                    )}
                  </div>
                  <div className={`w-1 h-6 sm:h-8 bg-gradient-to-b ${colorClass} rounded-full flex-shrink-0`}></div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">{skill.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent px-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4">
            <a 
              href="mailto:bhargav623sskal@gmail.com" 
              className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <FaEnvelope className="text-sm sm:text-base" /> Email Me
          </a>
          <a
              href="https://www.linkedin.com/in/reddi-bhargav-a977bb259/" 
            target="_blank"
            rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 border-2 border-yellow-400 text-yellow-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-400/10 transition-all duration-300 text-sm sm:text-base"
          >
              <FaLinkedin className="text-sm sm:text-base" /> LinkedIn
          </a>
        </div>
          <div className="flex justify-center space-x-6">
        <a
              href="https://github.com/bhargavreddi7889" 
          target="_blank"
          rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaGithub className="text-xl sm:text-2xl" />
            </a>
            
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-yellow-400/20 shadow-yellow-500/10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <FaFileAlt className="text-2xl text-black" />
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-4">Download My Resume</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my skills, experience, and projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/bhargav_resume.pdf" 
                download="bhargav_resume.pdf"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FaDownload className="text-lg" />
                Download Resume (PDF)
        </a>
        <a
                href="/bhargav_resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400/10 transition-all duration-300"
              >
                <FaFileAlt className="text-lg" />
                View Online
              </a>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black text-center relative border-t border-yellow-400/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"></div>
        <p className="text-gray-300 relative z-10 font-medium">
          © 2025 Bhargav. Built with <span className="text-yellow-400">Next.js</span> and <span className="text-white">Tailwind CSS</span>.
        </p>
      </footer>
    </div>
  );
}
