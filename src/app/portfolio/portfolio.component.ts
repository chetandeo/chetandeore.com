import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  impact: string;
  link?: string;
  image?: string;
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

interface SkillGroup {
  title: string;
  subtitle: string;
  skills: string[];
}

interface Education {
  degree: string;
  school: string;
  year: string;
  details?: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  impactMetrics = [
    '35% faster feature delivery using Amazon Q, Claude, Copilot, and Cursor',
    '86% faster deployment flow through agentic CI/CD validation and rollback automation',
    '88% test coverage maintained with AI-assisted test writing and review workflows',
    '99.2% API uptime across production services',
    '5M+ transactions/month supported by full-stack .NET applications',
    '10K+ documents/day processed through Semantic Kernel and pgvector pipelines'
  ];

  skills: SkillGroup[] = [
    {
      title: 'AI-Augmented Development Tools',
      subtitle: 'Daily workflow acceleration',
      skills: ['Amazon Q', 'GitHub Copilot', 'Cursor IDE', 'Claude', 'ChatGPT', 'Agentic AI Workflows', 'Code Generation', 'Test Writing', 'Documentation Automation']
    },
    {
      title: 'Backend Development',
      subtitle: 'Production API architecture',
      skills: ['.NET 8', 'C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'Semantic Kernel', 'REST APIs', 'Microservices']
    },
    {
      title: 'Frontend Development',
      subtitle: 'Full-stack product delivery',
      skills: ['Angular 14+', 'TypeScript', 'React.js', 'Responsive UI', 'HTML', 'CSS']
    },
    {
      title: 'Cloud & Infrastructure',
      subtitle: 'Production deployments',
      skills: ['Microsoft Azure', 'App Services', 'Functions', 'Cosmos DB', 'AI Services', 'Container Registry', 'Docker', 'GitHub Actions CI/CD', 'Agentic Deployment Automation']
    },
    {
      title: 'Databases & Optimization',
      subtitle: 'Performance-focused data systems',
      skills: ['PostgreSQL', 'MSSQL', 'pgvector', 'Query Performance Tuning', 'Stored Procedures', 'Semantic Search', 'Vector Operations']
    },
    {
      title: 'Development Practices',
      subtitle: 'Quality and delivery habits',
      skills: ['TDD', 'Code Reviews', 'Git', 'GitHub', 'Agile', 'Debugging', 'Prompt Engineering for Code']
    }
  ];

  experiences: Experience[] = [
    {
      company: 'LTM Limited (formerly LTIMindtree), Pune',
      position: 'Senior Software Engineer - AI-Augmented Development & .NET Architecture',
      duration: 'July 2025 - Present',
      description: 'Building production systems faster with AI-augmented development while shipping .NET 8 architecture, agentic CI/CD automation, and semantic search capabilities.',
      highlights: [
        'Integrated Amazon Q and Claude into the development workflow, reducing average feature development time by 35% through AI-assisted code generation, documentation, and test writing.',
        'Built agentic CI/CD pipeline using GitHub Actions and custom orchestration logic, reducing deployment time from 2.5 hours to 18 minutes with automated validation and rollback decisions.',
        'Established AI-assisted code review practices with Cursor IDE, reducing review cycles from 3 days to 1 day while maintaining 88% test coverage.',
        'Designed .NET 8 microservices replacing legacy application flows, reducing startup time from 8.2s to 1.4s.',
        'Built Semantic Kernel and pgvector document classification pipeline processing 10K+ enterprise documents daily with 92% accuracy.'
      ],
      technologies: ['.NET 8', 'Amazon Q', 'Claude', 'Cursor IDE', 'GitHub Actions', 'Semantic Kernel', 'pgvector', 'Docker']
    },
    {
      company: '12th Wonder LLC',
      position: 'Software Engineer',
      duration: 'April 2022 - June 2025',
      description: 'Built production full-stack systems for automation and digitization platforms using .NET Core, Angular, MSSQL, PostgreSQL, and AI-enhanced delivery practices.',
      highlights: [
        'Accelerated feature velocity with GitHub Copilot for boilerplate generation and Claude for architectural problem-solving, reducing average PR cycle time by 45%.',
        'Automated test generation using AI tools, increasing unit test coverage from 62% to 88% in 3 months and reducing production bugs by 35%.',
        'Delivered 12 major features for a B2B lead generation platform using .NET Core, Entity Framework, Angular 14+, and PostgreSQL while maintaining 99.2% uptime.',
        'Improved data query performance by 60% through indexing, stored procedure optimization, and pgvector integration for semantic search.',
        'Built metadata-driven payload mapping for 8+ third-party data sources with 99.8% request success rate.'
      ],
      technologies: ['.NET Core', 'Angular 14+', 'PostgreSQL', 'MSSQL', 'pgvector', 'GitHub Copilot', 'Claude', 'Entity Framework']
    }
  ];

  projects: Project[] = [
    {
      title: 'Titan Test Life Cycle',
      description: 'Product-based test lifecycle platform serving QA engineering workflows through .NET Web API and MSSQL.',
      highlights: [
        'Architected API layer for product test lifecycle management serving 200+ QA engineers.',
        'Optimized MSSQL stored procedures reducing query latency by 45% from 1.8s to 1.0s.',
        'Designed reporting pipeline processing 5K+ test runs per day.',
        'Used Amazon Q to accelerate unit test generation, compressing test automation work from 2 weeks to 4 days.',
        'Reduced bug report resolution time by 3 days through intelligent categorization logic.'
      ],
      impact: 'Shipped v2.0 on time with 99.1% API uptime and improved QA team productivity by 40%.',
      technologies: ['.NET Web API', 'C#', 'MSSQL', 'GitHub Actions', 'Amazon Q', 'Stored Procedures']
    },
    {
      title: 'TechConnectr',
      description: 'B2B lead generation orchestration platform with document ingestion, payload mapping, and semantic retrieval workflows.',
      highlights: [
        'Implemented file processing layer handling 50K+ documents per month across PDF, DOCX, and CSV inputs.',
        'Used Claude to shape the document embedding strategy and GitHub Copilot to accelerate parsing logic development.',
        'Optimized PostgreSQL queries reducing lead retrieval time by 60% from 2.1s to 0.9s.',
        'Created intelligent payload mapping that reduced integration errors from 12% to 1.3%.',
        'Built agentic validation flow with custom orchestration logic and AI-generated test cases.'
      ],
      impact: 'Enabled sales teams to onboard 3 new lead sources in Q2 and support ARR growth.',
      technologies: ['.NET Core MVC', 'PostgreSQL', 'pgvector', 'Claude', 'GitHub Copilot', 'Docker', 'GitHub Actions']
    },
    {
      title: 'Agentic CI/CD Automation',
      description: 'Deployment orchestration workflow using GitHub Actions and custom validation logic for faster, safer production releases.',
      highlights: [
        'Automated deployment validation, health checks, and rollback decisions to remove manual release gates.',
        'Reduced deployment time from 2.5 hours to 18 minutes across production release workflows.',
        'Documented the workflow with AI-assisted runbooks and generated regression test cases.'
      ],
      impact: 'Improved release speed by 86% while keeping deployment decisions observable and repeatable.',
      technologies: ['GitHub Actions', 'Agentic Workflows', '.NET 8', 'Docker', 'Claude', 'Amazon Q']
    }
  ];

  certifications = [
    'Microsoft Certified: Azure Developer Associate (AZ-204) - 2024',
    'Microsoft Certified: Azure Fundamentals (AZ-900) - 2023',
    'GitHub Copilot Workshop - GitHub Skills, 2024',
    'Prompt Engineering for Code Generation - Udemy, 2024',
    'Advanced .NET 8 Patterns & Async Design - Pluralsight, 2025',
    'Azure AI Engineer Associate (AI-102) - Exam scheduled Q3 2026',
    'Agentic AI Workflows & Orchestration - Custom project-based learning'
  ];

  education: Education[] = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'Sandip University, Nashik',
      year: '2022',
      details: 'Coursework: Distributed Systems, Database Optimization, Software Architecture'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Pratap College, Amalner',
      year: '2020'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
