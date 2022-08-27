<script setup>
import { computed } from "vue";

const props = defineProps({
  list: Array,
});

const isCheckAll = computed({
  get() {
    return props.list.every((item) => item.done);
  },
  set(value) {
    props.list.forEach((item) => (item.done = value));
  },
});
const emits = defineEmits(["changeFn", "delTodo"]);

const changeFn = (id) => {
  emits("changeFn", id);
};

const delTodo = (id) => {
  emits("delTodo", id);
};
</script>

<template>
  <section class="main">
    <input
      v-model="isCheckAll"
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!--      <li class="completed">-->
      <!--        <div class="view">-->
      <!--          <input class="toggle" type="checkbox" checked />-->
      <!--          <label>Taste JavaScript</label>-->
      <!--          <button class="destroy"></button>-->
      <!--        </div>-->
      <!--        <input class="edit" value="Create a TodoMVC template" />-->
      <!--      </li>-->
      <li v-for="item in list" :key="item.id" :class="{ completed: item.done }">
        <div class="view">
          <input
            @change="changeFn(item.id)"
            class="toggle"
            type="checkbox"
            :checked="item.done"
          />
          <label>{{ item.name }}</label>
          <button @click="delTodo(item.id)" class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
