<script setup>
import useStore from "@/store/index";
const { todoStore } = useStore();
</script>

<template>
  <footer class="footer">
    <span class="todo-count"
      ><strong>{{ todoStore.leftCount }}</strong> item left</span
    >
    <ul class="filters">
      <li @click="todoStore.changeType('ALL')">
        <a :class="{ selected: todoStore.type === 'ALL' }" href="#/">All</a>
      </li>
      <li @click="todoStore.changeType('ACTIVE')">
        <a :class="{ selected: todoStore.type === 'ACTIVE' }" href="#/active"
          >Active</a
        >
      </li>
      <li @click="todoStore.changeType('COMPLETE')">
        <a
          :class="{ selected: todoStore.type === 'COMPLETE' }"
          href="#/completed"
          >Completed</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="todoStore.clearTodo">
      Clear completed
    </button>
  </footer>
</template>

<style lang="less" scoped></style>
