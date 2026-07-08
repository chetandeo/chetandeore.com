import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {
      seo: {
        title: 'Chetan Deore | Senior Software Engineer | .NET 8, AI-Augmented Development',
        description: 'Chetan Deore is a Senior Software Engineer in Pune specializing in .NET 8, Angular, Azure, Amazon Q, GitHub Copilot, Cursor, Claude, agentic workflows, PostgreSQL, pgvector, and cloud-ready enterprise applications.',
        keywords: 'Chetan Deore, Chetan Deore portfolio, Senior Software Engineer Pune, .NET 8 developer, AI augmented development, Amazon Q developer, GitHub Copilot, Cursor IDE, Claude, agentic workflows, Angular developer, C# developer',
        url: '/'
      }
    }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {
      seo: {
        title: 'Portfolio | Chetan Deore | .NET 8, AI Tools, Agentic Workflows',
        description: 'Explore Chetan Deore portfolio projects and experience across .NET 8, Amazon Q, GitHub Copilot, Cursor, Claude, agentic CI/CD, Angular, PostgreSQL, MSSQL, pgvector, Docker, and enterprise APIs.',
        keywords: 'Chetan Deore projects, .NET 8 portfolio, AI augmented development portfolio, Amazon Q projects, GitHub Copilot, Cursor IDE, Claude, agentic workflows, Angular portfolio, PostgreSQL optimization, pgvector',
        url: '/portfolio'
      }
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      seo: {
        title: 'Blog | Chetan Deore | .NET, Angular, AI-Augmented Engineering',
        description: 'Read Chetan Deore blog posts about .NET, Angular, AI-assisted development, agentic workflows, cloud delivery, CI/CD, and practical engineering lessons.',
        keywords: 'Chetan Deore blog, .NET blog, Angular blog, AI-assisted development, agentic workflows, CI/CD, software engineering articles',
        url: '/blog'
      }
    }
  },
  {
    path: 'blog/:slug',
    component: BlogPostComponent,
    data: {
      seo: {
        title: 'Blog Post | Chetan Deore',
        description: 'Read software engineering notes from Chetan Deore.',
        keywords: 'Chetan Deore blog, software engineering',
        url: '/blog'
      }
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      seo: {
        title: 'Contact Chetan Deore | Senior .NET and AI-Augmented Engineer',
        description: 'Contact Chetan Deore for senior software engineering roles, .NET full-stack development, AI-augmented delivery workflows, agentic CI/CD automation, Angular applications, and enterprise software modernization.',
        keywords: 'Contact Chetan Deore, hire .NET developer Pune, AI augmented engineer, senior software engineer contact, agentic workflows, GitHub Copilot developer, Angular developer Pune',
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
