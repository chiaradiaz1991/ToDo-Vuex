import axios from 'axios'

const state = {
  todos: []
}

const getters = {
  allTodos: (state)=> state.todos
}

const actions = {
  // use commit to call a mutation, mutations cannot be called directly
  async fetchTodos({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    commit('setTodos', response.data) //first parameter the mutation and second the information we want to pass in
  },
  async addTodo({ commit }, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, comlpleted: false})
    commit('newTodo', response.data)
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('removeTodo', id)
  },
  async filterTodos({ commit }, e) {
    const limit =parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    commit('setTodos', response.data)
  },
  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
    commit('updateTodo', response.data)
  }
}

const mutations = {
  setTodos: (state, todos)=> (state.todos = todos),
  newTodo: (state, todo) => (state.todos.unshift(todo)),
  removeTodo: (state, id) => (state.todos = state.todos.filter(t => t.id !== id)),
  updateTodo:  (state, updTodo) => {
    const index = state.todos.findIndex(t=> t.id === updTodo.id)
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}