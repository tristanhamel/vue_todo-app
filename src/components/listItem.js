import Vue from 'vue';

export const listItem = Vue.component('list-item', {
  template: `
    <li class="list-group-item"
        @click="toggle"
        :style="{'text-decoration': textDecoration, background: background}">
        <span class="badge"
              v-if="this.todo.done">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
        </span>
        {{todo.text}}
    </li>`,
  props: {
    todo: Object
  },
  methods: {
    toggle: function () {
      this.$emit('toggle', this.todo.id);
    }
  },
  computed: {
    textDecoration: function () {
      return this.todo.done ? 'line-through' : '';
    },
    background: function () {
      return this.todo.done ? '#f5f5f5' : '#fff';
    }
  }
});
