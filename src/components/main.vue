<script setup>
const greeting = () => {
  alert("Hello People!")
}
</script>

<template>
  <div class="container">
    <div class="w-full lg:w-3/4 p-4 mx-auto bg-emerald-400/90 rounded-2xl shadow-lg shadow-gray-200/50">
      <h2 class="mb-3 text-gray-200">Search Domain</h2>
      <form class="relative leading-3">
        <input type="text" placeholder="example.com" class="font-Ubuntu font-medium w-full py-3.5 pl-2 pr-[80px] bg-emerald-100 border-0 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500">
        <button @click.prevent="greeting" class="font-Saira absolute right-2 top-[3px] border-0 p-2 bg-teal-400 rounded-lg text-white uppercase font-bold tracking-wider shadow-sm shadow-teal-400/50 cursor-pointer focus:bg-teal-600">Check</button>
      </form>
    </div>
  </div>
</template>