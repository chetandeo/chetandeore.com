import { AfterViewInit, Component } from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent{
    hamMenuOpen = false;
  setHamMenuClass(): void { this.hamMenuOpen = false; }
  toggleHamMenu(): void { this.hamMenuOpen = !this.hamMenuOpen; }

}