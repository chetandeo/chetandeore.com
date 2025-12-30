import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  skills = [
    { name: 'C#', level: 85 },
    { name: 'ASP.NET MVC', level: 80 },
    { name: 'Angular', level: 75 },
    { name: 'SQL Server', level: 80 },
    { name: 'Web API', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'Bootstrap', level: 80 }
  ];

  experiences: Experience[] = [
    {
      company: 'LTI Mindtree Ltd',
      position: 'Senior Software Engineer',
      duration: '2025 - Present',
      description: 'Developing full-stack web applications using ASP.NET MVC and Angular. Working with SQL Server databases and building RESTful APIs.',
      technologies: ['C#', 'ASP.NET MVC', 'Angular', 'SQL Server', 'Web API']
    },
    {
      company: '12th Wonder LLC',
      position: 'Software Engineer',
      duration: '2022 - 2025',
      description: 'Developing full-stack web applications using ASP.NET MVC and Angular. Working with SQL Server databases and building RESTful APIs.',
      technologies: ['C#', 'ASP.NET MVC', 'Angular', 'SQL Server', 'Web API']
    }
    // Add more experiences here
  ];

  projects: Project[] = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive personal portfolio website built with Angular 14, featuring a landing page, portfolio section, and contact form.',
      technologies: ['Angular 14', 'TypeScript', 'SCSS', 'Material Design'],
      link: 'https://chetandeore.com'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard.',
      technologies: ['ASP.NET MVC', 'C#', 'SQL Server', 'Bootstrap', 'jQuery'],
      link: '#'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time updates and user authentication.',
      technologies: ['Angular', 'Web API', 'Entity Framework', 'SignalR'],
      link: '#'
    }
  ];

  certifications = [
    'Microsoft Certified: Azure Fundamentals',
    'ASP.NET Core Development',
    'Angular - The Complete Guide'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
