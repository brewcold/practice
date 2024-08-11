customElements.define(
  'custom-paragraph',
  class CustomParagraph extends HTMLElement {
    constructor() {
      super()
    }

    connectedCallback(): void {
      const shadowRoot = this.attachShadow({ mode: 'open' })

      const p = document.createElement('p')
      p.setAttribute('class', 'paragraph')
      p.textContent = this.textContent || ''

      const style = document.createElement('style')
      style.textContent = `
        .paragraph {
          color: red;
        }
      `
      shadowRoot.appendChild(style)
      shadowRoot.appendChild(p)
      this.textContent = ''
    }
  }
)
