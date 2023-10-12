<script setup>
import { RouterLink, RouterView } from 'vue-router'
 import navbar from './components/navbar.vue'
import footerComponent from './components/footer.vue'
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="../assets/styles/css/main.css">
    </head>
 <navbar/>
 <div class="body-container">
  <RouterView />
 </div>
<footerComponent />
</template>