import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { BlogPost } from './blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly postsUrl = 'assets/blog-posts.json';
  private readonly posts$ = this.http.get<BlogPost[]>(this.postsUrl).pipe(
    map(posts => posts
      .filter(post => post.slug && post.title)
      .sort((first, second) => new Date(second.publishedAt).getTime() - new Date(first.publishedAt).getTime())
    ),
    shareReplay(1)
  );

  constructor(private readonly http: HttpClient) {}

  getPosts(): Observable<BlogPost[]> {
    return this.posts$;
  }

  getPost(slug: string): Observable<BlogPost | undefined> {
    return this.posts$.pipe(
      map(posts => posts.find(post => post.slug === slug))
    );
  }
}
