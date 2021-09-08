// @ts-check
import "./medium-article-card.js";

const css = `
<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
`;

const template = () => `
${css}
<section class="cards">

  <medium-article-card></medium-article-card>
  <medium-article-card></medium-article-card>
  <medium-article-card></medium-article-card>
  
</section>
`;

class MediumArticlesComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    ${template()}
    `;
  }

  connectedCallback() {
    console.log("connectedCallback");
    const articles = JSON.parse(
      decodeURIComponent(this.getAttribute("articles"))
    );
    console.log(articles);
  }
}

customElements.define("medium-articles", MediumArticlesComponent);
