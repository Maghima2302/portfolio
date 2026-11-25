import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUpRight,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconCheck,
  IconCode,
  IconHeart,
  IconMail,
  IconMenu2,
  IconPalette,
  IconPhone,
  IconSparkles,
  IconStar,
  IconX,
} from "@tabler/icons-react";
import { CoffeeDoodle, LovingDoodle, ReadingDoodle, SittingDoodle } from "@/components/portfolio/doodles";

export function meta() {
  return [
    { title: "Maghima Lakshmi A | Software Developer & UI/UX Designer" },
    {
      name: "description",
      content:
        "Maghima Lakshmi A's creative developer portfolio: enterprise web development, UI/UX design, LeetCode problem solving, and AI & data science.",
    },
  ];
}

export const SOCIALS = {
  github: "https://github.com/Maghima2302",
  portfolioRepo: "https://github.com/Maghima2302/portfolio",
  leetcode: "https://leetcode.com/u/maghimaaa/",
  linkedin: "https://www.linkedin.com/in/maghima-lakshmi-a",
  figma: "https://www.figma.com/@maghima", // Replace with your exact Figma profile or file link
  email: "maghima005@gmail.com",
  phone: "+91 7418885563",
  whatsapp: "https://wa.me/917418885563?text=Hi%20Maghima%2C%20I%20saw%20your%20creative%20portfolio!",
};

const SHEETDB_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SHEETDB_URL) ||
  "https://sheetdb.io/api/v1/selwjxlsgvb85";

const nav = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Design Studio", "studio"],
  ["Education", "education"],
  ["Contact", "contact"],
];

const skills: Record<string, string[]> = {
  Programming: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  Frontend: ["React.js", "React Native", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Django", "Flask", "REST APIs", "API Integration"],
  Database: ["MySQL", "PostgreSQL", "MongoDB"],
  "AI & Data Science": ["Machine Learning", "Deep Learning", "Data Analysis", "CNN", "LSTM", "Data Visualization"],
  "Design & Tools": ["Figma", "Canva", "Power BI", "Tableau", "Git", "GitHub", "VS Code"],
};

const projects = [
  {
    n: "01",
    title: "Human Resource Management System",
    type: "ENTERPRISE APPLICATION",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "Django"],
    description:
      "An enterprise HRM platform designed to manage employee and organizational workflows through role-based interfaces.",
    details: [
      "Developed responsive dashboards and forms.",
      "Built reusable frontend components and integrated REST APIs.",
      "Contributed to employee management, attendance, leave, project, procurement and asset management workflows.",
    ],
    className: "project-one",
  },
  {
    n: "02",
    title: "AI-Powered Smart Waste Sorting System",
    type: "AI / COMPUTER VISION",
    tags: ["Python", "Deep Learning", "Computer Vision", "YOLOv8"],
    description:
      "An AI-powered waste classification concept using computer vision and deep learning techniques.",
    details: [
      "Explored YOLOv8 and CNN-based approaches.",
      "Worked on image-based waste detection and classification.",
      "Designed a QR-code-based traceability and reward mechanism for waste disposal activities.",
    ],
    className: "project-two",
  },
  {
    n: "03",
    title: "Crop & Fertilizer Recommendation System",
    type: "MACHINE LEARNING",
    tags: ["Python", "Machine Learning", "Decision Tree"],
    description:
      "A machine learning application recommending suitable crops and fertilizers based on agricultural parameters.",
    details: [
      "Used Decision Tree Classification.",
      "Processed agricultural input features.",
      "Generated crop and fertilizer recommendations.",
    ],
    className: "project-three",
  },
];

const experience = [
  {
    date: "AUG 2026 — PRESENT",
    role: "Software Developer",
    company: "MHCognition",
    location: "Chennai, India",
    description: "Contributing to production enterprise applications and business workflows.",
    points: [
      "Developing responsive, reusable interfaces with React.js, JavaScript, TypeScript and Tailwind CSS.",
      "Integrating REST APIs and backend services across employee, attendance, leave, project, procurement, asset and inventory modules.",
      "Building forms, tables, dashboards, filters and pagination for role-based workflows.",
      "Debugging, testing, UI validation, performance optimization and deployment in collaboration with backend developers.",
    ],
  },
  {
    date: "2025 — JUL 2026",
    role: "Software Developer Intern",
    company: "MHCognition",
    location: "Chennai, India",
    description: "Contributed to a production-oriented Human Resource Management enterprise application.",
    points: [
      "Developed responsive React interfaces and integrated REST APIs and backend services.",
      "Contributed to employee, attendance, leave, project, procurement, asset and inventory modules.",
      "Built reusable components, forms, tables, dashboards and filters; gained experience in testing, Git and deployment.",
    ],
  },
  {
    date: "2024",
    role: "AI / Machine Learning Intern",
    company: "Edunet Foundation · AICTE",
    location: "Remote",
    description: "Developed an AI-based crop and fertilizer recommendation system using Python and machine learning.",
    points: [
      "Implemented Decision Tree Classification.",
      "Performed data preprocessing, model development and result analysis.",
    ],
  },
];

const certificates = [
  ["Python for Data Science", "NPTEL"],
  ["Introduction to Machine Learning", "NPTEL"],
  ["Data Analysis with Python", "NPTEL"],
  ["Microsoft Power BI", "Microsoft"],
  ["TATA Data Visualization", "Forage"],
  ["PWS Power BI", "Forage"],
  ["Data Science and Analysis", "HP LIFE"],
  ["Introduction to Data Science", "Cisco Networking"],
];

const education = [
  [
    "2022 — 2026",
    "B.Tech Computer Science Engineering",
    "Artificial Intelligence & Data Science · Vels University, Chennai",
    "CGPA 8.8",
  ],
  [
    "2021 — 2022",
    "Higher Secondary Education",
    "Nellai Nadar Matriculation Higher Secondary School, Chennai",
    "81%",
  ],
  [
    "2019 — 2020",
    "Secondary Education",
    "Nellai Nadar Matriculation Higher Secondary School, Chennai",
    "79%",
  ],
];

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        <span>✳</span> {eyebrow}
      </div>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export default function HomeRoute() {
  const [menu, setMenu] = useState(false);
  const [skill, setSkill] = useState("All");
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);
  const [studioFilter, setStudioFilter] = useState("All");
  const [palette, setPalette] = useState("#DCCCF7");
  const [sticker, setSticker] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formFeedback, setFormFeedback] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setFormStatus("error");
      setFormFeedback("Please fill out all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setFormStatus("error");
      setFormFeedback("Please provide a valid email address.");
      return;
    }

    setFormStatus("loading");
    setFormFeedback("");

    try {
      const response = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              name: trimmedName,
              email: trimmedEmail,
              subject: trimmedSubject,
              message: trimmedMessage,
              date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
              Name: trimmedName,
              Email: trimmedEmail,
              Subject: trimmedSubject,
              Message: trimmedMessage,
              Date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`SheetDB returned ${response.status}`);
      }

      setFormStatus("success");
      setFormFeedback(
        `Thank you, ${trimmedName}! Your note has been recorded in my contact sheet. I'll get back to you soon ♡`
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFormStatus("error");
      setFormFeedback(
        "Could not save to the spreadsheet right now. Please email me directly or message on WhatsApp below!"
      );
    }
  };

  return (
    <div className="portfolio">
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Maghima home">
          maghima<span>.</span>
        </a>
        <nav
          className={menu ? "main-nav open" : "main-nav"}
          aria-label="Main navigation"
        >
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">
          Let’s talk <IconArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
        >
          {menu ? <IconX /> : <IconMenu2 />}
        </button>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="availability">
                <span /> OPEN TO CREATIVE OPPORTUNITIES
              </div>
              <div className="hero-hello">Hello there, I’m</div>
              <h1>
                Maghima
                <br />
                <span>Lakshmi</span>
                <i>✳</i>
              </h1>
              <div className="hero-role">
                SOFTWARE DEVELOPER <b>✦</b> UI/UX ENTHUSIAST <b>✦</b> AI & DATA SCIENCE
              </div>
              <p>
                Designing meaningful experiences. Building intelligent solutions.{" "}
                <strong>Turning ideas into reality.</strong>
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  Explore my work <IconArrowUpRight size={18} />
                </a>
                <a className="button outline" href="#contact">
                  Let’s connect <IconArrowRight size={18} />
                </a>
              </div>

              {/* SOCIAL PILLS IN HERO */}
              <div className="hero-socials">
                <a
                  href={SOCIALS.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Maghima on LeetCode"
                >
                  <IconBrandLeetcode size={16} /> LeetCode
                </a>
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Maghima on GitHub"
                >
                  <IconBrandGithub size={16} /> GitHub
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Maghima on LinkedIn"
                >
                  <IconBrandLinkedin size={16} /> LinkedIn
                </a>
                <a
                  href={SOCIALS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <IconBrandWhatsapp size={16} /> WhatsApp
                </a>
              </div>

              <div className="resume-note">
                Resume available upon request <span>↗</span>
              </div>
            </div>

            <div className="hero-art">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <span className="art-spark spark-one">✳</span>
              <span className="art-spark spark-two">✦</span>
              <span className="art-heart">♡</span>
              <div className="hero-art-blob" />
              <div className="doodle-hero">
                <SittingDoodle ink="#35283F" accent="#c5adeb" />
              </div>
              <div className="art-note note-top">
                <IconSparkles size={16} /> made with curiosity
              </div>
              <div className="art-note note-bottom">
                <span>✿</span> ideas in progress
              </div>
              <div className="art-caption">
                A LITTLE BIT OF CODE, A LOT OF HEART <span>♡</span>
              </div>
            </div>
          </div>

          <a href="#about" className="scroll-cue">
            <span>
              <IconArrowDown size={15} />
            </span>{" "}
            SCROLL TO EXPLORE
          </a>
          <div className="hero-index">PORTFOLIO / 2026</div>
        </section>

        {/* MARQUEE TICKER */}
        <div className="ticker">
          <div>
            DEVELOPER <span>✳</span> DESIGN THINKER <span>✳</span> PROBLEM SOLVER <span>✳</span>{" "}
            LEETCODE PROBLEM SOLVER <span>✳</span> ALWAYS LEARNING <span>✳</span> DEVELOPER{" "}
            <span>✳</span> DESIGN THINKER <span>✳</span> PROBLEM SOLVER <span>✳</span> LEETCODE
            PROBLEM SOLVER <span>✳</span> ALWAYS LEARNING <span>✳</span>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <section id="about" className="section about-section">
          <div className="about-art">
            <div className="about-blob" />
            <ReadingDoodle ink="#35283F" accent="#edc5d9" />
            <span className="about-star">✳</span>
            <div className="art-note about-note">a curious mind ♡</div>
          </div>
          <Reveal className="about-copy">
            <SectionHeading eyebrow="THE PERSON BEHIND THE PIXELS" title="A little about me.">
              A creative mind with a developer’s toolkit.
            </SectionHeading>
            <p>
              I’m <strong>Maghima Lakshmi A</strong>, a Computer Science Engineering graduate
              specializing in Artificial Intelligence and Data Science from Vels University, Chennai,
              with a CGPA of 8.8.
            </p>
            <p>
              As a Software Developer at MHCognition, I contribute to production enterprise
              applications and business workflows, building responsive interfaces and connecting
              them with robust RESTful backend services. I love combining clean code, thoughtful
              design, and data-driven problem solving.
            </p>
            <div className="about-chips">
              <span>✦ &nbsp; Software Development</span>
              <span>✦ &nbsp; UI/UX Design</span>
              <span>✦ &nbsp; AI & Machine Learning</span>
              <span>✦ &nbsp; Data Science</span>
              <span>✦ &nbsp; Problem Solving</span>
            </div>
            <a className="text-link" href="#experience">
              More about my journey <IconArrowRight size={17} />
            </a>
          </Reveal>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section skills-section">
          <Reveal>
            <SectionHeading eyebrow="MY CREATIVE TOOLKIT" title="A little bit of everything.">
              The tools and technologies I use to bring ideas to life.
            </SectionHeading>
            <div className="filter-row" aria-label="Filter skills">
              {["All", ...Object.keys(skills)].map((item) => (
                <button
                  key={item}
                  className={skill === item ? "active" : ""}
                  onClick={() => setSkill(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="skills-grid">
              {Object.entries(skills)
                .filter(([name]) => skill === "All" || skill === name)
                .map(([name, list], i) => (
                  <div className="skill-card" key={name}>
                    <div className={`skill-icon icon-${i % 3}`}>
                      {i % 3 === 0 ? <IconCode /> : i % 3 === 1 ? <IconPalette /> : <IconSparkles />}
                    </div>
                    <h3>{name}</h3>
                    <Tags items={list} />
                  </div>
                ))}
            </div>
          </Reveal>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section experience-section">
          <Reveal>
            <SectionHeading eyebrow="WHERE I'VE BEEN" title="The journey so far.">
              Learning, building, and growing along the way.
            </SectionHeading>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={item.role}>
                  <div className="timeline-date">
                    {item.date}
                    <span>{item.location}</span>
                  </div>
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <div>
                      <span className="company">{item.company}</span>
                      <h3>{item.role}</h3>
                      <p>{item.description}</p>
                    </div>
                    <details>
                      <summary>
                        Explore the role <IconArrowDown size={15} />
                      </summary>
                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section projects-section">
          <Reveal>
            <div className="heading-row">
              <SectionHeading
                eyebrow="SELECTED WORK"
                title="Ideas, brought to life."
              >
                A collection of meaningful projects, built with purpose and curiosity.
              </SectionHeading>
              <span className="handwritten">made with care ♡</span>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.n}>
                  <div className={`project-visual ${project.className}`}>
                    <div className="visual-top">
                      <span>✳ &nbsp; {project.type}</span>
                      <span>0{Number(project.n)}</span>
                    </div>
                    {project.n === "01" ? (
                      <div className="mock-browser">
                        <div className="mock-bar">
                          <span>● ● ●</span>
                          <span>workspace / overview</span>
                        </div>
                        <div className="mock-content">
                          <div className="mock-sidebar">
                            <i />
                            <i />
                            <i />
                            <i />
                          </div>
                          <div className="mock-dashboard">
                            <b>Good morning, team ✳</b>
                            <div className="mock-stats">
                              <i />
                              <i />
                              <i />
                            </div>
                            <div className="mock-chart">
                              <span />
                              <span />
                              <span />
                              <span />
                              <span />
                              <span />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : project.n === "02" ? (
                      <div className="visual-symbol">
                        ♻<small>THINK BETTER<br />SORT SMARTER</small>
                      </div>
                    ) : (
                      <div className="visual-symbol plant">
                        ✳<small>GROWING IDEAS<br />WITH DATA</small>
                      </div>
                    )}
                    <div className="visual-bottom">CONCEPTUAL VISUAL · NOT A SCREENSHOT</div>
                  </div>
                  <div className="project-info">
                    <div className="project-number">{project.n} / FEATURED PROJECT</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Tags items={project.tags} />
                    <button className="text-link" onClick={() => setSelected(project)}>
                      View case study <IconArrowUpRight size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        {/* DESIGN STUDIO SECTION */}
        <section id="studio" className="section studio-section">
          <Reveal>
            <div className="studio-intro">
              <div>
                <SectionHeading
                  eyebrow="THE DESIGN STUDIO"
                  title="Designing experiences, not just interfaces."
                >
                  I believe great digital experiences combine functionality, usability and visual
                  storytelling. My interest in UI/UX design helps me think beyond code and focus on how
                  people interact with digital products.
                </SectionHeading>
                <a
                  href={SOCIALS.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="figma-label"
                  style={{ textDecoration: "none" }}
                >
                  <IconBrandFigma size={20} /> Exploring with Figma{" "}
                  <IconArrowUpRight size={15} />
                </a>
              </div>
              <div className="studio-doodle">
                <LovingDoodle ink="#35283F" accent="#e8b9d2" />
              </div>
            </div>
            <div className="filter-row">
              {["All", "Web", "Mobile", "Wireframes", "Explorations"].map((item) => (
                <button
                  key={item}
                  className={studioFilter === item ? "active" : ""}
                  onClick={() => setStudioFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="studio-empty">
              <span>✧</span>
              <div>
                <h3>Good things are in the making.</h3>
                <p>
                  Figma designs and design system explorations can be linked directly here.{" "}
                  {studioFilter !== "All" && `${studioFilter} previews will appear here.`}
                </p>
              </div>
              <a
                href={SOCIALS.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Open Figma workspace <IconArrowUpRight size={17} />
              </a>
            </div>
          </Reveal>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="section education-section">
          <Reveal>
            <SectionHeading eyebrow="ALWAYS LEARNING" title="The foundations.">
              A little background on the things that got me here.
            </SectionHeading>
            <div className="education-grid">
              {education.map(([date, title, school, result]) => (
                <article className="education-card" key={date}>
                  <div className="education-top">
                    <span>✳</span>
                    <small>{date}</small>
                  </div>
                  <h3>{title}</h3>
                  <p>{school}</p>
                  <b>{result}</b>
                </article>
              ))}
            </div>
            <div className="cert-header">
              <div>
                <div className="eyebrow">
                  <span>✳</span> KEEPING CURIOUS
                </div>
                <h3>Learning never stops.</h3>
              </div>
              <p>Certifications & courses</p>
            </div>
            <div className="cert-grid">
              {certificates.map(([name, issuer]) => (
                <details className="cert-card" key={name}>
                  <summary>
                    <span className="cert-icon">✦</span>
                    <span>
                      <b>{name}</b>
                      <small>{issuer}</small>
                    </span>
                    <IconArrowUpRight size={17} />
                  </summary>
                  <p>
                    Certification: {name} · Issuer: {issuer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ACHIEVEMENTS & ACTIVITIES */}
        <section className="section achievements-section">
          <Reveal>
            <SectionHeading eyebrow="BEYOND THE DESK" title="Little milestones, big learning." />
            <div className="achievement-grid">
              <article>
                <span>01 / BOOTCAMP</span>
                <h3>ZOHO Developer Bootcamp</h3>
                <p>Gained practical exposure to Zobot development at ZOHO Corporation.</p>
              </article>
              <article>
                <span>02 / PAPER PRESENTATION</span>
                <h3>Industry 5.0 in Logistics</h3>
                <p>
                  Presented a technical paper on logistics and supply chain at MOP Vaishnav College.
                </p>
              </article>
              <article>
                <span>03 / HACKATHON</span>
                <h3>Learning dashboard</h3>
                <p>
                  Participated in a hackathon at Jeppiaar Institute of Technology, developing a
                  basic learning dashboard.
                </p>
              </article>
            </div>
            <div className="competency-row">
              <div>
                <h3>Things I bring to the table</h3>
                <Tags
                  items={[
                    "Problem Solving",
                    "Logical Thinking",
                    "Analytical Thinking",
                    "Quick Learning",
                    "Leadership",
                    "Adaptability",
                    "Team Collaboration",
                  ]}
                />
              </div>
              <div>
                <h3>Languages</h3>
                <p>
                  Tamil · Native
                  <br />
                  English · Professional proficiency
                  <br />
                  Telugu · Basic
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* PLAYGROUND SECTION */}
        <section className="section playground-section">
          <Reveal>
            <div className="playground" style={{ backgroundColor: palette }}>
              <div>
                <div className="eyebrow">
                  <span>✳</span> JUST FOR FUN
                </div>
                <h2>
                  Welcome to my little
                  <br />
                  creative playground.
                </h2>
                <p>A little creativity goes a long way!</p>
                <div className="palette-picker" aria-label="Choose playground color">
                  {["#DCCCF7", "#F5BFD5", "#FBE7B4", "#CDE9DF"].map((color) => (
                    <button
                      key={color}
                      style={{ backgroundColor: color }}
                      className={palette === color ? "selected" : ""}
                      onClick={() => setPalette(color)}
                      aria-label={`Choose ${color} background`}
                    >
                      {palette === color && <IconCheck size={14} />}
                    </button>
                  ))}
                </div>
              </div>
              <motion.button
                drag
                dragConstraints={{ left: -80, right: 80, top: -50, bottom: 50 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setSticker(!sticker)}
                className="play-sticker"
                aria-label="Drag or click the happy sticker"
              >
                {sticker ? "♡" : "☺"}
                <small>{sticker ? "LOVE THIS!" : "DRAG ME!"}</small>
              </motion.button>
              <span className="play-star">✳</span>
              <span className="play-heart">♡</span>
            </div>
          </Reveal>
        </section>

        {/* CONTACT SECTION WITH SHEETDB INTEGRATION */}
        <section id="contact" className="section contact-section">
          <Reveal>
            <div className="contact-grid">
              <div>
                <SectionHeading
                  eyebrow="SAY HELLO"
                  title="Have a project or opportunity in mind?"
                >
                  I’d love to connect, collaborate and explore new opportunities. Let’s create
                  something meaningful together.
                </SectionHeading>

                <a className="contact-line" href={`mailto:${SOCIALS.email}`}>
                  <IconMail size={20} /> {SOCIALS.email} <IconArrowUpRight size={16} />
                </a>
                <a className="contact-line" href={`tel:${SOCIALS.phone.replace(/\s+/g, "")}`}>
                  <IconPhone size={20} /> {SOCIALS.phone} <IconArrowUpRight size={16} />
                </a>
                <a
                  className="contact-line"
                  href={SOCIALS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandWhatsapp size={20} /> Chat on WhatsApp <IconArrowUpRight size={16} />
                </a>

                {/* SOCIAL LINKS BADGES */}
                <div className="social-placeholders">
                  <a
                    href={SOCIALS.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandLeetcode size={16} /> LeetCode
                  </a>
                  <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandGithub size={16} /> GitHub
                  </a>
                  <a
                    href={SOCIALS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandLinkedin size={16} /> LinkedIn
                  </a>
                  <a
                    href={SOCIALS.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandFigma size={16} /> Figma
                  </a>
                </div>

                <div className="contact-doodle">
                  <CoffeeDoodle ink="#35283F" accent="#e7b8d1" />
                </div>
              </div>

              {/* SHEETDB CONTACT FORM */}
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <h3>
                  Send a little note <span>♡</span>
                </h3>
                <p>Have an idea? I’d love to hear about it.</p>

                <label>
                  Full name
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    disabled={formStatus === "loading"}
                  />
                </label>

                <label>
                  Email address
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    disabled={formStatus === "loading"}
                  />
                </label>

                <label>
                  Subject
                  <input
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What’s this about?"
                    disabled={formStatus === "loading"}
                  />
                </label>

                <label>
                  Message
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me a little about your idea..."
                    rows={4}
                    disabled={formStatus === "loading"}
                  />
                </label>

                <button
                  className="button primary"
                  type="submit"
                  disabled={formStatus === "loading"}
                >
                  {formStatus === "loading" ? "Saving note... ♡" : "Send message"}{" "}
                  <IconArrowUpRight size={18} />
                </button>

                {formStatus === "success" && (
                  <div className="form-alert success" role="status">
                    <strong>✓ Message Sent!</strong>
                    <br />
                    {formFeedback}
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="form-alert error" role="alert">
                    <strong>Notice:</strong> {formFeedback}
                    <div style={{ marginTop: "8px" }}>
                      You can also reach me directly at{" "}
                      <a href={`mailto:${SOCIALS.email}`}>{SOCIALS.email}</a> or{" "}
                      <a href={SOCIALS.whatsapp} target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                      .
                    </div>
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div>
            <a href="#home" className="brand">
              maghima<span>.</span>
            </a>
            <p>
              Maghima Lakshmi A · Software Developer & UI/UX Designer
              <br />
              Making thoughtful things for the web.
            </p>
          </div>
          <div>
            <b>EXPLORE</b>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#studio">Design studio</a>
            <a href="#education">Education</a>
          </div>
          <div>
            <b>CONNECT & PROFILES</b>
            <a href={`mailto:${SOCIALS.email}`}>Email me</a>
            <a href={SOCIALS.leetcode} target="_blank" rel="noopener noreferrer">
              LeetCode (@maghimaaa)
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">
              GitHub (@Maghima2302)
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={SOCIALS.figma} target="_blank" rel="noopener noreferrer">
              Figma
            </a>
          </div>
          <a className="back-top" href="#home" aria-label="Back to top">
            ↑
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MAGHIMA LAKSHMI A</span>
          <span>Designed with creativity and built with code by Maghima Lakshmi. ♡</span>
        </div>
      </footer>

      {/* PROJECT CASE STUDY MODAL */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="case-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close case study"
            >
              <IconX />
            </button>
            <div className="eyebrow">
              <span>✳</span> PROJECT CASE STUDY / {selected.n}
            </div>
            <h2 id="case-title">{selected.title}</h2>
            <p>{selected.description}</p>
            <Tags items={selected.tags} />
            <h3>My contributions</h3>
            <ul>
              {selected.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <p className="case-note">
              Explore more on{" "}
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#7953a3", textDecoration: "underline" }}
              >
                GitHub
              </a>{" "}
              or connect via{" "}
              <a
                href={`mailto:${SOCIALS.email}`}
                style={{ color: "#7953a3", textDecoration: "underline" }}
              >
                email
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
