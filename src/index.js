customElements.define(
  'bware-of-cookies',
  class extends HTMLElement {
    constructor() {
      super();
      const buttonText = this.getAttribute('data-button-text') || 'OK';

      const wrapperTemplate = document.createElement('template');
      wrapperTemplate.innerHTML = `
        <style>
          .boc {
            box-sizing: border-box;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 1rem;
            box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
            background: rgba(255, 255, 255, 0.75);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            transition: transform 750ms ease-in, opacity 750ms ease-in, visibility 0s 750ms;
          }
          .boc--hide {
            transform: translate3d(0, 100%, 0);
            opacity: 0;
            visibility: hidden;
          }
          .boc__slot {
            box-sizing: border-box;
          }
          .boc__btnwrapper {
            box-sizing: border-box;
          }
          .box__btn {
            box-sizing: border-box;
          }
        </style>
        <div class="boc">
          <div class="boc__slot">
            <slot>Default text</slot>
          </div>
          <div class="boc__btnwrapper">
            <button id="boc-acknowledge-button" class="boc__btn">
              ${buttonText}
            </button>
          </div>
        </div>
      `;

      this.acknowledgedEvent = new CustomEvent('boc-acknowledge', { bubbles: true });

      this.clickHandler = (event) => {
        this.shadowRoot.querySelector('.boc').className += ' boc--hide';
        this.dispatchEvent(this.acknowledgedEvent);
      };

      this.attachShadow({ mode: 'open' }).appendChild(
        wrapperTemplate.content.cloneNode(true)
      );
    }

    connectedCallback() {
      const button = this.shadowRoot.querySelector('#boc-acknowledge-button');
      button.addEventListener('click', this.clickHandler);
    }
  }
);
