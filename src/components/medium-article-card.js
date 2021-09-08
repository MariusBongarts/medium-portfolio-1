// @ts-check
const css = `
<style>
:host {
    max-width: 100%;
}

.card {
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
    width: 350px;
    border-radius: 12px;
    transform: scale(0.95, 0.95);
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
  }

  .card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
    transform: scale(1, 1);
    z-index: 2;
  }

.card-img, .card--1 .card-img--hover {
    background-image: url('https://miro.medium.com/max/2000/1*xMI6mfY3DL5-NcN0Ej91Mw.jpeg');
}

.card-time {
    font-size: 12px;
    color: #AD7D52;
    vertical-align: middle;
    margin-left: 5px;
}

.card-clock-info {
    float: right;
}

.card-img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  
}

.card-info-hover {
    position: absolute;
    padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
}

.card-img--hover {
    transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;  
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
}


.card-info {
    z-index: 2;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 24px 24px;
}

.card-category {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1.5px;
    font-weight: 500;
    color: #868686;
}

.card-title a {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
    text-decoration: none;
    color: black;
}

.card-footer {
    margin-top: 10px;
    font-size: 13px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
}

.card-author {
    font-weight: 600;
    text-decoration: none;
    color: var(--color-action);
}

.card-date {
    float: right;
}

.card:hover .card-img--hover {
    height: 100%;
    opacity: 0.3;
}

.card:hover .card-info {
    background-color: transparent;
    position: relative;
}

.card:hover .card-info-hover {
    opacity: 1;
}

@media only screen and (max-width: 700px) {
    .card {
        width: 100%;
        transform: scale(1, 1);
        border-radius: 0;
        margin-top: 10px;
    }
    .card-img,.card-info, .card-img--hover  {
      border-radius: 0 !important;
    }
}
 
</style>
`;

const template = () => `
${css}
<article class="card card--1">
  <div class="card-img"></div>
  <a href="#" class="card_link">
     <div class="card-img--hover"></div>
   </a>
  <div class="card-info">

    <div class="card-title"><a href="www.google.de">Showcase Your Medium Articles with Web Components: Part 1 - Basics</a></div>
        <span class="card-category"> Typescript, Javascript, DeVOps, Frontend</span>
    <br>
    <div class="card-footer"><span>by</span> <a href="#" class="card-author" title="author">Celeste Mills</a><span class="card-date">10.08.2021</span></div>
  </div>
</article>

`;

class MediumArticleCardComponent extends HTMLElement {
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

customElements.define("medium-article-card", MediumArticleCardComponent);
