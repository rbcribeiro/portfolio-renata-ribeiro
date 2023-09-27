import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {
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
