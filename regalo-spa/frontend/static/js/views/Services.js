import AbstractView from "./AbstractView.js";

const services = [
  {
    name: "Salário Maternidade",
    imageSrc: "/static/images/services/salario-maternidade.jpg",
    preview:
      "É destinado a mães que estavam desempregadas na data do seu parto, e que possuem filhos até 5 anos de idade...",
    text: "O benefício salário maternidade, é destinado a mães que estavam desempregadas na data do seu parto, e que possuem filhos até 5 anos de idade. Têm direito aquelas mulheres em que o nascimento ou adoção do filho ocorrer em um período que varia de 12 a 36 meses após a demissão ou a partir da data da última contribuição individual, pelo carnê, ou como MEI. O auxílio-maternidade é garantido em casos de parto (antecipado ou não), de aborto não-criminoso e de adoção. Mães de bebês natimortos também tem direito ao benefício. A Regalo pode te ajudar, entre em contato conosco.",
    pagePath: "/services/10",
  },
  {
    name: "Revisão da Vida Toda",
    imageSrc: "/static/images/services/revisao-vida-toda.jpg",
    preview:
      "É uma oportunidade de recálculo do valor do benefício de aposentadoria pago pelo INSS no Brasil. Esse reajuste permite...",
    text: "A Revisão da Vida Toda é uma oportunidade de recálculo do valor do benefício de aposentadoria pago pelo INSS no Brasil. Esse reajuste permite que o beneficiário solicite a inclusão de todas as contribuições previdenciárias realizadas durante seu período laborativo com carteira assinada.",
    pagePath: "/services/9",
  },
  {
    name: "Aposentadoria",
    imageSrc: "/static/images/services/aposentadoria.jpg",
    preview:
      "É um benefício para aquelas pessoas que já cumpriram o tempo contribuição, que completou a idade urbana ou rural...",
    text: "A aposentadoria é um benefício para aquelas pessoas que já cumpriram o tempo contribuição, que completou a idade urbana ou rural, ou que tenha alguma deficiência. Procure a Regalo para o seu planejamento previdenciário!",
    pagePath: "/services/1",
  },
  {
    name: "Revisão de Aposentadoria ou Benefício",
    imageSrc: "/static/images/services/revisao-aposentadoria.jpg",
    preview:
      "É uma forma de pedir uma nova análise do benefício que recebe. É indicado nos casos, por exemplo, de: ajustes do valor...",
    text: "É uma forma de pedir uma nova análise do benefício que recebe. É indicado nos casos, por exemplo, de: ajustes do valor do benefício ou do tempo de contribuição considerado; inclusão/alteração/exclusão de dependentes; apresentação de novos documentos.",
    pagePath: "/services/8",
  },
  {
    name: "Auxilio Acidente",
    imageSrc: "/static/images/services/auxilio-acidente.jpg",
    preview:
      "É um benefício previdenciário aos segurados que sofreram algum tipo de acidente que resulte em sequelas ou, então...",
    text: "É um benefício previdenciário aos segurados que sofreram algum tipo de acidente que resulte em sequelas ou, então, que diminua a capacidade laborativa do trabalhador. As sequelas devem ser permanentes e, também, deverá haver prejuízo na vida profissional do trabalhador. A partir das sequelas, a capacidade laboral do segurado somente será reduzida. Na prática, ele ainda conseguirá trabalhar, mesmo com a redução de capacidade. Se passou por essa situação, procure a Regalo Assessoria.",
    pagePath: "/services/2",
  },
  {
    name: "Auxilio Doença",
    imageSrc: "/static/images/services/auxilio-doenca.jpg",
    preview:
      "É um benefício para a pessoa que comprove, por meio de perícia médica, por mais de 15 dias seguidos, estar incapaz...",
    text: "É um benefício para a pessoa que comprove, por meio de perícia médica, por mais de 15 dias seguidos, estar incapaz para o trabalho ou atividade habitual de forma temporária.",
    pagePath: "/services/3",
  },
  {
    name: "Auxilio Idoso",
    imageSrc: "/static/images/services/auxilio-idoso.jpg",
    preview:
      "É um benefício de um salário mínimo por mês para a pessoa idosa de baixa renda. Para ter direito ao benefício não é necessário...",
    text: "É um benefício de um salário mínimo por mês para a pessoa idosa de baixa renda. Para ter direito ao benefício não é necessário ter contribuído para o INSS. No entanto, não dá direito ao 13º salário e não deixa pensão por morte.",
    pagePath: "/services/4",
  },
  {
    name: "LOAS",
    imageSrc: "/static/images/services/loas.jpg",
    preview:
      "É um benefício de um salário mínimo por mês para a pessoa com deficiência e que comprove ser baixa renda. Para ter direito...",
    text: "É um benefício de um salário mínimo por mês para a pessoa com deficiência e que comprove ser baixa renda. Para ter direito a esse benefício não é necessário ter contribuído para o INSS. No entanto, não dá direito ao 13º salário e não deixa pensão por morte.",
    pagePath: "/services/5",
  },
  {
    name: "Pensão por Morte",
    imageSrc: "/static/images/services/pensao-morte.jpg",
    preview:
      "É um benefício para dependentes da pessoa falecida que trabalhava e que, na data do óbito: possuía a qualidade de segurado... ",
    text: "É um benefício para dependentes da pessoa falecida que trabalhava e que, na data do óbito: possuía a qualidade de segurado; recebia benefício previdenciário ou,já tinha direito a algum benefício antes de falecer.",
    pagePath: "/services/6",
  },
  {
    name: "Período Rural",
    imageSrc: "/static/images/services/periodo-rural.jpg",
    preview:
      "É um benefício para a pessoa que comprove: o mínimo de 180 meses trabalhados na atividade rural; e, a idade mínima de...",
    text: "É um benefício para a pessoa que comprove: o mínimo de 180 meses trabalhados na atividade rural; e, a idade mínima de: 60 anos - Homem, 55 anos - Mulher. Esse benefício também atende o pescador artesanal e o indígena. Os empregados, contribuintes individuais e trabalhadores avulsos rurais também têm direito à aposentadoria com diminuição de idade, desde que tenham trabalhado todo o período na condição de trabalhador rural.",
    pagePath: "/services/7",
  },
];

const getContainerItemsHtml = (param) => {
  let htmlString = ``; //String que retorna o HTML de todos os itens
  let itemHtml = ``; //String que retorna o HTML de apenas um item

  for (let index = 0; index < param.length; index++) {
    itemHtml = getItemHtml(param[index]);
    htmlString = htmlString.concat(itemHtml);
    itemHtml = ``;
  }
  return htmlString;
};

// let modal = document.querySelector("#modal");
// let openModalBtn = document.querySelector(".openBtn");
// let closeModalBtn = document.querySelector(".closeBtn");

// openModalBtn.addEventListener("click", () => {
//   modal.show();
// });

const getItemHtml = (param) => {
  // console.log(modal, openModalBtn, closeModalBtn);
  return `
    <div class="card">
      <img src=${param.imageSrc} alt="image" />
      <div class="card-content">
        <h3>${param.name}</h3>
        <p>${param.preview}</p>
        <button class="openBtn">Saiba mais</button>
      </div>
    </div>
    <dialog class="modal" id="modal">
        <div class="modal-heading">
          <h2>${param.name}</h2>
          <a href="#" class="closeBtn">Voltar</a>
        </div>
        <p>${param.text}</p>
        <h3>Ficou interessado?
        <div class="popup-buttons">
          <a href="#" class="contact-btn">Fale Conosco</a>
          <a href="#" class="wpp-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="white" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            <span> | WhatsApp</span>
          </a>
        </div>
    </diolog>
  `;
};

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Nossos Serviços | Regalo Assessoria");
  }

  async getHtml() {
    try {
      return `
        <div class="app-container">
          <h1 class="heading">Nossos Serviços</h1>
          <div class="box-container">
            ${getContainerItemsHtml(services)}
          </div>
        </div>
      `;
    } finally {
      let modal = document.querySelector("#modal");
      let openModalBtn = document.querySelector(".openBtn");
      let closeModalBtn = document.querySelector(".closeBtn");
    }
  }
}
