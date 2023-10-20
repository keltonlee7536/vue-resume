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
      <head>
        <link rel="stylesheet" type="text/css" href="../assets/styles/css/main.css">
      </head>

  <div  v-for="project in projects" class="center-margin component-margin"> 
    
    <img class="project-image img-fluid" :src="project.imageSrc"/>

    <div class="light-grey-card rounded-corners big-bottom-margin">
      <div class="component-margin center-margin">
      <h3 class="title padding-top-bottom">{{ project.title }}</h3>
      <p class="padding-top-bottom">{{ project.description }}</p>
      <!-- <a v-bind:href="''"> {{ project.links }} </a> -->
    </div>

    </div>

  </div>

</template>

<style scoped>

.project-image {
  max-width: 100%;
  max-height: 100%;
}
.img-fluid {
    max-width: 100%;
}
</style>