<script setup>

</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="../assets/styles/css/main.css">
    </head>

    <div class="bio-wrapper">
        <!-- <img class="bio-image" src="../assets/images/no-profile-image.webp"> -->
        <img class="bio-image" src="../../public/no-profile-image.webp">


        <div class="indent-left">
            <h1>Kelton Lee</h1>
            <h3 class="title">Web Developer</h3>
            <p>"Experienced web developer with a passion for creating responsive, user-friendly websites. Proficient in HTML, CSS/Scss JavaScript, and a range of JavaScript frameworks. Skilled in optimizing website performance and ensuring cross-browser compatibility. Strong problem-solving abilities and a commitment to staying updated with the latest industry trends. Committed to delivering high-quality web solutions."</p>
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