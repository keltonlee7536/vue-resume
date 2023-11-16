<script>
import experienceJson from '../assets/json/experience.json'

export default {
  data() {
    return{
        experienceJson : experienceJson
        }
    }
  }
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="../assets/styles/css/main.css">
    </head>


    <div class="component-margin center-margin exp-card light-grey-card rounded-corners" v-for="experience in experienceJson">

        <div class="flex-center">
            <div class="icon-card dark-grey-card rounded-corners">
            <img class="icon icon-margin" :src="experience.iconPath"/>
        </div>

        </div>

        <div class="indent-center">
            <div class="title">
                <h3>{{ experience.title }}</h3>
            </div>

            <div class="description">
                <p>{{ experience.description }}</p>
            </div>

            <div class="links" v-if="experience.link">
                <a v-bind:href="experience.link" target="blank">{{ experience.downloadName }}</a>
            </div>
        </div>  
            
    </div>
</template>