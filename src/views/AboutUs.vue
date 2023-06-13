<template>
    <article class="col-6 col-s-9" id="content" v-html="$t('aboutus')">
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

</style>