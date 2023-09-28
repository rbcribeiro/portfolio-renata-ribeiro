import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  experiences = [
    {
      function: '💛 Bootcamp Desenvolvimento Web 💛',
      company: '💛 Laboratoria Brasil 💛',
      description:`Eu cursei o bootcamp da Laboratoria em desenvolvimento web e foi uma experiência incrível.
      Durante o programa, aprendi uma variedade de habilidades essenciais para a área, incluindo HTML, CSS,
      JavaScript e muito mais. O bootcamp foi intensivo e prático, o que me ajudou a adquirir conhecimento de
      forma rápida e eficaz.
      O que torna o bootcamp da Laboratoria ainda mais valioso é o seu compromisso com a diversidade e a
      inclusão. Eles se esforçam para criar um ambiente de aprendizado inclusivo, incentivando mulheres a
      ingressarem na indústria de tecnologia. Isso não apenas proporciona oportunidades para as alunas, mas
      também contribui para fechar a lacuna de gênero na área de tecnologia.
      No geral, minha experiência com o bootcamp da Laboratoria foi muito positiva e preparou-me bem para uma
      carreira no desenvolvimento web. Recomendo a todas que desejam ingressar nesse campo e estão em busca
      de uma educação sólida e apoio para alcançar o sucesso.
      `,
    },
    {
      function: `🚀🚀 TRANSIÇÃO DE CARREIRA 🚀🚀`,
      description: `Em 2022 descobri meu dom e amor por desenvolvimento de software e iniciei minha nova jornada,
                  com muita dedicação e a aprender e absorver todo conhecimento possível`
      },
    {
      function: 'Monitora Educacional Especializada',
      company: 'Prefeitura Municipal de Ouro Preto/MG',
      description: `Suporte a aluno com necessidades especiais na execução das atividades pedagógicas,
                  assegurando sua participação; auxílio em atividades da vida autônoma e no convívio social; no uso
                  de equipamentos, recursos educacionais para a acessibilidade; auxílio em suas comunicações interpessoais
                  e administração de medicamentos, segundo prescrição médica.`,
    },

  {
    function: 'Estágio em Administração',
    company: 'Instituto Federal de Educação, Ciência e ' +
             'Tecnologia de Minas Gerais - Itabirito/MG',
    description: `Conferência de documentos; auxiliar no atendimento telefônico prestando informações sobre a instituição;
                   auxilio no planejamento orçamentário com acompanhamento das receitas e despesas previstas;
                   auxiliar nos serviços administrativos em geral. Suporte em pesquisa de preços e acompanhamento das requisições de compras;
                   apoio na gestão de patrimônio e controle de almoxarifado.`,
  },
    {
      function: 'Auxiliar de Cartório',
      company: 'Cartório Registro Civil das Pessoas Naturais de Itabirito Mg',
      description: `Registros de nascimentos, casamentos e óbitos;
                Entrada em processos de casamentos;
                Atendimento aos clientes, entre outros`,
    },
  ];
  constructor() { }
  getExperiences() {
    return this.experiences;
  }
}
