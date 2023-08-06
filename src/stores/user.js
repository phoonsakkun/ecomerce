import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useUserStore = defineStore("user", () => {
  const theme = useLocalStorage("theme", "light");
  function ToggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
  }

  return { theme, ToggleTheme };
});
