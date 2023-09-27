import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      nome: 'Trivia',
      projeto: 'Você Sabia?',
      mesAno: 'Março/23',
      descricao: 'O objetivo principal foi criar uma interface interativa e envolvente para os usuários, permitindo que eles testem seus conhecimentos em diferentes áreas.',
      habilidades: ['HTML', 'CSS', 'JavaScript'],
      linkProjeto: 'https://rbcribeiro.github.io/SAP010-quiz/',
      linkGithub: 'https://github.com/rbcribeiro/SAP010-quiz',
      fotoProjeto: 'projeto1.jpg'
    },
    {
      nome: 'Card Validation',
      projeto: 'JRSports',
      mesAno: 'Abril/23',
      descricao: 'Descrição do Projeto 2',
      habilidades: ['HTML', 'CSS', 'JavaScript'],
      linkProjeto: 'https://rbcribeiro.github.io/SAP010-card-validation/',
      linkGithub: 'https://github.com/rbcribeiro/SAP010-card-validation',
      fotoProjeto: 'projeto2.jpg'
    },
    {
      nome: 'Data Lovers',
      projeto: 'Game Of Thrones',
      mesAno: 'Maio/23',
      descricao: 'O projeto tem como tema principal "Game of Thrones", uma popular série de televisão baseada nos livros de George R.R. Martin. O objetivo do projeto é desenvolver uma aplicação web relacionada ao universo de Game of Thrones, utilizando técnicas de programação para criar uma experiência interativa e envolvente para os fãs da série. Durante o desenvolvimento do projeto, serão aplicados conceitos de filtragem, ordenação alfabética e seletores HTML, JavaScript e CSS.',
      habilidades: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      linkProjeto: 'https://rbcribeiro.github.io/SAP010-data-lovers/',
      linkGithub: 'https://github.com/rbcribeiro/SAP010-data-lovers',
      fotoProjeto: 'projeto2.jpg'
    },
    {
      nome: 'Social Network',
      projeto: 'ExplorAí!',
      mesAno: 'Junho/23',
      descricao: 'Descrição do Projeto 2',
      habilidades: ['Angular', 'TypeScript', 'Firebase'],
      linkProjeto: 'https://rbcribeiro.github.io/SAP010-social-network/',
      linkGithub: 'https://github.com/rbcribeiro/SAP010-social-network',
      fotoProjeto: 'projeto2.jpg'
    }, {
      nome: 'Markdown Links',
      projeto: 'Validador de Links',
      mesAno: 'Julho/23',
      descricao: 'O objetivo deste projeto é facilitar a extração de links contidos em arquivos Markdown e fornecer informações adicionais, como a validação da disponibilidade dos links. É uma ferramenta útil para quem trabalha com projetos em Markdown e precisa verificar a integridade dos links',
      habilidades: ['JavaScript'],
      linkProjeto: '',
      linkGithub: 'https://github.com/rbcribeiro/SAP010-md-links',
      fotoProjeto: 'projeto1.jpg'
    }, {
      nome: 'Burger Queem API',
      projeto: 'Flash Burger API',
      mesAno: 'Agosto/23',
      descricao: 'Descrição do Projeto 2',
      habilidades: ['Angular', 'TypeScript', 'CSS'],
      linkProjeto: '',
      linkGithub: 'https://github.com/rbcribeiro/flash-burger-api',
      fotoProjeto: 'projeto2.jpg'
    }, {
      nome: 'Burger Queem Client',
      projeto: 'Flash Burger',
      mesAno: 'Setembro/23',
      descricao: 'Descrição do Projeto 1',
      habilidades: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
      linkProjeto: 'https://vercel.com/rbcribeiro/flash-burger',
      linkGithub: 'https://github.com/rbcribeiro/flash-burger',
      fotoProjeto: 'projeto1.jpg'
    }



  ];

  expandedProject: number | null = null;

  toggleProjectDetails(index: number) {
    if (this.expandedProject === index) {
      this.expandedProject = null;
    } else {
      this.expandedProject = index;
    }
  }
}
