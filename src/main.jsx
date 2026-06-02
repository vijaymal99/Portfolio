import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Send,
  Server,
  Sparkles,
} from 'lucide-react';
import './styles.css';

const contact = {
  email: 'babhanaval@gmail.com',
  phone: '7080410703',
  location: 'Varanasi, Uttar Pradesh',
  github: 'https://github.com/vijaymal99',
  linkedin: 'https://linkedin.com/in/vijaymal-yadav-3b745130b',
  resume: '/Vijaymal_Yadav_Resume_v3.pdf',
};

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'SQL', 'C++', 'C'],
  },
  {
    title: 'Data Science / ML',
    icon: BrainCircuit,
    skills: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Scikit-Learn',
      'OpenCV',
      'CNN',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'SQLite', 'Git', 'GitHub', 'VS Code'],
  },
];

const projects = [
  {
    title: 'Spam Email Detection System',
    type: 'Machine Learning',
    link: 'https://github.com/vijaymal99/Spam-Email-Detector',
    description:
      'Built a Naive Bayes based spam classifier with NLP preprocessing and an interactive Streamlit interface.',
    bullets: [
      'Implemented text preprocessing, Bag of Words, and probability-based classification.',
      'Achieved 90.62% accuracy with Precision, Recall, and F1-Score evaluation.',
      'Created a Streamlit UI for fast interactive spam detection.',
    ],
    tags: ['Python', 'Naive Bayes', 'NLP', 'Streamlit'],
  },
  {
    title: 'AI Skin Disease Detection System',
    type: 'Deep Learning',
    link: 'https://github.com/vijaymal99/SkinAI',
    description:
      'Developed a CNN image classification workflow to detect and categorize skin diseases from images.',
    bullets: [
      'Built preprocessing pipelines for resizing, normalization, and augmentation.',
      'Used OpenCV and Scikit-Learn for image processing, features, and evaluation.',
      'Designed prediction workflows for multiple disease categories.',
    ],
    tags: ['Python', 'CNN', 'OpenCV', 'Scikit-Learn'],
  },
  {
    title: 'Student Skill Recommendation Platform',
    type: 'Recommendation System',
    description:
      'Designed an ML-assisted platform that recommends skills, tools, and learning roadmaps for students.',
    bullets: [
      'Mapped interests to career goals using ML filtering and rule-based heuristics.',
      'Delivered structured guidance for stronger student onboarding.',
      'Focused recommendations around practical, goal-oriented learning paths.',
    ],
    tags: ['Python', 'Machine Learning', 'Recommendations'],
  },
  {
    title: 'Quickoline Startup Backend',
    type: 'Backend Contributor',
    link: 'https://github.com/viratech07/Quickoline-Master-Backend',
    description:
      'Contributed backend APIs, database operations, business logic, and feature integrations for a startup system.',
    bullets: [
      'Developed scalable REST APIs with Node.js and Express.js.',
      'Handled MongoDB operations and end-to-end feature integration.',
      'Tested and debugged APIs for reliability and performance.',
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
];

const education = [
  {
    title: 'B.Tech - Computer Science Engineering',
    place: 'Veer Bahadur Singh Purvanchal University',
    timeline: '2023 - 2027 Expected',
    detail:
      'Relevant coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, and OOPs.',
  },
];

const certifications = [
  'Python for Data Science - Coursera / NPTEL',
  'SQL & DBMS Fundamentals',
  'Participant - Bharat Innovation Conclave 2025',
];

function App() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Vijaymal portfolio home">
          Vijay
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            Data Science & Machine Learning Engineer
          </p>
          <h1>Vijaymal Yadav builds AI-powered web and backend systems.</h1>
          <p className="hero-text">
            Computer Science Engineering student experienced in Machine
            Learning, Data Science, Python development, REST APIs, and
            production-minded backend systems.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#projects">
              View Projects <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href={contact.resume} target="_blank" rel="noreferrer">
              Resume <Download size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-contact" aria-label="Contact details">
            <span>
              <MapPin size={16} aria-hidden="true" />
              {contact.location}
            </span>
            <a href={`mailto:${contact.email}`}>
              <Mail size={16} aria-hidden="true" />
              {contact.email}
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Developer workspace visual">
          <img src="/portfolio-hero.png" alt="" />
        </div>
      </section>

      <section className="intro-band" aria-label="Portfolio highlights">
        <div className="metric">
          <strong>4</strong>
          <span>Featured Projects</span>
        </div>
        <div className="metric">
          <strong>90.62%</strong>
          <span>Spam Model Accuracy</span>
        </div>
        <div className="metric">
          <strong>2027</strong>
          <span>B.Tech Expected</span>
        </div>
      </section>

      <section className="section two-column">
        <div>
          <p className="section-kicker">
            <Rocket size={16} aria-hidden="true" />
            Profile
          </p>
          <h2>Solving real-world problems with Data Science, AI/ML, and software development.</h2>
        </div>
        <p>
          Vijaymal works across Python, SQL, JavaScript, Node.js, MongoDB,
          Pandas, NumPy, Scikit-Learn, OpenCV, and CNN-based image
          classification. His work includes AI-powered applications, backend API
          systems, recommendation logic, and practical ML evaluation workflows.
        </p>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-kicker">
            <BriefcaseBusiness size={16} aria-hidden="true" />
            Projects
          </p>
          <h2>Selected Work</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <span>{project.type}</span>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} repository`}
                  >
                    <ExternalLink size={18} aria-hidden="true" />
                  </a>
                ) : (
                  <Code2 size={18} aria-hidden="true" />
                )}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-points">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="section-kicker">
            <Code2 size={16} aria-hidden="true" />
            Skills
          </p>
          <h2>Technical Toolkit</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article className="skill-card" key={title}>
              <div className="skill-title">
                <Icon size={20} aria-hidden="true" />
                <h3>{title}</h3>
              </div>
              <div className="skill-list">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section resume-section" id="experience">
        <div className="section-heading">
          <p className="section-kicker">
            <GraduationCap size={16} aria-hidden="true" />
            Education & Achievements
          </p>
          <h2>Academic Foundation</h2>
        </div>
        <div className="resume-grid">
          {education.map((item) => (
            <article className="resume-card" key={item.title}>
              <span>{item.timeline}</span>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <p>{item.detail}</p>
            </article>
          ))}
          <article className="resume-card">
            <span>Certifications</span>
            <h3>
              <Award size={20} aria-hidden="true" />
              Certifications & Achievements
            </h3>
            <ul className="clean-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div>
          <p className="section-kicker">
            <Mail size={16} aria-hidden="true" />
            Contact
          </p>
          <h2>Open to AI/ML, backend, and Python development opportunities.</h2>
          <p>
            Reach out for collaborations, internships, backend work, or
            data-driven product ideas.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${contact.email}`}>
            <Mail size={18} aria-hidden="true" /> Email
          </a>
          <a className="button secondary" href={contact.resume} target="_blank" rel="noreferrer">
            <Download size={18} aria-hidden="true" /> Resume
          </a>
          <a
            className="icon-link"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github size={22} aria-hidden="true" />
          </a>
          <a
            className="icon-link"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={22} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-lines">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          <span>{contact.location}</span>
        </div>
      </section>

      <footer>
        <span>
          <MapPin size={16} aria-hidden="true" />
          {contact.location}
        </span>
        <span>Designed and built with React for Vijaymal Yadav.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
