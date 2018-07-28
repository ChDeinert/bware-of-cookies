customElements.define(
  'bware-of-cookies',
  class extends HTMLElement {
    constructor() {
      super();
      const wrapperTemplate = document.querySelector('#bware-of-cookies-template');

      this.acknowledgedEvent = new CustomEvent('boc-accept', { bubbles: true });

      this.clickHandler = (event) => {
        this.shadowRoot.querySelector('.boc').className += ' boc--hidden';
        this.dispatchEvent(this.acknowledgedEvent);
      }

      const shadowRoot = this.attachShadow({ mode: 'open' })
        .appendChild(wrapperTemplate.content.cloneNode(true));
    }

    connectedCallback() {
      const button = this.shadowRoot.querySelector('.boc__btn');
      button.addEventListener('click', this.clickHandler);
    }
  }
);
