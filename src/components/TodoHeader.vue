<script setup>
const emits = defineEmits(["addTodo"]);
const addTodo = (e) => {
  if (!e.target.value.trim()) {
    alert("请输入内容");
    return;
  }
  emits("addTodo", {
    id: Math.random(),
    name: e.target.value,
    done: false,
  });
  e.target.value = "";
};

document.addEventListener("keyup", (e) => e);
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
