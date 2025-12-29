import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit{

    storedTheme : string = 'light'
    hamMenuClass : boolean = false;

    ngOnInit(): void {       
       let theme = localStorage.getItem('user-theme')
       if(theme)
       this.storedTheme = theme;
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
 


}