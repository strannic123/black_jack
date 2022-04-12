<template>
  <div id="app">
    {{ getFullDeck }}
    <hr>

    <div class="dealer">
        <Card :cards="getDealerCards"/>
    </div>

    <div class="player">
      <Card :cards="getPlayerCards"/>
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
  margin-top: 60px;
}

.dealer,
.player {
  display: flex;
}
</style>
