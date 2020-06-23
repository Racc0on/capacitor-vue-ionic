<template>
  <ion-app>
    <ion-vue-router />
  </ion-app>
</template>

<style src='@ionic/core/css/core.css'></style>
<style src='@ionic/core/css/ionic.bundle.css'></style>
<script>
export default {
  name: "App"
};
</script>

<style>
:root {
  --ion-background-color: rgba(0, 0, 0,.2);
  --ion-toolbar-background: rgba(255,255,255,1);
  --ion-item-background: rgba(255,255,255,1);
}
ion-navbar.toolbar.toolbar-ios.statusbar-padding,
ion-navbar.toolbar-ios ion-title.title-ios,
ion-toolbar.toolbar.toolbar-ios.statusbar-padding,
ion-toolbar.toolbar-ios ion-title.title-ios {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
</style>
