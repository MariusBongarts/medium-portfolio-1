// @ts-check
import { getRssFeed } from "./services/medium-feed.js";
import "./components/medium-articles.js";

const css = `
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");
@import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");
:root {
  --color-action: #e31b6d;
  --color-bg: #D2DBDD;
  --color-primary: red;
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

const template = ({ items, feed }) => `
  ${css}
  <div id="medium-portfolio-app">
    <medium-articles articles="${encodeURIComponent(
      JSON.stringify(items)
    )}"></medium-articles>
  </div>
`;

class MediumApp extends HTMLElement {
  rssFeed;

  constructor() {
    super();
    // this.attachShadow({ mode: "open" });
  }

  get mediumUsername() {
    return this.getAttribute("username");
  }

  /**
   * TODO: Explain lifecycle hooks
   */
  async connectedCallback() {
    await this.loadRssFeed();
    this.render();
  }

  async loadRssFeed() {
    this.rssFeed = await getRssFeed(this.mediumUsername);
  }

  render() {
    this.innerHTML += template(this.rssFeed);
  }
}

customElements.define("medium-app", MediumApp);
