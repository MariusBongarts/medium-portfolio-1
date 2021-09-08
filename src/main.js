// @ts-check
import { getRssFeed } from "./services/medium-feed.js";
import { encodeObject } from "./services/helper.js";
import "./components/medium-articles.js";

const css = `
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");
@import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");
:root {
  --color-action: #e31b6d;
  --color-bg: #D2DBDD;
}


#medium-portfolio-app {
  font-family: 'Roboto Slab', serif;
  background-color: var(--color-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
}

</style>
`;

const template = ({ articles, feed }) => `
  ${css}
  <div id="medium-portfolio-app">
    <medium-articles articles="${encodeObject(articles)}"></medium-articles>
  </div>
`;

class MediumApp extends HTMLElement {
  rssFeed;

  constructor() {
    super();
    // this.attachShadow({ mode: "open" });
  }

  get showHeader() {
    return this.getAttribute("hideHeader") !== null;
  }

  get mediumUsername() {
    return this.getAttribute("username");
  }
  get maxArticles() {
    const maxArticles = this.getAttribute("maxArticles");
    return !isNaN(+maxArticles) ? maxArticles : 10;
  }

  async connectedCallback() {
    await this.loadRssFeed();
    this.render();
    console.log("hideHeader: ", this.showHeader);
  }

  async loadRssFeed() {
    this.rssFeed = await getRssFeed(this.mediumUsername, this.maxArticles);
  }

  render() {
    this.innerHTML += template(this.rssFeed);
  }
}

customElements.define("medium-portfolio", MediumApp);
