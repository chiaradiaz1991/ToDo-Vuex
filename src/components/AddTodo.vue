<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <!-- use v-model to bind to the title in this case, always add to data() when we have properties in the component-->
        <input type="text" placeholder="add new to do.." v-model="title">
        <input type="submit" value="submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "AddTodo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title)
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid whitesmoke;
  outline: 0;
  border-radius: 10px;
}
input[type="submit"] {
  flex: 2;
  background-color: lightgrey;
  color: black;
  cursor: pointer;
  border-radius: 10px;
}

</style>