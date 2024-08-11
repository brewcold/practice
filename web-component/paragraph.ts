customElements.define(
  'custom-paragraph',
  class CustomParagraph extends HTMLElement {
    constructor() {
      super()

      const template = document.getElementById(
        'custom-paragraph'
      ) as HTMLTemplateElement

      const contents = template.content.cloneNode(true)

      const shadowRoot = this.attachShadow({ mode: 'open' })
      shadowRoot.appendChild(contents)
    }

    connectedCallback() {
      const paragraph = this.shadowRoot!.querySelector('.paragraph')
      if (paragraph) {
        paragraph.textContent = this.textContent || ''
      }
      this.textContent = ''
    }
  }
)
