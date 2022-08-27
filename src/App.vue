<script setup>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
import { computed, ref, watch } from "vue";

// 提供数据
const list = ref(JSON.parse(localStorage.getItem("todos")));

/**
 * @type {Ref<UnwrapRef<'ALL'|'COMPLETE'|'ACTIVE'>>}
 */

const type = ref("ALL");

const changeFn = (id) => {
  // console.log(2);
  list.value.forEach((item) => {
    if (item.id === id) {
      item.done = !item.done;
    }
  });
};

watch(
  list,
  (value) => {
    localStorage.setItem("todos", JSON.stringify(value));
  },
  {
    deep: true,
  }
);

const delTodo = (id) => {
  list.value = list.value.filter((item) => item.id !== id);
};

const addTodo = (item) => {
  list.value.push(item);
};

const leftCount = computed(() => {
  return list.value.filter((item) => item.done).length;
});
</script>

<template>
  <section class="todoapp">
    <TodoHeader :list="list" @addTodo="addTodo"></TodoHeader>
    <TodoMain
      :type="type"
      :list="list"
      @changeFn="changeFn"
      @delTodo="delTodo"
    ></TodoMain>
    <TodoFooter :leftCount="leftCount"></TodoFooter>
  </section>
</template>

<style></style>
