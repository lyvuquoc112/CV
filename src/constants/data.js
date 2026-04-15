export const CV_DATA = {
  header: {
    fullName: "Lý Vũ Quốc Huy",
    title: "Front-end Developer (Intern / OJT)",
    phone: "0937090869",
    email: "lyvuquochuy123@gmail.com",
    githubName: "lyvuquoc112",
    githubUrl: "https://github.com/lyvuquoc112",
    portfolioUrl: "https://portofolio-gamma-eight-92.vercel.app/",
    address: "Ho Chi Minh City, Vietnam",
    avatar: "/avatar.jpg",
  },
  objective:
    "A Software Engineering student seeking a Front-end Developer internship (OJT program). My primary goal is to apply my solid foundation in React and Tailwind CSS to real-world projects, experience the professional software development lifecycle (Agile/Scrum), and effectively collaborate with backend teams to deliver functional web applications.",
  education: {
    school: "FPT University",
    major: "Software Engineering",
    status: "Current: Semester 5 - OJT | Current CGPA: 7.86/10",
    certificates: [
      {
        id: 1,
        title: "Honorable Student",
        details: "3 consecutive trimesters: Spring 2025 (8.86), Summer 2025 (8.42), Fall 2025 (8.44).",
        link: "https://drive.google.com/file/d/162Jlg0xYtK3PML-B6-hyWJoOH2wLCpWt/view?usp=sharing",
        type: "academic",
      },
      {
        id: 2,
        title: "IELTS 6.5",
        details: "(Reading: 7.5, Listening: 7.0).",
        link: "https://drive.google.com/file/d/162Jlg0xYtK3PML-B6-hyWJoOH2wLCpWt/view?usp=sharing",
        type: "language",
      },
    ],
  },
  skills: {
    categories: [
      {
        id: 1,
        name: "Core & Frameworks",
        items: ["React", "Tailwind CSS", "JavaScript (ES6+)", "HTML/CSS"],
      },
      {
        id: 2,
        name: "Tools",
        items: ["Vite", "Git/GitHub", "Postman"],
      },
    ],
    softSkills:
      "Teamwork, Problem-Solving, Cross-functional communication (FE - BE).",
  },
  projects: [
    {
      id: 1,
      name: "CycleX - E-commerce Platform for Cycling",
      role: "Front-end Developer",
      githubUrl: "https://github.com/lyvuquoc112/CycleX.git",
      githubDisplay: "https://github.com/lyvuquoc112/CycleX.git",
      teamSize: "5 members (3 FE, 2 BE)",
      techStack: "Next.js, React, TypeScript, Tailwind CSS",
      responsibilities: [
        "Developed the core user interfaces including Authentication (Login/Register, Forgot Password) and Product Listings with filtering capabilities for buyers.",
        "Built the Checkout flow, and integrating Cash on Delivery (COD) payment method.",
        "Implemented the Seller dashboard to manage and accept incoming orders.",
        "Collaborated directly with the Backend team to consume RESTful APIs and display dynamic data.",
      ],
      challenges:
        "Successfully resolved data mismatch issues between Front-end and Back-end by debugging API responses and standardizing JSON data structures, ensuring accurate rendering of product details.",
    },
  ],
};
