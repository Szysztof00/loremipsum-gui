<template>
    <div class="dropdown">
        <div class="projects">
            <button><img src="../img/languageSwitcher.png" alt="LanguageSwitcher"></button>
         <ul>
        <li v-for="sLocale in supportedLocales" @click.prevent="switchLanguage({ sLocale })">
            <a>{{sLocale.toUpperCase()}}</a>
        </li>
    </ul>
</div>
</div>
</template>

<script>
    import { useI18n } from 'vue-i18n'
    import Tr from "@/i18n/translation"
    import { useRouter } from "vue-router"

    export default {
        setup() {
            const { t, locale } = useI18n()
            const supportedLocales = Tr.supportedLocales

            const router = useRouter()

            const switchLanguage = async (LanguageTag) => {
                const newLocale = LanguageTag.sLocale;
                await Tr.switchLanguage(newLocale) // poczytaj jak działa await

                try {
                    await router.replace({params: {locale: newLocale}}) // zamiana w index.js od routera lokalizacji 
                } catch(e) {
                    console.error(e)
                    router.push("/")
                }
            }
            return { t, locale, supportedLocales, switchLanguage }
        },
        
    }

</script>

<style scoped>


.dropdown {
    width:40px;
    height: 40px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
}

.projects {
    position: absolute;
    top:25px;
    right: 25px;
}

.projects ul {
    margin-top: 10px;
    position: absolute;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background: white;
    left: 0px;
    list-style: none;
    border-radius: 5px;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.4s ease;
    border: 1px solid black;
    cursor: pointer;
    z-index: 100;  
    padding: 10px;

}


.projects li {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.25s;
}

.projects li:hover {
    background-color: #c5c9ce;
}

.projects a {
    color: black;
    text-decoration: none;
}

.dropdown button {
    background: none;
    text-decoration: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
}

.projects>button>img {
    width: 40px;
}

.projects button:focus + ul {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0px);
}

</style>

