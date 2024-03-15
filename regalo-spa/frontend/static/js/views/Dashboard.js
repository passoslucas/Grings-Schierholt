import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard | Regalo Assessoria");
  }

  async getHtml() {
    return `
        <h1>Garanta seu benefício com nossas soluções</h1>
        `;
  }
}
