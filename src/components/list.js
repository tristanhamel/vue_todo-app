import Vue from 'vue';
import { listItem } from './listItem';

export const list = Vue.component('list', {
  template: `
      <transition-group name="todo-list" tag="ol" class="list-group">
        <list-item v-for="todo in todos"
                   :key="todo.id"
                   :todo="todo"
                   @toggle="onToggle">
        </list-item>
      </transition-group>`,
  props: {
    todos: Array
  },
  components: [
    listItem
  ],
  methods: {
    onToggle: function (id) {
      this.$emit('toggle', id);
    }
  }
});
