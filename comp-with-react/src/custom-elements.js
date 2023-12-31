import React from "react";
import ReactDOM from "react-dom";

export default function defineElement(
  Component,
  elementName,
  observedAttributes = [],
  events = []
) {
  class CustomElement extends HTMLElement {
    constructor() {
      super();
      observedAttributes.forEach((property) =>
        Object.defineProperty(this, property, {
          set: (value) => this.setterProxy(property, value),
        })
      );
      this.events = events;
    }

    setterProxy(name, value) {
      const oldValue = this.getAttribute(name);
      this.attributeChangedCallback(name, oldValue, value);
    }

    connectedCallback() {
      const props = [...this.attributes].reduce(
        (props, attribute) => ({ ...props, [attribute.name]: attribute.value }),
        { root: this }
      );

      const instance = <Component {...props} />;
      this.assignEvents(instance);
      ReactDOM.render(instance, this);
      this.instance = instance;
      this.props = props;
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log("attribute changed : ", name, oldValue, newValue);
      const { instance } = this;
      if (!instance) return;
      const newProps = { ...this.props, ...{ [name]: newValue } };
      const newInstance = <Component {...newProps} />;
      this.assignEvents(newInstance);
      ReactDOM.render(newInstance, this);
      this.instance = newInstance;
      this.props = newProps;
    }

    assignEvents(instance) {
      console.log("Assign Events: ", this.events);
      this.events.forEach(
        (event) =>
          (instance.props[event] = (eventArgs) =>
            this.dispatchEvent(new CustomEvent(event, { detail: eventArgs })))
      );
    }
  }

  CustomElement.observedAttributes = observedAttributes;
  window.customElements.define(elementName, CustomElement);
}
