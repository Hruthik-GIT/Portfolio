import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Hruthik",
  lastName: "Nimmaneni",
  name: `Hruthik Nimmaneni`,
  role: "AI Engineer",
  avatar: "/images/avatar.jpg",
  email: "hruthikswork@outlook.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about AI and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Hruthik-GIT",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hnrao-76419a336/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between AI and reality.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Building QuantumHedge AI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Hruthik, a Master's student in AI and an experienced AI engineer. I have a passion for building
      <br /> innovative solutions that bridge the gap between AI and the real world.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hruthik is a master's student in Artificial Intelligence with demonstrated machine learning expertise applied across multiple domains including
        personalization & recommender systems, natural language processing, computer vision, and multimodal data integration. Experienced
        programmer in Python, Java, Scala, C, and C++ as well as training ML Model Frameworks (PyTorch, TensorFlow, Keras) on GPUs. Highly
        familiar with end-to-end machine learning pipelines, while being comfortable with distributed computing environments such as Spark and Presto; as
        well as software engineering best practices like Git for version control and Postman for testing. He has great communication skills and is curious about
        solving open-ended challenges.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Vesra Software Services Private Limited",
        timeframe: "Feb 2024 - Jul 2024",
        role: "Full Stack & DevOps Intern",
        achievements: [
          <>
            Directed security implementations for AI models against adversarial attacks by applying theorem proving and symbolic execution techniques.
          </>,
          <>
            Streamlined DevOps practices using CI/CD pipelines (AWS CodePipeline and Jenkins) to automate model deployment, achieving a 35%
            reduction in downtime while ensuring smooth system integration.
          </>,
          <>
            Engineered and launched ML models as microservices by leveraging Node.js (npm), Docker, and Flask APIs, supporting innovative AI
            and data analysis initiatives.
          </>,
          <>
            Optimized OS-level memory management and thread scheduling to improve ML model inference efficiency for data-driven apps.
          </>,
        ],
        images: [],
      },
      {
        company: "Vestrics Solutions Private Limited",
        timeframe: "Jul 2023 - Jan 2024",
        role: "Software & AI Developer Intern",
        achievements: [
          <>
            Built a scalable AI-driven HR Payroll product using ASP.NET Core and C#, facilitating data retrieval and organization for 800+ employees.
          </>,
          <>
            Integrated ML platform & infrastructure for a scalable HR Payroll system using ASP.NET Core, implementing personalization & recommender
            systems through collaborative filtering and content-based recommendation algorithms for employee matching and task automation.
          </>,
          <>
            Leveraged natural language processing with large language models (LLMs) and prompt engineering for NLP-backed chatbots using text generation and embeddings that increased UI interactivity by 60%.
          </>,
          <>
            Implemented general ML application engineering for model optimization and efficiency with regressors, classifiers, and clustering
            for data-driven decisions.
          </>,
          <>
            Automated AWS Infrastructure Deployment with TerraForm and CloudFormation; and improved explainability by containerizing using Docker
            and Kubernetes with 95% uptime.
          </>

        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Bay Atlantic University",
        description: <>Master of Artificial Intelligence, Washington, D.C., USA.</>,
      },
      {
        name: "Mahindra University",
        description: <>Bachelor of Artificial Intelligence, Hyderabad, India.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming & Analytics",
        description: (
          <>Python, R, SQL, Java, C++, JavaScript, C#, Scala.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Data Science Libraries",
        description: (
          <>Keras, TensorFlow, scikit-learn, PyTorch, Hugging Face, Matplotlib.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>AWS, Azure, GCP, CI/CD Pipelines, Docker, Flask, Kubernetes, REST APIs, Microservices, FastAPI.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Full Stack & Mobile Development",
        description: (
          <>React, Node.js, Express.js, ASP.NET Core, Angular, MVC Architecture, Data Warehousing, Pydantic.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Big Data & ETL",
        description: (
          <>Presto, Hadoop, Spark, MapReduce, Data Warehousing, ETL Pipelines, MySQL, PostgreSQL, SQLAlchemy, NoSQL.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Machine Learning & AI",
        description: (
          <>Transformers, Deep Learning, NLP, ML Model Deployment, Reinforcement Learning.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `A showcase of my AI and engineering projects.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/presentation.jpg",
      alt: "Presentation",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/dcstw.mov",
      alt: "DCSTW",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/hn.jpg",
      alt: "HN",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/meet.jpg",
      alt: "Meet",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/suit.jpg",
      alt: "Suit",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/quantum.mov",
      alt: "Quantum",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };