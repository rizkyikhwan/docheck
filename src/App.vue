<script>
import { onBeforeMount } from "vue";
import { useStore, mapGetters } from "vuex"
import Navbar from "./components/navbar.vue"
import Main from "./components/main.vue"
import Footer from "./components/footer.vue"

export default {
  components: {
    Navbar,
    Main,
    Footer
},
  setup() {
    const store = useStore()
    
    onBeforeMount(() => {
      store.dispatch("initTheme")
    })
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark")
    },
  },
  computed: {
    ...mapGetters({ theme: "getTheme" })
  }
}

</script>

<template>
  <Navbar />
  <Main />
  <Footer />
</template>
