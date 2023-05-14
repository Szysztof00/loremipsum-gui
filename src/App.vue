<template>
  <Header/>
  <Menu/>
  <router-view />
  <Aside/>
  <Footer/>
  
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Aside from './components/aside.vue';
export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Menu,
    Aside,
  }
}
</script>

