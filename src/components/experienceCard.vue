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

        <div><!--had dark-grey-card class-->
            <img class="icon icon-margin rounded-corners dark-grey-card" :src="experience.iconPath"/>
        </div>

        <div class="indent-left">
            <div class="title"><!--give it the icon margin, 20px all around-->
                {{ experience.title }}
            </div>

            <div class="description">
                {{ experience.description }}
            </div>
        </div>
            
    </div>
</template>