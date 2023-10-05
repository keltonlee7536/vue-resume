<script setup>
import { RouterLink, RouterView } from 'vue-router'
 import navbar from './components/navbar.vue'
import footerComponent from './components/footer.vue'
</script>

<template>
 <navbar/>
  <RouterView />
<footerComponent />
</template>