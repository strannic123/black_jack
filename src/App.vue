<template>
  <div id="app">
    {{ getFullDeck }}
    <hr>
    <!--    <button @click="clickBtn" >Click</button>-->

    <hr>
    <div class="dealer">
      DEALER:{{getDealerCards}}
      <div class="card" v-for="card in getDealerCards" :key="card.code">
        <img :src="`${card.images.svg}`" alt="`${card.value} ${card.suit}`">

      </div>
    </div>
    <div class="player">
      PLAYER:{{getPlayerCards}}
      <div class="card" v-for="card in getPlayerCards" :key="card.code">
        <img :src="`${card.images.svg}`" alt="`${card.value} ${card.suit}`">

      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      firstTreeCard: false
    }
  },
  components: {},
  computed: {
    ...mapGetters([
      'getFullDeck', {getFullDeck: 'getFullDeck'},
      'getDeckIdForSet', {getDeckIdForSet: 'getDeckIdForSet'},
      'getDeckId', {getDeckId: 'getDeckId'},
      'getPlayerCards', {getPlayerCards: 'getPlayerCards'},
      'getDealerCards', {getDealerCards: 'getDealerCards'}
    ]),

  },
  async created() {
    await this.$store.dispatch('fullDeckCard')
    await this.$store.dispatch('saveIdDeck')
    if (!this.firstTreeCard) {
      await this.$store.dispatch('getFirstThreeCardForStart')
      this.firstTreeCard = true
    }
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
</style>
