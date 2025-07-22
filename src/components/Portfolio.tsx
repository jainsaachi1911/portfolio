import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ImageCarousel } from '@/components/ImageCarousel';
import SkillsVisualization from '@/components/SkillsVisualization';
import { FloatingParticles } from '@/components/FloatingParticles';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  GraduationCap, 
  Briefcase, 
  Award,
  User,
  Menu,
  X,
  Download,
  MapPin,
  Calendar,
  Sparkles
} from 'lucide-react';

// Add hardcoded images array
const myImages = [
  '/sih.jpg',
  '/srg.png',
  '/saavishkar.jpeg',
  '/cs.jpg'
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Remove portfolioImages and setPortfolioImages
  // const [portfolioImages, setPortfolioImages] = useState<string[]>([]);

  const menuItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const skills = {
    programming: ['Python', 'Java', 'C++', 'JavaScript', 'HTML', 'CSS'],
    web: ['Spring Boot REST APIs', 'React.js', 'OAuth2', 'MySQL'],
    aiMl: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'YOLO', 'NLP'],
    tools: ['Git', 'Docker', 'Kubernetes', 'AWS (beginner)'],
    concepts: ['OOP', 'RESTful APIs', 'Data Structures', 'Algorithms', 'Microservices Architecture'],
    soft: ['Agile Collaboration', 'Sprint Planning', 'Communication Skills', 'Problem Solving', 'Cross-Functional Teamwork']
  };

  const projects = [
    {
      title: 'Fraud Detection in Digital Transactions',
      description: 'Designed a real-time fraud detection system leveraging microservices architecture and rule-based logic to identify suspicious activity efficiently, ensuring scalable and secure transaction monitoring.',
      tech: ['SpringBoot', 'Eureka Server', 'API gateway', 'Docker', 'Kubernetes', 'MySQL'],
      links: { github: 'https://github.com/jainsaachi1911/Fraud-Detection-SpringBoot-Microservices', demo: '#' }
    },
    {
      title: 'AI-based Microplastics Detection and Classification',
      description: 'An automated microplastic detection and pollution classification system using YOLOv10 achieved 94.50% mAP@0.5, with over 1,700 augmented images across four classes.',
      tech: ['YOLOv10', 'Streamlit', 'Computer Vision', 'Deep Learning'],
      links: { github: 'https://github.com/jainsaachi1911/AI-Based-Microplastic-Detection', demo: '#' }
    }
  ];

  const certifications = [
    'Introduction to Deep Learning – University of Colorado Boulder',
    'Machine Learning Foundation: A Case Study Approach - University of Washington',
    'Speak English Professionally: In Person, Online & On the Phone – Georgia Institute of Technology',
    'Improving your Statistical Inferences by Eindhoven University of Technology',
    'Regression, Classification, and Clustering Models by CertNexus',
    'Introduction to Artificial Intelligence – IBM'
  ];

  const achievements = [
    'Won 1st Place at Saavishkar 2024–25 (IEEE NMIMS); developed ML innovation using Python – Computer Vision.',
    'Ranked Top 20 Finalist in Smart India Hackathon (SIH); built a prototype for optimized ship routing.',
    'Led community outreach and digital engagement as Director – Community Service, Rotaract Club of Bombay Airport (2023).',
    'Awarded Best Avenue Chair for event coordination and team leadership at Rotaract Club of Bombay Airport (2022–23).'
  ];

  const recommendations = [
    {
      name: 'Dr. Manoj Sankhe',
      position: 'Senior Professor & Department In-charge',
      company: 'Databyte Systems',
      text: 'Exceptional talent in AI/ML with outstanding problem-solving abilities. Delivered high-quality solutions consistently. She was a valuable asset to the team.',
      image: '/api/placeholder/60/60'
    },
    {
      name: "Savio D'Souza",
      position: 'Founder',
      company: 'InventoHub',
      text: 'Saachi showed a strong sense of responsibility, quick adaptability, and a collaborative mindset that made her a valuable contributor to our team.',
      image: '/api/placeholder/60/60'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative">
      <FloatingParticles count={25} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 artistic-text">
              Hi, I'm <span className="bg-gradient-to-r from-purple-600 via-pink-500 via-red-400 to-blue-500 bg-clip-text text-transparent">
                Saachi Jain
              </span>
            </h1>
            <div className="absolute -inset-36 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-[360px] opacity-20 -z-10 animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 relative">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              AI/ML Engineer & Full-Stack Developer
            </span>
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating intelligent solutions and building scalable applications. 
            Currently pursuing B.Tech in Computer Engineering with Honours in AI/ML.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href='https://short-link.me/saachi-jain-resume'>
              <Button size="lg" className="hover-lift bg-gradient-to-r from-pink-500 to-purple-600 border-0">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
            <a href="mailto:jainsaachi1911@gmail.com">
              <Button variant="outline" size="lg" className="hover-lift border-purple-500/50 hover:bg-purple-500/10">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/jainsaachi1911" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover-lift hover:bg-pink-500/20">
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/saachijain1911/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover-lift hover:bg-purple-500/20">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://leetcode.com/u/jainsaachi1911/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover-lift hover:bg-blue-500/20">
                <Code className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-3/4 right-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate AI/ML engineer and full-stack developer with experience in building scalable applications and intelligent systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <ImageCarousel 
                images={myImages} 
                onImagesChange={() => {}} // No-op
                className="w-full h-[450px]"
              />
            </div>

            <div className="space-y-6 animate-slide-up">
              <div>
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently pursuing B.Tech in Computer Engineering with Honours in AI/ML at NMIMS University. 
                  I have hands-on experience in developing AI-powered solutions, microservices architecture, 
                  and full-stack web applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My passion lies in creating intelligent systems that solve real-world problems, 
                  from fraud detection systems to environmental monitoring using computer vision.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Mumbai, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">My <span className="gradient-text">Education</span></h2>
            <p className="text-lg text-muted-foreground">Academic journey and achievements</p>
          </div>

          <div className="space-y-8">
            {[
              {
                degree: 'B. Tech in Computer Engineering (Honours in AI/ML)',
                institution: 'MPSTME, NMIMS University',
                period: '2023 - 2026',
                grade: 'CGPA: 3.53/4'
              },
              {
                degree: 'Diploma in Computer Engineering',
                institution: 'MPSTME, NMIMS University',
                period: '2020 - 2023',
                grade: 'CGPA: 3.51/4'
              },
              {
                degree: 'ICSE',
                institution: 'Ryan International School',
                period: '2020',
                grade: 'Percentage: 91.71%'
              }
            ].map((edu, index) => (
              <Card key={index} className="hover-lift animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg">{edu.institution}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{edu.period}</Badge>
                      <p className="text-sm text-primary mt-1">{edu.grade}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
            <p className="text-lg text-muted-foreground">Professional journey and internships</p>
          </div>

          <div className="space-y-8">
            {[
              {
                role: 'AI/ML Research Intern',
                company: 'Databyte Systems and Services',
                period: '1 year',
                description: 'Developed an AI-powered real-time surveillance system using YOLOv8 and MTCNN, achieving 82.6% mAP@0.5 for object detection and a 30 FPS tracking rate, enabling accurate multi-camera crime detection and continuous person tracking.',
                tech: ['YOLOv8', 'MTCNN', 'Computer Vision', 'Deep Learning', 'Real-time Analytics']
              },
              {
                role: 'Frontend Developer Intern',
                company: 'InventoHub',
                period: '4 months',
                description: 'Built responsive front-end with React.js and Material UI Styling, implementing OAuth authentication and multi-step validated forms. Collaborated on REST API integration with AWS Database.',
                tech: ['React.js', 'Material UI', 'OAuth2', 'AWS', 'REST APIs']
              }
            ].map((exp, index) => (
              <Card key={index} className="hover-lift animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <CardDescription className="text-lg">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
            <p className="text-lg text-muted-foreground">Some of my recent work and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 animate-fade-in">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Traffic Violation Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built a real-time traffic monitoring system to detect red light violations using color segmentation for signal detection and centroid-based object tracking. Defined a violation zone near the stop line and captured vehicles crossing it during a red signal.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["OpenCV", "Python", "NumPy", "Object Tracking", "HSV Color Segmentation"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs hover:bg-secondary/80 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <a href="https://github.com/jainsaachi1911/traffic-violation-monitoring" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  AI-Powered Full Stack Platform
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Currently developing a comprehensive full-stack application that leverages artificial intelligence for enhanced user experiences and intelligent automation features.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "AI/ML", "TypeScript", "PostgreSQL"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs hover:bg-secondary/80 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <a href="https://github.com/jainsaachi1911/ai-powered-fullstack-platform" target="_blank" rel="noopener noreferrer">
                    <Badge variant="outline" className="text-xs">
                      In Development
                    </Badge>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Research <span className="gradient-text">Publications</span></h2>
            <p className="text-lg text-muted-foreground">Contributing to the advancement of AI and computer vision research</p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Advanced AI-Based Detection and Tracking System (ADTS) for Crime Prevention and Identification in Real-Time Surveillance",
                venue: "IEEE ICOCT, Bengaluru, Karnataka, India",
                status: "To be published in IEEE Xplore",
                year: "2024",
                description: "Developed an innovative real-time surveillance system leveraging advanced AI algorithms for crime detection and prevention with high accuracy tracking capabilities.",
                link: "#"
              },
              {
                title: "Classification and Environmental Analysis of Microplastics for a Sustainable Ecosystem using AI",
                venue: "Unpublished Research",
                status: "In Review",
                year: "2025",
                description: "Comprehensive research on AI-powered microplastic detection and environmental impact analysis for sustainable ecosystem monitoring.",
                link: "#"
              }
            ].map((paper, index) => (
              <div key={index} className="animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <Card className="hover-lift group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="mb-2">{paper.year}</Badge>
                      <Badge variant="outline" className="text-xs">{paper.status}</Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                      {paper.title}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-primary/80">
                      {paper.venue}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {paper.description}
                    </p>
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read Paper
                      </Button>
                      {paper.status === "To be published in IEEE Xplore" && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          <Code className="mr-2 h-4 w-4" />
                          IEEE Xplore
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Technical <span className="gradient-text">Skills</span></h2>
            <p className="text-lg text-muted-foreground">Interactive visualization of my technical expertise</p>
          </div>

          <SkillsVisualization skills={skills} />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <a 
              href="https://www.coursera.org/learner/saachi-jain-1911" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block cursor-pointer hover-lift group"
            >
              <h2 className="text-4xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                <span className="gradient-text">Over 15+ Certifications</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
            <p className="text-lg text-muted-foreground mt-4">Professional development and learning achievements</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Achievements & <span className="gradient-text">Recognition</span></h2>
            <p className="text-lg text-muted-foreground">Awards and leadership positions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-lift animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4"><span className="gradient-text">Recommendations</span></h2>
            <p className="text-lg text-muted-foreground">What others say about my work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recommendations.map((rec, index) => (
              <Card key={index} className="hover-lift animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{rec.text}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{rec.name}</p>
                      <p className="text-sm text-muted-foreground">{rec.position}</p>
                      <p className="text-sm text-muted-foreground">{rec.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Let's <span className="gradient-text">Connect</span></h2>
            <p className="text-lg text-muted-foreground mb-12">
              I'm always interested in new opportunities and collaborations
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/jainsaachi1911' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/saachijain1911/' },
                { icon: Code, label: 'LeetCode', href: 'https://leetcode.com/u/jainsaachi1911/' },
                { icon: Mail, label: 'Email', href: 'mailto:jainsaachi1911@gmail.com' }
              ].map((social, index) => (
                <Card key={index} className="hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6 text-center">
                    <social.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="font-medium">{social.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" className="hover-lift">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            2025 Saachi Jain. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;