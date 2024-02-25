import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle(`Serviço ${this.postId}`);
  }

  async getHtml() {
    return `
            <h1>Serviço</h1>
            <p>Você está vendo sobre o serviço ${this.postId}.</p>
        `;
  }
}
