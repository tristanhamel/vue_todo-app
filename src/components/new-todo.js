import Vue from 'vue';

export const newTodo = Vue.component('new-todo', {
  data: () => ({
    todoTitle: ''
  }),
  template: `
    <div class="form-inline">
      <div class="form-group">
        <label for="newTodo"
               class="sr-only">
          New Todo
        </label>
        <input type="text"
               class="form-control"
               aria-describedby="todo-title"
               v-model="todoTitle"
               name="newTodo"
               placeholder="Add a new Todo...">
      </div>
      <button type="submit" 
              @click="submitTodo"
              class="btn btn-primary">
         Add
      </button>
    </div>`,
  methods: {
    submitTodo: function () {
      if(!this.todoTitle.length) return;

      this.$emit('newTodo', this.todoTitle);
      this.todoTitle = '';
    }
  }
});