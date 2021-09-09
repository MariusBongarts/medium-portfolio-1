import { decodeObject } from "../services/helper.js";
import "./medium-category-chip.js";
// @ts-check

const css = ``;

const template = (categories) => `
${css}
<div class="chips">
${categories
  .map((category) => `<medium-category-chip>${category}</medium-category-chip>`)
  .join("")}       
</div>
`;

class MediumCategoryChips extends HTMLElement {
  get categories() {
    return decodeObject(this.getAttribute("categories"));
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {}

  render() {
    this.shadowRoot.innerHTML = `
    ${template(this.categories)}
    `;
  }
}

customElements.define("medium-category-chips", MediumCategoryChips);
