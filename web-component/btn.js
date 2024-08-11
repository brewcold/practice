"use strict";
customElements.define('my-btn', class MyBtn extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('my-btn');
        const contents = template.content.cloneNode(true);
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(contents);
    }
});
