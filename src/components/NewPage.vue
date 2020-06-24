<template>
  <ion-page>
    <ion-header>

      <ion-toolbar class="toolbar-md-primary">
        <ion-title>NewPage</ion-title>
      </ion-toolbar>

    </ion-header>
    <ion-content>
        <ion-card>
            <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" alt="">
            <ion-card-header>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </ion-card-content>
        </ion-card>

        <ion-card>
            <ion-item>
            <ion-avatar name="pin" slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
            </ion-avatar>
            <ion-label>ion-item in a card, icon left, button right</ion-label>
            <ion-button fill="outline" slot="end">View</ion-button>
            </ion-item>

            <ion-card-content>
            This is content, without any paragraph or header tags,
            within an ion-card-content element.
            </ion-card-content>
        </ion-card>

        <ion-card>
            <ion-item href="#" class="ion-activated">
            <ion-icon name="wifi" slot="start"></ion-icon>
            <ion-label>Card Link Item 1 activated</ion-label>
            .0


            .0
            <div class="">0</div>
            </ion-item>

            <ion-item href="#">
            <ion-icon name="wine" slot="start"></ion-icon>
            <ion-label>Card Link Item 2</ion-label>
            </ion-item>

            <ion-item class="ion-activated">
            <ion-icon name="warning" slot="start"></ion-icon>
            <ion-label>Card Button Item 1 activated</ion-label>
            </ion-item>

            <ion-item>
            <ion-icon name="walk" slot="start"></ion-icon>
            <ion-label>Card Button Item 2</ion-label>
            </ion-item>
        </ion-card>
    </ion-content>
  </ion-page>
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>