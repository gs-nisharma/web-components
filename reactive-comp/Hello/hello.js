class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.state = this.createReactiveState({
      count: 0,
    });
  }
  createReactiveState(obj) {
    const component = this;
    return new Proxy(obj, {
      set(target, property, value) {
        target[property] = value;
        component.update(); // re-render component when state changes
        return true; // signifies the set operation succeeded
      },
    });
  }
  update() {
    this.render();
  }
  render() {
    console.log("rendered");
    this.shadowRoot.innerHTML = `
        <div>Count is :  ${this.state.count}</div>
        <button id="increase">Increase</button>
        `;
    this.shadowRoot
      .getElementById("increase")
      .addEventListener("click", () => this.increment(this.state));
  }
  increment(state) {
    state.count += 1;
  }

  connectedCallback() {
    console.log("Custom element added to the page.");
    this.render();
  }
}
customElements.define("hello-world", HelloWorld);
