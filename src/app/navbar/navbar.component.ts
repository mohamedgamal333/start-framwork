import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scroll:boolean=false; // make bing in html file
  // make a function to check the scroll using HostListener method on the window
  @HostListener('window:scroll')onScroll()
    {
      if(scrollY>0){
        this.scroll=true;
      }
      else{
this.scroll=false;
      }
console.log('scrolling');

    }

}
