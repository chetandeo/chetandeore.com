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
    '10K+ documents/day processed through AI-powered RAG pipelines',
    '92% retrieval accuracy across enterprise document workflows',
    '99.2% API uptime across production services',
    '5M+ transactions/month supported by full-stack .NET applications',
    '3 junior engineers mentored on Generative AI integration'
  ];

  skills: SkillGroup[] = [
    {
      title: 'Core Stack',
      subtitle: 'Full-stack application engineering',
      skills: ['.NET 8', 'C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'Angular 14+', 'TypeScript']
    },
    {
      title: 'Generative AI',
      subtitle: 'Hands-on LLM orchestration',
      skills: ['Azure OpenAI API', 'Semantic Kernel', 'Prompt Engineering', 'RAG Architecture', 'Vector Indexing', 'Azure AI Search', 'pgvector']
    },
    {
      title: 'Cloud & Infrastructure',
      subtitle: 'Production deployments',
      skills: ['Microsoft Azure', 'App Services', 'Functions', 'Cosmos DB', 'AI Services', 'Container Registry', 'Docker', 'GitHub Actions CI/CD']
    },
    {
      title: 'Databases & Optimization',
      subtitle: 'Performance-focused data systems',
      skills: ['PostgreSQL', 'MSSQL', 'Query Performance Tuning', 'Stored Procedure Optimization', 'Semantic Search Indexing', 'Vector Operations']
    }
  ];

  experiences: Experience[] = [
    {
      company: 'LTM Limited (formerly LTIMindtree), Pune',
      position: 'Senior Software Engineer - Generative AI Initiative',
      duration: 'July 2025 - Present',
      description: 'Leading enterprise AI modernization work across .NET 8, Azure OpenAI, Semantic Kernel, and RAG-based document processing systems.',
      highlights: [
        'Architected .NET 8 microservices replacing legacy application flows, reducing startup time from 8.2s to 1.4s.',
        'Engineered RAG pipeline using Semantic Kernel and Azure AI Search, processing 10K+ enterprise documents daily with 92% retrieval accuracy.',
        'Containerized workloads with Docker and improved release cadence from monthly deployments to multiple production releases per week.'
      ],
      technologies: ['.NET 8', 'Azure OpenAI', 'Semantic Kernel', 'RAG', 'Azure AI Search', 'Docker']
    },
    {
      company: '12th Wonder LLC',
      position: 'Software Engineer',
      duration: '2022 - 2025',
      description: 'Built and maintained production full-stack systems using .NET Core, Angular, MSSQL, and PostgreSQL for product and service-based platforms.',
      highlights: [
        'Developed RESTful APIs and Angular workflows supporting test lifecycle and B2B lead generation operations.',
        'Optimized MSSQL and PostgreSQL stored procedures, reducing high-volume query latency across reporting and retrieval flows.',
        'Implemented file handling and API integration layers for document-heavy enterprise workflows.'
      ],
      technologies: ['.NET Core', 'Angular', 'PostgreSQL', 'MSSQL', 'REST APIs', 'Entity Framework']
    }
  ];

  projects: Project[] = [
    {
      title: 'Titan Test Life Cycle',
      description: 'Product-based test lifecycle platform serving QA engineering workflows through .NET Web API and MSSQL.',
      highlights: [
        'Architected API layer for product test lifecycle management serving 200+ QA engineers.',
        'Optimized MSSQL stored procedures reducing query latency by 45% from 1.8s to 1.0s.',
        'Designed reporting pipeline processing 5K+ test runs per day.'
      ],
      impact: 'Shipped v2.0 on time with 99.1% API uptime across a 3-month release cycle.',
      technologies: ['.NET Web API', 'C#', 'MSSQL', 'Stored Procedures', 'Reporting']
    },
    {
      title: 'TechConnectr',
      description: 'B2B lead generation orchestration platform with document ingestion, payload mapping, and semantic retrieval workflows.',
      highlights: [
        'Implemented file processing layer handling 50K+ documents per month across PDF, DOCX, and CSV inputs.',
        'Optimized PostgreSQL queries reducing lead retrieval time by 60% from 2.1s to 0.9s.',
        'Created intelligent payload mapping that reduced integration errors from 12% to 1.3%.'
      ],
      impact: 'Enabled sales teams to onboard 3 new lead sources in Q2 and support ARR growth.',
      technologies: ['.NET Core MVC', 'PostgreSQL', 'Document Processing', 'API Integration', 'Semantic Search']
    },
    {
      title: 'AI Document Processing System',
      description: 'Enterprise RAG system integrating Azure OpenAI, Semantic Kernel, vector search, and .NET services.',
      highlights: [
        'Designed retrieval pipeline for 10K+ enterprise documents processed daily.',
        'Improved answer relevance against keyword search baselines through semantic indexing.',
        'Integrated prompt orchestration, vector retrieval, and service APIs into production workflows.'
      ],
      impact: 'Delivered 92% retrieval accuracy for enterprise knowledge workflows.',
      technologies: ['Azure OpenAI', 'Semantic Kernel', 'RAG', 'Azure AI Search', '.NET 8']
    }
  ];

  certifications = [
    'Azure AI Engineer Associate (AI-102) - Exam scheduled Q3 2026',
    'Microsoft Certified: Azure Developer Associate (AZ-204) - 2024',
    'Microsoft Certified: Azure Fundamentals (AZ-900) - 2023',
    'Angular 14+ - Complete course plus 3 production projects',
    'C# Advanced Patterns - Applied through production .NET development'
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
