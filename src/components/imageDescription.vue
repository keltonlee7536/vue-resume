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


    <div class="component-margin center-margin exp-card light-grey-card rounded-corners" v-for="items in imageDescriptionJson">

        <div>
            <img class="icon-margin" :src="items.imageSrc"/>
        </div>

        <div class="indent-center">
            <div class="title">
                {{ items.title }}
            </div>

            <div class="description">
                {{ items.description }}
            </div>
        </div>
            
    </div>
</template>