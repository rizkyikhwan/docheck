<script>
import getDomain from '../composable/getDomain'
import Skeleton from './skeleton.vue'

export default {
  components: {
    Skeleton,
  },
  setup() {
    const { domain, enterDomain, loading, searchDomain, clearDomain } = getDomain()

    return { domain, enterDomain, loading, searchDomain, clearDomain }
  }
}

</script>

<template>
  <div class="container">
    <div class="w-full lg:w-3/4 mx-auto">
      <div class="p-4 bg-emerald-400/90 rounded-2xl shadow-lg shadow-emerald-400/50 dark:bg-gray-800 dark:shadow-gray-700/30">
        <h2 class="mb-3 text-slate-700 dark:text-slate-200">Search Domain</h2>
        <form class="relative leading-3">
          <input v-model.enter="enterDomain" type="text" placeholder="example.com" class="input">
          <button @click.prevent="searchDomain" :disabled="enterDomain == ''" class="btn">Check</button>
        </form>
      </div>
      <div class="flex flex-col sm:flex-row gap-3 mt-3">
        <div class="basis-1/4">
          <div class="py-2 px-3 bg-slate-300/50 rounded-lg shadow-lg shadow-slate-300/70 dark:bg-gray-800 dark:shadow-gray-700/30">
            <h4 class="text-slate-700 dark:text-slate-200 mb-2">Note:</h4>
            <div class="grid gap-2 grid-cols-2 sm:grid-cols-none">
              <div class="flex items-center gap-1">
                <fi type="check-circle" class="text-green-500 icon-md" /> <p class="text-sm">Available</p>
              </div>
              <div class="flex items-center gap-1">
                <fi type="x-circle" class="text-red-500 icon-md" /> <p class="text-sm">Not Available</p>
              </div>
            </div>
          </div>
        </div>
        <div class="basis-3/4">
          <div class="pt-2">
            <div class="flex justify-between items-center">
              <h3 class="text-slate-700 dark:text-slate-200">Result</h3>
              <button @click="clearDomain" v-if="domain.domainAvailability" class="bg-transparent border-0 cursor-pointer font-Saira font-bold text-rose-500 uppercase tracking-wide">Clear</button>
            </div>
            <p class="text-sm text-slate-700/60 dark:text-slate-400/50 mb-1">Result search will appear here</p>
            <div v-if="domain.domainAvailability" class="flex items-center justify-between p-2 bg-slate-300/50 rounded-lg shadow-lg shadow-slate-300/70 dark:bg-gray-800 dark:shadow-gray-700/30">
              <p class="text-sm text-slate-700 dark:text-slate-200">{{ domain.domainName }}</p>
                <fi :type="domain.domainAvailability == 'AVAILABLE' ? 'check-circle' : 'x-circle'" class="icon-md" :class="domain.domainAvailability == 'AVAILABLE' ? 'text-green-500' : 'text-red-500' " />
            </div>
            <Skeleton v-if="loading" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>