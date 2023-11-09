<script>
import skillsJson from '../assets/json/skills.json'

export default {
  data() {
    return{
        skillsJson : skillsJson
        }
    }
  }
</script>

<template>
    <div class="icon-grid-parent">
        <img  v-for="images in skillsJson" class="icon icon-margin" :src="images.iconPath">
        <img class="icon icon-margin"  src="../../public/no-profile-image.webp">
    </div>
</template>