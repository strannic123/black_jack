<template>
  <div id="app">
    <div class="wrapper">
      <h1 class="header">Black Jack</h1>
      <div class="gameField">
        <div class="dealer">
          <Card :cards="getDealerCards"/>
        </div>

        <div class="player">

          <Card :cards="getPlayerCards"/>
        </div>
      </div>
      <div class="buttons">
        <h3>Компонент с кнопками</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card";
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      firstTreeCard: false
    }
  },
  components: {
    Card
  },
  computed: {
    ...mapGetters([
      'getFullDeck', {getFullDeck: 'getFullDeck'},
      'getDeckIdForSet', {getDeckIdForSet: 'getDeckIdForSet'},
      'getDeckId', {getDeckId: 'getDeckId'},
      'getDealerCards', {getDealerCards: 'getDealerCards'},
      'getPlayerCards', {getPlayerCards: 'getPlayerCards'}
    ]),



  },
  async created() {
    await this.$store.dispatch('fullDeckCard')
    await this.$store.dispatch('saveIdDeck')
    await this.$store.dispatch('getFirstThreeCardForStart')


  },
  mounted() {

  },
  methods: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.gameField {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex: 1 1 auto;
}

.dealer,
.player {

}
</style>
