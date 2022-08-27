<script setup>
import useStore from "@/store";
const { todoStore } = useStore();
</script>

<template>
  <section class="main">
    <input
      :checked="todoStore.isCheckAll"
      @change="todoStore.checkAll"
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        v-for="item in todoStore.showList"
        :key="item.id"
        :class="{ completed: item.done }"
      >
        <div class="view">
          <input
            @change="todoStore.changeTodo(item.id)"
            class="toggle"
            type="checkbox"
            :checked="item.done"
          />
          <label>{{ item.name }}</label>
          <button @click="todoStore.delTodo(item.id)" class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
