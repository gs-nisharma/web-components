import { LitElement, html, css, } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, Ref, ref } from 'lit/directives/ref.js';

@customElement('todo-item')
export class TodoItem extends LitElement {
  @property({ type: String })
  value = ""
  @property({ type: Boolean })
  completed = false
  override render() {
    return html`
      <li>${this.value}<input type='checkbox' ?checked=${this.completed} @change=${this.toggle}></li>
    `
  }
  toggle(e: Event) {
    this.completed = (e.target as HTMLInputElement).checked;
  }
}
@customElement('to-do')
export class Todo extends LitElement {
  @property({ type: Array })
  todos = Array();
  inputRef: Ref<HTMLInputElement> = createRef();

  override render() {
    return html`
    <input type="text" ${ref(this.inputRef)}/>
    <button @click=${this._add}>Add Item</button>
      <ol>
        ${this.todos.map(v => html`<todo-item value="${v.desc}" ?completed=${v.complete}></todo-item>`)}
      </ol>
    `;
  }
  private _add() {
    const value = this.inputRef.value?.value
    console.log(value)
    this.todos.push({ "desc": value, "complete": false })
    this.inputRef.value && (this.inputRef.value.value = "");
    this.requestUpdate();
  }

}


/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  // @property({
  //   converter: {
  //     fromAttribute: (value: string) => {
  //       return JSON.parse(value)
  //     },
  //     toAttribute: (value) => {
  //       return JSON.stringify(value)
  //     }
  //   }
  // })
  @property({ type: Object })
  object = {
    name: "m",
    count: 0
  }

  override render() {
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <h2>${this.object?.name} : ${this.object?.count}</h2>
      <slot></slot>
    `;
  }

  private _onClick() {
    this.object.count++;
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
    'to-do': Todo;
    'todo-item': TodoItem;
  }
}
