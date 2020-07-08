<template>
  <div>
    Filter To do:
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "FilterTodos",
  methods: {
    ...mapActions(["filterTodos"])
  }
}
</script>

<style scoped>
h3 {
  color: whitesmoke;
}
select {
  margin-top: 20px;
  padding: 6px;
  border: #CCCCCC 1px solid;
}
</style>