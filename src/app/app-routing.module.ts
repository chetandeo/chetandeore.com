import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {
      seo: {
        title: 'Chetan Deore | Senior Software Engineer | .NET, Azure OpenAI, RAG',
        description: 'Chetan Deore is a Senior Software Engineer in Pune specializing in .NET 8, Angular, Azure OpenAI, Semantic Kernel, RAG systems, Azure AI Search, PostgreSQL, and cloud-ready enterprise applications.',
        keywords: 'Chetan Deore, Chetan Deore portfolio, Senior Software Engineer Pune, .NET 8 developer, Azure OpenAI engineer, RAG specialist, Semantic Kernel developer, Angular developer, C# developer',
        url: '/'
      }
    }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {
      seo: {
        title: 'Portfolio | Chetan Deore | .NET 8, Generative AI, RAG Projects',
        description: 'Explore Chetan Deore portfolio projects and experience across .NET 8, Azure OpenAI, Semantic Kernel, RAG architecture, Azure AI Search, Angular, PostgreSQL, MSSQL, Docker, and enterprise APIs.',
        keywords: 'Chetan Deore projects, .NET 8 portfolio, Generative AI portfolio, RAG projects, Azure OpenAI projects, Semantic Kernel projects, Angular portfolio, PostgreSQL optimization',
        url: '/portfolio'
      }
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      seo: {
        title: 'Contact Chetan Deore | Senior .NET and Generative AI Engineer',
        description: 'Contact Chetan Deore for senior software engineering roles, .NET full-stack development, Azure OpenAI integrations, RAG implementation, Angular applications, and enterprise software modernization.',
        keywords: 'Contact Chetan Deore, hire .NET developer Pune, hire Azure OpenAI engineer, senior software engineer contact, RAG implementation consultant, Angular developer Pune',
        url: '/contact'
      }
    }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
