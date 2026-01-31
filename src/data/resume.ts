import type { Resume } from "./../types/resume";

export const resume: Resume = {
  profile: {
    name: "VO QUANG NHA",
    title: "SENIOR SOFTWARE ENGINEER",
    avatar: null,
    gender: "Male",
    dob: "07/11/1998",
    email: "voquangnha@gmail.com",
    phone: "0845431198",
    website: "www.linkedin.com/in/nhavq",
    location: "Da Nang, Viet Nam",
  },

  careerObjective: `
Hi, my name is Quang Nha. I am a Software Engineer specializing in Software
Architecture and Development, with a strong passion for building scalable
and efficient systems. My goal is to become a skilled full-stack developer,
leveraging my expertise to deliver innovative solutions that create value
for customers and drive business success. I am committed to continuous
learning, staying updated with the latest technologies, and applying best
practices to design exceptional user experiences.
`,

  education: [
    {
      school:
        "University of Technology and Education - The University of Da Nang",
      major: "Information Technology",
      gpa: "3.44 / 4.0",
    },
  ],

  skills: {
    backend: [
      "ASP.NET Framework/Core",
      "ASP.NET Core Web API",
      "Entity Framework",
      "LINQ",
      "Node.js (NestJS)",
      "Unit Test (MSTest, xUnit)",
      "Automation Test (Selenium, Playwright)",
    ],
    frontend: [
      "ReactJS",
      "NextJS",
      "Angular",
      "JavaScript / TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    database: [
      "MS SQL Server",
      "MySQL",
      "PostgreSQL",
    ],
    cloud: [
      "Azure",
      "Azure DevOps",
      "CI/CD",
    ],
    agile: [
      "Agile / Scrum",
      "Sprint planning",
      "Daily standup",
      "Retrospective",
    ],
    tools: [
      "Git",
      "GitHub",
      "Postman",
      "Docker (basic)",
      "Jira",
    ],
    softSkills: [
      "Good communication in English",
      "Strong problem-solving skills",
      "Teamwork & collaboration",
      "Self-learning & adaptability",
    ],
  },

  experiences: [
    {
      company: "Anetra Group",
      role: "Developer",
      period: "May 2025 – Present",
      projects: [
        {
          name: "D.ODELA Project",
          teamSize: "12 members (Agile team)",
          techStack:
            "ASP.NET Core, Blazor, SQL Server, MudBlazor",
          responsibilities: [
            "Developed a platform providing business analytics and operational data for financial, strategic, and operational support.",
            "Designed and implemented backend APIs for data ingestion, aggregation, and analytics.",
            "Implemented authentication and authorization for secure APIs and applications.",
            "Collaborated with AI team to process and analyze financial data using machine learning models.",
            "Visualized business and user data using Chart.js to create interactive dashboards.",
            "Built UI components based on Figma designs, ensuring responsive and consistent UX.",
            "Optimized SQL Server queries and database schema to improve performance.",
            "Integrated frontend and backend to deliver seamless user experience.",
            "Worked closely with QA to ensure accurate and user-friendly data presentation.",
          ],
        },
      ],
    },

    {
      company: "MTI Technology Company",
      role: "Developer",
      period: "July 2022 – April 2025",
      projects: [
        {
          name: "Healthcare Project",
          teamSize: "8–10 members (Agile team)",
          techStack:
            "ASP.NET Core MVC, ASP.NET Core Web API, Entity Framework, SQL Server, JavaScript, jQuery, HTML5, CSS3",
          responsibilities: [
            "Developed and maintained a web application providing healthcare services.",
            "Designed and implemented backend APIs and integrated with frontend modules.",
            "Wrote unit tests to verify functionality and maintain code quality.",
            "Integrated CI/CD pipelines to automatically scan for bugs, code smells, and security vulnerabilities.",
            "Used Azure Blob Storage to store and manage user-uploaded health documents and images.",
            "Implemented background processing using Azure Queue Storage and Azure Functions.",
            "Integrated LINE Login for authentication.",
            "Implemented CSV export functionality for reports.",
            "Collaborated closely with Product Owner to clarify requirements.",
            "Reviewed code and ensured adherence to best practices.",
          ],
        },
        {
          name: "Time Sheet Management",
          teamSize: "10 members (Agile team)",
          techStack:
            "NestJS, NextJS, TypeORM, SQL",
          responsibilities: [
            "Developed a web-based HR management system (timesheets, leave requests, employee records).",
            "Designed and implemented scalable APIs with proper authorization and JWT authentication.",
            "Integrated backend APIs with frontend to ensure smooth data flow.",
            "Used Redux for efficient state management on the frontend.",
            "Implemented WebSocket to notify users in real-time.",
            "Built email services for automated notifications.",
            "Participated in code reviews and improved system performance.",
          ],
        },
      ],
    },

    {
      company: "Cloud Connect Technology Company Limited",
      role: "Developer",
      period: "Jan 2021 – March 2021",
      projects: [
        {
          name: "Cloud Sales System",
          teamSize: "8 members",
          techStack:
            "ASP.NET Core MVC, JavaScript, jQuery, MySQL, HTML5, CSS3, Bootstrap",
          responsibilities: [
            "Developed a centralized cloud system for managing POS terminals across multiple locations.",
            "Designed and implemented APIs to manage POS settings, pricing, promotions, tax rules, and currency.",
            "Worked directly with customers to gather requirements and clarify expectations.",
            "Collaborated closely with stakeholders to ensure project success.",
          ],
        },
        {
          name: "EMS System",
          teamSize: "6 members",
          techStack:
            "Angular, ASP.NET Core Web API, MySQL",
          responsibilities: [
            "Designed and developed microservices-based systems including User Service, HR Service, and Invoice Service.",
            "Improved system performance using Redis caching.",
            "Designed RESTful APIs for employee management functionalities.",
            "Reviewed team members’ code and maintained high code quality standards.",
          ],
        },
      ],
    },
  ],

  hobbies: [
    "Building personal software projects",
    "Learning new technologies and frameworks",
    "Reading technology blogs and following industry trends",
    "Playing sports (badminton, football)",
  ],
};
