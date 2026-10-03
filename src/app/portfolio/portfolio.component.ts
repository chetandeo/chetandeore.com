import { Component, OnInit } from '@angular/core';

export interface DetailedProject {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  tagline: string;
  type: string;
  scale: string;
  technologies: string[];
  problem: string;
  architecture: string;
  solution: string[];
  metrics: { value: string; label: string; detail: string }[];
  theme: 'purple' | 'cyan' | 'emerald';
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  selectedFilter: string = 'all';

  filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'dotnet', label: '.NET 8 & Microservices' },
    { id: 'ai', label: 'Gen AI & RAG' },
    { id: 'cloud', label: 'Cloud & CI/CD' }
  ];

  projects: DetailedProject[] = [
    {
      id: 'titan',
      category: 'dotnet',
      categoryLabel: 'PRODUCT PLATFORM · ENTERPRISE TESTING',
      title: 'TITAN: Test Lifecycle Platform',
      tagline: 'Architected high-throughput API layer for 200+ QA engineers processing 5,000+ test runs daily.',
      type: 'Enterprise Product',
      scale: '200+ QA Engineers · 5K+ Runs/Day · 99.1% Uptime',
      technologies: ['.NET Web API', 'C#', 'MSSQL', 'GitHub Actions', 'Amazon Q Developer', 'Stored Procedures', 'TDD'],
      problem: 'Engineering teams suffered from 2-week testing regression cycles and sluggish database query response times (1.8s) across high-volume test runs, bottlenecking product shipping velocity.',
      architecture: 'Decoupled monolithic testing endpoints into optimized .NET Web API services backed by refactored MSSQL stored procedures with dedicated query indexing and asynchronous report batching.',
      solution: [
        'Architected robust .NET Web API layer handling 5K+ automated test executions daily with sub-second response times.',
        'Profiled and re-engineered mission-critical MSSQL stored procedures, slashing query latency by 45% (1.8s → 1.0s).',
        'Implemented Amazon Q Developer for unit test generation, accelerating test suite coverage from 2 weeks to 4 days.',
        'Engineered intelligent categorization logic for bug reports, cutting resolution turnaround time by 3 full days.'
      ],
      metrics: [
        { value: '-45%', label: 'Query Latency', detail: '1.8s → 1.0s MSSQL response' },
        { value: '4 Days', label: 'Testing Cycle', detail: 'Down from 2 weeks' },
        { value: '99.1%', label: 'API Uptime', detail: 'Maintained across release cycles' },
        { value: '+40%', label: 'QA Velocity', detail: 'Verified productivity lift' }
      ],
      theme: 'purple'
    },
    {
      id: 'techconnectr',
      category: 'ai',
      categoryLabel: 'B2B SAAS · SEMANTIC SEARCH & RAG',
      title: 'TechConnectr: Document Ingestion & Lead Engine',
      tagline: 'Built multi-format document ingestion and semantic search platform handling 50,000+ documents/month.',
      type: 'B2B Orchestration SaaS',
      scale: '50K+ Documents/Mo · 8+ Data Sources · $500K ARR Growth',
      technologies: ['.NET Core MVC', 'PostgreSQL', 'pgvector', 'Claude API', 'GitHub Copilot', 'Docker', 'GitHub Actions'],
      problem: 'Heterogeneous document formats (PDF, DOCX, CSV) caused a 12% integration failure rate, and traditional keyword search was slow (2.1s) and missed context-dependent lead matches.',
      architecture: 'Built an ingestion pipeline utilizing PostgreSQL with pgvector for vector embeddings (designed with Claude API), coupled with an intelligent metadata-driven payload transformation gateway.',
      solution: [
        'Implemented scalable file processing layer handling 50K+ monthly documents with automated text extraction and chunking.',
        'Integrated pgvector semantic search, accelerating lead retrieval speed by 60% (2.1s → 0.9s) while improving search relevance.',
        'Designed metadata-driven payload mapping system, reducing third-party data integration errors from 12% to 1.3%.',
        'Constructed agentic validation pipeline with custom orchestration logic and AI-generated test scenarios, enabling seamless onboarding of 3 new lead partners.'
      ],
      metrics: [
        { value: '60%', label: 'Faster Retrieval', detail: '2.1s → 0.9s API response' },
        { value: '1.3%', label: 'Error Rate', detail: 'Down from 12% baseline' },
        { value: '50K+', label: 'Documents/Mo', detail: 'Multi-format PDF/DOCX/CSV' },
        { value: '+$500K', label: 'ARR Impact', detail: 'New lead partner revenue' }
      ],
      theme: 'cyan'
    },
    {
      id: 'ai-modernization',
      category: 'cloud',
      categoryLabel: 'ENTERPRISE MODERNIZATION · AGENTIC CI/CD',
      title: 'Enterprise AI & Modernization Initiative',
      tagline: 'Architected .NET 8 microservices, Semantic Kernel document classification, and agentic self-healing CI/CD.',
      type: 'Enterprise Modernization',
      scale: '10K+ Docs/Day · 86% Faster Releases · $120K Tech Debt Saved',
      technologies: ['.NET 8', 'Semantic Kernel', 'Azure OpenAI', 'pgvector', 'Cursor IDE', 'GitHub Actions', 'Docker'],
      problem: 'Legacy monolithic architecture suffered from severe cold-start latency (8.2s), manual 2.5-hour deployment procedures with frequent rollbacks, and manual document triage.',
      architecture: 'Modernized into isolated .NET 8 microservices, augmented by a Semantic Kernel document classification RAG engine and an autonomous CI/CD verification agent.',
      solution: [
        'Decomposed core legacy monolith into lightweight .NET 8 containerized services, slashing startup time by 83% (8.2s → 1.4s).',
        'Built an agentic CI/CD workflow in GitHub Actions that autonomously runs deployment health checks, automated canary tests, and self-healing rollbacks, cutting deployment time from 2.5h to 18 min.',
        'Engineered an enterprise document classification pipeline using Semantic Kernel + pgvector, achieving 92% retrieval accuracy on 10K+ daily files (vs 64% keyword search baseline).',
        'Introduced Cursor IDE AI-assisted code review patterns and mentored 3 junior developers, achieving a 40% team productivity improvement.'
      ],
      metrics: [
        { value: '1.4s', label: 'Cold Startup', detail: '83% improvement (8.2s → 1.4s)' },
        { value: '18 Min', label: 'Release Time', detail: '86% faster (2.5h → 18m)' },
        { value: '92%', label: 'RAG Accuracy', detail: 'vs 64% keyword baseline' },
        { value: '$120K', label: 'Tech Debt Saved', detail: 'Across 3-year roadmap' }
      ],
      theme: 'emerald'
    }
  ];

  get filteredProjects(): DetailedProject[] {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedFilter);
  }

  setFilter(filterId: string): void {
    this.selectedFilter = filterId;
  }

  ngOnInit(): void {}
}
