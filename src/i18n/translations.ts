export const translations = {
  es: {
    nav: {
      brand: "DevPortfolio",
      home: "Home",
      about: "About Me",
      resume: "Resume",
      projects: "Projects",
      contact: "Contact Me",
      resumeBtn: "Obtener CV",
    },
    home: {
      greeting: "Hola, soy",
      name: "Juan Developer",
      rolePrefix: "Transformo ideas en",
      solutions: [
        "Soluciones Web Escalables",
        "Interfaces Modernas & Glassmorphic",
        "Arquitecturas React / Next.js",
        "APIs Robustas & Código Limpio"
      ],
      description: "Desarrollador Full Stack apasionado por construir aplicaciones web de alto rendimiento, código elegante y experiencias de usuario excepcionales.",
      contactBtn: "Contáctame",
      resumeBtn: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      subtitle: "Apasionado por la tecnología, la arquitectura limpia y el diseño moderno.",
      descriptionParagraph1: "Soy un desarrollador de software enfocado en crear productos digitales modernos, intuitivos y altamente optimizados. Me especializo en el ecosistema JavaScript / TypeScript (React, Next.js, Node.js).",
      descriptionParagraph2: "Mi objetivo es aportar soluciones reales a problemas complejos, aplicando las mejores prácticas de arquitectura de código, pruebas y diseño responsive con estéticas glassmorphism de última generación.",
      stats: {
        experience: "Años de Experiencia",
        projects: "Proyectos Completados",
        satisfaction: "Compromiso de Calidad",
      },
      contactBtn: "Contáctame",
      resumeBtn: "Obtener CV",
    },
    resume: {
      title: "Mi Mi Trayectoria",
      subtitle: "Educación, Experiencia Profesional, Habilidades e Intereses.",
      tabs: {
        education: "Educación",
        experience: "Experiencia",
        skills: "Habilidades",
        interests: "Intereses",
      },
      educationList: [
        {
          degree: "Ingeniería / Licenciatura en Sistemas",
          institution: "Universidad Tecnológica",
          period: "2020 - Presente",
          description: "Especialización en desarrollo de software, algoritmos, bases de datos y arquitectura de sistemas distribuidos.",
        },
        {
          degree: "Certificación Full Stack Developer",
          institution: "Tech Academy Online",
          period: "2022 - 2023",
          description: "Desarrollo intensivo en React, Next.js, Node.js, Express, MongoDB y PostgreSQL.",
        }
      ],
      experienceList: [
        {
          role: "Senior Full Stack Developer",
          company: "Tech Solutions Inc.",
          period: "2023 - Presente",
          description: "Liderazgo de desarrollo frontend en Next.js, optimización de renderizado SSR/ISR, integración de microservicios y mentoría de equipo.",
        },
        {
          role: "Frontend Developer React",
          company: "Digital Studio Agency",
          period: "2021 - 2023",
          description: "Construcción de interfaces interactivas para clientes internacionales, desarrollo de sistemas de diseño UI en React y Tailwind CSS.",
        }
      ],
      interestsList: [
        {
          title: "Arquitectura de Software",
          description: "Diseño de patrones limpios, principios SOLID y optimización de rendimiento.",
        },
        {
          title: "Diseño UI/UX Glassmorphic",
          description: "Creación de experiencias visuales interactivas y animaciones fluidas con Motion.",
        },
        {
          title: "Open Source & Comunidad",
          description: "Colaboración en proyectos de código abierto y contribución al ecosistema dev.",
        },
        {
          title: "Inteligencia Artificial",
          description: "Exploración e integración de agentes IA y LLMs en aplicaciones web modernas.",
        }
      ],
      skillsCategories: [
        {
          category: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"]
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"]
        },
        {
          category: "Herramientas & DevOps",
          items: ["Git / GitHub", "Docker", "Vercel", "Jest / Vitest", "i18next", "Pnpm / Npm"]
        }
      ]
    },
    projects: {
      title: "Mis Proyectos",
      subtitle: "Una selección de trabajos desarrollados con código limpio y mejores prácticas.",
      featuredBadge: "DESTACADO",
      viewGithub: "Ver en GitHub",
      featuredProject: {
        title: "Next.js Personal Portfolio",
        date: "2024-12-20",
        description: "Portfolio personal SSR de alto rendimiento construido con Next.js 16, React 19 y TypeScript. Incluye sistema de diseño Dark Glassmorphism, enrutamiento i18n (es/en), animaciones dinámicas y componentes altamente optimizados.",
        githubUrl: "https://github.com/AlejoTorres2001/React-SSR-Personal-Portfolio"
      },
      projectList: [
        {
          title: "Chat.io — Real-time Messenger",
          date: "2023-06-10",
          description: "Aplicación de mensajería en tiempo real inspirada en WhatsApp Web. Construida con Node.js, Express, Socket.IO, MongoDB en backend y React en frontend.",
          githubUrl: "https://github.com"
        },
        {
          title: "URL Shortener Dev Platform",
          date: "2023-08-02",
          description: "Acortador de URLs completo con entorno de desarrollo en contenedores DevContainers. Construido con Next.js, Prisma ORM y API REST con métricas.",
          githubUrl: "https://github.com"
        },
        {
          title: "JWT Authentication FullStack",
          date: "2023-06-14",
          description: "Estrategia completa de autenticación JWT segura. Cubre mejores prácticas: refresh tokens, cookies httpOnly, rotación de tokens y protección de rutas.",
          githubUrl: "https://github.com"
        }
      ]
    },
    contact: {
      title: "Contáctame",
      subtitle: "¿Tienes un proyecto en mente o quieres trabajar juntos? ¡Envíame un mensaje!",
      form: {
        name: "Nombre Completo",
        namePlaceholder: "Tu nombre...",
        email: "Correo Electrónico",
        emailPlaceholder: "tu@email.com",
        subject: "Asunto",
        subjectPlaceholder: "Asunto del mensaje...",
        message: "Mensaje",
        messagePlaceholder: "Escribe tu mensaje aquí...",
        sendBtn: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito! Me pondré en contacto pronto.",
      },
      directTitle: "Información de Contacto",
      emailLabel: "Email Directo",
      locationLabel: "Ubicación",
      locationValue: "Buenos Aires, Argentina",
      socialsTitle: "Redes Sociales",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con Next.js, React, Tailwind CSS & Motion.",
    }
  },
  en: {
    nav: {
      brand: "DevPortfolio",
      home: "Home",
      about: "About Me",
      resume: "Resume",
      projects: "Projects",
      contact: "Contact Me",
      resumeBtn: "Get Resume",
    },
    home: {
      greeting: "Hello, I am",
      name: "Juan Developer",
      rolePrefix: "I transform ideas into",
      solutions: [
        "Scalable Web Solutions",
        "Modern & Glassmorphic Interfaces",
        "React / Next.js Architectures",
        "Robust APIs & Clean Code"
      ],
      description: "Full Stack Developer passionate about building high-performance web applications, elegant code, and exceptional user experiences.",
      contactBtn: "Contact Me",
      resumeBtn: "Get Resume",
    },
    about: {
      title: "About Me",
      subtitle: "Passionate about technology, clean architecture, and modern UI design.",
      descriptionParagraph1: "I am a software developer focused on building modern, intuitive, and highly optimized digital products. I specialize in the JavaScript / TypeScript ecosystem (React, Next.js, Node.js).",
      descriptionParagraph2: "My goal is to provide real solutions to complex problems by applying code architecture best practices, testing, and responsive design with state-of-the-art glassmorphism aesthetics.",
      stats: {
        experience: "Years of Experience",
        projects: "Completed Projects",
        satisfaction: "Quality Commitment",
      },
      contactBtn: "Contact Me",
      resumeBtn: "Get Resume",
    },
    resume: {
      title: "My Resume & Trajectory",
      subtitle: "Education, Professional Experience, Technical Skills & Interests.",
      tabs: {
        education: "Education",
        experience: "Experience",
        skills: "Skills",
        interests: "Interests",
      },
      educationList: [
        {
          degree: "Systems Engineering / Computer Science",
          institution: "Technological University",
          period: "2020 - Present",
          description: "Specialization in software engineering, algorithms, databases, and distributed systems architecture.",
        },
        {
          degree: "Full Stack Developer Certification",
          institution: "Tech Academy Online",
          period: "2022 - 2023",
          description: "Intensive training in React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.",
        }
      ],
      experienceList: [
        {
          role: "Senior Full Stack Developer",
          company: "Tech Solutions Inc.",
          period: "2023 - Present",
          description: "Leading frontend development in Next.js, optimizing SSR/ISR rendering, microservices integration, and team mentoring.",
        },
        {
          role: "Frontend React Developer",
          company: "Digital Studio Agency",
          period: "2021 - 2023",
          description: "Building interactive user interfaces for international clients, developing UI design systems in React and Tailwind CSS.",
        }
      ],
      interestsList: [
        {
          title: "Software Architecture",
          description: "Designing clean patterns, SOLID principles, and system performance optimizations.",
        },
        {
          title: "UI/UX Glassmorphic Design",
          description: "Creating interactive visual experiences and smooth animations using Motion.",
        },
        {
          title: "Open Source & Community",
          description: "Collaborating on open-source projects and contributing to the developer ecosystem.",
        },
        {
          title: "Artificial Intelligence",
          description: "Exploring and integrating AI agents and LLMs into modern web applications.",
        }
      ],
      skillsCategories: [
        {
          category: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"]
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"]
        },
        {
          category: "Tools & DevOps",
          items: ["Git / GitHub", "Docker", "Vercel", "Jest / Vitest", "i18next", "Pnpm / Npm"]
        }
      ]
    },
    projects: {
      title: "My Projects",
      subtitle: "A curated selection of projects built with clean code and best practices.",
      featuredBadge: "FEATURED",
      viewGithub: "View on GitHub",
      featuredProject: {
        title: "Next.js Personal Portfolio",
        date: "2024-12-20",
        description: "High-performance personal SSR portfolio built with Next.js 16, React 19, and TypeScript. Features Dark Glassmorphism design system, i18n routing (es/en), dynamic animations, and highly optimized components.",
        githubUrl: "https://github.com/AlejoTorres2001/React-SSR-Personal-Portfolio"
      },
      projectList: [
        {
          title: "Chat.io — Real-time Messenger",
          date: "2023-06-10",
          description: "Real-time messaging application inspired by WhatsApp Web. Built with Node.js, Express, Socket.IO, MongoDB on backend, and React on frontend.",
          githubUrl: "https://github.com"
        },
        {
          title: "URL Shortener Dev Platform",
          date: "2023-08-02",
          description: "Full-featured URL shortener with containerized dev environment using VS Code DevContainers. Built with Next.js, Prisma ORM, and REST API.",
          githubUrl: "https://github.com"
        },
        {
          title: "JWT Authentication FullStack",
          date: "2023-06-14",
          description: "Complete fullstack example of a secure JWT authentication strategy. Covers best practices: refresh tokens, httpOnly cookies, token rotation, and route protection.",
          githubUrl: "https://github.com"
        }
      ]
    },
    contact: {
      title: "Contact Me",
      subtitle: "Have a project in mind or want to collaborate? Send me a message!",
      form: {
        name: "Full Name",
        namePlaceholder: "Your name...",
        email: "Email Address",
        emailPlaceholder: "you@email.com",
        subject: "Subject",
        subjectPlaceholder: "Message subject...",
        message: "Message",
        messagePlaceholder: "Write your message here...",
        sendBtn: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! I'll get back to you soon.",
      },
      directTitle: "Contact Information",
      emailLabel: "Direct Email",
      locationLabel: "Location",
      locationValue: "Buenos Aires, Argentina",
      socialsTitle: "Social Links",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, React, Tailwind CSS & Motion.",
    }
  }
};

export type Language = "es" | "en";
