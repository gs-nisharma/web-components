import r2wc from "@r2wc/react-to-web-component";
import App from "./App";
import { Addition } from "nidhis-webc";
import React, { DOMAttributes } from "react";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["maths-add"]: CustomElement<Addition>;
    }
  }
}

const HelloWC = r2wc(App, {
  props: { name: "string" },
});

customElements.define("hello-wc", HelloWC);
