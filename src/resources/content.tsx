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
        <strong className="ml-4">Building Opulence, an Agentic AI Portfolio Hedging Solution</strong>{" "}
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
  // The structure below is for projects, matching the provided format.
  experiences: [
    {
      company: "AI in Education",
      timeframe: "Aug 2024 - Present",
      role: "Bay Atlantic University",
      achievements: [
        <>Engineered an AI-driven study portal utilizing Deep Learning and NLP with fine-tuning for adaptable content delivery.</>,
        <>Accelerated ETL Pipelines with Spark and Presto, facilitating real-time data processing for adaptive learning models.</>,
        <>Developed a multimodal data handling system for combined text, image, and video content for personalized learning experiences, leveraging transformers/LLMs and collaborative filtering for content-based recommenders.</>,
        <>Applied JIRA and Quick Check for agile project management and automated testing, ensuring system reliability.</>,
      ],
      images: [],
    },
    {
      company: "AI in Banking",
      timeframe: "Ongoing",
      role: "Hyderabad, India",
      achievements: [
        <>Applied reinforcement learning with offline RL and human-feedback-based learning for a PyTorch Neural Network Model aimed at forecasting cash flow needs for banks, enhancing cash-hold capability by 50%.</>,
        <>Integrated multimodal data into a financial dashboard built on React, utilizing AWS Lambda Functions for deployment.</>,
        <>Leveraged withdrawal and consumer behavior patterns to train ML models for customer count prediction and minimize bank's dependency on high-cost external funding by 60%, reducing crowding by 20%.</>,
      ],
      images: [],
    },
    {
      company: "ML Computer Vision Earthquake Prediction Model",
      timeframe: "Ongoing",
      role: "Hyderabad, India",
      achievements: [
        <>Successfully advanced a Random Forest Regressor-based algorithm for seismic impact prediction by leveraging 110 years of satellite imagery (image and video).</>,
        <>Consistently performed dimensionality reduction and deployed via FastAPI, to host on Google Cloud Functions.</>,
        <>Implemented advanced techniques such as k-fold cross-validation and hyperparameter tuning to achieve a test-set accuracy of 97.5%.</>,
      ],
      images: [],
    },
    {
      company: "Smart E-Secretary",
      timeframe: "Ongoing",
      role: "Hyderabad, India",
      achievements: [
        <>Embarked upon a voice assistant driven by AI, harnessing pyttsx3 (Python's text conversion library) and NLP methods for automating tasks.</>,
        <>Emphasized testing, performance optimization, and improved tokenization for both mobile and desktop applications.</>,
        <>Integrated the solution with IoT devices and implemented it as a microservice via Docker on the Azure platform using Azure Functions.</>,
      ],
      images: [],
    },
    {
      company: "WhatsApp Automation Software",
      timeframe: "Ongoing",
      role: "Hyderabad, India",
      achievements: [
        <>Hatched an automation tool using PyWhatkit to schedule and send WhatsApp messages via APIs.</>,
        <>Designed an intuitive user interface with React.js to enhance engagement by 30%.</>,
        <>Ensured Iac Security compliance and CI/CD Compatibility by enacting DevSecOps Principles, Linux Kernel security measures and multi-threading techniques.</>,
      ],
      images: [],
    },
  ],
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };