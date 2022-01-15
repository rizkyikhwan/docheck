<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex';

const store = useStore()

const mode = reactive(store.state.theme)

const toggleTheme = () => {
  store.dispatch("toggleTheme")
}
</script>

<template>
  <nav class="py-10 flex items-center">
    <div class="container flex justify-between items-center">
      <h1 class="font-bold text-xl sm:text-2xl">Domain Check</h1>
      <div class="flex justify-self-end gap-2">
        <button @click="toggleTheme" class="flex items-center justify-center cursor-pointer bg-yellow-500 border-0 w-10 rounded-lg shadow-lg shadow-yellow-500/50 focus:outline-none dark:bg-slate-800 dark:shadow-sm transition duration-200">
          <fi v-if="mode.theme == 'light'" type="sun" class="icon-md text-white" />
          <fi v-else type="moon" class="icon-md text-sky-600" />
        </button>
        <a href="#" class="flex items-center px-2 py-1 gap-2 font-Saira no-underline bg-gray-500 shadow-lg shadow-gray-500/50 rounded-xl text-white hover:bg-gray-700 transition ease-in-out duration-200">
          <fi type="github" class="icon" /> GitHub
        </a>
      </div>
    </div>
  </nav>
</template>