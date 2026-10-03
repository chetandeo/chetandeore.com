import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SeoData, SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chetandeo.in';
  storedTheme: string = 'light';
  hamMenuClass: boolean = false;  currentYear: number = new Date().getFullYear();

  constructor(
    private readonly router: Router,
    private readonly seoService: SeoService
  ) {}

hamMenuOpen = false;
  setHamMenuClass(): void { this.hamMenuOpen = false; }
  toggleHamMenu(): void { this.hamMenuOpen = !this.hamMenuOpen; }

}
