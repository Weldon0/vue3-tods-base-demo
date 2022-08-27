import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoList", {
  /**
   * @returns {{list: any, type: 'ALL'|'COMPLETE'|'ACTIVE'}}
   */
  state() {
    return {
      list: JSON.parse(localStorage.getItem("todos")),
      type: "ALL",
    };
  },
  actions: {
    addTodo(name) {
      this.list.push({
        name,
        done: false,
        id: new Date(),
      });
    },
    delTodo(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
    changeTodo(id) {
      this.list.forEach((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
      });
    },
    checkAll(e) {
      this.list.forEach((item) => (item.done = e.target.checked));
    },
    clearTodo() {
      this.list = this.list.filter((item) => {
        return !item.done;
      });
    },
    changeType(type) {
      this.type = type;
    },
  },
  getters: {
    isCheckAll() {
      return this.list.every((item) => item.done);
    },
    leftCount() {
      return this.list.filter((item) => item.done).length;
    },
    showList() {
      return this.list.filter((item) => {
        if (this.type === "COMPLETE") {
          return item.done;
        } else if (this.type === "ACTIVE") {
          return !item.done;
        }
        return true;
      });
    },
  },
});
