import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
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
  Sparkles,
} from 'lucide-react';

import './styles.css';


// =========================
// CONTACT INFORMATION
// =========================

const contact = {
  email: 'babhanaval@gmail.com',
  phone: '7080410703',
  location: 'Varanasi, Uttar Pradesh',

  github: 'https://github.com/vijaymal99',

  linkedin:
    'https://linkedin.com/in/vijaymal-yadav-3b745130b',

  resume: '/Vijaymal_Yadav_Resume.pdf',
};



// =========================
// SKILLS
// =========================

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      'Python',
      'SQL',
      'JavaScript',
      'C++',
      'C',
    ],
  },

  {
    title: 'Data Science & Machine Learning',
    icon: BrainCircuit,
    skills: [
      'Pandas',
      'NumPy',
      'Scikit-Learn',
      'Matplotlib',
      'EDA',
      'Classification',
      'Feature Engineering',
      'Model Evaluation',
      'OpenCV',
      'CNN',
    ],
  },

  {
    title: 'Deployment & Tools',
    icon: Rocket,
    skills: [
      'Streamlit',
      'Streamlit Cloud',
      'Joblib',
      'Git',
      'GitHub',
      'VS Code',
    ],
  },

  {
    title: 'Backend & Databases',
    icon: Database,
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'MongoDB',
      'MySQL',
      'SQLite',
    ],
  },

  {
    title: 'Core Computer Science',
    icon: Code2,
    skills: [
      'DSA',
      'DBMS',
      'OOPs',
      'Operating Systems',
      'Computer Networks',
    ],
  },
];


// =========================
// PROJECTS
// =========================

const projects = [
  {
    title: 'CreditWise - Loan Prediction System',

    type: 'Machine Learning',

    link: 'https://github.com/vijaymal99',

    liveLink:
      'https://vijaymal99-loan-prediction-ml-aap-l5t41b.streamlit.app/',

    description:
      'An end-to-end supervised Machine Learning system that predicts loan approval using multiple classification algorithms.',

    bullets: [
      'Performed data cleaning, EDA, missing-value handling, categorical encoding, and feature scaling.',
      'Implemented and compared K-Nearest Neighbors, Logistic Regression, and Naive Bayes classifiers.',
      'Evaluated models using Accuracy, Precision, Recall, F1-Score, and Confusion Matrix.',
      'Saved trained models and preprocessing objects using Joblib and deployed the application using Streamlit.',
    ],

    tags: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-Learn',
      'KNN',
      'Logistic Regression',
      'Naive Bayes',
      'Streamlit',
    ],
  },


  {
    title: 'Spam Email Detection System',

    type: 'Machine Learning / NLP',

    link:
      'https://github.com/vijaymal99/Spam-Email-Detector',

    description:
      'A machine learning application that classifies emails as spam or non-spam using Natural Language Processing.',

    bullets: [
      'Implemented text preprocessing and Bag of Words feature extraction.',
      'Built a Naive Bayes based spam email classification model.',
      'Achieved 90.62% accuracy with Precision, Recall, and F1-Score evaluation.',
      'Developed an interactive Streamlit interface for real-time spam detection.',
    ],

    tags: [
      'Python',
      'Naive Bayes',
      'NLP',
      'Bag of Words',
      'Streamlit',
    ],
  },


  {
    title: 'AI Skin Disease Detection System',

    type: 'Deep Learning',

    link:
      'https://github.com/vijaymal99/SkinAI',

    description:
      'A CNN-based image classification system designed to detect and categorize skin diseases from images.',

    bullets: [
      'Built an image preprocessing pipeline using resizing, normalization, and augmentation.',
      'Used OpenCV for image processing and preparation.',
      'Developed CNN-based multi-class image classification workflows.',
      'Implemented feature extraction and prediction workflows for disease categories.',
    ],

    tags: [
      'Python',
      'CNN',
      'OpenCV',
      'Image Processing',
      'Scikit-Learn',
    ],
  },


  {
    title: 'Quickoline Startup - Backend Contributor',

    type: 'Backend Development',

    link:
      'https://github.com/viratech07/Quickoline-Master-Backend',

    description:
      'Contributed to backend development for a startup project using Node.js, Express.js, MongoDB, and REST APIs.',

    bullets: [
      'Developed and integrated REST APIs using Node.js and Express.js.',
      'Implemented MongoDB database operations and business logic.',
      'Integrated backend features with the application workflow.',
      'Performed API testing and debugging.',
    ],

    tags: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
    ],
  },
];


// =========================
// EDUCATION
// =========================

const education = [
  {
    title: 'B.Tech - Computer Science Engineering',

    place:
      'Veer Bahadur Singh Purvanchal University',

    timeline: '2023 - 2027 Expected',

    detail:
      'Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, and OOPs.',
  },
];


// =========================
// APP
// =========================

function App() {
  return (
    <main>

      {/* =========================
          NAVBAR
      ========================== */}

      <nav
        className="site-nav"
        aria-label="Primary navigation"
      >

        <a
          className="brand"
          href="#home"
          aria-label="Vijaymal portfolio home"
        >
          Vijay
        </a>


        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#experience">
            Education
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

      </nav>


      {/* =========================
          HERO
      ========================== */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-copy">

          <p className="eyebrow">

            <Sparkles
              size={16}
              aria-hidden="true"
            />

            Data Science & ML Engineer | Python Developer

          </p>


          <h1>
            Vijaymal Yadav
          </h1>


          <p className="hero-text">

            Data Science & ML Engineer passionate about
            building practical Machine Learning solutions
            using Python, Data Science, and AI/ML.

          </p>


          <p className="hero-text">

            Computer Science Engineering student with
            hands-on experience in Machine Learning,
            Data Science, Python, SQL, REST APIs,
            and AI/ML applications.

          </p>


          <div
            className="hero-actions"
            aria-label="Primary actions"
          >

            <a
              className="button primary"
              href="#projects"
            >

              View Projects

              <ArrowRight
                size={18}
                aria-hidden="true"
              />

            </a>


            <a
              className="button secondary"
              href={contact.resume}
              target="_blank"
              rel="noreferrer"
            >

              Resume

              <Download
                size={18}
                aria-hidden="true"
              />

            </a>

          </div>


          <div
            className="hero-contact"
            aria-label="Contact details"
          >

            <span>

              <MapPin
                size={16}
                aria-hidden="true"
              />

              {contact.location}

            </span>


            <a
              href={`mailto:${contact.email}`}
            >

              <Mail
                size={16}
                aria-hidden="true"
              />

              {contact.email}

            </a>

          </div>

        </div>


        <div
          className="hero-visual"
          aria-label="Developer workspace visual"
        >

          <img
            src="/portfolio-hero.png"
            alt="Data Science and Machine Learning workspace"
          />

        </div>

      </section>


      {/* =========================
          HIGHLIGHTS
      ========================== */}

      <section
        className="intro-band"
        aria-label="Portfolio highlights"
      >

        <div className="metric">

          <strong>
            4
          </strong>

          <span>
            Featured Projects
          </span>

        </div>


        <div className="metric">

          <strong>
            90.62%
          </strong>

          <span>
            Spam Model Accuracy
          </span>

        </div>


        <div className="metric">

          <strong>
            2027
          </strong>

          <span>
            B.Tech Expected
          </span>

        </div>

      </section>


      {/* =========================
          PROFILE
      ========================== */}

      <section
        className="section two-column"
      >

        <div>

          <p className="section-kicker">

            <Rocket
              size={16}
              aria-hidden="true"
            />

            Profile

          </p>


          <h2>

            Building practical Machine Learning
            solutions with Python, Data Science,
            and AI/ML.

          </h2>

        </div>


        <p>

          I work with Python, SQL, Pandas, NumPy,
          Scikit-Learn, Matplotlib, OpenCV, and
          Machine Learning algorithms.

          My projects include classification,
          NLP, CNN-based image classification,
          data preprocessing, model evaluation,
          and Streamlit deployment.

          I also have experience developing REST
          APIs using Node.js and Express.js.

        </p>

      </section>


      {/* =========================
          PROJECTS
      ========================== */}

      <section
        className="section"
        id="projects"
      >

        <div className="section-heading">

          <p className="section-kicker">

            <BriefcaseBusiness
              size={16}
              aria-hidden="true"
            />

            Projects

          </p>


          <h2>
            Selected Work
          </h2>

        </div>


        <div className="project-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.title}
            >

              <div className="project-topline">

                <span>
                  {project.type}
                </span>


                <div className="project-links">

                  {project.link && (

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      title="GitHub"
                    >

                      <Github
                        size={18}
                        aria-hidden="true"
                      />

                    </a>

                  )}


                  {project.liveLink && (

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      title="Live Demo"
                    >

                      <ExternalLink
                        size={18}
                        aria-hidden="true"
                      />

                    </a>

                  )}

                </div>

              </div>


              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <ul className="project-points">

                {project.bullets.map((bullet) => (

                  <li key={bullet}>
                    {bullet}
                  </li>

                ))}

              </ul>


              <div className="tag-row">

                {project.tags.map((tag) => (

                  <span key={tag}>
                    {tag}
                  </span>

                ))}

              </div>


              {/* LIVE DEMO BUTTON */}

              {project.liveLink && (

                <div className="project-actions">

                  <a
                    className="project-demo-button"
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >

                    <Rocket
                      size={16}
                      aria-hidden="true"
                    />

                    Live Demo

                  </a>

                </div>

              )}

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          SKILLS
      ========================== */}

      <section
        className="section skills-section"
        id="skills"
      >

        <div className="section-heading">

          <p className="section-kicker">

            <Code2
              size={16}
              aria-hidden="true"
            />

            Skills

          </p>


          <h2>
            Technical Toolkit
          </h2>

        </div>


        <div className="skill-grid">

          {skillGroups.map(
            ({
              title,
              icon: Icon,
              skills,
            }) => (

              <article
                className="skill-card"
                key={title}
              >

                <div className="skill-title">

                  <Icon
                    size={20}
                    aria-hidden="true"
                  />

                  <h3>
                    {title}
                  </h3>

                </div>


                <div className="skill-list">

                  {skills.map((skill) => (

                    <span key={skill}>
                      {skill}
                    </span>

                  ))}

                </div>

              </article>

            )
          )}

        </div>

      </section>


      {/* =========================
          EDUCATION
      ========================== */}

      <section
        className="section resume-section"
        id="experience"
      >

        <div className="section-heading">

          <p className="section-kicker">

            <GraduationCap
              size={16}
              aria-hidden="true"
            />

            Education

          </p>


          <h2>
            Academic Foundation
          </h2>

        </div>


        <div className="resume-grid">

          {education.map((item) => (

            <article
              className="resume-card"
              key={item.title}
            >

              <span>
                {item.timeline}
              </span>


              <h3>
                {item.title}
              </h3>


              <p>
                {item.place}
              </p>


              <p>
                {item.detail}
              </p>

            </article>

          ))}


          <article className="resume-card">

            <span>
              Career Focus
            </span>


            <h3>

              <BrainCircuit
                size={20}
                aria-hidden="true"
              />

              Data Science & Machine Learning

            </h3>


            <p>

              Interested in building real-world
              Machine Learning applications,
              data-driven solutions, and AI-powered
              products using Python and modern
              Data Science tools.

            </p>

          </article>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================== */}

      <section
        className="section contact-section"
        id="contact"
      >

        <div>

          <p className="section-kicker">

            <Mail
              size={16}
              aria-hidden="true"
            />

            Contact

          </p>


          <h2>

            Open to Data Science,
            AI/ML, Python, and
            backend opportunities.

          </h2>


          <p>

            Reach out for collaborations,
            internships, Machine Learning
            projects, backend development,
            or data-driven product ideas.

          </p>

        </div>


        <div className="contact-actions">

          <a
            className="button primary"
            href={`mailto:${contact.email}`}
          >

            <Mail
              size={18}
              aria-hidden="true"
            />

            Email

          </a>


          <a
            className="button secondary"
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
          >

            <Download
              size={18}
              aria-hidden="true"
            />

            Resume

          </a>


          <a
            className="icon-link"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >

            <Github
              size={22}
              aria-hidden="true"
            />

          </a>


          <a
            className="icon-link"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >

            <Linkedin
              size={22}
              aria-hidden="true"
            />

          </a>

        </div>


        <div className="contact-lines">

          <a
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>


          <a
            href={`tel:${contact.phone}`}
          >
            {contact.phone}
          </a>


          <span>
            {contact.location}
          </span>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}

      <footer>

        <span>

          <MapPin
            size={16}
            aria-hidden="true"
          />

          {contact.location}

        </span>


        <span>
          Designed and built with React for Vijaymal Yadav.
        </span>

      </footer>

    </main>
  );
}


// =========================
// RENDER APP
// =========================

createRoot(
  document.getElementById('root')
).render(

  <React.StrictMode>

    <App />

  </React.StrictMode>

);