<template>
    <header>
        <router-link to="/" class="navbar-brand" style="cursor:auto">
            <img src="../img/logo.png" height="40" alt="logoipsum" />
        </router-link>
    </header>
</template>    

<style scoped>
.penis {
    position: sticky;
    top: 0;
}

header {
    background-color: #ffffff;
    padding: 15px;
    box-shadow: 2px 2px 5px gray;
    position: sticky;
    top: 0;
    transition: 0.5s;
    border-radius: 5px;

}

header img {
    left: 50%;
    transform: translate(-50%);
    position: relative;
}
</style>