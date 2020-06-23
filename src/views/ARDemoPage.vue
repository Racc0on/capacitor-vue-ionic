<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Quick AR Demo</ion-title>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content padding class="quick-ar-page">
      <ion-card class="quick-ar-card">
        <a :href="data.arFile" rel="ar">
          <img v-if="data.image" class="quick-ar-card__image" :src="data.image.url" :alt="data.image.alt">
        </a>
        <ion-card-header>
          <ion-card-subtitle>{{ data.family }}</ion-card-subtitle>
          <ion-card-title>{{ data.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content class="quick-ar-card__content">{{ data.content }}</ion-card-content>
      </ion-card>
    </ion-content>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    computed: {
      ...mapGetters(["pageData"]),
      pageHasData() {
        return this.pageData && this.pageData.length
      },
      data() {
        if (this.pageHasData) {
          return this.pageData[0].data;
        }
        return {}
      }
    },
    methods: {
      ...mapActions(["getPageData"])
    },
    mounted() {
      this.getPageData("demo-quick-ar").then(res=>{
        console.log(res,this.pageData);
      });
    },
  }
</script>

<style lang="scss" scoped>
@include block("quick-ar-card") {
  max-width: 300px;
}
</style>