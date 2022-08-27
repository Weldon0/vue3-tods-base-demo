import { useTodoStore } from "@/store/todo";

export default function useStore() {
  return {
    todoStore: useTodoStore(),
  };
}
