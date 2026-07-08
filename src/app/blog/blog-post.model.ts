export interface BlogContentBlock {
  type: 'paragraph' | 'heading' | 'list';
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readingMinutes: number;
  tags: string[];
  featured: boolean;
  coverImage?: string;
  content: BlogContentBlock[];
}
