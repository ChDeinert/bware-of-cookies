customElements.define(
  'bware-of-cookies',
  class extends HTMLElement {
    constructor() {
      super();
      const wrapperTemplate = document.querySelector('#bware-of-cookies-template');
      const shadowRoot = this.attachShadow({ mode: 'open' })
        .appendChild(wrapperTemplate.content.cloneNode(true));
    }
  }
);
