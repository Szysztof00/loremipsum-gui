<template>
    <article class="col-6 col-s-9" v-html="$t('homepage')"> 
        

</article>
</template>

<script>
import Tr from "@/i18n/translation";

export default {
  setup() {
    return { Tr }
  }
};
</script>

<style scoped>
:deep(p){
    padding-bottom: 10px;
}

:deep(.right){
    text-align: right;
}

:deep(li){
    padding-bottom: 5px;
}

</style>