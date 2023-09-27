import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      function: 'Bootcamp Desenvolvimento Web',
      company: 'Laboratoria Brasil',
      description: 'Descrição do Bootcamp Laboratoria.',
    },
    {
      function: 'Monitora Educacional Especializada',
      company: 'Prefeitura Municipal de Ouro Preto/MG',
      description: 'Descrição da Prefeitura de OP.',
    },
    {
      function: 'Estágio em Administração',
      company: 'Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais - Itabirito/MG',
      description: 'Descrição do Estágio Admin IFMG.',
    },
    {
      function: 'Atendente de Cartório',
      company: 'Cartório Registro Civil das Pessoas Naturais de Itabirito Mg',
      description: 'Descrição da Prefeitura de OP.',
    },
  ];
  expanded: number | null = null;

  toggleExperienceDetails(index: number) {
    if (this.expanded === index) {
      this.expanded = null;
    } else {
      this.expanded = index;
    }
  }
}
