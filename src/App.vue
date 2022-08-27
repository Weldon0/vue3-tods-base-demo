<script setup>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
import useStore from "@/store";

const { todoStore } = useStore();

// 提供数据

console.log(todoStore);
todoStore.$subscribe((e) => {
  localStorage.setItem("todos", JSON.stringify(e.events.target));
});
</script>

<template>
  <section class="todoapp">
    <TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<style></style>
