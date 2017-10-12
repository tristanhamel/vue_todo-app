import Vue from 'vue';
import { navBar } from './nav';
import { list } from './list';
import { newTodo } from './new-todo';

import { data } from '../dummy-data';

import './components.scss';

export const app = Vue.component('app', {
  data: () => ({
    todos: data
  }),
  template: `
    <div class="container">
      <div class="page-header">
        <h1>
          Todos
        </h1>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <new-todo @newTodo="createTodo"></new-todo>
        </div>
        <list :todos="todos"
              @toggle="onToggle">
        </list>
      </div>
    </div>
   `,
  components: {
    navBar,
    list
  },
  methods: {
    onToggle: function (id) {
      this.todos = this.todos
        .map(todo => {
          if(todo.id === id) todo.done = !todo.done;
          return todo;
        })
        .sort((a,b) => a.done - b.done);
    },
    createTodo: function (title) {
      this.todos.unshift({
        id: Date.now(),
        text: title,
        done: false
      });
    }
  }
});
