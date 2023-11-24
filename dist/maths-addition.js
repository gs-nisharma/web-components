"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addition = void 0;
class Addition extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        console.log("Custom element added to the page.");
        const shadow = this.attachShadow({ mode: "open" });
        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");
        const info = document.createElement("span");
        info.setAttribute("class", "info");
        const number1 = this.getAttribute("data-number1");
        const number2 = this.getAttribute("data-number2");
        info.textContent = number1 && number2 && number1 + number2;
        shadow.appendChild(wrapper);
        wrapper.appendChild(info);
    }
}
exports.Addition = Addition;
customElements.define("maths-add", Addition);
