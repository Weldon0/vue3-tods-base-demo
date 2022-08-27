<script setup>
// const emits = defineEmits(["addTodo"]);
import useStore from "@/store";
const { todoStore } = useStore();

const addTodo = (e) => {
  if (!e.target.value.trim()) {
    alert("请输入内容");
    return;
  }
  todoStore.addTodo(e.target.value);
  e.target.value = "";
};
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input
      @keyup.enter="addTodo"
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
    />
  </header>
</template>

<style lang="less" scoped></style>
