<template>
    <header>
        <router-link to="/" class="navbar-brand" style="cursor:auto">
            <img src="../img/logo.png" height="40" alt="logoipsum" />
        </router-link>
    </header>
</template>    

<style scoped>

header {
    background-color: #ffffff;
    padding: 15px;
    box-shadow: 2px 2px 5px gray;
    position: relative;
    top: 0;
    transition: 0.5s;
    border-radius: 5px;
}

header img {
    left: 50%;
    transform: translate(-50%);
    position: relative;
}


@media only screen and (max-width: 380px){
    header img {
        left: auto;
        transform: translate(0);
        width: 200px;
        height: auto;
    }
}
</style>