<script setup>

</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="../assets/styles/css/main.css">
    </head>

    <div class="bio-wrapper">
        <!-- <img class="bio-image" src="../assets/images/no-profile-image.webp"> -->
        <!-- <img class="bio-image" src="/no-profile-image.webp"> -->
        <!-- <img class="bio-image" src="/kel-and-pablo.jpeg"> -->
        <img class="bio-image" src="/kel-profile.jpeg">

        <div class="indent-left">
            <h1>Kelton Lee</h1>
            <h3 class="title">Web Developer</h3>
            <p>"Hi! I'm Kelton. I'm a web developer with a passion for building, exploring, and (inevitably)fixing. I was introduced to programming python in middle school and introduced to Web Development ~2020. since then I began making projects and watching youtube lectures, took a certificate course at Mtec, had an internship at MasterControl, and am now pursuing a college degree at Utah Valley University."</p>
        </div>
    </div>
</template>

<style>

@media only screen and (max-width: 725px) {
.bio-wrapper {
    flex-direction: column;
}

.bio-image {
    width: 100% !important;
}
}

.bio-image {
    width: 50%;
    height: 400px;
    object-fit: cover;
}

.bio-wrapper {
    display: flex;
}
</style>