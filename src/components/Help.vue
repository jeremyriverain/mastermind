<template>
  <div class="text-right fixed-top q-mr-md q-mt-md">
    <q-btn icon="help" flat round outline text-color="primary" @click="showDialog = true" />
      <q-dialog v-model="showDialog">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{$t('rules')}}</div>
          </q-card-section>

          <q-card-section v-if="$i18n.locale === 'en-us'">
            <p>This game is a Mastermind. You have to guess the combination created by the program</p>
            <p>The program already chose the combination, so you can start the game right now!</p>
            <p>It's easy to make a proposition. You can change the colors of each peg by clicking on it. If you click multiple times, the color switches from one to another. When your proposition is ready, click on the button "test combination" and you will obtain a feedback.</p>
            <p>The white badges represents the number of correct pegs, but in the wrong place.</p>
            <p>The black badges represents the number of correct pegs, and in the right place.</p>
            <p>If the game is too easy or too difficult for you, you can override some parameters to adjust the complexity.</p>
          </q-card-section>
          <q-card-section v-else>
            <p>Le but du jeu est de deviner en un minimum de coup la combinaison élaborée par le programme.</p>
            <p>Lorsque vous commencez, le programme a déjà choisi sa combinaison.</p>
            <p>Pour commencer à faire votre proposition de combinaisons, cliquez simplement sur chaque pion. Ceci permet de modifier les couleurs et de passer de l'une à l'autre en cliquant plusieurs fois. Lorsque votre proposition est prête, cliquez sur le bouton "tester la combinaison".</p>
            <p>Les badges blancs révèlent le nombre de pions de la bonne couleur, mais mal placé.</p>
            <p>Les badges noirs révèlent le nombre de pions de la bonne couleur et bien placé.</p>
            <p>Un certain nombre d'options de jeu sont paramétrables pour ajuster la difficulté du jeu: nombre de cases, couleurs, étapes de résolution...</p>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'Help',
  data () {
    return {
      showDialog: false
    }
  },
  mounted () {
    if (!this.$store.state.hasReadRules) {
      this.showDialog = true
      this.$store.commit('mutate', {
        property: 'hasReadRules',
        value: true
      })
    }
  }
}
</script>
