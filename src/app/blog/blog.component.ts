import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './blog-post.model';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts$!: Observable<BlogPost[]>;

  constructor(private readonly blogService: BlogService) {}

  ngOnInit(): void {
    this.posts$ = this.blogService.getPosts();
  }

  trackBySlug(_: number, post: BlogPost): string {
    return post.slug;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
