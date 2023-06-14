import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit, AfterViewInit{

    storedTheme : string = 'light'
    hamMenuClass : boolean = false;

    ngOnInit(): void {       
       let theme = localStorage.getItem('user-theme')
       if(theme)
       this.storedTheme = theme;
    }
    ngAfterViewInit(): void {
        this.consoleText(['Hello World.', 'Chetan Deore', 'Made with Love.'], 'text',['black','#64bcf4','lightblue']);
    }

    setTheme(){
        let theme;
        this.storedTheme == 'light' ? theme = 'dark' : theme = 'light';
        localStorage.setItem('user-theme', theme);
        this.storedTheme = theme;
    }
    setHamMenuClass(){
       this.hamMenuClass=!this.hamMenuClass;
    }

    // function([string1, string2],target id,[color1,color2])    
 

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