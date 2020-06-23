<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Project Story</ion-title>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content padding class="project-page">
        <div class="project-page__blur-background"></div>
        <swiper ref="slider" :options="slideOpts" class="project-page__slider">
          <swiper-slide v-for="(slide, index) in slides" :key="`${index}`" class="col-12">
            <slide
              :image="slide.image"
              :subtitle="slide.subtitle"
              :title="slide.title"
              :content="slide.content">
            </slide>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </ion-content>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import 'swiper/dist/css/swiper.css';
  import Slide from "@/components/project-story/SlideForProjectStory.vue";
  import { mapGetters, mapActions } from "vuex";
  export default {
    components: {
      swiper,
      swiperSlide,
      Slide
    },
    data() {
      return {
        slideOpts: {
          slidesPerView: 1,
          init: false,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    computed: {
      ...mapGetters(["pageData"]),
      pageHasData() {
        return this.pageData && this.pageData.length
      },
      slides() {
        if (this.pageHasData) {
          return this.pageData[0].data.slides
        }
        return {}
      },
      swiper() {
        return this.$refs.slider.swiper;
      }
    },
    methods: {
      ...mapActions(["getPageData"])
    },
    mounted() {
      console.log(this.swiper);
      this.getPageData("project-story").then(res=>{
        this.swiper.init();
      });
    },
  }
</script>

<style lang="scss" scoped>
@include block("project-page") {
  position: relative;
  @include element("blur-background") {
    // position: relative;
    // background-image: url('https://www.occhio.de/web/sites/default/files/2019-09/Mito_volo_Anzeige_header_0.png');
    // filter: blur(4px);
    // height: 100%;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
  }
  @include element("slider") {
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // z-index: 2;
    // width: 100%;
    max-width: 950px;
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #000;
  }
}

</style>