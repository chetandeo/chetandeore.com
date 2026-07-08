import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { SeoService } from '../seo.service';
import { BlogPost } from './blog-post.model';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  post$!: Observable<BlogPost | undefined>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly blogService: BlogService,
    private readonly seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      map(params => params.get('slug') || ''),
      switchMap(slug => this.blogService.getPost(slug)),
      tap(post => {
        if (!post) {
          this.router.navigateByUrl('/blog');
          return;
        }

        this.seoService.update({
          title: `${post.title} | Chetan Deore Blog`,
          description: post.excerpt,
          keywords: post.tags.join(', '),
          url: `/blog/${post.slug}`,
          image: post.coverImage
        });
      })
    );
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
