import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tabTextMapping: { [key: string]: string } = {
    'experiencias': 'Experiencias',
    'inicio': 'Início'
  };

  tabs: string[] = ['Início', 'Sobre', 'Habilidades', 'Experiencias', 'Projetos', 'PDF'];

  constructor(private router: Router) {}

  toggleTab(tab: string) {
    this.router.navigate([tab.toLowerCase()]);
  }

  isActive(tab: string): boolean {
    return this.router.isActive(tab.toLowerCase(), true);
  }

  getTabText(tab: string): string {
    if (this.tabTextMapping[tab]) {
      return this.tabTextMapping[tab];
    } else {
      return tab; 
    }
  }
}
