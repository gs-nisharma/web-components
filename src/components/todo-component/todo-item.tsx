import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'todo-item',
  shadow: true,
})
export class TodoItem {
  @Prop() desc: string;
  @Prop() done?: boolean;

  render() {
    <li>
      {this.desc} <input type="checkbox" checked={this.done} />
    </li>;
  }
}
