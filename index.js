class Greetings extends HTMLElement {
  static observedAttributes = ["color", "size"];
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
    const text = this.getAttribute("data-text");
    info.textContent = text;
    shadow.appendChild(wrapper);
    wrapper.appendChild(info);
  }
  disconnectedCallback() {
    console.log("custom event removed from page.");
  }
  adoptedCallback() {
    console.log("Custom event moved to new page.");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("my-greetings", Greetings);
