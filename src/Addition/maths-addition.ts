export class Addition extends HTMLElement {
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

        const number1 = parseInt(this.getAttribute("data-number1"));
        const number2 = parseInt(this.getAttribute("data-number2"));
        info.textContent = number1 && number2 && (number1 + number2).toString();
        shadow.appendChild(wrapper);
        wrapper.appendChild(info);
    }
}
customElements.define("maths-add", Addition);
