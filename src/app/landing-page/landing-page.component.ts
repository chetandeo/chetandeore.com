import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  emailCopied = false;

  metrics = [
    {
      value: '5M+',
      label: 'Monthly Transactions',
      detail: 'Architected full-stack .NET 8 applications running at 99.2% uptime',
      icon: 'fa-solid fa-server',
      color: 'purple'
    },
    {
      value: '3x',
      label: 'Faster Shipping Velocity',
      detail: 'Adopting AI-augmented workflows (Amazon Q, Claude, Cursor) for dev & testing',
      icon: 'fa-solid fa-bolt',
      color: 'cyan'
    },
    {
      value: '86%',
      label: 'Faster Deployments',
      detail: 'Agentic CI/CD pipelines reducing release cycles from 2.5 hours to 18 minutes',
      icon: 'fa-solid fa-rocket',
      color: 'emerald'
    },
    {
      value: '10K+',
      label: 'Docs Processed Daily',
      detail: 'RAG & semantic search via Semantic Kernel + pgvector at 92% accuracy',
      icon: 'fa-solid fa-brain',
      color: 'purple'
    }
  ];

  keyStats = [
    { num: '35%', desc: 'Feature dev time reduction via AI code gen & tests' },
    { num: '60%', desc: 'Query latency drop (2.8s → 1.1s) with indexing & pgvector' },
    { num: '88%', desc: 'Unit test coverage achieved (up from 62%)' },
    { num: '89%', desc: 'Defect escape reduction (12% → 1.3%) via TDD & AI review' }
  ];

  featuredProjects = [
    {
      id: 'titan',
      category: 'PRODUCT PLATFORM · ENTERPRISE SCALE',
      title: 'TITAN: Test Lifecycle Platform',
      tagline: 'Architected high-throughput API layer for 200+ QA engineers processing 5,000+ test runs daily.',
      stack: ['.NET Web API', 'C#', 'MSSQL', 'GitHub Actions', 'Amazon Q'],
      challenge: 'QA team faced 2-week testing regression cycles and sluggish database query response times (1.8s) across high-volume test runs.',
      solution: 'Architected a scalable .NET Web API layer, optimized critical MSSQL stored procedures, and leveraged Amazon Q to auto-generate 80% of unit tests.',
      metrics: [
        { label: 'Query Latency', value: '-45%', note: '1.8s → 1.0s' },
        { label: 'Testing Cycle', value: '4 Days', note: 'Down from 2 weeks' },
        { label: 'API Uptime', value: '99.1%', note: 'Across release cycles' },
        { label: 'QA Velocity', value: '+40%', note: 'Productivity lift' }
      ],
      theme: 'purple'
    },
    {
      id: 'techconnectr',
      category: 'B2B SAAS · SEMANTIC SEARCH & RAG',
      title: 'TechConnectr: Lead Ingestion Engine',
      tagline: 'Built multi-format document ingestion and semantic search platform handling 50,000+ documents/month.',
      stack: ['.NET Core MVC', 'PostgreSQL', 'pgvector', 'Claude API', 'GitHub Copilot', 'Docker'],
      challenge: 'Handling 50K+ unstructured documents monthly (PDF, DOCX, CSV) with high payload integration failure rates (12%) and slow lead retrieval (2.1s).',
      solution: 'Implemented pgvector semantic indexing with Claude API embedding strategies, created metadata-driven payload mapping, and built agentic validation tests.',
      metrics: [
        { label: 'Lead Retrieval', value: '60% Faster', note: '2.1s → 0.9s response' },
        { label: 'Error Rate', value: '1.3%', note: 'Down from 12%' },
        { label: 'Document Volume', value: '50K+/mo', note: 'PDF, DOCX, CSV' },
        { label: 'Business Impact', value: '+$500K', note: 'ARR growth enabled' }
      ],
      theme: 'cyan'
    },
    {
      id: 'ai-modernization',
      category: 'ENTERPRISE MODERNIZATION · AGENTIC CI/CD',
      title: 'Enterprise AI & Modernization Initiative',
      tagline: 'Architected .NET 8 microservices, Semantic Kernel document classification, and agentic self-healing CI/CD.',
      stack: ['.NET 8', 'Semantic Kernel', 'Azure OpenAI', 'pgvector', 'Cursor IDE', 'GitHub Actions'],
      challenge: 'Enterprise legacy monolith suffered from 8.2s cold startup, 2.5-hour manual release cycles, and manual document classification bottlenecks.',
      solution: 'Decoupled into .NET 8 microservices, engineered a Semantic Kernel + pgvector RAG pipeline processing 10K+ docs daily, and built GitHub Actions agentic rollback pipelines.',
      metrics: [
        { label: 'Startup Time', value: '1.4s', note: '83% improvement (8.2s → 1.4s)' },
        { label: 'Release Time', value: '18 Min', note: '86% faster (2.5h → 18m)' },
        { label: 'RAG Accuracy', value: '92%', note: 'vs 64% keyword search' },
        { label: 'Tech Debt Saved', value: '$120K', note: 'Across 3-year roadmap' }
      ],
      theme: 'emerald'
    }
  ];

  skillCategories = [
    {
      category: 'Core Backend & Architecture',
      icon: 'fa-solid fa-server',
      skills: ['.NET 8 / .NET Core', 'C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'Microservices Architecture', 'Clean Architecture & DDD', 'RESTful API Design', 'TDD & Unit Testing']
    },
    {
      category: 'Generative AI & Agentic Delivery',
      icon: 'fa-solid fa-brain',
      skills: ['Semantic Kernel', 'Azure OpenAI & Claude API', 'Amazon Q Developer', 'GitHub Copilot & Cursor IDE', 'pgvector & Vector Search', 'RAG System Architecture', 'Agentic CI/CD Orchestration', 'Prompt Engineering for Code']
    },
    {
      category: 'Databases & Performance Tuning',
      icon: 'fa-solid fa-database',
      skills: ['PostgreSQL & pgvector', 'Microsoft SQL Server (MSSQL)', 'Stored Procedure Optimization', 'Query Plan & Index Tuning', 'Semantic Search Indexing', 'Database Migrations', 'Redis Caching']
    },
    {
      category: 'Cloud, DevOps & Containers',
      icon: 'fa-solid fa-cloud',
      skills: ['Microsoft Azure (App Services, Functions, CosmosDB)', 'Azure Container Registry & AI Services', 'Docker & Containerization', 'GitHub Actions CI/CD Pipelines', 'Automated Health Checks & Rollbacks', 'Linux Environments']
    },
    {
      category: 'Frontend & UI Engineering',
      icon: 'fa-solid fa-code',
      skills: ['Angular 14+', 'TypeScript & RxJS', 'React.js', 'Responsive Web Design', 'SCSS / Modern CSS', 'HTML5 & Web Standards', 'API Integration']
    }
  ];

  experiences = [
    {
      company: 'LTM Limited (formerly LTIMindtree)',
      role: 'Senior Software Engineer — Generative AI Initiative & .NET Architecture',
      period: 'Jul 2025 — Present',
      location: 'Pune, Maharashtra, India',
      highlights: [
        'Integrated Amazon Q and Claude into daily engineering workflow, reducing feature dev cycle by 35% (5 days → 3.25 days).',
        'Built agentic CI/CD pipeline using GitHub Actions + custom orchestration logic, reducing deployment duration from 2.5 hours to 18 minutes (86% faster).',
        'Designed and deployed .NET 8 microservices replacing legacy monolith, slashing application startup latency from 8.2s to 1.4s (83% improvement) and saving $120K in tech debt.',
        'Engineered high-throughput RAG pipeline with Semantic Kernel + pgvector, processing 10K+ enterprise documents daily with 92% retrieval accuracy (vs 64% keyword baseline).',
        'Mentored 3 junior developers on AI-augmented development practices, delivering a 40% team productivity lift.'
      ],
      tags: ['.NET 8', 'Semantic Kernel', 'pgvector', 'Azure OpenAI', 'GitHub Actions', 'Docker', 'Amazon Q', 'Cursor']
    },
    {
      company: '12th Wonder',
      role: 'Software Engineer — Full-Stack .NET + AI-Enhanced Development',
      period: 'Apr 2024 — Jun 2025',
      location: 'Pune, Maharashtra, India',
      highlights: [
        'Architected and delivered 12 major features on-time for B2B lead generation platform using .NET Core, EF Core, Angular 14+, and PostgreSQL at 99.2% uptime.',
        'Enhanced data query performance by 60% (2.8s → 1.1s API response time) through index tuning, stored procedure optimization, and pgvector integration.',
        'Accelerated feature velocity by adopting GitHub Copilot and Claude for architectural exploration, cutting PR cycle time by 45%.',
        'Automated test generation with AI tools, lifting unit test coverage from 62% to 88% in 3 months and reducing critical production defects by 35%.',
        'Built intelligent API gateway with metadata-driven payload mapping, integrating 8+ third-party data providers with 99.8% request success rate.'
      ],
      tags: ['.NET Core', 'Angular 14+', 'PostgreSQL', 'pgvector', 'MSSQL', 'Claude API', 'GitHub Copilot', 'Docker']
    },
    {
      company: '12th Wonder',
      role: 'Junior Software Engineer',
      period: 'Apr 2022 — Apr 2024',
      location: 'Pune, Maharashtra, India',
      highlights: [
        'Developed RESTful API endpoints and background processing services in ASP.NET Core for digitization and automation products.',
        'Constructed database schemas, triggers, and optimized SQL procedures across MSSQL and PostgreSQL databases.',
        'Collaborated on Angular single-page applications, creating reusable UI components and consuming backend REST services with RxJS.',
        'Participated in code reviews, bug fixes, and continuous improvements to codebase stability.'
      ],
      tags: ['ASP.NET Core', 'C#', 'Angular', 'MSSQL', 'PostgreSQL', 'Git', 'Agile']
    }
  ];

  certifications = [
    {
      title: 'Microsoft Certified: Azure Developer Associate (AZ-204)',
      issuer: 'Microsoft',
      year: '2024',
      badge: 'Certified',
      icon: 'fa-brands fa-microsoft'
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      year: '2023',
      badge: 'Certified',
      icon: 'fa-brands fa-microsoft'
    },
    {
      title: 'Azure AI Engineer Associate (AI-102)',
      issuer: 'Microsoft',
      year: 'Scheduled Q3 2026',
      badge: 'Exam Scheduled',
      icon: 'fa-solid fa-brain'
    },
    {
      title: 'GitHub Copilot & AI Code Generation',
      issuer: 'GitHub Skills & Udemy',
      year: '2024',
      badge: 'Professional',
      icon: 'fa-brands fa-github'
    }
  ];

  education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Sandip University, Nashik',
      period: '2020 — 2022',
      details: 'Coursework: Distributed Systems, Database Optimization, Software Architecture'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'KES’s Pratap College, Amalner',
      period: '2017 — 2020',
      details: 'Computer Applications, Object-Oriented Programming, Data Structures & Algorithms'
    }
  ];

  ngOnInit(): void {}

  copyEmail(): void {
    const email = 'cdeore20@gmail.com';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        this.emailCopied = true;
        setTimeout(() => (this.emailCopied = false), 2500);
      });
    } else {
      this.emailCopied = true;
      setTimeout(() => (this.emailCopied = false), 2500);
    }
  }
}