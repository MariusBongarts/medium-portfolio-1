// @ts-check
import "./medium-article-card.js";
import { encodeObject, decodeObject } from "../services/helper.js";
const css = `
<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
`;

const template = (articles) => `
${css}
<section class="cards">

  ${articles
    .map(
      (article) =>
        `<medium-article-card article=${encodeObject(
          article
        )}></medium-article-card>`
    )
    .join("")}
  
</section>
`;

class MediumArticlesComponent extends HTMLElement {
  get articles() {
    return decodeObject(this.getAttribute("articles"));
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    ${template(this.articles)}
    `;
  }
}

customElements.define("medium-articles", MediumArticlesComponent);
