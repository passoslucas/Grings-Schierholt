const $display = document.querySelector(".sidebar");
const $wrapper = document.querySelector("#wrapper");
const $sidebar = document.querySelector(".sidebar");

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

//side bar
const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");

const showSidebar = () => {
  $display.style.display = "flex";
  $wrapper.style.filter = "blur(5px)";
  console.log("Menu aberto");
};

const hideSidebar = () => {
  $sidebar.style.display = "none";
  $wrapper.style.filter = "none";
  console.log("Menu fechado");
};

menuButton.addEventListener("click", showSidebar);
closeButton.addEventListener("click", hideSidebar);

// function that will send variables from services array to the cards and modal html in index.html
function sendCardsInfo() {
  let i = 1;
  do {
    let idName = "#service-" + i;
    let service = document.querySelector(idName);

    //modal
    let modal = service.querySelector("#modal");
    let openBtn = service.querySelector(".openModal");
    let closeBtn = service.querySelector(".closeModal");

    const openModal = () => {
      modal.showModal();
      console.log("Modal aberto");
    };

    const closeModal = () => {
      modal.close();
      console.log("Modal fechado");
    };

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    //cards
    let serviceName = service.querySelector(".service-name");
    let serviceImage = service.querySelector(".service-image");
    let servicePreview = service.querySelector(".service-preview");
    let modalServiceName = service.querySelector(".modal-service-name");
    let modalServiceText = service.querySelector(".modal-service-text");

    serviceName.textContent = services[i - 1].name;
    serviceImage.src = services[i - 1].imageSrc;
    servicePreview.textContent = services[i - 1].preview;
    modalServiceName.textContent = services[i - 1].name;
    modalServiceText.textContent = services[i - 1].text;

    i++;
  } while (i <= services.length);
}

function getOptionsToContactField() {}

function onClickLink() {}

sendCardsInfo();
