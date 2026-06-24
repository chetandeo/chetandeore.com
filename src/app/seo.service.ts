import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly siteUrl = 'https://chetandeo.in';
  private readonly defaultImage = `${this.siteUrl}/assets/headshot.png`;

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  update(seo: SeoData): void {
    const image = seo.image || this.defaultImage;
    const canonicalUrl = `${this.siteUrl}${seo.url}`;

    this.title.setTitle(seo.title);
    this.updateTag('name', 'description', seo.description);
    this.updateTag('name', 'keywords', seo.keywords);
    this.updateTag('name', 'author', 'Chetan Deore');
    this.updateTag('name', 'robots', 'index, follow');

    this.updateTag('property', 'og:type', 'website');
    this.updateTag('property', 'og:site_name', 'Chetan Deore Portfolio');
    this.updateTag('property', 'og:title', seo.title);
    this.updateTag('property', 'og:description', seo.description);
    this.updateTag('property', 'og:url', canonicalUrl);
    this.updateTag('property', 'og:image', image);

    this.updateTag('name', 'twitter:card', 'summary_large_image');
    this.updateTag('name', 'twitter:title', seo.title);
    this.updateTag('name', 'twitter:description', seo.description);
    this.updateTag('name', 'twitter:image', image);

    this.setCanonicalUrl(canonicalUrl);
    this.setStructuredData(canonicalUrl);
  }

  private updateTag(attribute: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [attribute]: key, content });
  }

  private setCanonicalUrl(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private setStructuredData(currentUrl: string): void {
    const id = 'person-structured-data';
    const existingScript = this.document.getElementById(id);

    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': `${this.siteUrl}/#chetan-deore`,
          name: 'Chetan Deore',
          url: this.siteUrl,
          image: this.defaultImage,
          jobTitle: 'Senior Software Engineer',
          email: 'mailto:cdeore20@gmail.com',
          telephone: '+91-9503002981',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Pune',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN'
          },
          alumniOf: [
            {
              '@type': 'CollegeOrUniversity',
              name: 'Sandip University'
            },
            {
              '@type': 'CollegeOrUniversity',
              name: 'Pratap College'
            }
          ],
          knowsAbout: [
            '.NET 8',
            'C#',
            'ASP.NET Core Web API',
            'Angular',
            'TypeScript',
            'Azure OpenAI',
            'Semantic Kernel',
            'Retrieval-Augmented Generation',
            'RAG Architecture',
            'Azure AI Search',
            'PostgreSQL',
            'MSSQL',
            'Docker',
            'GitHub Actions'
          ],
          sameAs: [
            'https://www.linkedin.com/in/cdeore/',
            'https://github.com/chetandeo',
            'https://twitter.com/cdeore'
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'LTM Limited'
          }
        },
        {
          '@type': 'WebSite',
          '@id': `${this.siteUrl}/#website`,
          name: 'Chetan Deore Portfolio',
          url: this.siteUrl,
          description: 'Portfolio of Chetan Deore, Senior Software Engineer specializing in .NET, Azure, Generative AI, RAG systems, and Angular.',
          inLanguage: 'en-IN',
          publisher: {
            '@id': `${this.siteUrl}/#chetan-deore`
          }
        },
        {
          '@type': 'WebPage',
          '@id': `${currentUrl}#webpage`,
          url: currentUrl,
          name: this.title.getTitle(),
          isPartOf: {
            '@id': `${this.siteUrl}/#website`
          },
          about: {
            '@id': `${this.siteUrl}/#chetan-deore`
          },
          inLanguage: 'en-IN'
        }
      ]
    };

    const script = this.document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    this.document.head.appendChild(script);
  }
}
