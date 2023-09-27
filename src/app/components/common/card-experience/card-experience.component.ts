import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.css']
})
export class CardExperienceComponent {
  @Input() function?: string;
  @Input() company?: string;
  @Input() description?: string;
  @Input() expanded: boolean = false;


  toggleExperienceDetails() {
    this.expanded = !this.expanded;
  }
}
