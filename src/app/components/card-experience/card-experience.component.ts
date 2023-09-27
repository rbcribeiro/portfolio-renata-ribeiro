import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.css']
})
export class CardExperienceComponent {
  @Input() projectName?: string;
  @Input() project?: string;
  @Input() projectDescription?: string;
  @Input() habilidades?: string;
  @Input() linkProjeto?: string;
  @Input() linkGithub?: string;
  @Input() fotoProjeto?: string;
  @Input() mesAno?: string;
  @Input() expanded: boolean = false;


  toggleProjectDetails() {
    this.expanded = !this.expanded;
  }
}
