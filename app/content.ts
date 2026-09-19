export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  stack: string[];
  visual: "dashboard" | "orbit" | "studio" | "notes" | "summary";
  image?: string;
  imageAlt?: string;
  details: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

export type Article = {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  body: string[];
  placeholder?: boolean;
  chapters?: { title: string; text: string; takeaway: string; steps: string[] }[];
  url?: string;
};

// Existing portfolio content, updated using the supplied CVs.
// Role-specific CVs confirm graduate status; older projects remain from the live portfolio.
// Sample articles are illustrative placeholders, not published case studies.
export const portfolio = {
  "name": "Theodore Kasyfillah",
  "initials": "TK",
  "role": "Product Designer & Digital Builder",
  "email": "theodorekasyfillah06@gmail.com",
  "avatar": "/imported-portfolio/portrait.jpg",
  "hero": {
    "greeting": "Hello, I'm Theo",
    "lineOne": "I do design, research, and also code sometimes",
    "lineTwo": "",
    "description": "Hi!! I’m Theo, an Information Systems graduate. I do design, research, and also code sometimes. I enjoy connecting user needs, business goals, and technology to create experiences that actually useful for a lot of people.",
    "scrollLabel": "About Me"
  },
  "about": {
    "heading": "About Theo",
    "description": "Hi! I'm Theodore Kasyfillah—feel free to call me Theo. I'm an Information Systems graduate from Universitas Indonesia with experience in product design, UX research, and product thinking. Alongside client design work, I've explored data analysis and full-stack development through university group projects. I enjoy understanding problems, collaborating across disciplines, and turning insights into useful digital experiences.",
    "note": "Great design is born of simplicity and clarity."
  },
  "education": {
    "degree": "Information Systems Graduate",
    "institution": "Universitas Indonesia",
    "year": "Aug 2022 – Jul 2026",
    "description": "Graduated in Information Systems with coursework spanning human-computer interaction, digital product management, databases, information system design and analysis, and software development.",
    "highlights": [
      "Teaching Assistant for Digital Product Management in the 2025/2026 odd semester.",
      "Relevant coursework: Human Computer Interaction, Digital Product Management, Database, IT Project Management, Information System Design Analysis, Information System Project, Platform-Based Programming, and Customer Relationship Management."
    ]
  },
  "stats": [
    {
      "value": "10+",
      "label": "Clients I've Worked With"
    },
    {
      "value": "2+",
      "label": "Years of Work Experience"
    },
    {
      "value": "∞",
      "label": "Things I Want to Learn"
    }
  ],
  "experience": [
    {
      "id": "xlsmart",
      "logo": "/logos/xlsmart.png",
      "initials": "XL",
      "company": "XLSMART",
      "role": "UX Designer Intern",
      "period": "Apr 2026 – Present",
      "type": "Internship",
      "description": "Designing and refining customer-facing interfaces for XL PRIORITAS and XL SATU as part of ongoing product design work.",
      "highlights": [
        "Support UI/UX execution across digital products and customer touchpoints for two telecommunications services.",
        "Collaborate with cross-functional teams to align designs with product guidelines."
      ],
      "current": true
    },
    {
      "id": "freelance",
      "logo": "",
      "initials": "FR",
      "company": "Independent",
      "role": "Freelance UX Designer",
      "period": "Mar 2024 – Present",
      "type": "Freelance",
      "description": "Working with 10+ clients to translate user needs and business requirements into web and mobile experiences.",
      "highlights": [
        "Deliver wireframes, interactive prototypes, and high-fidelity interfaces.",
        "Work directly with clients to define requirements and reflect their business goals."
      ],
      "current": true
    },
    {
      "id": "180dc",
      "logo": "/logos/180dc.png",
      "initials": "180",
      "company": "180 DC Consulting UI",
      "role": "Outsourced Project Analyst",
      "period": "Jun 2025 – Aug 2025",
      "type": "Project-based",
      "description": "Engaged as an external project analyst to audit a client application, translating user behavior and application-flow analysis into actionable UX recommendations.",
      "highlights": [
        "Analyzed user behavior data and application flows to identify usage patterns, pain points, and product improvement opportunities.",
        "Collaborated remotely with the project team to synthesize audit findings into practical product and UX recommendations."
      ],
      "current": false
    },
    {
      "id": "experience-1",
      "logo": "/logos/ristek.png",
      "initials": "RI",
      "company": "Ristek Fasilkom UI",
      "role": "Digital Product Designer",
      "period": "Mar 2024 – Feb 2026",
      "type": "Organization",
      "description": "Progressed from Digital Product Designer to Division Lead, collaborating with engineers and product managers while mentoring new designers.",
      "highlights": [
        "Delivered designs that balanced user needs and technical constraints.",
        "Earned the Best Member award in Q2 for consistent delivery and teamwork.",
        "Led talent recruitment and mentoring for new UI/UX designers."
      ],
      "current": false
    },
    {
      "id": "experience-2",
      "logo": "/logos/compfest.jpg",
      "initials": "CF",
      "company": "COMPFEST 16",
      "role": "Creative Manager",
      "period": "Nov 2023 – Nov 2024",
      "type": "Organization",
      "description": "Led a 30+ person creative team, including 6 PICs/VPICs, to define and execute the event's visual direction across digital and physical materials.",
      "highlights": [
        "Coordinated creative strategy with multiple divisions to align with program goals.",
        "Maintained visual consistency through structured design feedback and design systems."
      ],
      "current": false
    },
    {
      "id": "experience-4",
      "logo": "/logos/open-house.png",
      "initials": "OH",
      "company": "Open House Fasilkom UI 2023",
      "role": "UI/UX Staff",
      "period": "August 2023 - November 2023",
      "type": "Organization",
      "description": "Designed a user-friendly registration page by conducting user analysis and iterative improvements. Helped drive 750+ sign-ups by enhancing the user experience and aligning the flow with event goals.",
      "highlights": [
        "Conducted user analysis to understand the needs and behavior of prospective students.",
        "Designed an intuitive and user-friendly registration page through iterative design and feedback.",
        "Played a key role in enhancing the user experience and ensuring a smooth registration process aligned with the event’s goals."
      ],
      "current": false
    },
    {
      "id": "experience-5",
      "logo": "/logos/bem.jpg",
      "initials": "BE",
      "company": "BEM Fasilkom UI",
      "role": "Art & Culture Department Staff",
      "period": "May 2023 – Dec 2023",
      "type": "Organization",
      "description": "Initiated art-based programs to foster creativity and collaboration among students. Organized campus activities that engaged 200+ participants and integrated arts into student development initiatives.",
      "highlights": [],
      "current": false
    }
  ],
  "projects": [
    {
      "id": "wattwallet",
      "title": "WattWallet",
      "category": "UX Research",
      "year": "2025",
      "summary": "A gamified energy-saving and donation app that earned Runner-up at the Portal 7 UI/UX Design Competition.",
      "stack": [
        "User Research",
        "Design Thinking",
        "UI/UX Design"
      ],
      "details": [
        "Aug – Oct 2025. Conducted user research using the Design Thinking framework to define pain points and shape a user-centered energy-saving and donation experience.",
        "Awarded Runner-up at the Portal 7 UI/UX Design Competition in October 2025."
      ],
      "visual": "summary"
    },
    {
      "id": "ux-audit-180dc",
      "title": "UX Audit · 180 DC Consulting UI",
      "category": "UX Research",
      "year": "2025",
      "summary": "An application audit translating user behavior and flow analysis into actionable product recommendations.",
      "stack": [
        "UX Audit",
        "User-flow Analysis",
        "Research Synthesis"
      ],
      "details": [
        "Jun – Aug 2025. Recruited as an External Project Analyst to audit a client application.",
        "Analyzed user behavior data and application flows to identify usage patterns, pain points, and product improvement opportunities.",
        "Collaborated with a remote project team to synthesize findings into actionable UX recommendations."
      ],
      "visual": "summary"
    },
    {
      "id": "project-1",
      "title": "Open House Fasilkom UI 2023",
      "category": "UI Design",
      "year": "",
      "summary": "Designed the Home Registration Page for Open House Fasilkom UI 2023, featuring a countdown, event details, benefits, FAQs, and contact access for a seamless attendee experience.",
      "stack": [
        "UI/UX Design",
        "Registration Page",
        "Event"
      ],
      "visual": "studio",
      "image": "/imported-portfolio/project-1.png",
      "imageAlt": "Open House Fasilkom UI 2023",
      "details": [],
      "liveUrl": "https://dribbble.com/shots/25345283-Open-House-Fasilkom-UI-2023-Home-Registration-Page"
    },
    {
      "id": "project-2",
      "title": "Pemira Fasilkom UI 2023 Website",
      "category": "UI Design",
      "year": "",
      "summary": "Designed the Landing Page, Candidate Overview, and E-Voting pages for Pemira Fasilkom UI 2023, ensuring an intuitive experience with clear information, smooth navigation, and secure voting functionality.",
      "stack": [
        "UI/UX Design",
        "E-Voting",
        "Election"
      ],
      "visual": "studio",
      "image": "/imported-portfolio/project-2.png",
      "imageAlt": "Pemira Fasilkom UI 2023 Website",
      "details": []
    },
    {
      "id": "project-3",
      "title": "SIBeasiswa NG",
      "category": "UX Research",
      "year": "",
      "summary": "Designed a user-friendly scholarship website and CMS as part of open recruitment for Ristek Fasilkom Ul's Digital Product Design SIG. The platform simplifies scholarship discovery, application management, and document submission for students, while offering efficient admin tools for managing and reviewing submissions.",
      "stack": [
        "UI/UX Design",
        "CMS",
        "Scholarship"
      ],
      "visual": "studio",
      "image": "/imported-portfolio/project-3.png",
      "imageAlt": "SIBeasiswa NG",
      "details": [],
      "liveUrl": "https://dribbble.com/shots/25344350-SIBeasiswa-NG-A-Solution-for-Efficient-Scholarship-Management"
    },
    {
      "id": "project-4",
      "title": "The 47th Jazz Goes to Campus Website",
      "category": "UI Design",
      "year": "",
      "summary": "Designed for The 47th Jazz Goes to Campus Website, the Homepage introduces the event, the Gallery showcases photos and highlights, the About Us section tell the history of the event, and the Band Registration page offers a streamlined registration process for band contest participant.",
      "stack": [
        "UI/UX Design",
        "Event",
        "Festival"
      ],
      "visual": "studio",
      "image": "/imported-portfolio/project-4.png",
      "imageAlt": "The 47th Jazz Goes to Campus Website",
      "details": []
    },
    {
      "id": "project-5",
      "title": "RISTEK Summer Event Website Revamp",
      "category": "UI Design",
      "year": "",
      "summary": "Worked on a small revamp for RISTEK Summer Event 2024 website, including adjustments to the landing page and event page for improved clarity and visual flow. Added dynamic forms to streamline the registration process, making it more seamless and interactive for participants.",
      "stack": [
        "UI/UX Design",
        "Revamp",
        "Tech Event"
      ],
      "visual": "studio",
      "image": "/imported-portfolio/project-5.png",
      "imageAlt": "RISTEK Summer Event Website Revamp",
      "details": []
    },
    {
      "id": "project-6",
      "title": "InteractEd: Redefining Early Education!",
      "category": "UX Research",
      "year": "",
      "summary": "My group and I designed InteractEd for HCI course final project, InteractEd is an interactive learning platform for kids aged 6–13. It uses project-based learning to help children develop skills, explore interests, and collaborate with peers in a fun and engaging way.",
      "stack": [
        "UI/UX Design",
        "College Project",
        "Education"
      ],
      "visual": "studio",
      "image": "/imported-portfolio/project-6.png",
      "imageAlt": "InteractEd: Redefining Early Education!",
      "details": [],
      "liveUrl": "https://dribbble.com/shots/25348449-InteractEd-Redefining-Early-Education"
    },
    {
      "id": "project-7",
      "title": "Healthcare Mobile App",
      "category": "UI Design",
      "year": "",
      "summary": "Designed for an e-health application as a contract project during my time as a Digital Product Design member at Ristek Fasilkom UI, the app includes features like surveys, e-learning, document management, and consultation. It provides users with a seamless and user-friendly experience, enabling easy access to health resources and efficient interaction with healthcare providers.",
      "stack": [
        "UI/UX Design",
        "Mobile",
        "Healthcare"
      ],
      "visual": "studio",
      "image": "/imported-portfolio/project-7.png",
      "imageAlt": "Healthcare Mobile App",
      "details": []
    },
    {
      "id": "project-8",
      "title": "Football Super App",
      "category": "UI Design",
      "year": "",
      "summary": "Designed a football application as a contract project during my time as a Digital Product Design member at Ristek Fasilkom UI featuring news, standings, player and coach details, match results, and schedules. The app delivers a comprehensive and user-friendly experience, keeping fans informed and engaged with their favorite teams and competitions.",
      "stack": [
        "UI/UX Design",
        "Mobile",
        "Football"
      ],
      "visual": "studio",
      "image": "/imported-portfolio/project-8.png",
      "imageAlt": "Football Super App",
      "details": []
    },
    {
      "id": "project-9",
      "title": "Tax Centre UI Website",
      "category": "UI Design",
      "year": "2024–2025",
      "summary": "Designed the official Tax Centre UI website across two project phases, translating user insights into a clean, responsive interface.",
      "stack": [
        "UI/UX Design",
        "Company Profile",
        "Tax"
      ],
      "visual": "studio",
      "image": "/imported-portfolio/project-9.png",
      "imageAlt": "Tax Centre UI Website",
      "details": [
        "Nov 2024 – Feb 2025. Worked as a freelance website designer on the official Tax Centre UI website.",
        "Iterated designs based on user insights and collaborated with developers on implementation, maintaining institutional branding and improving access to tax-related information."
      ]
    },
    {
      "id": "project-10",
      "title": "Cari.in: Competition & Team Finder",
      "category": "Product Strategy",
      "year": "2025",
      "summary": "Cari.in is an innovative digital platform designed to help Indonesian university students discover competition opportunities, form teams, develop practical skills, and build digital portfolios tailored to current and future industry demands.\n This project was presented in a business plan competition, where we successfully ranked in the Top 5 finalists.",
      "stack": [
        "Business Plan",
        "EdTech",
        "Startup"
      ],
      "visual": "studio",
      "image": "/imported-portfolio/project-10.png",
      "imageAlt": "Cari.in: Competition & Team Finder",
      "details": [
        "May – Jun 2025. Conducted market validation and defined an MVP strategy for competition discovery, team formation, and portfolio building.",
        "Presented the concept at IO/FEST UNTAR 2025 and placed among the Top 5 finalists."
      ],
      "liveUrl": "https://drive.google.com/file/d/14XUMxkMtvEtYhvKr26OLze8K_QthDL7Q/view?usp=sharing"
    },
    {
      "id": "project-11",
      "title": "Artera: New Hope For Digital Artist",
      "category": "Product Strategy",
      "year": "",
      "summary": "Artera is a digital platform developed to support and empower Indonesian illustrators and digital artists through a fair, transparent system focused on copyright protection.\nThe platform offers features for showcasing and selling artworks, global market access, fair pricing guidelines, and a supportive, educational community.",
      "stack": [
        "Digital Art",
        "University Project",
        "Creative Platform"
      ],
      "visual": "studio",
      "image": "/imported-portfolio/project-11.png",
      "imageAlt": "Artera: New Hope For Digital Artist",
      "details": [],
      "liveUrl": "https://drive.google.com/file/d/1DzX2wkF_qjFlhSi_VW8kwr5uFX3mHpDz/view?usp=sharing"
    },
    {
      "id": "movie-sentiment",
      "title": "Movie Audience Sentiment Analysis",
      "category": "Data",
      "year": "2025",
      "summary": "A university group study comparing audience sentiment around Man of Steel and Superman using 24,000 YouTube comments.",
      "stack": [
        "Sentiment Analysis",
        "VADER",
        "TF-IDF",
        "YouTube Data API"
      ],
      "details": [
        "Sep – Dec 2025. Contributed to a comparative team study using 24,000 comments from eight YouTube videos collected through YouTube Data API v3.",
        "The team combined text preprocessing, VADER, N-grams, and TF-IDF to compare sentiment, release-phase trends, and recurring audience topics."
      ],
      "visual": "summary"
    },
    {
      "id": "ufc-analysis",
      "title": "UFC Event Data Analysis",
      "category": "Data",
      "year": "2025",
      "summary": "A university team analysis of fighter statistics, match outcomes, and event data.",
      "stack": [
        "Exploratory Data Analysis",
        "Statistical Testing",
        "Model Evaluation"
      ],
      "details": [
        "Apr – Jun 2025. Contributed to a group project exploring fighter statistics, match outcomes, and UFC event data.",
        "The project included exploratory visualizations, chi-square testing, and comparisons of classification, regression, and clustering models."
      ],
      "visual": "summary"
    },
    {
      "id": "site-management",
      "title": "Site Management System",
      "category": "Software Development",
      "year": "2025",
      "summary": "Full-stack development for a university group project using Next.js and Go.",
      "stack": [
        "Next.js",
        "Go",
        "Full-Stack Development"
      ],
      "details": [
        "Jan – Jun 2025. Developed Next.js frontend interfaces as part of a university project team.",
        "Implemented backend functionality using Go, contributing across both frontend and backend."
      ],
      "visual": "summary"
    },
    {
      "id": "apapmedika",
      "title": "APAPMedika",
      "category": "Software Development",
      "year": "2024",
      "summary": "Full-stack development of an insurance subfeature in a university healthcare application project.",
      "stack": [
        "Vue.js",
        "Spring Boot",
        "Full-Stack Development"
      ],
      "details": [
        "Oct – Dec 2024. Built Vue.js interfaces for the insurance subfeature in a university group project.",
        "Implemented backend functionality for the insurance subfeature using Spring Boot."
      ],
      "visual": "summary"
    }
  ] satisfies Project[],
  "writing": [
    {
      "id": "before-the-pixels",
      "title": "Before the pixels, ask better questions.",
      "category": "Design process",
      "date": "2026-09-18",
      "readTime": "2 min read",
      "summary": "A small exploration of how a vague brief becomes a clearer design direction.",
      "placeholder": true,
      "body": [
        "Imagine a brief that says: make the dashboard better. It sounds like a design task, but it leaves the important questions unanswered. Better for whom? During which moment? What should someone be able to do after looking at it? Before opening a design file, write down what is known and what still needs to be understood.",
        "In this example, the dashboard belongs to a learning app. A student might not need another chart. They might need help deciding what to study next. That changes the question from how to display more data to how to make the next step understandable. Conversations and observation can help test whether that is actually the problem.",
        "A first prototype could show a single recommendation, the reason behind it, and a way to act. Keep the explanation visible and let people question it. Then observe whether they understand the suggestion and can choose their next step. The prototype is useful because it helps test an idea, even if the first version is wrong."
      ]
    },
    {
      "id": "less-but-clearer",
      "title": "Less on the screen. More room to think.",
      "category": "Interface design",
      "date": "2026-09-18",
      "readTime": "2 min read",
      "summary": "An example story about hierarchy, attention, and making the next action easier to find.",
      "placeholder": true,
      "body": [
        "Picture a page where every panel has a bright border, every number is large, and every button looks important. Nothing is technically hidden, yet it is hard to know where to begin. This fictional interface gives us a useful question: what deserves attention first?",
        "Start with the task. If someone came here to review progress, the most relevant summary should be easy to find. Supporting details can sit nearby with less emphasis. Try changing spacing, grouping, and type size before adding another color. A quieter interface can still contain useful detail.",
        "Once the page has a reading order, check whether the action follows naturally from the information. A recommendation separated from its action creates another small search task. In a prototype, place them together and ask someone to walk through what they would do next. Their explanation can reveal gaps that visual polish cannot fix."
      ]
    },
    {
      "id": "prototype-to-learn",
      "title": "A prototype is a question you can touch.",
      "category": "Creative technology",
      "date": "2026-09-18",
      "readTime": "2 min read",
      "summary": "Exploring the space between a design idea and something you can actually try.",
      "placeholder": true,
      "body": [
        "A polished prototype can take days and still leave the main uncertainty unresolved. For this example, imagine a new way to browse saved ideas. The question is simple: can someone find an idea again without remembering its exact title? That gives the prototype a specific job.",
        "Create a small set of sample ideas, a few meaningful groups, and a working path through them. A clickable design may be enough. If the question depends on typing or scrolling, a little code might help. Choose the medium that makes the uncertain part possible to experience.",
        "Watch where someone pauses, what they expect to happen, and how they recover when the first path does not work. Avoid treating a successful click as the whole story. Use what you observe to refine the question and decide what to try next. The prototype can be disposable; the learning should carry forward."
      ]
    }
  ] as Article[],
  "skills": [
    "UI/UX Design",
    "Figma",
    "Wireframing",
    "User Research",
    "Product Management",
    "Prototyping",
    "HTML & CSS",
    "Tailwind CSS",
    "Next.js",
    "Framer Motion",
    "Scrum / Agile",
    "Python & Django",
    "Java",
    "Flutter",
    "Adobe Premiere Pro",
    "Vue.js",
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Leadership",
    "Creativity & Innovation",
    "Organizational Culture",
    "Event Organizing",
    "Human Capital Management",
    "Managerial",
    "Marketing",
    "Team Leadership",
    "UI Design",
    "Interactive Prototyping",
    "User-flow Analysis",
    "Miro",
    "Whimsical",
    "A/B Testing",
    "Feature Prioritization",
    "Requirements Definition",
    "Market Validation",
    "MVP Planning",
    "SQL",
    "Power BI",
    "Exploratory Data Analysis",
    "Data Visualization",
    "Sentiment Analysis",
    "Statistical Testing",
    "Model Evaluation",
    "Research Synthesis",
    "Go",
    "Spring Boot",
    "Django",
    "Team Management",
    "Cross-team Collaboration"
  ],
  "contact": {
    "heading": "Let's Connect",
    "accent": "",
    "description": "Do you have a project idea, a question, or simply wish to connect? Feel free to reach out through social media or email, I’d be glad to talk further!"
  },
  "socials": [
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/theodore-kasyfillah-0ba985247/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/theokasyfillah"
    }
  ]
};
