import {
  Code2,
  Brain,
  Database,
  BarChart3,
  Terminal,
  Globe,
  Cpu,
  Award,
  BookOpen
} from 'lucide-react';

export const personalInfo = {
  name: "Abhishek Prakash Kharade",
  title: "AI & Data Science Student",
  image: "/profile.jpeg", // Add your picture to the public folder and name it profile.jpeg
  subtitle: "Aspiring Data Scientist & Machine Learning Engineer",
  summary: "A passionate AI and Data Science student with a strong foundation in machine learning, deep learning, and data analytics. Dedicated to solving complex problems through data-driven approaches and building intelligent systems that make an impact.",
  email: "abhi027446@gmail.com",
  phone: "+91 8983295225",
  location: "Baramati, India",
  socials: {
    github: "https://github.com/AbhiKharade",
    linkedin: "https://www.linkedin.com/in/abhishek-kharade-12637b31b/",
    kaggle: "https://kaggle.com",
    leetcode: "https://leetcode.com"
  }
};

export const aboutData = {
  education: "Pursuing B.Tech in Artificial Intelligence & Data Science, maintaining a strong academic record while building practical skills.",
  passion: "Deeply passionate about natural language processing and computer vision.",
  interests: "Open-source contribution, reading AI research papers, and exploring new frameworks.",
  careerGoals: "Aiming to become a Lead Data Scientist, contributing to innovative AI solutions for real-world problems.",
  stats: [
    { label: "Projects Completed", value: 15 },
    { label: "Certifications", value: 8 },
    { label: "Technologies", value: 20 },
    { label: "GitHub Repositories", value: 25 },
  ]
};

export const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 80 }
    ]
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      { name: "Regression", level: 85 },
      { name: "Classification", level: 85 },
      { name: "Clustering", level: 80 },
      { name: "NLP", level: 75 },
      { name: "Feature Engineering", level: 85 }
    ]
  },
  {
    title: "Deep Learning",
    icon: Cpu,
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "Keras", level: 75 },
      { name: "PyTorch", level: 70 }
    ]
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 90 },
      { name: "Matplotlib", level: 85 },
      { name: "Plotly", level: 80 }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "SQLite", level: 80 }
    ]
  },
  {
    title: "Web",
    icon: Globe,
    skills: [
      { name: "Flask", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "React", level: 70 }
    ]
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 65 },
      { name: "VS Code", level: 95 },
      { name: "Jupyter Notebook", level: 95 },
      { name: "Google Colab", level: 90 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Face Recognition Attendance System",
    description: "An automated attendance system using facial recognition technology to stream-line classroom and office attendance tracking.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    tech: ["Python", "OpenCV", "Face Recognition", "Tkinter"],
    features: [
      "Real-time Face Recognition",
      "QR Scanner Integration",
      "Automated Attendance Logging"
    ],
    github: "https://github.com/AbhiKharade/face_attendence",
    live: "#",
    caseStudy: "#"
  },
  {
    id: 2,
    title: "Titanic Survival Prediction",
    description: "A machine learning classification model to predict passenger survival on the Titanic based on passenger data like age, sex, and ticket class.",
    image: "https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&fit=crop&q=80&w=1000",
    tech: ["Python", "Scikit-Learn", "Pandas", "Seaborn"],
    features: [
      "Exploratory Data Analysis (EDA)",
      "Feature Engineering",
      "Classification Algorithms"
    ],
    github: "https://github.com/AbhiKharade/titanic_survial_prediction_model",
    live: "#",
    caseStudy: "#"
  },
  {
    id: 3,
    title: "Sales Dashboard & Churn Prediction",
    description: "An interactive dashboard visualizing sales data combined with a machine learning model to predict customer churn.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tech: ["Dash", "Plotly", "Machine Learning"],
    features: [
      "Interactive Data Visualization",
      "Customer Churn Prediction",
      "Comprehensive Analytics"
    ],
    github: "https://github.com/AbhiKharade/SALES_PREDICTION_USING_PYTHON",
    live: "#",
    caseStudy: "#"
  },
  {
    id: 4,
    title: "Movie Rating Prediction",
    description: "A machine learning model that predicts movie ratings based on user reviews, genre, cast, and other metadata.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000",
    tech: ["Python", "Scikit-Learn", "Pandas", "NLP"],
    features: [
      "Data Preprocessing & EDA",
      "Sentiment Analysis of Reviews",
      "Regression Modeling"
    ],
    github: "https://github.com/AbhiKharade/MOVIE_RATING_PREDICTION_WITH_PYTHON",
    live: "#",
    caseStudy: "#"
  }
];

export const experience = [
  {
    id: 1,
    role: "Data Science Intern",
    company: "ProAzure",
    duration: "",
    description: "Data Science Internship.",
    icon: Database,
    letter: "/ProAzure_Internship_Letter.pdf"
  }
];

export const education = [
  {
    id: 1,
    degree: "B.Tech Artificial Intelligence & Data Science",
    institution: "S. B. Patil College of Engineering",
    duration: "2023 - 2027 (Expected)",
    cgpa: "TE SGPA: 9.43",
    description: "Core coursework includes Machine Learning, Deep Learning, Data Structures, Algorithms, and Big Data Analytics.",
    icon: BookOpen
  },
  {
    id: 2,
    degree: "Higher Secondary (Class XII)",
    institution: "Shri Gopinath Secondary Higher Secondary & Technical School, Varvand",
    duration: "",
    cgpa: "",
    description: "",
    icon: Award
  }
];

export const certifications = [
  {
    id: 1,
    name: "Python for Data Science",
    issuer: "IIT",
    date: "Recent",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
    link: "/python_certificate.pdf"
  },
  {
    id: 2,
    name: "Database Management System",
    issuer: "IIT",
    date: "Recent",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
    link: "/dbms_certificate.pdf"
  }
];

export const achievements = [
  {
    id: 1,
    title: "1st Runner Up - National AI Hackathon",
    description: "Developed a computer vision solution for smart farming, competing against 50+ teams across the country.",
    year: "2023"
  },
  {
    id: 2,
    title: "Top 5% on LeetCode",
    description: "Solved 300+ data structure and algorithm challenges, maintaining a high contest rating.",
    year: "2024"
  },
  {
    id: 3,
    title: "Published Research Paper",
    description: "Co-authored a paper on 'Optimizing CNN Architectures for Edge Devices' presented at IEEE conference.",
    year: "2023"
  }
];
