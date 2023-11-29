import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'todo-component',
  shadow: true,
})
export class TodoComponent {
  /**
   * Todoo list
   */
  @Prop({ mutable: true }) todos: Array<Object>;
  @Prop() action: () => void;
  @State() input: string = '';

  private addTodo = () => {
    this.todos = [...this.todos, { desc: this.input }];
    this.input = '';
  };
  render() {
    console.log('this.todos: ', this.todos);
    console.log(this.input);
    return (
      <div>
        <ol>
          {this.todos.map(v => (
            <todo-item desc={v['desc']} done={v['done']}></todo-item>
          ))}
        </ol>
        <button onClick={this.action}>Action!</button>
        <input type="text" value={this.input} onChange={e => (this.input = (e.target as HTMLInputElement).value)} />
        <button onClick={this.addTodo}>Add!</button>
      </div>
    );
  }
}
