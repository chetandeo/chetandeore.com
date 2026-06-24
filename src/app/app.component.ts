import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SeoData, SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'chetandeo.in';
  storedTheme: string = 'light';
  hamMenuClass: boolean = false;  currentYear: number = new Date().getFullYear();

  constructor(
    private readonly router: Router,
    private readonly seoService: SeoService
  ) {}

  ngOnInit(): void {
    let theme = localStorage.getItem('user-theme');
    if (theme)
      this.storedTheme = theme;

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.router.routerState.root),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }

        return route.snapshot.data['seo'] as SeoData;
      })
    ).subscribe(seo => {
      if (seo) {
        this.seoService.update(seo);
      }
    });
  }

  setTheme() {
    let theme;
    this.storedTheme == 'light' ? theme = 'dark' : theme = 'light';
    localStorage.setItem('user-theme', theme);
    this.storedTheme = theme;
  }

  setHamMenuClass() {
    this.hamMenuClass = !this.hamMenuClass;
  }
  ngAfterViewInit(): void {
    this.consoleText(['Hello World.', 'Chetan Deore', 'Made with Love.'], 'text',['black','#64bcf4','lightblue']);
  }

  consoleText(words:any, id:string, colors:any) {
      if (colors === undefined) colors = ['#fff'];
      var visible = true;
      var con = document.getElementById('console');
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id)
      target?.setAttribute('style', 'color:' + colors[0])
      window.setInterval(function() {
      
          if (letterCount === 0 && waiting === false) {
          waiting = true;
          if(target)
          target.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(function() {
              var usedColor = colors.shift();
              colors.push(usedColor);
              var usedWord = words.shift();
              words.push(usedWord);
              x = 1;
              target?.setAttribute('style', 'color:' + colors[0])
              letterCount += x;
              waiting = false;
          }, 1000)
          } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function() {
              x = -1;
              letterCount += x;
              waiting = false;
          }, 1000)
          } else if (waiting === false) {
              if(target)
          target.innerHTML = words[0].substring(0, letterCount)
          letterCount += x;
          }
      }, 120)
      window.setInterval(function() {
          if (visible === true) {
              if(con)
          con.className = 'console-underscore hidden'
          visible = false;
      
          } else {
              if(con)
          con.className = 'console-underscore'
      
          visible = true;
          }
      }, 400)
  }
}
