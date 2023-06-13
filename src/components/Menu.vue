<template>
    <nav class="col-3 col-s-3 menu">
        <ul>
            <router-link :to="Tr.i18nRoute({name: 'app' })"  class="menu">
                <li>
                    {{$t('menu.homepage')}}
                </li>
            </router-link>
            <router-link :to="Tr.i18nRoute({name: 'AboutUs' })" class="menu">
                <li>
                    {{$t('menu.aboutus')}}
                </li>
            </router-link>
            <router-link :to="Tr.i18nRoute({name: 'Contact' })"  class="menu">
                <li>
                    {{$t('menu.contact')}}
                </li>
            </router-link>
            <router-link :to="Tr.i18nRoute({name: 'TaskList' })"  class="menu">
                <li>
                    {{$t('menu.tasklist')}}
                </li>
            </router-link>

        </ul>
    </nav>

    <LanguageSwitcher/>


</template>

<script>
import Tr from "@/i18n/translation"
import LanguageSwitcher from '../components/LanguageSwitcher.vue';

export default {
  setup() {
    return {Tr}
  },
  components:{
        LanguageSwitcher
    }
};


</script>

