export type Project = {
  id: string;
  title: string;
  categories: string[];
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

export type CaseStudySection = {
  /** Anchor id on the case-study page. Avoid home-page ids like "about", "work" or "contact". */
  id: string;
  /** Short label used in the side navigation and the small eyebrow above the heading. */
  label: string;
  title: string;
  body: string[];
  /** A big sentence whose words light up as you scroll. Wrap words in *asterisks* to accent them. */
  statement?: { text: string; position?: "start" | "end" };
  /** Numbers that count up when they scroll into view. */
  stats?: { value: number; decimals?: number; prefix?: string; suffix?: string; label: string; source?: string }[];
  /** A highlighted pull quote. */
  quote?: { text: string; by?: string };
  /** A ✓/✗ comparison grid, e.g. competitors against features. A highlighted row stands out. */
  table?: { caption?: string; columns: string[]; rows: { label: string; note?: string; cells: boolean[]; highlight?: boolean }[] };
  /** Phases that reveal one by one as you scroll. A metric with `of` draws a bar (value / of). */
  timeline?: { kicker?: string; title: string; text?: string; points?: string[]; metrics?: { value: string; label: string; of?: number }[] }[];
  points?: string[];
  /**
   * Figures shown after the text. One image is shown as a figure; two or more become a
   * scrollytelling sequence (sticky image, captions scroll past). Leave `src` empty for a placeholder frame.
   */
  images?: CaseStudyImage[];
  /** Scrollytelling sequence of screens, e.g. one step per app module. */
  screens?: { label: string; note?: string; image: CaseStudyImage & { src: string } }[];
};

export type CaseStudyImage = { src?: string; alt: string; caption?: string; width?: number; height?: number };

export type CaseStudy = {
  /** URL: /case-studies/{slug} */
  slug: string;
  /** The project in `projects` this case study belongs to; its cover is reused. */
  projectId: string;
  title: string;
  tagline: string;
  year: string;
  /** Accent color for this case study's card and page. */
  accent: string;
  /** Shows a "draft" badge while the content is still placeholder text. */
  placeholder?: boolean;
  facts: { label: string; value: string }[];
  metrics: { value: string; label: string }[];
  sections: CaseStudySection[];
  /** Extra buttons at the end of the page, e.g. a live prototype. */
  links?: { label: string; href: string }[];
};

// Existing portfolio content, updated using the supplied CVs.
// Role-specific CVs confirm graduate status; older projects remain from the live portfolio.
// Sample articles are illustrative placeholders, not published case studies.
export const portfolio = {
  "showWriting": false,
  "name": "Theodore Kasyfillah",
  "initials": "TK",
  "role": "Product Designer & Digital Builder",
  "email": "theodorekasyfillah06@gmail.com",
  "avatar": "/Foto ceep.jpeg",
  "hero": {
    "greeting": "Hello,\nI'm Theo",
    "lineOne": "I love all things product, design, and technology.",
    "lineTwo": "",
    "description": "Hi!! I’m Theo, an Information Systems graduate with an interest in Product Management and digital product development. I enjoy connecting user needs, business goals, and technology to create experiences that actually useful for a lot of people.",
    "scrollLabel": "About Me"
  },
  "about": {
    "heading": "About Theo",
    "description": "Hi! I'm Theodore Kasyfillah—feel free to call me Theo. I'm an Information Systems graduate from Universitas Indonesia with experience in product design, UX research, and product thinking. Alongside client design work, I've explored data analysis and full-stack development through university group projects. I enjoy understanding problems, collaborating across disciplines, and turning insights into useful digital experiences."
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
      "startDate": "2026-04",
      "logo": "/logos/xlsmart.png",
      "initials": "XL",
      "company": "XLSMART",
      "role": "UX Designer Intern",
      "period": "Apr 2026 – Oct 2026",
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
      "startDate": "2024-03",
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
      "startDate": "2025-06",
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
      "startDate": "2024-03",
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
      "startDate": "2023-11",
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
      "startDate": "2023-08",
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
      "startDate": "2023-05",
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
      "categories": ["UX Research", "UI Design"],
      "year": "2025",
      "summary": "Watt Wallet is a gamified energy-saving and donation app designed to encourage users to adopt more sustainable daily habits while contributing to social causes. Developed using the Design Thinking framework, the project involved user research to identify key pain points and shape a user-centered experience that combines energy conservation, gamification, and donation features. The project was awarded Runner-up at the Portal 7 UI/UX Design Competition in October 2025.",
      "stack": [
        "User Research",
        "Design Thinking",
        "UI/UX Design"
      ],
      "details": [
        "This project is a gamified energy-saving and donation app designed to encourage users to adopt more sustainable daily habits while contributing to social causes. Developed using the Design Thinking framework, the project involved user research to identify key pain points and shape a user-centered experience that combines energy conservation, gamification, and donation features. The project was awarded Runner-up at the Portal 7 UI/UX Design Competition in October 2025."
      ],
      "visual": "summary",
      "liveUrl": "https://drive.google.com/file/d/1D_TyAbVuzG9qsxKzFCpsObtFjZRbyRBE/view?usp=sharing"
    },
    {
      "id": "ux-audit-180dc",
      "title": "UX Audit · 180 DC Consulting UI",
      "categories": ["UX Research"],
      "year": "2025",
      "summary": "I joined this project as an External Project Analyst to audit a client application. My team and I analyzed user behavior data and application flows to uncover usage patterns, pain points, and improvement opportunities, then translated our findings into actionable UX and product recommendations.",
      "stack": [
        "UX Audit",
        "User-flow Analysis",
        "Research Synthesis"
      ],
      "details": [
        "I joined this project as an External Project Analyst to audit a client application. My team and I analyzed user behavior data and application flows to uncover usage patterns, pain points, and improvement opportunities, then translated our findings into actionable UX and product recommendations."
      ],
      "visual": "summary"
    },
    {
      "id": "project-1",
      "title": "Open House Fasilkom UI 2023",
      "categories": ["UI Design", "UX Research"],
      "year": "2023",
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
      "categories": ["UI Design"],
      "year": "2023",
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
      "categories": ["UX Research", "UI Design"],
      "year": "2024",
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
      "categories": ["UI Design"],
      "year": "2024",
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
      "categories": ["UI Design"],
      "year": "2024",
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
      "categories": ["UX Research", "UI Design"],
      "year": "2024",
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
      "categories": ["UI Design"],
      "year": "2024",
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
      "categories": ["UI Design"],
      "year": "2024",
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
      "categories": ["UI Design"],
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
      "categories": ["Product Strategy"],
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
      "categories": ["Product Strategy"],
      "year": "2025",
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
      "categories": ["Data"],
      "year": "2025",
      "summary": "My group and I explored how audiences responded to Zack Snyder’s Man of Steel (2013) and James Gunn’s Superman (2025) through 24,000 comments from eight YouTube videos. Using sentiment analysis and text mining, we compared audience reactions across release phases and examined recurring topics to understand how viewers discussed the two interpretations of Superman.",
      "stack": [
        "Sentiment Analysis",
        "VADER",
        "TF-IDF",
        "YouTube Data API"
      ],
      "details": [
        "Sep – Dec 2025. Contributed to a university group study comparing audience sentiment toward Man of Steel (2013), directed by Zack Snyder, and Superman (2025), directed by James Gunn. The team collected 24,000 comments from eight YouTube videos through YouTube Data API v3.",
        "Combined text preprocessing and VADER sentiment analysis to explore audience reactions across release phases. N-grams and TF-IDF helped the team examine recurring words and topics, adding context to the sentiment comparison."
      ],
      "visual": "summary"
    },
    {
      "id": "ufc-analysis",
      "title": "UFC Event Data Analysis",
      "categories": ["Data"],
      "year": "2025",
      "summary": "My group and I analyzed UFC fighter statistics, match outcomes, and event data as part of a university project. Through exploratory visualizations, statistical testing, and comparisons of classification, regression, and clustering models, we investigated patterns in the data and explored how different analytical approaches could help us understand fighters and their match results.",
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
      "categories": ["Software Development"],
      "year": "2025",
      "summary": "Worked with a university project team to develop a Site Management System, contributing to both the frontend and backend. I built interfaces using Next.js and implemented backend functionality in Go, gaining hands-on experience working across the two layers of a web application.",
      "stack": [
        "Next.js",
        "Go",
        "Full-Stack Development"
      ],
      "details": [
        "Jan – Jun 2025. Contributed to the development of a Site Management System as part of a university project team, with responsibilities spanning frontend interfaces and backend functionality.",
        "Built frontend interfaces using Next.js and implemented backend functionality in Go. My contribution covered both layers of the application rather than focusing solely on interface design."
      ],
      "visual": "summary"
    },
    {
      "id": "apapmedika",
      "title": "APAPMedika",
      "categories": ["Software Development"],
      "year": "2024",
      "summary": "Developed the insurance subfeature for APAPMedika, a healthcare application built as a university group project. I created the frontend interfaces using Vue.js and implemented the supporting backend functionality with Spring Boot, contributing to the insurance module across both the user-facing and server-side layers.",
      "stack": [
        "Vue.js",
        "Spring Boot",
        "Full-Stack Development"
      ],
      "details": [
        "Oct – Dec 2024. Worked on the insurance subfeature within APAPMedika, a healthcare application developed collaboratively as a university project. My implementation scope focused on the insurance module, not the entire application.",
        "Built the module’s frontend interfaces in Vue.js and implemented its backend functionality using Spring Boot, contributing to both the user-facing experience and the server-side implementation."
      ],
      "visual": "summary"
    }
  ] satisfies Project[],
  // Case studies: each entry becomes a carousel card and a page at /case-studies/{slug}.
  "caseStudies": [
    {
      "slug": "wattwallet",
      "projectId": "wattwallet",
      "title": "WattWallet",
      "tagline": "Turning everyday energy saving into a game, where every saved kWh can become a voucher or electricity for a village that needs it.",
      "year": "2025",
      "accent": "#7cc8ef",
      "facts": [
        { "label": "Role", "value": "UX Researcher & UI Designer" },
        { "label": "Team", "value": "terartsy · Aileen Josephine Halim, Meutia Fajriyah, Theodore Kasyfillah" },
        { "label": "Competition", "value": "Portal 7 UI/UX Design · Ditmawa UI, 2025" },
        { "label": "Methods", "value": "Interviews, survey, secondary research, usability testing" }
      ],
      "metrics": [
        { "value": "2nd", "label": "Runner-up, Portal 7 UI/UX Design Competition" },
        { "value": "77.5", "label": "SUS score, good usability" },
        { "value": "6.1/7", "label": "Average SEQ, easy to use" },
        { "value": "20", "label": "People involved in research & testing" }
      ],
      "sections": [
        {
          "id": "overview",
          "label": "Overview",
          "title": "Small habits, bigger impact.",
          "body": [
            "WattWallet is a gamified energy-saving app designed by our team, terartsy, for the Portal 7 UI/UX Design Competition. It helps households see their electricity use in real time, stay within a monthly budget, and build saving habits through points, levels, and achievements.",
            "The points people earn can be exchanged for vouchers or donated as electricity access for households in underdeveloped (3T) villages, so saving energy benefits more than just the user's bill. We followed the Design Thinking process from research all the way to usability testing."
          ]
        },
        {
          "id": "background",
          "label": "Background",
          "title": "Indonesia uses more electricity every year, and few people think about saving it.",
          "statement": { "text": "Energy saving is an urgent issue in Indonesia, driven by *high* *consumption* and *low* *awareness.*" },
          "body": [
            "Left unaddressed, it burdens both the national energy system and the environment, which makes action important for SDG 7: clean, efficient, and sustainable energy."
          ],
          "stats": [
            { "value": 1285, "suffix": " kWh", "label": "Household electricity use per capita in 2023, up from 1,173 kWh in 2022", "source": "Ministry of Energy and Mineral Resources, 2024" },
            { "value": 42.25, "decimals": 2, "suffix": "%", "label": "Share of national electricity used by households", "source": "Ministry of Energy and Mineral Resources, 2024" },
            { "value": 623, "suffix": " g", "label": "CO₂ per kWh in Indonesia (2021), against a global average of 441 g", "source": "EMBER, 2023" },
            { "value": 6.5, "decimals": 1, "suffix": "%", "label": "People who recognized energy-saving labels in a 2019 survey", "source": "Climate Transparency, 2021" }
          ]
        },
        {
          "id": "research",
          "label": "Research",
          "title": "Listening before designing.",
          "body": [
            "We interviewed 3 people and ran an online survey with 11 respondents, most of them students aged 18–24 living in boarding houses, plus homemakers aged 35–47. Their households were split between prepaid (token) and postpaid electricity.",
            "Secondary research gave us direction. A study across 37 countries found that changing everyday behavior saves more energy than buying efficient appliances, so awareness alone isn't enough (Piao et al., 2023). A meta-analysis showed gamification helps sustain behavior change (Sanchez et al., 2022), and IoT monitoring can track household energy use in real time with an average error of just 0.03% (Rahman et al., 2024).",
            "We also reviewed PLN Mobile, the app most households already use. It covers bill payment and monthly usage monitoring, but it has no rewards, nothing that encourages saving, and no way to donate energy."
          ],
          "stats": [
            { "value": 3, "label": "In-depth user interviews" },
            { "value": 11, "label": "Online survey respondents" },
            { "value": 4, "label": "Studies and reports reviewed" }
          ],
          "points": [
            "Electricity bills often rise unpredictably, and prepaid users frequently run out of tokens without warning.",
            "People often forget to turn off devices they aren't using.",
            "Saving money is the main motivation, and rewards like vouchers, donations, and merchandise are a strong pull.",
            "People want an app that's easy to use, with notifications, gamification, and real-time progress tracking."
          ]
        },
        {
          "id": "define",
          "label": "Define",
          "title": "Five pain points, one clear persona.",
          "body": [
            "We brought the findings together in a persona: a 36-year-old homemaker in Depok with two children. She wants to be more disciplined about electricity so the monthly bill doesn't balloon, she's often caught off guard by sudden spikes, and she's drawn to apps that reward her with shopping vouchers."
          ],
          "quote": { "text": "If there were clear tracking and shopping rewards, I'd be much more motivated to save electricity.", "by": "Our persona, a homemaker in Depok" },
          "points": [
            "No visibility of real-time electricity usage.",
            "Difficulty managing and limiting monthly consumption.",
            "Shock from unpredictable electricity bills.",
            "Saving energy inconsistently because of low motivation.",
            "Reluctance to use a new app if its features feel complicated."
          ]
        },
        {
          "id": "ideation",
          "label": "Ideation",
          "title": "From “how might we” to what to build first.",
          "body": [
            "We turned each pain point into a How Might We question and brainstormed solutions for each one, then placed every idea on an impact–effort matrix to decide what belonged in the first version."
          ],
          "points": [
            "HMW provide real-time transparency of consumption? A real-time dashboard, smart meter/IoT plug monitoring, and daily or weekly usage notifications.",
            "HMW help users manage monthly consumption? A monthly budget plus alerts when usage gets close to the limit.",
            "HMW keep bills from being a surprise? AI-based monthly bill estimation and cost simulation from usage patterns.",
            "HMW motivate consistent saving? Points and levels, personal insights and achievements, and family or community challenges.",
            "HMW keep the app simple? A clean interface focused on core features and short, interactive onboarding."
          ],
          "images": [
            { "src": "/case-studies/wattwallet/prioritization.jpg", "width": 2000, "height": 1071, "alt": "Impact–effort matrix placing WattWallet feature ideas into four quadrants", "caption": "Impact–effort matrix. Quick wins such as the real-time dashboard, notifications, and gamification sit in the high-impact, low-effort quadrant." }
          ]
        },
        {
          "id": "structure",
          "label": "Structure",
          "title": "Mapping the journeys before the screens.",
          "body": [
            "We wrote user flows for six scenarios: onboarding and setup, a daily consumption check, earning and redeeming points, daily and weekly notifications, AI bill estimation, and personal achievements. These became an information architecture built around five pillars: Dashboard, Reward, Achievement, Reminder, and Notification."
          ],
          "images": [
            { "src": "/case-studies/wattwallet/information-architecture.jpg", "width": 2000, "height": 925, "alt": "Information architecture of WattWallet, from onboarding to five main sections", "caption": "Information architecture: onboarding leads into five main sections." },
            { "src": "/case-studies/wattwallet/user-flows-1.jpg", "width": 2000, "height": 1102, "alt": "User flows for onboarding, daily consumption check, and gamification", "caption": "User flows 1–3: onboarding, daily real-time check, and gamification and rewards." },
            { "src": "/case-studies/wattwallet/user-flows-2.jpg", "width": 2000, "height": 1238, "alt": "User flows for notifications, AI bill estimation, and achievements", "caption": "User flows 4–6: notifications, AI bill estimation, and personal achievements." }
          ]
        },
        {
          "id": "design-system",
          "label": "Design system",
          "title": "Bright, friendly, and consistent.",
          "body": [
            "We built a small design system before the high-fidelity screens: a blue and yellow palette with light-to-dark scales, Plus Jakarta Sans for typography, and shared components such as buttons, text fields, modals, dropdowns, tooltips, cards, and the bottom navigation bar."
          ],
          "images": [
            { "src": "/case-studies/wattwallet/design-system.jpg", "width": 2000, "height": 1082, "alt": "WattWallet design system showing colors, typography and components", "caption": "Colors, typography, and core components." }
          ]
        },
        {
          "id": "solution",
          "label": "Solution",
          "title": "Track it, save it, earn from it.",
          "body": [
            "The final design brings everything into five modules connected by a bottom navigation bar. Scroll through them below."
          ],
          "screens": [
            { "label": "Dashboard", "note": "Monthly consumption at a glance, with the chart turning red when usage climbs, plus quick actions and a spending estimate. Daily Check breaks usage down by day, week, or month and by appliance.", "image": { "src": "/case-studies/wattwallet/screens-dashboard.jpg", "width": 2000, "height": 934, "alt": "WattWallet dashboard and daily check screens" } },
            { "label": "Reward", "note": "Daily progress against a target earns points and levels. Points can be exchanged for vouchers or donated to bring electricity to households in other villages.", "image": { "src": "/case-studies/wattwallet/screens-reward.jpg", "width": 2000, "height": 934, "alt": "WattWallet reward, voucher and donation screens" } },
            { "label": "Achievement", "note": "Badges like Power Saver and Sustainable Streak celebrate progress. Monthly comparisons and personalized action plans help people get back on track.", "image": { "src": "/case-studies/wattwallet/screens-achievement.jpg", "width": 2000, "height": 732, "alt": "WattWallet achievement, comparison and action plan screens" } },
            { "label": "Reminder", "note": "An AI prediction estimates the end-of-month bill against the budget, with a cost breakdown and customizable reminders.", "image": { "src": "/case-studies/wattwallet/screens-reminder.jpg", "width": 2000, "height": 912, "alt": "WattWallet reminder and AI bill prediction screens" } },
            { "label": "Notification", "note": "Daily and weekly reports celebrate savings or flag overuse, with appliance breakdowns, energy-saving tips, and goal setting for the next week.", "image": { "src": "/case-studies/wattwallet/screens-notification.jpg", "width": 2000, "height": 721, "alt": "WattWallet daily and weekly notification screens" } }
          ]
        },
        {
          "id": "testing",
          "label": "Testing",
          "title": "Six testers, a 77.5 SUS score.",
          "body": [
            "We ran usability tests with 6 participants. The app scored 77.5 on the System Usability Scale, which counts as good usability, and averaged 6.1 out of 7 on the Single Ease Question, so most participants found the tasks easy."
          ],
          "stats": [
            { "value": 77.5, "decimals": 1, "label": "SUS score, good usability" },
            { "value": 6.1, "decimals": 1, "suffix": " / 7", "label": "Average Single Ease Question score" },
            { "value": 6, "label": "Usability testing participants" }
          ],
          "points": [
            "What worked: onboarding was clear, vouchers were a strong motivator, and people liked watching their progress and achievements.",
            "Next: move Daily Check and the AI bill prediction onto the main Dashboard.",
            "Next: give clear feedback after users set goals and reminders.",
            "Next: offer more contextual action recommendations and simplify the charts."
          ]
        },
        {
          "id": "outcome",
          "label": "Outcome",
          "title": "Runner-up at Portal 7, and room to grow.",
          "body": [
            "WattWallet won Runner-up at the Portal 7 UI/UX Design Competition in October 2025. Beyond the competition, we mapped out how the idea could grow:"
          ],
          "points": [
            "Partnerships with PLN, e-wallets, marketplaces, and NGOs to widen donation channels and diversify rewards.",
            "Expanding from urban households to communities such as neighborhoods, campuses, and offices, then scaling nationally through group challenges.",
            "Smart plugs and PLN smart-meter integration for more accurate real-time data.",
            "Measuring impact through donated kWh for 3T villages, estimated CO₂ reduction, retention, reward redemption, and user satisfaction."
          ],
          "statement": { "text": "WattWallet doesn't just motivate energy-saving habits. It's a trigger for *real* *steps* toward *sustainable* *energy.*", "position": "end" }
        }
      ]
    },
    {
      "slug": "artera",
      "projectId": "project-11",
      "title": "Artera",
      "tagline": "Managing a platform for Indonesian digital artists end to end, from five artist interviews to a PRD, four test waves, a go-to-market plan and a two-quarter roadmap.",
      "year": "2025",
      "accent": "#ffa14a",
      "facts": [
        { "label": "Role", "value": "Product Manager · team of 4" },
        { "label": "Team", "value": "Theodore Kasyfillah, Wahyu Aji Aruma Sekar Puri, Fern Khairunnisha Adelia Aufar, Christopher Matthew Hendarson" },
        { "label": "Context", "value": "Digital Product Management · Fasilkom UI, even semester 2024/2025" },
        { "label": "Deliverables", "value": "Discovery report, PRD, iteration report, GTM & launch plan, roadmap" }
      ],
      "metrics": [
        { "value": "5", "label": "Artist interviews in discovery" },
        { "value": "21", "label": "User stories across 5 MVP epics" },
        { "value": "12", "label": "Testers across 4 iteration waves" },
        { "value": "9.5/10", "label": "Perceived value in the final wave" }
      ],
      "sections": [
        {
          "id": "overview",
          "label": "Overview",
          "title": "One product, the whole lifecycle.",
          "body": [
            "Artera is a platform that helps Indonesian illustrators and digital artists show their work, protect it, and earn from it fairly. It brings an art showcase, a digital portfolio, jobs and commissions, and mentoring and education together in one place.",
            "This was a product management project, so the focus is less on the screens and more on the decisions behind them. We worked through every stage of the lifecycle: discovering the problem, defining requirements, prioritizing the MVP, validating it with users, and planning how it would launch and grow."
          ],
          "timeline": [
            { "kicker": "Plan & discover", "title": "Interviews, problem analysis, competitor scan", "text": "Individual discovery with five working artists, then a shared problem summary." },
            { "kicker": "Define", "title": "Product Requirements Document", "text": "Vision, goals, five personas, SMART success metrics, MVP analysis and 21 user stories." },
            { "kicker": "Design & build", "title": "High-fidelity prototype", "text": "Profile, Art Showcase, Jobs & Commissions, and Mentoring & Education." },
            { "kicker": "Test & iterate", "title": "Four waves of usability testing", "text": "12 participants on Maze, with a fix list after every wave." },
            { "kicker": "Launch & grow", "title": "Go-to-market, pricing and roadmap", "text": "Launch activities, a freemium-plus-commission model and two quarters of OKRs." }
          ]
        },
        {
          "id": "discovery",
          "label": "Discovery",
          "title": "Starting with the people the product is for.",
          "body": [
            "I began with individual discovery: in-depth interviews with five digital artists and illustrators in Jabodetabek who make illustrations, take commissions, freelance, exhibit and take part in artist communities. I asked how they got started, how they work, how they find clients and set prices, and what they wish existed.",
            "Three problems kept coming up: being underpaid by clients who don't value the work, AI models trained on art without permission, and a lack of exposure and mentorship for local artists. (Quotes below are translated from Indonesian.)"
          ],
          "quote": { "text": "Indonesian digital artists are actually really good. They're just not visible enough.", "by": "Interviewee 3, digital artist" },
          "points": [
            "Interviewee 5: finding clients on social media means chasing engagement first, and the local market rarely understands what art is worth, so clients willing to pay a fair price are hard to find.",
            "Interviewee 1: AI art basically takes from millions of artworks and merges them into one picture, and people misuse it, even if it will never replace art made by humans.",
            "Interviewee 2: mentors are rare in digital art, and many artists learn by trial and error. A mentoring system could really help."
          ],
          "stats": [
            { "value": 5, "label": "Artists interviewed in depth" },
            { "value": 6, "label": "Competing platforms reviewed" },
            { "value": 3, "label": "Recurring problems: pay, AI theft, exposure" }
          ]
        },
        {
          "id": "problem",
          "label": "Problem",
          "title": "Framing the problem before solving it.",
          "statement": { "text": "Indonesian illustrators are talented, but too often *underpaid,* *unprotected* and *unseen.*" },
          "body": [
            "As a team we framed the problem as situation, complication and key question, backed by secondary research on global competition, AI disruption, copyright and underpayment."
          ],
          "timeline": [
            { "kicker": "Current situation", "title": "Exploitation is common, protection is not", "points": ["Piracy and unauthorized use of artwork are widespread in the digital era.", "Unclear regulation and weak legal protection leave artists exposed to exploitation.", "Many Indonesian illustrators are underpaid or exploited by clients."] },
            { "kicker": "Complication", "title": "A gap between potential and opportunity", "text": "Global competition, AI disruption, weak copyright protection, economic vulnerability and little ecosystem support hold back illustrators' professional growth, income stability and long-term careers, and risk dimming a growing pool of creative talent." },
            { "kicker": "Key question", "title": "How can Indonesian illustrators build sustainable careers?", "text": "How can they thrive amid technological disruption and global competition, and what role can communities, educators and associations play in building a fair, empowering ecosystem?" }
          ]
        },
        {
          "id": "market",
          "label": "Market",
          "title": "Who it's for, and why existing platforms fall short.",
          "body": [
            "We segmented users into four groups: beginner illustrators, professional freelancers, buyers and collectors of digital art, and people learning digital art. All of them need a platform that's safe, educational and inclusive, where they can create, learn and connect with the community and with market opportunities.",
            "Then we benchmarked six platforms artists already use against the capabilities Artera would offer. Marketplaces like Fiverr and Upwork push prices down, social media depends on algorithms and engagement, and showcase sites like ArtStation and DeviantArt are dominated by international artists. None of them combines protection, fair work and learning for local artists."
          ],
          "table": {
            "caption": "Competitor analysis from our go-to-market and launch plans. The Artera row shows the planned feature set.",
            "columns": ["Authentication", "Artist profile", "Showcase & portfolio", "Copyright protection", "Jobs & commissions", "Forum", "Mentoring & education"],
            "rows": [
              { "label": "Fiverr", "note": "Global freelance marketplace", "cells": [true, true, false, false, true, false, false] },
              { "label": "Upwork", "note": "Long-term freelance projects", "cells": [true, true, false, false, true, false, false] },
              { "label": "Instagram", "note": "Visual social media", "cells": [true, true, true, false, false, false, false] },
              { "label": "X (Twitter)", "note": "Microblogging", "cells": [true, false, false, false, false, false, false] },
              { "label": "ArtStation", "note": "Pro showcase for games & film", "cells": [true, true, true, true, false, false, true] },
              { "label": "DeviantArt", "note": "Open art community", "cells": [true, true, true, true, false, true, true] },
              { "label": "Artera", "note": "Built for Indonesian artists", "cells": [true, true, true, true, true, true, true], "highlight": true }
            ]
          }
        },
        {
          "id": "personas",
          "label": "Personas",
          "title": "Five personas, from first sketch to brand deal.",
          "body": [
            "The PRD includes five personas covering both sides of the marketplace, from a beginner who doesn't know where to start to a brand manager who needs a trustworthy illustrator for a campaign. Each one maps to features we would have to get right."
          ],
          "images": [
            { "src": "/case-studies/artera/persona-niko.jpg", "width": 2000, "height": 1677, "alt": "Persona: Niko Pradana, 17, high-school student in Bekasi", "caption": "Niko, 17 · Beginner. Just got into digital drawing and doesn't know where to start. Needs beginner tutorials, a non-judgmental community and mentoring." },
            { "src": "/case-studies/artera/persona-aura.jpg", "width": 2000, "height": 1725, "alt": "Persona: Aura Aini, 21, design student and freelance illustrator in Surabaya", "caption": "Aura, 21 · Freelancer. Already takes commissions on social media but gets lowballed. Needs a credible portfolio, industry price guides and digital contracts." },
            { "src": "/case-studies/artera/persona-jason.jpg", "width": 2000, "height": 1725, "alt": "Persona: Jason Andika, 32, senior designer in Jakarta", "caption": "Jason, 32 · Professional. Work often taken without permission. Needs automatic copyright protection, licensing and brand deals." },
            { "src": "/case-studies/artera/persona-nadine.jpg", "width": 2000, "height": 1725, "alt": "Persona: Nadine Azzahra, 24, content creator in Bandung", "caption": "Nadine, 24 · Art lover. Wants to support local artists and buy art legally. Needs a licensed gallery, bookmarks and light classes." },
            { "src": "/case-studies/artera/persona-aditya.jpg", "width": 2000, "height": 1725, "alt": "Persona: Aditya Ahmad, 31, brand manager in Tangerang Selatan", "caption": "Aditya, 31 · Client. Spends hours scouting artists manually. Needs a verified directory, clear pricing and secure payments." }
          ]
        },
        {
          "id": "requirements",
          "label": "Requirements",
          "title": "Writing the PRD: vision, goals and measurable success.",
          "body": [
            "Product vision: an ecosystem that supports Indonesian digital artists with copyright protection, fair work opportunities and access to a wider market.",
            "From the vision we set five product goals (showcase and sell, protect work, fair pricing, a supportive community, more job opportunities) and translated them into six value propositions. Every feature then got SMART success indicators, so we'd know whether it was working."
          ],
          "points": [
            "Artwork Protection: watermarking (metadata) and encryption to prevent art theft.",
            "Fair Pay: industry-based price guides, negotiation, and payment through local e-wallets and banks.",
            "Global Spotlight: reach a wider audience without depending on foreign platforms.",
            "Original Art Only: verify human-made originals and block AI-generated uploads.",
            "Artist Community: a space to interact, share experience and build relationships.",
            "Art Income Hub: connect artists with clients and brands through commissions and collaborations."
          ],
          "stats": [
            { "value": 8, "label": "Feature areas with SMART success indicators" },
            { "value": 70, "suffix": "%", "label": "Target: visitors who complete registration within 7 days" },
            { "value": 95, "suffix": "%", "label": "Target: escrow transactions completed without dispute" },
            { "value": 21, "label": "User stories with acceptance criteria" }
          ]
        },
        {
          "id": "prioritization",
          "label": "MVP",
          "title": "Deciding what not to build yet.",
          "body": [
            "With eight feature areas and limited time, we placed each one on an impact–effort matrix to choose the MVP. The rule of thumb was to ship what delivers real value to artists quickly and captures Artera's core: work + connection + commission."
          ],
          "images": [
            { "src": "/case-studies/artera/mvp-matrix.jpg", "width": 2000, "height": 1984, "alt": "Impact–effort matrix placing Artera's eight feature areas into four quadrants", "caption": "Impact–effort matrix from the PRD." }
          ],
          "points": [
            "Quick wins, in the MVP: authentication, artist profile & portfolio, jobs & commissions (job board deferred), mentoring & education.",
            "Major projects, MVP as a basic version: Art Showcase without social auto-sync, AI filters or trending. Copyright & security protection comes after the MVP.",
            "Fill-in, later: the forum.",
            "Time waster for now: the artist merchandise store."
          ]
        },
        {
          "id": "solution",
          "label": "Solution",
          "title": "The MVP, module by module.",
          "body": [
            "Our user stories turned into a high-fidelity prototype of four core modules. Scroll through them below."
          ],
          "screens": [
            { "label": "Profile & Portfolio", "note": "A verified artist profile with bio, services, works, testimonials and liked posts, plus an upload button and a performance analytics page added after testing.", "image": { "src": "/case-studies/artera/screens-profile.jpg", "width": 2000, "height": 667, "alt": "Artera profile and digital portfolio screens" } },
            { "label": "Art Showcase", "note": "Discover artworks with search, category, style and color filters, then open a piece to like, comment or buy it directly.", "image": { "src": "/case-studies/artera/screens-showcase.jpg", "width": 2000, "height": 663, "alt": "Artera art showcase and artwork detail screens" } },
            { "label": "Jobs & Commissions", "note": "Two sides of the market: clients hire freelancers by browsing services, and artists browse open projects with budgets and apply. Payments are held in escrow until the work is approved.", "image": { "src": "/case-studies/artera/screens-jobs.jpg", "width": 2000, "height": 663, "alt": "Artera jobs and commissions screens" } },
            { "label": "Mentoring & Education", "note": "Book one-on-one sessions with mentors or learn from modules and short videos, and become a mentor with a single button.", "image": { "src": "/case-studies/artera/screens-mentoring.jpg", "width": 2000, "height": 669, "alt": "Artera mentoring and education screens" } }
          ]
        },
        {
          "id": "iteration",
          "label": "Iteration",
          "title": "Four waves of testing, one fix list at a time.",
          "body": [
            "We tested the prototype on Maze in four waves of four participants, mostly design and art students plus a freelance artist, from Jakarta, Surabaya, Palembang, Bali and Tangerang Selatan. Each team member ran one participant per wave. After every wave we met, pooled what we'd seen, looked for patterns, prioritized fixes and updated the prototype before the next round. Wave 4 re-validated the changes with the wave 3 participants."
          ],
          "stats": [
            { "value": 12, "label": "Participants across 4 waves" },
            { "value": 12, "label": "Prototype changes shipped between waves" },
            { "value": 9.5, "decimals": 1, "suffix": " / 10", "label": "How valuable, final wave" },
            { "value": 9, "suffix": " / 10", "label": "How easy to use, final wave" }
          ],
          "timeline": [
            { "kicker": "Wave 1", "title": "Consistency and findability", "points": ["Every participant found the language mix confusing, so we made Indonesian consistent across the platform.", "Added search bars wherever users search.", "Split the crowded edit-profile page into tabs, simplified colors and icons, and switched to Twitter-style tabs."], "metrics": [{ "value": "8.25", "label": "Valuable", "of": 10 }, { "value": "7.75", "label": "Easy to use", "of": 10 }] },
            { "kicker": "Wave 2", "title": "Making key actions visible", "points": ["The upload button was hidden below the fold, so we made it sticky and added uploading straight from the profile's works tab.", "Increased form font sizes and spacing.", "Gave the mentor list and freelancer list distinct designs and information."], "metrics": [{ "value": "8.5", "label": "Valuable", "of": 10 }, { "value": "7.75", "label": "Easy to use", "of": 10 }] },
            { "kicker": "Wave 3", "title": "Trust and clearer navigation", "points": ["Testers called escrow payments a smart way to protect artists.", "Added a performance analytics page (response rate, orders, earnings) to the profile.", "Replaced double tabs with a Mentoring & Education navbar dropdown, and the become-a-mentor tab with a button."], "metrics": [{ "value": "9", "label": "Valuable", "of": 10 }, { "value": "8.25", "label": "Easy to use", "of": 10 }] },
            { "kicker": "Wave 4", "title": "Validation, no changes needed", "points": ["All participants said the feature set was complete and matched their expectations.", "All of them wanted to try Artera if it launched."], "metrics": [{ "value": "9.5", "label": "Valuable", "of": 10 }, { "value": "9", "label": "Easy to use", "of": 10 }] }
          ]
        },
        {
          "id": "go-to-market",
          "label": "Go-to-market",
          "title": "Planning the launch and how Artera earns.",
          "body": [
            "Our positioning: a trusted platform for Indonesian digital artists to create, stay protected, and connect with opportunities and global audiences, without depending on foreign platforms.",
            "The launch plan combined three channels, and pricing was designed so the platform earns when artists do."
          ],
          "timeline": [
            { "kicker": "Offline activation", "title": "Meet artists where they already are", "points": ["Launch event at a gallery or co-working space.", "Roadshows to art schools, campuses and illustrator communities.", "Booths at pop-culture events and art expos."] },
            { "kicker": "Digital activation", "title": "Build awareness and trust online", "points": ["Instagram and X launch campaign with countdowns and artist-made content.", "YouTube Shorts and TikTok tutorials.", "Email to the artist waitlist, and a Discord community for early adopters."] },
            { "kicker": "Strategic partnerships", "title": "Borrow credibility, expand distribution", "points": ["Local illustrator, comic and animation communities.", "Local print-on-demand merchandise partners.", "Learning platforms and art coaches."] }
          ],
          "stats": [
            { "value": 35, "prefix": "Rp", "suffix": "k / mo", "label": "Premium subscription (Rp350k / year), 30-day free trial" },
            { "value": 10, "suffix": "%", "label": "Commission for free users, 5% for premium" },
            { "value": 25, "prefix": "Rp", "suffix": " jt", "label": "Target revenue from anonymized market-trend data in 6 months" }
          ]
        },
        {
          "id": "roadmap",
          "label": "Roadmap",
          "title": "Two quarters of OKRs.",
          "body": [
            "Finally, we turned the launch goals into a six-month roadmap with OKRs across five objectives: acquisition, retention, monetization & partnerships, feature optimization, and value for users."
          ],
          "timeline": [
            { "kicker": "Q1 · Jul – Sep 2025", "title": "Establish the base", "points": ["1,000 downloads, 200 Jabodetabek artists signed up, 1,500 social followers.", "50% of users active (upload a work or join a session); 40% weekly retention.", "50 artwork sales and 50 learning-material sales; partnerships with communities, merch and education platforms.", "100% of uploads copyright-protected; 95% of reported bugs fixed.", "Price-exploitation reports down 20% with base price guides."] },
            { "kicker": "Q2 · Oct – Dec 2025", "title": "Grow and deepen", "points": ["Referral program; 5,000 downloads with 5% from outside Jabodetabek.", "60% deeply active users; 55% weekly retention through gamification.", "150 artwork sales and 150 learning-material sales; gallery partnerships and art influencers.", "Under 2 seconds average response time on core features.", "400 users report better income or careers; exploitation reports down 40%."] }
          ],
          "statement": { "text": "Artera's promise: a *safe,* *professional* space where digital artists grow, sell *fairly,* and find their community.", "position": "end" }
        }
      ],
      "links": [{ "label": "Visit the Artera site", "href": "https://arteraid.framer.website" }]
    },
    {
      "slug": "interacted",
      "projectId": "project-6",
      "title": "InteractEd",
      "tagline": "A project-based learning app that helps kids aged 6–13 discover what they love, learn it with mentors, and actually enjoy the process.",
      "year": "2024",
      "accent": "#5fdc95",
      "facts": [
        { "label": "Role", "value": "Team Lead · UX Research & UI Design" },
        { "label": "Team", "value": "Theodore Kasyfillah, Gyanamurti Adhikara Bano, Marchelina Anjani Saputri, Neva Denstia Shabira, Scudetto Ciano Syam" },
        { "label": "Context", "value": "Human–Computer Interaction final project · Fasilkom UI, 2024" },
        { "label": "Platform", "value": "Mobile app for Android & iOS" }
      ],
      "metrics": [
        { "value": "85.8", "label": "SUS score, grade A (benchmark 68)" },
        { "value": "21", "label": "SUS survey respondents" },
        { "value": "5", "label": "In-depth interviews across 3 user roles" },
        { "value": "6", "label": "Design fixes from usability testing" }
      ],
      "sections": [
        {
          "id": "overview",
          "label": "Overview",
          "title": "Learning that starts with what a child loves.",
          "body": [
            "InteractEd is a mobile learning platform for children aged 6–13. Instead of pushing every child through the same subjects, it helps them find their interests and talents, then grow them through interactive courses, hands-on projects, mentors and a community of peers.",
            "I led a team of five for our Human–Computer Interaction final project. We took the app from a value proposition all the way to a tested high-fidelity prototype, following a user-centered design process."
          ],
          "timeline": [
            { "kicker": "Define needs", "title": "Value proposition canvas & interviews", "text": "Mapped tasks, needs and pains, then validated them with five interviews across three user roles." },
            { "kicker": "Design alternatives", "title": "Personas, task analysis & journey maps", "text": "Three personas, hierarchical task analysis and journey maps for seven key features." },
            { "kicker": "Prototype", "title": "Information architecture to hi-fi", "text": "A sitemap for student and mentor roles, low-fidelity wireframes, then a full high-fidelity prototype." },
            { "kicker": "Evaluate", "title": "Usability testing & SUS", "text": "Task-based testing with 4 participants and a SUS survey with 21 respondents, followed by six design fixes." }
          ]
        },
        {
          "id": "problem",
          "label": "Problem",
          "title": "One curriculum for every child doesn't fit any of them.",
          "statement": { "text": "Kids lose their *love* of *learning* when school ignores what they're *curious* about." },
          "body": [
            "Early-childhood education in Indonesia still leans on theory: children are expected to master every subject regardless of their interests or talents. That limits exploration, adds psychological pressure, and leaves many kids bored and unmotivated.",
            "Many early-education institutions also struggle to apply the curriculum effectively, so lessons become teacher-centered and monotonous, and focus on cognitive skills while neglecting motor, social-emotional, artistic and communication development. Meanwhile, the shift to online learning during the pandemic showed technology could make learning more flexible and inclusive."
          ],
          "points": [
            "How might we design an app that lets children explore their interests and talents more flexibly, and have fun doing it?",
            "How might we use project-based learning to develop children holistically, beyond cognitive skills alone?"
          ]
        },
        {
          "id": "value",
          "label": "Value",
          "title": "Starting from a value proposition, not a feature list.",
          "body": [
            "We began with a Value Proposition Canvas for our two core users, children aged 6–13 and mentors. For each, we mapped their tasks, needs and pains, then turned them into a requirement summary covering usability goals, functionality, pain relievers and potential partners.",
            "For the child, the pains were clear: learning materials that don't match their age or level, few learning media made for kids, and no easy way to find mentors or study partners who share their interests."
          ],
          "points": [
            "Diverse, personalized learning materials that match a child's age, level and interests, with progress tracking over time.",
            "Easy access to professional mentors who fit the child's age and learning needs.",
            "A learning forum to connect with peers who share the same interests, for collaboration and mutual support."
          ]
        },
        {
          "id": "research",
          "label": "Research",
          "title": "Validating the idea with kids, educators and a parent.",
          "body": [
            "We interviewed five people across three roles: two children (a 9-year-old in 4th grade and a 13-year-old in junior high), two university students who teach children through community and volunteer teaching programs, and a parent of a 10-year-old. Each interview script tested our assumptions about mentoring, project-based learning, an interest and talent test, and gamification."
          ],
          "stats": [
            { "value": 5, "label": "In-depth interviews" },
            { "value": 3, "label": "User roles: child, educator, parent" },
            { "value": 4, "label": "Feature ideas validated in every script" }
          ],
          "points": [
            "Both children preferred learning through play and hands-on experiments over textbook-style lessons, especially projects tied to everyday life.",
            "Interests often aren't taught at school. One child struggled to find photography resources made for kids their age.",
            "Every role saw mentors as important, for fixing gaps, finding talents and getting personal guidance.",
            "Kids loved the idea of a customizable study buddy and earning coins or items. Educators agreed it could boost motivation.",
            "The parent added a caution: gamification depends on the child and could lead to game dependency, so it should support learning, not replace it."
          ]
        },
        {
          "id": "personas",
          "label": "Personas",
          "title": "Three personas, three different jobs to be done.",
          "body": [
            "We synthesized the interviews into three personas: the learner, the mentor, and the parent who supports them both."
          ],
          "quote": { "text": "Every student has their own unique potential, and I want to help them discover and develop their talents.", "by": "Our tutor persona" },
          "timeline": [
            { "kicker": "The learner · 9", "title": "An elementary student who dreams of becoming a scientist", "points": ["Needs to learn skills beyond textbooks and discover her interests and talents.", "Wants an interactive, fun platform that fits visual, kinesthetic and auditory learning.", "Frustrated by hard-to-find resources for skills school doesn't teach, and by distractions at home."] },
            { "kicker": "The mentor · 28", "title": "A private music tutor who believes in interest-based education", "points": ["Needs tools that engage students through project-based learning and gamification.", "Wants mentoring built into the app to give more personal guidance.", "Frustrated by how hard it is to change parents' mindset about education."] },
            { "kicker": "The parent · 37", "title": "A creative business owner who wants more for her child", "points": ["Needs interest-based learning outside formal school that fits her child's development.", "Wants quality guidance from mentors and features that keep her child motivated.", "Frustrated by the lack of learning approaches that match her child's individual talents."] }
          ]
        },
        {
          "id": "journeys",
          "label": "Journeys",
          "title": "Breaking every task down before designing it.",
          "body": [
            "For each persona we wrote detailed scenarios, broke them into hierarchical task analyses, then mapped the journey step by step, including the user's thoughts, emotions and pain points at each stage, along with opportunities for the design to help."
          ],
          "points": [
            "Learner: taking a course, joining the forum and booking a mentoring session, and taking the interest and talent test.",
            "Mentor: running mentoring sessions with students, and managing courses and assignments.",
            "Parent: tracking a child's progress and abilities, and following their participation and interactions."
          ]
        },
        {
          "id": "structure",
          "label": "Structure",
          "title": "Two roles, one clear map.",
          "body": [
            "The journeys became an information architecture with two roles. Students get a homepage, courses, mentors, the interest and talent test, a forum and a profile; mentors get a dashboard to manage schedules, requests and courses. We sketched every page as a low-fidelity wireframe first, then built the high-fidelity design on top of it with a friendly green palette and illustrations made for kids."
          ],
          "images": [
            { "src": "/case-studies/interacted/information-architecture.jpg", "width": 2000, "height": 1214, "alt": "InteractEd sitemap showing mentor and student sections", "caption": "Information architecture: the mentor and student branches of the app." }
          ]
        },
        {
          "id": "solution",
          "label": "Solution",
          "title": "Explore, learn, build, and get help along the way.",
          "body": [
            "The high-fidelity prototype covers the full journey for both roles. Scroll through the modules below."
          ],
          "screens": [
            { "label": "Home & Take a Test", "note": "The homepage surfaces courses and mentors recommended for the child. The interest and talent test turns their answers into their three biggest interests and an outstanding talent, with matching professions and recommendations they can share.", "image": { "src": "/case-studies/interacted/screens-home-test.jpg", "width": 1952, "height": 1359, "alt": "InteractEd home, test overview and test result screens" } },
            { "label": "Courses", "note": "Browse kid-friendly courses by interest, follow levelled materials with progress bars, and learn from video lessons with an overview and a discussion tab.", "image": { "src": "/case-studies/interacted/screens-courses.jpg", "width": 1952, "height": 1359, "alt": "InteractEd course list, course material and video lesson screens" } },
            { "label": "Projects", "note": "Each course ends in a hands-on group project with clear deadlines and details, links to extra materials, and a quick way to ask a mentor or the forum for help before submitting.", "image": { "src": "/case-studies/interacted/screens-projects.jpg", "width": 1328, "height": 1359, "alt": "InteractEd project details and submission screens" } },
            { "label": "Mentoring", "note": "Find a mentor by skill, then book a session in a few friendly steps: pick a topic, choose chat, video or both, and select a date and time. Sessions run as video or chat consultations.", "image": { "src": "/case-studies/interacted/screens-mentoring.jpg", "width": 1952, "height": 1359, "alt": "InteractEd mentor list, booking and video consultation screens" } },
            { "label": "Forum", "note": "A discussion forum to ask questions, share results and find study partners, with recommended threads, replies, votes and a personal thread profile.", "image": { "src": "/case-studies/interacted/screens-forum.jpg", "width": 1952, "height": 1359, "alt": "InteractEd discussion forum, thread and profile screens" } },
            { "label": "Profile & Avatar", "note": "The profile collects learning progress, test results and a parent contact. Kids can dress up their own avatar with items bought using coins earned from learning.", "image": { "src": "/case-studies/interacted/screens-profile.jpg", "width": 1328, "height": 1359, "alt": "InteractEd profile and avatar editor screens" } },
            { "label": "Mentor Dashboard", "note": "Mentors see their schedule and incoming appointment requests at a glance, accept or reject them, and manage their courses, participants and assignments.", "image": { "src": "/case-studies/interacted/screens-mentor-dashboard.jpg", "width": 1952, "height": 1359, "alt": "InteractEd mentor dashboard, schedule and course management screens" } }
          ]
        },
        {
          "id": "testing",
          "label": "Testing",
          "title": "Watching kids use it, then measuring it.",
          "body": [
            "We ran task-based usability tests with four participants who matched our target users: three students aged 9 to 12 and one mentor who had taught children through a volunteer teaching program. Students tried seven tasks, from signing up to booking a mentor, while thinking out loud. We recorded time on task and their feedback.",
            "Then we ran a System Usability Scale survey with 21 respondents. The average score was 85.8, well above the benchmark of 68 and good for an A grade."
          ],
          "stats": [
            { "value": 85.8, "decimals": 1, "label": "Average SUS score, grade A" },
            { "value": 21, "label": "SUS respondents" },
            { "value": 4, "label": "Usability testing participants" },
            { "value": 100, "label": "Top SUS score, from 3 respondents" }
          ],
          "timeline": [
            { "kicker": "Time on task", "title": "Average across the three student testers", "text": "Most tasks took well under a minute. Taking the test stood out as the slowest, which pointed us to the first fix.", "metrics": [
              { "value": "103s", "label": "Take a test", "of": 120 },
              { "value": "47s", "label": "Upload a project", "of": 120 },
              { "value": "43s", "label": "Find the forum", "of": 120 },
              { "value": "42s", "label": "Personalize profile", "of": 120 },
              { "value": "42s", "label": "Find a course", "of": 120 },
              { "value": "33s", "label": "Book a mentor", "of": 120 },
              { "value": "6s", "label": "Log in", "of": 120 }
            ] }
          ]
        },
        {
          "id": "iteration",
          "label": "Iteration",
          "title": "Six fixes, straight from the testers.",
          "body": [
            "We turned every recurring pain point into a design change."
          ],
          "timeline": [
            { "kicker": "Take a Test", "title": "A start button you can actually find", "text": "The Start Test button was small, low-contrast and hard to spot, and the results page had no way back. We enlarged it, gave it a bolder color and a more visible spot, and added a back button to the share screen." },
            { "kicker": "Course materials", "title": "Projects that look like projects", "text": "Testers couldn't tell the final project apart from regular lessons. We gave projects their own color scheme, icon and label, plus a separate tab." },
            { "kicker": "Forum", "title": "Saved posts and clear roles", "text": "Saved posts were hidden behind View Profile, so we moved them onto the discussion page. Anonymous profiles made it hard to tell mentors from students, so we added Student and Mentor role badges." },
            { "kicker": "Booking", "title": "A way back", "text": "The booking page had no back button, leaving kids stuck if they changed their mind. We added one in the top-left corner." },
            { "kicker": "Profile", "title": "A clearer personalize button", "text": "The button to personalize the profile didn't look like one. We made it more prominent, with a descriptive label and icon." },
            { "kicker": "Mentor dashboard", "title": "Saying no, kindly", "text": "Mentors could reject a request without explaining why. We added a modal so mentors can give students a reason." }
          ]
        },
        {
          "id": "outcome",
          "label": "Outcome",
          "title": "An A-grade experience, with room to grow.",
          "body": [
            "The 85.8 SUS score showed users found InteractEd easy to use and its features valuable. The survey also pointed at what to work on next: more consistency across screens and less complexity overall."
          ],
          "statement": { "text": "Every child has the *potential* to grow, given the *right* way to *learn.*", "position": "end" }
        }
      ]
    },
    {
      "slug": "movie-sentiment",
      "projectId": "movie-sentiment",
      "title": "Superman Sentiment",
      "tagline": "Reading 24,000 YouTube comments to find out how audiences felt about two very different Supermen, twelve years apart.",
      "year": "2025",
      "accent": "#ff6f5e",
      "facts": [
        { "label": "Role", "value": "Researcher · team of 5" },
        { "label": "Team", "value": "Gyanamurti Adhikara Bano, Joseph Bintang Ardhirespati, Muhammad Hilal Darul Fauzan, Theodore Kasyfillah, Zuhdy Nadhif Ayyasy" },
        { "label": "Context", "value": "University group research project · Fasilkom UI, Sep – Dec 2025" },
        { "label": "Tools", "value": "Python, YouTube Data API v3, pandas, VADER, TextBlob, TF-IDF, Jupyter" }
      ],
      "metrics": [
        { "value": "24k", "label": "YouTube comments from 8 videos" },
        { "value": "56.3%", "label": "Positive for Superman (2025), vs 49.5% for Man of Steel" },
        { "value": "+49%", "label": "Higher Tone/Story sentiment for the 2025 film" },
        { "value": "3", "label": "Research questions answered" }
      ],
      "sections": [
        {
          "id": "overview",
          "label": "Overview",
          "title": "Same hero, two eras, one question.",
          "body": [
            "When Zack Snyder's Man of Steel came out in 2013, it gave audiences a darker, more serious Superman: praised for its spectacle, criticized for lacking warmth. Twelve years later, James Gunn rebooted the character in Superman (2025) with a lighter, more hopeful and humane take.",
            "Our team compared how the public responded to each. We built a pipeline that collected and cleaned YouTube comments, classified their sentiment, and dug into what people were actually talking about, across three reports from proposal to final results."
          ],
          "timeline": [
            { "kicker": "Proposal", "title": "Framing the questions and the plan", "text": "Research questions, data sources, a planned machine-learning approach and an 8-week timeline." },
            { "kicker": "Implementation", "title": "Building the data pipeline", "text": "A three-layer collection system, a custom time-filtering algorithm, preprocessing and first exploration." },
            { "kicker": "Analysis", "title": "Sentiment, time and topics", "text": "Lexicon-based sentiment, temporal trends, bigram and TF-IDF topics, and aspect comparison." }
          ]
        },
        {
          "id": "question",
          "label": "Question",
          "title": "Dark and serious, or hopeful and human?",
          "statement": { "text": "Did audiences prefer Snyder's *dark* *deconstruction,* or Gunn's *hopeful* *return* to the classic Superman?" },
          "body": [
            "Both films were financial successes and sparked huge discussion on YouTube, but no one had systematically compared public sentiment between them. The split between fans of Snyder's tone and Gunn's left open questions about what audiences actually wanted, so we set out to answer three:"
          ],
          "points": [
            "How does the split between positive, negative and neutral sentiment differ between the two films?",
            "How does sentiment evolve across the release cycle, from pre-release teasers to post-release reviews, and how stable is it over time?",
            "Which topics and key phrases drive positive and negative sentiment in each era?"
          ]
        },
        {
          "id": "data",
          "label": "Data",
          "title": "24,000 comments, collected with a time machine.",
          "body": [
            "We used the YouTube Data API v3 to collect comments from eight videos, four per film: two official trailers for the pre-release phase, plus a review and a spoiler talk from Jeremy Jahns for the post-release phase, chosen for their high views and comment counts.",
            "The hard part was time. Man of Steel's videos are more than a decade old, so we designed a dual-period filter: 1,500 top-liked comments from the first 30 days after upload capture the original reaction, and 1,500 more from Superman's teaser (December 2024) to a month after its release (August 2025) capture how modern audiences looked back. If the second period came up short, the algorithm filled the gap from the first period without duplicating comments. For Superman (2025), we took the top 3,000 comments from each video's first 30 days."
          ],
          "stats": [
            { "value": 24000, "label": "Comments in the final dataset" },
            { "value": 8, "label": "YouTube videos, 4 per film" },
            { "value": 3000, "label": "Top-liked comments per video" },
            { "value": 338, "suffix": "k", "label": "Comments available in total, before filtering" }
          ],
          "quote": { "text": "In a world full of Homelanders, be Superman.", "by": "A top comment on the Superman (2025) teaser, with 33,000+ likes" },
          "points": [
            "Man of Steel's comments built gradually toward release, peaking at more than 600 a day after the film came out.",
            "Superman (2025) was instant: its first teaser drew almost 1,500 comments in a single day, then dropped off sharply.",
            "Pre-release talk centered on the creators: Nolan and Snyder in 2013, James Gunn in 2025, alongside words like hope, excited and love.",
            "Comparisons shifted too: Dark Knight and Marvel in 2013; Henry Cavill and Christopher Reeve in 2025."
          ],
          "images": [
            { "src": "/case-studies/movie-sentiment/eda-overview.jpg", "width": 1200, "height": 885, "alt": "Exploratory charts of comment counts per film and phase, like counts and comment length", "caption": "Exploration: a balanced 1:1 split between films and phases, likes following a power law, and mostly short 50–200 character reactions." }
          ]
        },
        {
          "id": "pivot",
          "label": "Pivot",
          "title": "When the data disagreed with the plan.",
          "body": [
            "Our proposal didn't survive contact with real YouTube data, and that was one of the most useful parts of the project. Each change came from something we learned during implementation."
          ],
          "timeline": [
            { "kicker": "Scope", "title": "From 4 videos and 20,000 comments to 8 videos and 24,000", "text": "Some Man of Steel videos had far too few comments to reach 5,000 each, so we doubled the sources and set 3,000 per video." },
            { "kicker": "Time filtering", "title": "From a fixed 2013–2015 window to dual-period filtering", "text": "The original window produced few relevant comments, so we split Man of Steel into an original and a retrospective period to keep both films balanced." },
            { "kicker": "Method", "title": "From BERT with manual labels to lexicon-based VADER", "text": "We planned to hand-label 10% of the data and fine-tune a BERT model. We switched to VADER, which needs no labeled data and is built for informal social-media text." },
            { "kicker": "Engineering", "title": "Sturdier tools for a bigger dataset", "points": ["The requests library struggled with pagination, so we moved to Google's official API client.", "CSV became NDJSON for faster reads and writes on large data.", "Replies were dropped because their inconsistent structure made pagination too complex and costly in API quota."] }
          ]
        },
        {
          "id": "method",
          "label": "Method",
          "title": "Reading emotion without losing it.",
          "body": [
            "We cleaned the text twice, for two different jobs. For sentiment, cleaning was deliberately minimal: only URLs, HTML tags and extra whitespace were removed, because VADER reads punctuation and capitals as signals of intensity (\"AMAZING!!!\" isn't the same as \"amazing\"). For topic analysis, we lowercased the text, removed stopwords, and tokenized and lemmatized each word.",
            "VADER gave each comment a compound score from −1 to +1: 0.05 and above counted as positive, −0.05 and below as negative, and anything in between as neutral. TextBlob served as a cross-check from a different lexicon. To learn what drove those feelings, we extracted bigrams weighted by TF-IDF (max_features = 100, ngram_range = (1, 2)) and compared sentiment across pre- and post-release phases and over time."
          ],
          "stats": [
            { "value": 0.05, "decimals": 2, "prefix": "±", "label": "VADER threshold for positive / negative" },
            { "value": 2, "label": "Sentiment models, cross-checked" },
            { "value": 100, "label": "TF-IDF features for topic analysis" }
          ]
        },
        {
          "id": "distribution",
          "label": "Distribution",
          "title": "Gunn's Superman left people happier.",
          "body": [
            "Across all 24,000 comments, Superman (2025) drew 56.32% positive sentiment against 49.53% for Man of Steel, a 6.8-point gap, and fewer negative comments too (21.88% vs 26.86%). TextBlob agreed in direction, despite using a different lexicon.",
            "The shapes of the score distributions told the same story: Man of Steel had a flatter curve with a thick negative tail between −0.6 and −1.0, a sign of polarization, while Superman (2025) skewed positive."
          ],
          "timeline": [
            { "kicker": "Man of Steel (2013)", "title": "Split down the middle", "metrics": [{ "value": "49.53%", "label": "Positive", "of": 100 }, { "value": "23.62%", "label": "Neutral", "of": 100 }, { "value": "26.86%", "label": "Negative", "of": 100 }] },
            { "kicker": "Superman (2025)", "title": "A clear positive lean", "metrics": [{ "value": "56.32%", "label": "Positive", "of": 100 }, { "value": "21.80%", "label": "Neutral", "of": 100 }, { "value": "21.88%", "label": "Negative", "of": 100 }] }
          ]
        },
        {
          "id": "over-time",
          "label": "Over time",
          "title": "Hype versus cautious optimism.",
          "body": [
            "Average sentiment fell for both films as they moved from trailers to release, but in very different ways."
          ],
          "timeline": [
            { "kicker": "Man of Steel", "title": "Hype, then a reality check", "text": "Average compound score dropped from 0.179 to 0.125, with high volatility and a sharp fall around release in June 2013, which lines up with the controversial ending and Zod's death.", "metrics": [{ "value": "0.179", "label": "Before release", "of": 0.35 }, { "value": "0.125", "label": "After release", "of": 0.35 }] },
            { "kicker": "Superman (2025)", "title": "Cautious optimism, mild correction", "text": "Sentiment eased gradually from 0.311 to 0.170 between December 2024 and July 2025, with no sudden spikes: a steady, consistent trust in Gunn's vision.", "metrics": [{ "value": "0.311", "label": "Before release", "of": 0.35 }, { "value": "0.170", "label": "After release", "of": 0.35 }] }
          ],
          "images": [
            { "src": "/case-studies/movie-sentiment/temporal.jpg", "width": 1200, "height": 855, "alt": "Line charts of average weekly sentiment over time for both films", "caption": "Weekly average sentiment: Man of Steel's original run, its 2024–25 retrospective, and Superman (2025) from teaser to release." },
            { "src": "/case-studies/movie-sentiment/vader-histogram.jpg", "width": 1200, "height": 445, "alt": "Histograms of VADER sentiment scores for both films", "caption": "VADER score distributions: a heavier negative tail for Man of Steel, a positive skew for Superman (2025)." }
          ]
        },
        {
          "id": "drivers",
          "label": "Drivers",
          "title": "It wasn't the effects. It was the tone.",
          "body": [
            "Topic analysis showed what each era's audience cared about. Man of Steel's positive talk was led by \"Justice League\" (200+ mentions) and \"Dark Knight\" (175), excitement about building a universe, while \"Zod\", \"killing\" and \"fight\" drove the negative side: controversy over Superman killing and the scale of destruction.",
            "For Superman (2025), \"James Gunn\" appeared around 600 times, about three times as often as Man of Steel's top phrase, and \"Christopher Reeve\" around 120, showing trust in the director and love for the classic 1978 tone. Its negative comments were milder and more personal, with no single dominant criticism like Zod. When we compared sentiment by aspect, the 2025 film led on all three, and most on tone and story."
          ],
          "timeline": [
            { "kicker": "Biggest gap · +49%", "title": "Tone / Story", "metrics": [{ "value": "0.413", "label": "Superman (2025)", "of": 0.5 }, { "value": "0.277", "label": "Man of Steel", "of": 0.5 }] },
            { "kicker": "Aspect", "title": "Visual / CGI", "metrics": [{ "value": "0.417", "label": "Superman (2025)", "of": 0.5 }, { "value": "0.291", "label": "Man of Steel", "of": 0.5 }] },
            { "kicker": "Aspect", "title": "Acting / Cast", "metrics": [{ "value": "0.381", "label": "Superman (2025)", "of": 0.5 }, { "value": "0.266", "label": "Man of Steel", "of": 0.5 }] }
          ],
          "images": [
            { "src": "/case-studies/movie-sentiment/bigrams.jpg", "width": 1195, "height": 670, "alt": "Bar charts of the top positive and negative bigrams for each film", "caption": "Top bigrams in positive (green) and negative (red) comments for each film." }
          ]
        },
        {
          "id": "implications",
          "label": "Implications",
          "title": "What a studio could do with this.",
          "body": [
            "The results suggest a reboot succeeds through a fundamental shift in narrative tone that fits the character's core values, not through technical spectacle alone. They also echo the idea that Superman mirrors his era: from post-9/11 anxiety to post-pandemic hope."
          ],
          "points": [
            "Use the pipeline as an early-warning sentiment monitor during marketing campaigns.",
            "A/B test promotional material around dominant topics, like the Christopher Reeve callback, to lean into the classic era.",
            "Steady, consistent marketing built more stable sentiment than big hype followed by a reality check.",
            "Let the Tone/Story finding shape creative decisions for future DCU films that balance nostalgia and reinterpretation."
          ]
        },
        {
          "id": "limitations",
          "label": "Limitations",
          "title": "What the data can't tell us, yet.",
          "body": [
            "The results are a snapshot of active YouTube audiences, not every Superman fan."
          ],
          "points": [
            "Only eight YouTube videos; no Reddit, X or Letterboxd, and the dual- vs single-period sampling adds some temporal asymmetry.",
            "VADER misses complex sarcasm, irony and fandom in-jokes and memes.",
            "Bigrams find frequent phrases but not abstract themes, like philosophical debates about heroism.",
            "Channel size, upload timing and YouTube's algorithm weren't controlled for, and highly liked comments can create echo chambers."
          ],
          "timeline": [
            { "kicker": "Next steps", "title": "Where this research could go", "points": ["A multi-platform dataset (X, Reddit, Letterboxd, IMDb) to triangulate across audiences.", "An ensemble of VADER with BERT or RoBERTa to catch sarcasm and irony.", "Time-series forecasting (ARIMA or Prophet) to predict sentiment trajectories.", "Aspect-based sentiment analysis for music, dialogue and villain portrayal."] }
          ],
          "statement": { "text": "Audiences didn't just want a bigger Superman. They wanted Superman to be a *symbol* of *hope* *again.*", "position": "end" }
        }
      ]
    }
  ] satisfies CaseStudy[],
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
  "skills": {
    "hard": [
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
    "Event Organizing",
    "Human Capital Management",
    "Marketing",
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
    "Django"
    ],
    "soft": [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Leadership",
    "Creativity & Innovation",
    "Organizational Culture",
    "Managerial",
    "Team Leadership",
    "Team Management",
    "Cross-team Collaboration"
    ]
  },
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

export const caseStudies: CaseStudy[] = portfolio.caseStudies;

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudyForProject(projectId: string) {
  return caseStudies.find((study) => study.projectId === projectId);
}

export function getProject(projectId: string): Project | undefined {
  return portfolio.projects.find((project) => project.id === projectId);
}
