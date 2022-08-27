<script setup>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
import { ref, watch } from "vue";
import useStore from "@/store";

const { todoStore } = useStore();

// 提供数据
const list = ref(todoStore.list);

watch(
  list,
  (value) => {
    localStorage.setItem("todos", JSON.stringify(value));
  },
  {
    deep: true,
  }
);
</script>

<template>
  <section class="todoapp">
    <TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<style></style>
