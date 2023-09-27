import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    { title: 'Bootcamp Laboratoria', description: 'Descrição do Bootcamp Laboratoria.', showDetails: false },
    { title: 'Prefeitura de OP', description: 'Descrição da Prefeitura de OP.', showDetails: false },
    { title: 'Estágio Admin IFMG', description: 'Descrição do Estágio Admin IFMG.', showDetails: false },
    { title: 'Prefeitura de OP', description: 'Descrição da Prefeitura de OP.', showDetails: false },
    { title: 'Delphi', description: 'Descrição do Delphi.', showDetails: false }
  ];
}
