"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiplication = void 0;
class Multiplication extends HTMLElement {
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
        info.innerHTML = (number1 && number2) ? (parseFloat(number1) * parseFloat(number2)).toString() : "";
        shadow.appendChild(wrapper);
        wrapper.appendChild(info);
    }
}
exports.Multiplication = Multiplication;
customElements.define("maths-mult", Multiplication);
