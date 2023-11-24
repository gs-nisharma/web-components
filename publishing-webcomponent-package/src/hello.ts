export class HelloWorld extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        console.log("Custom element added to the page.");
        const shadow = this.attachShadow({ mode: "open" });
        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");
        const info = document.createElement("span");
        info.setAttribute("class", "info");
        const text = this.getAttribute("data-text");
        info.textContent = text;
        shadow.appendChild(wrapper);
        wrapper.appendChild(info);
    }
}
customElements.define("hello-world", HelloWorld);
