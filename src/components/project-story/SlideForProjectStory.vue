<template>
  <ion-card class="project-slide">
    <div class="project-slide__image-container">
      <img v-if="image" class="project-slide__image" :src="image.url" :alt="image.alt">
    </div>
    <ion-card-header>
      <ion-card-subtitle v-if="subtitle">{{ subtitle }}</ion-card-subtitle>
      <ion-card-title v-if="title">{{ title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content class="project-slide__content"><p v-html="content"></p></ion-card-content>
  </ion-card>
</template>

<script>
  export default {
    props: {
      image: {
        type: Object,
        default: ()=>{return{}},
      },
      subtitle: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      content: {
        type: String,
        default: null
      }
    },
  }
</script>

<style lang="scss" scoped>
@include block("project-slide") {
  @include element("image-container") {
    width: 100%;
  }
  @include element("image") {
    width: 100%;
  }
  @include element("content") {
    white-space: pre-line;
  }
}
</style>