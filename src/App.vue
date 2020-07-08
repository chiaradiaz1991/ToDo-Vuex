<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo'
import FilterTodos from './components/FilterTodos'
export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>

<style scoped>
* {
  background-color: #1c1c1c;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  line-height: 1.4;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1090px;
  margin: auto;
  overflow: auto;
  padding: 0 5px;
  color: whitesmoke;
}
</style>