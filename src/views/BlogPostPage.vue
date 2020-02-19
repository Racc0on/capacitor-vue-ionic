<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title v-if="cmsData">{{ cmsData.title }}</ion-title>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <template v-if="cmsData">
        <ion-list v-if="cmsData.paragraphs">
          <ion-item v-for="(p, index) in cmsData.paragraphs" :key="`paragraph_${index}`">
            <ion-label><span>{{ p }}</span></ion-label>
          </ion-item>
        </ion-list>
      </template>
    </ion-content>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    data() {
      return {
        cmsData: null
      }
    },
    methods: {
      ...mapActions(["getParagraphsFromCMS"]),
    },
    mounted () {

      this.getParagraphsFromCMS("378").then(res=>{
        /* eslint no-console: ["error", {allow: ["log"]}] */
        console.log(res);
        this.cmsData = res.data;
        });
    }
  }
</script>

<style lang="scss" scoped>

</style>