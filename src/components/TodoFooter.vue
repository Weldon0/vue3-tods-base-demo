<script setup>
defineProps({
  leftCount: Number,
});
</script>

<template>
  <footer class="footer">
    <span class="todo-count"
      ><strong>{{ leftCount }}</strong> item left</span
    >
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
