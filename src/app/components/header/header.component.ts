import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  tabs: string[] = ['Home', 'About', 'Skills', 'Education', 'Experience', 'Projects', 'PDF'];

  constructor(private router: Router) {}

  toggleTab(tab: string) {
    this.router.navigate([tab.toLowerCase()]); 
  }

  isActive(tab: string): boolean {
    return this.router.isActive(tab.toLowerCase(), true); 
  }
}
