import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  imgQuiz = '../../../assets/img-quiz.JPG';
  imgCardValidation = '../../../assets/img-card-validation.JPG';
  imgDataLovers = '../../../assets/img-data-lovers.JPG';
  imgSocialNetwork = '../../../assets/img-social-network.JPG';
  imgMdlinks = '../../../assets/img-mdlinks.png';
  imgBurgerQueen = '../../../assets/img-burger-queen.JPG';
  imgNlwSpacetime = '../../../assets/img-nlw-spacetime.JPG';
  imgJurosCompostos = '../../../assets/nodejs.png';
  imgNodeJs = '../../../assets/img-juros-compostos.JPG';
  projects = [
    {
      nome: 'Trivia',
      projeto: 'Você Sabia?',
      mesAno: 'Março/23',
      descricao: `O objetivo principal foi criar uma interface interativa e envolvente para os usuários,
                  permitindo que eles testem seus conhecimentos em diferentes áreas.`,
      habilidades: ['HTML', 'CSS', 'JavaScript'],
      linkProjeto: 'https://rbcribeiro.github.io/SAP010-quiz/',
      linkGithub: 'https://github.com/rbcribeiro/SAP010-quiz',
      fotoProjeto: this.imgQuiz
    },
    {
      nome: 'Card Validation',
      projeto: 'JRSports',
      mesAno: 'Abril/23',
      descricao: `Projeto oferece uma página de validação real de cartão de crédito para a loja JRSports,
                  onde os usuários podem inserir os 16 dígitos de um cartão para verificar se ele é válido,
                  o algoritmo de Luhn é utilizado para validar o cartão.`,
      habilidades: ['HTML', 'CSS', 'JavaScript'],
      linkProjeto: 'https://rbcribeiro.github.io/SAP010-card-validation/',
      linkGithub: 'https://github.com/rbcribeiro/SAP010-card-validation',
      fotoProjeto: this.imgCardValidation
    },
    {
      nome: 'Data Lovers',
      projeto: 'Game Of Thrones',
      mesAno: 'Maio/23',
      descricao: `O projeto tem como tema principal "Game of Thrones", uma popular série de televisão baseada
                  nos livros de George R.R. Martin. O objetivo do projeto é desenvolver uma aplicação web
                  relacionada ao universo de Game of Thrones, utilizando técnicas de programação para criar uma
                  experiência interativa e envolvente para os fãs da série. Durante o desenvolvimento do projeto,
                  serão aplicados conceitos de filtragem, ordenação alfabética e seletores HTML, JavaScript e CSS.`,
      habilidades: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      linkProjeto: 'https://rbcribeiro.github.io/SAP010-data-lovers/',
      linkGithub: 'https://github.com/rbcribeiro/SAP010-data-lovers',
      fotoProjeto: this.imgDataLovers
    },
    {
      nome: 'NLW Spacetime',
      projeto: 'Cápsula do Tempo',
      mesAno: 'Maio/23',
      descricao: `Cápsula do tempo proposto pela NLW Spacetime, um projeto muito interessando e foi de grande
                valor, principalment em CSS`,
      habilidades: ['HTML', 'CSS', 'JavaScript'],
      linkProjeto: 'https://rbcribeiro.github.io/nlw-spacetime/',
      linkGithub: 'https://github.com/rbcribeiro/nlw-spacetime',
      fotoProjeto: this.imgNlwSpacetime
    },
    {
      nome: 'Calculadora de Juros Compostos',
      projeto: 'Juros Compostos',
      mesAno: 'Maio/23',
      descricao: `Típica calculadora de juros que retorna o valor final e o valor dos juros durante determinado
                período`,
      habilidades: ['HTML', 'CSS', 'JavaScript'],
      linkProjeto: 'https://rbcribeiro.github.io/jurosCompostos/',
      linkGithub: 'https://github.com/rbcribeiro/jurosCompostos',
      fotoProjeto: this.imgJurosCompostos
    },
    {
      nome: 'Social Network',
      projeto: 'ExplorAí!',
      mesAno: 'Junho/23',
      descricao: `Desenvolvemos em trio uma rede social chamada ExplorAí, permitindo o usuário criar conta com
                email e senha, ou fazer login com google/facebook. O usuário pode fazer postagens sobre experiências pessoais,
                a aplicação permite interações como ‘like’, editar ou excluir postagens. Utilizamos recursos de segurança
                usando o Firebase e  implementamos testes unitários.`,
      habilidades: ['Angular', 'TypeScript', 'Firebase'],
      linkProjeto: 'https://rbcribeiro.github.io/SAP010-social-network/',
      linkGithub: 'https://github.com/rbcribeiro/SAP010-social-network',
      fotoProjeto: this.imgSocialNetwork
    }, {
      nome: 'Markdown Links',
      projeto: 'Validador de Links',
      mesAno: 'Julho/23',
      descricao: `O objetivo deste projeto é facilitar a extração de links contidos em arquivos Markdown e fornecer
                informações adicionais, como a validação da disponibilidade dos links. É uma ferramenta útil para
                quem trabalha com projetos em Markdown e precisa verificar a integridade dos links`,
      habilidades: ['JavaScript'],
      linkProjeto: 'https://github.com/rbcribeiro/SAP010-md-links',
      linkGithub: 'https://github.com/rbcribeiro/SAP010-md-links',
      fotoProjeto: this.imgMdlinks
    }, {
      nome: 'Burger Queem API - PostgreSQL',
      projeto: 'Flash Burger API',
      mesAno: 'Agosto/23',
      descricao: `Desenvolvemos em dupla uma API eficiente em Node.js e Express, para gestão completa de pedidos,
                produtos e funcionários de um restaurante, implementando operações CRUD (Create, Read, Update, Delete).
                Inclui autenticação com geração de tokens de acesso, otimizando processos de pedidos e atendimento. Essa API
                está hospedada no site Vercel, com o banco de dados PostgreSQL hospedado no site Supabase. Utilização de
                testes unitários e de ponta a ponta(e2e), garantindo a qualidade e a segurança do sistema.`,
      habilidades: ['Angular', 'TypeScript', 'CSS'],
      linkProjeto: 'https://github.com/rbcribeiro/flash-burger-api',
      linkGithub: 'https://github.com/rbcribeiro/flash-burger-api',
      fotoProjeto: this.imgJurosCompostos,
    }, {
      nome: 'Burger Queem Client',
      projeto: 'Flash Burger',
      mesAno: 'Setembro/23',
      descricao: `Em desenvolvimento - Aplicação web desenvolvida individualmente em Angular, nomeada FlashBurger e
                implantada no Vercel. Desenvolvi o protótipo no Figma, foi projetada para otimizar o processo de pedidos do
                restaurante. Utilizo minha API desenvolvida anteriormente para registrar pedidos, atualizar informações de
                produtos/funcionários e gerenciar as interações entre garçons/garçonetes e a cozinha. A aplicação é responsiva
                e pode ser usada em tablets, garantindo uma experiência de usuário fluida e eficiente.`,
      habilidades: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
      linkProjeto: 'https://vercel.com/rbcribeiro/flash-burger',
      linkGithub: 'https://github.com/rbcribeiro/flash-burger',
      fotoProjeto: this.imgBurgerQueen
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
