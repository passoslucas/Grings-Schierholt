import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Sobre a Regalo");
  }

  async getHtml() {
    return `
            <h1>Sobre a Regalo</h1>
            <p>Descubra um pouco mais sobre nós!</p>
        `;
  }
}
