import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'todo-item',
  shadow: true,
})
export class TodoItem {
  @Prop() desc: string;
  @Prop() done?: boolean;

  render() {
    return (
      <li>
        <span>{this.desc}</span> <input type="checkbox" checked={this.done} />
      </li>
    );
  }
}
