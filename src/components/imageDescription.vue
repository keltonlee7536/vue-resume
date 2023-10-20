<script>
import imageDescriptionJson from '../assets/json/imageDescription.json'

export default {
  data() {
    return{
        imageDescriptionJson : imageDescriptionJson
        }
    }
  }
</script>

<template>
    <!-- <head>
        <link rel="stylesheet" type="text/css" href="../assets/styles/css/main.css">
    </head> -->


    <div class="component-margin center-margin exp-card light-grey-card rounded-corners project-grid" v-for="items in imageDescriptionJson">

        <div class="flex-center">
            <img class="img-fluid" :src="items.imageSrc"/>
        </div>

        <div class="indent-center">
            <div class="title">
                <h3>{{ items.title }}</h3>
            </div>

            <div class="description">
                <p>{{ items.description }}</p>
            </div>
        </div>
            
    </div>
</template>