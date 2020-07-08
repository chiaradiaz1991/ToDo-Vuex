<template>
  <div>
    <h3>Todos</h3>
    <div class="target">
      <span>Doubleclick to mark as completed</span>
      <span>
        <span class="incomplete"></span> = Incomplete
      </span>
      <span>
        <span class="complete"></span> = Complete
      </span>
    </div>
    <div class="todos">
      <div @dblclick="onDoubleClick(todo)" class="todo" v-bind:class="{'is-complete': todo.completed}" v-for="todo in allTodos" :key="todo.id">
        {{ todo.title }}
        <button @click="deleteTodo(todo.id)" class="btn">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: {
    ...mapGetters(["allTodos"])
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDoubleClick(todo) {
      const updTodo = {
        id : todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updateTodo(updTodo)
    }
  },
  created() {
    // call the action in method created()
    this.fetchTodos();
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
  font-size: 30px;
  color: #b0a3e6;
}
.todos {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.todo {
  border: 1px solid #cccccc;
  background-color: #b0a3e6;
  padding: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  margin: 20px;
  width: 300px;
  height: 70px;
  border-radius: 10px;
}
.btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}
.target {
  display: flex;
  justify-content: space-around;
}
.complete {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: yellowgreen;
}
.incomplete {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #b0a3e6;
}
.is-complete {
  background-color: lightgreen;
  color: whitesmoke;
}

</style>