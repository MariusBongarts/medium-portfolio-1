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
    ${css}
    <section class="cards">

    ${this.articles
      .map(
        (article) =>
          `<medium-article-card article=${encodeObject(
            article
          )}></medium-article-card>`
      )
      .join("")}
    
    </section>
    `;
  }
}

customElements.define("medium-articles", MediumArticlesComponent);
