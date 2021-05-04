<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="bg-custom text-light text-center p-4">
      <i class="fas fa-twitter"></i> <i class="fas fa-github-alt"></i> <i class="fas fa-facebook"></i>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.bg-custom{
  background-color:aquamarine;
}
</style>
