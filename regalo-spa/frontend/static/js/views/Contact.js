import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Entre em Contato");
  }

  async getHtml() {
    return `
            <h1>Entre em Contato</h1>
            <p>Nos fale melhor sobre como podemos lhe ajudar!</p>
        `;
  }
}
