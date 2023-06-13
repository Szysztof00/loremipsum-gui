<template>
     <div class="col-3 col-s-12" v-html="$t('aside')">
        </div>
</template>

<script>
import Tr from "@/i18n/translation";

export default {
  setup() {
    return { Tr }
  }
};
</script>