<template>
  <ion-page>
    <ion-header>

      <ion-toolbar class="toolbar-md-primary">
        <ion-title>TodoList</ion-title>
      </ion-toolbar>

    </ion-header>
    <ion-content class="content">

      <ion-list>
        <ion-item v-for="todo in todos" :key="todo.id">
          {{ Object.values(todo) }}
        </ion-item>
        <ion-item>{{ dani }}</ion-item>
      </ion-list>

      <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-content>
  </ion-page>
</template>

<script>
    import axios from 'axios';

    export default {
    data() {
        return {
        todos: [],
        dani: ""
        }
    },
    methods: {
        addTodo() {
        this.$router.push({path: '/todos/add'})
        }
    },
    created() {
        axios.get('http://localhost:8888/todos')
        .then(res => this.todos = res.data);
        axios.get('https://api.github.com/users/Racc0on')
        .then(res => this.dani = res.data);
    }
}
</script>

<style lang="scss" scoped>

</style>