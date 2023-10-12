<script>
import projects from '../assets/json/projects.json'

export default {
  data() {
    return{
        projects : projects
        }
    }
  }
</script>

<template>
  <div  v-for="project in projects" class="center-margin component-margin">
    
    <img class="project-image" :src="project.imageSrc"/>

    <div class="grey-card">
      <h3 class="title">{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <!-- <a v-bind:href="''"> {{ project.links }} </a> -->
    </div>

  </div>

</template>

<style scoped>

.project-image {
  max-width: 100%;
  max-height: 100%;
}

</style>